"use client";

import Link from "next/link";
import { Reveal, RevealChild, RevealGroup } from "./Reveal";
import { insights } from "@/lib/content";

export default function Insights() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Our stories
              </p>
              <h2 className="mt-3 text-[clamp(1.85rem,4.2vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-ink">
                {insights.heading}
              </h2>
            </div>
            <Link
              href="/our-stories"
              className="group inline-flex items-center gap-2 rounded-full border border-line-soft px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-cornflower hover:text-navy"
            >
              All stories
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
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
          {insights.items.map((item, i) => (
            <RevealChild key={item.href} className="h-full">
              <Link
                href={item.href}
                className="card card-hover group relative flex h-full flex-col overflow-hidden p-6"
              >
                {/* hover wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cornflower/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 text-[92px] font-semibold leading-none tracking-[-0.04em] text-ink/[0.035] transition-transform duration-700 group-hover:-translate-y-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-cornflower">
                  Insight {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-4 flex-1 text-[19px] font-semibold leading-snug tracking-[-0.016em] text-ink">
                  {item.title}
                </h3>
                <span className="relative mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-navy">
                  learn more
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
                </span>
              </Link>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
