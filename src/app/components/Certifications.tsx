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
  // July 2023
  {
    title: "Build a Twitter Clone Front-End with ReactJS",
    issuer: "Coursera",
    date: "Jul 2023",
    credentialId: "THVJDLKCAVH6",
    credentialUrl: "https://coursera.org/verify/THVJDLKCAVH6",
    description: "Built a Twitter-like front-end using ReactJS, SASS, and REST APIs, focusing on responsive design and modern web technologies.",
    skills: [
      "GitHub", "SASS", "AWS", "CSS", "Version Control", "Git", "HTML5", "REST APIs", "Web Technologies"
    ],
  },
  {
    title: "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
    issuer: "LinkedIn",
    date: "Jul 2023",
    credentialUrl: "https://www.linkedin.com/learning/certificates/",
    description: "Comprehensive course on full-stack JavaScript development using MongoDB, Node.js, and React.",
    skills: [
      "GitHub", "SASS", "AWS", "JavaScript", "CSS", "Full-Stack Development", "MongoDB", "Version Control", "Git", "HTML5", "React.js", "Node.js", "REST APIs", "Web Technologies"
    ],
  },
  
  // June 2023
  {
    title: "Connecting to a MongoDB Database",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB6rcj7kqx6f",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB6rcj7kqx6f",
    description: "Learned to connect and interact with MongoDB databases for modern web applications.",
    skills: ["GitHub", "REST APIs", "Web Technologies"],
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB5j5kr5ffez",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB5j5kr5ffez",
    description: "Introduction to MongoDB fundamentals, document model, and CRUD operations.",
    skills: ["REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Aggregation",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBtrupbrqmyf",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBtrupbrqmyf",
    description: "Mastered aggregation pipelines for advanced data processing in MongoDB.",
    skills: ["REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Atlas Search",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBz2so80wyug",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBz2so80wyug",
    description: "Implemented full-text search capabilities using MongoDB Atlas Search.",
    skills: ["MongoDB", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB CRUD Operations: Insert and Find Documents",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB8rqivqxcac",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB8rqivqxcac",
    description: "Learned to insert and query documents efficiently in MongoDB.",
    skills: ["MongoDB", "Back-End Web Development", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB CRUD Operations: Modifying Query Results",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBo4ewagduro",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBo4ewagduro",
    description: "Mastered modifying and updating query results in MongoDB.",
    skills: ["MongoDB", "Web Technologies"],
  },
  {
    title: "MongoDB CRUD Operations: Replace and Delete Documents",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB9hosetb4xm",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB9hosetb4xm",
    description: "Learned to replace and delete documents in MongoDB collections.",
    skills: ["MongoDB", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Data Modeling Intro",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB4p2hokswb2",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB4p2hokswb2",
    description: "Introduction to data modeling concepts and best practices in MongoDB.",
    skills: ["MongoDB", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Indexes",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB9z2b0qt9uf",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB9z2b0qt9uf",
    description: "Learned to create and manage indexes for performance optimization in MongoDB.",
    skills: ["MongoDB", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Transactions",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBzu0tam4cc9",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBzu0tam4cc9",
    description: "Mastered multi-document transactions in MongoDB for data consistency.",
    skills: ["MongoDB", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB and the Document Model",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBd8dd9ozggr",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBd8dd9ozggr",
    description: "Explored MongoDB's document model and its advantages for modern applications.",
    skills: ["REST APIs", "Web Technologies"],
  },
  
  // March 2023
  {
    title: "Angular (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "ce9a1fbb806f",
    credentialUrl: "https://www.hackerrank.com/certificates/ce9a1fbb806f",
    description: "Demonstrated foundational knowledge of Angular and modern web development.",
    skills: ["GitHub", "AWS", "Git", "AngularJS", "REST APIs", "Web Technologies"],
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "399d7c40812b",
    credentialUrl: "https://www.hackerrank.com/certificates/399d7c40812b",
    description: "Certified in basic problem-solving and algorithmic thinking.",
    skills: ["GitHub", "Git", "REST APIs", "Web Technologies"],
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "2832fd9d6c55",
    credentialUrl: "https://www.hackerrank.com/certificates/2832fd9d6c55",
    description: "Demonstrated foundational knowledge of React.js and component-based development.",
    skills: ["GitHub", "AWS", "Git", "HTML5", "React.js", "REST APIs", "Web Technologies"],
  },
  
  // February 2023
  {
    title: "Introduction to Front-end Development with ReactJS",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "USAW78LSYV5C",
    credentialUrl: "https://coursera.org/verify/USAW78LSYV5C",
    description: "Introduction to front-end development using ReactJS, SASS, and modern web technologies.",
    skills: [
      "GitHub", "SASS", "AWS", "JavaScript", "CSS", "Version Control", "Git", "HTML5", "React.js", "Node.js", "REST APIs", "Web Technologies"
    ],
  },
  {
    title: "Node.js Backend Basics with Best Practices",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "BF44X7AFBV4R",
    credentialUrl: "https://coursera.org/verify/BF44X7AFBV4R",
    description: "Learned Node.js backend fundamentals and best practices for scalable server-side development.",
    skills: [
      "GitHub", "SASS", "AWS", "CSS", "Version Control", "Git", "HTML5", "Node.js", "REST APIs", "Web Technologies"
    ],
  },
  {
    title: "Typescript in React: Get started",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "6T4NNEAA28EW",
    credentialUrl: "https://coursera.org/verify/6T4NNEAA28EW",
    description: "Introduction to using TypeScript in React applications for type-safe development.",
    skills: [
      "TypeScript", "GitHub", "SASS", "AWS", "Version Control", "Git", "HTML5", "React.js", "REST APIs", "Web Technologies"
    ],
  },
  
  // 2022
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
