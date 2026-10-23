"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
import { Globe, ShieldCheck, LifeBuoy, BarChart3, Factory, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================================
 *  DEVICE IMAGE — SENSEL Connected IoT Telematics Architecture Diagram
 * ========================================================================== */
const DEFAULT_DEVICE_IMAGE = "/solution/why-to-choose-sensel.jpg";

/* ── Benefit content (exact approved wording preserved) ── */
type Benefit = { title: string; text: string; icon: LucideIcon };

const benefits: Benefit[] = [
  {
    title: "Trusted by 100s of Large Corporations",
    text: "Comprehensive telematics solutions built for vehicles, wagons, containers and industrial assets.",
    icon: Globe,
  },
  {
    title: "> 99% Uptime",
    text: "Robust GPS hardware and mature software designed for dependable, continuous asset visibility.",
    icon: ShieldCheck,
  },
  {
    title: "Proactive Support",
    text: "Smart monitoring and proactive field support to identify and resolve operational issues before they impact your business.",
    icon: LifeBuoy,
  },
  {
    title: "Superior ROI",
    text: "Reduce manual effort, improve asset utilization and turn tracking data into measurable operational value.",
    icon: BarChart3,
  },
  {
    title: "Designed and Made in India",
    text: "Most of our hardware and software solutions are designed and manufactured in India, backed by local engineering and support.",
    icon: Factory,
  },
];

type Props = { deviceImage?: string };

export default function WhyChooseSensel({ deviceImage = DEFAULT_DEVICE_IMAGE }: Props) {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease, delay: 0.15 + i * 0.08 },
    }),
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="why-sensel-heading"
        className="relative overflow-hidden bg-[#070b14] py-20 lg:py-28 border-y border-slate-800/80 text-white"
      >
        {/* Subtle high-tech grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[140px] -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-[1240px]">

            {/* ── Section Header ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease }}
              className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md mb-4 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                The SENSEL Advantage
              </div>

              {/* Main Heading */}
              <h2
                id="why-sensel-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Why Choose SENSEL?
              </h2>

              {/* Subheading */}
              <p className="mt-4 text-lg font-semibold text-slate-200 sm:text-xl md:text-2xl">
                Built for the assets that keep business moving.
              </p>

              {/* Description */}
              <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
                Reliable hardware, intelligent software and proactive support designed for
                real-world telematics operations.
              </p>
            </motion.div>

            {/* ── Architecture Centerpiece Showcase ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease }}
              className="mx-auto mb-12 sm:mb-16 max-w-5xl"
            >
              <div className="relative group">
                {/* Ambient colorful backlight halo */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 via-primary/25 to-emerald-500/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 -z-10" />

                {/* Glass Card Container */}
                <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/10 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/70 overflow-hidden">
                  <div 
                    className="relative aspect-[320/153] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#080f1e]"
                    style={{ aspectRatio: "16 / 7.65" }}
                  >
                    <Image
                      src={deviceImage}
                      alt="Why Choose SENSEL - Integrated Telematics & IoT Architecture"
                      fill
                      priority
                      className="object-cover object-[center_42%] w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1150px"
                    />
                  </div>

                  {/* Status & Telemetry Bar below visual */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 pt-3 pb-1 text-xs text-slate-400 border-t border-white/10 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="font-semibold text-slate-200">Connected IoT Telematics Ecosystem</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
                      <span className="text-slate-300 font-medium">End-to-End Hardware &amp; Software</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="text-emerald-400 font-semibold hidden sm:inline">&gt;99% Verified Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── 5 Benefit Cards (Balanced 3 + 2 Bento Layout) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {benefits.map((b, i) => {
                const isWide = i >= 3;
                const colSpan = isWide
                  ? "md:col-span-1 lg:col-span-3"
                  : "md:col-span-1 lg:col-span-2";

                return (
                  <motion.article
                    key={b.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                    variants={fadeUp}
                    className={cn("relative z-10", colSpan)}
                  >
                    <BenefitCard index={i} benefit={b} />
                  </motion.article>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = benefit.icon;
  return (
    <div className="group relative h-full rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 flex flex-col justify-between">
      <div>
        {/* Card Header: Icon & Index Number */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/25 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-primary transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Benefit Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-200">
          {benefit.title}
        </h3>

        {/* Benefit Text */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          {benefit.text}
        </p>
      </div>

      {/* Interactive hover progress line */}
      <div className="mt-4 pt-2">
        <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-blue-400 to-emerald-400 transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
}
