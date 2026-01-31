"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, ChevronRight } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ContactFormModal } from "./ContactFormModal";
import PortfolioHeroSlider from "./Header/PortfolioHeroSlider";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        </div>

        {/* Portfolio Slider - Replaces the old services slider */}
        <PortfolioHeroSlider />
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