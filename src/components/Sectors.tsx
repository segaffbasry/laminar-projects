"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";
import { sectors } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Expanding panel rail — deliberately a different shape from the Services tab
 * list, so the two halves of the page don't read as the same section twice.
 * Collapses to a stacked accordion below `lg`.
 */
export default function Sectors() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-smoke py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Where we work
              </p>
              <h2 className="mt-3 text-[clamp(1.85rem,4.2vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
                <Marker>{sectors.heading}</Marker>
              </h2>
            </div>
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">{sectors.sub}</p>
          </div>
        </Reveal>

        {/* ---- desktop: expanding rail ---- */}
        <Reveal delay={0.1}>
          <div className="mt-12 hidden gap-3 lg:flex lg:h-[520px]">
            {sectors.items.map((item, i) => {
              const on = i === active;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={on}
                  initial={false}
                  animate={{ flexGrow: on ? 5.4 : 1 }}
                  transition={{ duration: 0.65, ease: EASE }}
                  className={`group relative basis-0 overflow-hidden rounded-[20px] border text-left transition-colors duration-500 ${
                    on ? "sketch sketch-light border-transparent bg-ink" : "border-line-soft bg-white hover:border-ash"
                  }`}
                >
                  {/* collapsed: vertical label */}
                  <AnimatePresence>
                    {!on && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex flex-col items-center justify-between py-7"
                      >
                        <span className="text-[11px] font-semibold tabular-nums text-ash">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="whitespace-nowrap text-[15px] font-medium tracking-[-0.01em] text-ink-soft transition-colors group-hover:text-ink"
                          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                          {item.label}
                        </span>
                        <span
                          aria-hidden
                          className="h-6 w-px bg-line-soft transition-colors group-hover:bg-cornflower"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* expanded: full panel */}
                  <AnimatePresence>
                    {on && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, delay: 0.12 }}
                        className="absolute inset-0 flex flex-col"
                      >
                        <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-[#eef3f9] to-[#f8fafc]">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            sizes="60vw"
                            className="object-contain object-center p-6"
                          />
                        </div>

                        <div className="relative p-7 text-white">
                          <div
                            className="grid-veil pointer-events-none absolute inset-0 opacity-[0.18]"
                            aria-hidden
                          />
                          <div className="relative">
                            <div className="flex items-baseline gap-3">
                              <span className="text-[11px] font-semibold tabular-nums text-cornflower">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-[21px] font-semibold tracking-[-0.018em]">
                                {item.label}
                              </h3>
                            </div>
                            <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-white/65">
                              {item.body}
                            </p>
                            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                              <p className="max-w-[48ch] text-[14px] font-medium italic leading-snug text-cornflower">
                                {item.stat}
                              </p>
                              <Link
                                href={item.href}
                                className="group/cta inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:bg-cornflower hover:text-white"
                              >
                                learn more
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                                  <path
                                    d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* ---- mobile / tablet: stacked cards ---- */}
        <div className="mt-10 flex flex-col gap-4 lg:hidden">
          {sectors.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, ease: EASE }}
              className="card overflow-hidden"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#eef3f9] to-[#f8fafc]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="92vw"
                  className="object-contain object-center p-4"
                />
              </div>
              <div className="border-t border-line-soft p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-semibold tabular-nums text-cornflower">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[19px] font-semibold tracking-[-0.016em] text-ink">
                    {item.label}
                  </h3>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{item.body}</p>
                <p className="mt-4 rounded-xl bg-smoke px-4 py-3 text-[13.5px] font-medium italic leading-relaxed text-navy">
                  {item.stat}
                </p>
                <Link
                  href={item.href}
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-navy"
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
