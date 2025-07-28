"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { 
  HiSparkles, 
  HiExternalLink,
  HiCode,
  HiLightningBolt
} from "react-icons/hi";

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
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <HiSparkles className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">{heading.split(' ')[0]}</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {heading.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl overflow-hidden 
                hover:bg-white/10 smooth-transition transform hover:-translate-y-2 
                hover:shadow-2xl hover:shadow-purple-500/20"
            >
              
              {/* Project Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 smooth-transition"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent 
                  opacity-60 group-hover:opacity-80 smooth-transition"></div>
                
                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                  smooth-transition transform translate-y-2 group-hover:translate-y-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-2xl text-white hover:bg-white/20 smooth-transition"
                  >
                    <HiExternalLink className="text-lg" />
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-4">
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-transparent 
                  group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                  group-hover:from-purple-400 group-hover:to-cyan-400 smooth-transition">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 smooth-transition">
                  {project.description}
                </p>
                
                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium glass rounded-full 
                          text-slate-300 group-hover:text-white smooth-transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 
                      bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl 
                      text-white font-semibold shadow-lg shadow-purple-500/25 
                      hover:shadow-purple-500/40 smooth-transition transform hover:scale-105"
                  >
                    <HiCode className="text-lg" />
                    <span>View Project</span>
                  </Link>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent 
                group-hover:border-purple-500/30 smooth-transition"></div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 
                opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 glass rounded-2xl">
            <div className="text-2xl">
              <HiLightningBolt className="text-yellow-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-semibold">Want to See More?</h4>
              <p className="text-slate-400 text-sm">Check out my GitHub for additional projects and contributions</p>
            </div>
            <a
              href="https://github.com/amjadali070"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 
                rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25 
                hover:shadow-purple-500/40 smooth-transition transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
