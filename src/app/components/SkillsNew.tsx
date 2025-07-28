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
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  level?: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  gradient: string;
  icon: JSX.Element;
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    gradient: "from-yellow-400 to-orange-500",
    icon: <HiLightningBolt />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", level: 95 },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", level: 90 },
      { name: "Python", icon: <SiPython />, color: "text-blue-300", level: 85 },
      { name: "Java", icon: <FaJava />, color: "text-red-400", level: 80 },
      { name: "C++", icon: <SiCplusplus />, color: "text-purple-400", level: 75 },
      { name: "C-Sharp", icon: <TbBrandCSharp />, color: "text-purple-500", level: 70 },
      { name: "Solidity", icon: <SiSolidity />, color: "text-gray-400", level: 65 },
    ],
  },
  {
    category: "Front-End",
    gradient: "from-blue-400 to-purple-500",
    icon: <SiReact />,
    skills: [
      { name: "React JS", icon: <SiReact />, color: "text-cyan-400", level: 95 },
      { name: "Next JS", icon: <SiNextdotjs />, color: "text-white", level: 90 },
      { name: "HTML", icon: <SiHtml5 />, color: "text-orange-400", level: 95 },
      { name: "CSS", icon: <SiCss3 />, color: "text-blue-400", level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400", level: 90 },
      { name: "Material UI", icon: <SiReact />, color: "text-blue-500", level: 85 },
      { name: "Chakra UI", icon: <SiChakraui />, color: "text-teal-400", level: 80 },
    ],
  },
  {
    category: "Back-End",
    gradient: "from-green-400 to-blue-500",
    icon: <SiNodedotjs />,
    skills: [
      { name: "Node JS", icon: <SiNodedotjs />, color: "text-green-400", level: 90 },
      { name: "Express JS", icon: <SiExpress />, color: "text-gray-300", level: 85 },
      { name: "REST APIs", icon: <MdOutlineHttp />, color: "text-purple-400", level: 90 },
    ],
  },
  {
    category: "Databases",
    gradient: "from-purple-400 to-pink-500",
    icon: <SiMongodb />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", level: 90 },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400", level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300", level: 80 },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400", level: 85 },
    ],
  },
  {
    category: "AI/ML Tools",
    gradient: "from-pink-400 to-red-500",
    icon: <SiTensorflow />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400", level: 80 },
      { name: "Keras", icon: <SiKeras />, color: "text-red-400", level: 75 },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-orange-300", level: 80 },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-400", level: 75 },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500", level: 70 },
      { name: "ChatGPT", icon: <SiOpenai />, color: "text-green-300", level: 85 },
    ],
  },
  {
    category: "Tools/Platforms",
    gradient: "from-cyan-400 to-blue-600",
    icon: <SiGit />,
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-400", level: 90 },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400", level: 80 },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500", level: 70 },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-red-400", level: 75 },
      { name: "Microsoft Azure", icon: <VscAzure />, color: "text-blue-400", level: 70 },
      { name: "Supabase", icon: <SiSupabase />, color: "text-green-400", level: 80 },
      { name: "Prisma", icon: <SiPrisma />, color: "text-purple-400", level: 85 },
    ],
  },
  {
    category: "Others",
    gradient: "from-indigo-400 to-purple-600",
    icon: <GiTeamIdea />,
    skills: [
      { name: "Agile Methodologies", icon: <GiTeamIdea />, color: "text-blue-400", level: 90 },
      { name: "CI/CD Pipelines", icon: <SiJenkins />, color: "text-red-400", level: 80 },
      { name: "Responsive Design", icon: <MdDevices />, color: "text-purple-400", level: 95 },
      { name: "Software Testing", icon: <GiTestTubes />, color: "text-green-400", level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <HiSparkles className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">Technical Arsenal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">My</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and methodologies for building exceptional digital experiences.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <div key={idx} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient} 
                  shadow-lg shadow-purple-500/25`}>
                  <span className="text-white text-xl">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative p-6 glass rounded-2xl hover:bg-white/10 
                      smooth-transition transform hover:scale-105 hover:shadow-lg 
                      hover:shadow-purple-500/25"
                  >
                    {/* Skill Icon */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`text-4xl ${skill.color} group-hover:scale-110 smooth-transition`}>
                        {skill.icon}
                      </div>
                      <span className="text-xs text-slate-300 text-center font-medium 
                        group-hover:text-white smooth-transition">
                        {skill.name}
                      </span>
                    </div>

                    {/* Skill Level Indicator */}
                    {skill.level && (
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} smooth-transition`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent 
                      group-hover:border-purple-500/30 smooth-transition"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 glass rounded-2xl">
            <div className="text-2xl">
              <HiLightningBolt className="text-yellow-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-semibold">Ready to Build Something Amazing?</h4>
              <p className="text-slate-400 text-sm">Let&apos;s leverage these skills for your next project</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 
                rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25 
                hover:shadow-purple-500/40 smooth-transition transform hover:scale-105"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
