"use client";
import { useState } from "react";
import { Calendar, Users, Clock, Sparkles, Video, MessageSquare, Briefcase, Coffee, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";

interface MeetingType {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: any;
  status: "available" | "coming-soon";
  badge?: string;
}

export default function ScheduleMeeting() {
  const meetingTypes: MeetingType[] = [
    {
      id: "dubai-visa",
      title: "Dubai Digital Nomad VISA",
      description: "Get guidance on Dubai Digital Nomad VISA application process, requirements, and my personal experience as a web developer.",
      duration: "30 min",
      icon: Video,
      status: "available",
    },
    {
      id: "technical-consultation",
      title: "Technical Consultation",
      description: "Get expert advice on your web or mobile development project, tech stack selection, architecture, and best practices.",
      duration: "30 min",
      icon: MessageSquare,
      status: "coming-soon",
      badge: "Coming Soon",
    },
    {
      id: "freelancing-guidance",
      title: "Freelancing Guidance",
      description: "Learn how to start and grow your freelancing career. I'll share my journey from beginner to establishing a global client base.",
      duration: "45 min",
      icon: Briefcase,
      status: "coming-soon",
      badge: "Coming Soon",
    },
    {
      id: "mentorship",
      title: "Mentorship Session",
      description: "One-on-one mentoring for developers. Career guidance, code review, or help with your personal/professional learning goals.",
      duration: "60 min",
      icon: Users,
      status: "coming-soon",
      badge: "Coming Soon",
    },
    {
      id: "quick-questions",
      title: "Quick Questions",
      description: "Have a quick question? Book a short call to get answers on any topic including career, tech, or freelancing.",
      duration: "15 min",
      icon: MessageSquare,
      status: "coming-soon",
      badge: "Coming Soon",
    },
    {
      id: "project-discussion",
      title: "Project Discussion",
      description: "Discuss your project requirements, timeline, and get a detailed assessment for potential collaboration opportunities.",
      duration: "45 min",
      icon: Briefcase,
      status: "coming-soon",
      badge: "Coming Soon",
    },
    {
      id: "general-meeting",
      title: "General Meeting",
      description: "Schedule a meeting for any other topic not covered above. I'm happy to discuss your needs.",
      duration: "30 min",
      icon: Coffee,
      status: "coming-soon",
      badge: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <HeaderWithMegaMenu />
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                Schedule a <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-400 to-pink-400">Meeting</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Book a 1:1 session to discuss your project, get expert advice, or learn from my experience in web development, mobile apps, and freelancing.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <span className="text-3xl font-bold">500+</span>
                  </div>
                  <p className="text-gray-400 text-sm">1:1 Meetings</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="text-3xl font-bold">300+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-3xl font-bold">10+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 border border-gray-700">
                <ImageWithFallback
                  src="/Schedule/Mirza-Ahtsham.webp"
                  alt="Mirza Ahtsham"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Choose Your Meeting Type</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the meeting format that best fits your needs. All sessions are conducted via video call.
            </p>
          </div>

          {/* Meeting Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingTypes.map((meeting) => {
              const Icon = meeting.icon;
              return (
                <div
                  key={meeting.id}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative group"
                >
                  {/* Status Badge */}
                  {meeting.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 px-3 py-1 rounded-full text-xs">
                        <Sparkles className="w-3 h-3" />
                        {meeting.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{meeting.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-2">{meeting.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {meeting.description}
                  </p>

                  {/* Action Button */}
                  <Button
                    className={`w-full ${
                      meeting.status === "available"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={meeting.status === "coming-soon"}
                  >
                    {meeting.status === "available" ? "Schedule Now" : "Coming Soon"}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Choose a meeting type to view available time slots and book your session instantly.
            </p>
          </div>
        </div>
      </section>
        <Footer /> 
    </div>
  );
}