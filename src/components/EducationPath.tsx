"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiCheckCircle,
  HiOutlineSparkles,
  HiOutlineBuildingLibrary,
  HiOutlineBookOpen,
  HiOutlineCpuChip,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineStar,
} from "react-icons/hi2";
import { FaGraduationCap, FaMedal, FaAward, FaBuildingColumns } from "react-icons/fa6";

export default function EducationPath() {
  const educationList = [
    {
      id: "mscs",
      degree: "M.S. Computer Science Gold Medalist 🥇",
      shortDegree: "MSCS",
      institution: "Mohammad Ali Jinnah University (MAJU)",
      location: "Karachi, Pakistan",
      duration: "September 2024 – July 2026",
      gpa: "CGPA 3.97 / 4.00 • Gold Medalist",
      status: "Graduated • Gold Medalist",
      badgeColor: "bg-amber-400",
      sealBadge: "GOLD MEDALIST 🥇 & 100% MERIT SCHOLAR",
      description:
        "Awarded Gold Medal in M.S. Computer Science for highest academic achievement. Recipient of 100% Merit Scholarship (Full Tuition Waiver) for maintaining a perfect 4.00 / 4.00 GPA in each semester. Specialized in software systems and applied machine learning.",
      thesis: {
        title:
          "AI-driven translation and summarization of Pakistani Supreme Court judgments into Urdu and Sindhi using fine-tuned transformer models.",
        models: ["NLLB-200-distilled-600M", "mBART-50", "mT5"],
        method: "Lexically Constrained Beam Search",
        urduTSR: 88.9,
        sindhiTSR: 84.7,
        supervisor: "Dr. Shaukat Wasi",
        conference: "IEEE HTC 2026 Poster Presentation",
      },
      highlights: [
        "Awarded Gold Medal in M.S. Computer Science for highest academic achievement",
        "Awarded 100% Merit Scholarship (Full Tuition Waiver) for maintaining a 4.00 / 4.00 GPA in each semester",
        "Specialized in Software Systems & Applied Machine Learning (CGPA 3.97 / 4.00)",
        "Thesis: AI-driven legal judgment translation & summarization into Urdu and Sindhi using fine-tuned transformer models",
        "Achieved 88.9% Term Success Rate (TSR) for Urdu and 84.7% for Sindhi",
        "Poster presented credit at IEEE HTC 2026 international conference",
      ],
      tags: [
        "Gold Medalist 🥇",
        "100% Merit Scholar",
        "4.00/4.00 Semester GPA",
        "Software Systems",
        "Applied ML",
        "NLP",
        "IEEE HTC 2026",
      ],
    },
    {
      id: "bscs",
      degree: "B.S. Computer Science",
      shortDegree: "BSCS",
      institution: "Sukkur IBA University",
      location: "Sukkur, Pakistan",
      duration: "August 2019 – September 2023",
      gpa: "CGPA 3.11 / 4.00 • Distinction",
      status: "Graduated with Distinction",
      badgeColor: "bg-amber-300",
      sealBadge: "GRADUATED WITH DISTINCTION",
      description:
        "Focused on core software engineering, data structures, and algorithms. Completed a capstone project on intelligent systems recognized for innovation and practical applicability.",
      capstone: {
        title: "Intelligent Systems Capstone Project",
        recognitions: "Recognized for System Engineering Innovation",
        roles: [
          "Tutor at Programming Resource Center: Programming Fundamentals, OOP & Data Structures",
          "Tutor at English Resource Center: Technical Writing, Presentation Skills & Communication",
          "Delivered guest speaker session on CI/CD and QA for Software Engineering students",
        ],
      },
      highlights: [
        "Focused on core software engineering, data structures, and algorithms",
        "Completed capstone project on intelligent systems recognized for innovation",
        "Graduated with Distinction and strong academic standing",
        "Peer mentor and tutor at Programming & English Resource Centers",
      ],
      tags: [
        "Software Engineering",
        "Data Structures",
        "Algorithms",
        "Intelligent Systems",
        "OOP",
        "System Design",
        "Distinction",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Graphic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* ACADEMIC QUALIFICATIONS & RESEARCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            Education & AI Research
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Academic background, degree specifications, transformer legal NLP thesis benchmarks, and university honors.
          </motion.p>
        </div>

        {/* Sleek Monochromatic Academic Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12 flex flex-wrap items-center justify-center gap-3 p-4 rounded-2xl bg-white border-2 border-black shadow-brutal-sm text-center"
        >
          <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider pr-2">
            <FaAward className="text-black text-base" />
            <span>Key Credentials:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-black">
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-black shadow-sm flex items-center gap-1.5">
              🎓 MSCS: CGPA 3.97/4.00
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-black shadow-sm flex items-center gap-1.5">
              ⭐ BSCS: Graduated with Distinction
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-black shadow-sm flex items-center gap-1.5">
              📄 IEEE HTC 2026 Poster Credit
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-black shadow-sm flex items-center gap-1.5">
              🤖 88.9% Urdu Legal TSR
            </span>
          </div>
        </motion.div>

        {/* SLEEK CONTINUOUS TIMELINE CARDS (FULL DISPLAY, NO SWITCHERS) */}
        <div className="w-full space-y-10 relative">
          {/* Subtle Vertical Timeline Connector Line (md+) */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-1 bg-black/15 -z-0 rounded-full" />

          {educationList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-9 shadow-brutal space-y-7 relative z-10 hover:-translate-y-0.5 transition-transform"
            >
              {/* Card Header */}
              <div className="space-y-4 border-b-2 border-black/10 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Sleek Icon Box */}
                    <div className="w-14 h-14 rounded-2xl border-2 border-black bg-amber-100/90 shadow-brutal-sm flex items-center justify-center text-black font-black text-2xl flex-shrink-0">
                      <FaGraduationCap className="w-7 h-7 text-black" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-wider">
                          {item.shortDegree}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full ${item.badgeColor} border border-black text-[10px] font-black text-black uppercase tracking-wider flex items-center gap-1 shadow-sm`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-black pt-0.5 leading-tight">
                        {item.degree}
                      </h3>

                      <div className="text-sm sm:text-base font-extrabold text-black/80 flex items-center gap-1.5 pt-0.5">
                        <FaBuildingColumns className="w-4 h-4 text-black flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration & GPA Pill Group */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-amber-100 border-2 border-black text-xs font-black text-black shadow-brutal-sm flex items-center gap-1.5">
                      <HiOutlineSparkles className="w-4 h-4" />
                      <span>{item.gpa}</span>
                    </span>

                    <span className="px-3.5 py-1 rounded-full bg-white border-2 border-black text-xs font-extrabold text-black shadow-brutal-sm flex items-center gap-1.5">
                      <HiOutlineCalendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Description Callout */}
              <div className="bg-amber-50/60 border-2 border-black/15 rounded-2xl p-4 sm:p-5 text-sm sm:text-base font-semibold text-black/90 leading-relaxed shadow-sm flex items-start gap-3">
                <HiOutlineBookOpen className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                <span>{item.description}</span>
              </div>

              {/* SPECIAL FEATURE: THESIS BREAKDOWN FOR MSCS */}
              {item.thesis && (
                <div className="bg-amber-100/70 border-2 border-black rounded-2xl p-5 sm:p-6 shadow-brutal-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black/15 pb-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2">
                      <HiOutlineCpuChip className="text-base text-black" />
                      <span>Master's Thesis & AI Model Performance Metrics</span>
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-black uppercase">
                      {item.thesis.conference}
                    </span>
                  </div>

                  <p className="text-sm font-extrabold text-black leading-snug">
                    "{item.thesis.title}"
                  </p>

                  {/* Benchmark Progress Meters */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-1">
                    <div className="bg-white border-2 border-black rounded-xl p-3.5 space-y-1.5 shadow-sm">
                      <div className="flex justify-between items-center text-xs font-black text-black">
                        <span>Urdu Legal Translation TSR</span>
                        <span className="text-emerald-700 font-extrabold text-sm">{item.thesis.urduTSR}%</span>
                      </div>
                      <div className="w-full bg-black/10 rounded-full h-2.5 border border-black overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full w-[88.9%]" />
                      </div>
                      <span className="text-[10px] font-bold text-black/60 block">
                        Fine-tuned NLLB-200-distilled-600M
                      </span>
                    </div>

                    <div className="bg-white border-2 border-black rounded-xl p-3.5 space-y-1.5 shadow-sm">
                      <div className="flex justify-between items-center text-xs font-black text-black">
                        <span>Sindhi Legal Translation TSR</span>
                        <span className="text-blue-700 font-extrabold text-sm">{item.thesis.sindhiTSR}%</span>
                      </div>
                      <div className="w-full bg-black/10 rounded-full h-2.5 border border-black overflow-hidden">
                        <div className="bg-blue-400 h-full rounded-full w-[84.7%]" />
                      </div>
                      <span className="text-[10px] font-bold text-black/60 block">
                        mBART-50 / mT5 + Constrained Search
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-black/70 pt-1 border-t border-black/10">
                    <span>Decoder: {item.thesis.method}</span>
                    <span>Supervision: {item.thesis.supervisor}</span>
                  </div>
                </div>
              )}

              {/* SPECIAL FEATURE: CAPSTONE & MENTORSHIP FOR BSCS */}
              {item.capstone && (
                <div className="bg-amber-100/70 border-2 border-black rounded-2xl p-5 sm:p-6 shadow-brutal-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black/15 pb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2">
                      <FaMedal className="text-base text-black" />
                      <span>Capstone Innovation & Academic Mentorship</span>
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-300 border border-black text-[10px] font-black uppercase text-black">
                      {item.capstone.recognitions}
                    </span>
                  </div>

                  <p className="text-sm font-extrabold text-black">
                    {item.capstone.title}
                  </p>

                  <div className="space-y-2 pt-1">
                    {item.capstone.roles.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-black/90">
                        <HiCheckCircle className="text-black flex-shrink-0 mt-0.5 text-base" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/60 flex items-center gap-1.5">
                  <HiOutlineSparkles className="text-black" />
                  <span>Key Academic Highlights</span>
                </h4>
                <div className="grid gap-2.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 bg-white border-2 border-black/20 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-black/90 shadow-sm"
                    >
                      <HiCheckCircle className="text-black flex-shrink-0 mt-0.5 text-base" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialization Tags */}
              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-black/60 mr-1">
                  Specializations:
                </span>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-amber-50 border-2 border-black text-xs font-bold text-black shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
