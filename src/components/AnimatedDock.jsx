import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

/**
 * DockIconItem - Magnification and wave physics item inside Dock
 */
const DockIconItem = ({ mouseX, item, activeSection, onClick }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 70, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 220, damping: 16 });

  const iconScaleSync = useTransform(distance, [-150, 0, 150], [1, 1.45, 1]);
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 220, damping: 16 });

  const Icon = item.icon;
  const isActive = activeSection === item.id;

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center justify-center rounded-2xl transition-colors duration-200 cursor-pointer ${
        isActive
          ? "bg-blue-600/35 text-blue-400 border border-blue-500/50 shadow-lg shadow-blue-500/25"
          : "bg-white/[0.06] text-neutral-300 hover:bg-white/[0.12] hover:text-white border border-white/[0.08]"
      }`}
    >
      <motion.div style={{ scale: iconScale }} className="flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </motion.div>

      {/* Active Indicator Dot */}
      {isActive && (
        <span className="absolute -bottom-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
      )}

      {/* Spring Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: -44, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900/95 px-3 py-1 text-xs font-medium text-white shadow-2xl backdrop-blur-md border border-white/10"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/**
 * AnimatedDock - Apple-style Global Navigation Bar
 */
export const AnimatedDock = ({ items, activeSection, onNavigate }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.5 }}
        className="flex items-end gap-2.5 rounded-3xl bg-neutral-900/80 p-2.5 shadow-2xl backdrop-blur-2xl border border-white/[0.12] ring-1 ring-black/50"
      >
        {items.map((item) => (
          <DockIconItem
            key={item.id}
            item={item}
            mouseX={mouseX}
            activeSection={activeSection}
            onClick={onNavigate}
          />
        ))}
      </motion.nav>
    </div>
  );
};

export default AnimatedDock;
