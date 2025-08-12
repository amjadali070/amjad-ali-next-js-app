"use client";

import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

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
    description: "Specializing in advanced software engineering, machine learning, and artificial intelligence. Conducting research on innovative AI applications and scalable system architectures with focus on cutting-edge technologies and methodologies.",
    achievements: [
      "Advanced Software Engineering",
      "Machine Learning and AI",
      "Research on Innovative AI Applications", 
      "Scalable System Architectures"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Sukkur IBA University", 
    duration: "August 2019 - September 2023",
    location: "Sukkur, Pakistan",
    description: "Graduated with distinction, with a focus on AI, ML, and data structures. Completed a capstone project on intelligent systems, recognized for innovation and performance. Built strong foundation in computer science fundamentals and practical application development.",
    achievements: [
      "Graduated with Distinction",
      "AI, ML, and Data Structures Focus",
      "Capstone Project on Intelligent Systems",
      "Innovation and Performance Recognition"
    ]
  }
];

export default function Education({ 
  education = defaultEducation 
}: EducationProps) {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <FaGraduationCap className="text-purple-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">Academic Background</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">My</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            My academic journey in computer science and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Professional Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/30 to-transparent hidden md:block"></div>
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-500/40 to-purple-500/20 hidden md:block"></div>

          {education.map((item, index) => (
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

              {/* Professional Education Card */}
              <div className="relative">
                {/* Card with enhanced design */}
                <div className="glass rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 smooth-transition group shadow-xl">
                  {/* Academic level indicator */}
                  <div className="absolute -top-3 left-8">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {index === 0 ? "CURRENT" : "COMPLETED"}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text smooth-transition">
                        {item.degree}
                      </h3>
                      
                      {/* Institution with icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                          <FaGraduationCap className="text-purple-400 text-sm" />
                        </div>
                        <span className="text-lg font-semibold text-slate-200">
                          {item.institution}
                        </span>
                      </div>
                    </div>
                    
                    {/* Timeline metadata */}
                    <div className="flex flex-col lg:items-end gap-3 mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-lg">
                        <FaCalendarAlt className="text-cyan-400 text-sm" />
                        <span className="text-slate-300 text-sm font-medium">{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-lg">
                        <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                        <span className="text-slate-300 text-sm font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>

                  {/* Professional achievements grid */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="text-white font-semibold text-sm">Key Highlights</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 smooth-transition"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
