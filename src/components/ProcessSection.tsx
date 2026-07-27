"use client";

import { motion } from "framer-motion";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePuzzlePiece,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineArrowRight,
  HiOutlineArrowDown,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      subtitle: "Requirements & Roadmap",
      description:
        "Analyzing business goals, technical constraints, user stories, and system metrics to define a clear architecture blueprint.",
      bgColor: "bg-meelo-cardLavender",
      icon: <HiOutlineMagnifyingGlass className="text-purple-800 text-xl" />,
      output: "Roadmap & Technical Spec",
    },
    {
      number: "02",
      title: "Architecture & Design",
      subtitle: "Schemas & UI Systems",
      description:
        "Designing relational & NoSQL schemas, REST/GraphQL API contracts, microservices, and responsive user interfaces.",
      bgColor: "bg-meelo-cardMint",
      icon: <HiOutlinePuzzlePiece className="text-emerald-800 text-xl" />,
      output: "Architecture Blueprint",
    },
    {
      number: "03",
      title: "Engineering & APIs",
      subtitle: "Full-Stack Implementation",
      description:
        "Building modular full-stack code, integrating payment gateways, AI models, and real-time Socket.io services.",
      bgColor: "bg-meelo-cardBlue",
      icon: <HiOutlineCodeBracket className="text-blue-800 text-xl" />,
      output: "Functional Codebase",
    },
    {
      number: "04",
      title: "Testing & QA Audit",
      subtitle: "Security & Performance",
      description:
        "Conducting automated unit & end-to-end tests (Jest/Cypress), load testing, vulnerability scans, and bug resolution.",
      bgColor: "bg-meelo-cardPink",
      icon: <HiOutlineShieldCheck className="text-rose-800 text-xl" />,
      output: "Verified Release Candidate",
    },
    {
      number: "05",
      title: "Deployment & Scaling",
      subtitle: "CI/CD & Cloud Telemetry",
      description:
        "Deploying to AWS/GCP/Vercel via CI/CD pipelines, configuring database indexing, SSL security, and telemetry.",
      bgColor: "bg-meelo-cardPeach",
      icon: <HiOutlineRocketLaunch className="text-amber-800 text-xl" />,
      output: "Production Launch",
    },
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* DEVELOPMENT WORKFLOW</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            How I Bring Ideas to Production
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            A structured, 5-phase software engineering process engineered for reliability, security, and high performance.
          </motion.p>
        </div>

        {/* DESKTOP HORIZONTAL CONNECTED PROCESS FLOW (Visible on lg screens) */}
        <div className="hidden lg:block relative">
          {/* Continuous Flow Connector Bar */}
          <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-black/20 z-0 border-t-2 border-dashed border-black/40" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex flex-col justify-between h-full group"
              >
                {/* Step Header Badge Node */}
                <div className="flex flex-col items-center mb-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl border-2 border-black ${step.bgColor} shadow-brutal flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform duration-200 relative z-10`}
                  >
                    {step.icon}
                  </div>
                  <span className="mt-2 px-3 py-0.5 rounded-full bg-white border-2 border-black text-xs font-black text-black shadow-brutal-sm">
                    Phase {step.number}
                  </span>

                  {/* Horizontal Arrow Indicator to Next Step */}
                  {idx < steps.length - 1 && (
                    <div className="absolute -right-5 top-6 z-20 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-black shadow-sm">
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Phase Content Card */}
                <div className="bg-white border-2 border-black rounded-3xl p-5 shadow-brutal hover:shadow-brutal-lg transition-all duration-200 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-black tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-black/50">
                      {step.subtitle}
                    </p>
                    <p className="text-xs font-semibold text-black/80 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Tag */}
                  <div className="pt-3 border-t-2 border-black/10 flex items-center gap-1.5 text-[11px] font-black text-black">
                    <HiOutlineCheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{step.output}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL CONNECTED FLOW (Visible on sm/md screens) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[1.65rem] sm:left-[2.15rem] top-6 bottom-6 w-1 bg-black/20 border-l-2 border-dashed border-black/40 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="relative z-10 flex items-start gap-4 sm:gap-6"
            >
              {/* Step Node Icon Badge */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-black ${step.bgColor} shadow-brutal flex items-center justify-center flex-shrink-0 relative z-10`}
              >
                {step.icon}
              </div>

              {/* Card Body */}
              <div className="bg-white border-2 border-black rounded-3xl p-5 sm:p-6 shadow-brutal flex-1 space-y-3">
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/10 pb-2">
                  <span className="px-3 py-0.5 rounded-full bg-amber-100 border border-black text-xs font-black text-black">
                    Phase {step.number}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-black text-black">{step.title}</h3>
                <p className="text-sm font-semibold text-black/80 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-black text-black">
                  <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Output: {step.output}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-meelo-cardBlue border-2 border-black rounded-3xl p-6 sm:p-8 shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-black">
              Ready to execute your project with precision?
            </h4>
            <p className="text-sm font-semibold text-black/80">
              Let’s collaborate and turn complex technical requirements into a launched product.
            </p>
          </div>
          <a href="#contact" className="meelo-btn-dark flex-shrink-0">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

