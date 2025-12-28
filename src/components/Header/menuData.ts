import { LucideIcon } from "lucide-react";
import {
  Code,
  Palette,
  Briefcase,
  GraduationCap,
} from "lucide-react";

/* ---------- CATEGORY SLUG TYPE ---------- */
/**
 * Used for:
 * - category-based colors
 * - gradients
 * - hover background syncing
 * - TypeScript-safe mega menu rendering
 */
export type MenuCategorySlug =
  | "development"
  | "design"
  | "consulting"
  | "frontend"
  | "cms"
  | "advanced";

/* ---------- TYPES ---------- */

export type MenuItem = {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  gradient?: string; // used for optional per-item styling
};

export type MenuSection = {
  heading: string;
  slug: MenuCategorySlug; // ✅ REQUIRED (FIXES TS ERRORS)
  items: MenuItem[];
};

/* ---------- SERVICES ---------- */

export const services: MenuSection[] = [
  {
    heading: "Development",
    slug: "development",
    items: [
      {
        title: "Web Development",
        description: "Next.js, React, Tailwind",
        href: "/services/web-development",
        icon: Code,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Backend APIs",
        description: "Node, Prisma, PostgreSQL",
        href: "/services/backend",
        icon: GraduationCap,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Performance Optimization",
        description: "Core Web Vitals",
        href: "/services/performance",
        icon: Code,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "SEO Optimization",
        description: "Technical & On-page SEO",
        href: "/services/seo",
        icon: Code,
        gradient: "from-purple-500 to-pink-500",
      },
    ],
  },
  {
    heading: "Design",
    slug: "design",
    items: [
      {
        title: "UI / UX Design",
        description: "Modern clean interfaces",
        href: "/services/ui-ux",
        icon: Palette,
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Landing Pages",
        description: "High conversion pages",
        href: "/services/landing-pages",
        icon: Palette,
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Design Systems",
        description: "Reusable UI components",
        href: "/services/design-system",
        icon: Palette,
        gradient: "from-blue-500 to-cyan-500",
      },
    ],
  },
  {
    heading: "Consulting",
    slug: "consulting",
    items: [
      {
        title: "Tech Consulting",
        description: "Architecture & scaling",
        href: "/services/consulting",
        icon: Briefcase,
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Startup Mentorship",
        description: "Idea to launch",
        href: "/services/startup",
        icon: Briefcase,
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Code Review",
        description: "Quality & best practices",
        href: "/services/code-review",
        icon: Briefcase,
        gradient: "from-green-500 to-emerald-500",
      },
    ],
  },
];

/* ---------- TRAININGS ---------- */

export const TRAININGS_MENU: MenuSection[] = [
  {
    heading: "Frontend",
    slug: "frontend",
    items: [
      { title: "HTML & CSS", href: "/trainings/html-css" },
      { title: "JavaScript", href: "/trainings/javascript" },
      { title: "React", href: "/trainings/react" },
      { title: "Next.js", href: "/trainings/nextjs" },
    ],
  },
  {
    heading: "CMS",
    slug: "cms",
    items: [
      { title: "WordPress", href: "/trainings/wordpress" },
      { title: "Shopify", href: "/trainings/shopify" },
      { title: "Headless CMS", href: "/trainings/headless" },
    ],
  },
  {
    heading: "Advanced",
    slug: "advanced",
    items: [
      { title: "SEO & Performance", href: "/trainings/seo" },
      { title: "Freelancing", href: "/trainings/freelancing" },
      { title: "Client Handling", href: "/trainings/clients" },
    ],
  },
];
