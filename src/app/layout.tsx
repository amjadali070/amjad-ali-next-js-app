import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amjad Ali — Senior Full-Stack Engineer",
  description: "A sleek and modern portfolio showcasing personal brand and professional engineering achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-meelo-offwhite text-black selection:bg-meelo-lavender selection:text-black min-h-screen flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
