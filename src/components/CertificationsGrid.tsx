"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "@/lib/data";
import {
  HiOutlineCalendar,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { HiExternalLink } from "react-icons/hi";
import { FaAward, FaCheckDouble, FaGraduationCap } from "react-icons/fa6";
import {
  SiGoogle,
  SiUdacity,
  SiLinkedin,
  SiCoursera,
  SiMongodb,
  SiHackerrank,
} from "react-icons/si";

const INITIAL_COUNT = 6;

const getIssuerLogo = (issuer: string) => {
  const lower = issuer.toLowerCase();
  if (lower.includes("google") && !lower.includes("udacity"))
    return <SiGoogle className="text-red-500 text-xl" />;
  if (lower.includes("udacity"))
    return <SiUdacity className="text-cyan-600 text-xl" />;
  if (lower.includes("coursera"))
    return <SiCoursera className="text-blue-600 text-xl" />;
  if (lower.includes("linkedin"))
    return <SiLinkedin className="text-blue-700 text-xl" />;
  if (lower.includes("mongodb"))
    return <SiMongodb className="text-green-600 text-xl" />;
  if (lower.includes("hackerrank"))
    return <SiHackerrank className="text-emerald-600 text-xl" />;
  if (lower.includes("great learning"))
    return <FaGraduationCap className="text-amber-600 text-xl" />;
  return <FaAward className="text-black text-xl" />;
};

export default function CertificationsGrid() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleCertificates = certificationsData.slice(0, visibleCount);
  const hasMore = visibleCount < certificationsData.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, certificationsData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
    const el = document.getElementById("certifications");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* VERIFIED ACCREDITATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            Certifications & Industry Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Verified technical certifications in AI/ML, Full-Stack JavaScript, MongoDB, Node.js, and Cloud architectures.
          </motion.p>
        </div>

        {/* MODERN CERTIFICATES GRID WITH PLATFORM LOGOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          <AnimatePresence mode="popLayout">
            {visibleCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: (index % 4) * 0.08, duration: 0.35 }}
                className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform group"
              >
                <div className="space-y-4">
                  {/* Card Top Header with Official Platform Logo */}
                  <div className="flex items-center justify-between gap-3 border-b-2 border-black/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl border-2 border-black bg-amber-50 shadow-brutal-sm flex items-center justify-center flex-shrink-0">
                        {getIssuerLogo(cert.issuer)}
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-black block">
                          {cert.issuer}
                        </span>
                        {cert.featured && (
                          <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider flex items-center gap-1">
                            <HiOutlineSparkles className="w-3 h-3" /> Featured
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-black px-3 py-1 rounded-full bg-amber-50 border border-black shadow-sm flex-shrink-0">
                      <HiOutlineCalendar />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Credential ID */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-black leading-snug group-hover:text-amber-800 transition-colors">
                      {cert.title}
                    </h3>

                    {cert.credentialId && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-black/75 bg-amber-100/70 px-2.5 py-0.5 rounded-md border border-black/20 shadow-sm">
                        <FaCheckDouble className="text-emerald-700 text-xs" />
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-black/80 text-xs sm:text-sm font-semibold leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-amber-50 border border-black/20 text-xs font-bold text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Action Link */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <div className="pt-4 mt-5 border-t-2 border-black/10">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:underline cursor-pointer group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Verify Credential Certificate</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SHOW MORE / SHOW LESS BUTTON CONTROLS */}
        <div className="mt-14 text-center space-y-3">
          <div className="text-xs font-black text-black/60 uppercase tracking-wider">
            Showing {visibleCount} of {certificationsData.length} Certificates
          </div>

          <div className="flex items-center justify-center gap-3">
            {hasMore && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowMore}
                className="meelo-btn-primary gap-2"
              >
                <span>Show More Certificates</span>
                <HiOutlineChevronDown className="w-4 h-4" />
              </motion.button>
            )}

            {visibleCount > INITIAL_COUNT && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowLess}
                className="meelo-btn-dark gap-2"
              >
                <span>Show Less</span>
                <HiOutlineChevronUp className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
