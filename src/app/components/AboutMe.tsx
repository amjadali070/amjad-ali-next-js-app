"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface AboutMeProps {
  heading: string;
  subheading: string;
  content: string;
  image: StaticImageData | string;
  buttonLabel: string;
  onDownloadCV?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  heading,
  subheading,
  content,
  image,
  buttonLabel,
  onDownloadCV,
}) => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative flex items-center justify-center">
          <div
            className="
              absolute
             
              rounded-full
             
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              -z-10
            "
          />
          <Image src={image} alt="Profile" priority />
        </div>

        <div className="flex flex-col items-start md:pl-8">
          <h2
            className="
              text-3xl md:text-4xl 
              font-bold mb-2
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#00DBFD] to-gray-400
            "
          >
            {heading}
          </h2>

          <p className="text-gray-200 text-sm md:text-base font-medium uppercase tracking-wide mb-4">
            {subheading}
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">{content}</p>

          <button
            onClick={onDownloadCV}
            className="
              relative inline-flex items-center
              bg-[#00DBFD] 
              text-black 
              font-semibold 
              py-2 px-6 
              rounded-md 
              hover:bg-[#00b0cc] 
              transition-all
              ring-offset-2 ring-offset-black
              hover:ring-2 hover:ring-[#00DBFD]
            "
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
