"use client";

import { motion, AnimatePresence } from "framer-motion";
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
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-surface/95 backdrop-blur-xl rounded-3xl border-2 border-primary/20 shadow-2xl"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className="sticky top-4 right-4 float-right z-10 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-primary/30 text-white hover:text-primary hover:border-primary transition-all duration-300 shadow-lg"
          >
            <HiX size={24} />
          </button>

          <div className="p-6 md:p-10">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Project Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary text-white">
                    Project Details
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h1>

                <p className="text-xl text-secondary font-semibold text-white">
                  {project.subtitle}
                </p>

                <p className="text-white/80 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-primary/30">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <HiCalendar size={18} className="text-white" />
                      <span className="font-semibold text-sm text-white">
                        Duration
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">{project.duration}</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2 text-secondary">
                      <HiUsers size={18} className="text-white" />
                      <span className="font-semibold text-sm text-white">
                        Team
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">{project.team}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-lg text-white text-xs font-mono text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden bg-background/30 backdrop-blur-sm border border-primary/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Technologies */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <HiCode className="text-primary" />
                  Technologies
                </h2>
                <div className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/10 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-white/90">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <HiLightningBolt className="text-secondary" />
                  Key Features
                </h2>
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-lg border border-secondary/10 text-sm"
                    >
                      <HiStar className="text-yellow-400 text-xs mt-1 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <HiChartBar className="text-green-400" />
                  Achievements
                </h2>
                <div className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-lg border border-green-500/10 text-sm"
                    >
                      <HiShieldCheck className="text-green-400 text-xs mt-1 flex-shrink-0" />
                      <span className="text-white/90">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenges Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HiExclamationCircle className="text-orange-400" />
                Challenges &amp; Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-orange-500/20"
                  >
                    <div className="flex items-start gap-3">
                      <HiExclamationCircle className="text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">
                          Challenge {index + 1}
                        </h3>
                        <p className="text-white/80 text-sm">{challenge}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-yellow-500/20 flex items-start gap-4">
              <HiShieldCheck className="text-yellow-400 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Client Project - Confidential
                </h3>
                <p className="text-white/70 text-sm">
                  This project contains sensitive client data. No live demo or
                  repository access is available due to confidentiality
                  agreements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
