"use client";

import { useEffect, useState } from "react";

export interface ThemeSwitcherProps {
  size?: number;
  onToggleStart?: () => void;
}

export function ThemeSwitcherC({ size = 28, onToggleStart }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const resolved = stored ?? "dark";
    document.documentElement.classList.toggle("dark", resolved === "dark");
    setTheme(resolved);
  }, [mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    onToggleStart?.();
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative rounded-full flex items-center justify-center z-30"
      style={{ width: size, height: size }}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-400"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeSwitcherC;
