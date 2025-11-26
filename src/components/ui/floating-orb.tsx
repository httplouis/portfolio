"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingOrbProps {
  delay?: number;
  size?: number;
  color?: string;
  initialX?: number;
  initialY?: number;
}

export function FloatingOrb({ delay = 0, size = 100, color = "blue", initialX = 0, initialY = 0 }: FloatingOrbProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const colorClasses = {
    blue: "from-blue-500/30 to-blue-600/20",
    purple: "from-purple-500/30 to-purple-600/20",
    pink: "from-pink-500/30 to-pink-600/20",
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} blur-3xl`}
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 15 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

