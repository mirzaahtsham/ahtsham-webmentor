"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface LogoAWMProps {
  size?: number;
  primary?: string;
  secondary?: string;
  className?: string;
  title?: string;
}

export default function LogoAWM({
  size = 64,
  primary = "#0ea5e9",
  secondary = "#7c3aed",
  className = "",
  title = "Ahtsham Web Mentor",
}: LogoAWMProps) {
  const box = 100;
  const half = box / 2;

  // Use Variants type. For `ease` use numeric cubic-bezier array to satisfy types.
  const pathAnim: Variants = {
    hidden: { pathLength: 0, opacity: 0.25 },
    // visible is a function that receives custom (i). Cast the returned object to `any`
    // to satisfy some strict framer types for the transition object.
    visible: (i = 1) =>
      ({
        pathLength: 1,
        opacity: 1,
        transition: { delay: 0.08 * i, duration: 0.9, ease: [0.42, 0, 0.58, 1] },
      } as any),
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="awm-grad" x1="0" x2="1">
          <stop offset="0%" stopColor={primary} />
          <stop offset="100%" stopColor={secondary} />
        </linearGradient>

        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor={secondary} floodOpacity="0.15" />
        </filter>
      </defs>

      <motion.circle
        cx={half}
        cy={half}
        r={45}
        fill="none"
        stroke="url(#awm-grad)"
        strokeWidth={2}
        style={{ opacity: 0.06 }}
      />

      <motion.path
        d="M20 72 L35 28 L47 52"
        stroke="url(#awm-grad)"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        custom={1}
        variants={pathAnim}
      />

      <motion.path
        d="M47 52 L55 28 L65 52 L75 28 L85 72"
        stroke="url(#awm-grad)"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        custom={2}
        variants={pathAnim}
      />

      <motion.path
        d="M20 72 L33 48 L48 68 L63 48 L78 72"
        fill={secondary}
        opacity={0.08}
        custom={3}
        variants={pathAnim}
      />
    </motion.svg>
  );
}
