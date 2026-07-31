"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiVite,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiSocketdotio,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiJest,
  SiVitest,
  SiCypress,
  SiOpenai,
  SiGoogle,
  SiLangchain,
  SiJsonwebtokens,
  SiStripe,
  SiGithubcopilot,
  SiAnthropic,
  SiSupabase,
  SiPrisma,
  SiApachespark,
  SiSnowflake,
  SiPandas,
  SiNumpy,
  SiDbt,
  SiPlotly,
  SiApachekafka,
  SiApache,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNestjs,
  SiApollographql,
  SiHuggingface,
  SiApacheairflow,
  SiMlflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { MdOutlineHttp } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
import {
  HiOutlineSparkles,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineSquare3Stack3D,
  HiOutlineCube,
  HiOutlineCpuChip,
} from "react-icons/hi2";

const techIconMap: Record<string, React.ReactNode> = {
  "React": <SiReact className="text-cyan-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Next.js 15": <SiNextdotjs className="text-black" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express": <SiExpress className="text-black" />,
  "Express.js": <SiExpress className="text-black" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Redux": <SiRedux className="text-purple-600" />,
  "Python": <SiPython className="text-blue-500" />,
  "FastAPI": <SiFastapi className="text-teal-600" />,
  "Django": <SiDjango className="text-emerald-800" />,
  "PostgreSQL": <SiPostgresql className="text-blue-500" />,
  "MySQL": <SiMysql className="text-blue-600" />,
  "Redis": <SiRedis className="text-red-600" />,
  "Redis Pub/Sub": <SiRedis className="text-red-600" />,
  "Docker": <SiDocker className="text-blue-500" />,
  "Kubernetes": <SiKubernetes className="text-blue-600" />,
  "AWS": <SiAmazonwebservices className="text-amber-500" />,
  "AWS S3": <SiAmazonwebservices className="text-amber-500" />,
  "GCP": <SiGooglecloud className="text-blue-500" />,
  "Azure": <VscAzure className="text-blue-600" />,
  "OpenAI": <SiOpenai className="text-emerald-600" />,
  "OpenAI API": <SiOpenai className="text-emerald-600" />,
  "OpenAI Embeddings": <SiOpenai className="text-emerald-600" />,
  "OpenAI Realtime API": <SiOpenai className="text-emerald-600" />,
  "Gemini API": <SiGoogle className="text-blue-500" />,
  "LangChain": <SiLangchain className="text-emerald-600" />,
  "LangGraph": <SiLangchain className="text-emerald-700" />,
  "GraphQL": <SiGraphql className="text-pink-600" />,
  "Apollo Federation": <SiApollographql className="text-indigo-600" />,
  "Socket.io": <SiSocketdotio className="text-black" />,
  "Stripe": <SiStripe className="text-indigo-600" />,
  "Stripe API": <SiStripe className="text-indigo-600" />,
  "Git": <SiGit className="text-orange-600" />,
  "GitHub Actions": <SiGithubactions className="text-blue-600" />,
  "Vite": <SiVite className="text-purple-500" />,
  "Material UI": <SiMui className="text-blue-500" />,
  "Chakra UI": <SiChakraui className="text-teal-600" />,
  "HTML5": <SiHtml5 className="text-orange-600" />,
  "CSS3": <SiCss3 className="text-blue-500" />,
  "Jest": <SiJest className="text-red-600" />,
  "Vitest": <SiVitest className="text-yellow-600" />,
  "Cypress": <SiCypress className="text-emerald-600" />,
  "Supabase": <SiSupabase className="text-emerald-500" />,
  "Prisma": <SiPrisma className="text-indigo-600" />,
  "Hugging Face": <SiHuggingface className="text-yellow-500" />,
  "MERN Stack": <HiOutlineSquare3Stack3D className="text-purple-600" />,
  "Microservices": <HiOutlineCube className="text-amber-600" />,
  "REST APIs": <MdOutlineHttp className="text-purple-600 text-lg" />,
  // Data Engineering
  "Apache Kafka": <SiApachekafka className="text-gray-700" />,
  "Apache Spark": <SiApachespark className="text-orange-500" />,
  "Apache Airflow": <SiApacheairflow className="text-blue-600" />,
  "Snowflake": <SiSnowflake className="text-sky-500" />,
  "dbt": <SiDbt className="text-orange-600" />,
  "Pandas": <SiPandas className="text-blue-700" />,
  "NumPy": <SiNumpy className="text-blue-500" />,
  "ETL Pipelines": <HiOutlineCube className="text-amber-500" />,
  "Metabase": <HiOutlineDatabase className="text-blue-600" />,
  // Data Science / ML
  "Plotly": <SiPlotly className="text-purple-500" />,
  "XGBoost": <HiOutlineCpuChip className="text-green-600" />,
  "Scikit-learn": <SiScikitlearn className="text-orange-500" />,
  "TensorFlow": <SiTensorflow className="text-orange-600" />,
  "PyTorch": <SiPytorch className="text-red-600" />,
  "MLflow": <SiMlflow className="text-blue-600" />,
  "DVC": <SiGit className="text-purple-600" />,
  "SHAP": <HiOutlineSparkles className="text-amber-500" />,
  "Prophet": <HiOutlineSparkles className="text-blue-500" />,
  "ONNX Runtime": <HiOutlineCpuChip className="text-gray-600" />,
  "NestJS": <SiNestjs className="text-red-600" />,
  "pgvector": <HiOutlineDatabase className="text-indigo-600" />,
  "Prometheus": <HiOutlineCpuChip className="text-orange-500" />,
  "Twilio Voice": <HiOutlineCpuChip className="text-red-500" />,
  "Tap Payments": <HiOutlineCpuChip className="text-blue-500" />,
  "BullMQ": <HiOutlineCpuChip className="text-red-500" />,
  "WebRTC": <HiOutlineCpuChip className="text-blue-400" />,
  "WebSockets": <HiOutlineCpuChip className="text-green-500" />,
};

function getTechIcon(tech: string): React.ReactNode {
  if (techIconMap[tech]) return techIconMap[tech];
  // Fallback icon search
  const key = Object.keys(techIconMap).find((k) =>
    tech.toLowerCase().includes(k.toLowerCase())
  );
  return key ? techIconMap[key] : <HiOutlineCpuChip className="text-black/70" />;
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { id: "All", label: "All Projects" },
    { id: "SaaS & Microservices", label: "SaaS & Microservices" },
    { id: "AI & RAG", label: "AI & RAG" },
    { id: "Data Engineering", label: "Data Engineering" },
    { id: "ML Engineering", label: "ML & MLOps" },
    { id: "Data Science", label: "Data Science" },
    { id: "Fintech & Insurance", label: "Fintech & Insurance" },
    { id: "Enterprise & Tools", label: "Enterprise & Tools" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "SaaS & Microservices") {
      return (
        p.tags.includes("SaaS") ||
        p.tags.includes("Microservices") ||
        p.tags.includes("No-Code")
      );
    }
    if (activeCategory === "AI & RAG") {
      return (
        p.tags.includes("AI") ||
        p.tags.includes("RAG") ||
        p.tags.includes("NLP") ||
        p.tags.includes("AI Voice") ||
        p.tags.includes("AI Engineering") ||
        p.tags.includes("LangChain") ||
        p.tags.includes("Multi-Agent") ||
        p.tags.includes("Research")
      );
    }
    if (activeCategory === "Data Engineering") {
      return (
        p.tags.includes("Data Engineering") ||
        p.tags.includes("ETL") ||
        p.tags.includes("Streaming") ||
        p.tags.includes("Kafka") ||
        p.tags.includes("Data Warehouse") ||
        p.tags.includes("Snowflake") ||
        p.tags.includes("dbt")
      );
    }
    if (activeCategory === "ML Engineering") {
      return (
        p.tags.includes("ML Engineering") ||
        p.tags.includes("MLOps") ||
        p.tags.includes("MLflow") ||
        p.tags.includes("Feature Store") ||
        p.tags.includes("Model Serving") ||
        p.tags.includes("Production AI")
      );
    }
    if (activeCategory === "Data Science") {
      return (
        p.tags.includes("Data Science") ||
        p.tags.includes("Machine Learning") ||
        p.tags.includes("Analytics") ||
        p.tags.includes("Time Series") ||
        p.tags.includes("Forecasting") ||
        p.tags.includes("XGBoost") ||
        p.tags.includes("BI") ||
        p.tags.includes("Data Visualization")
      );
    }
    if (activeCategory === "Fintech & Insurance") {
      return (
        p.tags.includes("Insurance") ||
        p.tags.includes("Fintech") ||
        p.tags.includes("Payments") ||
        p.tags.includes("Analytics")
      );
    }
    if (activeCategory === "Enterprise & Tools") {
      return (
        p.tags.includes("Enterprise") ||
        p.tags.includes("DevOps") ||
        p.tags.includes("DevTools") ||
        p.tags.includes("Healthcare") ||
        p.tags.includes("Backend") ||
        p.tags.includes("API Gateway") ||
        p.tags.includes("Web")
      );
    }
    return true;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* FEATURED PROJECTS ({projects.length})</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            Featured Engineering Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Detailed case studies of production applications, AI ecosystems, SaaS platforms, and enterprise solutions. Click any project card to expand details.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-150 ease-out border-2 border-black ${
                  isActive
                    ? "bg-black text-white shadow-brutal-sm -translate-y-0.5"
                    : "bg-white text-black hover:bg-black/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* 2-Column Grid of Project Cards with Bottom Expanders */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {visibleProjects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.08, duration: 0.4 }}
                className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-all duration-200 flex flex-col justify-between"
              >
                {/* Browser Frame Mockup Top Header */}
                <div>
                  <div>
                    <div className="h-10 bg-meelo-offwhite border-b-2 border-black flex items-center px-4 justify-between">
                      {/* Window Action Dots */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black" />
                      </div>

                      {/* URL Mock */}
                      <div className="text-[11px] font-extrabold text-black/60 tracking-wider font-mono">
                        {project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-black text-[10px] font-black text-black tracking-tight">
                        {project.associatedWith || project.client || "Independent Project"}
                      </span>
                    </div>

                    {/* Hero Image Container */}
                    <div className="w-full h-60 sm:h-72 relative overflow-hidden bg-meelo-cardLavender border-b-2 border-black group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Card Main Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Subtitle Badge & Title */}
                    <div className="space-y-1.5">
                      <span className="meelo-badge text-[10px] py-0.5 px-3">
                        {project.subtitle}
                      </span>
                      <h3 className="text-2xl font-black text-black tracking-tight pt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Summary Description */}
                    <p className="text-sm font-semibold text-black/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Logo Badges */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-black/60 block">
                        Technologies & Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2 items-center">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            title={tech}
                            aria-label={tech}
                            className="w-9 h-9 rounded-xl bg-meelo-offwhite/90 border-2 border-black/20 hover:border-black hover:bg-amber-100/70 flex items-center justify-center text-lg text-black shadow-sm hover:shadow-brutal-sm hover:scale-110 transition-all duration-150 select-none cursor-pointer group relative"
                          >
                            <span className="group-hover:scale-110 transition-transform duration-150" role="img">
                              {getTechIcon(tech)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action & Expand Button Bar */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className={`w-full py-3 px-5 rounded-2xl border-2 border-black font-extrabold text-xs flex items-center justify-between transition-all duration-150 cursor-pointer ${
                      isExpanded
                        ? "bg-black text-white shadow-brutal-sm"
                        : "bg-meelo-cardLavender/50 hover:bg-meelo-cardLavender text-black shadow-brutal-sm"
                    }`}
                  >
                    <span className="uppercase tracking-wider">
                      {isExpanded ? "Hide Project Details" : "Expand Project Details"}
                    </span>
                    {isExpanded ? (
                      <HiOutlineChevronUp className="w-4 h-4" />
                    ) : (
                      <HiOutlineChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* EXPANDABLE BOTTOM DETAILS PANEL */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t-2 border-black bg-meelo-offwhite/50 p-6 sm:p-8 space-y-6 overflow-hidden"
                    >
                      {/* Deep Overview Section */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-black/60">
                          Comprehensive Overview
                        </h4>
                        <p className="text-sm font-medium text-black/90 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Quick Specs Bento Row */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-2xl bg-meelo-cardLavender border-2 border-black space-y-1">
                          <div className="flex items-center gap-1 text-black/70 text-xs font-bold uppercase tracking-wider">
                            <HiOutlineClock className="w-3.5 h-3.5" />
                            <span>Duration</span>
                          </div>
                          <span className="text-xs sm:text-sm font-black text-black block truncate">
                            {project.duration}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-meelo-cardMint border-2 border-black space-y-1">
                          <div className="flex items-center gap-1 text-black/70 text-xs font-bold uppercase tracking-wider">
                            <HiOutlineUser className="w-3.5 h-3.5" />
                            <span>Role</span>
                          </div>
                          <span className="text-xs sm:text-sm font-black text-black block truncate">
                            {project.role}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-meelo-cardPink border-2 border-black space-y-1">
                          <div className="flex items-center gap-1 text-black/70 text-xs font-bold uppercase tracking-wider">
                            <HiOutlineUserGroup className="w-3.5 h-3.5" />
                            <span>Team</span>
                          </div>
                          <span className="text-xs sm:text-sm font-black text-black block truncate">
                            {project.team}
                          </span>
                        </div>
                      </div>

                      {/* Key Features & Deliverables Checklist */}
                      {project.features && project.features.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-black/60">
                            Key Deliverables & Features
                          </h4>
                          <div className="space-y-2 bg-white border-2 border-black rounded-2xl p-4 shadow-sm">
                            {project.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-start gap-2.5 text-xs font-bold text-black/85 leading-snug"
                              >
                                <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Bar: Live Demo Link */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t-2 border-black/10">
                        {project.link && project.link !== "#" ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="meelo-btn-dark inline-flex items-center gap-2 text-xs py-3 px-5"
                          >
                            <span>Visit Live Application</span>
                            <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-xs font-extrabold text-black/50 italic">
                            Internal Enterprise Application
                          </span>
                        )}

                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="px-4 py-2 rounded-xl border-2 border-black bg-white text-black text-xs font-black hover:bg-amber-100 transition-all cursor-pointer"
                        >
                          Collapse ↑
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls & Counter */}
        <div className="mt-16 text-center space-y-4">
          <div className="text-xs font-black uppercase tracking-wider text-black/60">
            Showing {visibleProjects.length} of {projects.length} Projects
          </div>

          {hasMore ? (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleLoadMore}
              className="meelo-btn-dark inline-flex items-center gap-2"
            >
              <span>Show More Projects</span>
              <HiOutlineChevronDown className="w-4 h-4" />
            </motion.button>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-meelo-cardMint border-2 border-black text-xs font-black uppercase tracking-wider text-black shadow-brutal-sm">
              <HiOutlineSparkles className="w-4 h-4 text-black" />
              <span>All Projects Loaded</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


