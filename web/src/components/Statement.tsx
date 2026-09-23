"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { detailStatement as s } from "@/lib/content";

/**
 * Builds the sentence as ordered tokens so only the two intended phrases are
 * emphasised — matching on the word alone would also catch "out of control".
 */
function tokenise() {
  const parts: { text: string; strong: boolean }[] = [
    { text: s.lead, strong: false },
    { text: s.emphasisOne, strong: true },
    { text: s.mid, strong: false },
    { text: s.emphasisTwo, strong: true },
    { text: s.tail, strong: false },
  ];
  return parts.flatMap((p) =>
    p.text.split(" ").filter(Boolean).map((word) => ({ word, strong: p.strong })),
  );
}

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const tokens = tokenise();

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32">
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <p className="text-center text-[clamp(1.35rem,3.4vw,2.3rem)] font-medium leading-[1.32] tracking-[-0.022em]">
          {tokens.map((t, i) => {
            const start = i / tokens.length;
            const end = Math.min(1, start + 1.6 / tokens.length);
            return (
              <Word key={`${t.word}-${i}`} progress={scrollYProgress} range={[start, end]} strong={t.strong}>
                {t.word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
  strong,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  strong: boolean;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className={strong ? "text-cornflower" : "text-white"}>
      {children}{" "}
    </motion.span>
  );
}
