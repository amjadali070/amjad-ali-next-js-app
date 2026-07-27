"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const GoogleDevIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent relative z-10 border-t-2 border-black/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-black cursor-pointer hover:opacity-80 transition-opacity"
          >
            Amjad Ali
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-black/60">
            Senior Full-Stack Engineer
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-black/80">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#skills" className="hover:underline">
            Skills
          </Link>
          <Link href="#experience" className="hover:underline">
            Experience
          </Link>
          <Link href="#services" className="hover:underline">
            Services
          </Link>
          <Link href="#portfolio" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Social Icon Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/amjadali070"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-[transform,box-shadow] duration-150 ease-out gpu-layer cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/amjadali070/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-[transform,box-shadow] duration-150 ease-out gpu-layer cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:amjadpitafi070@gmail.com"
            className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-[transform,box-shadow] duration-150 ease-out gpu-layer cursor-pointer"
            aria-label="Email"
          >
            <HiOutlineMail size={20} />
          </a>
          <a
            href="https://g.dev/amjadali070"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:bg-[#4285F4] hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-150 ease-out cursor-pointer"
            aria-label="Google Developer Profile"
          >
            <GoogleDevIcon />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-black/10 text-center text-xs font-bold uppercase tracking-wider text-black/60">
        © {new Date().getFullYear()} Amjad Ali. Built & Engineered with Next.js, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
