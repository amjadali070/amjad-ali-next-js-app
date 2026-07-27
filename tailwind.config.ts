import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        meelo: {
          lavender: "#DBDFF7",
          offwhite: "#F4F4F6",
          purple: "#9A85E2",
          black: "#000000",
          cardLavender: "#D2D3F9",
          cardMint: "#E6F0DC",
          cardPink: "#F3D7E8",
          cardBlue: "#D9E8F5",
          cardPeach: "#F9E7DF",
        },
        background: "#F4F4F6",
        text: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
