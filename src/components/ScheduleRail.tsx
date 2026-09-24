"use client";

import { schedule } from "@/lib/content";

/**
 * The capability rail drawn as a programme — each capability is a bar on a
 * schedule, rows drifting at different speeds over a faint time grid.
 *
 * Replaces a plain text marquee: for a project-controls consultancy the
 * programme itself is the more telling image.
 */
export default function ScheduleRail() {
  return (
    <div className="marquee-host relative border-y border-line-soft bg-white/55 py-5 backdrop-blur">
      {/* time grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--color-navy) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "88px 100%",
        }}
      />

      <div className="mask-x relative flex flex-col gap-1.5 overflow-hidden">
        {schedule.map((row, r) => (
          <div
            key={r}
            className="marquee-track flex w-max items-center"
            style={{ animationDuration: `${52 + r * 14}s` }}
          >
            {[...row, ...row, ...row].map((bar, i) => (
              <div
                key={`${bar.label}-${i}`}
                className="shrink-0"
                style={{ marginLeft: `${bar.gap}rem` }}
              >
                <span
                  className={`flex h-6 items-center rounded-[5px] px-2.5 text-[10.5px] font-medium tracking-[-0.005em] whitespace-nowrap ${
                    bar.accent
                      ? "bg-navy/90 text-white"
                      : "bg-cornflower/16 text-navy ring-1 ring-inset ring-cornflower/25"
                  }`}
                  style={{ width: `${bar.span}rem` }}
                >
                  <span className="truncate">{bar.label}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
