"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";
import { letter } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The customer letter as four teaser blocks that lead out to the relevant
 * page, rather than the full four-chapter text. The original ran to roughly
 * 1,300 words on the homepage; the long-form version lives on /our-philosophy.
 */
export default function Letter() {
  return (
    <section className="relative overflow-hidden bg-smoke py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                {letter.kicker}
              </p>
              <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
                Over time, our customers <Marker>become our friends</Marker>
              </h2>
              <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-ink-soft">
                A short note from our founder on what it is actually like to work with us.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={letter.signature}
                  alt={`${letter.author}, founder`}
                  width={520}
                  height={260}
                  className="h-auto w-28 opacity-80"
                />
                <span className="text-[13px] leading-tight text-ink-mute">
                  {letter.author}
                  <br />
                  Founder
                </span>
              </div>

              <Link
                href="/our-philosophy"
                className="group mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-navy"
              >
                Read the full letter
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* teaser blocks */}
          <div className="grid gap-4 sm:grid-cols-2">
            {letter.blocks.map((block, i) => (
              <motion.div
                key={block.heading}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
              >
                <Link
                  href={block.href}
                  className="card card-hover sketch-hover group flex h-full flex-col p-6"
                >
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.16em] text-cornflower">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[17.5px] font-semibold leading-snug tracking-[-0.016em] text-ink">
                    {block.heading}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{block.lead}</p>

                  {block.points.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-1.5">
                      {block.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-[13.5px] text-ink-mute">
                          <span
                            aria-hidden
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cornflower"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13.5px] font-medium text-navy">
                    {block.cta}
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
