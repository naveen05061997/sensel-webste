"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Hero() {
  const { openDemoModal } = useDemoModal();
  return (
    <section className="relative overflow-hidden h-screen min-h-[640px] flex items-center justify-center">
      
      {/* ── Video Background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Main dark overlay for text contrast ── */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* ── Top gradient so floating pill has contrast ── */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/50 to-transparent -z-10" />

      {/* ── Hero Content — padded top so it clears the floating pill ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">

          {/* Pill badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
            Intelligent Enterprise IoT
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
            India's Leading{" "}
            <span className="text-blue-400">Telematics</span>
            {" "}& IoT Solution Provider
          </h1>

          {/* Sub-text */}
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            We deliver end-to-end telematics and IoT solutions designed to address
            specific business challenges, consistently delivering measurable ROI
            across industries.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md text-base font-bold transition-colors bg-primary text-white hover:bg-primary/90 h-14 px-10 shadow-lg shadow-primary/30 cursor-pointer"
            >
              Explore Solutions
            </Link>
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center justify-center rounded-md text-base font-bold transition-colors border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md h-14 px-10 group cursor-pointer"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom gradient fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent -z-10" />
    </section>
  );
}
