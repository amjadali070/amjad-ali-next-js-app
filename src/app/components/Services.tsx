"use client";

import React from "react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServicesProps {
  heading: string;
  subheading: string;
  services: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({
  heading,
  subheading,
  services,
}) => {
  const methods = ["POST", "GET", "PUT", "DELETE"];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - API Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">const</span>{" "}
            <span className="text-accent-primary">Services</span> ={" "}
            <span className="text-code-orange">() =&gt; {"{"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            {heading}
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            {subheading}
          </p>
        </motion.div>

        {/* Services Grid - API Endpoint Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300"
              variants={staggerItemVariants}
            >
              {/* API Method Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-2 py-1 text-xs font-mono rounded border ${
                    index === 0
                      ? "bg-code-green/10 text-code-green border-code-green/20"
                      : index === 1
                      ? "bg-code-blue/10 text-code-blue border-code-blue/20"
                      : index === 2
                      ? "bg-code-orange/10 text-code-orange border-code-orange/20"
                      : "bg-code-purple/10 text-code-purple border-code-purple/20"
                  }`}
                >
                  {methods[index % methods.length]}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  /api/services/{index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-panel border border-border rounded-lg flex items-center justify-center mb-4 group-hover:border-accent-primary/50 transition-all duration-300">
                <span className="text-2xl text-accent-primary">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-accent-primary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>learn_more</span>
                <HiChevronRight className="text-sm" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-glow-sm" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer - Closing Brace + CTA */}
        <motion.div
          className="mt-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-mono text-sm text-code-orange">{"}"}</div>

          {/* CTA */}
          <div className="flex items-center gap-4 p-6 bg-surface border border-border rounded-lg">
            <div className="flex-1">
              <h4 className="text-text-primary font-semibold mb-1">
                Ready to Start Your Project?
              </h4>
              <p className="text-text-secondary text-sm">
                Let's bring your ideas to life together
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
