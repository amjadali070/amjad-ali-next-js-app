"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";
import CodeBlock from "./ui/CodeBlock";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
}

const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    {
      title: "Gemini API by Google",
      issuer: "Udacity",
      date: "Jul 2024",
      id: "549c0b28-45af-11ef-a35e-9b9a02ba6f0f"
    },
    {
      title: "Build a Twitter Clone Front-End with ReactJS",
      issuer: "Coursera",
      date: "Jul 2023",
      id: "THVJDLKCAVH6"
    },
    {
      title: "Full-Stack JavaScript Development",
      issuer: "LinkedIn",
      date: "Jul 2023",
      id: "LI-FS-JS-2023"
    },
    {
      title: "Learning Git and GitHub",
      issuer: "LinkedIn Learning",
      date: "Sep 2023",
      id: "LI-GIT-2023"
    },
    {
      title: "MongoDB Database Connector",
      issuer: "MongoDB",
      date: "Jun 2023",
      id: "MDB6rcj7kqx6f"
    },
    {
      title: "MongoDB Atlas Search",
      issuer: "MongoDB",
      date: "Jun 2023",
      id: "MDBz2so80wyug"
    },
    {
      title: "MongoDB Data Modeling",
      issuer: "MongoDB",
      date: "Jun 2023",
      id: "MDB4p2hokswb2"
    },
    {
      title: "Angular (Basic)",
      issuer: "HackerRank",
      date: "Mar 2023",
      id: "ce9a1fbb806f"
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "Mar 2023",
      id: "2832fd9d6c55"
    },
    {
      title: "Node.js Backend Basics",
      issuer: "Coursera",
      date: "Feb 2023",
      id: "BF44X7AFBV4R"
    }
  ];

  const generateCertString = (cert: Certification) => {
     return `-----BEGIN CERTIFICATE-----
Subject: ${cert.title}
Issuer: ${cert.issuer}
Validity:
    Not Before: ${cert.date}
    Not After:  Permanent
Serial Number: ${cert.id}
Signature Algorithm: sha256WithRSAEncryption
-----END CERTIFICATE-----`;
  };

  const allCerts = certificationsData.map(generateCertString).join("\n\n");

  return (
    <section id="certifications" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">cat</span> certs.pem
          </h2>
          <p className="text-muted font-mono">// Verified credentials and keys</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="bash ~ cat certs.pem" className="max-h-[600px] overflow-hidden flex flex-col">
             <div className="overflow-y-auto custom-scrollbar flex-1">
                <CodeBlock 
                    code={allCerts} 
                    language="yaml" 
                    className="bg-transparent"
                />
             </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
