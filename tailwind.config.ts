import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F15",
        surface: "#0F1720",
        primary: {
          DEFAULT: "#4FC3F7",
          foreground: "#0B0F15",
        },
        secondary: {
          DEFAULT: "#7DD3FC",
          foreground: "#0B0F15",
        },
        glow: "rgba(79,195,247,0.12)",
        text: {
          DEFAULT: "#E6EEF6",
          muted: "#94A3B8",
        },
        code: "#4ADE80", 
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-sm': '0 0 10px rgba(79, 195, 247, 0.3)',
        'glow-md': '0 0 20px rgba(79, 195, 247, 0.4)',
        'glow-lg': '0 0 30px rgba(79, 195, 247, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
