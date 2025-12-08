"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const navLinks = [
  { label: "home", path: "/#home" },
  { label: "about", path: "/#about" },
  { label: "services", path: "/#services" },
  { label: "skills", path: "/#skills" },
  { label: "experience", path: "/#experience" },
  { label: "education", path: "/#education" },
  { label: "projects", path: "/#projects" },
  { label: "certifications", path: "/#certifications" },
  { label: "articles", path: "/#articles" },
  { label: "testimonials", path: "/#testimonials" },
  { label: "contact", path: "/#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/amjadali070",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/amjadali070/",
    label: "LinkedIn",
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "email",
    value: "amjadpitafi070@gmail.com",
    href: "mailto:amjadpitafi070@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "phone",
    value: "+92 3033663070",
    href: "tel:+923033663070",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "location",
    value: "Pakistan",
    href: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Console Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple mb-4">
            <span className="text-code-purple">const</span>{" "}
            <span className="text-accent-primary">footer</span> ={" "}
            <span className="text-code-orange">{"{"}</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                <HiCode className="text-background text-xl" />
              </div>
              <div className="font-mono text-xl font-bold">
                <span className="text-code-purple">const</span>{" "}
                <span className="gradient-text">AMJAD</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed">
              Full Stack Software Engineer passionate about creating innovative
              solutions and beautiful user experiences with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 bg-panel border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="font-mono text-sm text-code-blue">
              quick_links: [
            </div>
            <nav className="grid grid-cols-2 gap-2 pl-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className="font-mono text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  "{link.label}",
                </Link>
              ))}
            </nav>
            <div className="font-mono text-sm text-code-blue">]</div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="font-mono text-sm text-code-blue">
              contact: {"{"}
            </div>
            <div className="space-y-3 pl-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-accent-primary">{info.icon}</span>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-code-blue">
                      {info.label}:
                    </div>
                    <div className="text-sm text-text-secondary group-hover:text-accent-primary transition-colors duration-300">
                      "{info.value}"
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="font-mono text-sm text-code-blue">{"}"}</div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-mono text-sm text-text-muted">
            <span className="text-code-purple">//</span> © 2025 Amjad Ali. All
            rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="font-mono">Built with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span className="font-mono">
              and <span className="text-accent-primary">Next.js</span>
            </span>
          </div>
        </motion.div>

        {/* Console Footer */}
        <motion.div
          className="mt-8 font-mono text-sm text-code-orange"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {"}"}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
