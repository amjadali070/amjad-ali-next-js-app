"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About me", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
];

const socialLinks = [
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaDribbble />, href: "https://dribbble.com" },
  { icon: <FaBehance />, href: "https://behance.net" },
];

const email = "Mahmood.fazle7005@gmail.com";
const phone = "+93 729 107 005";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
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

        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-300 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>{email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
