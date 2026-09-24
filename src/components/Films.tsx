"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import Marker from "./Marker";
import { films } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function Lite({ id, label }: { id: string; label: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="card group relative aspect-video w-full overflow-hidden bg-ink">
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="absolute inset-0 h-full w-full"
          aria-label={`Play video: ${label}`}
        >
          {/*
            Poster only — the iframe mounts on click.
            maxresdefault is true 16:9; hqdefault is 4:3 with black bars, so the
            fallback zooms past them rather than cropping the title.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallback) return;
              img.dataset.fallback = "1";
              img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              img.classList.add("scale-[1.34]", "group-hover:scale-[1.38]");
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 shadow-lg backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden>
              <path d="M15 9 0 17.66V.34L15 9Z" fill="#171717" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function Films() {
  return (
    <section className="bg-white py-18 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 className="text-center text-[clamp(1.9rem,4.6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
<Marker>We Build Civilisation</Marker>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <Lite id={films.featured} label="We Build Civilisation" />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mx-auto mt-4 grid max-w-4xl gap-3 sm:grid-cols-3"
        >
          {films.reel.map((id) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
              }}
            >
              <Lite id={id} label="Laminar Projects film" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
