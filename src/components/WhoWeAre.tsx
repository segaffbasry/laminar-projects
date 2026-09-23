"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { Reveal, RevealChild, RevealGroup } from "./Reveal";
import Marker from "./Marker";
import { whoWeAre, globalStat } from "@/lib/content";

/** Counts up to `value` once the tile scrolls into view. */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-18%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1500, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function WhoWeAre() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
            Who we are
          </p>
          <h2 className="mt-3 max-w-[20ch] text-[clamp(1.85rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
            What we can do is a result of <Marker>who we are</Marker>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* dark reach tile — carries the global figures */}
          <RevealChild className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
            <div className="sheen relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] bg-ink p-7 text-white">
              <div
                className="grid-veil pointer-events-none absolute inset-0 opacity-[0.18]"
                aria-hidden
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Global delivery
                </p>

                <p className="mt-6 text-[clamp(2.6rem,6vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
                  <Counter value={200} suffix="+" />
                </p>
                <p className="mt-1.5 text-[14px] text-white/60">people</p>

                <div className="my-7 h-px w-full bg-white/[0.12]" />

                <p className="text-[clamp(2.6rem,6vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
                  <Counter value={15} />
                </p>
                <p className="mt-1.5 text-[14px] text-white/60">countries</p>
              </div>

              <p className="relative mt-10 text-[14px] leading-relaxed text-white/55">
                {globalStat.pre} {globalStat.people} {globalStat.mid} {globalStat.countries}{" "}
                {globalStat.post}
              </p>
            </div>
          </RevealChild>

          {/* value tiles */}
          {whoWeAre.values.map((v, i) => (
            <RevealChild key={v.lead} className="lg:col-span-4">
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cornflower to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.16em] text-ash transition-colors duration-500 group-hover:text-cornflower">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-8 origin-right scale-x-0 bg-cornflower transition-transform duration-500 group-hover:scale-x-100"
                  />
                </div>

                <h3 className="mt-6 text-[19px] font-semibold leading-snug tracking-[-0.012em] text-ink">
                  <span className="text-navy">{v.lead}</span> {v.tail}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{v.body}</p>
              </article>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
