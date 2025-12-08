"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";

interface AboutMeProps {
  heading?: string;
  subheading?: string;
  content?: string;
  buttonLabel?: string;
  onDownloadCV?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  heading = "About Me",
  subheading = "Software Engineer",
  content = `I’m Amjad Ali, a Full Stack Software Engineer with hands-on experience in 
              building scalable and user-focused applications. I specialize in JavaScript, 
              TypeScript, React, Next.js, Node.js, and cloud-based solutions. Over the past 
              few years, I’ve developed CRM systems, AI-powered dashboards, and real-time 
              analytics platforms. I enjoy solving complex problems, optimizing performance, 
              and delivering impactful digital products. Always eager to learn, I aim to 
              contribute to projects that drive innovation and real-world value.`,
  buttonLabel = "Download CV",
  onDownloadCV,
}) => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">cat</span> README.md
          </h2>
          <p className="text-muted font-mono">// A little bit about who I am</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="README.md (Preview)">
            <article className="prose prose-invert max-w-none font-sans">
              <h1 className="border-b border-border pb-2 mb-6 text-3xl font-bold text-foreground">
                Hi, I'm Amjad Ali 👋
              </h1>
              
              <div className="mb-6 bg-[#161b22] p-4 rounded-md border-l-4 border-secondary">
                 <p className="m-0 text-muted font-mono text-sm">
                    {subheading}
                 </p>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                 <p>
                    {content}
                 </p>
                 <p>
                    I thrive on solving complex problems and creating digital experiences that make a 
                    meaningful impact. <code className="bg-[#161b22] px-1 rounded text-secondary">Every project</code> is an opportunity to push boundaries and deliver 
                    exceptional results.
                 </p>
              </div>

              <h2 className="mt-8 mb-4 text-xl font-bold text-foreground border-b border-border pb-1">
                 🚀 Core Values
              </h2>
              
              <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                  <li className="flex items-start gap-2">
                      <span className="text-success">✔</span> 
                      <span><strong>Clean Code:</strong> Writing maintainable and scalable solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                       <span className="text-success">✔</span> 
                       <span><strong>Continuous Learning:</strong> Always exploring new tech.</span>
                  </li>
                  <li className="flex items-start gap-2">
                       <span className="text-success">✔</span> 
                       <span><strong>Growth Mindset:</strong> Delivering value & improving.</span>
                  </li>
                  <li className="flex items-start gap-2">
                       <span className="text-success">✔</span> 
                       <span><strong>User Centric:</strong> Focusing on the end-user experience.</span>
                  </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                  <button 
                    onClick={onDownloadCV}
                    className="bg-success hover:bg-success/90 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-2"
                  >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                     {buttonLabel}
                  </button>
              </div>

            </article>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
