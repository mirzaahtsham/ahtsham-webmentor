"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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
      question: "What services do you offer as a full-stack developer?",
      answer: "I offer comprehensive web development services including frontend development with React/Next.js, backend development with Node.js, database design, API development, cloud deployment, and maintenance. I also create technical content and documentation."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines during the initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "My process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Launch, 5) Maintenance & Support. I maintain clear communication throughout each phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! I offer various support packages including bug fixes, updates, performance optimization, and feature enhancements. We can discuss the best support plan for your needs."
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: "I specialize in React, Next.js, Node.js, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, AWS, and various other modern technologies. I'm always learning and adapting to new tools."
    },
    {
      question: "Can you work with existing projects or only new builds?",
      answer: "Absolutely! I can work on existing projects, whether it's adding new features, refactoring code, fixing bugs, or completely rebuilding parts of the application. I'm comfortable jumping into codebases at any stage."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "I believe in transparent communication. I provide regular updates through your preferred channel (Slack, Email, etc.), weekly progress reports, and am available for calls/meetings as needed."
    },
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
