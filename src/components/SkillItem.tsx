"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

interface SkillItemProps {
  text: string;
  index?: number; // optional for animation delay
}

export function SkillItem({ text, index = 0 }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
      className="flex items-start gap-2"
    >
      <CheckCircle2 className="w-5 h-5 mt-[2px] text-green-400 flex-shrink-0" />
      <span className="text-sm leading-relaxed text-foreground dark:text-gray-300">
        {text}
      </span>
    </motion.div>
  );
}
