"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  hash: string;
}

interface ExperienceProps {
  heading?: string;
  experiences?: ExperienceItem[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    company: "Esanad",
    position: "Software Engineer",
    duration: "Apr 2025 - Present",
    location: "Remote (UAE)",
    description: "Design, develop, and maintain secure web and backend applications using required technologies. Deliver production-ready features using test-driven development and performance optimization.",
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript"],
    hash: "a1b2c3d"
  },
  {
    company: "MarTechSol",
    position: "Software Engineer", 
    duration: "Oct 2024 - Apr 2025",
    location: "Karachi, Pakistan",
    description: "Built and maintained scalable web applications using MERN, Next.js, and WordPress. Developed responsive user interfaces with React, Tailwind CSS, JavaScript, and TypeScript. Designed and integrated RESTful APIs.",
    technologies: ["MERN", "Next.js", "React", "TypeScript", "AWS"],
    hash: "e5f6g7h"
  },
  {
    company: "CharCentric",
    position: "Software Engineer",
    duration: "Aug 2023 - Aug 2024",
    location: "Remote (UAE, Abu Dhabi)",
    description: "Collaborated with cross-functional teams to analyze requirements and align on project goals. Designed, developed, and optimized software solutions for performance and integration.",
    technologies: ["React.js", "Next.js", "Node.js", "AI Dashboards"],
    hash: "i8j9k0l"
  }
];

const Experience: React.FC<ExperienceProps> = ({ 
  experiences = defaultExperiences 
}) => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">$</span> git log --stat
          </h2>
          <p className="text-muted font-mono">// My professional commit history</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="bash ~ git log">
            <div className="font-mono text-sm md:text-base space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-border ml-2">
                        {/* Commit hash and decorative dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-[#0d1117]" />
                        
                        <div className="mb-2">
                            <span className="text-yellow-500">commit {exp.hash}</span>
                            <span className="text-muted ml-4">
                                ({index === 0 ? "HEAD -> main, " : ""}origin/feature/{exp.company.toLowerCase()})
                            </span>
                        </div>
                        
                        <div className="text-foreground">
                            Author: <span className="text-neon-blue">{exp.company}</span> &lt;{exp.location}&gt;
                        </div>
                        <div className="text-foreground mb-4">
                            Date:   <span className="text-neon-green">{exp.duration}</span>
                        </div>

                        <div className="pl-4 mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                            <p className="text-slate-400 mb-3 max-w-3xl">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-[#161b22] text-secondary border border-border">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {index < experiences.length - 1 && (
                            <div className="h-8 border-l-2 border-dashed border-border/50 ml-[-2px]" />
                        )}
                    </div>
                ))}
                
                <div className="pl-6 ml-2 pt-4 text-muted">
                    Initial commit
                </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
