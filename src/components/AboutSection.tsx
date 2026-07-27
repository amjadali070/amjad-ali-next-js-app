"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    {
      value: "3+ Yrs",
      label: "Full-Stack Experience",
      bgColor: "bg-meelo-cardLavender",
    },
    {
      value: "10+",
      label: "Enterprise Projects",
      bgColor: "bg-meelo-cardMint",
    },
    {
      value: "88.9%",
      label: "AI Legal NLP TSR",
      bgColor: "bg-meelo-cardPink",
    },
    {
      value: "<100ms",
      label: "Sub-100ms API Latency",
      bgColor: "bg-meelo-cardBlue",
    },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side - Neo-Brutalist Stat Bento Cards Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          {/* 2x2 Bento Stat Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl border-2 border-black ${stat.bgColor} shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-[transform,box-shadow] duration-150 ease-out gpu-layer flex flex-col justify-between min-h-[140px]`}
              >
                <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-black/80 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Bio Content */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* ABOUT AMJAD ALI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight"
          >
            Senior Full-Stack & AI Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4 text-black/80 font-medium text-base sm:text-lg leading-relaxed"
          >
            <p>
              Full Stack Software Engineer with <strong>3+ years of experience</strong> designing, building, and shipping scalable web applications on the MERN stack (MongoDB, Express, React, Node.js) — from responsive front-end interfaces to microservices, databases, and cloud deployment.
            </p>
            <p>
              Track record of improving system performance and team efficiency through optimized APIs, database queries, and CI/CD automation. Skilled in TypeScript, RESTful/microservices architecture, PostgreSQL, and Docker, with experience owning features from system design through production deployment in Agile environments. Also builds AI/LLM-powered features using OpenAI, Gemini, RAG pipelines, LangChain, and pgvector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <a href="#contact" className="meelo-btn-primary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
