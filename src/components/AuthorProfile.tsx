"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export const AuthorProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center sm:items-start gap-6"
    >
      {/* Avatar */}
      <Image
        src="/company-icon/ahtsham-logo.webp" // 👉 Replace with your image
        alt="Ahtsham Web Mentor"
        width={100}
        height={100}
        className="rounded-full shadow-md border-4 border-purple-200 dark:border-purple-800 object-cover"
      />

      {/* Author Info */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ahtsham Web Mentor
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Founder & Full Stack Developer
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          “Building modern, scalable web solutions with a passion for clean
          design and seamless user experience. I help brands go digital with
          purpose and style.”
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@ahtsham.me"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors hover:scale-110"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/mirzaahtsham"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors hover:scale-110"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/mirzaahtsham/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors hover:scale-110"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://ahtsham.me/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors hover:scale-110"
          >
            <Globe size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
