"use client";

import dynamic from "next/dynamic";

// Other dynamic components (lazy-loaded)
const IconMarquee = dynamic(
  () => import("./IconMarquee").then((mod) => mod.IconMarquee),
  { ssr: false }
);

const TestimonialsMarquee = dynamic(
  () => import("./TestimonialsMarquee").then((mod) => mod.TestimonialsMarquee),
  { ssr: false }
);

const FAQUpdated = dynamic(
  () => import("./FAQUpdated").then((mod) => mod.FAQUpdated),
  { ssr: false }
);

// ThemeSwitcherC dynamic import with proper typing
import type { ThemeSwitcherProps } from "./ThemeButton"; // Make sure ThemeButton.tsx exports ThemeSwitcherProps
const ThemeSwitcherC = dynamic<ThemeSwitcherProps>(
  () => import("./ThemeButton").then((mod) => mod.ThemeSwitcherC),
  { ssr: false }
);

export default function HomeClientSections() {
  return (
    <>
      {/* Lazy-loaded components */}
      <IconMarquee />
      <TestimonialsMarquee />
      <FAQUpdated />
    </>
  );
}
