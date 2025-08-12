"use client";

import React from "react";
import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaHeart 
} from "react-icons/fa";
import { 
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineCollection,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineNewspaper,
  HiOutlineChatAlt2,
  HiOutlineBookOpen
} from "react-icons/hi";

const navLinks = [
  { label: "Home", path: "/#home", icon: <HiOutlineHome /> },
  { label: "About Me", path: "/#about", icon: <HiOutlineUser /> },
  { label: "Services", path: "/#services", icon: <HiOutlineCog /> },
  { label: "Skills", path: "/#skills", icon: <HiOutlineLightBulb /> },
  { label: "Experience", path: "/#experience", icon: <HiOutlineBriefcase /> },
  { label: "Education", path: "/#education", icon: <HiOutlineBookOpen /> },
  { label: "Projects", path: "/#projects", icon: <HiOutlineCollection /> },
  { label: "Certifications", path: "/#certifications", icon: <HiOutlineAcademicCap /> },
  { label: "Articles", path: "/#articles", icon: <HiOutlineNewspaper /> },
  { label: "Testimonials", path: "/#testimonials", icon: <HiOutlineChatAlt2 /> },
  { label: "Contact", path: "/#contact", icon: <HiOutlineMail /> },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/amjadali070/",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/amjadali070",
    label: "GitHub", 
    color: "hover:text-gray-300"
  },
];

const email = "amjadpitafi070@gmail.com";
const phone = "+92 3033663070";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AMJAD ALI
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Full Stack Software Engineer passionate about creating innovative solutions 
                and beautiful user experiences with modern technologies.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`group p-3 rounded-xl glass smooth-transition ${link.color} 
                    transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25`}
                >
                  <span className="text-xl group-hover:animate-pulse">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-300">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className="group flex items-center space-x-3 p-3 rounded-lg glass smooth-transition
                    hover:bg-white/10 hover:transform hover:translate-x-2"
                >
                  <span className="text-purple-400 group-hover:text-cyan-400 smooth-transition">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium group-hover:text-white smooth-transition">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-300">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg glass">
                <FaEnvelope className="text-purple-400 text-lg" />
                <a 
                  href={`mailto:${email}`} 
                  className="text-slate-300 hover:text-white smooth-transition text-sm"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg glass">
                <FaPhone className="text-purple-400 text-lg" />
                <a 
                  href={`tel:${phone}`} 
                  className="text-slate-300 hover:text-white smooth-transition text-sm"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg glass">
                <FaMapMarkerAlt className="text-purple-400 text-lg" />
                <span className="text-slate-300 text-sm">Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <span>&copy; 2025 Amjad Ali. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>and Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
