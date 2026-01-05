"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
// Lazy-loaded components for better performance
const IconMarquee = dynamic(
  () => import("./IconMarquee").then((mod) => mod.IconMarquee),
  { ssr: false }
);

const WorkExperience = dynamic(
  () => import("./Experiences").then((mod) => mod.WorkExperience),
  { ssr: false }
);

const Stats = dynamic(
  () => import("./Stats").then((mod) => mod.Stats),
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

/* ---------------- TYPES ---------------- */

type FAQ = {
  question: string;
  answer: string;
  icon?: string;
};

type HomeClientSectionsProps = {
  faqs: FAQ[]; // Receive FAQs from server
};

/* ---------------- COMPONENT ---------------- */

export default function HomeClientSections({ faqs }: HomeClientSectionsProps) {
  // 🔍 DEBUG: Check if FAQs are received
  useEffect(() => {
    console.log('📦 FAQs received in HomeClientSections:', faqs);
    console.log('📦 Number of FAQs:', faqs?.length);
  }, [faqs]);
  return (
    <>
      <WorkExperience />
      <IconMarquee />
      <FAQUpdated faqs={faqs} />
      <Stats />
      <TestimonialsMarquee />
    </>
  );
}