"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiCode, HiExternalLink, HiFolder, HiStar } from "react-icons/hi";
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
        {/* Background Effects - Optimized */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <HiFolder className="text-primary text-2xl" />
              <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
            >
              <span className="text-primary">05.</span> Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "128px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative h-full flex flex-col rounded-2xl overflow-hidden glass-panel border-2 border-white/5 hover:border-primary/30 transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-surface/50">
                    {/* Folder Tab */}
                    <div className="absolute top-0 left-0 z-10 px-4 py-2 bg-surface/90 backdrop-blur-sm rounded-br-xl border-r border-b border-white/10">
                      <HiFolder className="text-primary text-xl" />
                    </div>

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Action Buttons Overlay */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedProject(project as ProjectDetail)
                          }
                          aria-label="View project details"
                          className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl text-background shadow-lg hover:shadow-primary/50 transition-all duration-300"
                        >
                          <HiCode size={24} />
                        </button>
                      </motion.div>
                      {project.link !== "#" && (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={project.link}
                            target="_blank"
                            className="p-4 bg-gradient-to-br from-surface to-surface/80 rounded-xl text-text border border-white/10 shadow-lg hover:shadow-white/20 hover:border-white/30 transition-all duration-300"
                          >
                            <HiExternalLink size={24} />
                          </Link>
                        </motion.div>
                      )}
                    </div>

                    {/* Star Badge for Featured */}
                    {index < 3 && (
                      <div className="absolute top-4 right-4 z-10 p-2 bg-secondary/90 backdrop-blur-sm rounded-full border border-white/20">
                        <HiStar className="text-background text-sm" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Project Number */}
                    <div className="text-xs font-mono text-primary/50 mb-2">
                      project_{String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text/70 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Separator */}
                    <div className="h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent mb-4" />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors duration-200 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent" />
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
