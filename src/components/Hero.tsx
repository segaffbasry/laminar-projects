"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { RevealWords } from "./Reveal";
import Marker from "./Marker";
import Magnetic from "./Magnetic";
import ScheduleRail from "./ScheduleRail";
import { hero } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Pointer parallax — the art leans toward the cursor, the chips lean further.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const cfg = { stiffness: 110, damping: 20, mass: 0.5 };
  const artX = useSpring(useTransform(px, [-1, 1], [-14, 14]), cfg);
  const artY = useSpring(useTransform(py, [-1, 1], [-10, 10]), cfg);
  const chipX = useSpring(useTransform(px, [-1, 1], [26, -26]), cfg);
  const chipY = useSpring(useTransform(py, [-1, 1], [18, -18]), cfg);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="hero-wash relative flex min-h-[94svh] flex-col overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto my-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        <motion.div style={{ y: copyY, opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-line-soft bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric" />
            </span>
            {hero.eyebrow}
          </motion.span>

          <h1 className="mt-6 text-[clamp(2.6rem,7vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.038em] text-ink">
            <Marker delay={0.75}>
              <RevealWords text={hero.headingLead} delay={0.12} />
            </Marker>{" "}
            <RevealWords text={hero.headingRest} delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="mt-6 max-w-[38ch] text-[16.5px] leading-relaxed text-ink-soft sm:text-[17.5px]"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-navy"
              >
                {hero.primaryCta.label}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </svg>
              </Link>
            </Magnetic>
            <Magnetic strength={0.22}>
              <Link
                href={hero.secondaryCta.href}
                className="sketch-hover inline-flex items-center rounded-full border border-line-soft bg-white/70 px-6 py-3.5 text-[14.5px] font-medium text-ink backdrop-blur transition-colors hover:border-transparent"
              >
                {hero.secondaryCta.label}
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative">
          <motion.div style={{ x: artX, y: artY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.25, ease: EASE }}
            >
              <Image
                src={hero.image}
                alt="Laminar teams controlling a live construction programme"
                width={1600}
                height={1280}
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>

          {/* floating figures */}
          <motion.div
            style={{ x: chipX, y: chipY }}
            className="pointer-events-none absolute inset-0 hidden sm:block"
          >
            {hero.chips.map((chip, i) => {
              const spots = [
                "left-[-3%] top-[16%]",
                "right-[-2%] top-[44%]",
                "left-[6%] bottom-[6%]",
              ];
              return (
                <motion.div
                  key={chip.value}
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.85 + i * 0.13, ease: EASE }}
                  className={`sketch absolute ${spots[i]} rounded-2xl bg-white/92 px-4 py-2.5 backdrop-blur-md`}
                >
                  <p className="text-[17px] font-semibold leading-none tracking-[-0.02em] text-ink">
                    {chip.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-ink-mute">{chip.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <ScheduleRail />
    </section>
  );
}
