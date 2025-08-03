"use client";

import React from "react";
import {
  HiSparkles,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";

const ContactMe: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const subject = encodeURIComponent("Inquiry from Website");
      const body = encodeURIComponent(
        "Hello, I would like to get in touch with you regarding your services."
      );
      window.location.href = `mailto:amjadpitafi070@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const contactInfo = [
    {
      icon: <HiMail className="text-purple-400" />,
      label: "Email",
      value: "amjadpitafi070@gmail.com",
      href: "mailto:amjadpitafi070@gmail.com",
    },
    {
      icon: <HiPhone className="text-cyan-400" />,
      label: "Phone",
      value: "+92 3033663070",
      href: "tel:+923033663070",
    },
    {
      icon: <HiLocationMarker className="text-green-400" />,
      label: "Location",
      value: "Pakistan",
      href: "#",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <HiSparkles className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">Contact</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let&apos;s discuss how we can
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate
                with amazing people. Whether you have a question, project idea,
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center space-x-4 p-6 glass rounded-2xl 
                    hover:bg-white/10 smooth-transition transform hover:translate-x-2"
                >
                  <div className="flex-shrink-0 text-2xl group-hover:scale-110 smooth-transition">
                    {info.icon}
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold group-hover:text-transparent 
                      group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                      group-hover:from-purple-400 group-hover:to-cyan-400 smooth-transition"
                    >
                      {info.label}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 smooth-transition">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/amjadali070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-2xl text-slate-400 hover:text-white 
                    smooth-transition transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/amjadali070/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-2xl text-slate-400 hover:text-blue-400 
                    smooth-transition transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Message
                </h3>
                <p className="text-slate-400">
                  Let&apos;s discuss your project
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 glass rounded-xl text-white placeholder-slate-400 
                      border border-slate-600/30 focus:border-purple-500/50 focus:outline-none 
                      smooth-transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 glass rounded-xl text-white placeholder-slate-400 
                      border border-slate-600/30 focus:border-purple-500/50 focus:outline-none 
                      smooth-transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 glass rounded-xl text-white placeholder-slate-400 
                      border border-slate-600/30 focus:border-purple-500/50 focus:outline-none 
                      smooth-transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium">
                    Service
                  </label>
                  <select
                    className="w-full px-4 py-3 glass rounded-xl text-white 
                      border border-slate-600/30 focus:border-purple-500/50 focus:outline-none 
                      smooth-transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-300 text-sm font-medium">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-slate-400 
                    border border-slate-600/30 focus:border-purple-500/50 focus:outline-none 
                    smooth-transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 
                  rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25 
                  hover:shadow-purple-500/40 smooth-transition transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <HiPaperAirplane className="text-lg group-hover:translate-x-1 smooth-transition" />
                  <span>Send Message</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
