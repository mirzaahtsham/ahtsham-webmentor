"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ConicGradientProps {
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  animationDuration?: number;
  blurRadius?: number;
  borderRadius?: number;
  backgroundColor?: string;
  overlayBorderColor?: string;
  overlayMargin?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  letterSpacing?: number;
  children?: ReactNode; // ✅ type children
}

export default function ConicGradient({
  width = "300px",
  height = "300px",
  borderColor = "#ff00ff",
  animationDuration = 6,
  blurRadius = 2,
  borderRadius = 0,
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  overlayBorderColor = "#ff00ff",
  overlayMargin = 1,
  text = "Rotating Border",
  textColor = "#000000",
  fontSize = 16,
  fontWeight = 400,
  fontFamily = "Inter",
  letterSpacing = 0,
  children,
}: ConicGradientProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width,
        height,
        borderRadius: `${borderRadius}px`,
        minWidth: "12px",
        minHeight: "12px",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "-450%",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1000%",
          background: `conic-gradient(transparent 200deg, ${borderColor})`,
          borderRadius: `${borderRadius}px`,
          zIndex: 1,
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: `${overlayMargin}px`,
          left: `${overlayMargin}px`,
          right: `${overlayMargin}px`,
          bottom: `${overlayMargin}px`,
          backdropFilter: `blur(${blurRadius}px)`,
          backgroundColor: backgroundColor,
          border: `1px solid ${overlayBorderColor}`,
          borderRadius: `${Math.max(0, borderRadius - overlayMargin)}px`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-3 flex items-center justify-center w-full h-full p-2">
        <div
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            letterSpacing: `${letterSpacing}px`,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            userSelect: "none",
          }}
        >
          {text}
        </div>
        {children}
      </div>
    </div>
  );
}
