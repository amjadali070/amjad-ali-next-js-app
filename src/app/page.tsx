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
        className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_40px_rgba(79,195,247,0.4)]"
      >
        <Image
          src={profileImage}
          alt="Amjad Ali"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Animated Ring Around Image */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 m-auto w-[270px] h-[270px] md:w-[390px] md:h-[390px] rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border pointer-events-none"
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
            {/* Left Side - Terminal Output Style */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Terminal Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 font-mono text-sm"
              >
                <span className="text-green-400">●</span>
                <span className="text-text/60">amjad@portfolio</span>
                <span className="text-primary">~</span>
                <span className="text-text/60">$</span>
              </motion.div>

              {/* Command Output */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 font-mono"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-text/60">whoami</span>
                </div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                  <span className="block text-text">
                    Amjad A<span className="text-primary">.</span>
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary text-3xl md:text-5xl mt-2">
                    Software Engineer
                  </span>
                </motion.h1>
              </motion.div>

              {/* Console Log Output */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 font-mono text-sm"
              >
                <div className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0">$</span>
                  <span className="text-text/60">cat bio.txt</span>
                </div>
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <p className="text-text/80 leading-relaxed">
                    <span className="text-blue-400">&gt;</span> Building
                    pixel-perfect, accessible, and performant web experiences
                    using modern technologies.
                  </p>
                  <p className="text-text/70">
                    <span className="text-yellow-400">⚡</span> Specialized in
                    MERN stack, Next.js, and TypeScript
                  </p>
                </div>
              </motion.div>

              {/* Version Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="px-3 py-1.5 rounded-md bg-surface/50 border border-primary/20 text-primary text-xs font-mono flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>v2.0.25</span>
                </div>
                <div className="px-3 py-1.5 rounded-md bg-surface/50 border border-secondary/20 text-secondary text-xs font-mono">
                  Status: Available
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="group px-8 py-3 bg-gradient-to-r from-primary via-secondary to-primary text-background font-mono font-bold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(79,195,247,0.5)] transition-all flex items-center gap-2"
                >
                  <span className="text-background/80">$</span>
                  <span>view --projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="/Amjad_Ali_Resume.pdf"
                  target="_blank"
                  className="px-8 py-3 bg-background/50 border-2 border-primary/40 text-primary rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all flex items-center gap-2 font-mono font-bold"
                >
                  <HiDownload />
                  <span>download resume</span>
                </a>
              </motion.div>

              {/* Terminal Footer Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2 text-xs font-mono text-text/40 pt-2"
              >
                <span className="text-green-400">tip:</span>
                <span>Press ↓ to explore more</span>
              </motion.div>
            </div>

            {/* Right Side - Code Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative"
            >
              {/* Code Editor Window */}
              <div className="relative h-full bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-lg border-2 border-primary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Editor Header */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-primary">
                      index.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-text/40 font-mono">Live</span>
                  </div>
                </div>

                {/* Code Content with Profile Image */}
                <div className="relative h-full p-6 flex items-center justify-center">
                  {/* Animated Code Lines Background */}
                  <div className="absolute inset-0 p-6 font-mono text-xs text-text/20 space-y-2 overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <span className="text-purple-400/40">import</span>{" "}
                      <span className="text-text/20">
                        &#123; Engineer &#125; from
                      </span>{" "}
                      <span className="text-green-400/40">
                        &apos;@/team&apos;
                      </span>
                      ;
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <span className="text-purple-400/40">import</span>{" "}
                      <span className="text-text/20">
                        &#123; Skills &#125; from
                      </span>{" "}
                      <span className="text-green-400/40">
                        &apos;@/core&apos;
                      </span>
                      ;
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className="pt-4"
                    >
                      <span className="text-blue-400/40">
                        export default function
                      </span>{" "}
                      <span className="text-yellow-400/40">AmjadAli</span>
                      <span className="text-text/20">() &#123;</span>
                    </motion.div>
                  </div>

                  {/* Central Profile Image */}
                  <div className="relative z-10">
                    <HeroGraphic />
                  </div>

                  {/* Bottom Code Lines */}
                  <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-text/20 space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <span className="text-text/20"> </span>
                      <span className="text-purple-400/40">return</span>{" "}
                      <span className="text-text/20">&lt;</span>
                      <span className="text-blue-400/40">Solution</span>{" "}
                      <span className="text-green-400/40">quality</span>=
                      <span className="text-yellow-400/40">
                        &quot;high&quot;
                      </span>{" "}
                      <span className="text-text/20">/&gt;;</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      <span className="text-text/20">&#125;</span>
                    </motion.div>
                  </div>

                  {/* Floating Tech Badges - Repositioned */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-20 left-6 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-md text-xs font-mono text-primary shadow-lg"
                  >
                    Next.js 15
                  </motion.div>
                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-20 right-6 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-secondary/30 rounded-md text-xs font-mono text-secondary shadow-lg"
                  >
                    TypeScript
                  </motion.div>
                  <motion.div
                    animate={{ x: [-8, 8, -8] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-1/2 right-6 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-purple-400/30 rounded-md text-xs font-mono text-purple-400 shadow-lg"
                  >
                    React
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-text/30 hover:text-primary transition-colors cursor-pointer"
          >
            <HiArrowDown size={24} />
          </motion.a>
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
