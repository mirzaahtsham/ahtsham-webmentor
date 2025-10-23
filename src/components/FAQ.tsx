"use client";

import { useState, useEffect } from "react";
import { 
  ChevronDown,
  Code,
  ShoppingBag,
  Layout,
  Rocket,
  Headphones,
  Wrench,
  Zap,
  FileText
} from "lucide-react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById("faq-section");
      const faqRight = document.getElementById("faq-right");
      
      if (faqSection && faqRight) {
        const sectionTop = faqSection.offsetTop;
        const sectionHeight = faqSection.offsetHeight;
        const rightHeight = faqRight.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Check if we're in the FAQ section
        const inSection = scrollPosition + windowHeight > sectionTop && 
                         scrollPosition < sectionTop + sectionHeight;
        
        // Check if right content has finished scrolling
        const rightFinished = scrollPosition > sectionTop + sectionHeight - windowHeight;
        
        setIsSticky(inSection && !rightFinished);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
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
      "Timelines depend on project complexity. A basic business website typically takes 1–2 weeks, while an eCommerce or custom project may take 3–6 weeks. I always provide a detailed timeline after understanding your requirements."
  },
  {
    icon: Zap,
    question: "Do you offer website speed and SEO optimization?",
    answer:
      "Yes, I specialize in speed optimization using tools like WP Rocket and best SEO practices. I ensure your website loads quickly, performs well on Google PageSpeed Insights, and follows on-page SEO standards for better rankings."
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
      "I provide regular updates through Email, WhatsApp, or your preferred platform. You’ll get progress reports, preview links, and timely feedback sessions throughout the development process."
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Questions
                  </span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-pink-500"></div>
              </div>
              
              <p className="text-muted-foreground dark:text-gray-400 mb-8 text-lg">
                Have questions? Here are the most common ones I receive. 
                If you don't find your answer here, feel free to reach out!
              </p>

              <div className="p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg border border-purple-500/30">
                <h4 className="text-xl mb-2">Still have questions?</h4>
                <p className="text-gray-300 mb-4">
                  Can't find the answer you're looking for? Let's talk!
                </p>
                <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right - Scrollable FAQs */}
          <div id="faq-right" className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card dark:bg-gray-800 rounded-lg border border-border dark:border-gray-700 overflow-hidden hover:border-purple-500/50 transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent dark:hover:bg-gray-750 transition-colors"
                >
                  <span className="text-foreground dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-muted-foreground dark:text-gray-400 border-t border-border dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
