"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { AuthorProfile } from "@/components/AuthorProfile";
import ShareButtons from "@/components/ShareButtons";
import { policyData } from "../policyData"; // ✅ make sure this file exists

// ✅ Define the shape of props here
interface Props {
  params: {
    slug: string;
  };
}

// ✅ Define the structure of each policy section for type safety
interface PolicySection {
  id: string;
  heading: string;
  content: string | React.ReactNode; // <-- ✅ FIXED (was string)
}

// ✅ Define policy type
interface Policy {
  title: string;
  description?: string;
  image?: string;
  sections: PolicySection[];
}


export default function PolicyClientPage({ params }: Props) {
  const { slug } = params;
  const policy: Policy | undefined = policyData[slug];

  if (!policy) return notFound();

  const [activeSection, setActiveSection] = useState<string>("");
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      policy.sections.forEach((section: PolicySection) => {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [policy.sections]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 text-gray-200">
      <HeaderWithMegaMenu />
      <main className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-12 leading-relaxed pt-48">
          {policy.sections.map((section: PolicySection) => (
            <section id={section.id} key={section.id}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {section.heading}
              </h2>
              <p
                className="text-gray-800 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: String(section.content || ""),
                }}
              />
            </section>
          ))}
          <div className="pt-36">
            <AuthorProfile />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Table of Contents
              </h3>
              <ul className="space-y-2 text-sm">
                {policy.sections.map((item: PolicySection) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block px-3 py-1 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? "bg-gray-600/50 dark:bg-yellow-400/20 text-gray-800 dark:text-yellow-400"
                          : "text-gray-700 dark:text-gray-400 hover:text-gray-800 hover:bg-gray-400/30 dark:hover:bg-yellow-400/10 dark:hover:text-yellow-400"
                      }`}
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Need Assistance?
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                Have questions about our {policy.title.toLowerCase()}?{" "}
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-500 underline"
                >
                  Contact us
                </Link>{" "}
                and our team will respond within 24 hours.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <Check className="w-4 h-4 text-green-400" /> Transparent Policy
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <Check className="w-4 h-4 text-green-400" /> Global Standards
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <Check className="w-4 h-4 text-green-400" /> Updated Regularly
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
      {currentUrl && <ShareButtons url={currentUrl} title={policy.title} />}
      <Footer />
    </div>
  );
}
