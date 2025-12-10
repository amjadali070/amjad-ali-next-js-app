"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun, HiCode, HiTerminal } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative group p-2 rounded-xl bg-gradient-to-br from-surface/50 to-background/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background Matrix/Glitch Effect (Subtle) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('https://media.giphy.com/media/dummy/giphy.gif')] pointer-events-none" />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-${isDark ? 'primary' : 'yellow-400'}/5 blur-xl group-hover:blur-2xl transition-all`} />

      <div className="relative flex items-center justify-center gap-1">
        {/* Animated Brackets */}
        <motion.span 
          animate={{ x: isDark ? -2 : 0 }}
          className="text-primary/60 font-mono text-lg font-bold"
        >
          &#123;
        </motion.span>

        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="dark"
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
              >
                <HiMoon className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(79,195,247,0.5)]" />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ y: -20, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
              >
                <HiSun className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.span 
          animate={{ x: isDark ? 2 : 0 }}
          className="text-primary/60 font-mono text-lg font-bold"
        >
          &#125;
        </motion.span>
      </div>

      {/* Terminal Cursor Effect */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="absolute bottom-1 right-2 w-1.5 h-0.5 bg-primary/40 rounded-full"
      />
    </motion.button>
  );
}
