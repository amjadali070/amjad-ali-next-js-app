"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaDownload,
  FaRocket,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

interface Stat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  behance?: string;
}

interface AboutMeProps {
  name: string;
  greeting: string;
  role: string;
  profileImage: StaticImageData | string;
  stats: Stat[];
  socialLinks: SocialLinks;
  onHireMe?: () => void;
  onDownloadResume?: () => void;
}

const HomeNav: React.FC<AboutMeProps> = ({
  name,
  greeting,
  role,
  profileImage,
  stats,
  socialLinks,
  onHireMe,
  onDownloadResume,
}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0C2B4E]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1D546C]/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1D546C]/5 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: "10%", top: "20%", delay: "0s", duration: "4s" },
          { left: "85%", top: "15%", delay: "0.5s", duration: "3.5s" },
          { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
          { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
          { left: "45%", top: "30%", delay: "2s", duration: "4.2s" },
          { left: "65%", top: "80%", delay: "0.3s", duration: "3.8s" },
          { left: "15%", top: "50%", delay: "1.2s", duration: "4.1s" },
          { left: "90%", top: "40%", delay: "0.8s", duration: "3.7s" },
          { left: "35%", top: "85%", delay: "1.8s", duration: "4.3s" },
          { left: "55%", top: "10%", delay: "0.2s", duration: "3.9s" },
          { left: "20%", top: "35%", delay: "2.2s", duration: "4.6s" },
          { left: "80%", top: "25%", delay: "0.7s", duration: "3.3s" },
          { left: "40%", top: "65%", delay: "1.4s", duration: "4.4s" },
          { left: "70%", top: "75%", delay: "0.9s", duration: "3.6s" },
          { left: "5%", top: "45%", delay: "1.7s", duration: "4.0s" },
          { left: "95%", top: "55%", delay: "0.4s", duration: "3.4s" },
          { left: "30%", top: "90%", delay: "2.1s", duration: "4.7s" },
          { left: "60%", top: "5%", delay: "0.6s", duration: "3.2s" },
          { left: "50%", top: "50%", delay: "1.3s", duration: "4.8s" },
          { left: "85%", top: "70%", delay: "1.9s", duration: "3.1s" },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 mt-8 glass rounded-full">
              <HiSparkles className="text-yellow-400 text-sm" />
              <span className="text-slate-300 text-sm font-medium">
                {greeting}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">{name.split(" ")[0]}</span>
                <span
                  className="block bg-gradient-to-r from-[#1A3D64] via-[#1D546C] to-[#1D546C] 
                  bg-clip-text text-transparent animate-pulse"
                >
                  {name.split(" ")[1]}
                </span>
              </h1>
            </div>

            {/* Role */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <HiLightningBolt className="text-yellow-400 text-xl" />
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-[#1A3D64] to-[#1D546C]"
                >
                  {role}
                </h2>
              </div>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Passionate about creating innovative digital solutions with
                cutting-edge technologies. Transforming ideas into powerful
                applications that make a difference.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onHireMe}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r 
                  from-[#0C2B4E] to-[#1D546C] rounded-2xl text-white font-semibold 
                  shadow-xl shadow-[#0C2B4E]/25 hover:shadow-[#0C2B4E]/40 
                  smooth-transition transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaRocket className="text-lg" />
                  <span>Hire Me</span>
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0C2B4E] to-[#1D546C] 
                  opacity-0 group-hover:opacity-100 smooth-transition"
                ></div>
              </button>

              <button
                onClick={onDownloadResume}
                className="group px-8 py-4 glass rounded-2xl text-white font-semibold 
                  border border-[#0C2B4E]/30 hover:border-[#1A3D64]/50 
                  smooth-transition transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <FaDownload className="text-lg group-hover:animate-bounce" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl text-slate-400 hover:text-white 
                    smooth-transition transform hover:scale-110 hover:shadow-lg hover:shadow-[#0C2B4E]/25"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl group-hover:animate-pulse" />
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl text-slate-400 hover:text-blue-400 
                    smooth-transition transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl group-hover:animate-pulse" />
                </a>
              )}

              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl text-slate-400 hover:text-[#1D546C] 
                    smooth-transition transform hover:scale-110 hover:shadow-lg hover:shadow-[#1D546C]/25"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl group-hover:animate-pulse" />
                </a>
              )}

              {socialLinks.behance && (
                <a
                  href={socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-2xl text-slate-400 hover:text-[#1A3D64] 
                    smooth-transition transform hover:scale-110 hover:shadow-lg hover:shadow-[#0C2B4E]/25"
                  aria-label="Behance"
                >
                  <FaBehance className="text-xl group-hover:animate-pulse" />
                </a>
              )}
            </div>

            {/* Enhanced Stats Section */}
            <div className="pt-12">
              {/* Stats Header */}
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-lg font-semibold text-slate-300 mb-2">
                  Professional Journey
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#0C2B4E] to-[#1D546C] mx-auto lg:mx-0"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative text-center p-4 md:p-6 glass rounded-2xl hover:bg-white/10 smooth-transition group transform hover:scale-105"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C2B4E]/5 to-[#1D546C]/5 rounded-2xl opacity-0 group-hover:opacity-100 smooth-transition"></div>
                    
                    {/* Icon Background */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-[#0C2B4E]/10 to-[#1D546C]/10 rounded-lg flex items-center justify-center opacity-50">
                      {stat.icon && (
                        <div className="text-[#1A3D64] text-sm">{stat.icon}</div>
                      )}
                    </div>

                    <div className="relative space-y-2">
                      {/* Stat Value */}
                      <div className="space-y-1">
                        <div
                          className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r 
                          from-[#1A3D64] to-[#1D546C] bg-clip-text text-transparent"
                        >
                          {stat.value}
                        </div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#1A3D64]/50 to-[#1D546C]/50 mx-auto rounded-full opacity-60 group-hover:opacity-100 smooth-transition"></div>
                      </div>

                      {/* Stat Label */}
                      <div className="text-slate-400 text-[10px] md:text-xs font-medium group-hover:text-slate-300 smooth-transition whitespace-nowrap">
                        {stat.label}
                      </div>

                      {/* Floating Dots */}
                      <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#1A3D64]/30 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-[#1D546C]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#0C2B4E]/30 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                  </div>
                ))}
              </div>

              {/* Additional Stats Info */}
              <div className="mt-8 text-center lg:text-left">
                <p className="text-slate-500 text-sm italic">
                  Building digital excellence through innovative solutions
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <div
                  className="w-full h-full bg-gradient-to-r from-[#0C2B4E]/20 to-[#1D546C]/20 
                  rounded-full blur-2xl animate-pulse"
                ></div>
              </div>

              {/* Code Icons Floating Around */}
              <div className="absolute -top-8 -left-8 p-3 glass rounded-2xl float-animation">
                <FaCode className="text-[#1A3D64] text-xl" />
              </div>
              <div className="absolute -top-4 -right-12 p-3 glass rounded-2xl float-animation delay-1000">
                <FaLaptopCode className="text-[#1D546C] text-xl" />
              </div>
              <div className="absolute -bottom-8 -left-4 p-3 glass rounded-2xl float-animation delay-500">
                <HiSparkles className="text-yellow-400 text-xl" />
              </div>

              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0C2B4E] to-[#1D546C] 
                  rounded-full opacity-20 animate-ping"
                ></div>
                <div
                  className="relative w-full h-full rounded-full border-4 border-gradient-to-r 
                  from-[#1A3D64] to-[#1D546C] overflow-hidden glass shadow-2xl 
                  shadow-[#0C2B4E]/25 hover:shadow-[#0C2B4E]/40 smooth-transition 
                  transform hover:scale-105"
                >
                  <Image
                    src={profileImage}
                    alt={`${name} Profile`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNav;
