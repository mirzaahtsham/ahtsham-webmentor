"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { Zap } from "lucide-react";
import type { MenuSection } from "./menuData";
import { megaMenuCategoryColors } from "@/lib/megamenu-colors";
import { cn } from "@/lib/utils";

/* ---------------- TYPES ---------------- */

type CTAConfig = {
  enabled: boolean;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  media?: ReactNode;
};

type MegaMenuLayoutProps = {
  isScrolled: boolean;
  onKeepOpen: () => void;
  onClose: () => void;

  title: string;
  href: string;
  sections: MenuSection[];
  cta?: CTAConfig;
};

/* ---------------- COMPONENT ---------------- */

export function MegaMenuLayout({
  isScrolled,
  onKeepOpen,
  onClose,
  title,
  href,
  sections,
  cta,
}: MegaMenuLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "absolute left-0 right-0 z-50 hidden md:block",
        isScrolled ? "top-[calc(100%+8px)]" : "top-full"
      )}
      onMouseEnter={onKeepOpen}
      onMouseLeave={onClose}
      role="menu"
    >
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl border bg-white/95 backdrop-blur-xl shadow-2xl dark:bg-gray-950/95">
          <div className="grid grid-cols-1 gap-10 p-10 lg:grid-cols-4">

            {/* ---------- SECTIONS ---------- */}
            {sections.map((section) => {
              const colors = megaMenuCategoryColors[section.slug];

              return (
                <div key={section.heading}>
                  {/* Category Heading */}
                  <h3
                    className={cn(
                      "mb-6 text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                      colors.gradient
                    )}
                  >
                    {section.heading}
                  </h3>

                  <div className="space-y-1">
                    {section.items.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={index}
                          href={item.href}
                          role="menuitem"
                          tabIndex={0}
                          onFocus={onKeepOpen}
                          onBlur={onClose}
                          className={cn(
                            "group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                            colors.hoverBg
                          )}
                        >
                          {Icon && (
                            <Icon
                              className={cn(
                                "mt-0.5 h-4 w-4 shrink-0 transition-colors",
                                colors.icon
                              )}
                            />
                          )}

                          <div className="min-w-0">
                            <div
                              className={cn(
                                "truncate text-sm font-medium transition-colors",
                                colors.text
                              )}
                            >
                              {item.title}
                            </div>

                            {item.description && (
                              <p
                                className={cn(
                                  "truncate text-xs transition-colors opacity-80",
                                  colors.text
                                )}
                              >
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* ---------- CTA ---------- */}
            {cta?.enabled && (
              <div className="relative">
                <div className="sticky top-6 space-y-4">
                  <div className="rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-6 text-white shadow-lg">
                    {cta.media && <div className="mb-4">{cta.media}</div>}

                    <h3 className="mb-2 text-sm font-semibold">{cta.title}</h3>
                    <p className="mb-4 text-sm opacity-90">
                      {cta.description}
                    </p>

                    <Link
                      href={cta.href}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-purple-600 transition hover:bg-gray-100"
                    >
                      {cta.buttonText}
                    </Link>
                  </div>

                  {/* Quick Actions */}
                  <div className="rounded-xl border p-5">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-medium">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      Quick Actions
                    </h4>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <Link href={href} className="block hover:text-foreground">
                        View All {title}
                      </Link>
                      <Link href="/portfolio" className="block hover:text-foreground">
                        Portfolio
                      </Link>
                      <Link href="/contact" className="block hover:text-foreground">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}
