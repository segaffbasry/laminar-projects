"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // Retract on the way down, return the moment the reader scrolls back up,
      // so the bar never sits on top of a heading.
      if (Math.abs(y - last) > 6) {
        const next = y > last && y > 220;
        setHidden(next);
        if (next) setOpen(null);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !mobile ? "-140%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <motion.nav
        onMouseLeave={() => setOpen(null)}
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.55)",
          borderColor: scrolled ? "rgba(228,232,238,1)" : "rgba(228,232,238,0.5)",
          boxShadow: scrolled
            ? "0 10px 34px -24px rgba(67,100,136,0.55)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 backdrop-blur-xl sm:px-5"
      >
        <Link href="/" className="relative z-10 shrink-0" aria-label="Laminar Projects — home">
          <Image
            src="/brand/logo.png"
            alt="Laminar Projects"
            width={4167}
            height={1667}
            priority
            className="h-[22px] w-auto sm:h-6"
          />
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((group) => (
            <li key={group.label} className="relative" onMouseEnter={() => setOpen(group.label)}>
              <button
                type="button"
                className="rounded-full px-3 py-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
                aria-expanded={open === group.label}
              >
                {group.label}
              </button>
              <AnimatePresence>
                {open === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.985 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-[calc(100%+10px)] w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line-soft bg-white/95 p-2 shadow-[0_28px_60px_-32px_rgba(67,100,136,0.55)] backdrop-blur-xl"
                  >
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-[13.5px] text-ink-soft transition-colors hover:bg-smoke hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white transition-all hover:bg-navy sm:inline-block"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line-soft lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={mobile ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 block h-[1.5px] w-4 bg-ink"
              />
              <motion.span
                animate={mobile ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[5px] block h-[1.5px] w-4 bg-ink"
              />
              <motion.span
                animate={mobile ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-[10px] block h-[1.5px] w-4 bg-ink"
              />
            </span>
          </button>
        </div>
      </motion.nav>

      {/* mobile sheet */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-h-[78vh] max-w-6xl overflow-y-auto rounded-3xl border border-line-soft bg-white/97 p-5 shadow-[0_30px_70px_-40px_rgba(67,100,136,0.6)] backdrop-blur-xl lg:hidden"
          >
            {nav.map((group) => (
              <div key={group.label} className="border-b border-line py-3 last:border-0">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobile(false)}
                    className="block py-1.5 text-[15px] text-ink-soft"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobile(false)}
              className="mt-4 block rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
