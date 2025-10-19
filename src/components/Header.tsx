"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
  className={`fixed z-50 transition-all duration-500 ${
    isScrolled
      ? "top-0 left-0 right-0"
      : "top-4 left-4 right-4 md:left-8 md:right-8"
  }`}
  style={{
    backgroundColor: "var(--header-bg)",
    color: "var(--header-text)",
    backdropFilter: "blur(10px)" // optional for nice glassy effect
  }}
>
  <div
    className={`transition-all duration-500 ${
      isScrolled
        ? "shadow-lg border-b border-border"
        : "shadow-xl rounded-2xl border"
    }`}
  >
    <div className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? "py-3" : "py-4"}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div style={{ color: "var(--header-text)" }}>
          <span className={`transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl"}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Mirza
            </span>{" "}
            Ahtsham
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-3 py-2 border border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full hover:bg-accent text-sm transition-all duration-300"
              style={{ color: "var(--header-text)" }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme toggle & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-accent transition-all duration-300">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="rounded-lg px-6 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-accent transition-colors">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-border" style={{ backgroundColor: "var(--header-bg)", color: "var(--header-text)" }}>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: "var(--header-text)" }}
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 rounded-lg mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-300">
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </div>
  </div>
</header>

  );
}
