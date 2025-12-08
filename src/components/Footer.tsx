"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-surface border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text/50 font-mono text-sm">
          Built with Next.js & Tailwind
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/amjadali070"
            target="_blank"
            className="text-text/60 hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/amjadali070/"
            target="_blank"
            className="text-text/60 hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>

        <p className="text-text/50 font-mono text-sm">
          © {new Date().getFullYear()} Amjad Ali
        </p>
      </div>
    </footer>
  );
}
