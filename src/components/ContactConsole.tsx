"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

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
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
          >
            <span className="text-primary">07.</span> Contact Protocol
          </motion.h2>
          <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-lg font-mono text-sm leading-relaxed">
              <p className="text-text/60 mb-4">
                &#47;&#47; Contact Information
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <HiMail />
                  </div>
                  <div>
                    <p className="text-xs text-text/50">EMAIL</p>
                    <a
                      href="mailto:amjadpitafi070@gmail.com"
                      className="text-text hover:text-primary transition-colors"
                    >
                      amjadpitafi070@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <HiPhone />
                  </div>
                  <div>
                    <p className="text-xs text-text/50">PHONE</p>
                    <a
                      href="tel:+923033663070"
                      className="text-text hover:text-primary transition-colors"
                    >
                      +92 3033663070
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs text-text/50">LOCATION</p>
                    <p className="text-text">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-lg font-mono text-sm">
              <p className="text-primary mb-2">
                $ echo &quot;Let&apos;s build something together&quot;
              </p>
              <p className="text-text/80">
                I am currently open for efficient collaborations and new
                projects. Initialize communication sequence to discuss potential
                synergies.
              </p>
            </div>
          </div>

          {/* Terminal Form */}
          <div className="glass-panel rounded-lg overflow-hidden border border-white/10 bg-[#0B0F15]">
            <div className="bg-surface border-b border-white/5 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs font-mono text-text/40">
                contact-shell
              </div>
            </div>

            <div className="p-6">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 font-mono text-sm"
              >
                <div className="space-y-2">
                  <label className="text-primary flex items-center gap-2">
                    <span className="text-pink-500">➜</span>
                    <span>Enter Name:</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-2 text-text outline-none transition-colors"
                    placeholder="_"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-primary flex items-center gap-2">
                    <span className="text-pink-500">➜</span>
                    <span>Enter Email:</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-2 text-text outline-none transition-colors"
                    placeholder="_"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-primary flex items-center gap-2">
                    <span className="text-pink-500">➜</span>
                    <span>Message Override:</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-2 text-text outline-none transition-colors resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary rounded transition-all flex items-center justify-center gap-2 group"
                >
                  <span>$ execute_send</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
