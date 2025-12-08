"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";
import CodeBlock from "./ui/CodeBlock";

const Services: React.FC = () => {
  const servicesCode = `/**
 * My technical service offerings and capabilities
 * version: 2.0.0
 */

export const MyServices = {
  fullStack: {
    title: "Full-Stack Development",
    description: "End-to-end solutions from concept to deployment",
    stack: ["MERN", "Next.js", "TypeScript", "Node.js"],
    availability: "Immediate"
  },

  webDevelopment: {
    title: "Web Development", 
    description: "Building responsive, scalable web applications",
    focus: ["Performance", "SEO", "UX/UI"],
    frameworks: ["React", "Tailwind CSS"]
  },

  aiIntegration: {
    title: "AI & Machine Learning",
    description: "Intelligent apps with API integration",
    capabilities: ["ChatGPT API", "Predictive Analytics"],
    status: "Active Research"
  },

  backendArch: {
    title: "Backend & Database",
    description: "Robust architectures and API design",
    systems: ["PostgreSQL", "MongoDB", "REST", "GraphQL"],
    uptime: "99.9%"
  }
};

// Ready to deploy?
// contact: amjadpitafi070@gmail.com`;

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">code</span> services.ts
          </h2>
          <p className="text-muted font-mono">// Interfaces and implementations</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="vim services.ts">
             <CodeBlock 
                code={servicesCode} 
                language="typescript" 
                className="bg-transparent"
             />
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
