import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#fbf8ff",
          100: "#f4ecff",
          200: "#e7d7ff",
          300: "#d5bcff",
          400: "#b996f4"
        },
        skyglass: {
          50: "#f7fbff",
          100: "#e8f5ff",
          200: "#d4ecff",
          300: "#b7ddff",
          400: "#83c5f4"
        },
        mint: {
          50: "#f5fffb",
          100: "#e2f8ef",
          200: "#c5f0df",
          300: "#9fe3c8",
          400: "#72d0ad"
        },
        ink: {
          900: "#172033",
          700: "#364153",
          500: "#647084",
          300: "#a5adbb"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(131, 197, 244, 0.24)",
        card: "0 18px 50px rgba(23, 32, 51, 0.08)"
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.68" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
