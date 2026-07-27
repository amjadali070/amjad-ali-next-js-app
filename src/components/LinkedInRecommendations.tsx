"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaQuoteLeft, FaStar } from "react-icons/fa6";
import { HiOutlineArrowUpRight, HiCheckBadge } from "react-icons/hi2";

type RecommendationItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarBg: string;
  relation: string;
  date?: string;
  category: string;
  linkedinUrl: string;
  quote: string;
  skills: string[];
  highlight: string;
  stars: number;
};

export default function LinkedInRecommendations() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const recommendations: RecommendationItem[] = [
    {
      id: "nikolas",
      name: "Nikolas Brooten",
      role: "Engineering Director",
      company: "Alvi Global Enterprises (AGE)",
      avatarInitials: "NB",
      avatarBg: "bg-black text-white",
      relation: "Managed Amjad directly on B2B SaaS",
      date: "October 2025",
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
      date: "July 2026",
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
      date: "September 2025",
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
      date: "April 2025",
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
      date: "October 2024",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
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
      date: "October 2024",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
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
      date: "September 2024",
      category: "Peers & Colleagues",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
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
      date: "August 2024",
      category: "Mentors",
      linkedinUrl: "https://www.linkedin.com/in/amjadali070/",
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
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
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
            Testimonials from engineering directors, research supervisors, peers, and mentors I've collaborated with.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full border-2 border-black text-xs font-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0A66C2] text-white scale-105"
                    : "bg-white text-black hover:bg-[#dce6f1]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Recommendations 3-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredRecommendations.map((rec, index) => (
              <RecommendationCard key={rec.id} rec={rec} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
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
              Software engineers, engineering directors, and product leaders in my network.
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

function RecommendationCard({ rec, index }: { rec: RecommendationItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 260;
  const isLong = rec.quote.length > MAX_CHARS;
  const displayQuote = expanded || !isLong ? rec.quote : rec.quote.slice(0, MAX_CHARS) + "…";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="bg-white border border-[#e0ddd8] rounded-2xl flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      {/* LinkedIn blue top bar */}
      <div className="h-[3px] bg-[#0A66C2] flex-shrink-0" />

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Author Row */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div
            className={`w-12 h-12 rounded-full ${rec.avatarBg} flex items-center justify-center font-black text-sm flex-shrink-0 ring-2 ring-[#e8e6e0]`}
          >
            {rec.avatarInitials}
          </div>

          {/* Name + role */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold text-[#000] text-sm leading-tight">{rec.name}</span>
              <HiCheckBadge className="text-[#0A66C2] text-[15px] flex-shrink-0" title="LinkedIn Connection" />
            </div>
            <p className="text-[11px] text-[#666] leading-snug mt-0.5 line-clamp-2">{rec.role}</p>
            <p className="text-[11px] text-[#999] leading-snug">{rec.company}</p>
          </div>

          {/* LinkedIn logo */}
          <FaLinkedin className="text-[#0A66C2] text-xl flex-shrink-0 mt-0.5" />
        </div>

        {/* Relation & date pill */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#555] bg-[#f3f2ef] rounded-lg px-3 py-2 font-medium leading-snug">
          <span className="w-2 h-2 rounded-full bg-[#0A66C2] flex-shrink-0" />
          <span className="flex-1 truncate">{rec.relation}</span>
          {rec.date && (
            <>
              <span className="text-[#ccc] flex-shrink-0">·</span>
              <span className="flex-shrink-0 text-[#888]">{rec.date}</span>
            </>
          )}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {[...Array(rec.stars)].map((_, i) => (
            <FaStar key={i} className="text-amber-400 w-3.5 h-3.5" />
          ))}
        </div>

        {/* Quote */}
        <div className="flex-1">
          <FaQuoteLeft className="text-[#0A66C2]/15 text-2xl mb-1" />
          <p className="text-[13px] text-[#333] leading-relaxed">
            {displayQuote}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-[#0A66C2] text-[12px] font-semibold hover:underline cursor-pointer"
            >
              {expanded ? "Show less" : "…see more"}
            </button>
          )}
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#efefef]">
          {rec.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded-full bg-[#dce6f1] text-[#0A66C2] text-[11px] font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View on LinkedIn button */}
        <a
          href={rec.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors font-semibold text-xs cursor-pointer mt-auto"
        >
          <FaLinkedin />
          <span>View on LinkedIn</span>
          <HiOutlineArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
