"use client";
import { SkillItem } from "./SkillItem";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { FullSkillsDialog } from "./FullSkillsDialog";

export function About() {
  const [isOpen, setIsOpen] = useState(false);

  const shortSkills = [
    "Shopify Store Design & Customization",
    "Modern Web Apps (Next.js & React.js)",
    "SEO Setup with AIOSEO & Yoast SEO",
    "Freelancing & Client Communication",
    "Hosting Migration & Website Maintenance",
    "Website Speed Optimization (WP Rocket)",
  ];

  const allSkills = [
    "WordPress Website Design & Development (Elementor Pro, WooCommerce)",
    "Frontend Development (HTML5, CSS3, JavaScript, Tailwind CSS)",
    "Contact Form 7 & Multi-Step Form Development",
    "Reviews.io, Meta Pixel, and GA4 Integration",
    "Email Marketing Integrations (Mailchimp)",
    "YouTube Content Creation & Web Training",
    "Cloudflare Setup & Website Optimization",
  ];

  const experience = [
    { role: "Digital Marketing & Web Developer", company: "Medmax Lahore", period: "2023 - Present" },
    { role: "Founder & Frontend Developer", company: "Ahtsham.me", period: "2020 - Present" },
    { role: "YouTube Educator", company: "Learn with Ahtsham", period: "2020 - Present" },
  ];

  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2017;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 px-6 shadow-xl">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-gray-100 font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30"></div>
            <div className="relative h-full">
              <img
                src="https://webdesigngenius.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMirza-Ahtsham-Profile-Image.e354692b.png&w=640&q=75"
                alt="Mirza Ahtsham"
                className="w-full rounded-lg object-cover h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Intro */}
            <div className="mb-6">
              <h2 className="text-3xl text-gray-900 dark:text-gray-100 font-bold">
                Hi, I&#39;m Ahtsham —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Web Designer & Developer
                </span>
              </h2>
              <p className="mb-4 text-gray-900 dark:text-gray-100">
                Passionate about crafting
                <span className="text-yellow-600 dark:text-yellow-400"> high-performance digital experiences</span>.
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                I&#39;m a <span className="text-yellow-600 dark:text-yellow-400">Web Designer and Developer</span> with nearly{" "}
                <span className="text-yellow-600 dark:text-yellow-400">{professionalYears}+ years of experience </span>
                in creating high-performance, visually stunning, and conversion-focused websites using{" "}
                <span className="text-yellow-600 dark:text-yellow-400">WordPress, Shopify, and modern web technologies</span>.
              </p>
              <p className="text-gray-900 dark:text-gray-100 mt-2">
                I also create <span className="text-yellow-600 dark:text-yellow-400">web design tutorials</span> on{" "}
                <span className="text-yellow-600 dark:text-yellow-400">YouTube (@mirzaahtsham)</span>, empowering students to learn{" "}
                <span className="text-yellow-600 dark:text-yellow-400">Elementor, WordPress, and Shopify development</span> in Urdu and English.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-purple-400">I specialize in:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-900 dark:text-gray-100">
                {shortSkills.map((skill, index) => (
                  <SkillItem key={index} text={skill} index={index} />
                ))}
              </div>


              {/* Modal Trigger Button */}
              <div className="mt-4">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    >
                      See My Full Specialization
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto bg-gray-100 dark:bg-gray-900 border border-purple-500/20 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg transition-all duration-300">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-center text-purple-600">
                        Full Skill Set
                      </DialogTitle>
                      <DialogDescription className="text-center text-sm text-gray-900 dark:text-gray-200">
                        A complete list of tools, frameworks, and technologies I specialize in.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-4 text-gray-900 dark:text-gray-100">
                      {allSkills.map((skill, index) => (
                        <SkillItem key={index} text={skill} index={index} />
                      ))}
                    </div>

                    <Button
                      onClick={() => setIsOpen(false)}
                      className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-gray-50 dark:text-gray-100"
                    >
                      Close
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-900 dark:text-gray-100">
                Based in <span className="text-yellow-600 dark:text-yellow-400">Lahore, Pakistan</span>, I work remotely with clients worldwide and am open to relocation opportunities in the <span className="text-yellow-600 dark:text-yellow-400">UAE, USA, or Canada</span> for full-time or long-term web development roles.
              </p>
              <p className="text-gray-900 dark:text-gray-100 mt-2">
                I&#39;m passionate about <span className="text-yellow-600 dark:text-yellow-400">building elegant, user-friendly websites</span>, integrating the right tools for performance and marketing, and <span className="text-yellow-600 dark:text-yellow-400">sharing my knowledge</span> with the next generation of web developers.

                Let&#39;s build something amazing together!
              </p>
            </div>

            {/* Experience */}
            {/* <div className="mb-8">
              <h4 className="text-xl mb-4 text-pink-400">Experience</h4>
              <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-100">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-gray-100 dark:text-white">{exp.role}</div>
                      <div className="text-muted-foreground dark:text-gray-400 text-sm">
                        {exp.company} • {exp.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
              href="/Resume/mirza-ahtsham-resume.pdf"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-2 py-1 rounded-md hover:scale-110 transform duration-300">
                Download CV
              </Link>
              <Link
              href="/schedule"
              // variant="outline"
              className="px-2 py-1 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-500/10 hover:scale-110 transform duration-300">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
