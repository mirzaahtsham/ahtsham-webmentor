"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface IconItem {
  file: string;
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
    { file: "OpenAI.svg" },
    { file: "Claude.svg" },
    { file: "Chatbots.svg" },
    { file: "Docker.svg" },
    { file: "Git.svg" },
    { file: "Github.svg" },
    { file: "Postman.svg" },
    { file: "Postmark.svg" },
    { file: "VSCode.svg" },
    { file: "JavaScript.svg" },
    { file: "TailwindCSS.svg" },
    { file: "MongoDB.svg" },
    { file: "Supabase.svg" },
    // { file: "Dialogflow.svg" },
    // { file: "make-com.svg" },
    // { file: "Zapier.svg" },
    // { file: "N8N.svg" },
    // { file: "Vector-Database.svg" },
  ];

  const webDevTools: IconItem[] = [
    { file: "React.svg" },
    { file: "Next-js.svg" },
    { file: "Node-js.svg" },
    { file: "TypeScript.svg" },
    { file: "logos-npm-icon.svg" },
    { file: "FastAPI.svg" },
    { file: "GraphQL.svg" },
    { file: "PostgreSQL.svg" },
    // { file: "Prisma.svg" },
  ];

  const cmsAndDesign: IconItem[] = [
    { file: "logos-wordpress-icon.svg" },
    { file: "logos-shopify.svg" },
    { file: "logos-wix.svg" },
    { file: "logos-woocommerce-icon.svg" },
    { file: "logos-paypal.svg" },
    { file: "Stripe.svg" },
    { file: "logos-adobe-illustrator.svg" },
    { file: "logos-adobe-photoshop.svg" },
    { file: "logos-figma.svg" },
    // { file: "Wordpress.svg" },
  ];

  const infraAndPlatforms: IconItem[] = [
    { file: "Vercel.svg" },
    { file: "logos-netlify-icon.svg" },
    { file: "logos-cloudflare-icon.svg" },
    { file: "logos-cpanel.svg" },
    { file: "logos-namecheap.svg" },
    { file: "logos-neon-icon.svg" },
    { file: "GCP.svg" },
    { file: "logos-upwork.svg" },
    { file: "fiverr-icon.svg" },
    { file: "logos-meta-icon.svg" },
    // { file: "AWS.svg" },
    // { file: "logos-youtube.svg" },
  ];

  const toolsAndSecurity: IconItem[] = [
    { file: "logos-hcaptcha-icon.svg" },
    { file: "logos-recaptcha.svg" },
    { file: "logos-blogger.svg" },
    { file: "logos-bing.svg" },
    { file: "logos-google-analytics.svg" },
    { file: "logos-google-tag-manager.svg" },
    { file: "logos-google-search-console.svg" },
    // { file: "logos-partytown-icon.svg" },
    // { file: "logos-openai-icon.svg" },
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
          <h2 className="text-4xl font-bold md:text-5xl mb-4">Expertise Across</h2>
          <h3 className="text-3xl md:text-4xl mb-4">
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
              Diverse Platforms
            </span>{" "}
            <span className="text-3xl md:text-4xl mb-6">
              &<span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                Development Tools
              </span>
            </span>
          </h3>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Skilled in leading CMS platforms, frameworks, and modern web tools — enabling
            end-to-end solutions from design to deployment.
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
