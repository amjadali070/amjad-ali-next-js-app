"use client";

import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import {
  HiAcademicCap,
  HiCalendar,
  HiLocationMarker,
  HiCode,
  HiCheckCircle,
  HiFolder,
  HiChevronRight,
  HiTerminal,
  HiCube,
} from "react-icons/hi";

export default function EducationPath() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexPattern"
              x="0"
              y="0"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L93.3 25 L93.3 62 L50 87 L6.7 62 L6.7 25 Z"
                fill="none"
                stroke="rgba(79, 195, 247, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Floating Code Particles */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30">
              <HiTerminal className="text-secondary text-xl" />
            </div>
            <span className="text-xs font-mono text-secondary/60 tracking-wider uppercase">
              class Education
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">04.</span> Academic
            <span className="text-secondary ml-3">&lt;</span>
            <span className="text-primary/70">Path</span>
            <span className="text-secondary">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full"
          />
        </div>

        {/* Horizontal Education Cards - IDE Style */}
        <div className="max-w-7xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              className="relative group"
            >
              {/* IDE Window Container */}
              <div className="relative bg-gradient-to-br from-surface/90 via-surface/80 to-background/90 backdrop-blur-xl rounded-xl border-2 border-secondary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(79,195,247,0.4)] transition-all duration-500 hover:border-primary/40">
                {/* IDE Title Bar */}
                <div className="relative bg-gradient-to-r from-background via-surface/50 to-background border-b-2 border-secondary/20 px-6 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Window Controls */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition" />
                      </div>

                      {/* File Tab */}
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-background/60 rounded-t-lg border border-secondary/20 border-b-0">
                        <HiCube className="text-primary text-sm" />
                        <span className="text-xs font-mono text-text/80">
                          {index === 0 ? "Masters.tsx" : "Bachelors.tsx"}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      </div>
                    </div>

                    {/* Status Badge */}
                    {index === 0 && (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-xs font-mono text-yellow-400 font-bold">
                          IN PROGRESS
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* IDE Content Area */}
                <div className="grid md:grid-cols-[240px_1fr] gap-0">
                  {/* Left Sidebar - File Tree Style */}
                  <div className="bg-background/40 border-r border-secondary/20 p-6 space-y-4">
                    {/* Degree Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className="relative mx-auto w-24 h-24"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition" />
                      <div className="relative w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl border-2 border-primary/50 flex items-center justify-center">
                        <HiAcademicCap className="text-primary text-5xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                        <span className="text-background text-xs font-bold">
                          {index === 0 ? "M" : "B"}
                        </span>
                      </div>
                    </motion.div>

                    {/* Degree Type */}
                    <div className="text-center space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/30">
                        <span className="text-xs font-mono text-secondary font-bold uppercase tracking-wider">
                          {index === 0 ? "Master's" : "Bachelor's"}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Tree */}
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center gap-2 text-text/50">
                        <HiChevronRight className="text-primary" size={10} />
                        <span>metadata</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-background/60 border border-primary/20">
                          <HiCalendar className="text-primary" size={12} />
                          <div>
                            <div className="text-text/40 text-[10px]">
                              duration
                            </div>
                            <div className="text-text/80">{item.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-background/60 border border-secondary/20">
                          <HiLocationMarker
                            className="text-secondary"
                            size={12}
                          />
                          <div>
                            <div className="text-text/40 text-[10px]">
                              location
                            </div>
                            <div className="text-text/80 truncate">
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content Area - Code Editor Style */}
                  <div className="p-6 space-y-5">
                    {/* Code Block: Degree Declaration */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-text/40">
                        <span className="text-purple-400">interface</span>
                        <span className="text-yellow-400">Degree</span>
                        <span>&#123;</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        <h3 className="text-xl font-bold text-primary font-mono group-hover:text-secondary transition-colors">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-mono">
                          <span className="text-text/40">institution:</span>
                          <span className="text-secondary font-semibold">
                            &quot;{item.institution}&quot;
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-text/40">
                        &#125;
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
                      <span className="text-xs font-mono text-primary/40">
                        ~
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
                    </div>

                    {/* Code Block: Highlights Array */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-secondary">const</span>
                        <span className="text-primary">highlights</span>
                        <span className="text-text/40">=</span>
                        <span className="text-yellow-400">[</span>
                      </div>
                      <div className="pl-4 bg-background/30 rounded-lg p-3 border border-secondary/10 space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.08 }}
                            className="flex items-start gap-2 hover:bg-primary/5 p-2 rounded transition-colors"
                          >
                            <span className="text-secondary/60 font-mono text-xs mt-0.5">
                              •
                            </span>
                            <span className="text-sm text-text/80 font-mono leading-relaxed">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-xs font-mono text-yellow-400">
                        ];
                      </div>
                    </div>

                    {/* Code Block: Projects */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <HiFolder className="text-primary" size={12} />
                        <span className="text-secondary">const</span>
                        <span className="text-primary">projects</span>
                        <span className="text-text/40">=</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-4">
                        {item.projects.map((project, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg text-xs font-mono text-primary hover:border-primary/60 hover:shadow-[0_0_20px_rgba(79,195,247,0.3)] transition-all cursor-default"
                          >
                            <span className="text-secondary/60">&quot;</span>
                            {project}
                            <span className="text-secondary/60">&quot;</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Code Block: Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-purple-400">export</span>
                        <span className="text-secondary">const</span>
                        <span className="text-primary">achievements</span>
                        <span className="text-text/40">=</span>
                        <span className="text-yellow-400">&#123;</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pl-4">
                        {item.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-2 py-1.5 bg-background/40 rounded border border-green-400/20 text-xs font-mono"
                          >
                            <HiCheckCircle
                              className="text-green-400"
                              size={12}
                            />
                            <span className="text-text/70 truncate">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-mono text-yellow-400">
                        &#125;;
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-background/60 border-t border-secondary/20 px-6 py-2 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-primary">
                      <HiCode size={12} />
                      <span>TypeScript</span>
                    </div>
                    <div className="text-text/40">
                      {item.highlights.length} highlights
                    </div>
                    <div className="text-text/40">
                      {item.projects.length} projects
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Completed</span>
                  </div>
                </div>
              </div>

              {/* Floating Line Number */}
              <div className="absolute -left-12 top-8 text-2xl font-bold font-mono text-primary/20 hidden lg:block">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Terminal Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-xl border-2 border-secondary/20 overflow-hidden">
            <div className="bg-surface/40 border-b border-secondary/20 px-4 py-2 flex items-center gap-2">
              <HiTerminal className="text-secondary" size={14} />
              <span className="text-xs font-mono text-text/60">
                Terminal Output
              </span>
            </div>
            <div className="p-4 font-mono text-sm space-y-1">
              <div className="text-secondary">
                <span className="text-primary">$</span>{" "}
                education.getTotalDegrees()
              </div>
              <div className="text-text/70">
                <span className="text-yellow-400">&gt;</span>{" "}
                {educationData.length} degrees obtained
              </div>
              <div className="text-text/70">
                <span className="text-yellow-400">&gt;</span> 6 academic
                projects completed
              </div>
              <div className="text-text/70">
                <span className="text-yellow-400">&gt;</span> 8+ achievements
                unlocked
              </div>
              <div className="flex items-center gap-2 mt-2 text-green-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Success: Academic journey loaded</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
