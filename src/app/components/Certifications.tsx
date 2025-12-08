"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

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
  // July 2024
  {
    title: "Gemini API by Google",
    issuer: "Udacity",
    date: "Jul 2024",
    credentialId: "549c0b28-45af-11ef-a35e-9b9a02ba6f0f",
    credentialUrl: "https://www.udacity.com/certificate/e/549c0b28-45af-11ef-a35e-9b9a02ba6f0f",
    description: "Verified certificate of completion for the Gemini API by Google course. Covered prompt engineering, safety, function calling, and building AI features with Google AI Studio.",
    skills: ["Gemini API", "Google AI Studio", "Prompt Engineering", "AI/ML", "REST APIs", "Node.js", "Python"],
  },

  // July 2023
  {
    title: "Build a Twitter Clone Front-End with ReactJS",
    issuer: "Coursera",
    date: "Jul 2023",
    credentialId: "THVJDLKCAVH6",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/THVJDLKCAVH6",
    description: "Built a Twitter-like front-end using ReactJS, SASS, and REST APIs, focusing on responsive design and modern web technologies.",
    skills: ["GitHub", "SASS", "AWS", "CSS", "Version Control", "Git", "HTML5", "REST APIs", "Web Technologies"],
  },
  {
    title: "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
    issuer: "LinkedIn",
    date: "Jul 2023",
    credentialUrl: "https://www.linkedin.com/learning/certificates/52b8fc7c980d16a2f92667217053cbdf9d334baecaba83f1fd400132dbfc3704",
    description: "Comprehensive course on full-stack JavaScript development using MongoDB, Node.js, and React.",
    skills: ["GitHub", "SASS", "AWS", "JavaScript", "CSS", "Full-Stack Development", "MongoDB", "Version Control", "Git", "HTML5", "React.js", "Node.js", "REST APIs", "Web Technologies"],
  },

  // September 2023
  {
    title: "Learning Git and GitHub (2021)",
    issuer: "LinkedIn Learning",
    date: "Sep 2023",
    credentialUrl: "https://www.linkedin.com/learning/certificates/864e388fc77539a9e499d8889689e734e51560a4f6612928c1a6701484df6b2d",
    description: "Covered Git fundamentals, branching, merging, commits, and using GitHub for collaboration and pull requests.",
    skills: ["Git", "GitHub", "Version Control", "Branching", "Merging", "Pull Requests"],
  },

  // June 2023
  {
    title: "Connecting to a MongoDB Database",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB6rcj7kqx6f",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB6rcj7kqx6f",
    description: "Learned to connect and interact with MongoDB databases for modern web applications.",
    skills: ["MongoDB", "Database", "REST APIs", "Web Technologies"],
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB5j5kr5ffez",
    credentialUrl: "https://learn.mongodb.com/c/z4d9qbquQdCrI6Cx8D-GFg",
    description: "Introduction to MongoDB fundamentals, document model, and CRUD operations.",
    skills: ["MongoDB", "NoSQL", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Aggregation",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBtrupbrqmyf",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBtrupbrqmyf",
    description: "Mastered aggregation pipelines for advanced data processing in MongoDB.",
    skills: ["MongoDB", "Aggregation", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Atlas Search",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBz2so80wyug",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBz2so80wyug",
    description: "Implemented full-text search capabilities using MongoDB Atlas Search.",
    skills: ["MongoDB", "Atlas Search", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB CRUD Operations: Insert and Find Documents",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB8rqivqxcac",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB8rqivqxcac",
    description: "Learned to insert and query documents efficiently in MongoDB.",
    skills: ["MongoDB", "CRUD", "Back-End Development", "REST APIs"],
  },
  {
    title: "MongoDB CRUD Operations: Modifying Query Results",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBo4ewagduro",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBo4ewagduro",
    description: "Mastered modifying and updating query results in MongoDB.",
    skills: ["MongoDB", "Query Optimization", "Web Technologies"],
  },
  {
    title: "MongoDB CRUD Operations: Replace and Delete Documents",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB9hosetb4xm",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB9hosetb4xm",
    description: "Learned to replace and delete documents in MongoDB collections.",
    skills: ["MongoDB", "CRUD", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Data Modeling Intro",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB4p2hokswb2",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB4p2hokswb2",
    description: "Introduction to data modeling concepts and best practices in MongoDB.",
    skills: ["MongoDB", "Data Modeling", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Indexes",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB9z2b0qt9uf",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB9z2b0qt9uf",
    description: "Learned to create and manage indexes for performance optimization in MongoDB.",
    skills: ["MongoDB", "Indexing", "Performance", "REST APIs"],
  },
  {
    title: "MongoDB Transactions",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBzu0tam4cc9",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBzu0tam4cc9",
    description: "Mastered multi-document transactions in MongoDB for data consistency.",
    skills: ["MongoDB", "Transactions", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB and the Document Model",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBd8dd9ozggr",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBd8dd9ozggr",
    description: "Explored MongoDB's document model and its advantages for modern applications.",
    skills: ["MongoDB", "Document Model", "REST APIs", "Web Technologies"],
  },

  // March 2023
  {
    title: "Angular (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "ce9a1fbb806f",
    credentialUrl: "https://www.hackerrank.com/certificates/ce9a1fbb806f",
    description: "Demonstrated foundational knowledge of Angular and modern web development.",
    skills: ["Angular", "GitHub", "AWS", "Git", "REST APIs", "Web Technologies"],
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "399d7c40812b",
    credentialUrl: "https://www.hackerrank.com/certificates/399d7c40812b",
    description: "Certified in basic problem-solving and algorithmic thinking.",
    skills: ["Algorithms", "Problem Solving", "GitHub", "Git"],
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "2832fd9d6c55",
    credentialUrl: "https://www.hackerrank.com/certificates/2832fd9d6c55",
    description: "Demonstrated foundational knowledge of React.js and component-based development.",
    skills: ["React.js", "GitHub", "AWS", "Git", "HTML5", "REST APIs"],
  },

  // February 2023
  {
    title: "Introduction to Front-end Development with ReactJS",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "USAW78LSYV5C",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/USAW78LSYV5C",
    description: "Introduction to front-end development using ReactJS, SASS, and modern web technologies.",
    skills: ["React.js", "GitHub", "SASS", "AWS", "JavaScript", "CSS", "Version Control", "Git", "HTML5", "Node.js", "REST APIs"],
  },
  {
    title: "Node.js Backend Basics with Best Practices",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "BF44X7AFBV4R",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/BF44X7AFBV4R",
    description: "Learned Node.js backend fundamentals and best practices for scalable server-side development.",
    skills: ["Node.js", "GitHub", "SASS", "AWS", "CSS", "Version Control", "Git", "HTML5", "REST APIs"],
  },
  {
    title: "Typescript in React: Get started",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "6T4NNEAA28EW",
    credentialUrl: "https://coursera.org/verify/6T4NNEAA28EW",
    description: "Introduction to using TypeScript in React applications for type-safe development.",
    skills: ["TypeScript", "React.js", "GitHub", "SASS", "AWS", "Version Control", "Git", "HTML5", "REST APIs"],
  },

  // 2022
  {
    title: "Frontend Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-FWD-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description: "Comprehensive frontend development certification covering responsive web design, modern CSS techniques, and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "Responsive Design", "JavaScript", "React", "Bootstrap"],
  },
  {
    title: "Backend Development and APIs",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-BDA-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description: "Backend development certification focusing on server-side programming, API design, database integration, and building scalable web services.",
    skills: ["Node.js", "Express.js", "APIs", "MongoDB", "Authentication", "Server Architecture"],
  },
];

export default function Certifications({
  certifications = defaultCertifications,
}: CertificationsProps) {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Achievement Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">class</span>{" "}
            <span className="text-accent-primary">Certifications</span>{" "}
            <span className="text-text-secondary">{"{"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            Certifications & Achievements
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            Professional certifications and credentials that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid - Achievement Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300 group"
              variants={staggerItemVariants}
            >
              {/* Badge Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-panel border border-border rounded-lg flex items-center justify-center">
                  <HiBadgeCheck className="text-2xl text-code-green" />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-primary transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>

              {/* Issuer & Date */}
              <div className="flex items-center gap-2 mb-3">
                <FaAward className="text-accent-primary text-sm" />
                <span className="text-sm font-mono text-code-blue">{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <FaCalendarAlt className="text-accent-primary text-sm" />
                <span className="text-xs font-mono text-text-muted">{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-4 p-3 bg-panel border border-border rounded text-xs font-mono">
                  <span className="text-code-blue">id:</span>{" "}
                  <span className="text-text-muted break-all">{cert.credentialId}</span>
                </div>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs font-mono bg-panel border border-border rounded text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 4 && (
                  <span className="px-2 py-1 text-xs font-mono bg-panel border border-border rounded text-text-muted">
                    +{cert.skills.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-mono text-sm text-text-secondary">{"}"}</div>

          {/* CTA */}
          <div className="p-6 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-code-green rounded-full animate-pulse" />
              <span className="font-mono text-sm text-code-green">
                status: "continuously_learning"
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              I'm constantly updating my skills and earning new certifications to stay
              current with the latest technologies and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
