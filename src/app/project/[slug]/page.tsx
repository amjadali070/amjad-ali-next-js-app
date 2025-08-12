"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import {
  HiArrowLeft,
  HiCalendar,
  HiCode,
  HiExclamationCircle,
  HiLightningBolt,
  HiSparkles,
  HiStar,
  HiUsers,
  HiChartBar,
  HiShieldCheck,
} from "react-icons/hi";

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold hover:scale-105 smooth-transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-slate-300 hover:text-white smooth-transition"
          >
            <HiArrowLeft className="text-xl" />
            <span>Back to Projects</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
                  <HiSparkles className="text-yellow-400 text-sm" />
                  <span className="text-slate-300 text-sm font-medium">
                    Project Details
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">{project.title}</span>
                </h1>

                <p className="text-2xl text-purple-300 font-semibold">
                  {project.subtitle}
                </p>

                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <HiCalendar className="text-purple-400" />
                    <span className="text-white font-semibold">Duration</span>
                  </div>
                  <p className="text-slate-400">{project.duration}</p>
                </div>

                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <HiUsers className="text-cyan-400" />
                    <span className="text-white font-semibold">Team</span>
                  </div>
                  <p className="text-slate-400">{project.team}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                      rounded-full text-sm font-medium text-white border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden glass">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Technologies */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <HiCode className="text-purple-400" />
                <span>Technologies</span>
              </h2>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 glass rounded-xl"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <HiLightningBolt className="text-cyan-400" />
                <span>Key Features</span>
              </h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 glass rounded-xl"
                  >
                    <HiStar className="text-yellow-400 text-sm mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <HiChartBar className="text-green-400" />
                <span>Achievements</span>
              </h2>
              <div className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 glass rounded-xl"
                  >
                    <HiShieldCheck className="text-green-400 text-sm mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Challenges & Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-6 glass rounded-2xl border border-orange-500/20"
                >
                  <div className="flex items-start space-x-3">
                    <HiExclamationCircle className="text-orange-400 text-lg mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Challenge {index + 1}
                      </h3>
                      <p className="text-slate-400 text-sm">{challenge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 p-6 glass rounded-2xl border border-yellow-500/20">
              <HiShieldCheck className="text-yellow-400 text-2xl" />
              <div className="text-left">
                <h3 className="text-white font-semibold">
                  Client Project - Confidential
                </h3>
                <p className="text-slate-400 text-sm">
                  This project contains sensitive client data. No live demo or repository access is available due to confidentiality agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
