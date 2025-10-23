"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const slides = [
    { title: "Web Development", color: "from-blue-600 to-cyan-600", icon: "🌐" },
    { title: "Mobile Apps", color: "from-purple-600 to-pink-600", icon: "📱" },
    { title: "UI/UX Design", color: "from-orange-600 to-yellow-600", icon: "🎨" },
    { title: "Content Creation", color: "from-green-600 to-teal-600", icon: "✍️" },
    { title: "Cloud Solutions", color: "from-indigo-600 to-purple-600", icon: "☁️" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Available for Opportunities Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full animate-pulse">
              <Briefcase className="w-4 h-4" />
              <span>Available for New Opportunities</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6">
            Web Designer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Developer</span>
            <br />
            | <span className="text-transparent leading-relaxed font-medium bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Content Creator</span>
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I transform ideas into exceptional digital experiences through creative development and engaging content
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              onClick={() => setIsModalOpen(true)}
            >
              Hire Me Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Portfolio
            </Button>
          </div>
          
          <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <div className="flex gap-6 justify-center mb-12">
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Services Slider */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-8 transition-all duration-500 transform hover:scale-105`}>
                  <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                  <h3 className="text-2xl text-white">{slides[currentSlide].title}</h3>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2 justify-center mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-white w-8" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Browser mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-t-lg p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="flex-1 mx-4 bg-gray-700 rounded px-3 py-1 text-sm text-gray-400">
              mirza-ahtsham.portfolio
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 h-64 rounded-b-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💼</div>
              <p className="text-white">Crafting Digital Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
