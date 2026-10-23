"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Solutions Data
   Exact titles, categories, and descriptions as requested.
   All images are loaded from /public/solution/.
   ───────────────────────────────────────────────────────────── */
const solutions = [
  {
    id: "solar",
    category: "SOLAR SOLUTION",
    title: "Solar Powered Asset Tracker",
    description:
      "Solar-Powered Tracking Solution offers an innovative and maintenance-free way to track remote and non-powered assets like containers, wagons, trailers…",
    image: "/solution/solar-powered-asset-tracker.jpg",
    href: "/solutions/solar-powered-asset-tracker",
    maxDescWidth: "max-w-md",
  },
  {
    id: "fleet",
    category: "FLEET SOLUTION",
    title: "Rechargeable Asset Tracker",
    description:
      "Rechargeable Asset Trackers are compact, intelligent, and ultra-efficient GPS-based devices designed to monitor high-value, mobile…",
    image: "/solution/rechargeable-asset-tracker.jpg",
    href: "/solutions/rechargeable-asset-tracker",
    maxDescWidth: "max-w-xl",
  },
  {
    id: "work",
    category: "CONSTRUCTION SOLUTION",
    title: "WorkHour Meter",
    description:
      "Heavy machinery used in construction, mining, and infrastructure projects often runs in harsh conditions with minimal digital oversight…",
    image: "/solution/work-hour-meter.png",
    href: "/solutions/work-hour-monitor",
    maxDescWidth: "max-w-md",
  },
  {
    id: "hazardous",
    category: "INDUSTRIAL SOLUTION",
    title: "Telematics for Hazardous Cargo",
    description:
      "Transporting hazardous cargo demands precision, compliance, and utmost safety. Sensel Telematics’ Fleet Smart™ Solution offers an…",
    image: "/solution/hazardous-cargo.jpg",
    href: "/solutions/hazardous-cargo",
    maxDescWidth: "max-w-md",
  },
  {
    id: "mining",
    category: "CONSTRUCTION SOLUTION",
    title: "Telematics for Cement and Mining Industry",
    description:
      "In the Cement Industry Managing High Volumes of Material Movement, Machinery and Internal Logistics Required Precision, Accountability…",
    image: "/solution/cement-mining.jpg",
    href: "/solutions/cement-mining",
    maxDescWidth: "max-w-2xl",
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   SolutionCard Component
   Entire card is clickable via Next.js <Link>.
   Background image zooms on hover, card subtly elevates,
   arrow in "Learn More →" smoothly shifts right.
   ───────────────────────────────────────────────────────────── */
function SolutionCard({
  solution,
  className = "",
  style,
}: {
  solution: (typeof solutions)[number];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={solution.href}
      className={`group relative block overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-lg transition-all duration-400 ease-out hover:scale-[1.018] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:z-20 ${className}`}
      style={style}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        style={{ backgroundImage: `url('${solution.image}')` }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay — deep black at bottom for readability, transparent top */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 via-50% to-black/15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content block — positioned in the lower-left */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end z-10 pointer-events-none">
        {/* Category Label */}
        <p className="text-[11px] font-bold tracking-[0.16em] text-blue-400 uppercase">
          {solution.category}
        </p>

        {/* Title */}
        <h3 className="mt-1.5 text-base sm:text-lg lg:text-xl font-bold leading-snug text-white group-hover:text-blue-200 transition-colors duration-300">
          {solution.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2 text-xs sm:text-sm text-slate-200/90 leading-relaxed ${
            solution.maxDescWidth || "max-w-xl"
          }`}
        >
          {solution.description}
        </p>

        {/* Learn More → CTA */}
        <div className="mt-3.5 inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          <span>Learn More</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main SolutionsGrid Section
   ───────────────────────────────────────────────────────────── */
export default function SolutionsGrid() {
  const [solar, fleet, work, hazardous, mining] = solutions;

  return (
    <section id="solutions" className="bg-[#0b0d12] py-20 lg:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
            Our Solutions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Intelligent Solutions for Every Industry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Sensel designs intelligent telematics solutions tailored for diverse
            industries and operations to ensure maximum efficiency and
            visibility.
          </p>
        </div>

        {/* ── DESKTOP ASYMMETRIC GRID (lg+): 20px gap, screenshot composition ──
            Row 1: Fleet (top-right wide, 300px)
            Row 2: Work (mid-left, 280px) & Hazardous (mid-right, 280px)
            Solar: Left column spanning Row 1 & 2 (300px + 280px + 20px = 600px tall)
            Row 3: Cement & Mining (panoramic full width across bottom, 280px)
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 1.15fr 1fr",
            gridTemplateRows: "300px 280px 280px",
            gap: "20px",
            gridTemplateAreas: `
              "solar  fleet     fleet"
              "solar  work      hazardous"
              "mining mining    mining"
            `,
          }}
        >
          <SolutionCard
            solution={solar}
            style={{ gridArea: "solar" }}
          />
          <SolutionCard
            solution={fleet}
            style={{ gridArea: "fleet" }}
          />
          <SolutionCard
            solution={work}
            style={{ gridArea: "work" }}
          />
          <SolutionCard
            solution={hazardous}
            style={{ gridArea: "hazardous" }}
          />
          <SolutionCard
            solution={mining}
            style={{ gridArea: "mining" }}
          />
        </div>

        {/* ── TABLET GRID (md → lg): 2 columns with 16px gap ─────────── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          <SolutionCard
            solution={solar}
            style={{ minHeight: 560, gridRow: "span 2" }}
          />
          <SolutionCard solution={fleet} style={{ minHeight: 270 }} />
          <SolutionCard solution={work} style={{ minHeight: 270 }} />
          <SolutionCard
            solution={hazardous}
            className="col-span-2"
            style={{ minHeight: 270 }}
          />
          <SolutionCard
            solution={mining}
            className="col-span-2"
            style={{ minHeight: 270 }}
          />
        </div>

        {/* ── MOBILE: Single-column vertical stack with 16px gap ─────── */}
        <div className="flex flex-col gap-4 md:hidden">
          {solutions.map((s) => (
            <SolutionCard key={s.id} solution={s} style={{ minHeight: 290 }} />
          ))}
        </div>

      </div>
    </section>
  );
}
