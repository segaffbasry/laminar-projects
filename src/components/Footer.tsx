import Image from "next/image";
import Link from "next/link";
import { accreditations, legal, nav, site } from "@/lib/content";

const columns = [
  { title: "Services", items: nav[0].items },
  { title: "Sectors", items: nav[1].items },
  { title: "Technology", items: nav[2].items.slice(0, 3) },
  {
    title: "Company",
    items: [...nav[3].items, ...nav[4].items, { label: "Contact", href: "/contact" }],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-6 sm:pt-24">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <h2 className="max-w-[16ch] text-[clamp(1.9rem,4.6vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Let&apos;s get to know each other
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14.5px] font-medium text-ink transition-colors hover:bg-cornflower hover:text-white"
          >
            Contact
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
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

        {/* link columns */}
        <div className="grid gap-9 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-snug text-white/72 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* accreditations */}
        <div className="flex flex-wrap items-center gap-3 border-t border-white/10 py-9">
          {accreditations.map((a) => (
            <span
              key={a.src}
              className="sketch-hover flex h-14 min-w-[104px] items-center justify-center rounded-xl bg-white/92 px-4 transition-colors hover:bg-white"
            >
              <Image
                src={a.src}
                alt={a.alt}
                width={220}
                height={110}
                className="h-8 w-auto object-contain sm:h-9"
              />
            </span>
          ))}
        </div>

        {/* base */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[13px] text-white/45">
              © {new Date().getFullYear()} Laminar Projects. All rights reserved.
            </p>
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-white/45 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={site.linkedin}
              aria-label="Laminar Projects on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.19 1.46-2.19 2.98V21h-4V9Z" />
              </svg>
            </Link>
            <Link
              href={site.youtube}
              aria-label="Laminar Projects on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23 12s0-3.85-.46-5.58a2.98 2.98 0 0 0-2.1-2.12C18.7 3.85 12 3.85 12 3.85s-6.7 0-8.44.45A2.98 2.98 0 0 0 1.46 6.42C1 8.15 1 12 1 12s0 3.85.46 5.58a2.98 2.98 0 0 0 2.1 2.12c1.74.45 8.44.45 8.44.45s6.7 0 8.44-.45a2.98 2.98 0 0 0 2.1-2.12C23 15.85 23 12 23 12ZM9.75 15.5v-7l6.25 3.5-6.25 3.5Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div className="pointer-events-none select-none overflow-hidden px-5 pb-6 sm:px-6">
        <p className="text-center text-[clamp(3.2rem,15vw,11rem)] font-semibold leading-[0.85] tracking-[-0.045em] text-white/[0.055]">
          Laminar Projects
        </p>
      </div>
    </footer>
  );
}
