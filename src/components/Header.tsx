"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl sm:rounded-3xl bg-[#FFFDF7]/95 backdrop-blur-md border-2 border-black transition-all duration-300 pointer-events-auto flex items-center justify-between ${
            scrolled ? "shadow-brutal" : "shadow-brutal-sm"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-black tracking-tight text-black flex items-center gap-1 cursor-pointer select-none hover:opacity-80 transition-opacity"
          >
            <span>Amjad A.</span>
          </Link>

          {/* Desktop Nav Links (Capsule Pill Container) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white border-2 border-black rounded-full px-3 py-1.5 shadow-brutal-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-extrabold text-black/80 hover:text-black hover:bg-meelo-cardLavender transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icon Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/amjadali070"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/amjadali070/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:amjadpitafi070@gmail.com"
              className="w-9 h-9 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              aria-label="Email"
            >
              <HiOutlineMail size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border-2 border-black shadow-brutal-sm text-black relative z-50 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-black transform transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transform transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed inset-0 z-[60] bg-[#FFFDF7] flex flex-col lg:hidden"
          >
            {/* Mobile Menu Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-black flex-shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black tracking-tight text-black"
              >
                Amjad A.
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-black text-white border-2 border-black flex items-center justify-center font-black text-lg cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-5 py-4 rounded-2xl border-2 border-black bg-white text-lg font-extrabold text-black hover:bg-meelo-cardLavender active:scale-[0.98] transition-all cursor-pointer shadow-brutal-sm"
                  >
                    <span>{link.name}</span>
                    <span className="text-black/40 text-sm">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA & Social */}
            <div className="px-6 py-6 border-t-2 border-black flex-shrink-0 space-y-4">
              <a
                href="mailto:amjadpitafi070@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="meelo-btn-dark w-full text-center block py-3.5 text-base"
              >
                Get In Touch
              </a>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/amjadali070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black hover:bg-meelo-cardLavender transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amjadali070/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black hover:bg-meelo-cardLavender transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:amjadpitafi070@gmail.com"
                  className="w-11 h-11 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black hover:bg-meelo-cardLavender transition-all"
                  aria-label="Email"
                >
                  <HiOutlineMail size={18} />
                </a>
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-wider text-black/40">
                Amjad Ali — Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
