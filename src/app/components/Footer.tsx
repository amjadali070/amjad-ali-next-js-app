"use client";

import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaHeart
} from "react-icons/fa";
import { 
  VscSourceControl,
  VscError,
  VscWarning,
  VscCheck,
  VscBell,
  VscFeedback
} from "react-icons/vsc";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#161b22] border-t border-border text-muted text-xs font-mono select-none z-50">
      <div className="flex justify-between items-center h-6 px-3">
        {/* Left Section (Git, Errors) */}
        <div className="flex items-center space-x-4">
            <a 
                href="https://github.com/amjadali070/amjad-ali-next-js-app" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
                <VscSourceControl className="text-sm" />
                <span>main*</span>
            </a>
            
            <div className="flex items-center gap-2 group cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">
                    <VscError />
                    <span>0</span>
                </div>
                <div className="flex items-center gap-1">
                    <VscWarning />
                    <span>0</span>
                </div>
            </div>
        </div>

        {/* Center Section (Copyright / Socials) */}
        <div className="flex items-center space-x-6 hidden md:flex">
             <div className="flex items-center gap-2">
                 <span>Amjad Ali &copy; 2025</span>
             </div>
             <div className="flex items-center gap-4">
                 <a href="https://github.com/amjadali070" target="_blank" aria-label="Github" className="hover:text-white transition-colors">
                     <FaGithub />
                 </a>
                 <a href="https://www.linkedin.com/in/amjadali070/" target="_blank" aria-label="LinkedIn" className="hover:text-white transition-colors">
                     <FaLinkedin />
                 </a>
                 <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-white transition-colors">
                     <FaTwitter />
                 </a>
             </div>
        </div>

        {/* Right Section (Lang, Spaces, Tools) */}
        <div className="flex items-center space-x-4">
             <div className="flex items-center gap-2 hover:text-white cursor-pointer hidden sm:flex">
                 <SiTypescript className="text-[10px]" />
                 <span>TypeScript React</span>
             </div>
             
             <div className="flex items-center gap-1 hover:text-white cursor-pointer hidden sm:flex">
                 <VscCheck className="text-sm" />
                 <span>Prettier</span>
             </div>

             <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                 <VscBell className="text-sm" />
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
