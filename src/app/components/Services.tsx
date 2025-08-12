"use client";

import React from "react";
import { ReactNode } from "react";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
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
  const modernServices = services.map((service, index) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-cyan-500 to-blue-500",
      "from-green-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-pink-500 to-rose-500",
    ];

    return {
      ...service,
      gradient: gradients[index % gradients.length],
    };
  });

  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-4">
            <HiSparkles className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">
              {heading.split(" ")[0]}
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {heading.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {modernServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 glass rounded-3xl hover:bg-white/10 
                smooth-transition transform hover:-translate-y-2 hover:shadow-2xl 
                hover:shadow-purple-500/10 min-h-[300px] flex flex-col"
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex p-3 lg:p-4 rounded-2xl bg-gradient-to-r ${service.gradient} 
                  shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 smooth-transition`}
                >
                  <span className="text-white text-2xl lg:text-3xl">{service.icon}</span>
                </div>

                {/* Floating indicator */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 
                  rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 
                  smooth-transition transform scale-0 group-hover:scale-100"
                >
                  <HiLightningBolt className="text-white text-sm" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4 flex-1">
                <h3
                  className="text-lg lg:text-xl font-bold text-white group-hover:text-transparent 
                  group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                  group-hover:from-purple-400 group-hover:to-cyan-400 smooth-transition"
                >
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover:text-slate-300 smooth-transition">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 rounded-3xl border border-transparent 
                group-hover:border-purple-500/30 smooth-transition"
              ></div>

              {/* Background Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} 
                opacity-0 group-hover:opacity-5 smooth-transition`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 glass rounded-2xl">
            <div className="text-2xl">
              <HiSparkles className="text-yellow-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-semibold">
                Ready to Start Your Project?
              </h4>
              <p className="text-slate-400 text-sm">
                Let&apos;s bring your ideas to life together
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 
                rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25 
                hover:shadow-purple-500/40 smooth-transition transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
