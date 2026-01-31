// lib/email.ts
// Email utility using Nodemailer with Gmail SMTP

import nodemailer from 'nodemailer';

// Create transporter with your Gmail SMTP settings
const transporter = nodemailer.createTransport({ // ← Fixed: createTransport (not createTransporter)
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify transporter on startup
transporter.verify(function (error: Error | null, success: boolean) { // ← Fixed: Added types
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

interface SendEmailParams {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  from = process.env.EMAIL_FROM || process.env.SMTP_USER,
}: SendEmailParams) {
  try {
    const info = await transporter.sendMail({
      from: `"Ahtsham WebMentor" <${from}>`, // sender address with name
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML as fallback
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, data: info };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { success: false, error };
  }
}

// Send multiple emails
export async function sendBatchEmails(emails: SendEmailParams[]) {
  const results = await Promise.allSettled(
    emails.map((email) => sendEmail(email))
  );

  const successful = results.filter((r) => r.status === 'fulfilled').length;
  const failed = results.filter((r) => r.status === 'rejected').length;

  console.log(`📧 Batch email results: ${successful} sent, ${failed} failed`);

  return results;
}

// Test email function
export async function sendTestEmail(toEmail: string) {
  return sendEmail({
    to: toEmail,
    subject: '✅ Test Email from Your Review System',
    html: `
      <h2>Email System Working!</h2>
      <p>This is a test email from your review system.</p>
      <p><strong>Configuration:</strong></p>
      <ul>
        <li>SMTP Host: ${process.env.SMTP_HOST}</li>
        <li>SMTP Port: ${process.env.SMTP_PORT}</li>
        <li>From: ${process.env.EMAIL_FROM}</li>
      </ul>
      <p>If you received this, your email system is working correctly! 🎉</p>
    `,
  });
}

// Export for testing
export { transporter };