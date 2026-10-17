import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "./prompt";

// Simple per-IP limit (in-memory: resets on cold start, fine for a portfolio).
const hits = new Map<string, { count: number; start: number }>();
const LIMIT = 40;
const WINDOW = 10 * 60 * 1000;

type Msg = { role: "user" | "assistant"; content: string };

function clean(input: unknown): Msg[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((m): m is { role: string; content: string } => !!m && typeof m.content === "string" && typeof m.role === "string")
    .map((m) => ({ role: (m.role === "assistant" ? "assistant" : "user") as Msg["role"], content: m.content.slice(0, 600) }))
    .slice(-8);
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    const now = Date.now();
    const h = hits.get(ip);
    if (h && now - h.start < WINDOW) {
      if (h.count >= LIMIT) {
        return NextResponse.json({ response: "whoa slow down there! u hit the rate limit ngl. try again in a bit." }, { status: 429 });
      }
      h.count++;
    } else {
      hits.set(ip, { count: 1, start: now });
    }

    const key = process.env.OPENROUTER_API_KEY;
    if (!key) {
      return NextResponse.json({ response: "my brain isn't plugged in rn tbh. email hello@prodhosh.me and he'll reply!" }, { status: 503 });
    }

    const body = await req.json().catch(() => ({}));
    const messages = clean(body.messages);
    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return NextResponse.json({ response: "say something first lol" }, { status: 400 });
    }

    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 20000);
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      signal: ctl.signal,
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 180,
      }),
    }).finally(() => clearTimeout(timer));

    const data = await r.json();
    const text: string | undefined = data?.choices?.[0]?.message?.content;
    if (!r.ok || !text) throw new Error(`OpenRouter ${r.status}`);
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("askPro chat error:", error);
    return NextResponse.json({ response: "my ai brain is a bit fried right now tbh. try again in a sec, or email hello@prodhosh.me" }, { status: 500 });
  }
}
