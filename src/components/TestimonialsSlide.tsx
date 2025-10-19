"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

    const element = document.getElementById("testimonials-slide-section");
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
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section 
      id="testimonials-slide-section" 
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-foreground dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by companies worldwide - see what clients say about working with me
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </button>

          {/* Testimonials Grid */}
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-lg"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${testimonial.color}`}></div>
                
                <div className="flex items-center gap-4 mb-4">
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

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-purple-400 mb-3 opacity-30" />
                <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-purple-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Read All Testimonials
          </button>
        </motion.div>
      </div>
    </section>
  );
}
