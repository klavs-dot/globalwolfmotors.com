import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gwm: {
          black: "#0a0a0a",
          dark: "#0f1114",
          darker: "#090b0d",
          charcoal: "#161a1f",
          slate: "#1c2127",
          steel: "#2a3038",
          accent: "#3b82f6",
          "accent-light": "#60a5fa",
          "accent-glow": "#93c5fd",
          cyan: "#06b6d4",
          gold: "#c8a44e",
          "gold-light": "#d4b96a",
          silver: "#94a3b8",
          muted: "#64748b",
          light: "#e2e8f0",
          white: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 75%, #0a0a0a 100%)",
        "section-gradient": "linear-gradient(180deg, #0a0a0a 0%, #0f1114 50%, #0a0a0a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.3)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.2)",
        "glow-lg": "0 0 60px rgba(59,130,246,0.3)",
        premium: "0 25px 60px -12px rgba(0,0,0,0.5)",
        card: "0 4px 30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
