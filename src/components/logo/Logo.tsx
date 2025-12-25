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
      {showImage && (
        <Image
          src="/Logos/Ahtsham-Web-Mentor-512-512.png"
          alt="Ahtsham Web Mentor"
          width={size}
          height={size}
          priority
          className="rounded-full"
        />
      )}

      {showText && (
        <span className="font-bold tracking-wide text-base text-gray-900 dark:text-gray-100">
          AWM
        </span>
      )}
    </div>
  );
}
