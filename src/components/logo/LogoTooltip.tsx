"use client";

import { motion } from "framer-motion";

export function LogoTooltip() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2"
    >
      {/* Conic Gradient Border */}
      <div className="relative rounded-xl p-[1.5px] bg-[conic-gradient(from_180deg_at_50%_50%,#7c3aed,#22d3ee,#7c3aed)]">
        <div className="rounded-xl bg-background px-4 py-3 backdrop-blur">
          <p className="text-sm font-semibold">
            Ahtsham Web Mentor
          </p>
          <p className="text-xs text-muted-foreground">
            Guiding Students & Clients With Clarity, Code & Craft.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
