"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";

interface Stat {
  label: string;
  value: string;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  behance?: string;
}

interface AboutMeProps {
  name: string;
  greeting: string;
  role: string;
  profileImage: StaticImageData | string;
  stats: Stat[];
  socialLinks: SocialLinks;
  onHireMe?: () => void;
  onDownloadResume?: () => void;
}

const HomeNav: React.FC<AboutMeProps> = ({
  name,
  greeting,
  role,
  profileImage,
  stats,
  socialLinks,
  onHireMe,
  onDownloadResume,
}) => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div
          className="
            w-full md:w-1/2 
            flex flex-col items-start 
            mt-8 md:mt-0 
            space-y-4 
            animate-fadeInLeft
          "
        >
          <p className="text-lg text-gray-300">{greeting}</p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            {name}
          </h1>

          <h2
            className="
              text-2xl md:text-3xl lg:text-4xl font-extrabold 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-[#00DBFD] to-gray-400
            "
          >
            {role}
          </h2>

          <div className="flex space-x-4 mt-2">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400 
                  hover:text-[#00DBFD] 
                  transition-colors 
                  text-xl
                  
                  hover:ring-2 hover:ring-[#00DBFD] ring-offset-2 ring-offset-black 
                  rounded-full p-1
                "
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400 
                  hover:text-[#00DBFD] 
                  transition-colors 
                  text-xl
                  hover:ring-2 hover:ring-[#00DBFD] ring-offset-2 ring-offset-black 
                  rounded-full p-1
                "
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}

            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400 
                  hover:text-[#00DBFD] 
                  transition-colors 
                  text-xl
                  hover:ring-2 hover:ring-[#00DBFD] ring-offset-2 ring-offset-black 
                  rounded-full p-1
                "
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            )}

            {socialLinks.behance && (
              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400 
                  hover:text-[#00DBFD] 
                  transition-colors 
                  text-xl
                  hover:ring-2 hover:ring-[#00DBFD] ring-offset-2 ring-offset-black 
                  rounded-full p-1
                "
                aria-label="Behance"
              >
                <FaBehance />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={onHireMe}
              className="
                bg-[#00DBFD] 
                text-black 
                font-semibold 
                py-2 px-5 
                rounded-md 
                hover:bg-[#00b0cc] 
                transition-colors
              "
            >
              Hire Me
            </button>
            <button
              onClick={onDownloadResume}
              className="
                border border-[#00DBFD] 
                text-[#00DBFD] 
                font-semibold 
                py-2 px-6 
                rounded-md 
                hover:bg-[#00DBFD] 
                hover:text-black 
                transition-colors
              "
            >
              Download Resume
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  text-center 
                  p-1.5 
                  bg-white/5 
                  rounded-md 
                  border border-white/10
                  hover:bg-white/10 
                  transition-colors
                  min-w-[90px]
                "
              >
                <p className="text-2xl font-extrabold text-[#00DBFD]">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
    w-full md:w-1/2 
    flex justify-center md:justify-end 
    animate-fadeInRight
  "
        >
          <div
            className="
      relative 
      w-64 h-64 md:w-80 md:h-80 
      flex items-center justify-center
      hover:scale-105 transition-transform
    "
          >
            <div className="absolute w-full h-full rounded-full bg-gradient-to-b from-[#00DBFD] to-transparent opacity-20 animate-pulse" />

            <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden z-10 p-2">
              <Image
                src={profileImage}
                alt={`${name} Profile`}
                fill
                className="rounded-full object-cover object-top mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNav;
