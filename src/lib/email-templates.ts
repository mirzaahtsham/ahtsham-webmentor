// lib/email-templates.ts

// Define review interface
interface ReviewData {
  name: string;
  email: string;
  rating: number;
  review: string;
  serviceName: string;
  country?: string;
}

// Email template for review thank you
export function getReviewThankYouEmail(review: ReviewData, googleReviewUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .content {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .rating {
          font-size: 24px;
          margin: 10px 0;
        }
        .cta-box {
          background: linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%);
          padding: 25px;
          border-radius: 10px;
          margin: 25px 0;
          border: 2px solid #4285F4;
        }
        .button {
          display: inline-block;
          background: #4285F4;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          margin: 15px 0;
          text-align: center;
        }
        .button:hover {
          background: #357abd;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 12px;
        }
        .star {
          color: #ffc107;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Thank You, ${review.name}!</h1>
      </div>
      
      <div class="content">
        <p>We've received your review for <strong>${review.serviceName}</strong>. Thank you for taking the time to share your experience!</p>
        
        <div class="rating">
          Your Rating: ${'⭐'.repeat(review.rating)}
        </div>
        
        <p><em>"${review.review}"</em></p>
        
        <div class="cta-box">
          <h3 style="margin-top: 0;">📢 Help Others Find Us!</h3>
          <p>Your review will be published on our website after approval. Would you also like to share your experience on Google? This helps other customers discover our services.</p>
          
          <a href="${googleReviewUrl}" class="button" style="color: white;">
            ⭐ Leave Review on Google
          </a>
          
          <p style="font-size: 12px; color: #666; margin-top: 10px;">
            This link is valid for 30 days
          </p>
        </div>
        
        <h3>What happens next?</h3>
        <ul>
          <li>✅ We'll review your feedback</li>
          <li>✅ Your review will be published within 24 hours</li>
          <li>✅ You'll see it live on our website</li>
        </ul>
        
        <p>Thank you for choosing our services! If you have any questions, feel free to reply to this email.</p>
      </div>
      
      <div class="footer">
        <p>If you didn't submit this review, please ignore this email.</p>
        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

// Admin notification email
export function getAdminReviewNotification(review: ReviewData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .alert {
          background: #fff3cd;
          border: 1px solid #ffc107;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .review-box {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          background: #28a745;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <h2>🔔 New Review Received!</h2>
      
      <div class="alert">
        <strong>Action Required:</strong> A new review needs your approval
      </div>
      
      <div class="review-box">
        <p><strong>Service:</strong> ${review.serviceName}</p>
        <p><strong>Reviewer:</strong> ${review.name} (${review.email})</p>
        <p><strong>Rating:</strong> ${'⭐'.repeat(review.rating)} (${review.rating}/5)</p>
        ${review.country ? `<p><strong>Country:</strong> ${review.country}</p>` : ''}
        <p><strong>Review:</strong></p>
        <p><em>"${review.review}"</em></p>
      </div>
      
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/reviews" class="button" style="color: white;">
        Review & Approve
      </a>
      
      <p style="margin-top: 30px; color: #666; font-size: 14px;">
        You can approve or reject this review in your Sanity Studio.
      </p>
    </body>
    </html>
  `;
}

// Simple text version for basic email clients
export function getReviewThankYouText(review: ReviewData, googleReviewUrl: string): string {
  return `
Thank You, ${review.name}!

We've received your ${review.rating}-star review for ${review.serviceName}.

Your Review:
"${review.review}"

Your review will be published on our website after approval (usually within 24 hours).

Want to help others find us? You can also leave your review on Google:
${googleReviewUrl}

What happens next?
✓ We'll review your feedback
✓ Your review will be published within 24 hours
✓ You'll see it live on our website

Thank you for choosing our services!

---
If you didn't submit this review, please ignore this email.
  `.trim();
}