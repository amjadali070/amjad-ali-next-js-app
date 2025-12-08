"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
          >
            <span className="text-primary">03.</span> Professional Experience
          </motion.h2>
          <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(79,195,247,0.5)]" />

              <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-2 text-text/80 font-mono text-sm mt-1">
                      <HiBriefcase className="text-primary" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 md:items-end text-sm text-text/60 font-mono">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="text-secondary" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <HiLocationMarker className="text-secondary" />
                       <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-text/70 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono bg-surface border border-white/5 rounded text-primary/80"
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
