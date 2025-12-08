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
        // GitHub Dark / Coding Theme Palette
        background: "#0D1117", // Main background
        foreground: "#C9D1D9", // Main text
        primary: "#58A6FF", // Blue accent
        secondary: "#1F6FEB", // Button/Link blue
        success: "#238636", // Green success
        panel: "#161B22", // Secondary background (cards/panels)
        border: "#30363D", // Border color
        muted: "#8B949E", // Muted text
        neon: {
          blue: "#58A6FF",
          green: "#2EA043",
          purple: "#BC8CFF",
          pink: "#F470B5",
          orange: "#F78166",
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'scan-line': 'scanLine 8s linear infinite',
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(88, 166, 255, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(88, 166, 255, 0.6)' },
        },
        scanLine: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(88, 166, 255, 0.3)',
        'glow-lg': '0 0 25px rgba(88, 166, 255, 0.5)',
      }
    },
  },
  plugins: [],
} satisfies Config;
