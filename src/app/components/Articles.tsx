"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";

const Articles: React.FC = () => {
  const articles = [
    {
      title: "Understanding-React-Server-Components.md",
      date: "Oct 25 10:00",
      size: "4.2K",
      permissions: "-rw-r--r--",
      link: "https://medium.com/@amjadpitafi070"
    },
    {
      title: "NextJS-13-App-Router-Guide.md", 
      date: "Sep 15 14:30",
      size: "8.1K",
      permissions: "-rw-r--r--",
      link: "https://dev.to/amjadpitafi"
    },
    {
      title: "Optimizing-Web-Performance-2024.md",
      date: "Aug 05 09:15",
      size: "6.5K", 
      permissions: "-rw-r--r--",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">ls</span> -l ./articles
          </h2>
          <p className="text-muted font-mono">// Technical writing and documentation</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="zsh ~ ls -l articles">
            <div className="font-mono text-sm space-y-2 overflow-x-auto">
                <div className="text-muted border-b border-border pb-2 mb-4">
                    total {articles.length * 4 + 12}
                </div>
                {articles.map((article, index) => (
                    <div key={index} className="grid grid-cols-[auto_1fr] md:grid-cols-[100px_80px_80px_60px_1fr] gap-4 items-center group cursor-pointer hover:bg-[#161b22] p-1 rounded">
                        <span className="text-muted hidden md:block">{article.permissions}</span>
                        <span className="text-orange-400 hidden md:block">amjad</span>
                        <span className="text-blue-400 hidden md:block">admin</span>
                        <span className="text-muted hidden md:block">{article.size}</span>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <span className="text-muted text-xs md:text-sm whitespace-nowrap">{article.date}</span>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-foreground group-hover:text-secondary transition-colors">
                                {article.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
