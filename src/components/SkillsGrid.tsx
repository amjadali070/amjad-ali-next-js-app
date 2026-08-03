"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiVite,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiSocketdotio,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiJest,
  SiVitest,
  SiCypress,
  SiOpenai,
  SiGoogle,
  SiLangchain,
  SiJsonwebtokens,
  SiStripe,
  SiGithubcopilot,
  SiAnthropic,
  SiApachespark,
  SiSnowflake,
  SiPandas,
  SiNumpy,
  SiDbt,
  SiPlotly,
  SiApachekafka,
  SiApache,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNestjs,
  SiApollographql,
  SiHuggingface,
  SiApacheairflow,
  SiMlflow,
  SiSqlite,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiTerraform,
  SiCloudflare,
  SiNginx,
  SiJupyter,
  SiPycharm,
  SiReactquery,
  SiFramer,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { MdOutlineHttp } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
import {
  HiOutlineSquare3Stack3D,
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
  HiOutlineQueueList,
  HiOutlineUserGroup,
  HiOutlineCpuChip,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skillCategories = [
    {
      id: "fullstack_mern",
      title: "Full-Stack & MERN Stack",
      subtitle: "Full Stack Engineer & MERN Stack Architecture",
      accentBg: "bg-meelo-cardLavender",
      headerIcon: <HiOutlineSquare3Stack3D className="text-purple-800 text-base" />,
      skills: [
        { name: "Full Stack Engineering", icon: <HiOutlineSquare3Stack3D className="text-purple-600" /> },
        { name: "MERN Stack Architecture", icon: <HiOutlineSquare3Stack3D className="text-teal-600" /> },
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
        { name: "REST & WebSockets", icon: <MdOutlineHttp className="text-purple-600 text-lg" /> },
      ],
    },
    {
      id: "frontend",
      title: "Front-End Engineering",
      subtitle: "Frontend Engineer & Client Architecture",
      accentBg: "bg-meelo-cardBlue",
      headerIcon: <HiOutlinePaintBrush className="text-blue-800 text-base" />,
      skills: [
        { name: "Frontend Engineering", icon: <HiOutlinePaintBrush className="text-blue-600" /> },
        { name: "React 19", icon: <SiReact className="text-cyan-500" /> },
        { name: "Next.js 15", icon: <SiNextdotjs className="text-black" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
        { name: "React Query", icon: <SiReactquery className="text-pink-600" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-black" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
        { name: "Chakra UI", icon: <SiChakraui className="text-teal-600" /> },
        { name: "HTML5 & CSS3", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
    },
    {
      id: "backend",
      title: "Back-End Engineering",
      subtitle: "Backend Engineer, Microservices & Distributed APIs",
      accentBg: "bg-meelo-cardPink",
      headerIcon: <HiOutlineServer className="text-pink-800 text-base" />,
      skills: [
        { name: "Backend Engineering", icon: <HiOutlineServer className="text-pink-600" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-600" /> },
        { name: "Django", icon: <SiDjango className="text-emerald-800" /> },
        { name: "REST APIs", icon: <MdOutlineHttp className="text-purple-600 text-lg" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "Apollo Federation", icon: <SiApollographql className="text-indigo-600" /> },
        { name: "Socket.io & WebSockets", icon: <SiSocketdotio className="text-black" /> },
        { name: "Redis Pub/Sub", icon: <SiRedis className="text-red-600" /> },
        { name: "BullMQ Queue", icon: <HiOutlineQueueList className="text-amber-600" /> },
        { name: "Nginx Server", icon: <SiNginx className="text-green-700" /> },
      ],
    },
    {
      id: "data_engineering",
      title: "Data Engineering",
      subtitle: "Streaming Ingestion, Distributed Compute & Warehousing",
      accentBg: "bg-meelo-cardPeach",
      headerIcon: <HiOutlineDatabase className="text-amber-800 text-base" />,
      skills: [
        { name: "Apache Spark", icon: <SiApachespark className="text-orange-500" /> },
        { name: "Apache Airflow", icon: <SiApacheairflow className="text-blue-600" /> },
        { name: "Apache Kafka", icon: <SiApachekafka className="text-gray-700" /> },
        { name: "Snowflake", icon: <SiSnowflake className="text-sky-500" /> },
        { name: "dbt", icon: <SiDbt className="text-orange-600" /> },
        { name: "Pandas", icon: <SiPandas className="text-blue-700" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
        { name: "BigQuery", icon: <SiGooglecloud className="text-blue-500" /> },
        { name: "Delta Lake", icon: <HiOutlineDatabase className="text-blue-600" /> },
        { name: "AWS Glue", icon: <SiAmazonwebservices className="text-amber-500" /> },
        { name: "ETL Pipelines", icon: <HiOutlineSquare3Stack3D className="text-purple-600" /> },
      ],
    },
    {
      id: "ml_mlops",
      title: "Machine Learning & MLOps",
      subtitle: "Model Training, Experiment Tracking & Serving",
      accentBg: "bg-meelo-cardLavender",
      headerIcon: <HiOutlineCpuChip className="text-purple-800 text-base" />,
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="text-red-600" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
        { name: "MLflow", icon: <SiMlflow className="text-blue-600" /> },
        { name: "XGBoost", icon: <HiOutlineCpuChip className="text-green-600" /> },
        { name: "ONNX Runtime", icon: <HiOutlineCpuChip className="text-gray-600" /> },
        { name: "Feature Store", icon: <HiOutlineDatabase className="text-indigo-600" /> },
        { name: "Model Serving", icon: <HiOutlineServer className="text-pink-600" /> },
        { name: "DVC", icon: <SiGit className="text-purple-600" /> },
      ],
    },
    {
      id: "ai_llms",
      title: "AI Engineering & LLMs",
      subtitle: "RAG Systems, Agentic Workflows & Model Fine-Tuning",
      accentBg: "bg-meelo-cardMint",
      headerIcon: <HiOutlineSparkles className="text-emerald-800 text-base" />,
      skills: [
        { name: "LangChain", icon: <SiLangchain className="text-emerald-600" /> },
        { name: "LangGraph", icon: <SiLangchain className="text-emerald-700" /> },
        { name: "OpenAI API", icon: <SiOpenai className="text-emerald-600" /> },
        { name: "Gemini API", icon: <SiGoogle className="text-blue-500" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-500" /> },
        { name: "RAG Pipelines", icon: <HiOutlineSparkles className="text-purple-600" /> },
        { name: "pgvector", icon: <SiPostgresql className="text-indigo-600" /> },
        { name: "Multi-Agent AI", icon: <HiOutlineUserGroup className="text-blue-600" /> },
        { name: "Transformer Fine-Tuning", icon: <SiTensorflow className="text-orange-600" /> },
      ],
    },
    {
      id: "data_science",
      title: "Data Science & Analytics",
      subtitle: "Predictive Analytics, Forecasting & Data Viz",
      accentBg: "bg-meelo-cardBlue",
      headerIcon: <HiOutlineChartBar className="text-blue-800 text-base" />,
      skills: [
        { name: "Plotly", icon: <SiPlotly className="text-purple-500" /> },
        { name: "SHAP Explainability", icon: <HiOutlineSparkles className="text-amber-500" /> },
        { name: "Prophet Forecasting", icon: <HiOutlineChartBar className="text-blue-500" /> },
        { name: "Predictive Modeling", icon: <HiOutlineCpuChip className="text-green-600" /> },
        { name: "Statistical Analysis", icon: <HiOutlineCodeBracket className="text-emerald-800" /> },
        { name: "Metabase BI", icon: <HiOutlineDatabase className="text-blue-600" /> },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      subtitle: "Relational, NoSQL, Columnar & Vector DBs",
      accentBg: "bg-meelo-cardPeach",
      headerIcon: <HiOutlineDatabase className="text-amber-800 text-base" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Redis", icon: <SiRedis className="text-red-600" /> },
        { name: "Snowflake DB", icon: <SiSnowflake className="text-sky-500" /> },
        { name: "pgvector", icon: <SiPostgresql className="text-indigo-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-800" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-600" /> },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Cloud Infrastructure",
      subtitle: "Container Orchestration, CI/CD & IaC",
      accentBg: "bg-meelo-cardLavender",
      headerIcon: <HiOutlineCloud className="text-indigo-800 text-base" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-600" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-amber-500" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
        { name: "Azure", icon: <VscAzure className="text-blue-600" /> },
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "Terraform", icon: <SiTerraform className="text-purple-600" /> },
        { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500" /> },
      ],
    },
    {
      id: "languages",
      title: "Programming Languages",
      subtitle: "Core Syntax & Algorithmic Foundations",
      accentBg: "bg-meelo-cardMint",
      headerIcon: <HiOutlineCodeBracket className="text-emerald-800 text-base" />,
      skills: [
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "SQL", icon: <HiOutlineDatabase className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
      ],
    },
    {
      id: "testing",
      title: "Testing & Practices",
      subtitle: "Quality Assurance & System Design",
      accentBg: "bg-meelo-cardMint",
      headerIcon: <HiOutlineCheckBadge className="text-teal-800 text-base" />,
      skills: [
        { name: "Jest", icon: <SiJest className="text-red-600" /> },
        { name: "Vitest", icon: <SiVitest className="text-yellow-600" /> },
        { name: "Cypress", icon: <SiCypress className="text-emerald-600" /> },
        { name: "Agile/Scrum", icon: <HiOutlineUserGroup className="text-blue-600" /> },
        { name: "System Design", icon: <HiOutlineSquare3Stack3D className="text-purple-600" /> },
      ],
    },
    {
      id: "dev_tools",
      title: "Daily Dev Tools & IDEs",
      subtitle: "AI Assistants, Notebooks & Environments",
      accentBg: "bg-meelo-cardPink",
      headerIcon: <HiOutlineWrenchScrewdriver className="text-rose-800 text-base" />,
      skills: [
        { name: "Cursor AI", icon: <HiOutlineSparkles className="text-purple-600" /> },
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-blue-600" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-600" /> },
        { name: "PyCharm", icon: <SiPycharm className="text-green-600" /> },
        { name: "Claude", icon: <SiAnthropic className="text-orange-600" /> },
        { name: "ChatGPT", icon: <SiOpenai className="text-emerald-600" /> },
      ],
    },
  ];

  const categories = [
    { label: "All Stack", value: "All" },
    { label: "Full Stack & MERN", value: "Full-Stack & MERN Stack" },
    { label: "Front-End", value: "Front-End Engineering" },
    { label: "Back-End", value: "Back-End Engineering" },
    { label: "Data Engineering", value: "Data Engineering" },
    { label: "ML & MLOps", value: "Machine Learning & MLOps" },
    { label: "AI & LLMs", value: "AI Engineering & LLMs" },
    { label: "Data Science", value: "Data Science & Analytics" },
    { label: "Databases", value: "Databases & Storage" },
    { label: "DevOps & Cloud", value: "DevOps & Cloud Infrastructure" },
    { label: "Languages", value: "Programming Languages" },
    { label: "Dev Tools", value: "Daily Dev Tools & IDEs" },
  ];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="meelo-badge">* TECHNICAL EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight"
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-black/80 font-semibold max-w-2xl mx-auto"
          >
            Comprehensive technical stack led by <strong>Full Stack Engineering</strong>, <strong>MERN Stack Architecture</strong>, <strong>Frontend Engineering</strong>, and <strong>Backend Engineering</strong>, backed by enterprise Data Engineering, ML, and AI capabilities.
          </motion.p>
        </div>

        {/* UNIFIED MASTER CONSOLE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-brutal space-y-8"
        >
          {/* Top Console Bar & Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/10 pb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-black inline-block animate-pulse" />
              <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black">
                Tech Stack Matrix ({totalSkillsCount} Skills across 12 Categories)
              </span>
            </div>

            {/* Filter Pills Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all duration-150 cursor-pointer whitespace-nowrap select-none ${
                      isActive
                        ? "bg-black text-white border-2 border-black shadow-sm"
                        : "bg-transparent text-black/80 hover:bg-meelo-cardLavender/70 hover:text-black border-2 border-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified Content Flow */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-3.5">
                  {/* Inline Category Divider Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg border-2 border-black ${category.accentBg} flex items-center justify-center shadow-brutal-sm flex-shrink-0`}
                    >
                      {category.headerIcon}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs font-semibold text-black/60 hidden md:inline">
                      ({category.subtitle})
                    </span>
                    <div className="h-0.5 bg-black/10 flex-1 ml-2 hidden sm:block" />
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-black text-[11px] font-black text-black flex-shrink-0">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Technology Skill Pills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="bg-meelo-offwhite/80 border-2 border-black/15 hover:border-black hover:bg-amber-100/60 rounded-xl px-3 py-2.5 flex items-center gap-2.5 font-bold text-xs text-black shadow-sm hover:shadow-brutal-sm transition-all duration-150 select-none cursor-pointer group"
                        title={skill.name}
                      >
                        <span
                          className="text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-150"
                          aria-label={`${skill.name} icon`}
                          role="img"
                        >
                          {skill.icon}
                        </span>
                        <span className="truncate tracking-tight">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Integrated Summary Callout Footer */}
          <div className="pt-6 border-t-2 border-black/10">
            <div className="bg-meelo-cardMint border-2 border-black rounded-2xl p-5 sm:p-6 shadow-brutal-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-0.5">
                <h4 className="text-base sm:text-lg font-black text-black">
                  Full Stack, Frontend, Backend & AI Engineering Architecture
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-black/80">
                  Battle-tested experience across MERN Stack applications, responsive web clients, distributed microservices, cloud deployments, and scalable AI solutions.
                </p>
              </div>
              <a href="#contact" className="meelo-btn-dark text-xs flex-shrink-0 py-2.5 px-5">
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
