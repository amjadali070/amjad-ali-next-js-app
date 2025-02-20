"use client";

import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
// import logo from "../assets/amjad-logo.png";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "#home" },
  { label: "About me", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Projects", path: "#projects" },
  { label: "Contact me", path: "#contact" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* <div className="flex items-center space-x-2">
          <Link href="#home">
            <Image
              src={logo}
              alt="Amjad's logo"
              width={80}
              height={80}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div> */}

        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              scroll={false}
              className="
                rounded-lg px-4 py-2 transition-all duration-300 
                tracking-widest uppercase font-semibold text-xs 
                border-2 border-transparent 
                bg-[#C6C6C6] text-black 
                hover:bg-[#00DBFD] hover:border-[#00DBFD] hover:scale-105
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00DBFD] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                scroll={false}
                onClick={() => setIsOpen(false)}
                className="
                  block rounded-lg px-4 py-2 transition-all duration-300
                  bg-[#C6C6C6] text-black hover:bg-[#00DBFD] hover:scale-105
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
