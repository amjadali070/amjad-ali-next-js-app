"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiCode } from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCollection,
  HiOutlineBookOpen,
  HiOutlineNewspaper,
  HiOutlineChatAlt2,
  HiOutlineMail,
} from "react-icons/hi";

interface NavLink {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/#home", icon: <HiOutlineHome /> },
  { label: "About", path: "/#about", icon: <HiOutlineUser /> },
  { label: "Services", path: "/#services", icon: <HiOutlineCog /> },
  { label: "Skills", path: "/#skills", icon: <HiOutlineLightBulb /> },
  { label: "Experience", path: "/#experience", icon: <HiOutlineBriefcase /> },
  { label: "Education", path: "/#education", icon: <HiOutlineBookOpen /> },
  { label: "Projects", path: "/#projects", icon: <HiOutlineCollection /> },
  { label: "Certifications", path: "/#certifications", icon: <HiOutlineAcademicCap /> },
  { label: "Articles", path: "/#articles", icon: <HiOutlineNewspaper /> },
  { label: "Testimonials", path: "/#testimonials", icon: <HiOutlineChatAlt2 /> },
  { label: "Contact", path: "/#contact", icon: <HiOutlineMail /> },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/#home" className="group flex items-center gap-3 z-10">
            <div className="relative">
              <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                <HiCode className="text-background text-xl" />
              </div>
              <div className="absolute inset-0 bg-accent-primary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold font-mono text-text-primary">
                <span className="text-code-purple">const</span>{" "}
                <span className="gradient-text">AMJAD</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => handleLinkClick(link.label)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeLink === link.label
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                {activeLink === link.label && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg bg-surface border border-border text-text-primary hover:border-accent-primary/50 transition-all duration-300"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-surface border border-border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.path}
                      onClick={() => handleLinkClick(link.label)}
                      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeLink === link.label
                          ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/30"
                          : "text-text-secondary hover:text-text-primary hover:bg-panel"
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
