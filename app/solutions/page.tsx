import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Solutions | Sensel Intelligent Enterprise IoT",
  description:
    "Sensel designs intelligent telematics solutions tailored for diverse industries and operations to ensure maximum efficiency and visibility.",
};

/* ─────────────────────────────────────────────────────────────
   Solutions Data
   Exact photos, titles, categories, and descriptions matching
   the homepage solutions section.
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
   Background image zooms smoothly on hover, dark gradient overlay,
   and interactive text styling.
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

      {/* Dark gradient overlay — deep black at bottom for readability */}
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
        <h2 className="mt-1.5 text-base sm:text-lg lg:text-xl font-bold leading-snug text-white group-hover:text-blue-200 transition-colors duration-300">
          {solution.title}
        </h2>

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
   Solutions Page Component
   Dedicated /solutions page preserving header structure,
   proper navbar clearance, and the bento cards grid.
   ───────────────────────────────────────────────────────────── */
export default function SolutionsPage() {
  const [solar, fleet, work, hazardous, mining] = solutions;

  return (
    <div className="min-h-screen bg-[#0b0d12] pt-28 sm:pt-32 md:pt-36 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Solutions Page Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-500">
            Our Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5">
            Intelligent Solutions for Every Industry
          </h1>
          <p className="mx-auto text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
            Sensel designs intelligent telematics solutions tailored for diverse
            industries and operations to ensure maximum efficiency, safety, and
            visibility.
          </p>
        </div>

        {/* ── SOLUTIONS LAYOUT: 3 solutions in one line, 2 solutions below ── */}
        <div className="space-y-6">
          
          {/* Row 1: Three solutions in one line */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SolutionCard
              solution={solar}
              className="min-h-[340px] sm:min-h-[380px] lg:min-h-[410px]"
            />
            <SolutionCard
              solution={fleet}
              className="min-h-[340px] sm:min-h-[380px] lg:min-h-[410px]"
            />
            <SolutionCard
              solution={work}
              className="min-h-[340px] sm:min-h-[380px] lg:min-h-[410px] md:col-span-2 lg:col-span-1"
            />
          </div>

          {/* Row 2: Two solutions below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SolutionCard
              solution={hazardous}
              className="min-h-[320px] sm:min-h-[360px] lg:min-h-[390px]"
            />
            <SolutionCard
              solution={mining}
              className="min-h-[320px] sm:min-h-[360px] lg:min-h-[390px]"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
