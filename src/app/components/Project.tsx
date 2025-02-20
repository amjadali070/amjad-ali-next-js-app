"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00DBFD] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#00a3c4] transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
