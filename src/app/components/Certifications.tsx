"use client";

import React from "react";
import { FaAward, FaCalendarAlt, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
}

interface CertificationsProps {
  heading?: string;
  certifications?: Certification[];
}

const defaultCertifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CSA-2023",
    credentialUrl: "https://aws.amazon.com/certification/",
    description: "Professional certification demonstrating expertise in designing distributed systems and applications on AWS platform. Covers cloud architecture, security, scalability, and cost optimization.",
    skills: ["AWS", "Cloud Architecture", "Distributed Systems", "Security", "Scalability", "Cost Optimization"]
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2023",
    credentialId: "CS50x-2023",
    credentialUrl: "https://cs50.harvard.edu/x/",
    description: "Comprehensive introduction to computer science and programming. Covers algorithms, data structures, software engineering principles, and multiple programming languages including C, Python, SQL, and JavaScript.",
    skills: ["Computer Science", "Algorithms", "Data Structures", "C", "Python", "SQL", "JavaScript"]
  },
  {
    title: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    date: "2022",
    credentialId: "CSM-SA-2022",
    credentialUrl: "https://www.scrumalliance.org/",
    description: "Professional certification in Agile project management and Scrum methodology. Demonstrates proficiency in leading cross-functional teams and implementing Agile practices.",
    skills: ["Scrum", "Agile", "Project Management", "Team Leadership", "Sprint Planning", "Retrospectives"]
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-JSADS-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description: "Advanced JavaScript certification covering ES6+, functional programming, object-oriented programming, and comprehensive study of algorithms and data structures.",
    skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Functional Programming", "OOP"]
  },
  {
    title: "Frontend Web Development",
    issuer: "freeCodeCamp",
    date: "2022", 
    credentialId: "FCC-FWD-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description: "Comprehensive frontend development certification covering responsive web design, modern CSS techniques, and interactive user interfaces using modern frameworks and libraries.",
    skills: ["HTML5", "CSS3", "Responsive Design", "JavaScript", "React", "Bootstrap"]
  },
  {
    title: "Backend Development and APIs",
    issuer: "freeCodeCamp", 
    date: "2022",
    credentialId: "FCC-BDA-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description: "Backend development certification focusing on server-side programming, API design, database integration, and building scalable web services using Node.js and Express.",
    skills: ["Node.js", "Express.js", "APIs", "MongoDB", "Authentication", "Server Architecture"]
  },
  {
    title: "Full Stack Developer Certification",
    issuer: "Coursera",
    date: "2021",
    credentialId: "COURSERA-FSD-2021",
    credentialUrl: "https://www.coursera.org/",
    description: "Comprehensive full-stack development program covering modern web technologies, database management, and deployment strategies for scalable applications.",
    skills: ["Full Stack Development", "Web Technologies", "Database Management", "Deployment", "Scalable Applications"]
  },
  {
    title: "Speed Programming Competition Winner",
    issuer: "Sukkur IBA University",
    date: "2020",
    credentialId: "SIBAU-SPC-2020",
    credentialUrl: "https://iba-suk.edu.pk/",
    description: "First place winner in university-wide speed programming competition. Demonstrated exceptional problem-solving skills and coding efficiency under time constraints.",
    skills: ["Competitive Programming", "Problem Solving", "Algorithms", "Time Management", "Coding Efficiency"]
  }
];

export default function Certifications({ 
  certifications = defaultCertifications 
}: CertificationsProps) {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <FaAward className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Professional Credentials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">
              Certifications &
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 smooth-transition hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <FaCertificate className="text-white text-xl" />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 smooth-transition opacity-0 group-hover:opacity-100"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text smooth-transition">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 mb-3">
                <FaAward className="text-cyan-400 text-sm" />
                <span className="text-slate-300 font-medium">{cert.issuer}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-4">
                <FaCalendarAlt className="text-cyan-400 text-sm" />
                <span className="text-slate-300 text-sm">{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-4 p-3 glass rounded-lg border border-purple-500/20">
                  <span className="text-xs text-slate-400">Credential ID:</span>
                  <p className="text-sm font-mono text-slate-300 break-all">
                    {cert.credentialId}
                  </p>
                </div>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 glass rounded-md text-xs text-slate-300 border border-purple-500/20 smooth-transition hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I&apos;m constantly updating my skills and earning new certifications to stay current with the latest technologies and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/20">
                Currently pursuing: Advanced DevOps Certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
