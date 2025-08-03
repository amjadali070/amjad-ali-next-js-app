"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  HiSparkles,
  HiLightningBolt,
  HiDownload,
  HiCode,
  HiAcademicCap,
  HiHeart,
  HiTrendingUp,
} from "react-icons/hi";

interface AboutMeProps {
  heading: string;
  subheading: string;
  content: string;
  image: StaticImageData | string;
  buttonLabel: string;
  onDownloadCV?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  heading,
  subheading,
  content,
  image,
  buttonLabel,
  onDownloadCV,
}) => {
  const highlights = [
    {
      icon: <HiCode className="text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: <HiAcademicCap className="text-cyan-400" />,
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
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-8">
                <div
                  className="w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
                  rounded-3xl blur-2xl"
                ></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -left-6 p-4 glass rounded-2xl float-animation">
                <HiCode className="text-purple-400 text-2xl" />
              </div>
              <div className="absolute -top-4 -right-8 p-4 glass rounded-2xl float-animation delay-1000">
                <HiSparkles className="text-yellow-400 text-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-2xl float-animation delay-500">
                <HiHeart className="text-red-400 text-2xl" />
              </div>

              {/* Main Image */}
              <div
                className="relative rounded-3xl overflow-hidden glass shadow-2xl 
                shadow-purple-500/20 transform hover:scale-105 smooth-transition"
              >
                <Image
                  src={image}
                  alt="About Me Profile"
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
                <HiSparkles className="text-yellow-400 text-sm" />
                <span className="text-slate-300 text-sm font-medium">
                  Get to Know Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="block text-white mb-2">
                  {heading.split(" ")[0]}
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {heading.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <div className="flex items-center space-x-2">
                <HiLightningBolt className="text-yellow-400 text-xl" />
                <p className="text-purple-300 text-lg font-semibold">
                  {subheading}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                {content}
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 glass rounded-2xl 
                    hover:bg-white/10 smooth-transition group"
                  >
                    <div className="flex-shrink-0 text-2xl group-hover:scale-110 smooth-transition">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4
                        className="text-white font-semibold group-hover:text-transparent 
                        group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                        group-hover:from-purple-400 group-hover:to-cyan-400 smooth-transition"
                      >
                        {highlight.title}
                      </h4>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 smooth-transition">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onDownloadCV}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r 
                  from-purple-500 to-cyan-500 rounded-2xl text-white font-semibold 
                  shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 
                  smooth-transition transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <HiDownload className="text-lg group-hover:animate-bounce" />
                  <span>{buttonLabel}</span>
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 
                  opacity-0 group-hover:opacity-100 smooth-transition"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
