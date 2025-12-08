"use client";

import React from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  children,
  title = "bash",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-lg overflow-hidden border border-border bg-panel shadow-2xl ${className}`}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0d1117] border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-muted text-xs font-mono select-none">{title}</div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      
      {/* Content */}
      <div className="p-4 font-mono text-sm md:text-base text-foreground bg-panel/95 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
