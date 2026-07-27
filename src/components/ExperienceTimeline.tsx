"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experienceData } from "@/lib/data";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineMapPin,
  HiCheckCircle,
  HiOutlineSparkles,
  HiOutlineFolderOpen,
  HiOutlineCodeBracket,
  HiOutlineAcademicCap,
  HiStar,
  HiCheckBadge,
  HiOutlineRectangleGroup,
  HiOutlineQueueList,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export default function ExperienceTimeline() {
  const [viewMode, setViewMode] = useState<"deck" | "timeline">("deck");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedItem = experienceData[selectedIndex] || experienceData[0];

  const testimonials = [
    {
      quote:
        "Amjad is an exceptional full-stack software engineer. He brought immense technical clarity to our CRM and insurance API integrations, scaling throughput seamlessly.",
      author: "Nikolas Brooten",
      role: "Engineering Director",
      stars: 5,
    },
  ];

  const stats = [
    { label: "Experience", val: "3+ Years", icon: "🚀" },
    { label: "Engineering Roles", val: "4 Positions", icon: "🏢" },
    { label: "Enterprise Apps", val: "10+ Delivered", icon: "⚡" },
    { label: "Global Reach", val: "PK & UAE", icon: "🌐" },
  ];

  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* CAREER EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            My Work Experience & Roles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Select a company to view full responsibilities, key projects delivered, and tech stack in detail.
          </motion.p>
        </div>

        {/* Quick Stats Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full mb-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((st) => (
            <div
              key={st.label}
              className="bg-white border-2 border-black rounded-2xl p-4 text-center shadow-brutal-sm hover:-translate-y-1 transition-transform"
            >
              <div className="text-2xl mb-1">{st.icon}</div>
              <div className="text-xl sm:text-2xl font-black text-black">{st.val}</div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/60 pt-0.5">
                {st.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* View Mode Toggle Bar (Interactive Switcher vs Stepper Timeline) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white border-2 border-black rounded-2xl p-1.5 shadow-brutal-sm inline-flex items-center gap-1.5">
            <button
              onClick={() => setViewMode("deck")}
              className={`px-5 py-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === "deck"
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-transparent text-black border-transparent hover:bg-meelo-cardLavender"
              }`}
            >
              <HiOutlineRectangleGroup className="w-4 h-4" />
              <span>Interactive Switcher</span>
            </button>

            <button
              onClick={() => setViewMode("timeline")}
              className={`px-5 py-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === "timeline"
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-transparent text-black border-transparent hover:bg-meelo-cardLavender"
              }`}
            >
              <HiOutlineQueueList className="w-4 h-4" />
              <span>Timeline List</span>
            </button>
          </div>
        </motion.div>

        {/* MODE 1: INTERACTIVE COMPANY DECK (DEFAULT - 100% CLEAN UX) */}
        {viewMode === "deck" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start w-full">
            {/* Left Column: Company Switcher Tabs with scrollbar hidden & padded container */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3.5 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1.5">
              {experienceData.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                const isPresent = idx === 0;

                return (
                  <button
                    key={`${item.company}-${idx}`}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 border-black transition-all duration-150 cursor-pointer flex items-center justify-between gap-2.5 flex-shrink-0 min-w-[260px] lg:min-w-0 overflow-hidden ${
                      isSelected
                        ? `${item.logoBg || "bg-meelo-cardLavender"} shadow-brutal translate-x-1 ring-2 ring-black/20`
                        : "bg-white hover:bg-meelo-offwhite shadow-brutal-sm opacity-90 hover:opacity-100"
                    }`}
                  >
                    {/* Active Tab Accent Bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black" />
                    )}

                    <div className="flex items-center gap-3 relative z-0 pl-1.5 min-w-0 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl border-2 border-black ${item.iconBg || "bg-white"} shadow-sm flex items-center justify-center p-1.5 flex-shrink-0 overflow-hidden relative`}
                      >
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <span className="font-black text-xs text-black">{item.shortCompany}</span>
                        )}
                      </div>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h4 className="text-sm font-black text-black leading-snug break-words">
                            {item.company}
                          </h4>
                          {isPresent && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-400 border border-black text-[9px] font-black text-black uppercase tracking-wider flex items-center gap-1 shadow-sm flex-shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                              Present
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-bold text-black/75 truncate">
                          {item.position}
                        </p>
                        <span className="text-[11px] font-extrabold text-black/60 block truncate">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="px-2.5 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex-shrink-0">
                        Viewing
                      </span>
                    ) : (
                      <HiOutlineArrowRight className="w-4.5 h-4.5 text-black opacity-40 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Focused Role Detail Showcase Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.company}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-meelo-offwhite border-2 border-black rounded-3xl p-6 sm:p-8 shadow-brutal space-y-6"
                >
                  {/* Stage Header */}
                  <div className="space-y-4 border-b-2 border-black/10 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl border-2 border-black ${selectedItem.iconBg || "bg-white"} shadow-brutal-sm flex items-center justify-center p-2 flex-shrink-0 overflow-hidden relative`}
                        >
                          {selectedItem.logo ? (
                            <Image
                              src={selectedItem.logo}
                              alt={selectedItem.company}
                              width={56}
                              height={56}
                              className="object-contain w-full h-full"
                            />
                          ) : (
                            <span className="font-black text-lg text-black">{selectedItem.shortCompany}</span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl sm:text-3xl font-black text-black">
                              {selectedItem.position}
                            </h3>
                          </div>
                          <div className="text-base font-extrabold text-black/80 flex items-center gap-1.5 pt-0.5">
                            <HiOutlineBriefcase className="w-4.5 h-4.5 text-black" />
                            <span>{selectedItem.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlight Badge for Present Role */}
                      {selectedIndex === 0 && (
                        <span className="self-start sm:self-center px-3 py-1 rounded-full bg-emerald-400 border-2 border-black text-xs font-black text-black uppercase tracking-wider shadow-brutal-sm flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                          Current Organization
                        </span>
                      )}
                    </div>

                    {/* Meta Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="px-3.5 py-1 rounded-full bg-meelo-cardLavender border-2 border-black text-xs font-black text-black shadow-brutal-sm flex items-center gap-1">
                        <HiOutlineClock className="w-3.5 h-3.5" />
                        <span>{selectedItem.totalDuration}</span>
                      </span>

                      <span className="px-3.5 py-1 rounded-full bg-white border-2 border-black text-xs font-extrabold text-black shadow-brutal-sm">
                        {selectedItem.duration}
                      </span>

                      <span className="px-3.5 py-1 rounded-full bg-meelo-cardMint border-2 border-black text-xs font-extrabold text-black shadow-brutal-sm flex items-center gap-1">
                        <HiOutlineMapPin className="w-3.5 h-3.5" />
                        <span>{selectedItem.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Key Contributions List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/60 flex items-center gap-1.5">
                      <HiOutlineSparkles className="text-black" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>
                    <div className="grid gap-3">
                      {selectedItem.responsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white border-2 border-black/20 rounded-2xl p-4 text-sm font-semibold text-black/90 leading-relaxed shadow-sm"
                        >
                          <HiCheckCircle className="text-black flex-shrink-0 mt-0.5 text-lg" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Projects Delivered */}
                  {selectedItem.projects && selectedItem.projects.length > 0 && (
                    <div className="space-y-3 pt-3 border-t border-black/10">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/60 flex items-center gap-1">
                        <HiOutlineFolderOpen className="text-black" />
                        <span>Key Projects Delivered:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.projects.map((proj) => (
                          <span
                            key={proj}
                            className="px-3 py-1.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black shadow-brutal-sm"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-black/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-black/60 mr-1 flex items-center gap-1">
                      <HiOutlineCodeBracket className="text-black" />
                      <span>Technologies:</span>
                    </span>
                    {selectedItem.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white border-2 border-black text-xs font-bold text-black shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* MODE 2: CLEAN STEPPER TIMELINE VIEW */}
        {viewMode === "timeline" && (
          <div className="w-full space-y-8">
            {experienceData.map((item, idx) => (
              <motion.div
                key={`${item.company}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-meelo-offwhite border-2 border-black rounded-3xl p-6 sm:p-8 shadow-brutal space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl border-2 border-black ${item.iconBg || "bg-white"} shadow-brutal-sm flex items-center justify-center p-2 flex-shrink-0 overflow-hidden relative`}
                    >
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.company}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <span className="font-black text-base text-black">{item.shortCompany}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-black">{item.position}</h3>
                      <div className="text-sm font-extrabold text-black/75 flex items-center gap-1 pt-0.5">
                        <HiOutlineBriefcase className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {idx === 0 && (
                      <span className="px-3 py-1 rounded-full bg-emerald-400 border-2 border-black text-xs font-black text-black uppercase tracking-wider shadow-brutal-sm flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                        Present
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-meelo-cardLavender border-2 border-black text-xs font-black text-black shadow-brutal-sm">
                      {item.totalDuration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border-2 border-black text-xs font-extrabold text-black shadow-brutal-sm">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-black/85 leading-relaxed"
                    >
                      <HiCheckCircle className="text-black flex-shrink-0 mt-0.5 text-base" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-white border-2 border-black text-xs font-bold text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

