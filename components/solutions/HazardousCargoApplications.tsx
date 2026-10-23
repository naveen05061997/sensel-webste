"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function HazardousCargoApplications() {
  // State for Item 2 Carousel (image12, image13, image14)
  const carouselImages = [
    { src: "/solution/image12.png", fallback: "/solution/image12.jpg", label: "Alco-meter Driver Pre-Trip Check" },
    { src: "/solution/image13.png", fallback: "/solution/image13.jpg", label: "SmartDriver Digital Inspection Checklist" },
    { src: "/solution/image14.png", fallback: "/solution/image14.jpg", label: "Voice Alerts & Violation Coaching" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 4.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, carouselImages.length]);

  return (
    <div
      id="applications"
      className="pt-12 sm:pt-16 border-t border-slate-200/80 scroll-mt-24 space-y-12 sm:space-y-16"
    >
      {/* Top Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-600 border border-red-200/60 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          Field Applications & Workflows
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Applications & Use Cases
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          End-to-end telematics workflows engineered for high-risk hazardous goods transport, terminal vetting, and driver safety.
        </p>
      </div>

      {/* ============================================================== */}
      {/* Use Case 1: Journey Risk Management (JRM) - Image on Left */}
      {/* ============================================================== */}
      <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Image 11 */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-900 group">
              <Image
                src="/solution/image11.png"
                alt="Journey Risk Management (JRM) with Reference Routes"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/10 text-red-600 border border-red-200/60">
              Route Safety & JRM
            </span>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight">
              Journey Risk Management (JRM)
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Identify and mitigate hazards along every route before and during transit with proactive audio coaching and geo-tagged risk zones.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Maps pre-identified hazard zones with dynamic speed limits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Real-time in-cabin voice alerts before entering JRM zones
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Records violations for review and coaching
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Familiarization module for drivers to study routes pre-journey
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Use Case 2: Driver Digital Assistant - Carousel on Right */}
      {/* ============================================================== */}
      <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-primary border border-blue-200/60">
              Driver Empowerment & Pre-Trip Vetting
            </span>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight">
              Driver Digital Assistant (SmartDriver App)
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Equip drivers with a dedicated mobile application for mandatory safety checklists, breathalyzer integration, and real-time guidance.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Trip checklist uploads with photos and feedback
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Audio instructions for loading/unloading
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Local language alerts and violation feedback
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Alco-meter integration for pre-trip checks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Phone-locking during motion for safety
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Carousel (image12, image13, image14) */}
          <div 
            className="lg:col-span-6 order-1 lg:order-2 space-y-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Carousel Screen Frame */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-900 group">
              {carouselImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  />
                </div>
              ))}

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/85 text-white flex items-center justify-center backdrop-blur-sm transition-colors shadow-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/85 text-white flex items-center justify-center backdrop-blur-sm transition-colors shadow-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Indicator Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                {carouselImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveSlide(dotIdx)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === dotIdx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="grid grid-cols-3 gap-2.5">
              {carouselImages.map((img, thumbIdx) => (
                <button
                  key={thumbIdx}
                  type="button"
                  onClick={() => setActiveSlide(thumbIdx)}
                  className={`relative aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all bg-slate-900 ${
                    activeSlide === thumbIdx
                      ? "border-primary shadow-sm ring-2 ring-primary/20 scale-[1.02]"
                      : "border-slate-200/80 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="160px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Use Case 3: E-Safe-to-Load Workflow - Image on Left */}
      {/* ============================================================== */}
      <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Image 15 */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-900 group">
              <Image
                src="/solution/image15.png"
                alt="E-Safe-to-Load Workflow"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-200/60">
              Terminal & Loading Dock Vetting
            </span>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight">
              E-Safe-to-Load Workflow
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Digitize gate checks and terminal vetting to ensure only certified vehicles and sober, authorized drivers are cleared for loading.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Automates STL checklist with inspection photos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Multi-level approval workflows (transport, plant, driver)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Alco-meter & vehicle vetting module integration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Archives inspection history and audit-ready reports
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Use Case 4: Advanced Analytics & Dashboards - Image on Right */}
      {/* ============================================================== */}
      <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-200/60">
              Executive Intelligence & KPI Reporting
            </span>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight">
              Advanced Analytics & Dashboards
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Gain executive oversight into fleet health, driver safety scorecards, loading rejections, and regulatory compliance.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Executive dashboard showing safety, delays, and violations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Driver & transporter scorecards with trip-level insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Detention tracking, route optimization, and ETA predictions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium">
                  Vehicle-wise maintenance, license, and compliance alerts
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Image 16 */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white group flex items-center justify-center p-2">
              <Image
                src="/solution/image16.png"
                alt="Advanced Analytics & Safe to Load Rejection Dashboards"
                fill
                className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
