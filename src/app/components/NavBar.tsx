"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/#home" },
  { label: "Services", path: "/#services" },
  { label: "About me", path: "/#about" },
  { label: "Skills", path: "/#skills" },
  { label: "Projects", path: "/#projects" },
  { label: "Contact me", path: "/#contact" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/#home"
          className="text-2xl font-extrabold text-[#00DBFD] tracking-wider"
        >
          AMJAD ALI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => handleLinkClick(link.label)}
              className={`relative px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                activeLink === link.label
                  ? "text-[#00DBFD]"
                  : "text-white hover:text-[#00DBFD]"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#00DBFD] transform scale-x-0 transition-transform duration-300 ease-in-out origin-left ${
                  activeLink === link.label
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          aria-label="Menu"
          className="md:hidden focus:outline-none relative z-50"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur-sm`}
      >
        <div className="flex flex-col space-y-4 py-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => handleLinkClick(link.label)}
              className={`text-white font-medium text-base py-2 px-4 rounded-md transition-all duration-300 ${
                activeLink === link.label
                  ? "bg-[#00DBFD] text-black"
                  : "hover:bg-[#00DBFD] hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
