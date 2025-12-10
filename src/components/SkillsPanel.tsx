"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { HiChip, HiCode } from "react-icons/hi";

export default function SkillsPanel() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Package Manager Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="packagePattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="10"
                y="10"
                width="30"
                height="30"
                fill="none"
                stroke="rgba(79, 195, 247, 0.3)"
                strokeWidth="1"
              />
              <rect
                x="70"
                y="70"
                width="30"
                height="30"
                fill="none"
                stroke="rgba(125, 211, 252, 0.3)"
                strokeWidth="1"
              />
              <line
                x1="25"
                y1="40"
                x2="85"
                y2="70"
                stroke="rgba(79, 195, 247, 0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#packagePattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <HiChip className="text-primary text-xl" />
            </div>
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              npm install --save-dev
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">02.</span> Dependencies
            <span className="text-secondary ml-3">&#47;&#47;</span>
            <span className="text-primary/70"> Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
          />
        </div>

        {/* Package.json Style Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-lg border-2 border-primary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* File Tab */}
            <div className="bg-background/50 border-b border-primary/20 px-4 py-2 flex items-center gap-2">
              <HiCode className="text-primary" size={16} />
              <span className="font-mono text-sm text-primary">
                package.json
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-text/40 font-mono">
                  dependencies installed
                </span>
              </div>
            </div>

            {/* Package Content */}
            <div className="p-6 md:p-8 font-mono text-sm">
              {/* Opening Brace */}
              <div className="text-text/60 mb-4">&#123;</div>

              {/* Package Info */}
              <div className="pl-4 space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">&quot;name&quot;:</span>
                  <span className="text-yellow-600 dark:text-yellow-400">
                    &quot;amjad-ali-portfolio&quot;
                  </span>
                  <span className="text-text/40">,</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">&quot;version&quot;:</span>
                  <span className="text-yellow-600 dark:text-yellow-400">&quot;2.0.0&quot;</span>
                  <span className="text-text/40">,</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">&quot;author&quot;:</span>
                  <span className="text-yellow-600 dark:text-yellow-400">&quot;Amjad Ali&quot;</span>
                  <span className="text-text/40">,</span>
                </div>
              </div>

              {/* Skills Categories as Dependencies */}
              {skillsData.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4 pl-4">
                    <span className="text-blue-600 dark:text-blue-400">
                      &quot;
                      {category.category.toLowerCase().replace(/\s+/g, "-")}
                      &quot;:
                    </span>
                    <span className="text-text/60">&#123;</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + sIdx * 0.03 }}
                        whileHover={{ scale: 1.05, x: 4 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/60 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 cursor-default">
                          <span
                            className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                          >
                            {skill.icon}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-purple-600 dark:text-purple-400 text-xs">
                                &quot;
                              </span>
                              <span className="text-text/90 text-xs font-semibold">
                                {skill.name}
                              </span>
                              <span className="text-purple-600 dark:text-purple-400 text-xs">
                                &quot;
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-text/40 text-[10px]">
                                :
                              </span>
                              <span className="text-green-600 dark:text-green-400 text-[10px]">
                                &quot;^{((skill.name.length % 3) + 1)}.
                                {skill.name.charCodeAt(0) % 10}.
                                {skill.name.length % 10}&quot;
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Closing Category */}
                  <div className="pl-4 mt-4 text-text/60">
                    &#125;{idx < skillsData.length - 1 ? "," : ""}
                  </div>
                </motion.div>
              ))}

              {/* Closing Brace */}
              <div className="text-text/60 mt-4">&#125;</div>

              {/* Footer Stats */}
              <div className="mt-6 pt-6 border-t border-primary/20 flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-text/60">
                    {skillsData.reduce(
                      (acc, cat) => acc + cat.skills.length,
                      0
                    )}{" "}
                    packages installed
                  </span>
                </div>
                <span className="text-text/20">|</span>
                <span className="text-text/40">Dependencies up to date</span>
                <span className="text-text/20">|</span>
                <span className="text-text/40">No vulnerabilities found</span>
              </div>
            </div>
          </div>

          {/* NPM Install Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 bg-gradient-to-br from-background/80 to-surface/60 backdrop-blur-xl rounded-lg border border-primary/20 p-5 font-mono"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary">$</span>
              <span className="text-text/60 text-sm">npm list --depth=0</span>
            </div>
            <div className="space-y-1 text-xs text-text/80">
              <div className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>All dependencies successfully loaded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">i</span>
                <span>Ready for production deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-600 dark:text-yellow-400">⚡</span>
                <span>Performance optimized - 100% code coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
