"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsPanel from "@/components/SkillsPanel";
import ContactConsole from "@/components/ContactConsole";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationPath from "@/components/EducationPath";
import CertificationsGrid from "@/components/CertificationsGrid";
// import ArticlesList from "@/components/ArticlesList";
// import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import profileImage from "@/app/assets/amjadali.png";

// Lightweight Hero Graphic Component
const HeroGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-secondary/20"
      />
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-primary/10 border-dotted"
      />

      {/* Glowing Background */}
      <div className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse" />

      {/* Profile Image Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_40px_rgba(79,195,247,0.4)] backdrop-blur-sm"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full group"
        >
          <Image
            src={profileImage}
            alt="Amjad Ali"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - disappears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />
        </motion.div>
      </motion.div>

      {/* Animated Ring Around Image */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 m-auto w-[270px] h-[270px] md:w-[390px] md:h-[390px] rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border"
        style={{
          background:
            "linear-gradient(45deg, rgba(79,195,247,0.5), rgba(171,71,188,0.5), rgba(79,195,247,0.5))",
          padding: "2px",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 right-10 px-4 py-2 glass-panel rounded-lg text-xs font-mono text-primary"
      >
        Next.js 15
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 -left-4 px-4 py-2 glass-panel rounded-lg text-xs font-mono text-secondary"
      >
        TypeScript
      </motion.div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/20 selection:text-primary">
      <Header />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section
          id="home"
          className="relative pt-24 min-h-screen flex flex-col justify-center overflow-hidden"
        >
          {/* Background Gradients - Reduced opacity for performance */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="order-2 lg:order-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-xs font-mono mb-2"
              >
                v2.0.25 Portfolio
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                <span className="block text-text">
                  Amjad A<span className="text-primary">.</span>
                </span>
                <span className="block text-text/50">Software Engineer</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-text/70 max-w-lg leading-relaxed"
              >
                I build pixel-perfect, accessible, and performant web
                experiences using modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Work
                </a>
                <a
                  href="/Amjad_Ali_Resume.pdf"
                  target="_blank"
                  className="px-8 py-3 bg-surface border border-white/10 text-text rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <HiDownload />
                  <span>Resume</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative flex items-center justify-center"
            >
              <HeroGraphic />
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-text/30">
            <HiArrowDown size={24} />
          </div>
        </section>

        <AboutSection />
        <SkillsPanel />
        <ExperienceTimeline />
        <EducationPath />
        <ProjectsGrid />
        <CertificationsGrid />
        {/* <ArticlesList /> */}
        {/* <TestimonialsCarousel /> */}
        <ContactConsole />
      </main>

      <Footer />
    </div>
  );
}
