/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        background: "#ffffff",
        foreground: "#111111",
        border: "#e5e7eb",
        muted: "#f9fafb",
        accent: "#f3f4f6",
      },
    },
  },
  plugins: [typography],
};
// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        cardForeground: "var(--card-foreground)",
        muted: "var(--muted)",
        mutedForeground: "var(--muted-foreground)",
        accent: "var(--accent)",
        accentForeground: "var(--accent-foreground)",
        border: "var(--border)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
      },
    },
  },
  plugins: [],
};
