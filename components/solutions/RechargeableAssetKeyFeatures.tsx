"use client";

import Image from "next/image";
import { Power, Wifi } from "lucide-react";

function SensorIcon({ className = "w-8 h-8 text-slate-800" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(16, 16) rotate(-28) translate(-16, -16)">
        {/* Main sensor body */}
        <rect x="7" y="6" width="18" height="15" rx="2.5" fill="currentColor" />
        {/* Inner separator line */}
        <rect x="7" y="10.5" width="18" height="1.8" fill="white" />
        {/* Terminal pins */}
        <rect x="10" y="21" width="2.2" height="5" rx="1" fill="currentColor" />
        <rect x="16.5" y="21" width="2.2" height="5" rx="1" fill="currentColor" />
      </g>
    </svg>
  );
}

function OfflineStorageIcon({ className = "w-8 h-8 text-slate-800" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central sphere */}
      <circle cx="16" cy="16" r="6" />
      {/* Orbital ring */}
      <ellipse cx="16" cy="16" rx="12.5" ry="4.5" transform="rotate(-18 16 16)" />
    </svg>
  );
}

export default function RechargeableAssetKeyFeatures() {
  return (
    <section id="key-features" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">
            WHAT MAKES US DIFFERENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Key Features
          </h2>
        </div>

        {/* 3-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column */}
          <div className="flex flex-col items-center">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Power className="w-8 h-8 text-slate-800 stroke-[2.3]" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                Ultra-Low Power<br />Architecture
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                Configurable update intervals for longer battery life Up to 2.5 years of operation with 1 update/day (AST3Rc)
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-48 sm:w-56 h-[1.5px] bg-slate-300 mx-auto my-9 sm:my-11" />

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Wifi className="w-8 h-8 text-slate-800 stroke-[2.3]" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                GPS + Wi-Fi + BLE<br />Support
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                Flexible connectivity using built-in GNSS, Wi-Fi, and Bluetooth Low Energy Ideal for indoor/outdoor mixed environments
              </p>
            </div>
          </div>

          {/* Center Column: Product Device Image */}
          <div className="flex items-center justify-center py-4">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[430px] aspect-[4/3] bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/solution/AST3Rc.png"
                  alt="Sensel AST3Rc Rechargeable Asset Tracker"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 430px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <SensorIcon className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                Sensor Integration
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                Optional support for external temperature sensors Ideal for cold chain logistics and sensitive lab material transport
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-48 sm:w-56 h-[1.5px] bg-slate-300 mx-auto my-9 sm:my-11" />

            {/* Feature 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <OfflineStorageIcon className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                Offline Storage
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                Local memory for storing data during network outages Automatically syncs once connectivity is restored
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
