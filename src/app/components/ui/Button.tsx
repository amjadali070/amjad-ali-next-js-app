"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-2 rounded font-mono text-sm transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-secondary hover:bg-primary text-white shadow-glow border border-transparent",
    outline: "bg-transparent border border-secondary text-secondary hover:bg-secondary/10 hover:shadow-glow",
    ghost: "bg-transparent text-muted hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform" />
      )}
    </motion.button>
  );
};

export default Button;
