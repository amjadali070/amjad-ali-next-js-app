"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/lib/data";
import { HiBadgeCheck, HiExternalLink, HiCalendar } from "react-icons/hi";

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
          >
            <span className="text-primary">06.</span> Certifications
          </motion.h2>
          <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.credentialUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-all group hover:-translate-y-1 block h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <HiBadgeCheck size={32} className="text-secondary group-hover:text-primary transition-colors" />
                <HiExternalLink size={20} className="text-text/40 group-hover:text-text transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>

              <div className="text-sm font-mono text-text/60 mb-1">
                {cert.issuer}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-text/40 font-mono mb-4">
                 <HiCalendar />
                 <span>{cert.date}</span>
              </div>

              <p className="text-sm text-text/70 mb-4 line-clamp-3">
                {cert.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-surface rounded text-text/50">
                        {skill}
                    </span>
                ))}
                {cert.skills.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-surface rounded text-text/50">
                        +{cert.skills.length - 3}
                    </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
