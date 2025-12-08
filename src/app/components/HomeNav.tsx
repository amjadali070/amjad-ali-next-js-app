"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";
import Button from "./ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaDownload,
  FaRocket,
} from "react-icons/fa";

interface Stat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  behance?: string;
}

interface AboutMeProps {
  name: string;
  greeting: string;
  role: string;
  profileImage: StaticImageData | string;
  stats: Stat[];
  socialLinks: SocialLinks;
  onHireMe?: () => void;
  onDownloadResume?: () => void;
}

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const HomeNav: React.FC<AboutMeProps> = ({
  name,
  greeting,
  role,
  profileImage,
  stats,
  socialLinks,
  onHireMe,
  onDownloadResume,
}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Terminal Output */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TerminalWindow title="user@portfolio:~" className="min-h-[400px]">
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex gap-2 text-muted">
                    <span className="text-secondary">➜</span>
                    <span className="text-neon-blue">~</span>
                    <span>$ ./intro.sh</span>
                </div>
                
                <div className="pl-4 space-y-2 text-foreground">
                    <div className="flex gap-2">
                        <span className="text-success">✔</span>
                        <span>Initializing user session...</span>
                    </div>
                    <div>
                        <span className="text-secondary font-bold">Name: </span>
                        <TypewriterText text={name} delay={0.5} />
                    </div>
                    <div className="text-neon-purple font-bold text-xl md:text-2xl mt-2">
                         <TypewriterText text={`> ${role}`} delay={1.5} />
                         <span className="animate-pulse">_</span>
                    </div>
                    
                    <div className="py-4 text-muted/80 text-sm md:text-base leading-relaxed max-w-lg">
                         <TypewriterText 
                            text="Passionate Full Stack Developer crafting clean code & smart systems. Specializing in React, Next.js, and cloud architectures." 
                            delay={3} 
                         />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 6 }}
                            className="flex gap-4"
                        >
                             <Button onClick={onHireMe} variant="primary">
                                <FaRocket /> Install-Dev
                             </Button>
                             <Button onClick={onDownloadResume} variant="outline">
                                <FaDownload /> get_resume.pdf
                             </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Social Links as array output */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 7 }}
                    className="pt-8 text-sm text-muted"
                >
                    <div className="mb-2">const social_links = [</div>
                    <div className="pl-4 flex flex-col gap-1">
                        {socialLinks.github && (
                            <a href={socialLinks.github} target="_blank" className="hover:text-neon-blue transition-colors">"github.com/{socialLinks.github.split('/').pop()}",</a>
                        )}
                        {socialLinks.linkedin && (
                            <a href={socialLinks.linkedin} target="_blank" className="hover:text-neon-blue transition-colors">"linkedin.com/in/{socialLinks.linkedin.split('/').pop()}",</a>
                        )}
                        {socialLinks.twitter && (
                            <a href={socialLinks.twitter} target="_blank" className="hover:text-neon-blue transition-colors">"twitter.com/{socialLinks.twitter.split('/').pop()}",</a>
                        )}
                    </div>
                    <div>];</div>
                </motion.div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Right Column: Profile Image / Visuals */}
          <div className="flex justify-center lg:justify-end relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
             >
                {/* Glitch/Holo effect container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-lg group">
                     {/* Scanline overlay on image */}
                     <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-5 mix-blend-overlay pointer-events-none z-10" />
                     
                     <Image 
                        src={profileImage}
                        alt={name}
                        fill
                        className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                        priority
                     />
                     
                     {/* Corner Brackets */}
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                     <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                     <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                </div>

                {/* System Status "Floating Cards" */}
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + (i * 0.2) }}
                        className="absolute -right-4 bg-panel/90 border border-border p-3 rounded shadow-xl backdrop-blur-sm hidden lg:block"
                        style={{ top: `${(i + 1) * 25}%` }}
                    >
                        <div className="text-secondary text-xs uppercase font-bold">{stat.label}</div>
                        <div className="text-white font-mono">{stat.value}</div>
                    </motion.div>
                ))}

             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNav;
