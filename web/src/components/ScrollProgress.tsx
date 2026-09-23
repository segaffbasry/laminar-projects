"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Hairline read-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, originX: 0 }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-navy via-cornflower to-electric"
    />
  );
}
