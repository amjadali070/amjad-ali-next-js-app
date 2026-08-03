"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import SkillsPanel from "@/components/SkillsPanel";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationPath from "@/components/EducationPath";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import CertificationsGrid from "@/components/CertificationsGrid";
import ProcessSection from "@/components/ProcessSection";
import LinkedInRecommendations from "@/components/LinkedInRecommendations";
import ContactConsole from "@/components/ContactConsole";
import Footer from "@/components/Footer";
import profileImage from "@/app/assets/amjad.jpg";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black font-sans selection:bg-amber-200 selection:text-black relative">
      {/* Site-Wide Seamless Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      <Header />
      <main className="flex flex-col relative z-10">
        {/* Meelo Hero Section */}
        <section
          id="home"
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-transparent overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="meelo-badge">* HELLO!</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
                  I'm Amjad Ali, a{" "}
                  <span className="scribble-underline font-extrabold">
                    Senior Software Engineer
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-black/80 max-w-xl font-medium leading-relaxed pt-2">
                  Full-Stack, AI & Data Engineer with 3+ years of experience building scalable web systems, ML pipelines, microservices, data warehouses, and AI-powered applications across multiple engineering domains.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2"
              >
                <a href="#portfolio" className="meelo-btn-primary">
                  See My Works
                </a>
              </motion.div>
            </div>

            {/* Right Visual — Premium Profile Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center items-center relative"
            >
              {/* Outer decorative container */}
              <div className="relative w-[300px] sm:w-[360px]">

                {/* Background accent slab (tilted) */}
                <div className="absolute -inset-3 rounded-3xl bg-black/5 rotate-2 border border-black/10" />

                {/* Dot-grid decorative pattern */}
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                    backgroundSize: "10px 10px",
                  }}
                />
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                    backgroundSize: "10px 10px",
                  }}
                />

                {/* Main image card */}
                <div className="relative rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-black aspect-[3/4]">
                  <Image
                    src={profileImage}
                    alt="Amjad Ali — Senior Full-Stack Engineer"
                    fill
                    sizes="(max-width: 768px) 300px, 360px"
                    className="object-cover object-top"
                    priority
                  />

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Name chip at bottom inside card */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                    <div>
                      <p className="text-white font-black text-base leading-tight drop-shadow">Amjad Ali</p>
                      <p className="text-white/75 font-semibold text-[11px] tracking-wide drop-shadow">Senior Full-Stack Engineer</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-400 border border-white/30 rounded-full px-2.5 py-1 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      <span className="text-black font-black text-[10px] uppercase tracking-wider">Open to Work</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top left */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute -top-4 -left-5 bg-white border-2 border-black rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                >
                  <span className="text-lg">🥇</span>
                  <div>
                    <p className="text-[10px] font-black text-black uppercase tracking-wider leading-none">Gold Medalist</p>
                    <p className="text-[9px] text-black/60 font-semibold leading-none mt-0.5">M.S. Computer Science</p>
                  </div>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute bottom-1/4 -left-7 bg-white border-2 border-black rounded-2xl px-3 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                >
                  <span className="text-base">⚡</span>
                  <div>
                    <p className="text-[10px] font-black text-black uppercase tracking-wider leading-none">3+ Years</p>
                    <p className="text-[9px] text-black/60 font-semibold leading-none mt-0.5">Full-Stack Experience</p>
                  </div>
                </motion.div>

                {/* Floating badge — bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="absolute -bottom-5 -right-4 bg-black text-white border-2 border-black rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] flex items-center gap-2"
                >
                  <span className="text-base">🚀</span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider leading-none">25+ Projects</p>
                    <p className="text-[9px] text-white/60 font-semibold leading-none mt-0.5">Shipped & Live</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Page Sections in User Specified Order */}
        <AboutSection />
        <SkillsGrid />
        <ExperienceTimeline />
        <EducationPath />
        <SkillsPanel />
        <ProjectsGrid />
        <ProcessSection />
        <CertificationsGrid />
        <LinkedInRecommendations />
        <ContactConsole />
      </main>
      <Footer />
    </div>
  );
}
