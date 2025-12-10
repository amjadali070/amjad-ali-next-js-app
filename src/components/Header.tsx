"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "_about", href: "#about" },
    { name: "_skills", href: "#skills" },
    { name: "_experience", href: "#experience" },
    { name: "_projects", href: "#projects" },
    // { name: "_articles", href: "#articles" },
    { name: "_contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
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
            className="text-xl font-bold font-mono text-text flex items-center gap-2 group relative z-50"
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
            <ThemeToggle />
            <button
              onClick={() => window.open("/Amjad_Ali_Resume.pdf", "_blank")}
              className="px-4 py-2 ml-4 border border-primary/30 rounded text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              git checkout cv
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text hover:text-primary relative z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-surface/95 backdrop-blur-xl z-40 md:hidden border-l border-white/10 shadow-2xl"
            >
              <nav className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <div className="flex-1 flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block py-4 px-4 text-lg font-mono text-text/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                      >
                        <span className="text-primary mr-2">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="flex justify-end mb-4"
                >
                  <ThemeToggle />
                </motion.div>

                {/* Resume Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  onClick={() => {
                    window.open("/Amjad_Ali_Resume.pdf", "_blank");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-4 px-4 border-2 border-primary/30 rounded-lg text-primary font-mono hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  git checkout cv
                </motion.button>

                {/* Social Links or Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10 text-center"
                >
                  <p className="text-xs font-mono text-text/40">
                    Built with Next.js & Tailwind
                  </p>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
