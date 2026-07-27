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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-meelo-offwhite border-l-2 border-black z-40 lg:hidden flex flex-col justify-between p-8 pt-28"
            >
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-extrabold text-black hover:bg-meelo-cardLavender px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="space-y-4 pt-6 border-t-2 border-black">
                <a
                  href="mailto:amjadpitafi070@gmail.com"
                  className="meelo-btn-dark w-full text-center"
                >
                  Get In Touch
                </a>
                <p className="text-center text-xs font-bold uppercase tracking-wider text-black/60">
                  Amjad Ali — Portfolio
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
