"use client";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static Gradient Mesh */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mesh-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="mesh-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        {/* Mesh Blobs */}
        <circle
          cx="20%"
          cy="30%"
          r="300"
          fill="url(#mesh-gradient-1)"
          style={{ filter: "blur(80px)", opacity: 0.4 }}
        />
        <circle
          cx="80%"
          cy="70%"
          r="350"
          fill="url(#mesh-gradient-2)"
          style={{ filter: "blur(100px)", opacity: 0.3 }}
        />
      </svg>
    </div>
  );
}

