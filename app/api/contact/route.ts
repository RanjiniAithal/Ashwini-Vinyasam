import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  "name",
  "email",
  "message",
];

const DEFAULT_RECIPIENT = "ashwini.aithal20@gmail.com";

const buildAuth = (): SMTPTransport.Options["auth"] | undefined => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    };
  }

  return undefined;
};

const resolveTransportConfig = (): SMTPTransport.Options => {
  const auth = buildAuth();

  if (process.env.EMAIL_SERVICE) {
    return {
      service: process.env.EMAIL_SERVICE,
      auth,
    };
  }

  if (!process.env.EMAIL_HOST) {
    throw new Error(
      "Email transport is not configured. Set EMAIL_SERVICE or EMAIL_HOST environment variables.",
    );
  }

  return {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587,
    secure: process.env.EMAIL_SECURE === "true",
    auth,
  };
};

const sanitize = (value: string) => value.replace(/\r|\n/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;

    for (const field of REQUIRED_FIELDS) {
      const value = payload[field];
      if (!value || typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    const { name, email, subject = "", message } = payload as ContactPayload;

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeSubject = subject ? sanitize(subject) : "";
    const safeMessage = message.trim();
    const htmlName = escapeHtml(safeName);
    const htmlEmail = escapeHtml(safeEmail);
    const htmlSubject = escapeHtml(safeSubject || "General Inquiry");
    const htmlMessage = escapeHtml(safeMessage || "No message provided.").replace(/\n/g, "<br>");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <div style="padding: 24px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="margin: 0 0 16px; font-size: 20px; color: #111827;">New Contact Form Message</h2>
          <p style="margin: 0 0 16px;">You have received a new enquiry from the Ashwini Vinyasam website.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 0 0 24px;">
            <tbody>
              <tr>
                <td style="padding: 8px 12px; width: 140px; color: #6b7280;">Name</td>
                <td style="padding: 8px 12px;">${htmlName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; color: #6b7280;">Email</td>
                <td style="padding: 8px 12px;"><a href="mailto:${htmlEmail}" style="color: #2563eb; text-decoration: none;">${htmlEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; color: #6b7280;">Subject</td>
                <td style="padding: 8px 12px;">${htmlSubject}</td>
              </tr>
            </tbody>
          </table>
          <div style="padding: 16px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 8px; font-weight: 600;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${htmlMessage}</p>
          </div>
        </div>
        <p style="margin: 16px 0 0; font-size: 12px; color: #9ca3af;">This notification was generated automatically by the Ashwini Vinyasam contact form.</p>
      </div>
    `;

    const transporter = nodemailer.createTransport(resolveTransportConfig());

    await transporter.sendMail({
      to: process.env.CONTACT_RECIPIENT ?? DEFAULT_RECIPIENT,
      from:
        process.env.EMAIL_FROM ??
        process.env.EMAIL_USER ??
        "no-reply@ashwinivinyasam.com",
      replyTo: safeEmail,
      subject: subject
        ? `[Ashwini Vinyasam Contact] ${safeSubject}`
        : "New Contact Form Submission",
      text: [
        "You have received a new message from the Ashwini Vinyasam website.",
        "",
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Subject: ${safeSubject || "General Inquiry"}`,
        "",
        "Message:",
        safeMessage || "No message provided.",
      ].join("\n"),
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form handler failed", error);
    const message =
      process.env.NODE_ENV !== "production" && error instanceof Error
        ? error.message
        : "Unable to send your message right now. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
