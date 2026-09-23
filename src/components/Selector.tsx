"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";

const EASE = [0.16, 1, 0.3, 1] as const;

export type SelectorItem = {
  id: string;
  label: string;
  image: string;
  href: string;
  intro?: string;
  points?: string[];
  body?: string;
  stat?: string;
};

export default function Selector({
  eyebrow,
  heading,
  sub,
  items,
  tone = "light",
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: SelectorItem[];
  tone?: "light" | "tinted";
}) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section
      className={`py-20 sm:py-24 lg:py-28 ${tone === "tinted" ? "bg-smoke" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          {/* rail */}
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-[clamp(1.85rem,4.2vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
                <Marker>{heading}</Marker>
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft">
                {sub}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 flex flex-col" role="tablist" aria-label={heading}>
                {items.map((it, i) => {
                  const on = i === active;
                  return (
                    <li key={it.id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        className="group relative flex w-full items-center gap-3 border-b border-line py-4 text-left"
                      >
                        <span
                          className={`shrink-0 text-[11px] font-semibold tabular-nums transition-colors duration-500 ${
                            on ? "text-cornflower" : "text-ash group-hover:text-ink-mute"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-[15.5px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300 sm:text-[16.5px] ${
                            on ? "text-ink" : "text-ink-mute group-hover:text-ink-soft"
                          }`}
                        >
                          {it.label}
                        </span>
                        {on && (
                          <motion.span
                            layoutId={`${eyebrow}-underline`}
                            transition={{ duration: 0.45, ease: EASE }}
                            className="absolute -bottom-px left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-navy via-cornflower to-electric"
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* panel */}
          <Reveal delay={0.08}>
            <div className="card overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#eef3f9] to-[#f8fafc]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 1024px) 92vw, 54vw"
                      className="object-contain object-center p-4"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-line-soft p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <p className="text-[15.5px] font-medium leading-relaxed tracking-[-0.008em] text-ink">
                      {item.intro ?? item.body}
                    </p>

                    {item.points && (
                      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-[14.5px] text-ink-soft">
                            <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cornflower" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.stat && (
                      <p className="mt-5 rounded-xl bg-smoke px-4 py-3 text-[14px] font-medium italic leading-relaxed text-navy">
                        {item.stat}
                      </p>
                    )}

                    <Link
                      href={item.href}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-navy"
                    >
                      learn more
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
