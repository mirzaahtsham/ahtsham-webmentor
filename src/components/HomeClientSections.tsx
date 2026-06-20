"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
// Lazy-loaded components for better performance
const IconMarquee = dynamic(
  () => import("../components/sections/IconMarquee").then((mod) => mod.IconMarquee),
);

const WorkExperience = dynamic(
  () => import("../components/sections/Experiences").then((mod) => mod.WorkExperience),
);

const Stats = dynamic(
  () => import("../components/sections/Stats").then((mod) => mod.Stats),
);

const TestimonialsMarquee = dynamic(
  () => import("../components/sections/TestimonialsMarquee").then((mod) => mod.TestimonialsMarquee),
);

const FAQUpdated = dynamic(
  () => import("../components/sections/FAQUpdated").then((mod) => mod.FAQUpdated),
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
  // useEffect(() => {
  //   console.log('📦 FAQs received in HomeClientSections:', faqs);
  //   console.log('📦 Number of FAQs:', faqs?.length);
  // }, [faqs]);
  return (
    <>
    <Stats />

    {/* NEW */}
    {/* <ServicesPreview />
    <FeaturedProjects /> */}

    <TestimonialsMarquee />

    {/* NEW */}
    <IconMarquee />

    <WorkExperience />

    <FAQUpdated faqs={faqs} />

    {/* NEW */}
    {/* <CTASection /> */}
  </>
  );
}