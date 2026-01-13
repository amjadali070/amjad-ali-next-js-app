"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/lib/data";
import {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative"
            >
              {/* Certificate Card */}
              <div className="relative h-full bg-slate-800 dark:bg-slate-900 rounded-lg border-4 border-slate-700 dark:border-slate-600 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(79,195,247,0.3)] transition-all duration-500">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-slate-600 dark:border-slate-500" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-slate-600 dark:border-slate-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-slate-600 dark:border-slate-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-slate-600 dark:border-slate-500" />

                {/* Inner Certificate Border */}
                <div className="absolute inset-3 border-2 border-dashed border-slate-600 dark:border-slate-700 rounded pointer-events-none" />

                {/* Header Section */}
                <div className="relative pt-8 pb-4 px-6 text-center border-b-2 border-slate-700 dark:border-slate-600">
                  {/* Verified Badge */}
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-md">
                      <HiCheckCircle className="text-slate-900 text-sm" />
                      <span className="text-[10px] font-bold text-slate-900 uppercase">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Issuer Logo/Badge */}
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                      <HiShieldCheck className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Issuer Name */}
                  <div className="mb-2">
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                      Issued by
                    </p>
                    <h4 className="text-sm font-bold text-white dark:text-slate-100 tracking-wide">
                      {cert.issuer}
                    </h4>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6 space-y-4">
                  {/* Certificate Title */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-600">
                      <span className="text-purple-400 dark:text-purple-500">
                        &lt;CertificateName&gt;
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white dark:text-slate-100 leading-tight px-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-600">
                      <span className="text-purple-400 dark:text-purple-500">
                        &lt;/CertificateName&gt;
                      </span>
                    </div>
                  </div>

                  {/* Recipient Section */}
                  <div className="text-center py-3 px-4 bg-slate-700/50 dark:bg-slate-800/50 rounded-lg border border-slate-600 dark:border-slate-700">
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">
                      const{" "}
                      <span className="text-purple-400 dark:text-purple-500">
                        recipient
                      </span>{" "}
                      =
                    </p>
                    <p className="text-sm font-bold text-white dark:text-slate-100">
                      <span className="text-secondary">
                        &quot;Amjad Ali&quot;
                      </span>
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <HiCalendar className="text-primary" />
                    <span className="font-mono text-slate-300 dark:text-slate-400">
                      const{" "}
                      <span className="text-purple-400 dark:text-purple-500">
                        date
                      </span>{" "}
                      ={" "}
                      <span className="text-secondary">
                        &quot;{cert.date}&quot;
                      </span>
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-600 text-center">
                      Skills Acquired
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {cert.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 + i * 0.04 }}
                          className="px-2 py-1 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded text-[10px] font-mono text-slate-300 dark:text-slate-400 hover:border-primary hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="pt-3 border-t border-slate-700 dark:border-slate-600">
                      <p className="text-[9px] font-mono text-slate-500 dark:text-slate-600 text-center break-all">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  )}

                  {/* Digital Signature */}
                  <div className="pt-3 border-t-2 border-slate-700 dark:border-slate-600">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-600">
                        Digital Signature
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                    <div className="text-center font-mono text-[10px] text-slate-500 dark:text-slate-600 break-all px-2">
                      {`SHA256:${(index + 1)
                        .toString(36)
                        .padStart(13, "0")
                        .substring(0, 13)}...`}
                    </div>
                  </div>

                  {/* View Credential Button */}
                  <motion.a
                    href={cert.credentialUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(79,195,247,0.5)] transition-all w-full mt-4"
                  >
                    <HiExternalLink size={14} />
                    <span>View Credential</span>
                  </motion.a>
                </div>

                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234FC3F7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 group-hover:via-white/10 to-transparent transition-all duration-700 pointer-events-none" />
              </div>

              {/* Floating Code Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-3 -right-3 p-2.5 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-xl group-hover:shadow-2xl transition-all z-10"
              >
                <HiCode className="text-white text-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
