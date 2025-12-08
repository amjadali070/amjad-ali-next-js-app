"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiTerminal,
  HiFolder,
  HiCode,
  HiChevronRight,
} from "react-icons/hi";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 195, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(79, 195, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <HiTerminal className="text-primary text-xl" />
            </div>
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              Professional Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">03.</span> Professional Experience
            <span className="text-secondary">&#123;</span>
            <span className="text-primary/40 text-2xl">&#125;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Code-style Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent md:transform md:-translate-x-1/2">
            {/* Animated Dots along the line */}
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"
              animate={{ y: [0, 1000] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node - Code Symbol */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-0 md:left-1/2 top-12 md:transform md:-translate-x-1/2 z-20"
                >
                  <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg blur-md opacity-75" />
                    {/* Main Node */}
                    <div className="relative w-14 h-14 bg-background border-2 border-primary rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(79,195,247,0.5)]">
                      <HiCode className="text-primary text-2xl" />
                    </div>
                    {/* Corner Brackets */}
                    <div className="absolute -top-2 -left-2 text-secondary text-xl font-mono">
                      &#123;
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-secondary text-xl font-mono">
                      &#125;
                    </div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <div
                  className={`md:w-[calc(50%-2.5rem)] w-full ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group relative">
                    {/* Code Window Frame */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />

                    <div className="relative bg-surface/95 backdrop-blur-xl rounded-2xl border border-primary/20 overflow-hidden shadow-2xl">
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-background/80 to-background/60 border-b border-primary/10">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition cursor-pointer" />
                          </div>
                          <span className="text-xs font-mono text-text/40">
                            experience_{index + 1}.tsx
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-primary/50">
                          <HiTerminal size={14} />
                          <span>v1.{index}</span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-5">
                        {/* Company & Position Header with Code Style */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/50 transition-all">
                              <HiBriefcase className="text-primary text-xl" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-1 font-mono">
                                {item.position}
                              </h3>
                              <div className="flex items-center gap-2 font-mono text-secondary">
                                <span className="text-text/40">const</span>
                                <span className="text-primary text-sm">
                                  company
                                </span>
                                <span className="text-text/40">=</span>
                                <span className="text-secondary font-semibold">
                                  &quot;{item.company}&quot;
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Meta Info as Code Comments */}
                          <div className="flex flex-wrap gap-2 text-xs font-mono">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/60 border border-primary/20">
                              <HiCalendar className="text-primary" size={12} />
                              <span className="text-text/70">
                                {item.duration}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/60 border border-secondary/20">
                              <HiLocationMarker
                                className="text-secondary"
                                size={12}
                              />
                              <span className="text-text/70">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider Line */}
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        {/* Responsibilities - Code Block Style */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono text-primary/70 uppercase tracking-wider">
                            <HiChevronRight
                              className="text-primary"
                              size={12}
                            />
                            <span>Key Achievements</span>
                          </div>
                          <div className="bg-background/40 rounded-lg p-4 border border-primary/10 space-y-2">
                            {item.responsibilities.map((resp, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors"
                              >
                                <span className="text-primary/60 text-xs mt-0.5 font-mono">
                                  →
                                </span>
                                <span className="text-sm text-text/80 leading-relaxed font-mono">
                                  {resp}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Projects Section */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono text-secondary/70 uppercase tracking-wider">
                            <HiFolder className="text-secondary" size={12} />
                            <span>Featured Projects</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.projects.map((project, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                                className="relative group/project"
                              >
                                <div className="px-3 py-1.5 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/30 rounded-md text-xs font-medium text-text/90 hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(125,211,252,0.3)] transition-all duration-300 cursor-default font-mono">
                                  <span className="text-secondary/60 mr-1">
                                    #
                                  </span>
                                  {project}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack - Array Style */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center gap-2 text-xs font-mono text-text/50">
                            <span className="text-primary">const</span>
                            <span className="text-secondary">techStack</span>
                            <span className="text-text/40">=</span>
                            <span className="text-yellow-400">[</span>
                          </div>
                          <div className="flex flex-wrap gap-2 pl-4">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 text-xs font-mono bg-background/60 border border-primary/20 rounded text-primary/80 hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_10px_rgba(79,195,247,0.2)] transition-all duration-200 cursor-default"
                              >
                                &quot;{tech}&quot;
                                {i < item.technologies.length - 1 ? "," : ""}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs font-mono text-yellow-400 pl-0">
                            ];
                          </div>
                        </div>
                      </div>

                      {/* Bottom Gradient Border */}
                      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Floating Code Brackets */}
                    <div
                      className={`absolute -top-4 ${
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      } text-4xl font-mono text-primary/10 group-hover:text-primary/30 transition-colors pointer-events-none`}
                    >
                      &#123;&#125;
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-gradient-to-r from-surface/80 via-surface/60 to-surface/80 backdrop-blur-sm border border-primary/20 font-mono">
            <span className="text-primary text-sm">console.log(</span>
            <span className="text-text/80 text-sm">
              &quot;{experienceData.length} experiences loaded&quot;
            </span>
            <span className="text-primary text-sm">);</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
