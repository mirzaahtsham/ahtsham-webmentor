"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
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

  function AnimatedBadge() {
    return (
      <motion.a
        href="#contact"
        className="group inline-flex items-center gap-2 sm:gap-3 bg-gray-100/80 dark:bg-gray-950/80 backdrop-blur-sm border border-gray-700/50 dark:border-gray-800/50 text-gray-900 dark:text-gray-300 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full overflow-hidden text-center"
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className="text-[10px] sm:text-xs leading-tight"
          layout
          transition={{ type: "spring", stiffness: 300 }}
        >
          Available for New Projects & Developer Education
        </motion.span>

        <motion.div
          className="overflow-hidden w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
          variants={{
            initial: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.div>
      </motion.a>
    );
  }

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 sm:left-40 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-yellow-400 text-xs sm:text-sm text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Available for Opportunities Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <AnimatedBadge />
          </div>

          {/* Main Heading - Responsive */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900 font-medium dark:text-gray-100 leading-tight px-2">
            Developer Advocate & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Web Developer</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            | <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-yellow-400 dark:to-orange-400 leading-tight">Content Creator & Mentor</span>
          </h1>

          {/* Description - Responsive */}
          <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            I help clients, students, and developers transform ideas into <span className="font-medium">high-performance websites, Shopify stores, and WordPress solutions</span>.
            Through <span className="font-medium">developer-focused tutorials, consulting, and practical guides</span>, I teach modern web development, technical SEO, and website maintenance to help businesses and learners succeed online.
          </p>

          {/* Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Button
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:scale-105 sm:hover:scale-110 transform duration-300 px-6 py-2.5"
              onClick={() => setIsModalOpen(true)}
            >
              Hire Me / Consult
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-gray-200 bg-gray-100 text-gray-900 hover:bg-gradient-to-r from-purple-700 to-pink-700 hover:text-gray-100 hover:scale-105 sm:hover:scale-110 transform duration-300 px-6 py-2.5"
            >
              View Portfolio & Tutorials
            </Button>
          </div>

          <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Social Links - Responsive */}
          <div className="flex gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
            <a 
              href="https://github.com/mirzaahtsham/" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mirzaahtsham/" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              aria-label="LinkedIn Profile"
            >
              <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:hello@ahtsham.me" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Services Slider - Responsive */}
          <div className="mb-8 sm:mb-12 px-4">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-6 sm:p-8 transition-all duration-500 transform hover:scale-105`}>
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{slides[currentSlide].icon}</div>
                  <h3 className="text-xl sm:text-2xl text-white font-semibold">{slides[currentSlide].title}</h3>
                </div>
              </div>

              {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
              <button
                onClick={prevSlide}
                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Mobile: Touch-friendly navigation buttons */}
              <div className="flex sm:hidden gap-3 justify-center mt-4">
                <button
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 justify-center mt-4 sm:mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index 
                        ? "bg-white w-6 sm:w-8" 
                        : "bg-white/30 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Browser mockup - Responsive */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-t-lg p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            <div className="flex-1 mx-2 sm:mx-4 bg-gray-700 rounded px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-400 truncate">
              mirza-ahtsham.portfolio
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 h-48 sm:h-56 md:h-64 rounded-b-lg flex items-center justify-center">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">💼</div>
              <p className="text-white text-sm sm:text-base md:text-lg font-medium">Crafting Digital Excellence</p>
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