"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { HiChatAlt2, HiStar, HiQuestionMarkCircle } from "react-icons/hi";
export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <HiChatAlt2 className="text-secondary text-2xl" />
            <span className="text-xs font-mono text-secondary/60 tracking-wider uppercase">
              What Clients Say
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">08.</span> Client Feedback
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-secondary via-primary to-transparent rounded-full mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text/70 text-lg"
          >
            Trusted by technical leaders and founders to deliver robust
            solutions.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="group relative"
            >
              {/* Terminal Header */}
              <div className="absolute -top-3 left-6 right-6 flex items-center justify-between px-4 py-2 rounded-t-xl bg-surface/90 backdrop-blur-sm border border-white/10 border-b-0 z-20">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-xs font-mono text-text/40">
                  review_{index + 1}.json
                </div>
              </div>

              {/* Main Card */}
              <div className="relative glass-panel p-8 rounded-3xl border-2 border-white/10 group-hover:border-secondary/30 transition-all duration-300 mt-6 overflow-hidden">
                {/* Background Quote Icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-8 transition-opacity duration-300 pointer-events-none">
                  <HiQuestionMarkCircle
                    size={120}
                    className="text-primary rotate-180"
                  />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <HiStar
                        key={i}
                        className="text-yellow-400"
                        size={20}
                        style={{
                          filter:
                            "drop-shadow(0 0 4px rgba(250, 204, 21, 0.4))",
                        }}
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono text-text/50">
                      {item.rating}.0 / 5.0
                    </span>
                  </div>

                  {/* Quote Mark */}
                  <div className="text-6xl text-primary/20 font-serif leading-none mb-4">
                    &quot;
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-text/90 leading-relaxed mb-8 font-medium italic">
                    {item.testimonial}
                  </blockquote>

                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent mb-6" />

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary p-0.5"
                      >
                        <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                      </motion.div>

                      {/* Name & Position */}
                      <div>
                        <div className="font-bold text-text text-lg mb-1">
                          {item.name}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text/60 font-mono">
                          <span>{item.position}</span>
                          <span className="text-secondary">@</span>
                          <span className="text-secondary">{item.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-xs font-mono text-primary/80 uppercase tracking-wider"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {item.projectType}
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
