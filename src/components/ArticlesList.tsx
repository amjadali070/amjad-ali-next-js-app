"use client";

import { motion } from "framer-motion";
import { articlesData } from "@/lib/data";
import { HiDocumentText, HiCalendar, HiTag, HiArrowRight } from "react-icons/hi";

export default function ArticlesList() {
  return (
    <section id="articles" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex items-end justify-between">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
                >
                    <span className="text-primary">07.</span> Latest Articles
                </motion.h2>
                <div className="h-px w-32 bg-primary/50" />
            </div>
            
            <a href="#" className="hidden md:flex items-center gap-2 text-primary font-mono text-sm hover:underline">
                View all articles <HiArrowRight />
            </a>
        </div>

        <div className="space-y-6">
          {articlesData.slice(0, 3).map((article, index) => (
            <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block glass-panel p-6 rounded-xl hover:bg-surface/80 transition-all border border-transparent hover:border-primary/20"
            >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 text-xs font-mono text-text/50 mb-3">
                            <span className="text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <HiCalendar /> {article.publishDate}
                            </span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">{article.readTime}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                        </h3>
                        
                        <p className="text-text/70 mb-4 line-clamp-2 md:line-clamp-none max-w-3xl">
                            {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, i) => (
                                <span key={i} className="flex items-center gap-1 text-xs text-text/50 font-mono">
                                    <HiTag className="text-text/30" /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center h-full">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text/30 group-hover:text-primary group-hover:border-primary/50 transition-all transform group-hover:-rotate-45">
                            <HiArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline">
                View all articles <HiArrowRight />
            </a>
        </div>
      </div>
    </section>
  );
}
