"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiTerminal,
} from "react-icons/hi";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <HiTerminal className="text-primary text-2xl" />
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              Work History
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">03.</span> Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute left-[-7px] md:left-[25px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(79,195,247,0.6)] border-2 border-background z-10"
                />

                {/* Experience Card */}
                <div className="relative group">
                  {/* Terminal Window Header */}
                  <div className="absolute -top-8 left-0 right-0 flex items-center gap-2 px-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs font-mono text-text/40 ml-2">
                      experience_{index + 1}.sh
                    </div>
                  </div>

                  <div className="glass-panel p-8 rounded-2xl border-2 border-white/5 hover:border-primary/30 transition-all duration-300 mt-6">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6 pb-6 border-b border-white/5">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                            <HiBriefcase size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300 mb-2">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-2 text-text/90 font-bold text-base">
                              <span className="text-secondary">@</span>
                              <span>{item.company}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col gap-3 lg:items-end">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-white/5 text-sm font-mono text-text/80">
                          <HiCalendar className="text-primary" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-white/5 text-sm font-mono text-text/80">
                          <HiLocationMarker className="text-secondary" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text/80 mb-6 leading-relaxed text-base">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary/60 uppercase tracking-wider">
                        <span className="text-primary">$</span>
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-mono bg-gradient-to-br from-surface via-surface to-surface/50 border border-primary/20 rounded-md text-primary/90 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Accent Line */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
