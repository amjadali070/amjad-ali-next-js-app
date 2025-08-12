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
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineNewspaper,
  HiOutlineChatAlt2,
  HiOutlineBookOpen
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
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <Link
            href="/#home"
            className="group flex items-center space-x-3 z-10"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl 
                shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 smooth-transition">
                <div className="w-full h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl 
                  flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 
                bg-clip-text text-transparent">
                AMJAD
              </span>
             
            </div>
          </Link>

          {/* Professional Navigation Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
            <div className="glass rounded-2xl p-2 backdrop-blur-lg border border-white/10">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    onClick={() => handleLinkClick(link.label)}
                    className={`group relative flex flex-col items-center justify-center px-3 py-2 rounded-xl 
                      smooth-transition min-w-[70px] ${
                      activeLink === link.label
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`text-lg mb-1 smooth-transition ${
                      activeLink === link.label ? "text-purple-400" : "group-hover:text-purple-400"
                    }`}>
                      {link.icon}
                    </span>
                    <span className="text-xs font-medium leading-none">{link.label}</span>
                    
                    {/* Active indicator */}
                    {activeLink === link.label && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                        w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center justify-center flex-1 max-w-2xl mx-4">
            <div className="glass rounded-2xl p-2 backdrop-blur-lg border border-white/10">
              <div className="flex items-center space-x-1">
                {navLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    onClick={() => handleLinkClick(link.label)}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl 
                      smooth-transition ${
                      activeLink === link.label
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    title={link.label}
                  >
                    <span className={`text-lg smooth-transition ${
                      activeLink === link.label ? "text-purple-400" : "group-hover:text-purple-400"
                    }`}>
                      {link.icon}
                    </span>
                    
                    {/* Active indicator */}
                    {activeLink === link.label && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                        w-6 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                      </div>
                    )}
                  </Link>
                ))}
                
                {/* More menu for tablet */}
                <div className="relative group">
                  <button className="flex items-center justify-center w-12 h-12 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 smooth-transition">
                    <HiMenu className="text-lg" />
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute top-full right-0 mt-2 w-52 glass rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition border border-white/10">
                    <div className="grid grid-cols-2 gap-2">
                      {navLinks.slice(6).map((link) => (
                        <Link
                          key={link.label}
                          href={link.path}
                          onClick={() => handleLinkClick(link.label)}
                          className={`flex flex-col items-center p-3 rounded-xl smooth-transition ${
                            activeLink === link.label
                              ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className={`text-lg mb-1 ${
                            activeLink === link.label ? "text-purple-400" : ""
                          }`}>
                            {link.icon}
                          </span>
                          <span className="text-xs font-medium text-center">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            aria-label="Toggle Menu"
            className="md:hidden p-3 rounded-xl glass text-white hover:bg-white/10 smooth-transition"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden smooth-transition ${
          isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}>
          <div className="glass rounded-2xl p-4 border border-white/10">
            {/* Mobile Navigation Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={() => handleLinkClick(link.label)}
                  className={`flex flex-col items-center p-3 rounded-xl smooth-transition ${
                    activeLink === link.label
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`text-xl mb-2 ${
                    activeLink === link.label ? "text-purple-400" : ""
                  }`}>
                    {link.icon}
                  </span>
                  <span className="text-xs font-medium text-center">{link.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <Link
              href="/#contact"
              className="flex items-center justify-center space-x-2 w-full px-6 py-4 
                bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white 
                font-semibold shadow-lg smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              <span>Let&apos;s Talk</span>
              <HiOutlineMail className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
