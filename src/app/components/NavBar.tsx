"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  VscHome, 
  VscAccount, 
  VscCode, 
  VscMail, 
  VscMenu, 
  VscChromeClose,
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions
} from "react-icons/vsc";
import { SiReact, SiTypescript, SiJavascript, SiMarkdown, SiJson } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

interface NavLink {
  label: string;
  path: string;
  fileProfile: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/#home", fileProfile: "home.tsx", icon: <SiReact className="text-[#61DAFB]" /> },
  { label: "About", path: "/#about", fileProfile: "about.ts", icon: <SiTypescript className="text-[#3178C6]" /> },
  { label: "Services", path: "/#services", fileProfile: "services.json", icon: <SiJson className="text-[#F7DF1E]" /> }, // JSON for config/services
  { label: "Skills", path: "/#skills", fileProfile: "package.json", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { label: "Projects", path: "/#projects", fileProfile: "projects.jsx", icon: <SiReact className="text-[#61DAFB]" /> },
  { label: "Contact", path: "/#contact", fileProfile: "contact.sh", icon: <FaTerminal className="text-white" /> },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (label: string) => {
    setActiveTab(label);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}>
      
      {/* Top Bar (Title Bar + Menu) */}
      <div className="h-10 bg-[#1f2428] flex items-center justify-between px-4 text-sm select-none border-b border-[#1b1f23]">
        <div className="flex items-center gap-4">
            {/* VS Code Icon */}
            <div className="text-[#007acc]">
                <VscCode size={20} />
            </div>
            
            {/* Menu Items (Desktop) */}
            <div className="hidden md:flex items-center gap-3 text-muted hover:text-white cursor-pointer transition-colors">
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">File</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Edit</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Selection</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">View</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Go</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Run</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Terminal</span>
                <span className="hover:bg-white/10 px-2 py-0.5 rounded">Help</span>
            </div>
        </div>

        {/* Title (Center) */}
        <div className="hidden lg:block text-muted text-xs absolute left-1/2 transform -translate-x-1/2">
            Amjad Ali - Portfolio - Visual Studio Code
        </div>

        {/* Window Controls (Mac Style decorative) */}
        <div className="flex gap-2 group">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] group-hover:brightness-110" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover:brightness-110" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] group-hover:brightness-110" />
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-muted hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <VscChromeClose size={20} /> : <VscMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
         <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-[#1f2428] text-muted border-b border-[#30363d] overflow-hidden"
         >
             {navLinks.map((link) => (
                 <Link 
                    key={link.label}
                    href={link.path}
                    onClick={() => handleLinkClick(link.label)}
                    className={`flex items-center gap-2 px-4 py-3 hover:bg-[#2d3239] ${activeTab === link.label ? 'bg-[#2d3239] text-white' : ''}`}
                 >
                     {link.icon}
                     <span className="font-mono text-sm">{link.fileProfile}</span>
                 </Link>
             ))}
         </motion.div>
      )}

      {/* Tabs Bar (Desktop) */}
      <div className="h-9 bg-[#0d1117] flex items-end overflow-x-auto scrollbar-hide text-sm border-b border-[#30363d]">
          {/* Side Bar Icons Placeholder */}
          <div className="hidden md:flex w-12 h-full bg-[#1f2428] items-center justify-center border-r border-[#30363d]">
               <VscFiles className="text-muted" size={20} />
          </div>

          <div className="flex w-full overflow-x-auto">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.path}
                    onClick={() => handleLinkClick(link.label)}
                    className={`
                        min-w-[120px] md:min-w-[140px] h-9 flex items-center justify-between px-3 
                        border-r border-[#30363d] cursor-pointer group relative
                        ${activeTab === link.label 
                            ? 'bg-[#0d1117] text-[#c9d1d9] border-t-2 border-t-[#58a6ff]' 
                            : 'bg-[#161b22] text-[#8b949e] hover:bg-[#0d1117] border-t-2 border-t-transparent'}
                    `}
                >
                    <div className="flex items-center gap-2">
                        <span className="opacity-80 md:w-4">{link.icon}</span>
                        <span className="font-mono text-xs md:text-sm truncate">{link.fileProfile}</span>
                    </div>
                    {/* Close Icon (Decorative) */}
                    <VscChromeClose size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeTab === link.label ? 'opacity-100' : ''}`} />
                </Link>
            ))}
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
