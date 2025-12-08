"use client";

import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import {
  HiAcademicCap,
  HiCalendar,
  HiLocationMarker,
  HiLightningBolt,
  HiCode,
} from "react-icons/hi";

export default function EducationPath() {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-surface/20 via-surface/40 to-surface/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <HiCode className="text-secondary text-2xl" />
            <span className="text-xs font-mono text-secondary/60 tracking-wider uppercase">
              Academic Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">04.</span> Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-secondary via-primary to-transparent rounded-full"
          />
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="relative group"
            >
              {/* Terminal Header */}
              <div className="absolute -top-3 left-6 right-6 flex items-center justify-between px-4 py-2 rounded-t-xl bg-surface/80 backdrop-blur-sm border border-white/10 border-b-0 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-text/40">
                  education_{index === 0 ? "masters" : "bachelors"}.json
                </div>
              </div>

              {/* Main Card */}
              <div className="relative glass-panel p-8 rounded-3xl border-2 border-white/10 group-hover:border-secondary/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(79,195,247,0.2)] overflow-hidden mt-8">
                {/* Background Icon */}
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <HiAcademicCap size={200} className="text-primary" />
                </div>

                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6"
                  >
                    <HiAcademicCap className="text-primary text-xl" />
                    <span className="font-mono text-sm text-primary">
                      {index === 0 ? "Master's Degree" : "Bachelor's Degree"}
                    </span>
                    {index === 0 && (
                      <HiLightningBolt className="text-yellow-400 text-sm" />
                    )}
                  </motion.div>

                  {/* Degree Title */}
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-secondary text-lg">@</span>
                    <p className="text-lg text-secondary/90 font-mono font-semibold">
                      {item.institution}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/60 border border-white/5 text-sm font-mono text-text/80">
                      <HiCalendar className="text-primary" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/60 border border-white/5 text-sm font-mono text-text/80">
                      <HiLocationMarker className="text-secondary" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent mb-6" />

                  {/* Description */}
                  <p className="text-text/80 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary/70 uppercase tracking-wider">
                        <span className="text-primary">{">"}</span>
                        <span>Key Highlights</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-surface/40 border border-white/5 hover:border-primary/20 transition-colors duration-200 group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary mt-1.5" />
                            <span className="text-sm text-text/70 leading-snug flex-1">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
