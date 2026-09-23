/**
 * Displacement filters that turn a straight CSS border into a hand-drawn ink
 * line, matching the line-drawn style of the hero and sector illustrations.
 *
 * Three seeds so hover can flip between them on a step timeline — the classic
 * "boiling line" effect. Rendered once, near the top of <body>, and referenced
 * from CSS by id (see `.sketch` / `.sketch-hover` in globals.css).
 */
export default function SketchDefs() {
  return (
    <svg
      aria-hidden
      focusable="false"
      className="pointer-events-none absolute h-0 w-0"
      style={{ position: "absolute" }}
    >
      <defs>
        {[1, 2, 3].map((n) => (
          <filter
            key={n}
            id={`sketch-${n}`}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.022"
              numOctaves="2"
              seed={n * 11}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3.4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
