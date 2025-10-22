"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function FullSkillsDialog() {
  const fullSkills = [
    "WordPress Design & Development (Elementor Pro, WooCommerce)",
    "Shopify Store Design & Customization",
    "Frontend Development (HTML5, CSS3, JavaScript, Tailwind CSS)",
    "Modern Web Apps (Next.js & React.js)",
    "Cloudflare Setup & Website Optimization",
    "Email Marketing Integrations (Mailchimp)",
    "Reviews.io, Meta Pixel, and GA4 Integration",
    "Contact Form 7 & Multi-Step Form Development",
    "Website Speed Optimization (WP Rocket)",
    "SEO Setup with AIOSEO & Rank Math",
    "Hosting Migration & Website Maintenance",
    "Freelancing & Client Communication",
    "YouTube Content Creation & Web Training",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
          See My Full Specialization
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
        text-gray-900 dark:text-gray-100 rounded-xl shadow-lg transition-all duration-300"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full Skill Set
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            A complete list of my technical and professional skills.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {fullSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            *Some micro frameworks or small tools not listed
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
