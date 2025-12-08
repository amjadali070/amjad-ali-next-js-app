"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCode,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const subject = encodeURIComponent(formData.subject || "Inquiry from Website");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:amjadpitafi070@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      label: "email",
      value: "amjadpitafi070@gmail.com",
      href: "mailto:amjadpitafi070@gmail.com",
      color: "text-accent-primary",
    },
    {
      icon: <HiPhone />,
      label: "phone",
      value: "+92 3033663070",
      href: "tel:+923033663070",
      color: "text-code-green",
    },
    {
      icon: <HiLocationMarker />,
      label: "location",
      value: "Pakistan",
      href: "#",
      color: "text-code-blue",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - API Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm">
            <span className="text-code-purple">async function</span>{" "}
            <span className="text-accent-primary">sendMessage</span>
            <span className="text-text-secondary">() {"{"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            Get In Touch
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info (API Response Style) */}
          <motion.div
            className="space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Details - JSON Style */}
            <div className="p-6 bg-surface border border-border rounded-lg font-mono text-sm">
              <div className="text-code-orange mb-2">{"{"}</div>
              <div className="pl-4 space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="block group"
                    variants={staggerItemVariants}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-code-blue">"{info.label}"</span>
                      <span className="text-text-secondary">:</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                            {info.icon}
                          </span>
                          <span className="text-code-green group-hover:text-accent-primary transition-colors duration-300">
                            "{info.value}"
                          </span>
                        </div>
                      </div>
                      {index < contactInfo.length - 1 && (
                        <span className="text-text-secondary">,</span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="text-code-orange mt-2">{"}"}</div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-surface border border-border rounded-lg">
              <div className="font-mono text-sm text-code-blue mb-4">
                social_links: [
              </div>
              <div className="flex gap-4 pl-4">
                <motion.a
                  href="https://github.com/amjadali070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-panel border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/amjadali070/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-panel border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
              </div>
              <div className="font-mono text-sm text-code-blue mt-4">]</div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-surface border border-border rounded-lg">
              <div className="font-mono text-sm text-text-secondary">
                <span className="text-code-purple">//</span> Available for
                freelance projects and full-time opportunities
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-code-green rounded-full animate-pulse" />
                <span className="text-sm text-code-green font-mono">
                  Currently available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form (API Console Style) */}
          <motion.div
            className="api-console p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Console Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <HiCode className="text-accent-primary text-xl" />
              <span className="font-mono text-sm text-text-primary">
                POST /api/contact
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-code-blue">
                    name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-accent-primary/50 focus:outline-none transition-all duration-300 font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-code-blue">
                    email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-accent-primary/50 focus:outline-none transition-all duration-300 font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-code-blue">
                    subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-accent-primary/50 focus:outline-none transition-all duration-300 font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-code-blue">
                    message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-accent-primary/50 focus:outline-none transition-all duration-300 resize-none font-mono text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiCode className="text-lg" />
                <span className="font-mono">execute()</span>
              </motion.button>

              {/* Response Preview */}
              <div className="mt-6 p-4 bg-panel border border-border rounded-lg font-mono text-xs text-text-muted">
                <span className="text-code-purple">//</span> Response: 200 OK
                <br />
                <span className="text-code-green">
                  {"{ "}message: "Thanks for reaching out!" {"}"}
                </span>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer - Closing Brace */}
        <motion.div
          className="mt-12 font-mono text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {"}"}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
