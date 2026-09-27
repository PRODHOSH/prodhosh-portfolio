import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Nodemailer is not configured in .env.local");
      return NextResponse.json({ success: false, error: "Not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const botMessages = messages.filter((m: any) => m.sender === 'bot');
    const aiCount = botMessages.filter((m: any) => m.isAi).length;
    const hardcodedCount = botMessages.length - aiCount;
    const aiPercentage = botMessages.length > 0 ? Math.round((aiCount / botMessages.length) * 100) : 0;

    const formattedMessages = messages.map((m: any) => `
      <div style="margin: 10px 0; padding: 10px; background: ${m.sender === 'user' ? '#f9f9f9' : '#ecfdf5'}; border-radius: 8px;">
        <p style="margin: 0; color: ${m.sender === 'user' ? '#888' : '#10b981'}; font-size: 12px; font-weight: bold; text-transform: uppercase;">
          ${m.sender} ${m.sender === 'bot' ? (m.isAi ? '🤖 (AI)' : '⚡ (Rules)') : ''}:
        </p>
        <p style="margin: 5px 0 0 0; font-size: 14px; color: ${m.sender === 'user' ? '#333' : '#065f46'};">${m.text}</p>
      </div>
    `).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'prodhoshlaptop@gmail.com',
      subject: `🤖 askPro Chat Session (Length: ${messages.length} | AI Usage: ${aiPercentage}%)`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #10b981; margin-top: 0;">askPro Analytics: Full Session</h2>
          <p style="color: #666; font-size: 14px;">A user has completed a conversation with the chatbot.</p>
          
          <div style="margin: 20px 0; padding: 15px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #92400e; font-weight: bold;">📊 Session Stats</p>
            <p style="margin: 5px 0; font-size: 18px; color: #b45309;">
              <strong>${aiPercentage}% AI Usage</strong>
            </p>
            <p style="margin: 0; font-size: 12px; color: #d97706;">
              (${aiCount} AI responses, ${hardcodedCount} Hardcoded responses)
            </p>
          </div>

          ${formattedMessages}
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            Sent automatically by your portfolio backend.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
