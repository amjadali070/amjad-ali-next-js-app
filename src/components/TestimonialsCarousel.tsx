"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { HiChatAlt2, HiStar } from "react-icons/hi";
import { useState } from "react";

export default function TestimonialsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-text mb-4">
                            <span className="text-primary">08.</span> Client Feedback
                        </h2>
                        <div className="h-px w-32 bg-primary/50 mx-auto mb-6" />
                        <p className="text-text/60">
                            Trusted by technical leaders and founders to deliver robust solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonialsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl relative"
                        >
                            <div className="absolute top-6 right-6 text-primary/10">
                                <HiChatAlt2 size={48} />
                            </div>

                            <div className="flex gap-1 mb-4 text-secondary">
                                {[...Array(item.rating)].map((_, i) => (
                                    <HiStar key={i} />
                                ))}
                            </div>

                            <blockquote className="text-lg text-text/80 leading-relaxed mb-6 font-medium relative z-10">
                                "{item.testimonial}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-text">{item.name}</div>
                                    <div className="text-sm text-text/50 font-mono">
                                        {item.position} @ {item.company}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-6 right-6 text-xs font-mono text-primary/40 px-2 py-1 bg-primary/5 rounded border border-primary/10">
                                {item.projectType}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
