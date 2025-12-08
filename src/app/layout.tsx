import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Amjad Ali - Full Stack Developer",
  description: "Full Stack Software Engineer specializing in modern web technologies, AI integration, and scalable systems. Building innovative digital solutions with React, Next.js, Node.js, and cutting-edge tools.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "AI Integration"],
  authors: [{ name: "Amjad Ali" }],
  openGraph: {
    title: "Amjad Ali - Full Stack Developer",
    description: "Full Stack Software Engineer building modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
