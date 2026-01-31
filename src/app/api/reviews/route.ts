// app/api/reviews/route.ts
// Review submission API with Sanity integration

import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client'; // Your Sanity client
import { sendEmail } from '@/lib/email';
import { getReviewThankYouEmail, getAdminReviewNotification } from '@/lib/email-templates';

interface ReviewSubmission {
  serviceId: string;
  serviceName: string;
  name: string;
  email: string;
  rating: number;
  review: string;
  country: string;
  platform?: string;
}

// POST - Submit new review
export async function POST(request: NextRequest) {
  try {
    const body: ReviewSubmission = await request.json();

    const {
      serviceId,
      serviceName,
      name,
      email,
      rating,
      review,
      country,
      platform = 'website',
    } = body;

    // Validate required fields
    if (!name || !email || !rating || !review || !country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate rating
    const ratingNum = parseInt(rating.toString());
    if (ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Generate avatar initials from name
    const nameParts = name.trim().split(' ');
    const avatar =
      nameParts.length > 1
        ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
        : name.substring(0, 2).toUpperCase();

    // Save to Sanity
    const sanityResult = await client.create({
      _type: 'review',
      serviceId,
      serviceName,
      name,
      email,
      rating: ratingNum,
      review,
      country,
      platform,
      avatar,
      role: 'Verified Customer',
      approved: false,
      featured: false,
      publishedAt: new Date().toISOString(),
    });

    console.log('✅ Review saved to Sanity:', sanityResult._id);

    // Generate Google Review URL
    const googlePlaceId = process.env.GOOGLE_PLACE_ID;
    const googleReviewUrl = googlePlaceId
      ? `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
      : process.env.GOOGLE_BUSINESS_URL || '';

    // Send thank you email to customer
    try {
      const emailResult = await sendEmail({
        to: email,
        subject: `Thank you for your ${ratingNum}-star review! ⭐`,
        html: getReviewThankYouEmail(body, googleReviewUrl),
      });

      if (emailResult.success) {
        console.log('✅ Thank you email sent to:', email);
      }
    } catch (emailError) {
      console.error('❌ Failed to send thank you email:', emailError);
      // Don't fail the request if email fails
    }

    // Send notification to admin
    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const adminResult = await sendEmail({
          to: adminEmail,
          subject: `🔔 New Review: ${ratingNum} stars for ${serviceName}`,
          html: getAdminReviewNotification(body),
        });

        if (adminResult.success) {
          console.log('✅ Admin notification sent to:', adminEmail);
        }
      }
    } catch (emailError) {
      console.error('❌ Failed to send admin notification:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Review submitted successfully! It will appear after approval.',
        reviewId: sanityResult._id,
        googleReviewUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Review submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit review',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET - Fetch approved reviews for a service
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get('serviceId');

    if (!serviceId) {
      return NextResponse.json(
        { error: 'Service ID required' },
        { status: 400 }
      );
    }

    // Fetch approved reviews from Sanity
    const reviews = await client.fetch(
      `*[_type == "review" && serviceId == $serviceId && approved == true] | order(publishedAt desc) {
        _id,
        name,
        rating,
        review,
        country,
        platform,
        role,
        avatar,
        publishedAt,
        featured,
        "date": publishedAt
      }`,
      { serviceId }
    );

    return NextResponse.json(
      {
        reviews,
        count: reviews.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Fetch reviews error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// PATCH - Update review (approve/feature)
export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const reviewId = searchParams.get('reviewId');
    const body = await request.json();

    if (!reviewId) {
      return NextResponse.json(
        { error: 'Review ID required' },
        { status: 400 }
      );
    }

    // Update review in Sanity
    const result = await client
      .patch(reviewId)
      .set(body)
      .commit();

    return NextResponse.json(
      {
        success: true,
        message: 'Review updated successfully',
        review: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Update review error:', error);
    return NextResponse.json(
      { error: 'Failed to update review' },
      { status: 500 }
    );
  }
}

// DELETE - Delete review (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const reviewId = searchParams.get('reviewId');

    if (!reviewId) {
      return NextResponse.json(
        { error: 'Review ID required' },
        { status: 400 }
      );
    }

    // Delete from Sanity
    await client.delete(reviewId);

    return NextResponse.json(
      { success: true, message: 'Review deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Delete review error:', error);
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
}