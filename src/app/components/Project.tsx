"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  HiCode,
  HiExternalLink,
  HiChevronRight,
} from "react-icons/hi";
import {
  containerVariants,
  staggerContainerVariants,
  staggerItemVariants,
  cardHoverVariants,
} from "../utils/motionVariants";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
  tags?: string[];
}

export interface ProjectsProps {
  heading: string;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ heading, projects }) => {
  const router = useRouter();

  const getProjectSlug = (title: string): string => {
    const slugMap: Record<string, string> = {
      "Customer Relationship Management (CRM)": "crm-system",
      "HR Management System (HRM)": "hrm-system",
      "AI Finance Dashboard": "ai-finance-dashboard",
      "Real-Time Analytics Dashboard": "analytics-dashboard",
      "Blockchain-Based Voting System": "voting-system",
      "EaseWeb (Easy Website Builder)": "website-builder",
    };
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, "-");
  };

  const handleViewDetails = (title: string) => {
    const slug = getProjectSlug(title);
    router.push(`/project/${slug}`);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Function Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">const</span>{" "}
            <span className="text-accent-primary">Projects</span> ={" "}
            <span className="text-code-orange">() =&gt; {"{"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            {heading}
          </h2>
          
          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            Explore my latest work showcasing innovative solutions and
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-surface border border-border rounded-lg overflow-hidden hover:border-accent-primary/50 transition-all duration-300"
              variants={staggerItemVariants}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-panel">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-60" />

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleViewDetails(project.title)}
                    className="p-2 bg-surface/90 backdrop-blur-sm border border-border rounded-lg text-accent-primary hover:bg-accent-primary hover:text-background transition-all duration-300"
                    title="View Details"
                  >
                    <HiCode className="text-lg" />
                  </button>
                  
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface/90 backdrop-blur-sm border border-border rounded-lg text-accent-primary hover:bg-accent-primary hover:text-background transition-all duration-300"
                      title="View Repository"
                    >
                      <HiExternalLink className="text-lg" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Title - API Endpoint Style */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-1 bg-code-green/10 text-code-green rounded border border-code-green/20">
                      GET
                    </span>
                    <span className="text-text-muted">/projects/{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-mono bg-panel border border-border rounded text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(project.title)}
                  className="w-full mt-4 px-4 py-2 bg-panel border border-border rounded-lg text-accent-primary font-mono text-sm hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>view-source</span>
                  <HiChevronRight className="text-sm" />
                </button>
              </div>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-glow" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer - Closing Brace */}
        <motion.div
          className="mt-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-mono text-sm text-code-orange">{"}"}</div>
          
          {/* CTA */}
          <div className="flex items-center gap-4 p-6 bg-surface border border-border rounded-lg">
            <div className="flex-1">
              <h4 className="text-text-primary font-semibold mb-1">
                Want to See More?
              </h4>
              <p className="text-text-secondary text-sm">
                Check out my GitHub for additional projects and contributions
              </p>
            </div>
            <Link
              href="https://github.com/amjadali070"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-300 flex items-center gap-2"
            >
              <span>View GitHub</span>
              <HiExternalLink />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
