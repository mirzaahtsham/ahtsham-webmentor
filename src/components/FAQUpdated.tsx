"use client";

import { useState, useEffect } from "react";
import { JsonLd } from "@/components/JsonLd";
import { ContactFormModal } from "./ContactFormModal";
import Link from "next/link";
import {
  ChevronDown,
  Code,
  CheckCircle2,
  XCircle,
  Zap,
  Globe,
  Shield,
  Rocket,
  Users,
  MessageSquare,
  TrendingUp,
  Award,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type FAQ = {
  question: string;
  answer: string;
  icon?: string;
};

/* ---------------- ICON MAPPER ---------------- */

const iconMap: Record<string, any> = {
  Code,
  Zap,
  Globe,
  Shield,
  Rocket,
  Users,
  MessageSquare,
  TrendingUp,
  Award,
  CheckCircle2,
};

const getIconComponent = (iconName?: string) => {
  if (!iconName) return Code;
  return iconMap[iconName] || Code;
};

/* ---------------- COMPONENT ---------------- */

export function FAQUpdated({ faqs }: { faqs: FAQ[] }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Check Availability (Mon-Fri, 9AM-5PM) */
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const isWorkDay = day >= 1 && day <= 5;
      const isWorkHours = hour >= 9 && hour < 17;
      setIsAvailable(isWorkDay && isWorkHours);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  /* Sticky Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById("faq-section");
      const faqRight = document.getElementById("faq-right");
      if (!faqSection || !faqRight) return;

      const sectionTop = faqSection.offsetTop;
      const sectionHeight = faqSection.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const inSection =
        scrollPosition + windowHeight > sectionTop &&
        scrollPosition < sectionTop + sectionHeight;

      const rightFinished =
        scrollPosition > sectionTop + sectionHeight - windowHeight;

      setIsSticky(inSection && !rightFinished);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="faq-section"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* LEFT - Sticky Title & Contact Box */}
          <div className="lg:pr-12">
            <div
              className={`${
                isSticky ? "lg:sticky lg:top-24" : ""
              } transition-all duration-300`}
            >
              {/* Title Section - SEO Optimized */}
              <header className="mb-6 sm:mb-8">
                <h2 
                  id="faq-heading"
                  className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 font-bold"
                >
                  Frequently Asked
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
                    Questions
                  </span>
                </h3>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-500 to-pink-500" role="presentation"></div>
              </header>

              {/* Description - AEO Optimized */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                Have questions about my web design and development services? Here are the most common questions I receive. If you don't find your answer here, feel free to reach out!
              </p>

              {/* Contact Box */}
              <aside className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg">
                {/* Availability Badge */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
                  {isAvailable ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full text-green-600 dark:text-green-400 text-sm font-medium w-fit">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>Available Now</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-full text-red-600 dark:text-red-400 text-sm font-medium w-fit">
                      <XCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>Currently Offline</span>
                    </div>
                  )}
                  <time className="text-gray-500 dark:text-gray-400 text-xs">
                    (Mon-Fri, 9 AM - 5 PM)
                  </time>
                </div>

                <h4 className="text-lg sm:text-xl mb-2 font-semibold text-gray-900 dark:text-white">
                  Still have questions?
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Can't find the answer you're looking for? Let's talk!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30 hover:scale-105 active:scale-95 text-center"
                    aria-label="Open contact form"
                  >
                    Contact Me
                  </button>

                  {!isAvailable && (
                    <Link
                      href="/schedule"
                      className="w-full sm:w-auto px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-400/30 hover:scale-105 active:scale-95 inline-block text-center"
                      aria-label="Schedule a meeting"
                    >
                      Schedule Meeting
                    </Link>
                  )}
                </div>
              </aside>
            </div>
          </div>

          {/* RIGHT - Scrollable FAQs with Microdata */}
          <div id="faq-right" className="space-y-3 sm:space-y-4" role="list">
            {faqs && faqs.length > 0 ? (
              faqs.map((faq, index) => {
                const IconComponent = getIconComponent(faq.icon);
                const isActive = activeIndex === index;

                return (
                  <article
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200 hover:shadow-lg"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    role="listitem"
                  >
                    {/* Question Button */}
                    <h3 itemProp="name">
                      <button
                        onClick={() => setActiveIndex(isActive ? null : index)}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 gap-3"
                        aria-expanded={isActive}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                      >
                        <span className="flex items-start sm:items-center gap-3 sm:gap-4 pr-2 flex-1 min-w-0">
                          {/* Icon Box */}
                          <span className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md mt-0.5 sm:mt-0" aria-hidden="true">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </span>
                          {/* Question */}
                          <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium leading-snug">
                            {faq.question}
                          </span>
                        </span>
                        {/* Chevron */}
                        <ChevronDown
                          className={`w-5 h-5 text-purple-500 dark:text-purple-400 transition-transform duration-200 flex-shrink-0 mt-0.5 sm:mt-0 ${
                            isActive ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    {/* Answer with Microdata */}
                    <div
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? "max-h-[500px]" : "max-h-0"
                      }`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div 
                        className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 ml-11 sm:ml-14"
                        itemProp="text"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              // Empty State
              <div className="text-center py-8 sm:py-12 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" aria-hidden="true" />
                <p className="text-base sm:text-lg font-medium px-4">
                  No FAQs available at the moment.
                </p>
                <p className="text-xs sm:text-sm mt-2 px-4">Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced JSON-LD Schema for SEO */}
      {faqs && faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }}
        />
      )}

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}