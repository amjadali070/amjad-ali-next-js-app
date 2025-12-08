"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode
} from "react-icons/hi";
import { motion } from "framer-motion";
import TerminalWindow from "../../components/ui/TerminalWindow";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";

// Import project images
import CRMThumbnail from "../../assets/CRM Thumbnail.png";
import EaseWebhumbnail from "../../assets/EaseWen Thumbnail.png";
import HRMThumbnail from "../../assets/HRM Thumbnail.png";
import AIDBThumbnail from "../../assets/AIDashboard.png";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  duration: string;
  role: string;
  team: string;
  client: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  achievements: string[];
  tags: string[];
  repoLink?: string;
  demoLink?: string;
}

const projectsData: Record<string, ProjectDetail> = {
  "crm-system": {
    id: "crm-system",
    title: "Customer Relationship Management (CRM)",
    subtitle: "Enterprise-Grade CRM Platform",
    description: "Built a feature-rich CRM platform with contact management, sales tracking, and customer support integration.",
    longDescription: "Developed a comprehensive Customer Relationship Management system that revolutionized how the client manages their customer interactions. The platform includes advanced analytics, automated workflows, and real-time reporting capabilities that significantly improved sales performance and customer satisfaction.",
    image: CRMThumbnail,
    duration: "Nov 2024 – Dec 2024",
    role: "Full-Stack Developer",
    team: "4 Developers",
    client: "Enterprise Client (Confidential)",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "JWT Authentication", "Socket.io", "Chart.js"],
    features: [
      "Contact Management with 360° customer view",
      "Sales Pipeline tracking and forecasting",
      "Email integration and automation",
      "Real-time analytics and reporting",
      "Task and appointment scheduling",
      "Document management system",
      "Mobile-responsive design",
      "Role-based access control"
    ],
    challenges: [
      "Handling large datasets with optimal performance",
      "Implementing real-time updates across multiple users",
      "Creating complex data visualization components",
      "Ensuring data security and GDPR compliance"
    ],
    achievements: [
      "40% increase in sales team productivity",
      "Reduced customer response time by 60%",
      "99.9% uptime achieved",
      "Successfully migrated 10,000+ customer records"
    ],
    tags: ["CRM", "Full-Stack", "Analytics", "Enterprise"]
  },
  "hrm-system": {
    id: "hrm-system",
    title: "HR Management System (HRM)",
    subtitle: "Complete HR Operations Platform",
    description: "Developed a comprehensive HRM system with attendance tracking, leave management, and payroll processing.",
    longDescription: "Created an all-in-one Human Resource Management system that streamlined HR operations for a mid-sized company. The system automated manual processes, improved data accuracy, and provided valuable insights into workforce analytics.",
    image: HRMThumbnail,
    duration: "Oct 2024 – Nov 2024",
    role: "Lead Developer",
    team: "3 Developers",
    client: "Corporate Client (Confidential)",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "TypeScript", "PDF Generation", "Email Services", "Cron Jobs"],
    features: [
      "Employee onboarding and profile management",
      "Attendance tracking with biometric integration",
      "Leave management and approval workflows",
      "Payroll processing and salary calculations",
      "Performance evaluation system",
      "Document storage and management",
      "Automated email notifications",
      "Comprehensive reporting dashboard"
    ],
    challenges: [
      "Complex payroll calculations with multiple variables",
      "Integration with existing biometric systems",
      "Implementing multi-level approval workflows",
      "Ensuring data privacy and security compliance"
    ],
    achievements: [
      "Reduced HR processing time by 70%",
      "Eliminated manual payroll errors",
      "Improved employee satisfaction scores",
      "Successfully deployed for 500+ employees"
    ],
    tags: ["MERN", "HRM", "Dashboard", "Enterprise"]
  },
  "ai-finance-dashboard": {
    id: "ai-finance-dashboard",
    title: "AI Finance Dashboard",
    subtitle: "Intelligent Financial Analytics Platform",
    description: "Built a finance dashboard that shows predictions and budget advice using AI with ChatGPT integration.",
    longDescription: "Developed an innovative AI-powered financial dashboard that provides predictive analytics and personalized financial recommendations. The platform leverages machine learning algorithms and ChatGPT integration to offer intelligent insights and automated financial advice.",
    image: AIDBThumbnail,
    duration: "Jul 2024 – Aug 2024",
    role: "AI Developer",
    team: "2 Developers",
    client: "FinTech Startup (Confidential)",
    technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "Python", "FastAPI", "PostgreSQL", "Chart.js", "Machine Learning"],
    features: [
      "AI-powered financial predictions",
      "ChatGPT integration for financial advice",
      "Interactive budget planning tools",
      "Expense categorization and analysis",
      "Investment portfolio tracking",
      "Risk assessment algorithms",
      "Automated financial reports",
      "Real-time market data integration"
    ],
    challenges: [
      "Training accurate prediction models",
      "Handling real-time financial data processing",
      "Implementing secure API integrations",
      "Creating intuitive AI interaction interfaces"
    ],
    achievements: [
      "95% accuracy in financial predictions",
      "50% improvement in user financial decisions",
      "Processed $1M+ in transaction data",
      "Achieved 4.8/5 user satisfaction rating"
    ],
    tags: ["AI", "Finance", "Next.js", "ChatGPT", "Machine Learning"]
  },
  "analytics-dashboard": {
    id: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    subtitle: "Live Data Monitoring Platform",
    description: "Created a dashboard to monitor live data and performance metrics with real-time visualizations.",
    longDescription: "Built a sophisticated real-time analytics platform that processes and visualizes large volumes of data streams. The dashboard provides instant insights into business metrics and enables data-driven decision making through interactive charts and alerts.",
    image: AIDBThumbnail,
    duration: "Mar 2023 – May 2023",
    role: "Frontend Developer",
    team: "5 Developers",
    client: "Tech Company (Confidential)",
    technologies: ["React", "D3.js", "WebSocket", "Redis", "Node.js", "InfluxDB", "Docker", "Kubernetes"],
    features: [
      "Real-time data streaming and processing",
      "Interactive charts and visualizations",
      "Custom dashboard builder",
      "Automated alert system",
      "Data export and reporting",
      "Multi-user collaboration",
      "Mobile-responsive design",
      "API integration capabilities"
    ],
    challenges: [
      "Handling high-frequency data updates",
      "Optimizing rendering performance",
      "Implementing efficient data storage",
      "Creating scalable visualization components"
    ],
    achievements: [
      "Processed 1M+ data points per second",
      "Reduced decision-making time by 45%",
      "Achieved sub-second data refresh rates",
      "Deployed across 10+ business units"
    ],
    tags: ["Full-Stack", "Analytics", "Real-Time", "Data Visualization"]
  },
  "voting-system": {
    id: "voting-system",
    title: "Blockchain-Based Voting System",
    subtitle: "Secure Digital Voting Platform",
    description: "Developed a secure voting app using Ethereum smart contracts with transparent vote recording.",
    longDescription: "Created a revolutionary blockchain-based voting system that ensures complete transparency, security, and immutability in electoral processes. The platform uses Ethereum smart contracts to guarantee tamper-proof voting and real-time result verification.",
    image: AIDBThumbnail,
    duration: "Jan 2023 – Feb 2023",
    role: "Blockchain Developer",
    team: "3 Developers",
    client: "Government Agency (Confidential)",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "MetaMask", "Truffle", "Node.js"],
    features: [
      "Smart contract-based voting mechanism",
      "Voter identity verification",
      "Real-time vote counting",
      "Transparent result publishing",
      "Audit trail and verification",
      "Mobile wallet integration",
      "Multi-language support",
      "Accessibility compliance"
    ],
    challenges: [
      "Ensuring voter anonymity while maintaining transparency",
      "Optimizing gas costs for transactions",
      "Implementing user-friendly blockchain interactions",
      "Meeting strict security requirements"
    ],
    achievements: [
      "Successfully conducted pilot election with 5,000+ voters",
      "Zero security incidents or vote manipulation",
      "99.8% voter satisfaction rate",
      "Reduced election costs by 30%"
    ],
    tags: ["Blockchain", "Solidity", "React", "Security"]
  },
  "website-builder": {
    id: "website-builder",
    title: "EaseWeb (Easy Website Builder)",
    subtitle: "Drag-and-Drop Website Creation Platform",
    description: "Built a drag-and-drop tool for users to design and publish websites with live preview capabilities.",
    longDescription: "Developed a comprehensive website building platform that empowers users to create professional websites without coding knowledge. The platform features an intuitive drag-and-drop interface, responsive templates, and integrated hosting capabilities.",
    image: EaseWebhumbnail,
    duration: "Jun 2022 – Apr 2023",
    role: "Full-Stack Developer",
    team: "6 Developers",
    client: "SaaS Startup (Confidential)",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS S3", "Stripe API", "Socket.io", "Docker"],
    features: [
      "Drag-and-drop page builder",
      "Responsive template library",
      "Live preview functionality",
      "Custom domain integration",
      "E-commerce capabilities",
      "SEO optimization tools",
      "Analytics integration",
      "Multi-user collaboration"
    ],
    challenges: [
      "Creating a flexible component system",
      "Implementing real-time collaborative editing",
      "Ensuring responsive design across devices",
      "Building a scalable hosting infrastructure"
    ],
    achievements: [
      "1,000+ websites created by users",
      "95% user retention rate",
      "Featured in top website builder reviews",
      "Generated $100K+ in revenue"
    ],
    tags: ["MERN", "Website Builder", "Drag-and-Drop", "SaaS"]
  }
};

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6">
        <TerminalWindow title="bash ~ error">
            <div className="text-center space-y-4">
                <div className="text-red-500 font-mono text-xl">Error: Project not found</div>
                <div className="text-muted font-mono">The requested resource could not be located in the content database.</div>
                <Button onClick={() => router.back()} variant="outline">
                    cd ..
                </Button>
            </div>
        </TerminalWindow>
      </div>
    );
  }

  const readmeContent = `# ${project.title}
> ${project.subtitle}

## Overview
${project.longDescription}

## Technical Specs
- **Role**: ${project.role}
- **Duration**: ${project.duration}
- **Team Size**: ${project.team}
- **Technologies**: ${project.technologies.join(', ')}

## Key Features
${project.features.map(f => `- ${f}`).join('\n')}

## Challenges & Solutions
${project.challenges.map(c => `- ${c}`).join('\n')}

## Achievements
${project.achievements.map(a => `- ${a}`).join('\n')}
`;

  return (
    <div className="min-h-screen bg-[#0d1117] pt-20 pb-20">
      {/* Navigation Bar */}
      <nav className="fixed top-20 left-0 w-full z-40 px-6 pointer-events-none">
         <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
             <Button onClick={() => router.back()} variant="ghost" className="text-muted hover:text-white group">
                <span className="flex items-center gap-2">
                    <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
                    <span>cd ..</span>
                </span>
             </Button>
         </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            
            {/* Main Content (README) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TerminalWindow title={`vim README.md (${project.title})`}>
                    <CodeBlock 
                        code={readmeContent} 
                        language="markdown" 
                        className="bg-transparent"
                    />
                </TerminalWindow>
            </motion.div>

            {/* Sidebar (Project Info & Preview) */}
            <div className="space-y-6">
                {/* Project Access Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-[#161b22] border border-border rounded-lg shadow-xl"
                >
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <HiCode className="text-secondary" /> Project Access
                    </h3>
                    
                    <div className="space-y-3">
                         <div className="flex items-center justify-between text-sm">
                             <span className="text-muted">Status:</span>
                             <span className="text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">Completed</span>
                         </div>
                         <div className="flex items-center justify-between text-sm">
                             <span className="text-muted">Visibility:</span>
                             <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded border border-orange-400/20">Confidential</span>
                         </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border space-y-3">
                         <Button className="w-full" disabled={true} variant="outline">
                             <span className="flex items-center gap-2">
                                 <HiExternalLink /> Live Demo (Private)
                             </span>
                         </Button>
                         <p className="text-xs text-muted text-center mt-2">
                            * Access restricted due to NDA
                         </p>
                    </div>
                </motion.div>

                {/* Tech Stack Tags */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-[#161b22] border border-border rounded-lg shadow-xl"
                >
                    <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 8).map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 8 && (
                            <span className="text-xs px-2 py-1 bg-[#0d1117] text-muted border border-border rounded">
                                +{project.technologies.length - 8} more
                            </span>
                        )}
                    </div>
                </motion.div>

                 {/* Project Preview Image */}
                 <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-border group"
                >
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white font-mono text-xs">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.png
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}
