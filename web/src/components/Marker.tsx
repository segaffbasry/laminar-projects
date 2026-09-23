"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Highlighted phrase whose underline sweeps in when it reaches the viewport —
 * the moving replacement for the old Underline(n).png bitmaps.
 *
 * Uses useInView rather than whileInView: the hero marker sits above the fold
 * and whileInView did not reliably fire for an element already on screen at
 * mount. `isolate` on the wrapper keeps the -z-10 bar behind the text but in
 * front of the section background.
 */
export default function Marker({
  children,
  delay = 0.25,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <span
      ref={ref}
      className={`relative isolate inline-block whitespace-nowrap ${className ?? ""}`}
    >
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="absolute -inset-x-[0.06em] bottom-[0.02em] -z-10 h-[0.34em] rounded-full bg-gradient-to-r from-cornflower/55 to-electric/45"
      />
      {children}
    </span>
  );
}
