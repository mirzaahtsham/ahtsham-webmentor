"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { IconMarquee } from "@/components/IconMarquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/Experiences";
// import { Testimonials } from "@/components/Testimonials";
// import { TestimonialsSlide } from "@/components/TestimonialsSlide";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { FAQ } from "@/components/FAQ";
import { FAQUpdated } from "@/components/FAQUpdated";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
