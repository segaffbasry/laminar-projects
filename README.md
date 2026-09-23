# Laminar Projects — website uplift

Rebuild of [laminarprojects.com](https://www.laminarprojects.com) (currently Webflow) as a
Next.js site, styled after the section rhythm and interactions of
[shawncai.me/roco-ai-home](https://www.shawncai.me/roco-ai-home).

**Current scope: the homepage.** Everything else from the old site is captured in
`_scrape/` and ready when other pages come into scope.

```
laminarprojects/
├── web/        Next.js app (the new site)
└── _scrape/    full capture of the existing Webflow site
```

## Running it

```bash
npm run dev --prefix web
```

---

## 1. What was collected

The whole existing site was mirrored before anything was rebuilt.

| | |
|---|---|
| Pages (HTML) | **320** — every URL in the sitemap |
| Copy extracted | **131,655 words**, as per-page Markdown + JSON |
| Assets downloaded | **495 files, 300 MB** (492/493 originals; one Webflow internal placeholder 403s) |
| Team profiles | **183**, all with photo, role, discipline and full bio |
| Case studies / insights | **27** (19 case studies, 7 insights, 1 culture) |

### `_scrape/` layout

| Path | Contents |
|---|---|
| `html/` | Raw HTML for all 320 pages |
| `content/` | Per-page Markdown — headings, body copy, list items, CTAs with hrefs |
| `data/content.json` | Same, structured, section by section |
| `data/people.json` | 183 team + support profiles |
| `data/stories.json` | 27 case studies, insights and culture posts |
| `data/asset_manifest.json` | Every asset: source URL, local path, size, status |
| `assets/brand/` | Logos, favicon, webclip, OG image |
| `assets/images/` | 400+ illustrations, photography, team portraits |
| `assets/video/` | 33 matched webm/mp4 pairs |
| `css/webflow.css` | The original 765 KB Webflow stylesheet |
| `urls.txt`, `sitemap.xml` | Source URL list |

Scripts used, all re-runnable: `fetch.sh`, `clean_urls.py`, `download.py`,
`extract_copy.py`, `extract_cms.py`.

### Brand extracted from the old build

**Colours** (verbatim from Webflow's `:root`)

| Token | Hex |
|---|---|
| Black | `#171717` |
| Dark Laminar Blue | `#436488` |
| Contrast Blue | `#5b8cbe` / `#456e99` |
| Cornflower Blue | `#6b9bcc` |
| Purple Laminar | `#537ecc` |
| OG Blue | `#2dabff` |
| Greys | `#f1f2f2`, `#ededed`, `#d6d6d6` |

**Type** — Outfit (300–700), Google Fonts. The old site also loads an Adobe Typekit kit
(`dur6evi`: azo-sans-uber, azo-sans-web, peridot-pe-variable) that **nothing on the site
uses** — 494 of 494 `font-family` rules are Outfit. Dropped from the rebuild.

### Two things worth flagging

1. **There is no vector logo.** The brand mark exists only as PNG (`Laminar_logo_HD-3.png`,
   4167×1667). An SVG would render sharper and weigh far less — worth commissioning.
2. **~40 decorative PNGs are doing CSS's job** — underline highlighters, arrows, sparkles,
   divider rules, all shipped as bitmaps with full responsive `srcset` ladders. The rebuild
   replaces them with CSS and inline SVG.

---

## 2. The rebuild

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Motion · Lenis

```
web/src/
├── app/
│   ├── layout.tsx      fonts, metadata, nav + footer shell
│   ├── globals.css     design tokens and utilities
│   └── page.tsx        homepage section order
├── components/
│   ├── SmoothScroll    Lenis, disabled under prefers-reduced-motion
│   ├── Reveal          scroll-reveal primitives (fade-up, stagger, word rise)
│   ├── Nav             sticky pill bar, retracts on scroll down
│   ├── Hero            parallax, word-by-word headline
│   ├── WhoWeAre        value cards + counting stat band
│   ├── Selector        shared services/sectors picker
│   ├── Statement       scroll-linked word-by-word reveal on dark
│   ├── Films           click-to-load YouTube (posters only until asked)
│   ├── Letter          sticky-rail long read
│   ├── Insights        story cards
│   └── Footer          CTA, links, accreditations, oversized wordmark
└── lib/content.ts      all homepage copy
```

**Copy is verbatim.** The only edits are paragraph breaks where Webflow ran sentences
together inside one rich-text block (`friend.Are you curious` → two paragraphs).

### What changed, and why

| Old | New |
|---|---|
| Letter hidden behind a 4-slide carousel | Sticky-rail long read — all four chapters on the page, rail tracks position |
| Underline/arrow/sparkle PNGs | CSS gradients + inline SVG |
| 6 YouTube iframes on load | Posters only; iframe mounts on click |
| Static "200+ / 15 countries" | Counts up when the band enters view |
| Services/sectors as hover-swap images | Keyboard-reachable tab list with animated panel |
| Fixed nav permanently covering content | Retracts on scroll down, returns on scroll up |

Accreditation logos sit on white chips in the footer — several are dark-on-transparent and
disappeared against the dark background.

### State

`npm run build`, `tsc --noEmit` and `eslint --max-warnings=0` all pass clean. Checked at
1440px and 375px; no horizontal overflow at either. `prefers-reduced-motion` disables Lenis
and collapses transitions.

### Not done yet

- Only `/` exists. Every nav link points at a path with no page behind it.
- Hero, services and sectors art are still the old flat-illustration PNGs. They carry the
  most visual weight on the page and are the obvious next thing to redraw.
- No analytics, no contact form, not deployed.
