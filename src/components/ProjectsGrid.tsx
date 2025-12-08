"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { projects } from "@/lib/data";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
          >
            <span className="text-primary">05.</span> Featured Projects
          </motion.h2>
          <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden glass-panel hover:border-primary/30 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href="#"
                    onClick={(e) => {
                       e.preventDefault();
                       // Handle 3D view or details modal
                       console.log("View Project Details", project.title);
                    }}
                    className="p-3 bg-surface rounded-full text-primary hover:bg-primary hover:text-surface transition-colors transform hover:scale-110"
                  >
                    <HiCode size={20} />
                  </Link>
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="p-3 bg-surface rounded-full text-text hover:bg-white hover:text-black transition-colors transform hover:scale-110"
                    >
                      <HiExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
