"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";
import { letter } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The customer letter, rebuilt as a sticky-rail read: the chapter list holds
 * on the left while the panels move past it, replacing the old slide carousel
 * that hid three quarters of the copy behind arrows.
 */
export default function Letter() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(letter.slides.length - 1, Math.floor(v * letter.slides.length));
    setActive(i < 0 ? 0 : i);
  });

  return (
    <section ref={ref} className="relative bg-smoke">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          {/* sticky rail */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
            <div className="pt-20 lg:pt-0">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  {letter.kicker}
                </p>
                <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
                  Over time, our customers{" "}
                  <Marker>become our friends</Marker>
                </h2>
              </Reveal>

              <ol className="mt-8 hidden gap-1 lg:flex lg:flex-col">
                {letter.slides.map((s, i) => (
                  <li key={s.heading} className="relative">
                    <div className="flex items-start gap-3 py-2.5">
                      <span
                        className={`mt-[9px] h-[2px] shrink-0 rounded-full transition-all duration-500 ${
                          i === active ? "w-7 bg-navy" : "w-3.5 bg-ash"
                        }`}
                      />
                      <span
                        className={`text-[14.5px] leading-snug transition-colors duration-500 ${
                          i === active ? "font-medium text-ink" : "text-ink-mute"
                        }`}
                      >
                        {s.heading}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 hidden lg:block">
                <Image
                  src={letter.signature}
                  alt="Signature"
                  width={520}
                  height={260}
                  className="h-auto w-36 opacity-80"
                />
              </div>
            </div>
          </div>

          {/* panels */}
          <div className="flex flex-col gap-5 py-20 sm:py-24 lg:py-28">
            {letter.slides.map((slide, i) => (
              <motion.article
                key={slide.heading}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-14% 0px -10% 0px" }}
                transition={{ duration: 0.75, ease: EASE }}
                className="card p-6 sm:p-8 lg:p-9"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cornflower">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {slide.heading}
                </h3>

                {slide.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-[1.75] text-ink-soft">
                    {p}
                  </p>
                ))}

                {slide.points.length > 0 && (
                  <div className="mt-6 flex flex-col gap-4">
                    {slide.points.map((pt) => (
                      <div key={pt.title} className="rounded-2xl bg-smoke p-5">
                        <h4 className="text-[15px] font-semibold leading-snug tracking-[-0.012em] text-ink">
                          {pt.title}
                        </h4>
                        <p className="mt-2 text-[14.5px] leading-[1.72] text-ink-soft">{pt.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                {slide.cta && (
                  <Link
                    href={slide.cta.href}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-navy"
                  >
                    {slide.cta.label}
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
                )}
              </motion.article>
            ))}

            <div className="lg:hidden">
              <Image
                src={letter.signature}
                alt="Signature"
                width={520}
                height={260}
                className="h-auto w-32 opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
