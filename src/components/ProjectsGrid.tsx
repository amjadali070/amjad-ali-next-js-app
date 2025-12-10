"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiCode,
  HiExternalLink,
  HiStar,
  HiTerminal,
  HiChip,
} from "react-icons/hi";
import { projects } from "@/lib/data";
import { useState } from "react";
import ProjectModal, { ProjectDetail } from "./ProjectModal";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Animated Circuit Board Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuitPattern"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 100 L 50 100 M 50 50 L 50 150 M 100 0 L 100 200 M 150 50 L 150 150"
                  stroke="rgba(79, 195, 247, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="100" r="4" fill="rgba(79, 195, 247, 0.5)" />
                <circle
                  cx="150"
                  cy="100"
                  r="4"
                  fill="rgba(125, 211, 252, 0.5)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitPattern)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

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
                const portfolio = &#123;
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
            >
              <span className="text-primary">05.</span> Featured
              <span className="text-secondary ml-3">&lt;</span>
              <span className="text-primary/70">Projects</span>
              <span className="text-secondary">&gt;</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "180px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
            />
          </div>

          {/* Projects Grid - API Response Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative"
              >
                {/* API Response Card - Skewed Design */}
                <div className="relative h-full">
                  {/* Angled Top Bar */}
                  <div className="relative h-10 bg-gradient-to-r from-secondary via-primary to-secondary rounded-t-lg transform -skew-y-2 shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 h-full transform skew-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-background">
                        <span>HTTP 200</span>
                        <span className="text-background/60">|</span>
                        <span className="text-background/80">OK</span>
                      </div>
                      {index < 3 && (
                        <HiStar className="text-yellow-400 text-sm" />
                      )}
                    </div>
                  </div>

                  {/* Main Card Body */}
                  <div className="relative bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-b-lg border-l-4 border-secondary/50 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_rgba(125,211,252,0.3)] hover:border-l-secondary transition-all duration-500">
                    {/* Request Info Bar */}
                    <div className="bg-background/40 px-4 py-2 border-b border-secondary/20">
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 bg-secondary/20 border border-secondary/40 rounded text-secondary font-bold">
                          GET
                        </span>
                        <span className="text-text/60">
                          /api/v2/projects/{index + 1}
                        </span>
                        <div className="flex-1" />
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-green-400">Live</span>
                        </div>
                      </div>
                    </div>

                    {/* Response Body */}
                    <div className="p-5">
                      {/* Response Header Comments */}
                      <div className="mb-3 space-y-1 font-mono text-[10px] text-text/40">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">&#47;&#47;</span>
                          <span>Response: 200 OK</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">&#47;&#47;</span>
                          <span>Content-Type: application/json</span>
                        </div>
                      </div>

                      {/* JSON Response */}
                      <div className="space-y-3 font-mono text-xs">
                        <div className="text-text/40">&#123;</div>

                        <div className="pl-3 space-y-3">
                          {/* Project Title - Large Display */}
                          <div className="space-y-1.5">
                            <div className="text-blue-400 text-[10px]">
                              &quot;project&quot;:
                            </div>
                            <h3 className="text-lg font-bold text-text group-hover:text-secondary transition-colors leading-tight">
                              {project.title}
                            </h3>
                          </div>

                          {/* Associated With - Added */}
                          {project.associatedWith && (
                            <div className="space-y-1.5">
                              <div className="text-blue-400 text-[10px]">
                                &quot;associatedWith&quot;:
                              </div>
                              <p className="text-xs text-text/70 font-mono pl-3">
                                &quot;
                                <span
                                  style={{
                                    color:
                                      project.associatedWith ===
                                      "Alvi Global Enterprises (AGE)"
                                        ? "#0041F5"
                                        : project.associatedWith === "eSanad"
                                        ? "#591668"
                                        : project.associatedWith === "Martechsol"
                                        ? "#662D91"
                                        : project.associatedWith === "CharCentric"
                                        ? "#80808C"
                                        : project.associatedWith === "Sukkur IBA"
                                        ? "#0A2D53"
                                        : undefined,
                                  }}
                                  className={`font-extrabold ${
                                    !project.associatedWith.match(
                                      /^(Alvi Global Enterprises \(AGE\)|eSanad|Martechsol|CharCentric|Sukkur IBA)$/
                                    )
                                      ? "text-primary"
                                      : ""
                                  }`}
                                >
                                  {project.associatedWith}
                                </span>
                                &quot;
                              </p>
                            </div>
                          )}

                          {/* Description - Prominent */}
                          <div className="space-y-1.5 pl-2 border-l-2 border-secondary/30">
                            <div className="text-blue-400 text-[10px]">
                              &quot;summary&quot;:
                            </div>
                            <p className="text-sm text-text/80 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Stack - Pill Style */}
                          <div className="space-y-2">
                            <div className="text-blue-400 text-[10px]">
                              &quot;stack&quot;:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: index * 0.08 + i * 0.04,
                                  }}
                                  className="relative group/tag"
                                >
                                  <div className="px-3 py-1 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/40 rounded-full text-[10px] text-secondary font-semibold hover:from-secondary/30 hover:to-primary/30 hover:border-secondary/60 hover:shadow-[0_0_12px_rgba(125,211,252,0.3)] transition-all cursor-default">
                                    {tag}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Status Object - Compact */}
                          <div className="flex items-center gap-3 text-[10px] pt-2 border-t border-secondary/10">
                            <div className="flex items-center gap-1.5">
                              <span className="text-blue-400">
                                &quot;status&quot;:
                              </span>
                              <span className="text-green-400">
                                &quot;deployed&quot;
                              </span>
                            </div>
                            <span className="text-text/20">|</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-blue-400">
                                &quot;version&quot;:
                              </span>
                              <span className="text-yellow-400">
                                &quot;2.0&quot;
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-text/40">&#125;</div>
                      </div>

                      {/* Action Buttons - Horizontal Split */}
                      <div className="mt-4 pt-4 border-t-2 border-dashed border-secondary/20 grid grid-cols-2 gap-2">
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setSelectedProject(project as ProjectDetail)
                          }
                          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-secondary via-primary to-secondary rounded-md text-background font-mono text-xs font-bold shadow-lg hover:shadow-[0_0_20px_rgba(125,211,252,0.5)] transition-all"
                        >
                          <HiCode size={14} />
                          <span>VIEW</span>
                        </motion.button>
                        {project.link !== "#" && (
                          <motion.div
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              href={project.link}
                              target="_blank"
                              className="flex items-center justify-center gap-2 px-3 py-2.5 bg-background/50 border-2 border-secondary/40 rounded-md text-secondary font-mono text-xs font-bold hover:bg-secondary/10 hover:border-secondary/70 transition-all w-full"
                            >
                              <HiExternalLink size={14} />
                              <span>DEMO</span>
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Gradient Strip */}
                    <div className="h-2 bg-gradient-to-r from-secondary via-primary to-secondary opacity-60" />
                  </div>

                  {/* Floating Response Time Badge */}
                  <motion.div
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background shadow-lg"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-background">
                      <HiTerminal size={10} />
                      <span>
                        {Math.floor(
                          (project.title.charCodeAt(0) +
                            project.description.length) %
                            50
                        ) + 50}
                        ms
                      </span>
                    </div>
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-8 right-0 w-12 h-12 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
