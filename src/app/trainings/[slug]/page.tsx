"use client";

import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import { CheckCircle, Star, Clock, Users, Award, FileText, ChevronDown, ChevronUp, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courseData = {
  slug: "upwork-success-strategy",
  title: "Upwork Success Strategy",
  description: "A deep dive into Upwork. Learn how to get your first job, maintain a 100% JSS, and scale your agency on the world's largest freelancing platform.",
  rating: 4.9,
  reviewCount: 18,
  studentCount: 850,
  lastUpdated: "November 2024",
  category: "Upwork",
  level: "Intermediate",
  price: 59.99,
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  
  overview: "Are you tired of sending proposals on Upwork with no response? This course will change that. We focus on the metrics that matter: JSS, client reviews, and top-rated badges. Perfect for freelancers who are stuck at certain income tiers and want to scale their business.",
  
  whatYouLearn: [
    "Optimize your Upwork profile for search visibility",
    "Execute a 100% Job Success Score",
    "Navigate Upwork's Terms of Service safely",
    "Master the art of the Upwork proposal",
  ],
  
  requirements: [
    "An active Upwork account",
    "Basic understanding of freelancing",
    "A marketable skill",
  ],
  
  syllabus: [
    {
      id: 1,
      title: "Upwork Algorithm Decoded",
      lessons: [
        { id: 1, title: "How Search Works", duration: "12:34" },
        { id: 2, title: "The Importance of JSS", duration: "08:22" },
        { id: 3, title: "Profile Optimization Tips", duration: "15:47" },
      ],
    },
    {
      id: 2,
      title: "Writing High-Value Jobs",
      lessons: [
        { id: 1, title: "Proposal Templates", duration: "10:15" },
        { id: 2, title: "Standing Out from Competition", duration: "14:30" },
      ],
    },
    {
      id: 3,
      title: "Agency Building",
      lessons: [
        { id: 1, title: "When to Scale", duration: "09:45" },
        { id: 2, title: "Hiring Your First Team Member", duration: "18:20" },
        { id: 3, title: "Agency Management Tools", duration: "11:55" },
      ],
    },
  ],
  
  instructor: {
    name: "Shajeel Afzal",
    title: "Top Rated Plus Freelancer & Instructor",
    bio: "I am a Full Stack Developer with 10+ years of experience in freelancing, programming, and AI. I've been helping others build their freelance careers and scale their businesses through hands-on training and proven strategies.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  
  reviews: [
    {
      id: 1,
      name: "Emily Davis",
      rating: 5,
      date: "2 weeks ago",
      comment: "I went from $0 to $2,500 in 3 months. After this course, I'm now charging $60/hr and have more work than I can handle!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      comment: "The strategies taught here are gold. My JSS went from 87% to 100% in just 2 months following the principles.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great course with actionable advice. The proposal templates alone are worth the price!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "David Lee",
      rating: 5,
      date: "1 week ago",
      comment: "Best investment I've made in my freelance career. The instructor knows exactly what he's talking about.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ],
  
  courseIncludes: [
    { icon: Play, text: "40 hours on-demand video" },
    { icon: FileText, text: "15 lessons" },
    { icon: Award, text: "Certificate of completion" },
    { icon: Clock, text: "Full lifetime access" },
  ],
  
  ratingBreakdown: [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 0 },
  ],
};

export default function TrainingDetailPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderWithMegaMenu />
      {/* Breadcrumb */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/trainings" className="hover:text-yellow-400 transition-colors">
              Trainings
            </Link>
            <span>/</span>
            <span>{courseData.category}</span>
          </div>
        </div>
      </section>

      {/* Course Header - Full Width */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4">{courseData.title}</h1>
          <p className="text-gray-400 text-lg mb-6">{courseData.description}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">{courseData.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(courseData.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400">({courseData.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">{courseData.studentCount} students</span>
            </div>
            <div className="text-gray-400">Last updated: {courseData.lastUpdated}</div>
          </div>
        </div>
      </section>

      {/* Course Video/Image - Full Width, Separate Section */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={courseData.image}
              alt={courseData.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Course Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl mb-6">Overview</h2>
                <p className="text-gray-400 leading-relaxed">{courseData.overview}</p>
              </div>

              {/* What You'll Learn */}
              <div>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
                  <h2 className="text-2xl mb-6">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courseData.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-3xl mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {courseData.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus Overview */}
              <div>
                <h2 className="text-3xl mb-6">Syllabus Overview</h2>
                <div className="space-y-4">
                  {courseData.syllabus.map((section) => (
                    <div
                      key={section.id}
                      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-yellow-400">{section.id}</span>
                          <span>{section.title}</span>
                        </div>
                        {expandedSections.includes(section.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {expandedSections.includes(section.id) && (
                        <div className="border-t border-gray-800">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center gap-3 text-gray-300">
                                <Play className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="text-3xl mb-6">Instructor</h2>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
                  <div className="flex items-start gap-6">
                    <img
                      src={courseData.instructor.avatar}
                      alt={courseData.instructor.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">{courseData.instructor.name}</h3>
                      <p className="text-yellow-400 text-sm mb-4">{courseData.instructor.title}</p>
                      <p className="text-gray-400 leading-relaxed">{courseData.instructor.bio}</p>
                      <Link
                        href="#"
                        className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        View Profile →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Price Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">${courseData.price}</div>
                    <div className="text-gray-400 text-sm">/ course</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors font-medium">
                      Enroll Now
                    </button>
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                      Gift this Course
                    </button>
                  </div>

                  {/* Course Includes */}
                  <div className="border-t border-gray-800 pt-6">
                    <h3 className="text-sm font-medium mb-4">This course includes:</h3>
                    <div className="space-y-3">
                      {courseData.courseIncludes.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                          <item.icon className="w-4 h-4 text-yellow-400" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learner Reviews with Sliding Animation - Full Width */}
      <section className="pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8">Learner Reviews</h2>

          {/* Rating Summary */}
          <div className="lg:w-2/3 mb-12">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
              <div className="flex items-start gap-12">
                <div className="text-center">
                  <div className="text-5xl mb-2">{courseData.rating}</div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(courseData.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">Course Rating</div>
                </div>

                <div className="flex-1">
                  {courseData.ratingBreakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-4 mb-2">
                      <div className="flex gap-1 w-20">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < item.stars
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex-1 bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-400 w-12 text-right">
                        {item.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sliding Reviews */}
          <style jsx>{`
            @keyframes slideLeftToRight {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
            @keyframes slideRightToLeft {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .slide-ltr {
              animation: slideLeftToRight 20s linear infinite;
            }
            .slide-rtl {
              animation: slideRightToLeft 20s linear infinite;
            }
          `}</style>

          {/* First Row - Slide Left to Right */}
          <div className="mb-6 relative overflow-hidden">
            <div className="flex gap-6 slide-ltr">
              {[...courseData.reviews.slice(0, 2), ...courseData.reviews.slice(0, 2)].map((review, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="bg-gray-900 rounded-xl border border-gray-800 p-6 min-w-[calc(50%-12px)] flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4>{review.name}</h4>
                        <span className="text-gray-500 text-sm">• {review.date}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Slide Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 slide-rtl">
              {[...courseData.reviews.slice(2, 4), ...courseData.reviews.slice(2, 4)].map((review, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="bg-gray-900 rounded-xl border border-gray-800 p-6 min-w-[calc(50%-12px)] flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4>{review.name}</h4>
                        <span className="text-gray-500 text-sm">• {review.date}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}