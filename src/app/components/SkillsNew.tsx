"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
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
  SiGithubcopilot,
  SiNestjs,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiVite,
  SiStorybook,
  SiReacthookform,
  SiHuggingface,
  SiGithubactions,
  SiVercel,
  SiNetlify,
  SiTerraform,
  SiCloudflare,
  SiRedis,
  SiNginx,
  SiApachekafka,
  SiSqlite,
  SiJest,
  SiCypress,
  SiTestinglibrary,
} from "react-icons/si";
import { MdOutlineHttp, MdDevices } from "react-icons/md";
import { GiTeamIdea, GiTestTubes } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "dependencies",
    skills: [
      { name: "javascript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "typescript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "python", icon: <SiPython />, color: "text-blue-300" },
      { name: "react", icon: <SiReact />, color: "text-cyan-400" },
      { name: "next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "node.js", icon: <SiNodedotjs />, color: "text-green-400" },
      { name: "express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "mongodb", icon: <SiMongodb />, color: "text-green-400" },
      { name: "postgresql", icon: <SiPostgresql />, color: "text-blue-300" },
      { name: "tailwindcss", icon: <SiTailwindcss />, color: "text-teal-400" },
    ],
  },
  {
    category: "devDependencies",
    skills: [
      { name: "docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
      { name: "git", icon: <SiGit />, color: "text-orange-400" },
      { name: "github-actions", icon: <SiGithubactions />, color: "text-blue-300" },
      { name: "jest", icon: <SiJest />, color: "text-red-300" },
      { name: "cypress", icon: <SiCypress />, color: "text-green-300" },
      { name: "vercel", icon: <SiVercel />, color: "text-white" },
      { name: "netlify", icon: <SiNetlify />, color: "text-green-300" },
    ],
  },
  {
    category: "ai-tools",
    skills: [
      { name: "tensorflow", icon: <SiTensorflow />, color: "text-orange-400" },
      { name: "pytorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "openai", icon: <SiOpenai />, color: "text-green-300" },
      { name: "huggingface", icon: <SiHuggingface />, color: "text-yellow-300" },
      { name: "github-copilot", icon: <SiGithubcopilot />, color: "text-sky-400" },
    ],
  },
  {
    category: "cloud-platforms",
    skills: [
      { name: "google-cloud", icon: <SiGooglecloud />, color: "text-red-400" },
      { name: "azure", icon: <VscAzure />, color: "text-blue-400" },
      { name: "firebase", icon: <SiFirebase />, color: "text-yellow-400" },
      { name: "supabase", icon: <SiSupabase />, color: "text-green-400" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Package.json Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-code-orange">{"{"}</div>
          
          <div className="pl-6 space-y-2">
            <div className="font-mono text-sm">
              <span className="text-code-blue">"name"</span>
              <span className="text-text-secondary">: </span>
              <span className="text-code-green">"@amjad/skills"</span>
              <span className="text-text-secondary">,</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-code-blue">"version"</span>
              <span className="text-text-secondary">: </span>
              <span className="text-code-green">"2.0.0"</span>
              <span className="text-text-secondary">,</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Categories - Package List Style */}
        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Category Header */}
              <div className="pl-6">
                <div className="font-mono text-sm">
                  <span className="text-code-blue">"{category.category}"</span>
                  <span className="text-text-secondary">: {"{"}</span>
                </div>
              </div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pl-12"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="group relative flex items-center gap-3 p-3 bg-surface border border-border rounded-lg hover:border-accent-primary/50 transition-all duration-300"
                    variants={staggerItemVariants}
                  >
                    {/* Icon */}
                    <div className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-xs text-text-secondary group-hover:text-accent-primary transition-colors duration-300 truncate">
                        {skill.name}
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-lg shadow-glow-sm" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Closing Brace */}
              <div className="pl-6 font-mono text-sm text-text-secondary">
                {"}"}
                {idx < skillsData.length - 1 && ","}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer - Closing Brace */}
        <motion.div
          className="mt-8 font-mono text-sm text-code-orange"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {"}"}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 p-6 bg-surface border border-border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="font-mono text-sm text-text-secondary">
            <span className="text-code-purple">//</span> A comprehensive toolkit
            of modern technologies for building exceptional digital experiences
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;