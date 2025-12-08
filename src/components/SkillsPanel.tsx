"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function SkillsPanel() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface/30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
            
          {/* Left Side - Skills List */}
          <div className="w-full md:w-2/3">
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-mono text-text mb-4"
              >
                <span className="text-primary">02.</span> Technical Arsenal
              </motion.h2>
              <div className="h-px w-32 bg-primary/50" />
            </div>

            <div className="space-y-8">
              {skillsData.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                    <span className="text-primary">{category.icon}</span>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-3 rounded bg-surface border border-white/5 hover:border-primary/30 transition-colors group"
                      >
                        <span className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`}>
                          {skill.icon}
                        </span>
                        <span className="text-sm text-text/80 font-mono">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Orbit Placeholder / Decorative */}
          <div className="hidden md:block w-1/3 relative">
             <div className="sticky top-24 h-[600px] w-full flex items-center justify-center">
                 {/* This will be the 3D Orbit Component */}
                 <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-10 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="absolute inset-20 border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                 
                 <div className="text-center p-6 glass-panel rounded-xl">
                     <p className="font-mono text-primary text-sm mb-2">System Status</p>
                     <p className="text-2xl font-bold text-text">Online</p>
                     <div className="mt-4 flex gap-2 justify-center">
                         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-xs text-text/60">All Systems Operational</span>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
