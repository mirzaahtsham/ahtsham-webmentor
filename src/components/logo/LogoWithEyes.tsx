"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface EyeFollowProps {
  size?: number; // width
  pupilSize?: number;
  scleraColor?: string;
  pupilColor?: string;
  followRange?: number;
  className?: string;
}

export default function EyeFollow({
  size = 20,
  pupilSize = 6,
  scleraColor = "#ffffff",
  pupilColor = "#111827",
  followRange = 5,
  className = "",
}: EyeFollowProps) {
  const eyeRef = useRef<HTMLDivElement | null>(null);
  const pupilRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [blink, setBlink] = useState(false);

  /* =========================
     Cursor follow (your logic)
  ========================== */
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let px = 0;
    let py = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    const update = () => {
      rafRef.current = null;

      const eye = eyeRef.current;
      const pupil = pupilRef.current;
      if (!eye || !pupil) return;

      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      let dx = mouseX - cx;
      let dy = mouseY - cy;

      const distance = Math.sqrt(dx * dx + dy * dy) || 1;
      const max = Math.min(followRange, distance);

      dx = (dx / distance) * max;
      dy = (dy / distance) * max;

      px += (dx - px) * 0.25;
      py += (dy - py) * 0.25;

      pupil.style.transform = `translate(${px}px, ${py}px)`;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [followRange]);

  /* =========================
     Idle blink animation
  ========================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 3200 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={eyeRef}
      animate={{ scaleY: blink ? 0.12 : 1 }}
      transition={{ duration: 0.12 }}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width: size,
        height: size / 3, // 👈 1:3 ratio
        backgroundColor: scleraColor,
        borderRadius: size,
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      }}
      aria-hidden="true"
    >
      <div
        ref={pupilRef}
        style={{
          width: pupilSize,
          height: pupilSize,
          borderRadius: "999px",
          backgroundColor: pupilColor,
          willChange: "transform",
        }}
      />
    </motion.div>
  );
}
