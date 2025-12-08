"use client";

import React from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";
import CodeBlock from "./ui/CodeBlock";

const Testimonials: React.FC = () => {
  const reviews = [
    {
      timestamp: "2024-04-15T10:30:00Z",
      reviewer: "Client A",
      role: "Product Manager",
      rating: 5,
      comment: "Exceptional work on the backend architecture. The implementation is robust and scalable."
    },
    {
      timestamp: "2024-02-28T14:15:00Z", 
      reviewer: "Client B",
      role: "CTO",
      rating: 5,
      comment: "Great communication and coding standards. Delivered the project ahead of schedule."
    },
    {
      timestamp: "2023-11-20T09:45:00Z",
      reviewer: "Client C", 
      role: "Tech Lead",
      rating: 5,
      comment: "A true professional. Solved complex issues with elegant solutions."
    }
  ];

  const logContent = reviews.map(review => 
`[${review.timestamp}] [INFO] Review from ${review.reviewer} (${review.role})
Rating: ${"★".repeat(review.rating)}
Message: "${review.comment}"
----------------------------------------`
  ).join("\n\n");

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">tail</span> -f reviews.log
          </h2>
          <p className="text-muted font-mono">// Client feedback and code reviews</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="bash ~ tail -f reviews.log">
             <CodeBlock 
                code={logContent} 
                language="log" 
                className="bg-transparent"
             />
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
