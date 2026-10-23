"use client";

import React from "react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function FleetCtaBanner() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="relative overflow-hidden bg-[#070b14] py-16 sm:py-20 lg:py-24 border-b border-slate-800/80">
      {/* Ambient background glows */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] -z-10" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Main Banner Card */}
        <div className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-[#0b101b]/95 border border-white/10 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group">
          {/* Subtle inner corner lighting */}
          <div 
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" 
            aria-hidden="true"
          />
          <div 
            className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" 
            aria-hidden="true"
          />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15]">
            Ready to <span className="text-[#1cd5f7] drop-shadow-[0_0_25px_rgba(28,213,247,0.45)]">Optimize</span> Your Fleet?
          </h2>

          {/* Subheading */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Join 1,200+ enterprises using Sensel to track, secure, and scale their operations. Deployment takes less than 48 hours.
          </p>

          {/* Action Button: Opens Request Demo popup modal */}
          <div>
            <button
              type="button"
              onClick={() => openDemoModal("Schedule a Free Pilot")}
              className="mt-8 sm:mt-10 inline-flex items-center justify-center rounded-xl bg-[#1cd5f7] hover:bg-[#15bfe0] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-300 shadow-[0_0_25px_rgba(28,213,247,0.35)] hover:shadow-[0_0_35px_rgba(28,213,247,0.55)] hover:-translate-y-0.5 cursor-pointer"
            >
              SCHEDULE A FREE PILOT
            </button>
          </div>

          {/* Contact / Phone number */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-slate-400">
            Questions? Call us directly:{" "}
            <a
              href="tel:+918041693607"
              className="text-slate-200 hover:text-white font-medium border-b border-dotted border-slate-500 hover:border-white transition-colors ml-1"
            >
              +91-8041693607
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
