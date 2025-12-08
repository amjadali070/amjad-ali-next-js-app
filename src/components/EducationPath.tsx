"use client";

import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import { HiAcademicCap, HiCalendar, HiLocationMarker } from "react-icons/hi";

export default function EducationPath() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
          >
            <span className="text-primary">04.</span> Education
          </motion.h2>
          <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl relative group hover:bg-surface/60 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <HiAcademicCap size={100} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <HiAcademicCap size={24} />
                  <span className="font-mono text-sm">Degree Program</span>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {item.degree}
                </h3>
                
                <p className="text-lg text-secondary mb-4 font-mono">
                  {item.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-text/60 font-mono mb-6">
                  <div className="flex items-center gap-2">
                    <HiCalendar />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiLocationMarker />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-text/70 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {item.achievements && (
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-text/80 font-mono">Key Achievements:</p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
