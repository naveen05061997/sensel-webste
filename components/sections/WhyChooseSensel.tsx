"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
import { Globe, ShieldCheck, LifeBuoy, BarChart3, Factory, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================================
 *  DEVICE IMAGE — SENSEL Connected IoT Telematics Architecture Visual
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
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-primary/15 rounded-full blur-[140px] -z-10"
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
              className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center"
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

            {/* ── Desktop Circular Radial Layout (lg+) ── */}
            <div className="hidden lg:grid lg:grid-cols-12 items-center gap-6 xl:gap-8 max-w-6xl mx-auto">
              
              {/* Left Column: Points 1 & 2 (10 o'clock & 8 o'clock) */}
              <div className="col-span-4 flex flex-col gap-6 xl:gap-8 justify-center">
                <motion.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0}
                  variants={fadeUp}
                >
                  <BenefitCard index={0} benefit={benefits[0]} connector="right" />
                </motion.article>

                <motion.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={1}
                  variants={fadeUp}
                >
                  <BenefitCard index={1} benefit={benefits[1]} connector="right" />
                </motion.article>
              </div>

              {/* Center Column: Circular Image Hub & Point 5 (6 o'clock) */}
              <div className="col-span-4 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease }}
                  className="relative flex items-center justify-center"
                >
                  {/* Concentric orbital rings */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-6 xl:-inset-8 rounded-full border border-dashed border-primary/30 animate-[spin_80s_linear_infinite]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 xl:-inset-4 rounded-full border border-primary/20 bg-primary/[0.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-primary/30 to-emerald-500/20 blur-2xl opacity-70"
                  />

                  {/* Circular Image Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px] rounded-full p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl shadow-black/80 group">
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 bg-[#080f1e]">
                      <Image
                        src={deviceImage}
                        alt="Why Choose SENSEL - Integrated Telematics & IoT Architecture"
                        fill
                        priority
                        className="object-cover object-center w-full h-full scale-110 transition-transform duration-700 ease-out group-hover:scale-125"
                        sizes="(max-width: 1024px) 320px, 400px"
                      />
                      {/* High-tech glass lens vignette */}
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.7)] pointer-events-none" />
                    </div>

                    {/* Telemetry badge at bottom edge of circle */}
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full border border-primary/40 bg-[#070b14]/95 px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-200 backdrop-blur-md shadow-xl flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Connected IoT Ecosystem</span>
                    </div>
                  </div>
                </motion.div>

                {/* Point 5: Centered directly below the circle (6 o'clock) */}
                <motion.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={4}
                  variants={fadeUp}
                  className="w-full mt-10"
                >
                  <BenefitCard index={4} benefit={benefits[4]} connector="top" />
                </motion.article>
              </div>

              {/* Right Column: Points 3 & 4 (2 o'clock & 4 o'clock) */}
              <div className="col-span-4 flex flex-col gap-6 xl:gap-8 justify-center">
                <motion.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={2}
                  variants={fadeUp}
                >
                  <BenefitCard index={2} benefit={benefits[2]} connector="left" />
                </motion.article>

                <motion.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={3}
                  variants={fadeUp}
                >
                  <BenefitCard index={3} benefit={benefits[3]} connector="left" />
                </motion.article>
              </div>

            </div>

            {/* ── Mobile / Tablet Layout (< lg) ── */}
            <div className="lg:hidden flex flex-col items-center">
              {/* Circular Image Centerpiece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease }}
                className="relative mb-12 flex items-center justify-center"
              >
                {/* Orbital glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-primary/30 to-emerald-500/20 blur-2xl opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_80s_linear_infinite]"
                />

                {/* Circle Frame */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl shadow-black/80">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 bg-[#080f1e]">
                    <Image
                      src={deviceImage}
                      alt="Why Choose SENSEL - Integrated Telematics & IoT Architecture"
                      fill
                      priority
                      className="object-cover object-center w-full h-full scale-110"
                      sizes="288px"
                    />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.7)] pointer-events-none" />
                  </div>

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full border border-primary/40 bg-[#070b14]/95 px-3.5 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md shadow-xl flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Connected IoT Ecosystem</span>
                  </div>
                </div>
              </motion.div>

              {/* 5 Cards below circle on mobile/tablet */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl">
                {benefits.map((b, i) => {
                  const isLast = i === 4;
                  return (
                    <motion.article
                      key={b.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={i}
                      variants={fadeUp}
                      className={cn(isLast ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full" : "")}
                    >
                      <BenefitCard index={i} benefit={b} />
                    </motion.article>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

function BenefitCard({
  benefit,
  index,
  connector,
}: {
  benefit: Benefit;
  index: number;
  connector?: "right" | "left" | "top";
}) {
  const Icon = benefit.icon;
  return (
    <div className="group relative h-full rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 flex flex-col justify-between">
      {/* Glowing connector beam to center circle (Desktop only) */}
      {connector === "right" && (
        <div
          aria-hidden="true"
          className="hidden lg:flex pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 items-center z-20"
        >
          <div className="h-[2px] w-6 bg-gradient-to-r from-primary/60 to-primary/20" />
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#3b82f6]" />
        </div>
      )}

      {connector === "left" && (
        <div
          aria-hidden="true"
          className="hidden lg:flex pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 items-center z-20"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#3b82f6]" />
          <div className="h-[2px] w-6 bg-gradient-to-l from-primary/60 to-primary/20" />
        </div>
      )}

      {connector === "top" && (
        <div
          aria-hidden="true"
          className="hidden lg:flex pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 flex-col items-center z-20"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#3b82f6]" />
          <div className="w-[2px] h-6 bg-gradient-to-b from-primary/60 to-primary/20" />
        </div>
      )}

      <div>
        {/* Card Header: Icon & Index Number */}
        <div className="flex items-start justify-between mb-3.5">
          <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/25 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
            <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-primary transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Benefit Title */}
        <h3 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors duration-200 leading-snug">
          {benefit.title}
        </h3>

        {/* Benefit Text */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          {benefit.text}
        </p>
      </div>

      {/* Interactive hover progress line */}
      <div className="mt-3.5 pt-1">
        <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-blue-400 to-emerald-400 transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
}
