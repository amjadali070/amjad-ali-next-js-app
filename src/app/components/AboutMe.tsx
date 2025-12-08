"use client";

import React from "react";
import {
  HiSparkles,
  HiLightningBolt,
  HiDownload,
  HiCode,
  HiAcademicCap,
  HiTrendingUp,
} from "react-icons/hi";

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
      icon: <HiCode className="text-[#1A3D64]" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: <HiAcademicCap className="text-[#1D546C]" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies",
    },
    {
      icon: <HiTrendingUp className="text-green-400" />,
      title: "Growth Mindset",
      description: "Focused on delivering value and improving processes",
    },
  ];

  return (
    <section id="about" className="relative pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0C2B4E]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D546C]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1D546C]/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
            <HiSparkles className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Get to Know Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="block text-white mb-2">
              {heading.split(" ")[0]}
            </span>
            <span className="bg-gradient-to-r from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent">
              {heading.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-2">
            <HiLightningBolt className="text-yellow-400 text-xl" />
            <p className="text-[#1A3D64] text-lg font-semibold">
              {subheading}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Content Section - Left Side */}
          <div className="glass rounded-3xl p-8 border border-[#0C2B4E]/10 h-full flex flex-col">
            <div className="flex-1 space-y-6">
              {/* Main Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  About <span className="bg-gradient-to-r from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent">Me</span>
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  {content}
                </p>
                
                {/* Decorative gradient line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0C2B4E]/30 to-transparent"></div>
                
                {/* Additional content section
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-xl flex items-center space-x-2">
                    <HiCode className="text-[#1A3D64]" />
                    <span>My Passion</span>
                  </h4>
                  <p className="text-slate-400 text-base leading-relaxed text-justify">
                    I thrive on solving complex problems and creating digital experiences that make a 
                    meaningful impact. Every project is an opportunity to push boundaries and deliver 
                    exceptional results that exceed expectations.
                  </p>
                </div> */}

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-[#0C2B4E]/10 to-transparent rounded-xl border border-[#0C2B4E]/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-slate-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#1D546C]/10 to-transparent rounded-xl border border-[#1D546C]/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent">
                      2+
                    </div>
                    <div className="text-slate-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-auto">
              <button
                onClick={onDownloadCV}
                className="group relative overflow-hidden w-full px-8 py-4 bg-gradient-to-r 
                  from-[#0C2B4E] to-[#1D546C] rounded-2xl text-white font-semibold 
                  shadow-xl shadow-[#0C2B4E]/25 hover:shadow-[#0C2B4E]/40 
                  smooth-transition transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <HiDownload className="text-lg group-hover:animate-bounce" />
                  <span>{buttonLabel}</span>
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0C2B4E] to-[#1D546C] 
                  opacity-0 group-hover:opacity-100 smooth-transition"
                ></div>
              </button>
            </div>
          </div>

          {/* Highlights Section - Right Side */}
          <div className="glass rounded-3xl p-8 border border-[#0C2B4E]/10 h-full flex flex-col">
            {/* Highlights Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Core <span className="bg-gradient-to-r from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent">Values</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0C2B4E] to-[#1D546C] rounded-full"></div>
            </div>

            {/* Highlights Cards */}
            <div className="flex-1 space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0C2B4E]/5 to-[#1D546C]/5 
                    rounded-2xl p-6 hover:from-[#0C2B4E]/10 hover:to-[#1D546C]/10 
                    smooth-transition transform hover:scale-105 border border-[#0C2B4E]/20
                    hover:border-[#1A3D64]/30"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon container */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0C2B4E]/20 to-[#1D546C]/20 
                      rounded-xl flex items-center justify-center group-hover:scale-110 smooth-transition
                      border border-[#0C2B4E]/30">
                      <div className="text-2xl">
                        {highlight.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h4
                        className="text-white font-semibold text-lg group-hover:text-transparent 
                        group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                        group-hover:from-[#1A3D64] group-hover:to-[#1D546C] smooth-transition"
                      >
                        {highlight.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 smooth-transition">
                        {highlight.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative floating elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#1A3D64]/40 rounded-full opacity-60 group-hover:opacity-100 smooth-transition"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#1D546C]/40 rounded-full opacity-60 group-hover:opacity-100 smooth-transition"></div>
                </div>
              ))}
            </div>

            {/* Achievement Badge */}
            <div className="mt-8 text-center p-6 bg-gradient-to-br from-[#0C2B4E]/10 to-[#1D546C]/10 
              rounded-2xl border border-[#0C2B4E]/20">
              <div className="inline-flex items-center space-x-2 text-[#1A3D64] mb-2">
                <HiTrendingUp className="text-[#1D546C]" />
                <span className="font-semibold">Always Growing</span>
              </div>
              <p className="text-slate-400 text-sm">
                Committed to continuous improvement and delivering excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
