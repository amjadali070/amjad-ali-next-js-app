"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

interface EducationProps {
  heading?: string;
  education?: EducationItem[];
}

const defaultEducation: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science (MSCS)",
    institution: "Mohammad Ali Jinnah University",
    duration: "September 2024 - Present",
    location: "Karachi, Pakistan",
    description:
      "Specializing in advanced software engineering, machine learning, and artificial intelligence. Conducting research on innovative AI applications and scalable system architectures with focus on cutting-edge technologies and methodologies.",
    achievements: [
      "Advanced Software Engineering",
      "Machine Learning and AI",
      "Research on Innovative AI Applications",
      "Scalable System Architectures",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Sukkur IBA University",
    duration: "August 2019 - September 2023",
    location: "Sukkur, Pakistan",
    description:
      "Graduated with distinction, with a focus on AI, ML, and data structures. Completed a capstone project on intelligent systems, recognized for innovation and performance. Built strong foundation in computer science fundamentals and practical application development.",
    achievements: [
      "Graduated with Distinction",
      "AI, ML, and Data Structures Focus",
      "Capstone Project on Intelligent Systems",
      "Innovation and Performance Recognition",
    ],
  },
];

export default function Education({ education = defaultEducation }: EducationProps) {
  return (
    <section id="education" className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Certificate Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">interface</span>{" "}
            <span className="text-accent-primary">Education</span>{" "}
            <span className="text-text-secondary">{"{"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            Academic Background
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            My academic journey in computer science and continuous learning path
          </p>
        </motion.div>

        {/* Education Cards - Certificate/Badge Style */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-lg p-8 hover:border-accent-primary/50 transition-all duration-300"
              variants={staggerItemVariants}
            >
              {/* Badge Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-panel border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-3xl text-accent-primary" />
                </div>

                <div className="flex-1">
                  {/* Status Badge */}
                  <div className="inline-block px-3 py-1 mb-2 bg-code-green/10 text-code-green border border-code-green/20 rounded text-xs font-mono">
                    {index === 0 ? "in_progress" : "completed"}
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {item.degree}
                  </h3>

                  <div className="font-mono text-sm text-code-blue">
                    {item.institution}
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-panel border border-border rounded text-xs font-mono">
                  <FaCalendarAlt className="text-accent-primary" />
                  <span className="text-text-secondary">{item.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-panel border border-border rounded text-xs font-mono">
                  <FaMapMarkerAlt className="text-accent-primary" />
                  <span className="text-text-secondary">{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Achievements - Badge Style */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-code-blue">
                    <FaAward className="text-accent-primary" />
                    <span>achievements[]</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center gap-3 p-3 bg-panel border border-border rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full flex-shrink-0" />
                        <span className="text-text-secondary text-xs">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer - Closing Brace */}
        <motion.div
          className="mt-12 font-mono text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {"}"}
        </motion.div>
      </div>
    </section>
  );
}
