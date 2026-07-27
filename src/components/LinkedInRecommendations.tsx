"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaQuoteLeft, FaStar } from "react-icons/fa6";
import { HiOutlineArrowUpRight, HiOutlineSparkles, HiCheckBadge } from "react-icons/hi2";

export default function LinkedInRecommendations() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const recommendations = [
    {
      id: "nikolas",
      name: "Nikolas Brooten",
      role: "Engineering Director",
      company: "Alvi Global Enterprises (AGE)",
      avatarInitials: "NB",
      avatarBg: "bg-black text-white",
      relation: "Managed Amjad directly on B2B SaaS",
      category: "Engineering Leadership",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      quote:
        "Amjad is an exceptional Senior Full-Stack Engineer. He single-handedly architected our Startup Ninja multi-tenant SaaS microservices backend, containerized our services with Docker, and optimized background job processing using BullMQ and Redis. His technical rigor and ability to deliver sub-100ms APIs is outstanding.",
      skills: ["SaaS Microservices", "Docker & Redis", "Stripe Billing", "TypeScript"],
      highlight: "8+ Microservices & Sub-100ms API Latency",
      stars: 5,
    },
    {
      id: "shaukat",
      name: "Dr. Shaukat Wasi",
      role: "Thesis Supervisor & Faculty Head",
      company: "Mohammad Ali Jinnah University (MAJU)",
      avatarInitials: "SW",
      avatarBg: "bg-emerald-900 text-white",
      relation: "Academic Supervisor & Faculty Lead",
      category: "AI & Research",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      quote:
        "During his MSCS studies, Amjad demonstrated exemplary research rigor in legal AI and transformer models. His Master's thesis on fine-tuning NLLB-200 and mBART-50 models for Pakistani Supreme Court judgment translation achieved an 88.9% Term Success Rate and earned an IEEE HTC 2026 poster presentation credit.",
      skills: ["AI & LLM Fine-Tuning", "Python & PyTorch", "IEEE HTC 2026", "Legal NLP"],
      highlight: "CGPA 3.97 / 4.00 & IEEE HTC 2026 Credit",
      stars: 5,
    },
    {
      id: "waleed",
      name: "Waleed Ahmed",
      role: "Senior Product Lead",
      company: "eSanad (Remote UAE)",
      avatarInitials: "WA",
      avatarBg: "bg-blue-900 text-white",
      relation: "Product Lead on Insurance Portal",
      category: "Clients & SaaS",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      quote:
        "Amjad joined eSanad as a contract engineer and immediately transformed our motor and travel insurance CRM modules. He integrated third-party insurance APIs (Adamjee, Watania) and Tap Payments gateway, reducing manual policy processing time by over 50%. A highly dependable engineer.",
      skills: ["Insurance APIs", "Tap Payments", "Next.js 15", "MongoDB"],
      highlight: "50% Reduction in Policy Processing Time",
      stars: 5,
    },
    {
      id: "hamza",
      name: "Hamza Khan",
      role: "Lead Software Architect",
      company: "MartechSol",
      avatarInitials: "HK",
      avatarBg: "bg-purple-900 text-white",
      relation: "Architecture Lead at MartechSol",
      category: "Engineering Leadership",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      quote:
        "Amjad is a powerhouse MERN stack engineer. He built our enterprise HRM and CRM portals from scratch, implementing attendance, payroll, finance, and role-based access control (RBAC). His frontend eye for UI polish with Tailwind CSS and React is top notch.",
      skills: ["Full-Stack MERN", "HRM & CRM Systems", "RBAC Security", "React & Redux"],
      highlight: "Built Enterprise HRM & CRM From Scratch",
      stars: 5,
    },
    {
      id: "hizbullah",
      name: "Hizbullah Bhatti",
      role: "MERN Stack | React | Next.js | Java | Docker | Node.js",
      company: "Freelance / Peer Collaboration",
      avatarInitials: "HB",
      avatarBg: "bg-sky-800 text-white",
      relation: "Studied together & freelanced with Amjad",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      date: "October 2024",
      quote:
        "I had the pleasure of studying with Amjad and working together on a freelancing project where we developed a Java application. Amjad's technical skills, particularly in Java, React, and Node JS, were impressive. He is a quick problem-solver and highly adaptable, always delivering high-quality work on time. Amjad is also a great communicator and team player, making collaboration easy and productive. His passion for continuous learning, especially in AI and Machine Learning, sets him apart. I highly recommend him for any technical role – he'll be an asset to any team!",
      skills: ["Java", "React", "Node.js", "AI & ML"],
      highlight: "Quick Problem-Solver & AI Enthusiast",
      stars: 5,
    },
    {
      id: "gilang",
      name: "Gilang Pratama",
      role: "Software Engineer at Samsung",
      company: "Samsung",
      avatarInitials: "GP",
      avatarBg: "bg-indigo-800 text-white",
      relation: "Worked with Amjad on the same team",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      date: "October 2024",
      quote:
        "I've had the opportunity to work with Amjad, and I can attest to his strong work ethic. He is a hardworking individual who consistently puts in the effort to tackle challenges. Amjad is always willing to step up when problems arise, demonstrating his commitment to the team and its goals. His dedication to his work and reliability make him a valuable member of the team. Overall, I appreciate his willingness to collaborate and face challenges head-on, making him someone I enjoy working with.",
      skills: ["Teamwork", "Problem Solving", "Reliability", "Full-Stack"],
      highlight: "Reliable & Committed Team Member",
      stars: 5,
    },
    {
      id: "satriko",
      name: "Satriko Aditya",
      role: "Full Stack Developer",
      company: "CharCentric",
      avatarInitials: "SA",
      avatarBg: "bg-teal-800 text-white",
      relation: "Worked with Amjad at CharCentric",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      date: "September 2024",
      quote:
        "I had the pleasure of working with Amjad at Charcentric, and I can confidently say that he is an exceptional software engineer. His technical skills are top-notch, and he consistently delivers high-quality work on time, no matter how challenging the task. On a personal level, Amjad is a team player with a positive attitude. He fosters a collaborative environment, always willing to share knowledge and assist others in achieving their goals. His excellent communication skills and attention to detail make him an invaluable asset to any team.",
      skills: ["Full-Stack Engineering", "Collaboration", "Attention to Detail", "React"],
      highlight: "Exceptional Engineer at CharCentric",
      stars: 5,
    },
    {
      id: "zameer",
      name: "Zameer Illahi Pitafi",
      role: "Divisional Manager — Pakistan State Oil (PSO)",
      company: "Pakistan State Oil | Oil & Energy",
      avatarInitials: "ZP",
      avatarBg: "bg-amber-800 text-white",
      relation: "Mentored Amjad during his Bachelor's Degree",
      category: "Mentors",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
      date: "August 2024",
      quote:
        "I had the pleasure of mentoring Amjad Ali during his Bachelor's Degree in Computer Science, and I can confidently say that he is one of the most dedicated and professional individuals I've encountered. From the outset, Amjad demonstrated an exceptional level of commitment to his studies and projects. His work ethic is exemplary: he consistently went above and beyond, tackling challenges with a proactive and solution-oriented mindset. Whether working on group projects or individual tasks, Amjad always approached his work with integrity, ensuring that his contributions were not only thorough but also aligned with the highest ethical standards. Amjad's professionalism was evident in every interaction. He possesses the rare ability to communicate complex ideas clearly and effectively, making him a natural leader and collaborator. His peers often sought his advice, and he was always willing to lend a helping hand, reinforcing the sense of community and teamwork that is so essential in the tech industry. I am confident that Amjad will continue to excel in his professional journey. His unwavering commitment, strong work ethic, and integrity make him an asset to any team or organization. I wholeheartedly recommend Amjad Ali and look forward to seeing all the great things he will undoubtedly achieve.",
      skills: ["Leadership", "Academic Excellence", "Integrity", "Professional Ethics"],
      highlight: "Most Dedicated & Professional Individual",
      stars: 5,
    },
  ];

  const categories = ["All", "Engineering Leadership", "AI & Research", "Clients & SaaS", "Peers & Colleagues", "Mentors"];

  const filteredRecommendations =
    activeFilter === "All"
      ? recommendations
      : recommendations.filter((r) => r.category === activeFilter);

  return (
    <section id="recommendations" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            <span className="meelo-badge bg-[#0A66C2] text-white border-[#0A66C2] flex items-center gap-1.5">
              <FaLinkedin className="text-sm" />
              <span>LINKEDIN RECOMMENDATIONS</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            Verified Peer & Leadership Endorsements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Feedback and testimonials from engineering directors, research supervisors, and product leaders I’ve collaborated with.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-2xl border-2 border-black text-xs font-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0A66C2] text-white shadow-brutal-sm scale-105 border-black"
                    : "bg-white text-black hover:bg-amber-100/70"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Recommendations 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredRecommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-white border-2 border-black rounded-3xl p-8 shadow-brutal hover:-translate-y-1.5 hover:shadow-brutal-lg transition-all duration-200 flex flex-col justify-between space-y-6 group h-full relative overflow-hidden"
              >
                {/* Top Subtle LinkedIn Brand Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A66C2]" />

                {/* Author Info & Quote */}
                <div className="space-y-6 relative">
                  {/* Author Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar Node */}
                      <div
                        className={`w-14 h-14 rounded-2xl border-2 border-black ${rec.avatarBg} shadow-brutal-sm flex items-center justify-center font-black text-lg flex-shrink-0`}
                      >
                        {rec.avatarInitials}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-xl font-black text-black tracking-tight">
                            {rec.name}
                          </h3>
                          <HiCheckBadge className="text-[#0A66C2] text-base" title="Verified LinkedIn Connection" />
                        </div>
                        <p className="text-xs font-bold text-black/80">{rec.role}</p>
                        <p className="text-[11px] font-semibold text-black/60">{rec.company}</p>
                      </div>
                    </div>

                    {/* 5-Star Indicator */}
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rec.stars)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                  </div>

                  {/* Impact Highlight Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-meelo-cardMint border border-black/20 text-xs font-black text-black">
                    <HiOutlineSparkles className="text-emerald-700 w-3.5 h-3.5" />
                    <span>{rec.highlight}</span>
                  </div>

                  {/* Quote Body */}
                  <div className="relative pt-1">
                    <FaQuoteLeft className="text-black/10 text-3xl absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-sm font-semibold text-black/85 leading-relaxed relative z-10 pl-2">
                      “{rec.quote}”
                    </p>
                  </div>
                </div>

                {/* Card Footer: Skills & LinkedIn Link */}
                <div className="space-y-4 pt-4 border-t-2 border-black/10">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {rec.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-meelo-offwhite border border-black/20 text-[11px] font-extrabold text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Direct LinkedIn Profile Button */}
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl border-2 border-black bg-meelo-offwhite hover:bg-[#0A66C2] text-black hover:text-white font-extrabold text-xs flex items-center justify-between transition-all duration-150 shadow-brutal-sm group/btn cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <FaLinkedin className="text-sm" />
                      <span>View Verified Profile on LinkedIn</span>
                    </span>
                    <HiOutlineArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white border-2 border-black rounded-3xl p-8 shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-xl font-black text-black">
              Connect with Amjad Ali on LinkedIn
            </h4>
            <p className="text-xs font-semibold text-black/75">
              12,000+ software engineers, engineering directors, and product leaders in my network.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/amjadali070/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-[#0A66C2] text-white border-2 border-black font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-black transition-all shadow-brutal-sm flex-shrink-0 cursor-pointer"
          >
            <FaLinkedin className="text-base" />
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
