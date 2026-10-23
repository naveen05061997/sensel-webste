"use client";

import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function SolarAssetApplications() {
  return (
    <div
      id="applications"
      className="pt-12 sm:pt-16 border-t border-slate-200/80 scroll-mt-24 space-y-12 sm:space-y-16"
    >
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-[#ff7a00] border border-orange-200/60 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
          Real-World Deployment
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Applications & Use Cases
        </h3>
      </div>

      {/* Use Case 1: Solar Powered Container Tracking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center bg-slate-50/60 p-6 sm:p-8 rounded-3xl border border-slate-200/70 hover:border-slate-300 transition-colors">
        {/* Left: Container Image */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 group">
          <Image
            src="/solution/container.jpeg"
            alt="Solar Powered Container Tracking in shipyard"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-3 sm:space-y-4">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 text-[#ff7a00] border border-orange-200/60">
            Intermodal & Ports
          </span>

          <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#ff7a00] leading-snug tracking-tight">
            Solar Powered Container Tracking:
          </h3>

          <h4 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
            Total Visibility for Shipping & Yard Containers
          </h4>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Managing containers across ports, yards, and remote locations comes with challenges like poor visibility, delayed updates, and security risks. Traditional tracking methods often fail due to lack of power and harsh environmental conditions.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <strong className="text-slate-900 font-bold">
              Sensel Telematics’ Solar-Powered Container Tracking Solution
            </strong>{" "}
            provides a reliable, maintenance-free way to monitor your containers — no wiring, no charging, just real-time updates powered by the sun.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0" />
              No Wiring & Zero Maintenance
            </span>
            <span className="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0" />
              Port & Yard Geofencing
            </span>
          </div>
        </div>
      </div>

      {/* Use Case 2: Railway Freight Wagon Tracking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center bg-slate-50/60 p-6 sm:p-8 rounded-3xl border border-slate-200/70 hover:border-slate-300 transition-colors">
        {/* Left: Text Content (desktop: order-1) */}
        <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-primary border border-blue-200/60">
            Rail & Heavy Haul
          </span>

          <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#ff7a00] leading-snug tracking-tight">
            Railway Freight Wagon Tracking
          </h3>

          <h4 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
            Uninterrupted Rail Asset Visibility Across Long Distances
          </h4>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Railway wagons often operate in regions with no power access and are left stationary in remote sidings for long periods. Tracking these assets is crucial for logistics planning, theft prevention, and regulatory compliance.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <strong className="text-slate-900 font-bold">
              Sensel’s Solar Wagon Tracking Solution
            </strong>{" "}
            offers a rugged, power-independent tracking system that ensures 24/7 monitoring of wagons — from dispatch to delivery.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0" />
              Stationary Siding Monitoring
            </span>
            <span className="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0" />
              Continuous 24/7 Tracking
            </span>
          </div>
        </div>

        {/* Right: Railway Wagon Image (desktop: order-2) */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 group order-1 md:order-2">
          <Image
            src="/solution/railway weagon.jpg"
            alt="Railway Freight Wagon Tracking along rail tracks"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
          />
        </div>
      </div>
    </div>
  );
}
