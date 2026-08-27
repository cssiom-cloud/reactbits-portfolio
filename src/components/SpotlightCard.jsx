import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

/**
 * SpotlightCard - Reactbits Inspired Radial Flashlight Card with 3D Spring Tilt
 * Tracks cursor position within the card boundaries and casts a dynamic radial gradient
 * on both the surface and borders with 3D perspective tilt.
 */
export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.18)",
  borderColor = "rgba(147, 197, 253, 0.35)",
  tiltIntensity = 10,
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const rotateXSpring = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateYSpring = useSpring(0, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    if (tiltIntensity > 0) {
      const rotX = ((y - height / 2) / (height / 2)) * -tiltIntensity;
      const rotY = ((x - width / 2) / (width / 2)) * tiltIntensity;
      rotateXSpring.set(rotX);
      rotateYSpring.set(rotY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  };

  const backgroundGradient = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderGradient = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 70%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-2xl bg-neutral-900/60 p-[1px] backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
    >
      {/* Dynamic Border Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: borderGradient }}
      />

      {/* Main Card Surface */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-950/85 p-6 sm:p-7 border border-white/[0.06]">
        {/* Interior Flashlight Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: backgroundGradient }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
