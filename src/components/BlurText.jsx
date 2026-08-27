import React from "react";
import { motion } from "framer-motion";

/**
 * BlurText - Reactbits Inspired Blur Reveal Headline Effect
 * Animates words or characters cascading from blur(12px), opacity: 0 to crisp 60fps.
 */
export const BlurText = ({
  text = "",
  className = "",
  delay = 0.04,
  initialDelay = 0.1,
  as: Component = "h1",
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: initialDelay,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 24,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 140,
      },
    },
  };

  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={childVariants}
            className="inline-block transform-gpu will-change-[filter,opacity,transform]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

export default BlurText;
