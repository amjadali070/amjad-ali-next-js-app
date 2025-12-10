"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
} from "react-icons/hi";

export default function ContactConsole() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:amjadpitafi070@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Git-style Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="gitPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="rgba(79, 195, 247, 0.5)" />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="0"
                stroke="rgba(79, 195, 247, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gitPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <HiMail className="text-primary text-xl" />
            </div>
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              git commit -m &quot;collaboration&quot;
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">07.</span> Pull Request
            <span className="text-secondary ml-3">&#47;&#47;</span>
            <span className="text-primary/70"> Contact</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
          />
        </div>

        {/* Git-style Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Contact Info as Git Diff */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Commit Info Card */}
            <div className="bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-lg border-2 border-primary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {/* Commit Header */}
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-primary font-bold">
                    commit abc123def
                  </span>
                  <span className="text-text/40">
                    &#40;HEAD -&gt; main&#41;
                  </span>
                </div>
                <div className="mt-2 text-sm text-text font-mono">
                  Author: Amjad Ali &lt;amjadpitafi070@gmail.com&gt;
                </div>
              </div>

              {/* Diff Content */}
              <div className="p-5 font-mono text-xs space-y-4">
                <div className="text-text/60">
                  <span className="text-blue-400">@@ </span>
                  Contact Information
                  <span className="text-blue-400"> @@</span>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 group hover:bg-primary/5 p-2 rounded transition-colors">
                  <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <HiMail size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400 text-lg">+</span>
                      <span className="text-text/50 text-[10px] uppercase tracking-wider">
                        Email Address
                      </span>
                    </div>
                    <a
                      href="mailto:amjadpitafi070@gmail.com"
                      className="text-text hover:text-primary transition-colors break-all"
                    >
                      amjadpitafi070@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 group hover:bg-secondary/5 p-2 rounded transition-colors">
                  <div className="w-8 h-8 rounded bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                    <HiPhone size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400 text-lg">+</span>
                      <span className="text-text/50 text-[10px] uppercase tracking-wider">
                        Phone Number
                      </span>
                    </div>
                    <a
                      href="tel:+923033663070"
                      className="text-text hover:text-secondary transition-colors"
                    >
                      +92 3033663070
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 group hover:bg-purple-500/5 p-2 rounded transition-colors">
                  <div className="w-8 h-8 rounded bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 flex-shrink-0 mt-1">
                    <HiLocationMarker size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400 text-lg">+</span>
                      <span className="text-text/50 text-[10px] uppercase tracking-wider">
                        Based In
                      </span>
                    </div>
                    <p className="text-text">Pakistan</p>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="pt-4 border-t border-primary/20 flex items-center gap-2 text-green-400">
                  <HiCheckCircle size={16} />
                  <span>Available for collaboration</span>
                </div>
              </div>
            </div>

            {/* README Message */}
            <div className="bg-gradient-to-br from-surface/80 to-background/70 backdrop-blur-xl rounded-lg border border-primary/20 p-5 font-mono">
              <div className="text-primary/60 text-xs mb-3">README.md</div>
              <div className="text-sm text-text/90 leading-relaxed space-y-2">
                <p className="text-primary font-semibold">
                  &#35; Let&apos;s Build Together
                </p>
                <p className="text-text/80">
                  Open for collaborations and new projects. Feel free to reach
                  out to discuss potential synergies and innovative solutions.
                </p>
                <div className="flex items-center gap-2 text-xs text-text/60 mt-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Currently accepting new opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Pull Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-lg border-2 border-secondary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            {/* PR Header */}
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border-b border-secondary/20 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center text-secondary">
                  <span className="text-lg font-bold">PR</span>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-text">
                    Open a Pull Request
                  </h3>
                  <p className="text-xs text-text/60 font-mono">
                    main ← feature/contact-request
                  </p>
                </div>
              </div>
            </div>

            {/* PR Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-primary">
                    <span className="text-secondary">*</span>
                    <span>Contributor Name</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40 text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-background/50 border border-secondary/30 focus:border-secondary rounded-md pl-8 pr-4 py-3 text-text text-sm outline-none transition-all hover:border-secondary/50"
                      placeholder="your-name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-primary">
                    <span className="text-secondary">*</span>
                    <span>Email Address</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40 text-sm">
                      @
                    </span>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-background/50 border border-secondary/30 focus:border-secondary rounded-md pl-8 pr-4 py-3 text-text text-sm outline-none transition-all hover:border-secondary/50"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-primary">
                    <span className="text-secondary">*</span>
                    <span>Commit Message</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-text/40 text-sm">
                      &#35;
                    </div>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-background/50 border border-secondary/30 focus:border-secondary rounded-md pl-8 pr-4 py-3 text-text text-sm outline-none transition-all hover:border-secondary/50 resize-none"
                      placeholder="Describe your collaboration idea..."
                    />
                  </div>
                  <p className="text-[10px] text-text/40 flex items-center gap-1">
                    <span className="text-blue-400">i</span>
                    Supports markdown formatting
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-secondary/20 space-y-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-secondary via-primary to-secondary text-background font-bold rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(125,211,252,0.5)] transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <HiCheckCircle size={18} />
                    <span>Create Pull Request</span>
                  </motion.button>
                  <p className="text-[10px] text-center text-text/40">
                    By submitting, you agree to merge your ideas with mine
                  </p>
                </div>
              </form>
            </div>

            {/* PR Footer Stats */}
            <div className="bg-background/40 border-t border-secondary/20 px-5 py-3 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-green-400">+++ additions</span>
                <span className="text-text/40">|</span>
                <span className="text-text/60">0 conflicts</span>
              </div>
              <div className="text-text/40">Ready to merge</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
