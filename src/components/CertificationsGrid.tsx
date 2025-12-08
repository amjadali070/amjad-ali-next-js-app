"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/lib/data";
import {
  HiBadgeCheck,
  HiExternalLink,
  HiCalendar,
  HiShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";

export default function CertificationsGrid() {
  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-surface/30 to-transparent"
    >
      {/* Background Effects - Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <HiShieldCheck className="text-secondary text-2xl" />
            <span className="text-xs font-mono text-secondary/60 tracking-wider uppercase">
              Verified Skills
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">06.</span> Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-secondary via-primary to-transparent rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.credentialUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative block h-full"
            >
              {/* Main Card */}
              <div className="relative h-full flex flex-col glass-panel p-6 rounded-2xl border-2 border-white/5 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="relative flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 group-hover:border-secondary/50 transition-colors"
                  >
                    <HiBadgeCheck
                      size={28}
                      className="text-secondary group-hover:text-primary transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    className="p-2 rounded-lg bg-surface/50 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all"
                  >
                    <HiExternalLink
                      size={18}
                      className="text-text/40 group-hover:text-primary transition-colors"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  {/* Credential ID Badge */}
                  {cert.credentialId && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 w-fit mb-3">
                      <HiCheckCircle className="text-primary text-xs" />
                      <span className="text-[10px] font-mono text-primary/80 uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-secondary">@</span>
                    <div className="text-sm font-mono text-text/70 font-semibold">
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/50 border border-white/5 w-fit mb-4">
                    <HiCalendar className="text-primary text-sm" />
                    <span className="text-xs font-mono text-text/60">
                      {cert.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text/70 mb-4 leading-relaxed line-clamp-3 flex-1">
                    {cert.description}
                  </p>

                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent mb-4" />

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-surface/60 border border-white/10 rounded-md text-text/60 hover:border-primary/30 hover:text-primary transition-colors duration-200 cursor-default font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-md text-primary/70 font-mono">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
