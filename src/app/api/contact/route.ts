import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate
    if (!body.name || !body.email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
      );
    }

    // 1️⃣ Save to database
    const message = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone,
        projectType: body.projectType,
        webDevType: body.webDevType,
        budget: body.budget,
        timeline: body.timeline,
        description: body.description,
      },
    });

    // 2️⃣ Setup email transport (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3️⃣ Email → Admin notification
    await transporter.sendMail({
      from: `"Ahtsham Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${body.company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${body.projectType || "N/A"}</p>
        <p><strong>Web Dev Type:</strong> ${body.webDevType || "N/A"}</p>
        <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${body.timeline || "N/A"}</p>
        <p><strong>Description:</strong> ${body.description || "N/A"}</p>
        <p><strong>Submitted At:</strong> ${message.createdAt}</p>
      `,
    });

    // 4️⃣ Email → User auto-reply
    await transporter.sendMail({
      from: `"Ahtsham" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: "We Received Your Message — Thank You!",
      html: `
        <h2>Hello ${body.name},</h2>
        <p>Thank you for contacting me. I have received your message and will respond shortly.</p>

        <h3>Your Submission:</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${body.company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${body.projectType || "N/A"}</p>
        <p><strong>Web Dev Type:</strong> ${body.webDevType || "N/A"}</p>
        <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${body.timeline || "N/A"}</p>
        <p><strong>Description:</strong> ${body.description || "N/A"}</p>

        <br />
        <p>Best regards,<br/>Ahtsham</p>
      `,
    });

    return NextResponse.json({
      message: "Message stored and emails sent!",
      data: message,
    });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
