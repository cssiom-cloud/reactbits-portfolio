import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MagneticButton - Reactbits Inspired Magnetic Interaction
 * Dynamically pulls the button and internal icon/text toward the cursor using spring physics.
 */
export const MagneticButton = ({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  type = "button",
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Element = href ? motion.a : motion.button;

  return (
    <Element
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      type={!href ? type : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 14,
        mass: 0.1,
      }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      {...props}
    >
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2 pointer-events-none"
        animate={{ x: position.x * 0.45, y: position.y * 0.45 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.span>
    </Element>
  );
};

export default MagneticButton;
