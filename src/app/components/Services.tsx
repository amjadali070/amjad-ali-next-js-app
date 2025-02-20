"use client";

import React from "react";

import { ReactNode } from "react";

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
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-8
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center 
                p-4
              "
            >
              <div className="mb-4 text-[#00DBFD] text-6xl mx-auto">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
