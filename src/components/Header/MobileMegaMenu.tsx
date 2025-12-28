"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { services, TRAININGS_MENU } from "./menuData";
import type { MenuSection } from "./menuData";

type Props = {
  onNavigate?: () => void;
};

export function MobileMegaMenu({ onNavigate }: Props) {
  const mainLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "FAQ", href: "/#faq-section" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Connect", href: "/ahtsham-connect" },
  ];

  const renderSections = (sections: MenuSection[]) => (
    <div className="space-y-5">
      {sections.map((section) => (
        <div key={section.heading}>
          <p className="mb-2 text-xs font-semibold uppercase opacity-70">
            {section.heading}
          </p>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="
        w-full
        max-h-[calc(100vh-96px)]
        overflow-y-auto
        rounded-2xl
        bg-white dark:bg-black
        border dark:border-white/10
        shadow-xl
        p-5
      "
    >
      {/* Main Links */}
      <ul className="space-y-3 mb-6">
        {mainLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="block text-sm font-medium hover:text-purple-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Accordions */}
      <Accordion type="multiple" className="w-full space-y-2">
        <AccordionItem value="services">
          <AccordionTrigger>Services</AccordionTrigger>
          <AccordionContent>{renderSections(services)}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="training">
          <AccordionTrigger>Training</AccordionTrigger>
          <AccordionContent>{renderSections(TRAININGS_MENU)}</AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* CTA */}
      <Link
        href="/schedule"
        onClick={onNavigate}
        className="mt-6 block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-center text-sm text-white"
      >
        Hire Me
      </Link>
    </div>
  );
}
