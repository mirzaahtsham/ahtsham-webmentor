"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "../logo/Logo";
import EyeFollow from "@/components/ui/EyeFollow";
import { ThemeSwitcherC } from "@/components/ThemeButton";
import { ContactFormModal } from "../ContactFormModal";

import { ServicesMenu } from "./ServicesMenu";
import { TrainingsMenu } from "./TrainingsMenu";
import { MobileMegaMenu } from "./MobileMegaMenu";

export function HeaderWithMegaMenu() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeMega, setActiveMega] =
    useState<"services" | "trainings" | null>(null);

  const keepMegaOpen = () => { };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        ref={headerRef}
        className={`fixed z-50 transition-all duration-500 ${isScrolled ? "top-2 left-4 right-4" : "top-0 left-0 right-0"
          }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${isScrolled
            ? "max-w-6xl bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl"
            : "max-w-7xl bg-transparent"
            }`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Logo size={40} />
              <div className="flex gap-1">
                <EyeFollow size={16} pupilSize={6} />
                <EyeFollow size={16} pupilSize={6} />
              </div>

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

            {/* DESKTOP NAV (≥1024px) */}
            <nav className="hidden lg:flex items-center gap-2 px-2 text-gray-900 dark:text-gray-100">
              <Link href="/#about" className="nav-link">About</Link>
              <Link href="/#experience" className="nav-link">Experience</Link>
              <Link href="/#faq-section" className="nav-link">FAQ</Link>
              <Link href="/#testimonials" className="nav-link">Testimonials</Link>

              <span
                onMouseEnter={() => setActiveMega("services")}
                onMouseLeave={() => setActiveMega(null)}
                className="nav-link cursor-pointer"
              >
                Services
              </span>

              <span
                onMouseEnter={() => setActiveMega("trainings")}
                onMouseLeave={() => setActiveMega(null)}
                className="nav-link cursor-pointer"
              >
                Training
              </span>

              <Link href="/ahtsham-connect" className="nav-link">
                Connect
              </Link>
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              <Link
                href="/schedule"
                className="hidden lg:inline-flex px-4 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
              >
                Schedule a Call
              </Link>

              <div className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/10 dark:hover:bg-white/10">
                <ThemeSwitcherC />
              </div>

              {/* HAMBURGER (<1024px) */}
              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

         {/* DESKTOP MEGA MENUS (NO GAP / NO BLINK) */}
          <AnimatePresence>
            {activeMega === "services" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onMouseEnter={() => setActiveMega("services")}
                onMouseLeave={() => setActiveMega(null)}
              >
                <ServicesMenu
                  isScrolled={isScrolled}
                  onKeepOpen={keepMegaOpen}
                  onClose={() => setActiveMega(null)}
                  onOpenModal={() => setIsModalOpen(true)}
                />
              </motion.div>
            )}

            {activeMega === "trainings" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onMouseEnter={() => setActiveMega("trainings")}
                onMouseLeave={() => setActiveMega(null)}
              >
                <TrainingsMenu
                  isScrolled={isScrolled}
                  onKeepOpen={keepMegaOpen}
                  onClose={() => setActiveMega(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* MOBILE MENU - INSIDE HEADER WHEN SCROLLED */}
          <AnimatePresence>
            {isMobileMenuOpen && isScrolled && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <MobileMegaMenu
                  onNavigate={() => setIsMobileMenuOpen(false)}
                  isScrolled={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* MOBILE MENU - OUTSIDE HEADER WHEN NOT SCROLLED */}
      <AnimatePresence>
        {isMobileMenuOpen && !isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="fixed top-[88px] left-0 right-0 z-40 lg:hidden px-4"
          >
            <MobileMegaMenu
              onNavigate={() => setIsMobileMenuOpen(false)}
              isScrolled={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
