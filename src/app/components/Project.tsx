"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiLightningBolt, HiExternalLink, HiCode } from "react-icons/hi";
import CodeBlock from "./ui/CodeBlock";
import Button from "./ui/Button";

// Import thumbnails
import CRMThumbnail from "../assets/CRM Thumbnail.png";
import EaseWebhumbnail from "../assets/EaseWen Thumbnail.png";
import HRMThumbnail from "../assets/HRM Thumbnail.png";
import AIDBThumbnail from "../assets/AIDashboard.png";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
  tags?: string[];
}

export interface ProjectsProps {
  heading?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Built a feature-rich CRM platform with contact management, sales tracking, and customer support integration. Implemented analytics and reporting modules for real-time insights.",
      image: CRMThumbnail,
      link: "https://github.com/amjadali070/crm-martechsol-frontend",
      tags: ["CRM", "Full-Stack", "Analytics"],
    },
    {
      title: "HR Management System (HRM)",
      description:
        "Developed a comprehensive HRM system with features including attendance tracking, leave management, and payroll processing.",
      image: HRMThumbnail,
      link: "https://github.com/amjadali070/hrm-martechsol-frontend",
      tags: ["MERN", "HRM", "Dashboard"],
    },
    {
      title: "AI Finance Dashboard",
      description:
        "Built a finance dashboard that shows predictions and budget advice using AI. Integrated ChatGPT to answer financial questions interactively.",
      image: AIDBThumbnail,
      link: "https://github.com/amjadali070/ai-prototype-charcentric",
      tags: ["AI", "Finance", "Next.js", "ChatGPT"],
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Created a dashboard to monitor live data and performance metrics. Used charts and graphs to visualize trends in real-time.",
      image: AIDBThumbnail,
      link: "#",
      tags: ["Full-Stack", "Analytics", "Real-Time"],
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Developed a secure voting app using Ethereum smart contracts. Ensured transparent vote recording and result validation.",
      image: AIDBThumbnail,
      link: "#",
      tags: ["Blockchain", "Solidity", "React"],
    },
    {
      title: "EaseWeb (Easy Website Builder)",
      description:
        "Built a drag-and-drop tool for users to design and publish websites. Supported live preview and responsive templates for easy customization.",
      image: EaseWebhumbnail,
      link: "https://github.com/amjadali070/site-builder-easeweb",
      tags: ["MERN", "Website Builder", "Drag-and-Drop"],
    },
];

const Projects: React.FC<ProjectsProps> = ({ heading = "Featured Projects", projects = defaultProjects }) => {
  const router = useRouter();

  const getProjectSlug = (title: string): string => {
    const slugMap: Record<string, string> = {
      "Customer Relationship Management (CRM)": "crm-system",
      "HR Management System (HRM)": "hrm-system", 
      "AI Finance Dashboard": "ai-finance-dashboard",
      "Real-Time Analytics Dashboard": "analytics-dashboard",
      "Blockchain-Based Voting System": "voting-system",
      "EaseWeb (Easy Website Builder)": "website-builder"
    };
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleViewDetails = (title: string) => {
    const slug = getProjectSlug(title);
    router.push(`/project/${slug}`);
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">function</span> <span className="text-neon-purple">getProjects</span>() {"{"}
          </h2>
          <p className="text-muted font-mono ml-8">// Returning a list of featured works and experiments...</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-4 md:ml-8 border-l border-border pl-8 relative">
          {/* Vertical line connector */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border -ml-px" />

          {projects.map((project, index) => {
            const projectCode = `
interface ${project.title.replace(/[^a-zA-Z]/g, '')} {
  description: "${project.description.slice(0, 60)}...";
  tags: [${project.tags?.map(t => `"${t}"`).join(', ')}];
  status: "Completed";
  link: "${project.link}";
}

const launch = () => {
  // Click to view details
  navigator.navigate("/${getProjectSlug(project.title)}");
}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#161b22] border border-border rounded-lg overflow-hidden hover:border-secondary transition-colors duration-300 shadow-xl"
              >
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#1f2428] border-b border-border">
                   <div className="flex items-center gap-2">
                       <span className="text-sm text-neon-blue font-mono">{project.title.slice(0, 15)}.tsx</span>
                   </div>
                   <div className="flex gap-2">
                       <button onClick={() => handleViewDetails(project.title)} className="text-xs text-muted hover:text-white transition-colors">
                           <HiCode size={16} />
                       </button>
                       {project.link !== "#" && (
                           <Link href={project.link} target="_blank" className="text-xs text-muted hover:text-white transition-colors">
                               <HiExternalLink size={16} />
                           </Link>
                       )}
                   </div>
                </div>

                <div className="relative">
                    {/* Project Image Overlay (Reveal on hover) */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 hidden md:block">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover rounded-bl-3xl border-l border-b border-secondary/50"
                        />
                    </div>

                    <div className="p-0">
                        <CodeBlock code={projectCode.trim()} language="typescript" className="bg-transparent" />
                    </div>

                    <div className="p-4 border-t border-border bg-[#0d1117]/50 flex justify-end gap-2">
                        <Button 
                            variant="primary" 
                            onClick={() => handleViewDetails(project.title)}
                            className="text-xs py-1"
                        >
                            Run Project
                        </Button>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
         <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                {"}"}
            </h2>
         </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
           <div className="font-mono text-muted mb-4">// Want to see the source code?</div>
           <Button onClick={() => window.open('https://github.com/amjadali070', '_blank')} variant="outline">
              <span className="flex items-center gap-2">
                 <HiExternalLink /> git clone https://github.com/amjadali070
              </span>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
