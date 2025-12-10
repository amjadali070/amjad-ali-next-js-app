"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import {
  HiX,
  HiCalendar,
  HiCode,
  HiExclamationCircle,
  HiLightningBolt,
  HiStar,
  HiUsers,
  HiChartBar,
  HiShieldCheck,
  HiTerminal,
} from "react-icons/hi";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  duration: string;
  role: string;
  team: string;
  client: string;
  associatedWith?: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  achievements: string[];
  tags: string[];
  link?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window Container - Code Editor Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-surface/95 backdrop-blur-xl rounded-xl border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-background/50 border-b border-primary/10">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface rounded-t-md text-xs font-mono text-text/60 border-t border-x border-primary/10">
                <HiCode className="text-primary" />
                <span>{project.id}.tsx</span>
                <HiX
                  className="cursor-pointer hover:text-red-400"
                  onClick={onClose}
                />
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-text/40">
               <span>utf-8</span>
               <span>typescript</span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6 md:p-10">
              {/* Hero Section */}
              <div className="space-y-6 mb-12">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-mono text-sm">const</span>
                    <span className="text-yellow-600 dark:text-yellow-400 font-mono text-sm">Project</span>
                    <span className="text-text/60 font-mono text-sm">=</span>
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm">async</span>
                    <span className="text-text/60 font-mono text-sm">() ={">"}</span>
                    <span className="text-text/60 font-mono text-sm">&#123;</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-mono">
                    &lt;{project.title} /&gt;
                  </h1>

                  <div className="flex flex-col gap-2">
                    <p className="text-xl text-secondary font-semibold">
                      // {project.subtitle}
                    </p>
                    {project.associatedWith && (
                      <p className="text-sm text-text/60 font-mono">
                        // Associated with: <span className="text-primary">{project.associatedWith}</span>
                      </p>
                    )}
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-text/80 leading-relaxed font-mono text-sm">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface/50 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <HiCalendar size={18} />
                        <span className="font-mono text-xs uppercase tracking-wider">
                          Duration
                        </span>
                      </div>
                      <p className="text-text/90 font-mono text-sm">{project.duration}</p>
                    </div>

                    <div className="bg-surface/50 rounded-lg p-4 border border-secondary/20">
                      <div className="flex items-center gap-2 mb-2 text-secondary">
                        <HiUsers size={18} />
                        <span className="font-mono text-xs uppercase tracking-wider">
                          Team
                        </span>
                      </div>
                      <p className="text-text/90 font-mono text-sm">{project.team}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 rounded-full text-xs font-mono text-primary border border-primary/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Technologies */}
                <div className="bg-surface/30 rounded-xl p-5 border border-white/5 hover:border-primary/20 transition-colors">
                  <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2 font-mono">
                    <HiTerminal className="text-primary" />
                    Dependencies
                  </h2>
                  <div className="space-y-2">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm font-mono text-text/70"
                      >
                        <span className="text-primary">import</span>
                        <span className="text-text/90">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-surface/30 rounded-xl p-5 border border-white/5 hover:border-secondary/20 transition-colors">
                  <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2 font-mono">
                    <HiLightningBolt className="text-secondary" />
                    Features
                  </h2>
                  <div className="space-y-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-secondary mt-1">✓</span>
                        <span className="text-text/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-surface/30 rounded-xl p-5 border border-white/5 hover:border-green-400/20 transition-colors">
                  <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2 font-mono">
                    <HiChartBar className="text-green-400" />
                    Metrics
                  </h2>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-400 mt-1">↑</span>
                        <span className="text-text/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-2 font-mono">
                  <span className="text-orange-400">catch</span>(error)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-5 bg-surface/30 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <HiExclamationCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h3 className="text-orange-400 font-mono text-sm mb-2 opacity-80">
                            issue_{index + 1}
                          </h3>
                          <p className="text-text/80 text-sm leading-relaxed">{challenge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="p-6 bg-red-500/5 rounded-xl border border-red-500/20 flex items-start gap-4">
                <HiShieldCheck className="text-red-400 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-red-400 font-mono font-bold mb-2 text-sm uppercase tracking-wider">
                    Restricted Access
                  </h3>
                  <p className="text-text/70 text-sm font-mono">
                    /* This repository is private. Source code is protected by NDA. */
                  </p>
                </div>
              </div>

              {/* Closing Bracket */}
              <div className="mt-8 text-text/60 font-mono text-sm">
                &#125;<span className="text-primary">;</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
