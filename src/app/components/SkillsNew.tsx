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
import { VscAzure, VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import CodeBlock from "./ui/CodeBlock";

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
    category: "languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Python", icon: <SiPython />, color: "text-blue-300" },
      { name: "Java", icon: <FaJava />, color: "text-red-400" },
      { name: "C++", icon: <SiCplusplus />, color: "text-[#1A3D64]" },
      { name: "C-Sharp", icon: <TbBrandCSharp />, color: "text-[#0C2B4E]" },
      { name: "Solidity", icon: <SiSolidity />, color: "text-gray-400" },
    ],
  },
  {
    category: "frontend",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-[#1D546C]" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-400" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-[#1A3D64]" },
      { name: "FramerMotion", icon: <SiFramer />, color: "text-white" },
      { name: "Vite", icon: <SiVite />, color: "text-yellow-300" },
    ],
  },
  {
    category: "backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "NestJS", icon: <SiNestjs />, color: "text-red-500" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-[#1D546C]" },
      { name: "Apollo", icon: <SiApollographql />, color: "text-indigo-300" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white" },
      { name: "Redis", icon: <SiRedis />, color: "text-red-400" },
    ],
  },
  {
    category: "database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-[#1A3D64]" },
    ],
  },
  {
    category: "devOps",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
      { name: "AWS", icon: <SiGooglecloud />, color: "text-orange-400" }, // Using GoogleCloud icon as placeholder or generic cloud
      { name: "GitHubActions", icon: <SiGithubactions />, color: "text-blue-300" },
    ],
  },
  {
    category: "ai_ml",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "OpenAI", icon: <SiOpenai />, color: "text-green-300" },
    ],
  },
];

const Skills: React.FC = () => {
    
  // Construct a JSON string representation of skills
  const skillsJson = {
    "name": "amjad-ali-portfolio",
    "version": "1.0.0",
    "description": "Senior Full Stack Developer Skills Matrix",
    "author": "Amjad Ali",
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "deploy": "vercel deploy"
    },
    "dependencies": skillsData.reduce((acc, cat) => {
        cat.skills.forEach(skill => {
            acc[skill.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')] = "^latest";
        });
        return acc;
    }, {} as Record<string, string>),
    "devDependencies": {
        "typescript": "^5.0.0",
        "eslint": "^8.0.0",
        "prettier": "^3.0.0"
    }
  };

  const jsonString = JSON.stringify(skillsJson, null, 2);

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-[#0d1117] border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar / Explorer View */}
            <div className="w-full md:w-64 hidden md:flex flex-col border-r border-border pr-6">
                <div className="text-xs text-muted font-bold uppercase mb-4 tracking-wider">Explorer</div>
                <div className="space-y-1">
                     <div className="flex items-center gap-2 text-foreground cursor-pointer bg-[#1f2428] px-2 py-1 rounded">
                         <span className="text-secondary">v</span>
                         <span className="font-bold text-sm">PORTFOLIO</span>
                     </div>
                     <div className="pl-4 space-y-1">
                         <div className="flex items-center gap-2 text-muted hover:text-white cursor-pointer">
                             <SiNodedotjs className="text-yellow-400 text-xs" />
                             <span className="text-sm">node_modules</span>
                         </div>
                         <div className="flex items-center gap-2 text-muted hover:text-white cursor-pointer">
                             <SiReact className="text-blue-400 text-xs" />
                             <span className="text-sm">src</span>
                         </div>
                         <div className="flex items-center gap-2 text-white bg-secondary/10 px-2 rounded cursor-pointer">
                             <VscJson className="text-yellow-400 text-xs" />
                             <span className="text-sm font-medium">package.json</span>
                         </div>
                         <div className="flex items-center gap-2 text-muted hover:text-white cursor-pointer">
                             <SiTypescript className="text-blue-400 text-xs" />
                             <span className="text-sm">tsconfig.json</span>
                         </div>
                         <div className="flex items-center gap-2 text-muted hover:text-white cursor-pointer">
                             <SiGit className="text-orange-400 text-xs" />
                             <span className="text-sm">.gitignore</span>
                         </div>
                     </div>
                </div>
            </div>

            {/* Main Code Area */}
            <div className="flex-1 min-w-0">
                <div className="mb-6 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <VscJson className="text-yellow-400 text-xl" />
                        <h2 className="text-xl text-white font-mono">package.json</h2>
                     </div>
                     <div className="text-xs text-muted font-mono">1.2 KB</div>
                </div>

                <div className="relative group">
                    <CodeBlock 
                        code={jsonString} 
                        language="json" 
                        className="bg-[#161b22] border border-border shadow-2xl rounded-lg"
                    />
                    
                    {/* Floating Icons Overlay (Visual Interest) */}
                    <div className="absolute -right-4 top-10 flex flex-col gap-4 opacity-50 pointer-events-none">
                         <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="text-4xl text-[#161b22] drop-shadow-[0_0_15px_rgba(88,166,255,0.5)]"
                        >
                            <SiReact className="text-[#61DAFB]" />
                        </motion.div>
                         <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="text-4xl text-[#161b22] drop-shadow-[0_0_15px_rgba(42,160,67,0.5)]"
                        >
                            <SiNodedotjs className="text-[#339933]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;