"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
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
    description:
      "Design, develop, and maintain secure web and backend applications using required technologies. Deliver production-ready features using test-driven development and performance optimization. Participate in code reviews, team discussions, and sprint retrospectives to enhance collaboration. Integrate APIs, third-party services, and insurance data platforms seamlessly. Support and improve lead automation, digital claims management, and underwriting tools. Ensure code quality, security, and scalability across all development tasks. Perform additional tasks and responsibilities assigned by management.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "APIs",
      "TDD",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    company: "MarTechSol",
    position: "Software Engineer",
    duration: "Oct 2024 - Apr 2025",
    location: "Karachi, Pakistan",
    description:
      "Built and maintained scalable web applications using MERN, Next.js, and WordPress. Developed responsive user interfaces with React, Tailwind CSS, JavaScript, and TypeScript. Designed and integrated RESTful APIs for efficient frontend-backend communication. Optimized database queries to enhance backend performance and API response times. Implemented CI/CD pipelines and worked with cloud platforms like AWS and Azure. Collaborated with cross-functional teams to define architecture and deliver solutions. Mentored junior developers and contributed to AI-powered application development.",
    technologies: [
      "MERN",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "AWS",
      "Azure",
      "CI/CD",
    ],
  },
  {
    company: "CharCentric",
    position: "Software Engineer",
    duration: "Aug 2023 - Aug 2024",
    location: "Remote (UAE, Abu Dhabi)",
    description:
      "Collaborated with cross-functional teams to analyze requirements and align on project goals. Designed, developed, and optimized software solutions for performance and integration. Maintained and enhanced existing systems by resolving issues and implementing improvements. Created technical documentation to support streamlined development and quality deliverables. Engaged with clients and teams to optimize system performance and capabilities. Contributed to key projects like RMG LMS, AI Dashboards, and Data Intelligence tools.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "System Integration",
      "Performance Optimization",
      "AI Dashboards",
      "LMS",
    ],
  },
];

export default function Experience({
  experiences = defaultExperiences,
}: ExperienceProps) {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Git Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-green">
            <span className="text-code-purple">git</span> log --all --graph
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            Professional Experience
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Experience Timeline - Git Commit Style */}
        <motion.div
          className="relative space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative md:ml-16"
              variants={staggerItemVariants}
            >
              {/* Commit Node */}
              <div className="absolute -left-10 top-6 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-accent-primary border-4 border-background" />
              </div>

              {/* Commit Card */}
              <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
                {/* Commit Message (Git Style) */}
                <div className="font-mono text-sm text-code-green mb-4">
                  <span className="text-code-purple">commit</span>{" "}
                  <span className="text-code-orange">
                    {`${index}a7f3c9d`}
                  </span>
                  <br />
                  <span className="text-code-blue">feat:</span> {experience.position} @{" "}
                  {experience.company}
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-panel border border-border rounded text-xs font-mono">
                    <FaCalendarAlt className="text-accent-primary" />
                    <span className="text-text-secondary">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-panel border border-border rounded text-xs font-mono">
                    <FaMapMarkerAlt className="text-accent-primary" />
                    <span className="text-text-secondary">{experience.location}</span>
                  </div>
                  {index === 0 && (
                    <div className="px-3 py-1 bg-code-green/10 text-code-green border border-code-green/20 rounded text-xs font-mono">
                      HEAD → main
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Technologies - Diff Style */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-code-blue">
                    modified: technologies[]
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono bg-panel border border-border rounded text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                      >
                        + {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 font-mono text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-code-purple">//</span> {experiences.length} commits total
        </motion.div>
      </div>
    </section>
  );
}
