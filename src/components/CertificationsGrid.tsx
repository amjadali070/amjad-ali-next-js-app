"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/lib/data";
import {
  HiBadgeCheck,
  HiExternalLink,
  HiCalendar,
  HiShieldCheck,
  HiCheckCircle,
  HiCode,
} from "react-icons/hi";

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 195, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(79, 195, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
              <HiShieldCheck className="text-primary text-xl" />
            </div>
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              Verified Credentials
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
            <span className="text-secondary ml-3">&#123;</span>
            <span className="text-primary/40 text-2xl">&#125;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full"
          />
        </div>

        {/* Certifications Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative"
            >
              {/* Badge Card - Class/Module Style */}
              <div className="relative h-full flex flex-col bg-gradient-to-br from-surface/90 via-background/95 to-surface/80 backdrop-blur-xl rounded-xl border-2 border-primary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_rgba(79,195,247,0.3)] hover:border-primary/50 transition-all duration-500">
                {/* Header - Import Statement Style */}
                <div className="bg-background/60 border-b-2 border-primary/30 px-4 py-3 shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-purple-600 dark:text-purple-400">import</span>
                      <span className="text-yellow-600 dark:text-yellow-400">&#123;</span>
                      <HiBadgeCheck className="text-primary text-sm" />
                      <span className="text-yellow-600 dark:text-yellow-400">&#125;</span>
                      <span className="text-purple-600 dark:text-purple-400">from</span>
                      <span className="text-secondary">
                        &apos;credentials&apos;
                      </span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 border border-primary/30">
                        <HiCheckCircle className="text-primary text-xs" />
                        <span className="text-[9px] font-mono text-primary uppercase">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content - Class Definition Style */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1 space-y-4">
                    {/* Class Declaration */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-text/40">
                        <span className="text-purple-600 dark:text-purple-400">class</span>
                        <span className="text-yellow-600 dark:text-yellow-400">Certificate</span>
                        <span>&#123;</span>
                      </div>

                      <div className="pl-4 space-y-3">
                        {/* Issuer */}
                        <div className="flex items-start gap-2 text-xs font-mono">
                          <span className="text-primary flex-shrink-0">
                            issuer:
                          </span>
                          <span className="text-secondary font-semibold">
                            &quot;{cert.issuer}&quot;
                          </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-primary">
                            title:
                          </div>
                          <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors pl-2 leading-tight">
                            &quot;{cert.title}&quot;
                          </h3>
                        </div>

                        {/* Date with Icon */}
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="text-primary">issued:</span>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface/50 border border-primary/20">
                            <HiCalendar className="text-primary text-xs" />
                            <span className="text-text/70">
                              &quot;{cert.date}&quot;
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-primary">
                            description:
                          </div>
                          <p className="text-xs text-text/70 leading-relaxed pl-2 border-l-2 border-secondary/30">
                            &quot;{cert.description}&quot;
                          </p>
                        </div>

                        {/* Credential ID (if exists) */}
                        {cert.credentialId && (
                          <div className="flex items-start gap-2 text-[10px] font-mono text-text/40">
                            <span className="text-primary/60">id:</span>
                            <span className="break-all">
                              &quot;{cert.credentialId}&quot;
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

                    {/* Skills - Method/Function Style */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-purple-600 dark:text-purple-400">async</span>
                        <span className="text-yellow-600 dark:text-yellow-400">getSkills</span>
                        <span className="text-text/40">() &#123;</span>
                      </div>
                      <div className="pl-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-primary">
                          <span>return</span>
                          <span className="text-text/40">[</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-4">
                          {cert.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.08 + i * 0.04 }}
                              className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-[10px] font-mono text-primary hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                            >
                              &apos;{skill}&apos;
                            </motion.span>
                          ))}
                        </div>
                        <div className="text-xs font-mono text-text/40 pl-4">
                          ];
                        </div>
                      </div>
                      <div className="text-xs font-mono text-text/40 pl-4">
                        &#125;
                      </div>
                    </div>

                    {/* Closing Brace */}
                    <div className="text-xs font-mono text-text/40">&#125;</div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <motion.a
                      href={cert.credentialUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-background font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(79,195,247,0.4)] transition-all w-full"
                    >
                      <HiExternalLink size={14} />
                      <span>View Credential</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-background/40 border-t border-primary/20 px-4 py-2 flex items-center justify-between text-xs font-mono mt-auto">
                  <div className="flex items-center gap-3 text-text/60">
                    <div className="flex items-center gap-1.5">
                      <HiCode className="text-primary" size={12} />
                      <span>TypeScript</span>
                    </div>
                    <span>{cert.skills.length} skills</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              </div>

              {/* Floating Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-3 -right-3 p-2 rounded-lg bg-background border-2 border-primary/40 shadow-lg group-hover:border-primary/70 transition-all"
              >
                <HiShieldCheck className="text-primary text-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
