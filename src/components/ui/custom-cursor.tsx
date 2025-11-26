"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track hoverable elements
    const hoverableElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor - Fast & Responsive */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full bg-white shadow-lg shadow-blue-500/50" />
      </motion.div>

      {/* Cursor Ring - Fast Follow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-blue-400 shadow-lg" />
      </motion.div>

      {/* Cursor Trail - Smooth Follow */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.4 : 0.15,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
          mass: 0.8,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl" />
      </motion.div>
    </>
  );
}

