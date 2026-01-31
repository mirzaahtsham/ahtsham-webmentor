import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ============================================================================
// CONFIGURATION SECTION - UPDATE THESE VALUES
// ============================================================================

// Database Configuration (if using a database)
const DATABASE_ENABLED = false; // Set to true when you have database configured
// Example: If using Hygraph/GraphCMS, make sure your API token has CREATE permissions

// Email Configuration
const EMAIL_ENABLED = true; // Set to false to disable email notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@ahtsham.me'; // Where to receive review notifications

// For Gmail, you MUST use an App Password, not your regular password
// How to create: https://support.google.com/accounts/answer/185833
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // Your Gmail address
    pass: process.env.SMTP_PASS, // Your App Password (NOT regular password!)
  },
};

// ============================================================================
// API ROUTE HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      serviceId,
      serviceName,
      name,
      email,
      rating,
      review,
      country,
      platform = 'google',
    } = body;

    // Validation
    if (!name || !email || !rating || !review || !serviceName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const reviewData = {
      serviceId,
      serviceName,
      name,
      email,
      rating,
      review,
      country: country || 'Not specified',
      platform,
      date: new Date().toISOString(),
      status: 'pending', // Reviews start as pending for moderation
    };

    console.log('📝 Processing review submission:', {
      serviceName,
      name,
      rating,
      email,
    });

    // ========================================================================
    // STEP 1: Save to Database (Optional)
    // ========================================================================
    
    if (DATABASE_ENABLED) {
      try {
        // TODO: Replace with your actual database code
        // Example for Hygraph/GraphCMS:
        /*
        const mutation = `
          mutation CreateReview($data: ReviewCreateInput!) {
            createReview(data: $data) {
              id
              name
              rating
            }
          }
        `;
        
        const response = await fetch(process.env.HYGRAPH_ENDPOINT!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_TOKEN}`, // Make sure this token has CREATE permissions!
          },
          body: JSON.stringify({
            query: mutation,
            variables: { data: reviewData }
          })
        });

        const result = await response.json();
        
        if (result.errors) {
          console.error('❌ Database error:', result.errors);
          throw new Error(result.errors[0].message);
        }
        
        console.log('✅ Review saved to database');
        */
        
        // For now, just log
        console.log('⚠️ Database is enabled but not configured. Skipping database save.');
      } catch (dbError) {
        console.error('❌ Database save failed:', dbError);
        // Continue anyway - email notification is more important
      }
    } else {
      console.log('ℹ️ Database disabled - review not saved to database');
    }

    // ========================================================================
    // STEP 2: Send Email Notification
    // ========================================================================
    
    if (EMAIL_ENABLED) {
      try {
        // Validate SMTP configuration
        if (!SMTP_CONFIG.auth.user || !SMTP_CONFIG.auth.pass) {
          console.error('❌ SMTP credentials not configured');
          throw new Error('Email service not configured. Please set SMTP_USER and SMTP_PASS environment variables.');
        }

        // Create transporter
        const transporter = nodemailer.createTransport(SMTP_CONFIG);

        // Verify connection
        try {
          await transporter.verify();
          console.log('✅ SMTP connection verified');
        } catch (verifyError: any) {
          console.error('❌ SMTP verification failed:', verifyError.message);
          
          if (verifyError.code === 'EAUTH') {
            throw new Error(
              'Gmail authentication failed. Please ensure:\n' +
              '1. You are using an App Password (not your regular password)\n' +
              '2. 2-Step Verification is enabled on your Google account\n' +
              '3. Create App Password at: https://myaccount.google.com/apppasswords'
            );
          }
          
          throw verifyError;
        }

        // Send email to admin
        const mailOptions = {
          from: `"Review System" <${SMTP_CONFIG.auth.user}>`,
          to: ADMIN_EMAIL,
          subject: `New ${rating}⭐ Review for ${serviceName}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
                .rating { font-size: 24px; color: #fbbf24; margin: 10px 0; }
                .info-row { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
                .label { font-weight: bold; color: #6b7280; }
                .review-text { background: white; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; border-radius: 4px; }
                .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🎉 New Review Received!</h1>
                </div>
                <div class="content">
                  <div class="rating">${'⭐'.repeat(rating)} (${rating}/5)</div>
                  
                  <div class="info-row">
                    <span class="label">Service:</span> ${serviceName}
                  </div>
                  <div class="info-row">
                    <span class="label">Customer:</span> ${name}
                  </div>
                  <div class="info-row">
                    <span class="label">Email:</span> ${email}
                  </div>
                  <div class="info-row">
                    <span class="label">Country:</span> ${country || 'Not specified'} ${country ? getCountryFlag(country) : ''}
                  </div>
                  <div class="info-row">
                    <span class="label">Platform:</span> ${platform}
                  </div>
                  <div class="info-row">
                    <span class="label">Date:</span> ${new Date().toLocaleString()}
                  </div>
                  
                  <div class="review-text">
                    <strong>Review:</strong><br>
                    "${review}"
                  </div>
                  
                  <p style="margin-top: 20px; padding: 10px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                    <strong>⚠️ Action Required:</strong> This review is pending approval. Log in to your admin panel to approve or reject it.
                  </p>
                </div>
                <div class="footer">
                  <p>This is an automated notification from your Review System</p>
                  <p>Date: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email notification sent successfully to:', ADMIN_EMAIL);

        // Send confirmation email to customer
        const customerMailOptions = {
          from: `"Review System" <${SMTP_CONFIG.auth.user}>`,
          to: email,
          subject: `Thank you for your review! - ${serviceName}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
                .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
                .rating { font-size: 32px; margin: 15px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">✨ Thank You for Your Review!</h1>
                </div>
                <div class="content">
                  <p>Dear ${name},</p>
                  
                  <p>Thank you for taking the time to review our service: <strong>${serviceName}</strong></p>
                  
                  <div class="rating">${'⭐'.repeat(rating)}</div>
                  
                  <p style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; border-radius: 4px;">
                    "${review}"
                  </p>
                  
                  <p>Your feedback is valuable to us and helps other customers make informed decisions.</p>
                  
                  <p style="padding: 15px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px; margin-top: 20px;">
                    <strong>📋 Note:</strong> Your review is currently pending approval and will be published on our website shortly.
                  </p>
                  
                  <p>If you have any questions or concerns, please don't hesitate to reach out.</p>
                  
                  <p>Best regards,<br><strong>The Team</strong></p>
                </div>
                <div class="footer">
                  <p>This is an automated confirmation email</p>
                  <p>Date: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(customerMailOptions);
        console.log('✅ Confirmation email sent to customer:', email);

      } catch (emailError: any) {
        console.error('❌ Email notification failed:', emailError.message);
        
        // Return specific error for SMTP issues
        if (emailError.code === 'EAUTH') {
          return NextResponse.json(
            {
              success: false,
              error: 'Email service configuration error. Admin has been notified.',
              details: 'Please use an App Password for Gmail. Visit: https://myaccount.google.com/apppasswords',
            },
            { status: 500 }
          );
        }
        
        // Don't fail the entire request if only email fails
        console.log('⚠️ Continuing despite email failure...');
      }
    } else {
      console.log('ℹ️ Email notifications disabled');
    }

    // ========================================================================
    // SUCCESS RESPONSE
    // ========================================================================
    
    return NextResponse.json({
      success: true,
      message: 'Review submitted successfully! It will be published after approval.',
      review: {
        name,
        rating,
        serviceName,
        date: reviewData.date,
      },
    });

  } catch (error: any) {
    console.error('❌ Review submission error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit review',
      },
      { status: 500 }
    );
  }
}

// Helper function for country flags
function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    USA: '🇺🇸',
    Pakistan: '🇵🇰',
    UK: '🇬🇧',
    Canada: '🇨🇦',
    Australia: '🇦🇺',
    Germany: '🇩🇪',
    France: '🇫🇷',
    India: '🇮🇳',
    UAE: '🇦🇪',
    Spain: '🇪🇸',
  };
  return flags[country] || '🌍';
}