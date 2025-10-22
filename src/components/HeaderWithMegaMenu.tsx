"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Code, Palette, Smartphone, Cloud, Layers, FileText, Mail, Briefcase } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ContactFormModal } from "./ContactFormModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeaderWithMegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = {
    development: [
      { name: "Web Development", icon: Code, description: "Modern responsive websites" },
      { name: "Mobile Apps", icon: Smartphone, description: "iOS & Android applications" },
      { name: "Cloud Solutions", icon: Cloud, description: "Scalable cloud infrastructure" },
    ],
    design: [
      { name: "UI/UX Design", icon: Palette, description: "Beautiful user experiences" },
      { name: "Design Systems", icon: Layers, description: "Consistent design patterns" },
      { name: "Prototyping", icon: FileText, description: "Interactive prototypes" },
    ],
  };

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 left-0 right-0"
            : "top-4 left-4 right-4 md:left-8 md:right-8"
        }`}
      >
        <div className={`transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-border dark:border-gray-800" 
            : "bg-background/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl rounded-2xl border border-border dark:border-gray-800"
        }`}>
          <div className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? "py-3" : "py-4"}`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-foreground dark:text-white">
                <span className={`transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl"}`}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Mirza
                  </span>{" "}
                  Ahtsham
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2 bg-muted/50 dark:bg-gray-800/50 rounded-full px-3 py-2 border border-border dark:border-gray-700">
                {/* <a
                  href="/"
                  className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"
                >
                  Home
                </a> */}
                <Link
                  href="/#about"
                  className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"
                >
                  About
                </Link>
                
                {/* Services with Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveMenu("services")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {/* <button className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"> */}
                     <Link
                  href="/services"
                  className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"
                >Services
                </Link>
                  {/* </button> */}
                  
                  {/* Mega Menu Dropdown */}
                  {activeMenu === "services" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Development Column */}
                        <div className="space-y-3">
                          <h4 className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-3">Development</h4>
                          {services.development.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={index}
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1">
                                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-foreground dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground dark:text-gray-400 mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Design Column */}
                        <div className="space-y-3">
                          <h4 className="text-sm text-pink-600 dark:text-pink-400 uppercase tracking-wide mb-3">Design</h4>
                          {services.design.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={index}
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1">
                                    <Icon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-foreground dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground dark:text-gray-400 mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Featured Card */}
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                          <div className="mb-3">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                              alt="Featured work"
                              className="w-full h-24 object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="text-sm text-foreground dark:text-white mb-1">Need Help?</h4>
                          <p className="text-xs text-muted-foreground dark:text-gray-400 mb-3">
                            Not sure which service you need? Let's discuss your project.
                          </p>
                          <button
                            onClick={() => {
                              setActiveMenu(null);
                              setIsModalOpen(true);
                            }}
                            className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-lg hover:shadow-lg transition-all"
                          >
                            Get Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/linktree"
                  className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"
                >
                  Linktree
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-accent dark:hover:bg-gray-700 text-sm transition-all duration-300"
                >
                  Contact
                </Link>
              </nav>

              {/* Theme Toggle & CTA Button */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg hover:bg-accent dark:hover:bg-gray-800 transition-all duration-300 ${
                    isScrolled ? "scale-90" : ""
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className={`text-yellow-400 transition-all duration-300 ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                  ) : (
                    <Moon className={`text-purple-600 transition-all duration-300 ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                  )}
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 ${
                    isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
                  }`}
                >
                  Hire Me
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-foreground"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-border mt-4">
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Home</Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">About</Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Services</Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Work</Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Contact</Link>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-all mt-2"
                  >
                    Hire Me
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
