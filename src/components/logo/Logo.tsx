"use client";

import Image from "next/image";

interface LogoProps {
  showImage?: boolean;
  showText?: boolean;
  size?: number;
  className?: string;
}

export function Logo({
  showImage = true,
  showText = true,
  size = 36,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* ROUND LOGO IMAGE */}
      {showImage && (
        <Image
          src="/Logos/Ahtsham-Developer-Advocate.webp"
          alt="Ahtsham Web Mentor Developer Advocate Logo"
          width={size}
          height={size}
          unoptimized
          priority
          className="rounded-full object-contain"
        />
      )}

      {/* AWM SVG TEXT (LIGHT / DARK MODE) */}
      {showText && (
        <>
          {/* Light Mode */}
          <Image
            src="/Logos/AWM-Black.svg"
            alt="AWM Logo"
            width={size * 1.6}
            height={size}
            className="block dark:hidden"
          />

          {/* Dark Mode */}
          <Image
            src="/Logos/AWM-White.svg"
            alt="AWM Logo"
            width={size * 1.6}
            height={size}
            className="hidden dark:block"
          />
        </>
      )}
    </div>
  );
}
