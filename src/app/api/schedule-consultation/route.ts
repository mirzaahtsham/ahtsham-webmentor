import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Configure your Google OAuth2 credentials
// You'll need to set these in your environment variables
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Set your refresh token (obtained from OAuth2 flow)
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      serviceId,
      serviceName,
      name,
      email,
      phone,
      date,
      time,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !date || !time || !serviceName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Combine date and time into ISO format
    const dateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(dateTime.getTime() + 60 * 60 * 1000); // 1 hour duration

    // Create the calendar event
    const event = {
      summary: `Consultation: ${serviceName}`,
      description: `
Consultation Request Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Service: ${serviceName}
👤 Client Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
💬 Message: ${message || 'No additional message'}

Service ID: ${serviceId}
      `.trim(),
      start: {
        dateTime: dateTime.toISOString(),
        timeZone: 'UTC', // Change to your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'UTC', // Change to your timezone
      },
      attendees: [
        { email: email }, // Client email
        { email: process.env.BUSINESS_EMAIL || 'info@ahtsham.me' }, // Your business email
      ],
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    };

    // Insert the event into Google Calendar
    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all', // Send email to all attendees
    });

    // Extract the Google Meet link
    const meetLink = response.data.conferenceData?.entryPoints?.find(
      (entry) => entry.entryPointType === 'video'
    )?.uri;

    // Optionally: Send to your database
    // await saveConsultationToDatabase({
    //   serviceId,
    //   serviceName,
    //   name,
    //   email,
    //   phone,
    //   date,
    //   time,
    //   message,
    //   calendarEventId: response.data.id,
    //   meetLink,
    // });

    // Optionally: Send email notification using a service like SendGrid, Resend, etc.
    // await sendEmailNotification({
    //   to: email,
    //   subject: `Consultation Scheduled: ${serviceName}`,
    //   text: `Your consultation has been scheduled for ${date} at ${time}. Google Meet link: ${meetLink}`,
    // });

    return NextResponse.json({
      success: true,
      message: 'Consultation scheduled successfully',
      eventId: response.data.id,
      meetLink: meetLink,
      htmlLink: response.data.htmlLink,
    });
  } catch (error) {
    console.error('Error scheduling consultation:', error);
    return NextResponse.json(
      {
        error: 'Failed to schedule consultation',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}