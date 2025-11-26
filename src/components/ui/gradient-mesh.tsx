"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mesh-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2">
              <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="mesh-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#ec4899;#3b82f6;#8b5cf6;#ec4899" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2">
              <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" dur="12s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Mesh Blobs */}
        <motion.circle
          cx="20%"
          cy="30%"
          r="300"
          fill="url(#mesh-gradient-1)"
          animate={{
            cx: ["20%", "40%", "20%"],
            cy: ["30%", "50%", "30%"],
            r: [300, 400, 300],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(80px)" }}
        />
        <motion.circle
          cx="80%"
          cy="70%"
          r="350"
          fill="url(#mesh-gradient-2)"
          animate={{
            cx: ["80%", "60%", "80%"],
            cy: ["70%", "50%", "70%"],
            r: [350, 450, 350],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(100px)" }}
        />
        <motion.circle
          cx="50%"
          cy="10%"
          r="250"
          fill="url(#mesh-gradient-1)"
          animate={{
            cx: ["50%", "70%", "50%"],
            cy: ["10%", "30%", "10%"],
            r: [250, 350, 250],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(60px)" }}
        />
      </svg>
    </div>
  );
}

