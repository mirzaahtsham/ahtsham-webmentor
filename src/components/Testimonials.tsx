"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      rating: 5,
      text: "Mirza delivered exceptional work on our web platform. His attention to detail and technical expertise exceeded our expectations.",
      color: "from-purple-600 to-blue-600"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rating: 5,
      text: "Working with Mirza was a game-changer for our project. His creative solutions and professional approach made all the difference.",
      color: "from-pink-600 to-purple-600"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      rating: 5,
      text: "Mirza's expertise in both development and content creation is unmatched. He transformed our vision into reality beautifully.",
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "David Park",
      role: "CTO, StartupX",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      rating: 5,
      text: "Incredible developer! Mirza built our entire platform from scratch and delivered ahead of schedule with outstanding quality.",
      color: "from-green-600 to-teal-600"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, BrandCo",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
      rating: 5,
      text: "Mirza's content creation skills are phenomenal. He helped us triple our engagement rate with his strategic approach.",
      color: "from-red-600 to-pink-600"
    },
    {
      name: "James Wilson",
      role: "VP Engineering, CloudTech",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
      rating: 5,
      text: "Outstanding full-stack developer. Mirza's code is clean, efficient, and scalable. Highly recommended for any project.",
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "Amanda Foster",
      role: "Creative Director, MediaPlus",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100",
      rating: 5,
      text: "Mirza brings creativity and technical excellence together. Our website looks stunning and performs flawlessly.",
      color: "from-cyan-600 to-blue-600"
    },
    {
      name: "Robert Martinez",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      rating: 5,
      text: "Best investment we made! Mirza developed our MVP and it's already generating revenue. True professional.",
      color: "from-orange-600 to-red-600"
    },
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gray-200 dark:bg-gray-800 text-foreground dark:text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">What Clients Say</h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear from clients who've experienced the difference
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 hover:scale-105 transition-transform duration-300 border border-gray-300 dark:border-gray-700 relative overflow-hidden shadow-lg"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
              
              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-foreground dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-purple-500 mb-2 opacity-50" />
              <p className="text-muted-foreground dark:text-gray-300 text-sm">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow">
            View All Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}
