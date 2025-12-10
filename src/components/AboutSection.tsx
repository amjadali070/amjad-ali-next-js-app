"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiTerminal, HiCode } from "react-icons/hi";

export default function AboutSection() {
  const codeLines = [
    { type: "comment", text: "// Initializing developer profile..." },
    { type: "import", text: "import Developer from '@/core/human';" },
    {
      type: "import",
      text: "import { Skills, Experience } from '@/abilities';",
    },
    { type: "blank", text: "" },
    {
      type: "class",
      text: "export default class AmjadAli extends Developer {",
    },
    { type: "property", text: "  name = 'Amjad Ali';", indent: 1 },
    { type: "property", text: "  role = 'Full Stack Engineer';", indent: 1 },
    { type: "property", text: "  location = 'Pakistan';", indent: 1 },
    { type: "blank", text: "" },
    { type: "method", text: "  constructor() {", indent: 1 },
    { type: "code", text: "    super();", indent: 2 },
    { type: "code", text: "    this.initialize();", indent: 2 },
    { type: "method", text: "  }", indent: 1 },
    { type: "blank", text: "" },
    { type: "method", text: "  getSkills(): string[] {", indent: 1 },
    { type: "code", text: "    return [", indent: 2 },
    { type: "code", text: "      'React', 'Next.js', 'Node.js',", indent: 3 },
    {
      type: "code",
      text: "      'TypeScript', 'MongoDB', 'PostgreSQL'",
      indent: 3,
    },
    { type: "code", text: "    ];", indent: 2 },
    { type: "method", text: "  }", indent: 1 },
    { type: "blank", text: "" },
    {
      type: "method",
      text: "  async buildSolutions(): Promise<void> {",
      indent: 1,
    },
    {
      type: "code",
      text: "    await this.develop('scalable-apps');",
      indent: 2,
    },
    { type: "code", text: "    await this.deploy('production');", indent: 2 },
    { type: "method", text: "  }", indent: 1 },
    { type: "class", text: "}" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Code Editor Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="codePattern"
              x="0"
              y="0"
              width="200"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="20"
                x2="200"
                y2="20"
                stroke="rgba(79, 195, 247, 0.2)"
                strokeWidth="1"
              />
              <text
                x="10"
                y="15"
                fill="rgba(79, 195, 247, 0.3)"
                fontSize="10"
                fontFamily="monospace"
              >
                01
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#codePattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <HiCode className="text-primary text-xl" />
            </div>
            <span className="text-xs font-mono text-primary/60 tracking-wider uppercase">
              &#47;&#47; About the developer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono text-text mb-6"
          >
            <span className="text-primary">01.</span> Developer Profile
            <span className="text-secondary ml-3">&#123;&#125;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-surface/95 via-background/90 to-surface/85 backdrop-blur-xl rounded-lg border-2 border-primary/20 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {/* Editor Header */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <HiTerminal className="text-primary" />
                    <span className="text-primary">AmjadAli.ts</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-text/40 font-mono">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02 }}
                      className="flex items-start gap-3 hover:bg-primary/5 px-2 py-0.5 rounded transition-colors"
                    >
                      {/* Line Number */}
                      <span className="text-text/30 text-xs select-none w-6 text-right flex-shrink-0">
                        {line.text ? index + 1 : ""}
                      </span>

                      {/* Code Line */}
                      <div className="flex-1">
                        {line.type === "comment" && (
                          <span className="text-green-400/60">{line.text}</span>
                        )}
                        {line.type === "import" && (
                          <span>
                            <span className="text-purple-400">import</span>
                            <span className="text-text">
                              {line.text.replace("import", "")}
                            </span>
                          </span>
                        )}
                        {line.type === "class" && (
                          <span>
                            <span className="text-blue-400">
                              {line.text.includes("export")
                                ? "export default class"
                                : "}"}
                            </span>
                            {line.text.includes("extends") && (
                              <>
                                <span className="text-yellow-400">
                                  {" "}
                                  AmjadAli{" "}
                                </span>
                                <span className="text-blue-400">extends</span>
                                <span className="text-yellow-400">
                                  {" "}
                                  Developer{" "}
                                </span>
                                <span className="text-text">&#123;</span>
                              </>
                            )}
                          </span>
                        )}
                        {line.type === "property" && (
                          <span className="text-text/90">{line.text}</span>
                        )}
                        {line.type === "method" && (
                          <span>
                            {line.text.includes("constructor") && (
                              <span className="text-blue-400">{line.text}</span>
                            )}
                            {line.text.includes("getSkills") && (
                              <span>
                                <span className="text-yellow-400">
                                  getSkills
                                </span>
                                <span className="text-text">(): </span>
                                <span className="text-blue-400">string[]</span>
                                <span className="text-text"> &#123;</span>
                              </span>
                            )}
                            {line.text.includes("buildSolutions") && (
                              <span>
                                <span className="text-purple-400">async </span>
                                <span className="text-yellow-400">
                                  buildSolutions
                                </span>
                                <span className="text-text">(): </span>
                                <span className="text-blue-400">Promise</span>
                                <span className="text-text">&lt;</span>
                                <span className="text-blue-400">void</span>
                                <span className="text-text">&gt; &#123;</span>
                              </span>
                            )}
                            {line.text === "  }" && (
                              <span className="text-text"> &#125;</span>
                            )}
                          </span>
                        )}
                        {line.type === "code" && (
                          <span className="text-text/80">{line.text}</span>
                        )}
                        {line.type === "blank" && <span>&nbsp;</span>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Editor Footer */}
              <div className="bg-background/40 border-t border-primary/20 px-4 py-2 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4">
                  <span className="text-text/60">UTF-8</span>
                  <span className="text-text/40">|</span>
                  <span className="text-text/60">TypeScript</span>
                  <span className="text-text/40">|</span>
                  <span className="text-text/60">Ln 27, Col 1</span>
                </div>
                <div className="text-green-400">✓ No errors</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-surface/80 to-background/70 backdrop-blur-xl rounded-lg border border-secondary/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm">
                    &#123;&#125;
                  </span>
                </div>
                <h3 className="font-mono font-bold text-text">Overview</h3>
              </div>
              <div className="text-text/80 space-y-4 leading-relaxed">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="text-primary font-semibold">Amjad Ali</span>,
                  a Full Stack Software Engineer who bridges the gap between
                  engineering and design. My journey began with curiosity about
                  how the internet works and evolved into a passion for building
                  robust, scalable applications.
                </p>
                <p>
                  I specialize in the{" "}
                  <span className="text-secondary font-semibold">
                    MERN stack
                  </span>{" "}
                  and{" "}
                  <span className="text-secondary font-semibold">Next.js</span>,
                  crafting efficient solutions for complex problems. From
                  AI-powered dashboards to CRM systems and interactive 3D
                  experiences, I focus on delivering high-quality code and
                  exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-4"
              >
                <div className="font-mono text-xs text-primary/60 mb-2">
                  hardWorker
                </div>
                <div className="font-mono text-2xl font-bold text-primary">
                  true
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-lg p-4"
              >
                <div className="font-mono text-xs text-secondary/60 mb-2">
                  quickLearner
                </div>
                <div className="font-mono text-2xl font-bold text-secondary">
                  true
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-400/30 rounded-lg p-4"
              >
                <div className="font-mono text-xs text-purple-400/60 mb-2">
                  problemSolver
                </div>
                <div className="font-mono text-2xl font-bold text-purple-400">
                  true
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-400/30 rounded-lg p-4"
              >
                <div className="font-mono text-xs text-green-400/60 mb-2">
                  teamPlayer
                </div>
                <div className="font-mono text-2xl font-bold text-green-400">
                  true
                </div>
              </motion.div>
            </div>

            {/* Experience Note */}
            <div className="bg-gradient-to-r from-background/50 to-surface/50 backdrop-blur-xl rounded-lg border border-primary/20 p-5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-yellow-500/20 border border-yellow-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 text-sm">i</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text/80 leading-relaxed font-mono">
                    <span className="text-yellow-400">⚡</span> Fast-forward to
                    today: I&apos;ve worked on challenging projects that
                    sharpened my skills in both frontend and backend
                    development, always staying current with the latest
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ x: 4 }} className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary via-primary to-secondary text-background font-mono font-bold rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(125,211,252,0.5)] transition-all"
              >
                <span>Start a conversation</span>
                <HiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
