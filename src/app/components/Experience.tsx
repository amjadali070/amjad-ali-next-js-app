"use client";

import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

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
    description: "Design, develop, and maintain secure web and backend applications using required technologies. Deliver production-ready features using test-driven development and performance optimization. Participate in code reviews, team discussions, and sprint retrospectives to enhance collaboration. Integrate APIs, third-party services, and insurance data platforms seamlessly. Support and improve lead automation, digital claims management, and underwriting tools. Ensure code quality, security, and scalability across all development tasks. Perform additional tasks and responsibilities assigned by management.",
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "APIs", "TDD", "Performance Optimization", "Security"]
  },
  {
    company: "MarTechSol",
    position: "Software Engineer", 
    duration: "Oct 2024 - Apr 2025",
    location: "Karachi, Pakistan",
    description: "Built and maintained scalable web applications using MERN, Next.js, and WordPress. Developed responsive user interfaces with React, Tailwind CSS, JavaScript, and TypeScript. Designed and integrated RESTful APIs for efficient frontend-backend communication. Optimized database queries to enhance backend performance and API response times. Implemented CI/CD pipelines and worked with cloud platforms like AWS and Azure. Collaborated with cross-functional teams to define architecture and deliver solutions. Mentored junior developers and contributed to AI-powered application development.",
    technologies: ["MERN", "Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "AWS", "Azure", "CI/CD"]
  },
  {
    company: "CharCentric",
    position: "Software Engineer",
    duration: "Aug 2023 - Aug 2024",
    location: "Remote (UAE, Abu Dhabi)",
    description: "Collaborated with cross-functional teams to analyze requirements and align on project goals. Designed, developed, and optimized software solutions for performance and integration. Maintained and enhanced existing systems by resolving issues and implementing improvements. Created technical documentation to support streamlined development and quality deliverables. Engaged with clients and teams to optimize system performance and capabilities. Contributed to key projects like RMG LMS, AI Dashboards, and Data Intelligence tools.",
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "System Integration", "Performance Optimization", "AI Dashboards", "LMS"]
  }
];

export default function Experience({ 
  experiences = defaultExperiences 
}: ExperienceProps) {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <FaBriefcase className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">
              Professional
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey and career milestones
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Professional Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/30 to-transparent hidden md:block"></div>
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-500/40 to-purple-500/20 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-16 md:ml-12">
              {/* Professional Timeline Node */}
              <div className="absolute -left-8 top-8 hidden md:block">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg">
                    {/* Inner dot */}
                    <div className="absolute inset-1 rounded-full bg-white"></div>
                  </div>
                  {/* Connection line to card */}
                  <div className="absolute top-2 left-4 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>
              </div>

              {/* Professional Experience Card */}
              <div className="relative">
                {/* Card with enhanced design */}
                <div className="glass rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 smooth-transition group shadow-xl">
                  {/* Employment status indicator */}
                  <div className="absolute -top-3 left-8">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {index === 0 ? "CURRENT" : "FORMER"}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text smooth-transition">
                        {experience.position}
                      </h3>
                      
                      {/* Company with icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                          <FaBriefcase className="text-purple-400 text-sm" />
                        </div>
                        <span className="text-lg font-semibold text-slate-200">
                          {experience.company}
                        </span>
                      </div>
                    </div>
                    
                    {/* Timeline metadata */}
                    <div className="flex flex-col lg:items-end gap-3 mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-lg">
                        <FaCalendarAlt className="text-cyan-400 text-sm" />
                        <span className="text-slate-300 text-sm font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-lg">
                        <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                        <span className="text-slate-300 text-sm font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm lg:text-base">
                    {experience.description}
                  </p>

                  {/* Professional technologies grid */}
                  <div className="space-y-3">
                    <h5 className="text-white font-semibold text-sm">Technologies & Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 border border-purple-500/20 rounded-lg text-sm text-slate-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:text-white smooth-transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
