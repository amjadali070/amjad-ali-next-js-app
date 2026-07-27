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
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.1]">
                  I’m Amjad Ali, a{" "}
                  <span className="scribble-underline font-extrabold">
                    full-stack engineer.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-black/80 max-w-xl font-medium leading-relaxed pt-2">
                  Full-stack software engineer with 3+ years of experience building and shipping scalable MERN stack web applications, microservices, and AI-powered systems.
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

            {/* Right Visual Arch Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              {/* Arched Profile Frame */}
              <div className="relative w-[300px] sm:w-[360px] h-[420px] sm:h-[480px] rounded-t-[180px] border-2 border-black bg-black flex items-end justify-center shadow-brutal-lg overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Amjad Ali"
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  className="object-cover object-top"
                  priority
                />
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
