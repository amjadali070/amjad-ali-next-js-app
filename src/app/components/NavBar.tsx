"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { 
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineCollection,
  HiOutlineMail
} from "react-icons/hi";

interface NavLink {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/#home", icon: <HiOutlineHome /> },
  { label: "Services", path: "/#services", icon: <HiOutlineCog /> },
  { label: "About", path: "/#about", icon: <HiOutlineUser /> },
  { label: "Skills", path: "/#skills", icon: <HiOutlineLightBulb /> },
  { label: "Projects", path: "/#projects", icon: <HiOutlineCollection /> },
  { label: "Contact", path: "/#contact", icon: <HiOutlineMail /> },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 smooth-transition ${
      scrolled 
        ? 'glass shadow-xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/#home"
            className="group flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl 
                shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 smooth-transition">
                <div className="w-full h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl 
                  flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 
              bg-clip-text text-transparent hidden sm:block">
              AMJAD ALI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => handleLinkClick(link.label)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl 
                  smooth-transition font-medium text-sm ${
                  activeLink === link.label
                    ? "bg-white/10 text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={`text-base smooth-transition ${
                  activeLink === link.label ? "text-purple-400" : "group-hover:text-purple-400"
                }`}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
                
                {/* Active indicator */}
                {activeLink === link.label && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                    w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r 
                from-purple-500 to-cyan-500 rounded-xl text-white font-semibold 
                shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 
                smooth-transition transform hover:scale-105"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 
                opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-xl glass text-white hover:bg-white/10 smooth-transition"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden smooth-transition ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="glass rounded-2xl p-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => handleLinkClick(link.label)}
                className={`flex items-center space-x-3 p-4 rounded-xl smooth-transition ${
                  activeLink === link.label
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={`text-lg ${
                  activeLink === link.label ? "text-purple-400" : ""
                }`}>
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/#contact"
                className="block text-center px-6 py-3 bg-gradient-to-r 
                  from-purple-500 to-cyan-500 rounded-xl text-white font-semibold 
                  shadow-lg smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
