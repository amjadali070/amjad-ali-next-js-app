"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload, HiCode, HiLightningBolt, HiTrendingUp } from "react-icons/hi";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface AboutMeProps {
  heading: string;
  subheading: string;
  content: string;
  buttonLabel: string;
  onDownloadCV?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  heading,
  subheading,
  content,
  buttonLabel,
  onDownloadCV,
}) => {
  const highlights = [
    {
      icon: <HiCode />,
      title: "clean_code",
      description: "Writing maintainable and scalable solutions",
      color: "text-code-purple",
    },
    {
      icon: <HiLightningBolt />,
      title: "continuous_learning",
      description: "Always exploring new technologies",
      color: "text-accent-primary",
    },
    {
      icon: <HiTrendingUp />,
      title: "growth_mindset",
      description: "Focused on delivering value",
      color: "text-code-green",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Terminal Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">function</span>{" "}
            <span className="text-accent-primary">AboutMe</span>
            <span className="text-text-secondary">() {"{"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            {heading}
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            {subheading}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Bio (Terminal Style) */}
          <motion.div
            className="space-y-6"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            <div className="p-6 bg-surface border border-border rounded-lg">
              <div className="font-mono text-sm text-code-blue mb-4">
                bio: {"{"}
              </div>
              <div className="pl-4 space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  {content}
                </p>
              </div>
              <div className="font-mono text-sm text-code-blue mt-4">
                {"}"}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface border border-border rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-xs font-mono text-text-muted mt-1">
                  projects_completed
                </div>
              </div>
              <div className="p-4 bg-surface border border-border rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-xs font-mono text-text-muted mt-1">
                  years_experience
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.button
              onClick={onDownloadCV}
              className="w-full px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiDownload className="text-lg" />
              <span className="font-mono">{buttonLabel}</span>
            </motion.button>
          </motion.div>

          {/* Right - Core Values */}
          <motion.div
            className="space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="p-6 bg-surface border border-border rounded-lg">
              <div className="font-mono text-sm text-code-blue mb-2">
                core_values: [
              </div>
            </div>

            {/* Values Cards */}
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-6 bg-surface border border-border rounded-lg hover:border-accent-primary/50 transition-all duration-300"
                variants={staggerItemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl ${highlight.color}`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-sm text-accent-primary mb-2">
                      {highlight.title}
                    </div>
                    <p className="text-text-secondary text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Footer */}
            <div className="p-6 bg-surface border border-border rounded-lg">
              <div className="font-mono text-sm text-code-blue">]</div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-code-green rounded-full animate-pulse" />
                <span className="text-sm text-code-green font-mono">
                  status: "always_growing"
                </span>
              </div>
            </div>
          </motion.div>
        </div>

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
};

export default AboutMe;
