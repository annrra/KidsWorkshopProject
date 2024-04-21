import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
require('dotenv').config();


export async function POST(request: NextRequest) {
  const username = process.env.EMAIL_USER;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASS
    }
  });

  try {
    const mailOptions: any = {
      from: username,
      to: recipientEmail,
    };
  
    if (email) {
      mailOptions.replyTo = email;
    }

    mailOptions.subject = `Sharenoto Party Contact Form Submission`;
    mailOptions.html = `
      <p>Name: ${name} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>
    `;

    const mail = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Благодарим! Съобщението беше изпратено успешно. Ще се свържем с вас скоро." });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Съобщението не беше изпратено. Моля опитайте отново." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

}