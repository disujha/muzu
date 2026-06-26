import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:    '#1C1C1E',
          charcoal: '#2C2C2E',
          amber:    '#F5A623',
          'amber-soft': '#FEF3C7',
          'amber-glow': 'rgba(245,166,35,0.15)',
          cream:    '#FFF8EE',
          gray:     '#636366',
          'gray-light': '#F2F2F7',
          white:    '#FFFFFF',
          success:  '#065F46',
        }
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-nunito)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        "hero-display": ["5rem",     { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1:             ["3.5rem",   { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        h2:             ["2.25rem",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        h3:             ["1.5rem",   { lineHeight: "1.3" }],
        "body-lg":      ["1.125rem", { lineHeight: "1.7" }],
        body:           ["1rem",     { lineHeight: "1.65" }],
        caption:        ["0.8rem",   { lineHeight: "1.5",  letterSpacing: "0.02em" }],
        mono:           ["1rem",     { lineHeight: "1.5" }],
      },
      borderRadius: {
        card:      "16px",
        "card-lg": "24px",
        ui:        "8px",
      },
      boxShadow: {
        "amber-glow":    "0 0 20px rgba(245,166,35,0.4)",
        "amber-glow-sm": "0 0 10px rgba(245,166,35,0.25)",
        "amber-glow-lg": "0 0 40px rgba(245,166,35,0.3)",
        card:            "0 4px 24px rgba(0,0,0,0.08)",
        "card-dark":     "0 4px 32px rgba(0,0,0,0.4)",
      },
      maxWidth: {
        content: "1200px",
        hero:    "900px",
        copy:    "700px",
      },
      animation: {
        breathing:   "breathing 3s ease-in-out infinite",
        marquee:     "marquee 30s linear infinite",
        "dot-travel":"dotTravel 2.5s ease-in-out infinite",
        "chevron-bob":"chevronBob 1.6s ease-in-out infinite",
        shimmer:     "shimmer 1.8s linear infinite",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { filter: "drop-shadow(0 0 20px rgba(245,166,35,0.1))" },
          "50%":      { filter: "drop-shadow(0 0 45px rgba(245,166,35,0.35))" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dotTravel: {
          "0%":   { left: "0%",   opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        chevronBob: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%":      { transform: "translateX(-50%) translateY(8px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
