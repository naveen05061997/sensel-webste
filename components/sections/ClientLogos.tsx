import fs from "fs";
import path from "path";

/**
 * Client Logos — "Trusted by Industry Leaders"
 *
 * Automatically loads all logos from: public/images/clients
 * Displays them in a continuous right-to-left marquee.
 * Each logo is housed in an equal-sized, uniform container (180x80px / 200x90px)
 * with object-contain so logos never stretch or distort.
 */

const LOGO_DIR = path.join(process.cwd(), "public", "images", "clients");
const IMAGE_EXT = /\.(png|jpe?g|svg|webp|avif|gif)$/i;

type ClientLogo = { name: string; src: string };

function toDisplayName(file: string): string {
  const lower = file.toLowerCase();
  if (lower.includes("muthoot")) return "Muthoot";
  if (lower.includes("jana")) return "Jana Small Finance Bank";
  if (lower.includes("iifl")) return "IIFL Finance";
  if (lower.includes("au-") || lower.startsWith("au")) return "AU Small Finance Bank";
  if (lower.includes("ambhuja") || lower.includes("ambuja")) return "Ambuja Cement";
  return file
    .replace(IMAGE_EXT, "")
    .replace(/^\d+[-_.\s]*/, "") // strip ordering prefix
    .replace(/[-_\s]*logo$/i, "") // strip trailing "-logo"
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Priority featured logos placed right at the front of the carousel
const FEATURED_FRONT_LOGOS = [
  "muthoot-logo.png",
  "jana-logo.png",
  "iifl-fin-logo.png",
  "au-logo.png",
  "ambhuja-cement-logo.png",
];

const SPECIFIED_NEW_LOGOS: ClientLogo[] = [
  { name: "Muthoot", src: "/images/clients/muthoot-logo.png" },
  { name: "Jana Small Finance Bank", src: "/images/clients/jana-logo.png" },
  { name: "IIFL Finance", src: "/images/clients/iifl-fin-logo.png" },
  { name: "AU Small Finance Bank", src: "/images/clients/au-logo.png" },
  { name: "Ambuja Cement", src: "/images/clients/ambhuja-cement-logo.png" },
];

function getClientLogos(): ClientLogo[] {
  try {
    const rawFiles = fs
      .readdirSync(LOGO_DIR)
      .filter((file) => IMAGE_EXT.test(file) && !file.startsWith("."));

    // Position the 5 new requested logos at the front of the marquee so they are immediately visible
    const frontFiles = FEATURED_FRONT_LOGOS.filter((f) => rawFiles.includes(f));
    const otherFiles = rawFiles
      .filter((f) => !FEATURED_FRONT_LOGOS.includes(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    const orderedFiles = [...frontFiles, ...otherFiles];

    const diskLogos = orderedFiles.map((file) => ({
      name: toDisplayName(file),
      src: `/images/clients/${encodeURIComponent(file)}`,
    }));

    const existing = new Set(diskLogos.map((l) => l.src.toLowerCase()));
    const missingFeatured = SPECIFIED_NEW_LOGOS.filter(
      (logo) => !existing.has(logo.src.toLowerCase())
    );

    return [...missingFeatured, ...diskLogos];
  } catch {
    return SPECIFIED_NEW_LOGOS;
  }
}

export default function ClientLogos() {
  const logos = getClientLogos();
  if (logos.length === 0) return null;

  // Ensure base list is large enough so half the track comfortably spans wide displays
  let baseSet = [...logos];
  while (baseSet.length < 12) {
    baseSet = [...baseSet, ...logos];
  }

  // Duplicate for seamless 0% -> -50% infinite loop
  const marqueeItems = [...baseSet, ...baseSet];

  return (
    <section
      aria-labelledby="client-logos-heading"
      className="border-y border-border bg-slate-50/70 py-12 lg:py-16 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Our Clients
        </p>
        <h2
          id="client-logos-heading"
          className="text-2xl font-bold text-slate-900 md:text-3xl"
        >
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Marquee viewport with gradient fades on edges */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Edge Fade Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50 to-transparent z-10"
        />

        {/* Moving Track: right to left (0% to -50%) - 10% faster at 36s */}
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused] [animation-duration:36s]">
          {marqueeItems.map((logo, index) => {
            const isUltraTech = logo.src.toLowerCase().includes("ultratech");
            const isScaled20 = /(tata.*communication|airport|chola|redbus)/i.test(
              `${logo.src} ${logo.name}`
            );

            return (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-[114px] w-[235px] sm:h-[125px] sm:w-[260px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/25 hover:shadow-md"
              >
                {/* Equal-sized container with object-contain */}
                <div className="flex h-[78px] sm:h-[82px] w-full max-w-[200px] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="eager"
                    decoding="async"
                    className={`max-h-full max-w-full w-auto h-auto object-contain ${
                      isUltraTech
                        ? "scale-[1.8] sm:scale-[1.85]"
                        : isScaled20
                        ? "scale-[1.2]"
                        : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
