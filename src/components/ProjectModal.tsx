"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { HiX, HiExternalLink } from "react-icons/hi";

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
  client?: string;
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Meelo Neo-Brutalist Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-meelo-offwhite border-2 border-black rounded-3xl shadow-brutal-lg overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b-2 border-black bg-white">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-black/60">
                {project.subtitle}
              </span>
              <h2 className="text-2xl font-black text-black">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-brutal-sm flex items-center justify-center text-black font-bold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            <div className="w-full h-64 sm:h-80 relative rounded-2xl border-2 border-black overflow-hidden shadow-brutal-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-black">Project Overview</h3>
              <p className="text-black/80 font-medium text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-meelo-cardLavender border-2 border-black">
                <span className="text-xs font-bold uppercase tracking-wider text-black/70 block">
                  Duration
                </span>
                <span className="text-sm font-black text-black">{project.duration}</span>
              </div>
              <div className="p-4 rounded-2xl bg-meelo-cardMint border-2 border-black">
                <span className="text-xs font-bold uppercase tracking-wider text-black/70 block">
                  Role
                </span>
                <span className="text-sm font-black text-black">{project.role}</span>
              </div>
              <div className="p-4 rounded-2xl bg-meelo-cardPink border-2 border-black">
                <span className="text-xs font-bold uppercase tracking-wider text-black/70 block">
                  Team
                </span>
                <span className="text-sm font-black text-black">{project.team}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black text-black">Key Deliverables</h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-black/80">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white border-2 border-black text-xs font-bold text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          {project.link && project.link !== "#" && (
            <div className="p-6 border-t-2 border-black bg-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                Live Production URL
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="meelo-btn-dark flex items-center gap-2"
              >
                <span>Visit Application</span>
                <HiExternalLink size={16} />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
