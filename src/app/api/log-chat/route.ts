import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Emails the finished chat to the site owner over Gmail SMTP.
// Needs EMAIL_USER (your Gmail) and EMAIL_PASS (a Google *App Password*, not your normal password).
// Optional: CHAT_LOG_TO to send the transcript somewhere other than EMAIL_USER.

type Item = { sender: "user" | "bot"; text: string; isAi?: boolean };

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");

export async function POST(req: Request) {
  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (!user || !pass) {
      return NextResponse.json({ success: false, error: "Mail is not configured" }, { status: 500 });
    }

    // sendBeacon posts as text/plain, fetch as JSON: read the body as text and parse it ourselves.
    const raw = await req.text();
    const parsed = JSON.parse(raw || "{}") as { messages?: Item[] };
    const messages = (Array.isArray(parsed.messages) ? parsed.messages : [])
      .filter((m) => m && (m.sender === "user" || m.sender === "bot") && typeof m.text === "string")
      .slice(-60)
      .map((m) => ({ sender: m.sender, text: m.text.slice(0, 1000), isAi: !!m.isAi }));

    if (!messages.some((m) => m.sender === "user")) {
      return NextResponse.json({ success: true, skipped: true });
    }

    const bots = messages.filter((m) => m.sender === "bot");
    const ai = bots.filter((m) => m.isAi).length;

    const rows = messages
      .map(
        (m) => `<div style="margin:8px 0;padding:10px 14px;border-radius:14px;background:${m.sender === "user" ? "#0b0b0b" : "#fff1e8"};color:${m.sender === "user" ? "#fdf8f5" : "#0b0b0b"}">
          <div style="font:700 11px Arial;text-transform:uppercase;opacity:.6;margin-bottom:4px">${m.sender === "user" ? "visitor" : "askPro"}</div>
          <div style="font:14px/1.45 Arial">${esc(m.text)}</div></div>`,
      )
      .join("");

    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: user,
      to: process.env.CHAT_LOG_TO || user,
      subject: `askPro chat · ${messages.length} messages · ${ai} AI replies`,
      html: `<div style="font-family:Arial;max-width:600px;padding:20px;border:1px solid #eee;border-radius:16px">
        <h2 style="margin:0 0 4px;color:#ff5400">askPro session</h2>
        <p style="margin:0 0 14px;color:#666;font-size:13px">A visitor chatted on your portfolio.</p>${rows}
        <p style="color:#999;font-size:12px;text-align:center;margin-top:24px">Sent automatically by your portfolio backend.</p></div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("log-chat error:", error);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
