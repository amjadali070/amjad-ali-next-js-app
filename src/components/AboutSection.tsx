"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-mono text-text mb-6"
            >
              <span className="text-primary">01.</span> About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text/80 space-y-6 leading-relaxed"
            >
              <p>
                Hello! I&apos;m Amjad Ali, a Full Stack Software Engineer who
                enjoys bridging the gap between engineering and design. My
                journey in web development began with a curiosity for how things
                work on the internet, which has evolved into a passion for
                building robust, scalable applications.
              </p>
              <p>
                I specialize in the MERN stack and Next.js, crafting efficient
                solutions for complex problems. Whether it&apos;s developing
                AI-powered dashboards, CRM systems, or interactive 3D web
                experiences, I focus on delivering high-quality code and
                exceptional user experiences.
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of
                working on a variety of challenging projects that have sharpened
                my skills in both frontend and backend development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary hover:translate-x-1 transition-all"
              >
                <span>Start a conversation</span>
                <HiArrowRight />
              </Link>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-6 glass-panel rounded-xl font-mono text-sm leading-6 overflow-hidden md:max-w-md mx-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-6 bg-surface border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-text/40">
                  developer.json
                </span>
              </div>

              <div className="mt-4 text-code">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-green-400">&quot;Amjad Ali&quot;</span>,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-green-400">
                    &quot;Full Stack Engineer&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">skills: [</p>
                <p className="pl-8">
                  <span className="text-green-400">&quot;React&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Next.js&quot;</span>,
                </p>
                <p className="pl-8">
                  <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-green-400">&quot;TypeScript&quot;</span>
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  hardWorker: <span className="text-blue-400">true</span>,
                </p>
                <p className="pl-4">
                  quickLearner: <span className="text-blue-400">true</span>,
                </p>
                <p className="pl-4">
                  problemSolver: <span className="text-blue-400">true</span>
                </p>
                <p>&#125;;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
