"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo/Logo";
import EyeFollow from "@/components/ui/EyeFollow";
import { ThemeSwitcherC } from "@/components/ThemeButton";
import { ContactFormModal } from "./ContactFormModal";

export function HeaderWithMegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${isScrolled
          ? "top-2 left-4 right-4"
          : "top-0 left-0 right-0"
          }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${isScrolled
            ? "max-w-6xl bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border dark:border-gray-50/5"
            : "max-w-7xl bg-transparent"
            }`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            {/* LOGO + EYES + TOOLTIP */}
            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Logo size={40} />

              {/* Eyes */}
              <div className="flex gap-1">
                <EyeFollow size={16} pupilSize={6} />
                <EyeFollow size={16} pupilSize={6} />
              </div>

              {/* TOOLTIP */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 mt-3 z-50"
                  >
                    <div className="relative p-[2px] rounded-xl bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7,#ec4899,#22d3ee,#a855f7)]">
                      <div className="rounded-xl bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 px-4 py-3 w-56">
                        <div className="font-bold text-sm">
                          Ahtsham Web Mentor
                        </div>
                        <div className="text-xs opacity-70 mt-0.5">
                          Teaching students • Delivering quality web solutions
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1 rounded-full text-gray-900 dark:text-gray-100 px-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#experience", label: "Experience" },
                { href: "/#faq-section", label: "FAQ" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/trainings", label: "Training" },
                { href: "/services", label: "Services" },
                { href: "/ahtsham-connect", label: "Connect" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm rounded-full transition hover:bg-black/10 dark:hover:bg-white/15"
                >
                  {item.label}
                </Link>
              ))}

              {/* MEGA MENU (KEPT COMMENTED – DO NOT REMOVE) */}
              {/*
              <MegaMenu />
              */}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              <Link
                href="/schedule"
                className="hidden md:inline-flex items-center px-4 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-gray-50 text-sm dark:bg-gradient-to-tr dark:from-purple-500 dark:to-pink-500 hover:brightness-110 transition"
              >
                Schedule a Call
              </Link>

              {/* SMALL ICON BUTTON (fixed hover size) */}
              <div className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/10 dark:hover:bg-white/10">
                <ThemeSwitcherC />
              </div>

              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU (FULL – NOTHING REMOVED) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="md:hidden px-6 pb-6"
              >
                <div className="rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 p-4 space-y-3">
                  {[
                    "About",
                    "Experience",
                    "Services",
                    "Ahtsham Connect",
                    "Testimonials",
                    "FAQ",
                  ].map((label) => (
                    <Link
                      key={label}
                      href={`/#${label.toLowerCase()}`}
                      className="block"
                    >
                      {label}
                    </Link>
                  ))}

                  {/* MOBILE MEGA MENU (KEPT COMMENTED) */}
                  {/*
                  <MobileMegaMenu />
                  */}

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  >
                    Hire Me
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}





// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Logo from "@/components/Logo";
// import { ThemeSwitcherC } from "@/components/ThemeButton";

// import {
//   Menu,
//   X,
//   Code,
//   Palette,
//   Smartphone,
//   Cloud,
//   Layers,
//   FileText,
// } from "lucide-react";
// import { ContactFormModal } from "./ContactFormModal";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function HeaderWithMegaMenu() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [isMegaMenuMobileOpen, setIsMegaMenuMobileOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const services = {
//     development: [
//       { name: "Web Development", icon: Code, description: "Modern responsive websites" },
//       { name: "Mobile Apps", icon: Smartphone, description: "iOS & Android applications" },
//       { name: "Cloud Solutions", icon: Cloud, description: "Scalable cloud infrastructure" },
//     ],
//     design: [
//       { name: "UI/UX Design", icon: Palette, description: "Beautiful user experiences" },
//       { name: "Design Systems", icon: Layers, description: "Consistent design patterns" },
//       { name: "Prototyping", icon: FileText, description: "Interactive prototypes" },
//     ],
//   };

//   return (
//     <>
//       <header
//         className={`fixed z-50 transition-all duration-500 ${
//           isScrolled ? "top-2 left-4 right-4 md:left-8 md:right-8" : "top-0 left-0 right-0"
//         }`}
//       >
//         <div
//           className={`transition-all duration-500 mx-auto ${
//             isScrolled
//               ? "max-w-5xl bg-gray-900/70 dark:bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-700 dark:border-gray-300"
//               : "max-w-6xl bg-transparent shadow-none border-b border-transparent"
//           }`}
//         >
//           <div className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? "py-3" : "py-4"}`}>
//             <div className="flex items-center justify-between">
//               {/* Logo: use text by default (variant prop configurable) */}
//               <div className="flex items-center">
//                 <Logo variant="text" size={isScrolled ? "sm" : "md"} />
//               </div>

//               {/* DESKTOP NAV */}
//               <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-3 border border-gray-300 dark:border-gray-700">
//                 {[
//                   { href: "/#about", label: "About" },
//                   { href: "/#experience", label: "Experience" },
//                   { href: "/#faq-section", label: "FAQ" },
//                   { href: "/services", label: "Services" },
//                 ].map((item, idx) => (
//                   <Link
//                     key={idx}
//                     href={item.href}
//                     className={`text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${
//                       isScrolled ? "text-xs py-1" : "text-sm py-1.5"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}

//                 {/* DESKTOP Mega Menu (commented for future use) */}
//                 {false && (
//                   <div
//                     className="relative"
//                     onMouseEnter={() => setActiveMenu("services")}
//                     onMouseLeave={() => setActiveMenu(null)}
//                   >
//                     <button className={`text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${isScrolled ? "text-xs py-1" : "text-sm py-1.5"}`}>
//                       Mega Menu
//                     </button>

//                     {activeMenu === "services" && (
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
//                         <div className="grid grid-cols-3 gap-6">
//                           {/* development, design & featured card (same as earlier) */}
//                           {/* ... your mega menu content (kept identical) ... */}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 <Link
//                   href="/ahtsham-connect"
//                   className={`text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${isScrolled ? "text-xs py-1" : "text-sm py-1.5"}`}
//                 >
//                   Connect
//                 </Link>

//                 <Link
//                   href="/schedule"
//                   className={`text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${isScrolled ? "text-xs py-1" : "text-sm py-1.5"}`}
//                 >
//                   Schedule
//                 </Link>
//               </nav>

//               {/* RIGHT: theme + CTA */}
//               <div className="hidden md:flex items-center gap-3">
//                 <Link href="/schedule" className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-300 ${isScrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2 text-sm"}`}>
//                   Hire Me
//                 </Link>

//                 {/* Theme switcher scaled on scroll */}
//                 <div className={`${isScrolled ? "scale-90" : "scale-100"} transition-transform duration-300`}>
//                   <ThemeSwitcherC />
//                 </div>
//               </div>

//               {/* MOBILE: theme switcher + hamburger (side-by-side) */}
//               <div className="md:hidden flex items-center gap-2">
//                 <div className="flex items-center gap-2">
//                   <div className={`${isScrolled ? "scale-90" : "scale-100"} transition-transform duration-300`}>
//                     <ThemeSwitcherC />
//                   </div>

//                   <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
//                     {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* MOBILE MENU (solid bg + dark mode) */}
//             {isMobileMenuOpen && (
//               <div className="md:hidden py-4 mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700">
//                 <nav className="flex flex-col gap-3 px-4">
//                   <Link href="/#about" className="text-gray-900 dark:text-gray-100 py-2">About</Link>

//                   {/* MOBILE MEGA MENU (kept commented for future) */}
//                   {/*
//                     <div className="...">
//                       // paste full mega menu if you want it to appear on mobile later
//                     </div>
//                   */}

//                   <button onClick={() => setIsMegaMenuMobileOpen(!isMegaMenuMobileOpen)} className="flex justify-between items-center text-gray-900 dark:text-gray-100 py-2">
//                     Mega Menu
//                     <span>{isMegaMenuMobileOpen ? "▲" : "▼"}</span>
//                   </button>

//                   {isMegaMenuMobileOpen && (
//                     <div className="pl-4 space-y-4">
//                       <div>
//                         <h4 className="text-purple-600 dark:text-purple-400 text-sm mb-2">Development</h4>
//                         {services.development.map((s, i) => {
//                           const Icon = s.icon;
//                           return <Link key={i} href="#" className="flex items-center gap-2 py-1 text-gray-800 dark:text-gray-300"><Icon className="w-4 h-4" /> {s.name}</Link>;
//                         })}
//                       </div>

//                       <div>
//                         <h4 className="text-pink-600 dark:text-pink-400 text-sm mb-2">Design</h4>
//                         {services.design.map((s, i) => {
//                           const Icon = s.icon;
//                           return <Link key={i} href="#" className="flex items-center gap-2 py-1 text-gray-800 dark:text-gray-300"><Icon className="w-4 h-4" /> {s.name}</Link>;
//                         })}
//                       </div>
//                     </div>
//                   )}

//                   <Link href="/services" className="text-gray-900 dark:text-gray-100 py-2">Services</Link>
//                   <Link href="/ahtsham-connect" className="text-gray-900 dark:text-gray-100 py-2">Ahtsham Connect</Link>
//                   <Link href="/#testimonials" className="text-gray-900 dark:text-gray-100 py-2">Testimonials</Link>
//                   <Link href="#faq" className="text-gray-900 dark:text-gray-100 py-2">FAQ</Link>

//                   <button
//                     onClick={() => {
//                       setIsMobileMenuOpen(false);
//                       setIsModalOpen(true);
//                     }}
//                     className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg mt-2"
//                   >
//                     Hire Me
//                   </button>
//                 </nav>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* CONTACT MODAL */}
//       <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// }
