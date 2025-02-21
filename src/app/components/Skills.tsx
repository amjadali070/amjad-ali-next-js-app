"use client";

import React, { JSX } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiPytorch,
  SiOpenai,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiSupabase,
  SiPrisma,
  SiJenkins,
} from "react-icons/si";
import { MdOutlineHttp, MdDevices } from "react-icons/md";
import { GiTeamIdea, GiTestTubes } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C-Sharp", icon: <TbBrandCSharp /> },
      { name: "Solidity", icon: <SiSolidity /> },
    ],
  },
  {
    category: "Front-End",
    skills: [
      { name: "React JS", icon: <SiReact /> },
      { name: "Next JS", icon: <SiNextdotjs /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiReact /> },
      { name: "Chakra UI", icon: <SiChakraui /> },
    ],
  },
  {
    category: "Back-End",
    skills: [
      { name: "Node JS", icon: <SiNodedotjs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "REST APIs", icon: <MdOutlineHttp /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "AI/ML Tools",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "ChatGPT", icon: <SiOpenai /> },
    ],
  },
  {
    category: "Tools/Platforms",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Microsoft Azure", icon: <VscAzure /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Agile Methodologies", icon: <GiTeamIdea /> },
      { name: "CI/CD Pipelines", icon: <SiJenkins /> },
      { name: "Responsive Design", icon: <MdDevices /> },
      { name: "Software Testing", icon: <GiTestTubes /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Skills
        </h2>
        <div className="space-y-6">
          {skillsData.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 border-b border-gray-700 pb-3">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 pt-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center justify-center p-7 bg-[#182541] rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <div className="text-3xl text-[#00DBFD]">{skill.icon}</div>
                    <span className="text-xs text-gray-300 mt-3 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
