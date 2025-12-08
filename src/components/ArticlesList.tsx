"use client";

import { motion } from "framer-motion";
import { articlesData } from "@/lib/data";
import {
  HiDocumentText,
  HiCalendar,
  HiTag,
  HiArrowRight,
  HiNewspaper,
  HiClock,
} from "react-icons/hi";

export default function ArticlesList() {
  return (
    <section
      id="articles"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-surface/10 via-surface/30 to-surface/10"
    >
      {/* Background Effects - Optimized */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <HiNewspaper className="text-primary text-2xl" />
              <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
                Knowledge Base
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
            >
              <span className="text-primary">07.</span> Latest Articles
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "128px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full"
            />
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/50 border border-primary/20 text-primary font-mono text-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
          >
            <span>View all articles</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Articles List */}
        <div className="space-y-16 max-w-6xl">
          {articlesData.slice(0, 3).map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative block"
            >
              {/* Terminal Header */}
              <div className="absolute -top-10 left-6 right-6 flex items-center justify-between px-4 py-2 rounded-t-xl bg-surface/90 backdrop-blur-sm border border-white/10 border-b-0 z-20">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-xs font-mono text-text/40">
                  article_{String(index + 1).padStart(2, "0")}.md
                </div>
              </div>

              {/* Main Card */}
              <div className="relative glass-panel p-8 rounded-2xl border-2 border-white/5 hover:border-primary/20 transition-all duration-300 mt-6 overflow-hidden">
                <div className="relative flex flex-col lg:flex-row gap-6 items-start">
                  {/* Article Number & Icon */}
                  <div className="hidden lg:flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                      <HiDocumentText size={28} className="text-primary" />
                    </div>
                    <div className="text-xs font-mono text-text/30 font-bold">
                      #{String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary"
                      >
                        <HiTag className="text-xs" />
                        {article.category}
                      </motion.span>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/50 border border-white/5">
                        <HiCalendar className="text-primary text-xs" />
                        <span className="text-xs font-mono text-text/60">
                          {article.publishDate}
                        </span>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/50 border border-white/5">
                        <HiClock className="text-secondary text-xs" />
                        <span className="text-xs font-mono text-text/60">
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text/70 mb-5 leading-relaxed line-clamp-2 text-base">
                      {article.excerpt}
                    </p>

                    {/* Separator */}
                    <div className="h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent mb-4" />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {article.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-surface/60 border border-white/10 text-text/60 hover:border-primary/30 hover:text-primary transition-colors duration-200 cursor-pointer"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/50" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <motion.div
                    className="hidden lg:flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 rounded-xl border-2 border-white/10 group-hover:border-primary/50 flex items-center justify-center text-text/30 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                      <HiArrowRight size={24} />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/50 border border-primary/20 text-primary font-mono text-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
          >
            <span>View all articles</span>
            <HiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
