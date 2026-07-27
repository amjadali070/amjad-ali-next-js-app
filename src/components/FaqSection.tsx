"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long have you been doing full-stack software development?",
      answer:
        "I have over 5 years of professional experience building enterprise web applications, MERN stack SaaS platforms, CRM systems, and AI dashboards.",
    },
    {
      question: "What is your primary technology stack?",
      answer:
        "My core tech stack centers around React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and AWS cloud infrastructure.",
    },
    {
      question: "What is your project development process and timeline?",
      answer:
        "A typical project spans 2 to 6 weeks depending on scope: starting with discovery & architecture specs, followed by iterative sprint builds, TDD testing, and cloud deployment.",
    },
    {
      question: "Are you available for contract roles or full-time opportunities?",
      answer:
        "Yes! I am open to select freelance projects, long-term engineering contracts, and full-time senior software engineering leadership roles.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Meelo Accordion List */}
        <div className="space-y-0 border-t-2 border-black">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-b-2 border-black"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="text-xl font-bold text-black group-hover:underline">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black flex-shrink-0">
                    {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-6 text-black/80 font-medium text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
