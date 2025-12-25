"use client";
import { CheckCircle, Star, Clock, Users, Award, FileText, ChevronDown, ChevronUp, Play, ArrowLeft, GraduationCap, Smartphone } from "lucide-react";
import { useState } from "react";

const courseData = {
  slug: "freelancing-mastery",
  title: "Freelancing Mastery",
  description: "Master the art of freelancing on platforms like Upwork and Fiverr. Learn how to write winning proposals, optimize your profile, and manage clients effectively.",
  rating: 4.8,
  reviewCount: 2,
  studentCount: 1250,
  lastUpdated: "November 2024",
  category: "Freelancing",
  level: "Intermediate",
  price: 59.99,
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  overviewImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  
  overview: "This comprehensive course is designed to take you from a complete beginner to a successful freelancer. We cover everything from choosing your niche to scaling your business. You'll learn proven strategies to attract high-paying clients and build a sustainable career working from anywhere.",
  
  whatYouLearn: [
    "How to create a winning freelance profile that attracts clients",
    "Write proposals that get responses and win projects",
    "Set competitive rates and negotiate with confidence",
    "Build long-term client relationships for recurring revenue",
    "Master time management and productivity as a freelancer",
    "Scale your freelance business into an agency",
  ],
  
  requirements: [
    "A computer with internet connection",
    "Willingness to learn and take action",
    "Basic English communication skills",
    "No prior freelancing experience required",
  ],
  
  syllabus: [
    {
      id: 1,
      title: "Getting Started with Freelancing",
      duration: "45 min",
      lessons: [
        { id: 1, title: "Introduction to Freelancing", duration: "8:30", type: "video" },
        { id: 2, title: "Choosing Your Niche", duration: "12:15", type: "video" },
        { id: 3, title: "Setting Up Your Workspace", duration: "10:20", type: "video" },
        { id: 4, title: "Essential Tools for Freelancers", duration: "14:00", type: "video" },
      ],
    },
    {
      id: 2,
      title: "Building Your Profile",
      duration: "1h 15min",
      lessons: [
        { id: 1, title: "Creating a Standout Profile", duration: "15:30", type: "video" },
        { id: 2, title: "Portfolio Development", duration: "20:45", type: "video" },
        { id: 3, title: "Profile Optimization Tips", duration: "18:00", type: "video" },
        { id: 4, title: "Profile Review Checklist", duration: "5:00", type: "article" },
      ],
    },
    {
      id: 3,
      title: "Winning Proposals",
      duration: "1h 30min",
      lessons: [
        { id: 1, title: "Proposal Structure & Format", duration: "12:00", type: "video" },
        { id: 2, title: "Writing Compelling Proposals", duration: "25:30", type: "video" },
        { id: 3, title: "Proposal Templates", duration: "10:00", type: "article" },
        { id: 4, title: "Common Proposal Mistakes", duration: "15:00", type: "video" },
        { id: 5, title: "Follow-up Strategies", duration: "8:30", type: "video" },
      ],
    },
    {
      id: 4,
      title: "Pricing & Negotiations",
      duration: "50min",
      lessons: [
        { id: 1, title: "How to Set Your Rates", duration: "18:00", type: "video" },
        { id: 2, title: "Negotiation Techniques", duration: "22:00", type: "video" },
        { id: 3, title: "Handling Price Objections", duration: "10:00", type: "video" },
      ],
    },
    {
      id: 5,
      title: "Client Management",
      duration: "1h 10min",
      lessons: [
        { id: 1, title: "Communication Best Practices", duration: "15:00", type: "video" },
        { id: 2, title: "Managing Expectations", duration: "12:00", type: "video" },
        { id: 3, title: "Handling Difficult Clients", duration: "18:00", type: "video" },
        { id: 4, title: "Building Long-term Relationships", duration: "15:00", type: "video" },
        { id: 5, title: "Getting Testimonials & Reviews", duration: "10:00", type: "video" },
      ],
    },
    {
      id: 6,
      title: "Scaling Your Business",
      duration: "1h 20min",
      lessons: [
        { id: 1, title: "When to Scale", duration: "12:00", type: "video" },
        { id: 2, title: "Hiring Subcontractors", duration: "20:00", type: "video" },
        { id: 3, title: "Building Systems & Processes", duration: "18:00", type: "video" },
        { id: 4, title: "Agency Growth Strategies", duration: "22:00", type: "video" },
        { id: 5, title: "Automation Tools", duration: "8:00", type: "video" },
      ],
    },
  ],
  
  instructor: {
    name: "Shajeel Afzal",
    title: "Top Rated Plus Freelancer & Instructor",
    bio: "I am a Full Stack Developer with 10+ years of experience in freelancing, programming, and AI. I've helped over 5,000 students build successful freelance careers through hands-on training and proven strategies. My courses focus on real-world applications and actionable insights.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    stats: {
      students: "5,200+",
      courses: "12",
      rating: 4.9,
    },
  },
  
  reviews: [
    {
      id: 1,
      name: "Emily Davis",
      rating: 5,
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      comment: "I went from $0 to $2,500 in 3 months after taking this course. The proposal templates alone are worth 10x the price. I'm now charging $60/hr and have more work than I can handle!",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      comment: "The strategies taught here are gold. My profile went from getting zero views to landing my first client within 2 weeks. The instructor really knows what he's talking about.",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 5,
      date: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      comment: "Great course with actionable advice. The section on pricing helped me increase my rates by 50%. Highly recommend for anyone starting their freelance journey!",
    },
  ],
  
  faqs: [
    {
      id: 1,
      question: "Do I need prior experience to take this course?",
      answer: "No, this course is designed for complete beginners. We start from the basics and gradually build up to advanced strategies.",
    },
    {
      id: 2,
      question: "What platforms does this course cover?",
      answer: "We primarily focus on Upwork and Fiverr, but the principles taught can be applied to any freelancing platform.",
    },
    {
      id: 3,
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to all course materials, including any future updates.",
    },
    {
      id: 4,
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.",
    },
  ],
};

interface TrainingDetailProps {
  slug?: string;
  onBack?: () => void;
}

export function TrainingDetail({ slug, onBack }: TrainingDetailProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleFaq = (faqId: number) => {
    setExpandedFaqs((prev) =>
      prev.includes(faqId)
        ? prev.filter((id) => id !== faqId)
        : [...prev, faqId]
    );
  };

  // Calculate total course duration
  const totalDuration = courseData.syllabus.reduce((acc, section) => {
    const hours = parseInt(section.duration.split('h')[0]) || 0;
    const mins = parseInt(section.duration.match(/(\d+)min/)?.[1] || '0');
    return acc + hours * 60 + mins;
  }, 0);
  const totalHours = Math.floor(totalDuration / 60);
  const totalMins = totalDuration % 60;

  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1a2332] to-[#0f1419]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <button 
              onClick={onBack}
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Trainings
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-yellow-500">{courseData.category}</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-5xl md:text-6xl mb-6">{courseData.title}</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-8">
            {courseData.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">{courseData.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(courseData.rating)
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400">({courseData.reviewCount} reviews)</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="text-gray-400">
              {courseData.studentCount.toLocaleString()} students
            </div>
            <span className="text-gray-500">•</span>
            <div className="text-gray-400">
              Last updated: {courseData.lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl mb-6">Overview</h2>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <p className="text-gray-400 leading-relaxed">{courseData.overview}</p>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={courseData.overviewImage}
                      alt="Course overview"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-3xl mb-6">What You'll Learn</h2>
                <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-800">
                  <div className="grid md:grid-cols-2 gap-4">
                    {courseData.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Content / Syllabus */}
              <div>
                <h2 className="text-3xl mb-6">Course Content</h2>
                <div className="bg-[#1a2332] rounded-2xl p-6 border border-gray-800 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {courseData.syllabus.length} sections • {totalHours}h {totalMins}m total length
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {courseData.syllabus.map((section) => (
                    <div
                      key={section.id}
                      className="bg-[#1a2332] rounded-xl border border-gray-800 overflow-hidden"
                    >
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-5 hover:bg-[#1f2937] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {expandedSections.includes(section.id) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-3">
                              <span>Section {section.id}: {section.title}</span>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {section.lessons.length} lectures • {section.duration}
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* Section Content */}
                      {expandedSections.includes(section.id) && (
                        <div className="border-t border-gray-800">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between px-5 py-4 hover:bg-[#1f2937] transition-colors border-b border-gray-800 last:border-b-0"
                            >
                              <div className="flex items-center gap-3 text-gray-300">
                                {lesson.type === 'video' ? (
                                  <Play className="w-4 h-4 text-gray-500" />
                                ) : (
                                  <FileText className="w-4 h-4 text-gray-500" />
                                )}
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

              {/* Requirements */}
              <div>
                <h2 className="text-3xl mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {courseData.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="text-3xl mb-6">Instructor</h2>
                <div className="bg-[#1a2332] rounded-2xl border border-gray-800 p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <img
                      src={courseData.instructor.avatar}
                      alt={courseData.instructor.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{courseData.instructor.name}</h3>
                      <p className="text-yellow-500 text-sm mb-4">{courseData.instructor.title}</p>
                      
                      <div className="flex flex-wrap gap-6 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-gray-400">{courseData.instructor.stats.rating} Instructor Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-400">{courseData.instructor.stats.students} Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-400">{courseData.instructor.stats.courses} Courses</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">{courseData.instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Reviews */}
              <div>
                <h2 className="text-3xl mb-6">Student Reviews</h2>
                <div className="space-y-4">
                  {courseData.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-[#1a2332] rounded-xl border border-gray-800 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4>{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-400 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {courseData.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-[#1a2332] rounded-xl border border-gray-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-5 hover:bg-[#1f2937] transition-colors text-left"
                      >
                        <span>{faq.question}</span>
                        {expandedFaqs.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-5 pb-5 text-gray-400 border-t border-gray-800 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Course Preview Card */}
                <div className="bg-[#1a2332] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="relative h-48">
                    <img
                      src={courseData.image}
                      alt={courseData.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-[#0f1419] ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">${courseData.price}</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg transition-colors">
                        Enroll Now
                      </button>
                      <button className="w-full bg-transparent border border-gray-700 hover:bg-[#1f2937] text-white py-3 rounded-lg transition-colors">
                        Add to Wishlist
                      </button>
                    </div>

                    {/* Course Includes */}
                    <div className="border-t border-gray-800 pt-6">
                      <h3 className="text-sm mb-4">This course includes:</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Play className="w-4 h-4 text-gray-500" />
                          <span>{totalHours}h {totalMins}m on-demand video</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span>Downloadable resources</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Award className="w-4 h-4 text-gray-500" />
                          <span>Certificate of completion</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Full lifetime access</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Smartphone className="w-4 h-4 text-gray-500" />
                          <span>Access on mobile and desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}