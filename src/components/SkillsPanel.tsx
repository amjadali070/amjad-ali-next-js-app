"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCommandLine,
  HiOutlineSparkles,
  HiOutlineSquare3Stack3D,
  HiOutlineArrowsRightLeft,
  HiOutlineServerStack,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";

export default function SkillsPanel() {
  const services = [
    {
      number: "01",
      title: "Full-Stack Architecture",
      description:
        "Building production-grade web applications engineered for sub-second page loads, SEO perfection, and modular scalability.",
      bgColor: "bg-meelo-cardLavender",
      icon: <HiOutlineCommandLine className="text-black text-2xl" />,
      techPills: ["Next.js 15", "React 19", "TypeScript", "Node.js"],
    },
    {
      number: "02",
      title: "AI & LLM Integration",
      description:
        "Integrating intelligent AI agents, OpenAI and Gemini models, vector embeddings with pgvector, and automated generative workflows.",
      bgColor: "bg-meelo-cardMint",
      icon: <HiOutlineSparkles className="text-black text-2xl" />,
      techPills: ["OpenAI", "Google Gemini", "pgvector", "LangChain"],
    },
    {
      number: "03",
      title: "Enterprise SaaS & CRM Portals",
      description:
        "Developing scalable SaaS platforms, automated employee CRM/HRM portals, subscriber management, and role-based security.",
      bgColor: "bg-meelo-cardPink",
      icon: <HiOutlineSquare3Stack3D className="text-black text-2xl" />,
      techPills: ["Multi-Tenant", "RBAC", "Stripe Billing", "PostgreSQL"],
    },
    {
      number: "04",
      title: "API Engineering & Integration",
      description:
        "Designing high-throughput API microservices, third-party insurance billing integrations (eSanad), and compliant payment processing.",
      bgColor: "bg-meelo-cardBlue",
      icon: <HiOutlineArrowsRightLeft className="text-black text-2xl" />,
      techPills: ["REST APIs", "GraphQL", "Stripe", "Insurance APIs"],
    },
    {
      number: "05",
      title: "Real-Time & Event Systems",
      description:
        "Architecting bi-directional WebSocket messaging, background worker job queues, and low-latency Redis caching layers.",
      bgColor: "bg-meelo-cardPeach",
      icon: <HiOutlineServerStack className="text-black text-2xl" />,
      techPills: ["Socket.io", "Redis", "BullMQ", "WebSockets"],
    },
    {
      number: "06",
      title: "Cloud DevOps & CI/CD",
      description:
        "Automating containerized cloud deployments, setting up continuous integration, database indexing, and telemetry monitoring.",
      bgColor: "bg-amber-100",
      icon: <HiOutlineCloudArrowUp className="text-black text-2xl" />,
      techPills: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* ENGINEERING SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            High-Impact Software Engineering
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Specialized engineering solutions built for performance, reliability, and modern digital experiences.
          </motion.p>
        </div>

        {/* 6-Card Clean & Spacious Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-8 rounded-3xl border-2 border-black ${service.bgColor} shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 flex flex-col justify-between space-y-6 group h-full`}
            >
              {/* Top Row: Icon Node & Number */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl border-2 border-black bg-white flex items-center justify-center shadow-brutal-sm group-hover:scale-105 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <span className="text-sm font-black font-mono text-black/60 tracking-wider">
                    Phase {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-black tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-black/80 font-medium text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Clean Tech Stack Pills */}
              <div className="pt-4 border-t-2 border-black/15">
                <div className="flex flex-wrap gap-1.5">
                  {service.techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-white border border-black/20 text-xs font-bold text-black select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



