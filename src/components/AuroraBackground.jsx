import React from "react";
import { motion } from "framer-motion";

/**
 * AuroraBackground - Reactbits Inspired Morphing Glow Backdrop
 * Uses multi-harmonic orbital paths for glowing blurred gradient spheres with obsidian dark base.
 */
export const AuroraBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dark Subtle Base Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Morphing Aurora Sphere 1: Electric Blue */}
      <motion.div
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]"
      />

      {/* Morphing Aurora Sphere 2: Soft Violet / Indigo */}
      <motion.div
        animate={{
          x: [0, -90, 80, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/18 blur-[150px]"
      />

      {/* Morphing Aurora Sphere 3: Cyan / Teal Accent */}
      <motion.div
        animate={{
          x: [0, 60, -50, 0],
          y: [0, 80, -70, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/12 blur-[140px]"
      />

      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#09090b_90%)]" />
    </div>
  );
};

export default AuroraBackground;
