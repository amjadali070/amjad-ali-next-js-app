"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "_about", href: "#about" },
    { name: "_skills", href: "#skills" },
    { name: "_experience", href: "#experience" },
    { name: "_projects", href: "#projects" },
    { name: "_articles", href: "#articles" },
    { name: "_contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-white/5"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-mono text-text flex items-center gap-2 group"
        >
          <span className="text-secondary group-hover:rotate-12 transition-transform inline-block">
            &lt;
          </span>
          <span className="group-hover:text-primary transition-colors">
            AmjadAli
          </span>
          <span className="text-secondary group-hover:-rotate-12 transition-transform inline-block">
            /&gt;
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text/70 hover:text-primary transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <button
            onClick={() => window.open("/Amjad_Ali_Resume.pdf", "_blank")}
            className="px-4 py-2 ml-4 border border-primary/30 rounded text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            git checkout cv
          </button>
        </nav>

        {/* Mobile menu placeholder (can be expanded) */}
        <button className="md:hidden text-text hover:text-primary">
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
