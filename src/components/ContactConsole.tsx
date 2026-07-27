"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlinePaperAirplane,
  HiOutlineCheck,
  HiOutlineClipboardDocument,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function ContactConsole() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "amjadpitafi070@gmail.com";

  const projectTypes = [
    "Full-Stack Web App",
    "SaaS Platform",
    "AI / LLM Integration",
    "API & Cloud Services",
    "Contract / Consulting",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry: ${formState.projectType} — ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\n\nProject Scope & Message:\n${formState.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight"
          >
            Got a project in mind? Let’s collaborate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Currently open to full-stack engineering contracts, SaaS architecture roles, and select client projects.
          </motion.p>
        </div>

        {/* 2-Column Professional Contact Console */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Availability Bento (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Live Availability Card */}
            <div className="bg-meelo-cardMint border-2 border-black rounded-3xl p-7 shadow-brutal space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Available for Contracts & Engineering Roles
                </span>
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight">
                Let’s build something extraordinary together.
              </h3>
              <p className="text-xs font-semibold text-black/80 leading-relaxed">
                Whether you need a full-stack SaaS platform, AI integration, or an API backend, I respond to inquiries promptly.
              </p>
            </div>

            {/* Direct Contact & Response SLA Bento Row */}
            <div className="space-y-4">
              {/* Email One-Click Copy Card */}
              <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-brutal space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black/60">
                    <HiOutlineEnvelope className="w-4 h-4 text-black" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-xl bg-meelo-offwhite border border-black/20 text-[11px] font-bold text-black hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <HiOutlineClipboardDocument className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base sm:text-lg font-black text-black hover:underline block truncate"
                >
                  {emailAddress}
                </a>
              </div>

              {/* WhatsApp Direct Chat Card */}
              <div className="bg-emerald-50 border-2 border-black rounded-3xl p-6 shadow-brutal space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black/70">
                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct</span>
                  </div>
                  <a
                    href="https://wa.me/923033663070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-xl bg-emerald-600 text-white text-[11px] font-extrabold hover:bg-black transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Chat Now ↗</span>
                  </a>
                </div>

                <a
                  href="https://wa.me/923033663070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-black text-black hover:underline block"
                >
                  +92 303 3663070
                </a>
              </div>

              {/* Location & Response Time Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-meelo-cardLavender border-2 border-black rounded-3xl p-5 shadow-brutal space-y-1">
                  <div className="flex items-center gap-1.5 text-black/70 text-xs font-bold uppercase tracking-wider">
                    <HiOutlineMapPin className="w-4 h-4 text-black flex-shrink-0" />
                    <span>Location</span>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-black block leading-snug">
                    Karachi, Pakistan
                  </span>
                  <span className="text-[11px] font-extrabold text-black/70 block leading-tight pt-0.5">
                    Remote Worldwide • Onsite Relocation Open
                  </span>
                </div>

                <div className="bg-meelo-cardBlue border-2 border-black rounded-3xl p-5 shadow-brutal space-y-1">
                  <div className="flex items-center gap-1.5 text-black/70 text-xs font-bold uppercase tracking-wider">
                    <HiOutlineClock className="w-4 h-4 text-black" />
                    <span>Response</span>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-black block">
                    &lt; 24 Hours SLA
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-brutal space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-black/60 block">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/amjadali070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-meelo-offwhite border-2 border-black text-xs font-black text-black flex items-center justify-center gap-1.5 hover:bg-black hover:text-white transition-all shadow-brutal-sm cursor-pointer"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amjadali070/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-meelo-offwhite border-2 border-black text-xs font-black text-black flex items-center justify-center gap-1.5 hover:bg-black hover:text-white transition-all shadow-brutal-sm cursor-pointer"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/923033663070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-emerald-100 border-2 border-black text-xs font-black text-black flex items-center justify-center gap-1.5 hover:bg-emerald-600 hover:text-white transition-all shadow-brutal-sm cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-600 hover:text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Structured Interactive Project Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-brutal flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-black tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-semibold text-black/70">
                  Fill out the details below to trigger a pre-formatted email client dispatch.
                </p>
              </div>

              {/* Name & Email 2-Column Inputs */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-black uppercase tracking-wider text-black/70 block"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-meelo-offwhite/60 border-2 border-black/20 focus:border-black focus:bg-white rounded-2xl p-4 font-semibold text-black placeholder:text-black/40 focus:outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-black uppercase tracking-wider text-black/70 block"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-meelo-offwhite/60 border-2 border-black/20 focus:border-black focus:bg-white rounded-2xl p-4 font-semibold text-black placeholder:text-black/40 focus:outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Project Type Selector Pills */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-black/70 block">
                  Project Type / Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = formState.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormState({ ...formState, projectType: type })
                        }
                        className={`px-3.5 py-1.5 rounded-xl border-2 border-black text-xs font-extrabold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-black text-white shadow-brutal-sm scale-105"
                            : "bg-meelo-offwhite text-black hover:bg-amber-100"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Details Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-black uppercase tracking-wider text-black/70 block"
                >
                  Project Scope & Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project goals, key requirements, or timeline..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-meelo-offwhite/60 border-2 border-black/20 focus:border-black focus:bg-white rounded-2xl p-4 font-semibold text-black placeholder:text-black/40 focus:outline-none transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="meelo-btn-dark w-full py-4 text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <HiOutlineCheck className="w-5 h-5 text-emerald-400" />
                      <span>Mail Client Opened!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <HiOutlinePaperAirplane className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

