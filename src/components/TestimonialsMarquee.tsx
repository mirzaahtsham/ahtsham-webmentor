"use client";

import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  color: string;
  platform: "linkedin" | "google" | "fiverr" | "upwork";
}

export function TestimonialsMarquee() {
  // Row 1 testimonials
  const row1Testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      rating: 5,
      text: "Mirza delivered exceptional work on our web platform. His attention to detail and technical expertise exceeded our expectations.",
      color: "from-purple-600 to-blue-600",
      platform: "linkedin"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rating: 5,
      text: "Working with Mirza was a game-changer for our project. His creative solutions and professional approach made all the difference.",
      color: "from-pink-600 to-purple-600",
      platform: "google"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      rating: 5,
      text: "Mirza's expertise in both development and content creation is unmatched. He transformed our vision into reality beautifully.",
      color: "from-yellow-600 to-orange-600",
      platform: "fiverr"
    },
    {
      name: "David Park",
      role: "CTO, StartupX",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      rating: 5,
      text: "Incredible developer! Mirza built our entire platform from scratch and delivered ahead of schedule with outstanding quality.",
      color: "from-green-600 to-teal-600",
      platform: "upwork"
    },
  ];

  // Row 2 testimonials
  const row2Testimonials: Testimonial[] = [
    {
      name: "Lisa Thompson",
      role: "Marketing Director, BrandCo",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
      rating: 5,
      text: "Mirza's content creation skills are phenomenal. He helped us triple our engagement rate with his strategic approach.",
      color: "from-red-600 to-pink-600",
      platform: "linkedin"
    },
    {
      name: "James Wilson",
      role: "VP Engineering, CloudTech",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
      rating: 5,
      text: "Outstanding full-stack developer. Mirza's code is clean, efficient, and scalable. Highly recommended for any project.",
      color: "from-indigo-600 to-purple-600",
      platform: "fiverr"
    },
    {
      name: "Amanda Foster",
      role: "Creative Director, MediaPlus",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100",
      rating: 5,
      text: "Mirza brings creativity and technical excellence together. Our website looks stunning and performs flawlessly.",
      color: "from-cyan-600 to-blue-600",
      platform: "google"
    },
    {
      name: "Robert Martinez",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      rating: 5,
      text: "Best investment we made! Mirza developed our MVP and it's already generating revenue. True professional.",
      color: "from-orange-600 to-red-600",
      platform: "upwork"
    },
  ];

  // Row 3 testimonials
  const row3Testimonials: Testimonial[] = [
    {
      name: "Rachel Green",
      role: "Product Owner, StartupLab",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
      rating: 5,
      text: "Working with Mirza was seamless. He understood our requirements perfectly and delivered beyond expectations.",
      color: "from-purple-600 to-pink-600",
      platform: "upwork"
    },
    {
      name: "Tom Anderson",
      role: "Founder, TechFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      rating: 5,
      text: "Mirza's technical skills are top-notch. He solved complex problems with elegant solutions. Highly recommend!",
      color: "from-blue-600 to-cyan-600",
      platform: "linkedin"
    },
    {
      name: "Nina Patel",
      role: "CEO, DigitalWave",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      rating: 5,
      text: "Professional, reliable, and talented. Mirza delivered our project on time and exceeded all our quality standards.",
      color: "from-green-600 to-emerald-600",
      platform: "google"
    },
    {
      name: "Chris Lee",
      role: "CTO, InnovateNow",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100",
      rating: 5,
      text: "Exceptional developer with great communication skills. Mirza made the entire development process smooth and enjoyable.",
      color: "from-yellow-600 to-orange-600",
      platform: "fiverr"
    },
  ];

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return (
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
            <svg className="w-3 h-3 fill-blue-600 dark:fill-blue-400" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-xs text-blue-700 dark:text-blue-300">LinkedIn</span>
          </div>
        );
      case "google":
        return (
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded-full border border-red-200 dark:border-red-800">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-xs text-red-700 dark:text-red-300">Google</span>
          </div>
        );
      case "fiverr":
        return (
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800">
            <svg className="w-3 h-3 fill-green-600 dark:fill-green-400" viewBox="0 0 24 24">
              <circle cx="4" cy="4" r="2"/>
              <path d="M8 1h2v8H8zm4 0h2v3h-2zm4 0h2v5h-2zM0 9h24v2H0zm8 3h2v11H8zm4 0h2v8h-2zm4 0h2v6h-2z"/>
            </svg>
            <span className="text-xs text-green-700 dark:text-green-300">Fiverr</span>
          </div>
        );
      case "upwork":
        return (
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800">
            <svg className="w-3 h-3 fill-emerald-600 dark:fill-emerald-400" viewBox="0 0 24 24">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
            <span className="text-xs text-emerald-700 dark:text-emerald-300">Upwork</span>
          </div>
        );
      default:
        return null;
    }
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${testimonial.color}`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <ImageWithFallback
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-200 dark:border-purple-800"
          />
          <div className="flex-1">
            <h4 className="text-foreground dark:text-white">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        {getPlatformBadge(testimonial.platform)}
      </div>

      <Quote className="w-8 h-8 text-purple-400 mb-2 opacity-30" />
      <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-foreground dark:text-white">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto px-4">
          Trusted by companies worldwide - see what clients say about working with me
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto mt-4"></div>
      </div>

      <div className="space-y-8">
        {/* Row 1 - RTL */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee-rtl">
            {/* Duplicate for seamless loop */}
            {[...row1Testimonials, ...row1Testimonials, ...row1Testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - LTR */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee-ltr">
            {/* Duplicate for seamless loop */}
            {[...row2Testimonials, ...row2Testimonials, ...row2Testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 3 - RTL */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee-rtl">
            {/* Duplicate for seamless loop */}
            {[...row3Testimonials, ...row3Testimonials, ...row3Testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
          Read All Reviews
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes marquee-ltr {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 40s linear infinite;
        }

        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
