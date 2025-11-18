"use client";

// import { ThemeProvider } from "ox-theme-switcher";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { IconMarquee } from "@/components/IconMarquee";
import { About } from "@/components/About";
// import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/Experiences";
// import { Testimonials } from "@/components/Testimonials";
// import { TestimonialsSlide } from "@/components/TestimonialsSlide";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
// import { FAQ } from "@/components/FAQ";
import { FAQUpdated } from "@/components/FAQUpdated";
import { Footer } from "@/components/Footer";
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ahtsham.me/#webpage",
  "name": "Ahtsham Web Designer & Developer",
  "url": "https://ahtsham.me/",
  "description":
    "Professional Web Designer & Developer offering Next.js, WordPress, Shopify, UI/UX, SEO Optimization, Cloudflare Integration, Hosting Management, Website Migration and Modern Web Solutions.",
  "isPartOf": { "@id": "https://ahtsham.me/#website" },
  "mainEntity": { "@id": "https://ahtsham.me/#person" }
};
export default function Home() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <HeaderWithMegaMenu />
        <main>
          <Hero />
          <Stats />
          <About />
          <IconMarquee />
          <WorkExperience />
          {/* <Skills /> */}
          {/* <Testimonials />
          <TestimonialsSlide /> */}
          <TestimonialsMarquee />
          {/* <FAQ /> */}
          <FAQUpdated />
        </main>
        <Footer />
      </div>
    </>
  );
}
