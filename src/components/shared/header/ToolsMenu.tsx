"use client";

import {
  Mail,
  Rocket,
  Zap,
  Globe,
  Blocks,
  Code,
  Palette,
  Briefcase,
} from "lucide-react";
import React from "react";
import type { SVGProps } from "react";

/* ---------------- TYPES ---------------- */

interface ServiceItem {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient?: string;
}

interface ServicesData {
  development: ServiceItem[];
  design: ServiceItem[];
  consulting: ServiceItem[];
}

interface ServicesMenuProps {
  isScrolled: boolean;

  /** services data (same object you already use in header) */
  services: ServicesData;

  /** keep menu open on hover */
  onKeepOpen: () => void;

  /** close menu on mouse leave */
  onClose: () => void;

  /** open contact modal */
  onOpenModal: () => void;
}

/* ---------------- COMPONENT ---------------- */


export default function ToolsMenu({
  isScrolled,
  services,
  onKeepOpen,
  onClose,
  onOpenModal,
}: ServicesMenuProps) {
  return (
    <div
      className={`absolute left-0 right-0 transition-all duration-300 hidden md:block ${
        isScrolled ? "top-[calc(100%+0.5rem)]" : "top-full"
      }`}
      onMouseEnter={onKeepOpen}
      onMouseLeave={onClose}
    >
      {/* Mega Menu - Full Width */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto bg-background/98 dark:bg-gray-900/98 backdrop-blur-2xl shadow-2xl rounded-2xl border border-border dark:border-gray-800 overflow-hidden">
          <div className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

              {/* Free Tools */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 whitespace-nowrap">
                    Development
                  </h3>
                </div>

                <div className="space-y-1">
                  {services.development.map((service, index) => {
                    const Icon = service.icon as React.FC<SVGProps<SVGSVGElement>>;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                      >
                        <Icon
                          className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:scale-110`}
                          style={{ stroke: `url(#gradient-${index})` }}
                        />
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient
                              id={`gradient-${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" className="text-purple-500" />
                              <stop offset="100%" className="text-pink-500" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div className="flex-1 min-w-0">
                          <div className="text-foreground dark:text-white text-sm whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                            {service.name}
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-500 truncate">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Paid Tools */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 whitespace-nowrap">
                    Design
                  </h3>
                </div>

                <div className="space-y-1">
                  {services.design.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                        <div className="flex-1 min-w-0">
                          <div className="text-foreground dark:text-white text-sm whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                            {service.name}
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-500 truncate">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Develop Your Saas Products Consultanion */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 whitespace-nowrap">
                    Consulting
                  </h3>
                </div>

                <div className="space-y-1">
                  {services.consulting.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 text-green-500 dark:text-green-400 transition-all duration-300 group-hover:scale-110" />
                        <div className="flex-1 min-w-0">
                          <div className="text-foreground dark:text-white text-sm whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
                            {service.name}
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-500 truncate">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Featured Card */}
              <div className="relative">
                <div className="sticky top-6 space-y-4">

                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="absolute inset-0 opacity-20" />
                    <div className="relative">
                      <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-white mb-2 whitespace-nowrap">
                        Start Your Project
                      </h3>

                      <p className="text-sm text-white/90 mb-4 leading-relaxed">
                        Get a free consultation and let's discuss how we can bring your ideas to life.
                      </p>

                      <button
                        onClick={() => {
                          onClose();
                          onOpenModal();
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-100 text-purple-600 rounded-lg transition-all duration-300 text-sm group-hover:shadow-lg"
                      >
                        <Mail className="w-4 h-4" />
                        Get Started
                      </button>
                    </div>
                  </div>

                  <div className="bg-accent/30 dark:bg-gray-800/30 rounded-xl p-5 border border-border dark:border-gray-800">
                    <h4 className="text-foreground dark:text-white text-sm mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Quick Actions
                    </h4>
                    <div className="space-y-2">
                      <a href="/services" className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors">
                        <Globe className="w-3.5 h-3.5" />
                        <span className="whitespace-nowrap">View All Services</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors">
                        <Blocks className="w-3.5 h-3.5" />
                        <span className="whitespace-nowrap">Portfolio</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span className="whitespace-nowrap">Contact Us</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
