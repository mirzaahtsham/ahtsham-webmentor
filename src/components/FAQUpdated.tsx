"use client";

import { useState, useEffect } from "react";
import { JsonLd } from "@/components/JsonLd";
// import { buildFaqSchema } from "@/lib/schema";
import { ContactFormModal } from "./ContactFormModal";
import Link from "next/link";
import {
  ChevronDown,
  Code,
  ShoppingBag,
  Layout,
  Rocket,
  Headphones,
  Wrench,
  Zap,
  CheckCircle2,
  XCircle,
  FileText
} from "lucide-react";

export function FAQUpdated() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Check availability inside the component
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

  // ✅ Rest of your scroll sticky effect
  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById("faq-section");
      const faqRight = document.getElementById("faq-right");
      if (faqSection && faqRight) {
        const sectionTop = faqSection.offsetTop;
        const sectionHeight = faqSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const inSection = scrollPosition + windowHeight > sectionTop &&
          scrollPosition < sectionTop + sectionHeight;
        const rightFinished = scrollPosition > sectionTop + sectionHeight - windowHeight;
        setIsSticky(inSection && !rightFinished);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const faqs = [
    {
      icon: Code,
      question: "What services do you offer as a web designer & developer?",
      answer:
        "I provide complete website design and development services including WordPress, Shopify, and custom-coded websites using HTML, CSS, JavaScript, Tailwind CSS, and Next.js. I also offer speed optimization, SEO setup, payment gateway integration, and website maintenance."
    },
    {
      icon: ShoppingBag,
      question: "Do you build Shopify and WooCommerce stores?",
      answer:
        "Yes! I specialize in building fully functional eCommerce stores on Shopify and WooCommerce with modern, mobile-friendly layouts, optimized product pages, secure payment gateways, and marketing integrations like Meta Pixel, GA4, and WhatsApp Chat."
    },
    {
      icon: Layout,
      question: "Can you customize or redesign an existing website?",
      answer:
        "Absolutely! Whether you want a fresh design, improved performance, or a migration from one platform to another, I can redesign or rebuild your website without losing SEO value or functionality."
    },
    {
      icon: Wrench,
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, I offer ongoing support plans that include regular updates, bug fixes, security monitoring, content updates, and performance optimization to keep your site fast and reliable."
    },
    {
      icon: Rocket,
      question: "How long does it take to complete a project?",
      answer:
        "Timelines depend on project complexity. A basic business website typically takes 1-2 weeks, while an eCommerce or custom project may take 3-6 weeks. I always provide a detailed timeline after understanding your requirements."
    },
    {
      icon: Zap,
      question: "Do you offer website speed and SEO optimization?",
      answer:
        "Yes, I specialize in Wordpress speed optimization using tools like WP Rocket Plugin, Accelerator Plugin and best SEO practices. I ensure your website loads quickly, performs well on Google PageSpeed Insights, and follows on-page SEO standards for better rankings."
    },
    {
      icon: FileText,
      question: "Do you create landing pages or custom forms?",
      answer:
        "Yes, I design conversion-focused landing pages using Elementor or custom code, and I build multi-step or advanced forms using Contact Form 7, CF7 Pro, or custom JavaScript solutions."
    },
    {
      icon: Headphones,
      question: "How will we communicate and manage the project?",
      answer:
        "I provide regular updates through Email, WhatsApp, or your preferred platform. You'll get progress reports, preview links, and timely feedback sessions throughout the development process."
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-background dark:bg-gray-900 text-foreground dark:text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left - Sticky Title */}
          <div className="lg:pr-12">
            <div className={`${isSticky ? 'lg:sticky lg:top-24' : ''} transition-all duration-300`}>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl mb-4">
                  Frequently Asked
                </h2>
                <h3 className="text-4xl md:text-5xl mb-6">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                    Questions
                  </span>
                </h3>
                <div className="w-20 h-1 bg-linear-to-r from-yellow-500 to-pink-500"></div>
              </div>

              <p className="text-muted-foreground dark:text-gray-400 mb-8 text-lg">
                Have questions? Here are the most common ones I receive.
                If you don't find your answer here, feel free to reach out!
              </p>

              <div className="p-6 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
                {/* Availability Badge */}
                <div className="mb-4 flex items-center gap-2">
                  {isAvailable ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Available Now</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm">
                      <XCircle className="w-4 h-4" />
                      <span>Currently Offline</span>
                    </div>
                  )}
                  <span className="text-gray-400 text-xs">
                    (Mon-Fri, 9 AM - 5 PM)
                  </span>
                </div>
                <h4 className="text-xl mb-2">Still have questions?</h4>
                <p className="text-gray-600 mb-4">
                  Can't find the answer you're looking for? Let's talk!
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-colors hover:shadow-lg hover:shadow-gray-400/50 hover:scale-105">
                  Contact Me
                </button>
                {!isAvailable && (
                    <Link
                      href="/schedule" // 🔗 replace with your meeting link
                      className="px-6 py-2 mx-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors hover:shadow-lg hover:shadow-gray-400/50 hover:scale-105"
                    >
                      Schedule Meeting
                    </Link>
                  )}
              </div>
            </div>
          </div>

          {/* Right - Scrollable FAQs */}
          <div id="faq-right" className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <div
                  key={index}
                  className="bg-card dark:bg-gray-800 rounded-lg border border-border dark:border-gray-700 overflow-hidden hover:border-purple-500/50 transition-colors"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center border border-purple-500/30">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-900 dark:text-white">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-400 transition-transform 'flex-shrink-0' ${activeIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 border-t border-border dark:border-gray-700 pt-4 ml-14">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {/* existing JSX */}
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
    </section>
  );
}
