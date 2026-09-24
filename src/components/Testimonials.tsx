"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";
import { testimonials } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const item = testimonials.items[i];
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
            In their words
          </p>
          <h2 className="mt-3 text-center text-[clamp(1.7rem,3.8vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.028em]">
            <Marker>{testimonials.heading}</Marker>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 min-h-[236px] sm:min-h-[210px]">
            <svg
              aria-hidden
              width="44"
              height="36"
              viewBox="0 0 44 36"
              className="mx-auto mb-6 text-cornflower/50"
              fill="currentColor"
            >
              <path d="M0 36V19.8C0 8.9 5.9 1.3 17.6 0l1.6 5.6C12.4 7.4 9 11.4 9 17.6h8.3V36H0Zm24.8 0V19.8C24.8 8.9 30.7 1.3 42.4 0L44 5.6c-6.8 1.8-10.2 5.8-10.2 12h8.3V36H24.8Z" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <blockquote className="text-center text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium leading-[1.5] tracking-[-0.014em] text-white/92">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-center text-[13.5px] text-white/50">
                  <span className="font-medium text-white/80">{item.name}</span>
                  {item.role ? ` · ${item.role}` : ""}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white/50 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M10 3.5 5.5 8l4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.items.map((t, n) => (
              <button
                key={t.name + n}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Testimonial ${n + 1}`}
                aria-current={n === i}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  n === i ? "w-7 bg-cornflower" : "w-1.5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white/50 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M6 3.5 10.5 8 6 12.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
