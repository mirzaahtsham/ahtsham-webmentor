"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface IconItem {
  file: string;
  label?: string;
}

// 🧩 Helper: format filename → readable name
const formatName = (file: string) => {
  return file
    .replace(/\.(svg|png|jpg)$/i, "")
    .replace(/^logos[-_]?/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export function IconMarquee() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );

    const el = document.getElementById("icon-marquee-section");
    if (el) observer.observe(el);

    // ✅ Proper cleanup
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);


  // ====== GROUPED ICONS (organized) ======
  const aiAndAutomation: IconItem[] = [
    { file: "OpenAI.svg", label: "OpenAI AI Tools for Web Automation" },
    { file: "Claude.svg", label: "Claude AI for Content and Code" },
    { file: "Chatbots.svg", label: "AI Chatbots Development" },
    { file: "Docker.svg", label: "Docker Containers & DevOps" },
    { file: "Git.svg", label: "Git Version Control" },
    { file: "Github.svg", label: "GitHub Repository Management" },
    { file: "Postman.svg", label: "API Testing with Postman" },
    { file: "VSCode.svg", label: "VS Code for Development" },
    { file: "JavaScript.svg", label: "JavaScript Frontend & Backend" },
    { file: "TailwindCSS.svg", label: "Tailwind CSS for UI Design" },
    { file: "MongoDB.svg", label: "MongoDB Database Management" },
    { file: "Supabase.svg", label: "Supabase Backend Solutions" },
    // { file: "Dialogflow.svg" },
    // { file: "make-com.svg" },
    // { file: "Zapier.svg" },
    // { file: "N8N.svg" },
    // { file: "Vector-Database.svg" },
  ];

  const webDevTools: IconItem[] = [
    { file: "React.svg", label: "React.js Frontend Development" },
    { file: "Next-js.svg", label: "Next.js Modern Web Apps" },
    { file: "Node-js.svg", label: "Node.js Backend Development" },
    { file: "TypeScript.svg", label: "TypeScript for Scalable Web Apps" },
    { file: "logos-npm-icon.svg", label: "NPM Package Management" },
    { file: "FastAPI.svg", label: "FastAPI Python Backend Framework" },
    { file: "GraphQL.svg", label: "GraphQL APIs and Query Language" },
    { file: "PostgreSQL.svg", label: "PostgreSQL Database Management" },
    // { file: "Prisma.svg", label: "Prisma ORM for Databases" },
  ];

  const cmsAndDesign: IconItem[] = [
    { file: "logos-wordpress-icon.svg", label: "WordPress Website Development" },
    { file: "logos-shopify.svg", label: "Shopify Store Design & Customization" },
    { file: "logos-wix.svg", label: "Wix Website Builder Expertise" },
    { file: "logos-woocommerce-icon.svg", label: "WooCommerce Store Integration" },
    { file: "logos-paypal.svg", label: "PayPal Payment Integration" },
    { file: "Stripe.svg", label: "Stripe Payment Gateway Integration" },
    { file: "logos-adobe-illustrator.svg", label: "Adobe Illustrator for UI Design" },
    { file: "logos-adobe-photoshop.svg", label: "Adobe Photoshop for Web Design" },
    { file: "logos-figma.svg", label: "Figma for Prototyping & UI/UX" },
    { file: "Wordpress.svg", label: "WordPress Theme & Plugin Customization" },
  ];

  const infraAndPlatforms: IconItem[] = [
    { file: "Vercel.svg", label: "Vercel Deployment & Hosting" },
    { file: "logos-netlify-icon.svg", label: "Netlify Hosting & Automation" },
    { file: "logos-cloudflare-icon.svg", label: "Cloudflare CDN & Security" },
    { file: "logos-cpanel.svg", label: "cPanel Hosting Management" },
    { file: "logos-namecheap.svg", label: "Domain Management with Namecheap" },
    { file: "logos-neon-icon.svg", label: "Neon Postgres & Cloud Database" },
    { file: "GCP.svg", label: "Google Cloud Platform Services" },
    { file: "logos-upwork.svg", label: "Freelancing & Client Platforms (Upwork)" },
    { file: "fiverr-icon.svg", label: "Freelancing Marketplace (Fiverr)" },
    { file: "logos-meta-icon.svg", label: "Meta (Facebook) Ads & Marketing Tools" },
    // { file: "AWS.svg", label: "Amazon Web Services (AWS)" },
    // { file: "logos-youtube.svg", label: "YouTube Video Content Creation" },
  ];

  const toolsAndSecurity: IconItem[] = [
    { file: "logos-hcaptcha-icon.svg", label: "hCaptcha Security Integration" },
    { file: "logos-recaptcha.svg", label: "Google reCAPTCHA Protection" },
    { file: "logos-blogger.svg", label: "Blogger Platform Expertise" },
    { file: "logos-bing.svg", label: "Bing Webmaster & SEO Tools" },
    { file: "logos-google-analytics.svg", label: "Google Analytics Insights" },
    { file: "logos-google-tag-manager.svg", label: "Google Tag Manager Setup" },
    { file: "logos-google-search-console.svg", label: "Google Search Console SEO Management" },
    // { file: "logos-partytown-icon.svg", label: "Partytown JS Optimization" },
    // { file: "logos-openai-icon.svg", label: "OpenAI API for Web Automation" },
  ];

  // Distribute into 3 marquee rows for visual balance
  const row1 = [...aiAndAutomation, ...webDevTools.slice(0, 4)];
  const row2 = [...cmsAndDesign, ...infraAndPlatforms.slice(0, 5)];
  const row3 = [
    ...webDevTools.slice(4),
    ...infraAndPlatforms.slice(5),
    ...toolsAndSecurity,
  ];

  const rows = [row1, row2, row3];

  return (
    <section
      id="icon-marquee-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-foreground dark:text-white overflow-hidden"
    >
      {/* ======= Heading ======= */}
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-gray-900 dark:text-gray-100 font-bold md:text-5xl mb-4">Expertise Across</h2>
          <h3 className="text-3xl md:text-4xl mb-4 text-center">
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
              Platforms
            </span>{" "}
            <span className="text-gray-900 dark:text-gray-100">
              &{" "}
            </span>
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Development Tools
            </span>
          </h3>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Skilled in leading CMS platforms, frameworks, and modern web development tools delivering end-to-end solutions from website design, eCommerce setup, performance optimization, to full-stack web apps.
          </p>
        </motion.div>
      </div>

      {/* ======= ICON MARQUEES ======= */}
      <div className="space-y-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <div
              className={`flex gap-8 ${rowIndex % 2 === 0 ? "animate-marquee-rtl" : "animate-marquee-ltr"
                }`}
            >
              {[...row, ...row].map((item, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="shrink-0 w-20 h-20 sm:w-16 sm:h-16 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group relative"
                >
                  <img
                    src={`/icons/${item.file}`}
                    alt={formatName(item.file)}
                    aria-label={item.label || formatName(item.file)}
                    className="w-10 h-10 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute top-full mt-2 text-xs text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {formatName(item.file)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-gray-900 dark:text-gray-400 max-w-6xl mx-auto text-center mb-12 pt-11">
          I leverage <span className="font-medium">modern web technologies</span> and <span className="font-medium">popular CMS platforms</span> to build scalable websites, eCommerce stores, and web apps.
          My toolkit includes <span className="font-medium">WordPress, Shopify, Wix, React, Next.js, Node.js, TypeScript, Tailwind CSS, and more</span>,
          enabling <span className="font-medium">fast, responsive, and SEO-optimized digital experiences</span> for businesses, startups, and freelancers. Whether you're looking for <span className="font-medium">website development, Shopify customization, WordPress optimization, or full-stack consulting</span>, I bring the expertise, tools, and practical guidance to make your digital project a success.
          Let's build fast, beautiful, and high-performing websites together.
        </p>
      </div>

      {/* ======= STYLES ======= */}
      <style jsx>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite;
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }
        /* Slightly faster animation on mobile */
        @media (max-width: 768px) {
          .animate-marquee-rtl {
            animation-duration: 22s;
          }
          .animate-marquee-ltr {
            animation-duration: 22s;
          }
        }
        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
          animate-marquee-rtl,
          .animate-marquee-ltr {
          will-change: transform;
          }
      `}</style>
    </section>
  );
}
