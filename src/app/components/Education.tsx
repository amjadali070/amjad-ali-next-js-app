"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";
import CodeBlock from "./ui/CodeBlock";

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science (MSCS)",
      institution: "Mohammad Ali Jinnah University",
      period: "Sep 2024 - Present",
      location: "Karachi, Pakistan",
      status: "In Progress",
      focusAreas: [
        "Advanced Software Engineering",
        "Machine Learning & AI", 
        "Scalable System Architectures"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Sukkur IBA University",
      period: "Aug 2019 - Sep 2023", 
      location: "Sukkur, Pakistan",
      grade: "Distinction",
      achievements: [
        "Capstone Project: Intelligent Systems",
        "Focus on Data Structures & Algorithms"
      ]
    }
  ];

  const educationJson = JSON.stringify(educationData, null, 2);

  return (
    <section id="education" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">cat</span> degrees.json
          </h2>
          <p className="text-muted font-mono">// Academic credentials and certification data</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="node ~ degrees.json">
             <CodeBlock 
                code={educationJson} 
                language="json" 
                className="bg-transparent"
             />
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
