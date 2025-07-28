"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/#home" },
  { label: "Services", path: "/#services" },
  { label: "About Me", path: "/#about" },
  { label: "Skills", path: "/#skills" },
  { label: "Projects", path: "/#projects" },
  { label: "Contact", path: "/#contact" },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/amjadali070/",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/amjadali070",
  },
];

const email = "amjadpitafi070@gmail.com";
const phone = "+92 3033663070";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm md:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-[#00DBFD] text-xl">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-300 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs mt-4">
          &copy; 2025 Amjad Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
