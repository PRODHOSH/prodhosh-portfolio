import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { question, answer, isAi } = await req.json();

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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'prodhoshlaptop@gmail.com',
      subject: `🤖 New askPro Chat: ${question.substring(0, 30)}...`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #10b981; margin-top: 0;">askPro Analytics</h2>
          <p style="color: #666; font-size: 14px;">A user just interacted with the chatbot.</p>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px;">
            <p style="margin: 0; color: #888; font-size: 12px; font-weight: bold; text-transform: uppercase;">User Asked:</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">${question}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #10b981; font-size: 12px; font-weight: bold; text-transform: uppercase;">Bot Answered (${isAi ? 'OpenRouter AI' : 'Hardcoded Rules'}):</p>
            <p style="margin: 5px 0 0 0; font-size: 16px; color: #065f46;">${answer}</p>
          </div>
          
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
