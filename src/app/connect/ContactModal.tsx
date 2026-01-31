"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
      >
        Contact Me
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl w-[90%] max-w-md relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-bold mb-4 text-center">
                Send Me a Message
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Query sent successfully!");
                  setIsOpen(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
                />
                <textarea
                  placeholder="Write your query..."
                  required
                  className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 h-28"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-md hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
