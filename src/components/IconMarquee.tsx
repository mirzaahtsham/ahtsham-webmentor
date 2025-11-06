"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { 
  Wrench, 
  Database, 
  Globe, 
  Zap, 
  Code2, 
  Layers, 
  Palette,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Search,
  FileText,
  Cloud,
  Server,
  Rocket,
  Package,
  Box,
  Settings,
  PenTool,
  Monitor,
  Smartphone,
  Workflow,
  GitBranch,
  Layout,
  Component,
  Plug
} from "lucide-react";

interface IconItem {
  icon: React.ReactNode;
  name: string;
}

export function IconMarquee() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("icon-marquee-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // ===== ICON DATA =====
  const row1Icons: IconItem[] = [
    { icon: <Wrench className="w-8 h-8" />, name: "WordPress" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "Shopify" },
    { icon: <Layout className="w-8 h-8" />, name: "Wix" },
    { icon: <FileText className="w-8 h-8" />, name: "Blogger" },
    { icon: <Globe className="w-8 h-8" />, name: "Webflow" },
    { icon: <Component className="w-8 h-8" />, name: "Elementor" },
    { icon: <Box className="w-8 h-8" />, name: "WooCommerce" },
    { icon: <Layers className="w-8 h-8" />, name: "Squarespace" },
    { icon: <PenTool className="w-8 h-8" />, name: "Figma" },
    { icon: <Monitor className="w-8 h-8" />, name: "Framer" },
    { icon: <Smartphone className="w-8 h-8" />, name: "React Native" },
    { icon: <Workflow className="w-8 h-8" />, name: "Zapier" },
    { icon: <Database className="w-8 h-8" />, name: "Airtable" },
  ];

  const row2Icons: IconItem[] = [
    { icon: <Code2 className="w-8 h-8" />, name: "React" },
    { icon: <Rocket className="w-8 h-8" />, name: "Next.js" },
    { icon: <Palette className="w-8 h-8" />, name: "Tailwind" },
    { icon: <Layers className="w-8 h-8" />, name: "Vue.js" },
    { icon: <Database className="w-8 h-8" />, name: "MongoDB" },
    { icon: <Server className="w-8 h-8" />, name: "Node.js" },
    { icon: <GitBranch className="w-8 h-8" />, name: "GitHub" },
    { icon: <Cloud className="w-8 h-8" />, name: "Vercel" },
    { icon: <Zap className="w-8 h-8" />, name: "Netlify" },
    { icon: <Settings className="w-8 h-8" />, name: "Postman" },
    { icon: <Package className="w-8 h-8" />, name: "NPM" },
    { icon: <Code2 className="w-8 h-8" />, name: "TypeScript" },
    { icon: <Globe className="w-8 h-8" />, name: "Docker" },
  ];

  const row3Icons: IconItem[] = [
    { icon: <BarChart3 className="w-8 h-8" />, name: "Analytics" },
    { icon: <Search className="w-8 h-8" />, name: "Google Search" },
    { icon: <MessageSquare className="w-8 h-8" />, name: "Tawk.to" },
    { icon: <FileText className="w-8 h-8" />, name: "Jotform" },
    { icon: <Plug className="w-8 h-8" />, name: "Yoast SEO" },
    { icon: <Zap className="w-8 h-8" />, name: "LiteSpeed" },
    { icon: <Globe className="w-8 h-8" />, name: "Cloudflare" },
    { icon: <Server className="w-8 h-8" />, name: "Hostinger" },
    { icon: <Cloud className="w-8 h-8" />, name: "SiteGround" },
    { icon: <Database className="w-8 h-8" />, name: "MySQL" },
    { icon: <Settings className="w-8 h-8" />, name: "cPanel" },
    { icon: <BarChart3 className="w-8 h-8" />, name: "GTM" },
    { icon: <Search className="w-8 h-8" />, name: "GSC" },
  ];

  return (
    <section
      id="icon-marquee-section"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-foreground dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl mb-4">
            Expertise Across
          </h2>
          <h3 className="text-3xl md:text-4xl mb-4">
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
              Diverse Platforms
            </span> <span className="text-3xl md:text-4xl mb-6">
            &<span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Development Tools</span>
          </span>
          </h3>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Skilled in leading CMS platforms, frameworks, and modern web tools —
            enabling end-to-end solutions from design to deployment.
          </p>
        </motion.div>
      </div>

      {/* ICON MARQUEES */}
      <div className="space-y-8">
        {/* Row 1 - RTL */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee-rtl">
            {[...row1Icons, ...row1Icons].map((item, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
                title={item.name}
              >
                <div className="text-purple-600 dark:text-purple-400">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - LTR */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee-ltr">
            {[...row2Icons, ...row2Icons].map((item, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
                title={item.name}
              >
                <div className="text-pink-600 dark:text-pink-400">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - RTL */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee-rtl">
            {[...row3Icons, ...row3Icons].map((item, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
                title={item.name}
              >
                <div className="text-cyan-600 dark:text-cyan-400">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite;
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }

        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}