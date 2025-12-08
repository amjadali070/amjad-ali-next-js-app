"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import {
  containerVariants,
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  buttonPressVariants,
} from "../utils/motionVariants";

interface Stat {
  label: string;
  value: string;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
}

interface HomeNavProps {
  name: string;
  greeting: string;
  role: string;
  profileImage: StaticImageData | string;
  stats: Stat[];
  socialLinks: SocialLinks;
  onHireMe?: () => void;
  onDownloadResume?: () => void;
}

const HomeNav: React.FC<HomeNavProps> = ({
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-code-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - API Response Style */}
          <motion.div className="space-y-8" variants={fadeInLeftVariants}>
            {/* Function-style greeting */}
            <div className="inline-block">
              <code className="text-sm font-mono text-text-secondary">
                <span className="text-code-purple">const</span>{" "}
                <span className="text-accent-primary">developer</span> ={" "}
                <span className="text-code-orange">{"{"}</span>
              </code>
            </div>

            {/* API-style intro */}
            <div className="space-y-4 pl-6 border-l-2 border-accent-primary/30">
              <div className="font-mono text-sm space-y-2">
                <div>
                  <span className="text-code-blue">"name"</span>
                  <span className="text-text-secondary">: </span>
                  <span className="text-code-green">"{name}"</span>
                  <span className="text-text-secondary">,</span>
                </div>
                <div>
                  <span className="text-code-blue">"role"</span>
                  <span className="text-text-secondary">: </span>
                  <span className="text-code-green">"{role}"</span>
                  <span className="text-text-secondary">,</span>
                </div>
                <div>
                  <span className="text-code-blue">"currently_building"</span>
                  <span className="text-text-secondary">: </span>
                  <span className="text-code-green">
                    "Modern interfaces & scalable systems"
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-block">
              <code className="text-sm font-mono text-code-orange">{"}"}</code>
            </div>

            {/* Large Name Display */}
            <div className="pt-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-text-primary mb-2">
                  {name.split(" ")[0]}
                </span>
                <span className="block gradient-text">
                  {name.split(" ")[1]}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Building innovative digital solutions with modern technologies.
              Passionate about creating scalable systems and exceptional user
              experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={onHireMe}
                className="group relative px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg overflow-hidden"
                variants={buttonPressVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaEnvelope />
                  <span>Get in Touch</span>
                </span>
                <div className="absolute inset-0 bg-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={onDownloadResume}
                className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-lg hover:border-accent-primary/50 transition-all duration-300"
                variants={buttonPressVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="flex items-center gap-2">
                  <FaDownload />
                  <span>Download CV</span>
                </span>
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.github && (
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              )}

              {socialLinks.linkedin && (
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeInRightVariants}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-code-green/20 rounded-full blur-2xl" />

              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-card">
                  <Image
                    src={profileImage}
                    alt={`${name} Profile`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Decorative Code Elements */}
                <div className="absolute -top-4 -right-4 px-3 py-2 bg-surface border border-border rounded-lg font-mono text-xs text-code-green">
                  <span className="text-code-purple">const</span> status ={" "}
                  <span className="text-code-green">"available"</span>
                </div>

                <div className="absolute -bottom-4 -left-4 px-3 py-2 bg-surface border border-border rounded-lg font-mono text-xs text-accent-primary">
                  <span className="text-code-purple">{"{ "}</span>
                  <span className="text-code-blue">ready</span>
                  <span className="text-code-purple">{" }"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeNav;
