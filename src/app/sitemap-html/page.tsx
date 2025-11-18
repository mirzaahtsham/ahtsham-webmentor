"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HtmlSitemap() {
  const base = "https://ahtsham.me";

  const pages = [
    { name: "Home", url: `${base}/` },
    { name: "Ahtsham Connect", url: `${base}/ahtsham-connect` },
    { name: "Schedule A Call", url: `${base}/schedule` },
    { name: "Services", url: `${base}/services` },
    { name: "Projects", url: `${base}/projects` },
    { name: "Contact", url: `${base}/contact` },
    { name: "About", url: `${base}/about` },
  ];

  return (
    <main className="min-h-screen py-16 px-6 bg-linear-to-b from-background to-background/80">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Website Sitemap
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl shadow-lg bg-card dark:bg-card/40 hover:shadow-xl hover:-translate-y-1 transition-all border border-border/20"
            >
              <h2 className="text-xl font-semibold mb-3">{page.name}</h2>
              <Link
                href={page.url}
                className="text-primary hover:underline"
              >
                {page.url}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}