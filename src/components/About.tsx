"use client";
import { SkillItem } from "./SkillItem";
import { useState } from "react";
import { Button } from "./ui/button";
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
    "Cloudflare Setup & Website Optimization",
    "Email Marketing Integrations (Mailchimp)",
    "Website Speed Optimization (WP Rocket)",
    "SEO Setup with AIOSEO & Yoast SEO",
  ];

  const allSkills = [
    "WordPress Website Design & Development (Elementor Pro, WooCommerce)",
    "Frontend Development (HTML5, CSS3, JavaScript, Tailwind CSS)",
    "Reviews.io, Meta Pixel, and GA4 Integration",
    "Contact Form 7 & Multi-Step Form Development",
    "Hosting Migration & Website Maintenance",
    "Freelancing & Client Communication",
    "YouTube Content Creation & Web Training",
  ];

  const experience = [
    { role: "Digital Marketing & Web Developer", company: "Medmax Lahore", period: "2023 - Present" },
    { role: "Founder & Frontend Developer", company: "Ahtsham.me", period: "2020 - Present" },
    { role: "YouTube Educator", company: "Learn with Ahtsham", period: "2020 - Present" },
  ];

  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2015;

  return (
    <section className="py-20 bg-background dark:bg-gray-900 text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
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
                className="w-full rounded-lg object-cover h-full min-h-[600px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Intro */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                Hi, I&#39;m Ahtsham —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Web Designer & Developer
                </span>
              </h2>
              <p className="mb-4">
                Passionate about crafting
                <span className="text-yellow-400"> high-performance digital experiences</span>.
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                I&#39;m a <span className="font-medium">Web Designer and Developer</span> with nearly{" "}
                <span className="font-medium">{professionalYears} years of experience </span>
                in creating high-performance, visually stunning, and conversion-focused websites using{" "}
                <span className="font-medium">WordPress, Shopify, and modern web technologies</span>.
              </p>
              <p className="text-muted-foreground dark:text-gray-400 mt-2">
                I also create <span className="font-medium">web design tutorials</span> on{" "}
                <span className="font-medium">YouTube (@mirzaahtsham)</span>, empowering students to learn{" "}
                <span className="font-medium">Elementor, WordPress, and Shopify development</span> in Urdu and English.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-purple-400">I specialize in:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 border border-purple-500/20 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg transition-all duration-300">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-center text-purple-400">
                        Full Skill Set
                      </DialogTitle>
                      <DialogDescription className="text-center text-sm text-gray-500 dark:text-gray-400">
                        A complete list of tools, frameworks, and technologies I specialize in.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
                      {allSkills.map((skill, index) => (
                        <SkillItem key={index} text={skill} index={index} />
                      ))}
                    </div>

                    <Button
                      onClick={() => setIsOpen(false)}
                      className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Close
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground dark:text-gray-400">
                Based in <span className="font-medium">Lahore, Pakistan</span>, I work remotely with clients worldwide and am open to <span className="font-medium"></span>relocation opportunities in the <span className="font-medium">UAE, USA, or Canada</span> for full-time or long-term web development roles.
              </p>
              <p className="text-muted-foreground dark:text-gray-400 mt-2">
                I&#39;m passionate about <span className="font-medium">building elegant, user-friendly websites</span>, integrating the right tools for performance and marketing, and <span className="font-medium">sharing my knowledge</span> with the next generation of web developers.

                Let&#39;s build something amazing together!
              </p>
            </div>

            {/* Experience */}
            {/* <div className="mb-8">
              <h4 className="text-xl mb-4 text-pink-400">Experience</h4>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground dark:text-white">{exp.role}</div>
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
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                Download CV
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
