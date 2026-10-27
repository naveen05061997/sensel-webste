"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, ArrowRight, Sparkles, FileText, Download, Sun, ShieldAlert, Layers } from "lucide-react";
import { notFound } from "next/navigation";
import KeyFeaturesGrid from "@/components/solutions/KeyFeaturesGrid";
import RechargeableAssetKeyFeatures from "@/components/solutions/RechargeableAssetKeyFeatures";
import RechargeableAssetApplications from "@/components/solutions/RechargeableAssetApplications";
import SolarAssetApplications from "@/components/solutions/SolarAssetApplications";
import HazardousCargoApplications from "@/components/solutions/HazardousCargoApplications";
import CementMiningApplications from "@/components/solutions/CementMiningApplications";
import { useDemoModal } from "@/context/DemoModalContext";
import { useEnterpriseModal } from "@/context/EnterpriseModalContext";

// Data dictionary for all Solutions
const solutionsData = {
  "work-hour-monitor": {
    title: "Work Hour Monitor",
    heroImage: "/solution/work-hour-meter.png",
    headline: "Track equipment runtime accurately with vibration sensing.",
    description1: "The Sensel Work Hour Monitor is an innovative telematics solution designed to accurately track the operational hours of heavy machinery and equipment. Utilizing advanced vibration sensors, it detects when an engine is running, providing precise utilization data without complex wiring.",
    description2: "Ideal for construction, mining, and equipment rental businesses, this solution ensures you bill accurately, schedule maintenance on time, and prevent unauthorized usage.",
    features: [
      "Automatic Work Hour Tracking (Vibration Detection)",
      "Location-Linked Updates (GPS every 8 hours)",
      "Long Battery Life (5200mAh up to 6 months)",
      "API & Web Dashboard Integration",
      "Built for Tough Environments (Dust, weather & vibration resistant)",
      "Wireless Installation / Vibration Based Engine Detection"
    ],
    recommended: [
      { name: "AST3Rc with 5200 mAh Capacity", desc: "Automatic work-hour recording with 5200 mAh rechargeable battery.", link: "/products/ast3rc" }
    ]
  },
  "work-hour-meter": {
    title: "Work Hour Monitor",
    heroImage: "/solution/work-hour-meter.png",
    headline: "Track equipment runtime accurately with vibration sensing.",
    description1: "The Sensel Work Hour Monitor is an innovative telematics solution designed to accurately track the operational hours of heavy machinery and equipment. Utilizing advanced vibration sensors, it detects when an engine is running, providing precise utilization data without complex wiring.",
    description2: "Ideal for construction, mining, and equipment rental businesses, this solution ensures you bill accurately, schedule maintenance on time, and prevent unauthorized usage.",
    features: [
      "Automatic Work Hour Tracking (Vibration Detection)",
      "Location-Linked Updates (GPS every 8 hours)",
      "Long Battery Life (5200mAh up to 6 months)",
      "API & Web Dashboard Integration",
      "Built for Tough Environments (Dust, weather & vibration resistant)",
      "Wireless Installation / Vibration Based Engine Detection"
    ],
    recommended: [
      { name: "AST3Rc with 5200 mAh Capacity", desc: "Automatic work-hour recording with 5200 mAh rechargeable battery.", link: "/products/ast3rc" }
    ]
  },
  "rechargeable-asset-tracker": {
    title: "Rechargeable Asset Tracker",
    heroImage: "/solution/rechargeable-asset-tracker.jpg",
    headline: "Monitor high-value mobile assets with extended battery life.",
    description1: "Sensel’s Rechargeable Asset Trackers (4G and 2G) are compact, intelligent, and ultra-efficient location aware devices designed to monitor high-value, mobile, and non-powered assets. Highly configurable making them suitable for a wide range of applications where extended operations for long durations on a single recharge is critical.",
    description2: "Whether it’s logistics crates, cold chain packaging, or scientific sample transport, our solution ensures every move is recorded — even in remote areas or temporary network outages.",
    features: [
      "Up to 10 Months Battery Life",
      "Real-time GPS & GLONASS Tracking",
      "Geofence Entry & Exit Alerts",
      "Magnetic Mounting Options",
      "Tamper Detection Alerts",
      "Historical Route Playback"
    ],
    recommended: [
      { 
        name: "AST3Rb", 
        desc: "Last Up to 10 months of Battery life in single charge at configurable update rate with 2000 mAh Battery Capacity. Large internal data storage. Geofence In/Out alerts and many more features.", 
        link: "/products/ast3rb" 
      },
      { 
        name: "AST3R - a/c", 
        desc: "Utralow power consumption with 2600/5200 mAh battery capacity. 1 To 3 Years of battery life at configurable update rate. Large internal data storage. Geofence In/Out alerts and many more features.", 
        link: "/products/ast3rc" 
      }
    ]
  },
  "solar-powered-asset-tracker": {
    title: "Solar Powered Asset Tracker",
    heroImage: "/solution/solar-powered-asset-tracker.jpg",
    headline: "Track Anything, Anywhere — With the Power of the Sun.",
    description1: "Sensel Telematics’ Solar-Powered Tracking Solution offers an innovative and maintenance-free way to track remote and non-powered assets like containers, wagons, trailers, and construction equipment.",
    description2: "Powered entirely by solar energy, our devices deliver uninterrupted location data, geofencing, and movement alerts, even in the most rugged environments.",
    features: [
      "☀️ Solar Powered, Always-On",
      "📍 Real-Time GPS Tracking",
      "🚚 Ideal for Non-Powered Assets",
      "🛡️ Rugged & Weatherproof",
      "📊 Smart Data Reporting",
      "🔋 Extended Battery Life",
      "Automated Geofence & Movement Alerts",
      "Global Roaming SIM Connectivity"
    ],
    recommended: [
      { 
        name: "ASSET-SMART AST4SLi", 
        desc: "AST4SLi IP67, 4G, Optional Dual E-Sim, Upto 7800mAh, IK08", 
        link: "/products/ast4sli" 
      }
    ]
  },
  "hazardous-cargo": {
    title: "Hazardous Cargo",
    heroImage: "/solution/hazardous-cargo.jpg",
    headline: "Driving Safety, Compliance & Operational Excellence in Hazardous Goods Transport",
    description1: "Transporting hazardous cargo demands precision, compliance, and utmost safety. Sensel Telematics’ Fleet Smart™ Solution offers an integrated suite of intelligent tools designed to digitally transform how hazardous cargo is monitored, managed, and delivered.",
    description2: "Whether it’s driver performance, vehicle compliance, live tracking, or safety workflows—Fleet Smart is engineered to ensure your fleet runs safer, smarter, and more efficiently.",
    features: [
      "📍 Real-time GPS tracking with live alerts",
      "⚠️ Journey Risk Management & in-cabin audio warnings",
      "📋 Safe-to-Load (STL) digital workflow automation",
      "👨‍✈️ Advanced driver behavior analysis & digital assistant",
      "📊 Transporter & fleet KPI dashboards",
      "🛡️ Compliance with safety regulations and SOPs",
      "🪪 Driver Authentication & Fatigue Tracking",
      "🚨 Emergency SOS Button Integration",
      "🌡️ Temperature & Pressure Sensor Integration"
    ],
    recommended: [
      { 
        name: "SENSEL FLEET SMART VTX 10 C", 
        desc: "Panic button, fuel sensor, Temperature & Humidity sensor interface, 3 Axis Accelerometer, internal battery.", 
        link: "/products/vtx10c" 
      }
    ]
  },
  "cement-mining": {
    title: "Cement & Mining",
    heroImage: "/solution/cement-mining.jpg",
    headline: "Manage high volumes of material movement with precision.",
    description1: "In the cement industry, managing high volumes of material movement, machinery, and internal logistics requires precision, accountability, and real-time visibility. Sensel Telematics offers an integrated solution to digitally transform cement operations — from captive power plants and limestone mines to haul roads and material yards.",
    description2: "Whether you’re tracking tippers, monitoring equipment runtime, or optimizing raw material handling, our solution helps you reduce cost, improve asset utilization, and take control of your entire supply chain ecosystem.",
    features: [
      "Dust and Vibration Resistant Hardware",
      "Trip & Turnaround Time (TAT) Analytics",
      "Weighbridge Integration",
      "Unauthorized Offloading Alerts",
      "Fuel Monitoring & Theft Prevention",
      "Offline Data Storage for Remote Areas"
    ],
    recommended: [
      { 
        name: "SENSEL FLEET SMART VTX 10 C", 
        desc: "Panic button, fuel sensor, Temperature & Humidity sensor interface, 3 Axis Accelerometer, internal battery.", 
        link: "/products/vtx10c" 
      }
    ]
  }
};

export default function SolutionDetail({ params }: { params: { slug: string } }) {
  const { openDemoModal } = useDemoModal();
  const { openEnterpriseModal } = useEnterpriseModal();
  const solution = solutionsData[params.slug as keyof typeof solutionsData];
  
  // If slug doesn't exist, return 404
  if (!solution) {
    notFound();
  }
  
  return (
    <div className={`min-h-screen ${params.slug === "cement-mining" ? "bg-[#070b14]" : "bg-slate-50 text-slate-900"}`}>
      {/* Breadcrumbs (for other solution pages) */}
      {!(params.slug === "work-hour-monitor" || params.slug === "work-hour-meter" || params.slug === "rechargeable-asset-tracker" || params.slug === "solar-powered-asset-tracker" || params.slug === "hazardous-cargo" || params.slug === "cement-mining") && (
        <div className="border-b border-border bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-slate-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-900 font-medium">{solution.title}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      {params.slug === "work-hour-monitor" || params.slug === "work-hour-meter" ? (
        /* Enhanced Premium Hero Section for Work Hour Meter */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          {/* Subtle grid pattern backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Keyframe animation for smooth fade-in/fade-out matching sensel.in */}
          <style>{`
            @keyframes roiPulseFade {
              0%, 100% {
                opacity: 0.32;
                transform: scale(0.995);
              }
              50% {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-roi-tagline {
              animation: roiPulseFade 2.6s ease-in-out infinite;
            }
          `}</style>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Back to Solutions navigation link */}
            <div className="mb-3 sm:mb-4">
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
                
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  Construction & Mining Telematics
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {solution.title}
                </h1>

                {/* Compact ROI Tagline with smooth fading/animated effect */}
                <div className="pt-0.5 pb-0.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border border-amber-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.12)]">
                    <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className="animate-roi-tagline font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 text-xs sm:text-sm tracking-wide">
                      Guaranteed 20X Return on Investment!
                    </span>
                  </div>
                </div>

                {/* Headline description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {solution.headline}
                </p>

                {/* Value chips */}
                <div className="flex flex-wrap gap-2.5 pt-1.5">
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Vibration Engine Detection
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Zero Invasive Wiring
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    IP67 Rugged Enclosure
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
                  <button 
                    type="button"
                    onClick={() => openDemoModal("Work Hour Monitor")}
                    className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a 
                    href="#key-features"
                    className="inline-flex items-center justify-center rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 transition-colors"
                  >
                    Explore Features
                  </a>
                </div>

              </div>

              {/* Right Column: Hero Visual with work-hour-meter.png */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative mx-auto max-w-lg sm:max-w-xl lg:max-w-none">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-primary/25 to-amber-500/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

                  {/* Main Card Frame */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/40">
                      <Image
                        src="/solution/work-hour-meter.png"
                        alt="Sensel Work Hour Meter in operation at heavy machinery site"
                        fill
                        priority
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                      />
                    </div>

                    {/* Floating Live Telemetry Badge echoing the tablet display */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto sm:max-w-[245px] bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 shadow-xl text-white">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Live Telemetry</span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                          Engine Running
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Utilization</p>
                          <p className="font-bold text-white text-sm">68%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Run Time</p>
                          <p className="font-bold text-amber-400 text-sm">08h 42m</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      ) : params.slug === "rechargeable-asset-tracker" ? (
        /* Dedicated Hero Section for Rechargeable Asset Tracker */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          {/* Subtle grid pattern backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Back to Solutions navigation link */}
            <div className="mb-3 sm:mb-4">
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
                
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  Heavy-Duty Asset & Cargo Telematics
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {solution.title}
                </h1>

                {/* Headline description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {solution.headline}
                </p>

                {/* Value chips */}
                <div className="flex flex-wrap gap-2.5 pt-1.5">
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Up to 10 Months Battery Life
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Real-time GPS Tracking
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Zero Wiring Needed
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
                  <button 
                    type="button"
                    onClick={() => openDemoModal()}
                    className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a 
                    href="#applications"
                    className="inline-flex items-center justify-center rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 transition-colors"
                  >
                    Explore Application
                  </a>
                </div>

              </div>

              {/* Right Column: Hero Visual with rechargeable-asset-tracker.jpg */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative mx-auto max-w-lg sm:max-w-xl lg:max-w-none">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-primary/25 to-emerald-500/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

                  {/* Main Card Frame */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/40">
                      <Image
                        src="/solution/rechargeable-asset-tracker.jpg"
                        alt="Sensel Rechargeable Asset Tracker in operation at warehouse logistics yard"
                        fill
                        priority
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                      />
                    </div>

                    {/* Floating Live Telemetry Badge mirroring the tags in the photo */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto sm:max-w-[245px] bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 shadow-xl text-white">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Live Telemetry</span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                          4G Connected
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Battery</p>
                          <p className="font-bold text-white text-sm">98%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Asset ID</p>
                          <p className="font-bold text-blue-400 text-sm">SL-9843</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ) : params.slug === "solar-powered-asset-tracker" ? (
        /* Dedicated Two-Column Hero Section for Solar Powered Asset Tracker */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          {/* Subtle grid pattern backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Back to Solutions navigation link */}
            <div className="mb-3 sm:mb-4">
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5">
                
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-300 backdrop-blur-md">
                  <Sun className="h-4 w-4 text-amber-400" />
                  Zero-Maintenance Solar Telematics
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {solution.title}
                </h1>

                {/* Headline description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {solution.headline}
                </p>

                {/* Value chips */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Self-Charging Solar Panel
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Long Battery Life
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    IP67 Rugged & Weatherproof
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-3">
                  <button 
                    type="button"
                    onClick={() => openDemoModal("Solar Powered Asset Tracker")}
                    className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a 
                    href="#key-features"
                    className="inline-flex items-center justify-center rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 transition-colors"
                  >
                    Explore Features
                  </a>
                </div>

              </div>

              {/* Right Column: Hero Visual with solar-powered-asset-tracker.jpg */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative mx-auto max-w-lg sm:max-w-xl lg:max-w-none">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600/30 via-primary/25 to-yellow-500/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

                  {/* Main Card Frame */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/40">
                      <Image
                        src="/solution/solar-powered-asset-tracker.jpg"
                        alt="Sensel Solar Powered Asset Tracker in operation"
                        fill
                        priority
                        className="object-contain scale-110 transition-transform duration-500 ease-out group-hover:scale-[1.18] hover:scale-[1.18]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                      />
                    </div>

                    {/* Floating Live Telemetry Badge mirroring the telemetry in the photo */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto sm:max-w-[245px] bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 shadow-xl text-white">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Solar Telemetry</span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                          Self Charging
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Battery Health</p>
                          <p className="font-bold text-emerald-400 text-sm">Optimal</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Solar Power</p>
                          <p className="font-bold text-amber-400 text-sm">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      ) : params.slug === "hazardous-cargo" ? (
        /* Dedicated Hero Section for Hazardous Cargo */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          {/* Subtle grid pattern backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Back to Solutions navigation link */}
            <div className="mb-3 sm:mb-4">
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
                
                {/* Category Pill */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-300 backdrop-blur-md">
                    <ShieldAlert className="h-4 w-4 text-amber-400" />
                    Hazardous Materials &amp; Tanker Telematics
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {solution.title}
                </h1>

                {/* Headline description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {solution.headline}
                </p>

                {/* Value chips */}
                <div className="flex flex-wrap gap-2.5 pt-1.5">
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Route Deviation Alerts
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    PESO &amp; AIS-140 Compliant
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Emergency SOS &amp; Anti-Theft
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
                  <button 
                    type="button"
                    onClick={() => openDemoModal("Hazardous Cargo")}
                    className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a 
                    href="#key-features"
                    className="inline-flex items-center justify-center rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 transition-colors"
                  >
                    Explore Features
                  </a>
                </div>

              </div>

              {/* Right Column: Hero Visual with hazardous-cargo.jpg */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative mx-auto max-w-lg sm:max-w-xl lg:max-w-none">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600/30 via-red-500/25 to-primary/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

                  {/* Main Card Frame */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/40">
                      <Image
                        src="/solution/hazardous-cargo.jpg"
                        alt="Sensel Hazardous Cargo Telematics Solution"
                        fill
                        priority
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ) : params.slug === "cement-mining" ? (
        /* Dedicated Hero Section for Cement & Mining */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          {/* Subtle grid pattern backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-yellow-500/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Back to Solutions navigation link */}
            <div className="mb-3 sm:mb-4">
              <Link 
                href="/solutions" 
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
                
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-300 backdrop-blur-md">
                  <Layers className="h-4 w-4 text-amber-400" />
                  Heavy Aggregate, Quarry &amp; Plant Telematics
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  {solution.title}
                </h1>

                {/* Headline description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {solution.headline}
                </p>

                {/* Value chips */}
                <div className="flex flex-wrap gap-2.5 pt-1.5">
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Trip & Turnaround Time (TAT) Analytics
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Automated Weighbridge Integration
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                    Dust & Vibration Resistant (IP67)
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
                  <button 
                    type="button"
                    onClick={() => openDemoModal("Cement & Mining")}
                    className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a 
                    href="#key-features"
                    className="inline-flex items-center justify-center rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 transition-colors"
                  >
                    Explore Features
                  </a>
                </div>

              </div>

              {/* Right Column: Hero Visual with cement-mining.jpg */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative mx-auto max-w-lg sm:max-w-xl lg:max-w-none">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600/30 via-orange-500/25 to-primary/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

                  {/* Main Card Frame */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/40">
                      <Image
                        src="/solution/cement-mining.jpg"
                        alt="Sensel Cement and Mining Telematics - Haul Trucks and Quarry Logistics"
                        fill
                        priority
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                      />
                    </div>

                    {/* Floating Live Telemetry Badge echoing mining haul truck operations */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto sm:max-w-[245px] bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 shadow-xl text-white">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Live Pit Telemetry</span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                          Hauler Active
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Avg TAT</p>
                          <p className="font-bold text-white text-sm">34 Mins</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                          <p className="text-slate-400 text-[10px]">Trips Today</p>
                          <p className="font-bold text-amber-400 text-sm">18 Loads</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ) : (
        /* Preserved Standard Hero Section for other solutions */
        <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800/60">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <Link href="/solutions" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Solutions
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-[1.15]">{solution.title}</h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              {solution.headline}
            </p>
            <button 
              type="button"
              onClick={() => openDemoModal(solution.title)}
              className="inline-flex items-center justify-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-12 sm:h-14 px-8 sm:px-10 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section 
        className={`pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-10 md:pb-20 relative ${
          params.slug === "cement-mining" ? "bg-[#070b14] text-white border-b border-slate-800/60" : ""
        }`} 
        id="overview"
      >
        {/* Background Cover Image with Lighter Tint for Cement & Mining */}
        {params.slug === "cement-mining" && (
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
            <Image
              src="/solution/cement and mining cover.png"
              alt="Cement & Mining Pit Logistics Background"
              fill
              priority
              className="object-cover object-center opacity-85"
            />
            {/* Lighter, translucent gradient overlay so the mining trucks and quarry landscape are clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/70 via-[#070b14]/35 to-[#070b14]/75" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Beautified Overview Section */}
              {params.slug === "work-hour-monitor" || params.slug === "work-hour-meter" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-secondary border border-orange-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-secondary" />
                      Solution Overview
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Overview
                  </h2>

                  <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 via-white to-orange-50/20 border border-slate-200/80 p-6 sm:p-7 shadow-sm overflow-hidden">
                    {/* Left vertical gradient decorative bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary via-orange-400 to-primary" />

                    {/* Paragraph 1 */}
                    <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed mb-4">
                      The <strong className="text-slate-900 font-bold">Sensel Work Hour Monitor</strong> is an innovative telematics solution designed to accurately track the operational hours of heavy machinery and equipment. Utilizing advanced vibration sensors, it detects when an engine is running, providing precise utilization data <strong className="text-secondary font-semibold">without complex wiring</strong>.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      Ideal for <span className="font-semibold text-slate-800">construction, mining, and equipment rental businesses</span>, this solution ensures you bill accurately, schedule maintenance on time, and prevent unauthorized usage.
                    </p>

                    {/* 3 Core Value Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-slate-200/80">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-secondary flex items-center justify-center shrink-0 font-bold text-sm">
                          ✓
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Accurate Billing</p>
                          <p className="text-[11px] text-slate-500">Zero disputes on runtime</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                          ⏱️
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Timely Maintenance</p>
                          <p className="text-[11px] text-slate-500">Prevent machine downtime</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-sm">
                          🛡️
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Prevent Misuse</p>
                          <p className="text-[11px] text-slate-500">Detect unauthorized operation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : params.slug === "rechargeable-asset-tracker" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-primary border border-blue-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Solution Overview
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Overview
                  </h2>

                  <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/20 border border-slate-200/80 p-6 sm:p-7 shadow-sm overflow-hidden">
                    {/* Left vertical gradient decorative bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-blue-500 to-emerald-500" />

                    {/* Subhead / Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
                      Track Assets. Wire - Free. Stay Connected Anywhere.
                    </h3>

                    {/* Paragraph 1 */}
                    <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed mb-4">
                      Sensel’s <strong className="text-slate-900 font-bold">Rechargeable Asset Trackers (4G and 2G)</strong> are compact, intelligent, and ultra-efficient location aware devices designed to monitor high-value, mobile, and non-powered assets. Highly configurable making them suitable for a wide range of applications where extended operations for long durations on a single recharge is critical.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      Whether it’s <span className="font-semibold text-slate-800">logistics crates, cold chain packaging, or scientific sample transport</span>, our solution ensures every move is recorded — even in remote areas or temporary network outages.
                    </p>

                    {/* 3 Core Value Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-slate-200/80">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                          📦
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Logistics & Crates</p>
                          <p className="text-[11px] text-slate-500">End-to-end cargo visibility</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 font-bold text-sm">
                          ❄️
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Cold Chain</p>
                          <p className="text-[11px] text-slate-500">Sensitive payload tracking</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-sm">
                          📡
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Offline Logging</p>
                          <p className="text-[11px] text-slate-500">Zero data loss in outages</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : params.slug === "solar-powered-asset-tracker" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 border border-amber-200/60">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      Solution Overview
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Overview
                  </h2>

                  <div className="relative rounded-2xl bg-gradient-to-br from-amber-50/40 via-white to-orange-50/20 border border-slate-200/80 p-6 sm:p-7 shadow-sm overflow-hidden">
                    {/* Left vertical gradient decorative bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 via-orange-500 to-yellow-500" />

                    {/* Subhead / Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
                      Track Anything, Anywhere — With the Power of the Sun.
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed mb-6">
                      Sensel Telematics’ <strong className="text-slate-900 font-bold">Solar-Powered Tracking Solution</strong> offers an innovative and maintenance-free way to track remote and non-powered assets like <span className="font-semibold text-slate-800">containers, wagons, trailers, and construction equipment</span>. Powered entirely by solar energy, our devices deliver uninterrupted location data, geofencing, and movement alerts, even in the most rugged environments.
                    </p>

                    {/* 4 Core Value Metric Cards: 100% solar-powered | IP67-rated | Long battery life | No wiring required */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80">
                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">☀️</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">100% Solar-Powered</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Zero grid dependency</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🛡️</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">IP67-Rated</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Rugged & weatherproof</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🔋</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">Long Battery Life</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Continuous self-charging</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">⚡</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">No Wiring Required</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Fast non-invasive mount</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : params.slug === "hazardous-cargo" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-600 border border-red-200/60">
                      <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                      Solution Overview
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Overview
                  </h2>

                  <div className="relative rounded-2xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/20 border border-slate-200/80 p-6 sm:p-7 shadow-sm overflow-hidden">
                    {/* Left vertical gradient decorative bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-600 via-amber-500 to-orange-500" />

                    {/* Pre-title / Solution identity */}
                    <p className="text-xs sm:text-sm font-bold text-red-600 tracking-wider uppercase mb-2">
                      FLEET SMART™ – TELEMATICS SOLUTION FOR HAZARDOUS CARGO
                    </p>

                    {/* Subhead / Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
                      Driving Safety, Compliance & Operational Excellence in Hazardous Goods Transport
                    </h3>

                    {/* Paragraph 1 */}
                    <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed mb-4">
                      Transporting hazardous cargo demands precision, compliance, and utmost safety. Sensel Telematics’ <strong className="text-slate-900 font-bold">Fleet Smart™ Solution</strong> offers an integrated suite of intelligent tools designed to digitally transform how hazardous cargo is monitored, managed, and delivered.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      Whether it’s <span className="font-semibold text-slate-800">driver performance, vehicle compliance, live tracking, or safety workflows</span>—Fleet Smart is engineered to ensure your fleet runs safer, smarter, and more efficiently.
                    </p>

                    {/* 4 Core Value Metric Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80">
                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">👨‍✈️</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">Driver Performance</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Fatigue & behavior tracking</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">📜</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">Vehicle Compliance</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">PESO & safety checklists</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">📍</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">Live Tracking</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Real-time route & geofence</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🛡️</span>
                          <p className="text-xs font-bold text-slate-900 leading-tight">Safety Workflows</p>
                        </div>
                        <p className="text-[11px] text-slate-500 pl-6">Instant alerts & SOS</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : params.slug === "cement-mining" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      Solution Overview
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    Overview
                  </h2>

                  <div className="relative rounded-2xl bg-slate-900/85 border border-slate-700/80 p-6 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden">
                    {/* Left vertical gradient decorative bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-400" />

                    {/* Pre-title / Solution identity */}
                    <p className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase mb-2">
                      SENSEL TELEMATICS – INTEGRATED CEMENT & MINING SOLUTION
                    </p>

                    {/* Subhead / Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
                      Digitally Transforming Heavy Material Movement & Internal Plant Logistics
                    </h3>

                    {/* Paragraph 1 */}
                    <p className="text-base sm:text-[17px] text-slate-200 leading-relaxed mb-4">
                      In the cement industry, managing high volumes of material movement, machinery, and internal logistics requires <strong className="text-white font-bold">precision, accountability, and real-time visibility</strong>. Sensel Telematics offers an integrated solution to digitally transform cement operations — from <span className="font-semibold text-amber-200/90">captive power plants and limestone mines to haul roads and material yards</span>.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      Whether you’re <span className="font-semibold text-slate-100">tracking tippers, monitoring equipment runtime, or optimizing raw material handling</span>, our solution helps you reduce cost, improve asset utilization, and take control of your entire supply chain ecosystem.
                    </p>

                    {/* 4 Core Value Metric Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-700/80">
                      <div className="flex flex-col gap-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🚛</span>
                          <p className="text-xs font-bold text-white leading-tight">Tipper Tracking</p>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-6">Pit-to-crusher monitoring</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 shadow-xs backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-base">⏱️</span>
                          <p className="text-xs font-bold text-white leading-tight">Equipment Runtime</p>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-6">Accurate hours & idle time</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 shadow-xs backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-base">⚖️</span>
                          <p className="text-xs font-bold text-white leading-tight">Material Handling</p>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-6">Yard & weighbridge sync</p>
                      </div>

                      <div className="flex flex-col gap-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 shadow-xs backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-base">📈</span>
                          <p className="text-xs font-bold text-white leading-tight">Asset Utilization</p>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-6">Lower TAT & fuel waste</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {solution.description1}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {solution.description2}
                  </p>
                </div>
              )}

              {params.slug !== "rechargeable-asset-tracker" && (
                <div id="key-features" className="scroll-mt-28">
                  <h2 className={`text-3xl font-bold mb-6 ${params.slug === "cement-mining" ? "text-white" : "text-slate-900"}`}>Key Features</h2>
                  {params.slug === "work-hour-monitor" || params.slug === "work-hour-meter" ? (
                    <KeyFeaturesGrid />
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.features.map((feature, idx) => {
                        const emojiMatch = feature.match(/^(\p{Extended_Pictographic}|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*(.*)$/u);
                        const emoji = emojiMatch ? emojiMatch[1] : null;
                        const label = emojiMatch ? emojiMatch[2] : feature;
                        const isCementMining = params.slug === "cement-mining";

                        return (
                          <div 
                            key={idx} 
                            className={`flex items-center gap-3.5 p-4 rounded-xl border transition-all ${
                              isCementMining 
                                ? "bg-slate-900/85 border-slate-700/80 shadow-xl backdrop-blur-md hover:border-amber-400/50 hover:bg-slate-900/95 text-white" 
                                : "bg-gradient-to-br from-slate-50 via-white to-slate-50/50 border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm"
                            }`}
                          >
                            {emoji ? (
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg border ${
                                isCementMining 
                                  ? "bg-amber-500/15 text-amber-300 border-amber-400/30" 
                                  : "bg-amber-500/10 text-amber-700 border-amber-200/50"
                              }`}>
                                {emoji}
                              </div>
                            ) : (
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                                isCementMining 
                                  ? "bg-amber-500/15 text-amber-400 border-amber-400/30" 
                                  : "bg-primary/10 text-primary border-primary/20"
                              }`}>
                                <CheckCircle2 className="h-5 w-5" />
                              </div>
                            )}
                            <span className={`font-semibold text-[15px] leading-snug ${isCementMining ? "text-slate-100" : "text-slate-800"}`}>
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Solar Powered Asset Tracker: Applications & Use Cases Section */}
              {params.slug === "solar-powered-asset-tracker" && (
                <SolarAssetApplications />
              )}

              {/* Hazardous Cargo: Applications & Use Cases Section */}
              {params.slug === "hazardous-cargo" && (
                <HazardousCargoApplications />
              )}

              {/* Cement & Mining: Applications & Use Cases Section */}
              {params.slug === "cement-mining" && (
                <CementMiningApplications />
              )}

              {/* Work Hour Monitor Solution Feature Section */}
              {(params.slug === "work-hour-monitor" || params.slug === "work-hour-meter") && (
                <div className="pt-10 border-t border-slate-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
                    
                    {/* Left: Text & CTA */}
                    <div className="text-center space-y-5">
                      <h3 className="text-secondary font-extrabold uppercase tracking-widest text-base sm:text-lg">
                        WORK HOUR MONITOR<br />SOLUTION
                      </h3>

                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        Accurately Track Equipment Runtime. Reduce Downtime. Optimize Productivity. Wire Free Long Life Battery Operated Solution.
                      </h4>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Heavy machinery used in <strong className="text-slate-900 font-semibold">construction, mining, and infrastructure</strong> projects often runs in harsh conditions with minimal digital oversight. Sensel Telematics’ <strong className="text-slate-900 font-semibold">Work Hour Monitor</strong> brings precision and accountability to asset usage by <strong className="text-slate-900 font-semibold">accurately capturing engine runtime</strong> using vibration-based technology.
                      </p>
                    </div>

                    {/* Right: Excavator Image */}
                    <div className="relative aspect-[2/3] w-full max-w-sm sm:max-w-md md:max-w-none mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 min-h-[460px] sm:min-h-[520px] md:min-h-[560px]">
                      <Image
                        src="/solution/work-hour-monitor-solution.png"
                        alt="Sensel Work Hour Monitor Solution"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                      />
                    </div>

                  </div>
                </div>
              )}

              {/* Construction Site Efficiency Feature Section */}
              {(params.slug === "work-hour-monitor" || params.slug === "work-hour-meter") && (
                <div className="pt-12 sm:pt-14 border-t border-slate-200">
                  {/* Top Orange Header */}
                  <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                    <h3 className="text-secondary font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl leading-snug">
                      A RUGGED, SELF-POWERED SOLUTION THAT HELPS YOU MAKE DATA-DRIVEN DECISIONS FOR EQUIPMENT MAINTENANCE, BILLING, AND PRODUCTIVITY MANAGEMENT.
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* Left: Excavator & Dump Truck Image */}
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
                      <Image
                        src="/solution/work-hour-site-efficiency.png"
                        alt="How telematics improves construction site efficiency"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                      />
                    </div>

                    {/* Right: Content & Bullet Points */}
                    <div className="space-y-4">
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                        How Telematics Improves<br className="hidden sm:inline" /> Construction Site Efficiency
                      </h4>

                      <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed">
                        By providing a clear picture of your fleet’s performance, telematics allows you to:
                      </p>

                      <ul className="space-y-2 text-sm sm:text-base text-slate-600 pl-1">
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0" />
                          <span>Streamline equipment scheduling.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0" />
                          <span>Reduce project delays caused by equipment downtime.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0" />
                          <span>Plan more efficiently for future projects.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0" />
                          <span>Monitor actual work hours</span>
                        </li>
                      </ul>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                        These insights translate into significant cost savings and improved productivity across your construction sites.
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Sidebar / Recommended Products */}
            <div className="lg:col-span-1">
              <div className={`rounded-2xl p-4 sm:p-5 transition-all ${
                params.slug !== "rechargeable-asset-tracker" ? "sticky top-16 lg:top-20" : ""
              } ${
                params.slug === "cement-mining"
                  ? "bg-slate-900/85 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-white"
                  : "bg-slate-50 border border-border shadow-sm"
              }`}>
                <h3 className={`text-base sm:text-lg font-bold mb-2.5 flex items-center ${
                  params.slug === "cement-mining" ? "text-white" : "text-slate-900"
                }`}>
                   Recommended Products
                </h3>
                {params.slug === "solar-powered-asset-tracker" ? (
                  /* Custom ASSET-SMART AST4SLi Card for Solar Powered Asset Tracker */
                  <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm space-y-4">
                    {/* Product Title & Red Subtitle */}
                    <div className="space-y-1.5 pb-3 border-b border-slate-100">
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        ASSET-SMART AST4SLi
                      </h4>
                      <p className="text-xs sm:text-[13px] font-bold text-red-600 leading-snug">
                        AST4SLi IP67, 4G, Optional Dual E-Sim,<br />
                        Upto 7800mAh, IK08
                      </p>
                    </div>

                    {/* Features List with Icons from screenshot */}
                    <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ff7a00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                        </svg>
                        <span>Advanced tamper detection</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ff7a00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="8" width="14" height="9" rx="2" ry="2" />
                          <line x1="18" y1="11" x2="18" y2="14" strokeWidth="2.5" />
                          <path d="M13 5c0-1.8 1.8-2.7 3.5-2.7 0 1.8-.9 3.6-3.5 3.6z" fill="currentColor" />
                          <path d="M6 12.5h1.5a1.5 1.5 0 0 0 0-3H6v5" />
                        </svg>
                        <span>Ultra-low power consumption</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ff7a00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="5" fill="currentColor" />
                          <circle cx="12" cy="12" r="2" fill="white" stroke="none" />
                          <path d="M4.93 4.93a10 10 0 0 0 0 14.14M19.07 4.93a10 10 0 0 1 0 14.14" />
                        </svg>
                        <span>BLE Support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ff7a00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <circle cx="12" cy="20" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                        <span>WIFI Enabled ( Optional )</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ff7a00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="9" r="3.5" fill="currentColor" stroke="none" />
                          <path d="M12 2v2M5.64 5.64l1.41 1.41M18.36 5.64l-1.41 1.41M2 9h2M20 9h2" />
                          <path d="M3 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
                          <path d="M3 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
                        </svg>
                        <span>Solar Energy Harvesting</span>
                      </li>
                    </ul>

                    {/* View Details Link */}
                    <div className="pt-3 border-t border-slate-100">
                      <Link 
                        href="/products/ast4sli"
                        className="text-sm font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center group"
                      >
                        View Details <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ) : (params.slug === "hazardous-cargo" || params.slug === "cement-mining") ? (
                  /* Custom SENSEL FLEET SMART VTX 10 C Card for Hazardous Cargo & Cement Mining */
                  <div className="bg-white rounded-xl p-4 sm:p-4.5 border border-slate-200/90 shadow-sm space-y-3">
                    {/* Compact Device Image */}
                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-200/80 shadow-2xs flex items-center justify-center max-w-[185px] mx-auto">
                      <div className="relative aspect-[4/3] w-full max-w-[145px] h-[84px]">
                        <Image
                          src="/solution/VTX10c.png"
                          alt="SENSEL FLEET SMART VTX 10 C"
                          fill
                          className="object-contain"
                          sizes="145px"
                        />
                      </div>
                    </div>

                    {/* Product Title */}
                    <div className="pb-2 border-b border-slate-100">
                      <h4 className="text-[13px] sm:text-sm font-bold text-slate-900 tracking-tight leading-snug">
                        SENSEL FLEET SMART <span className="text-primary font-extrabold">VTX 10 C</span>
                      </h4>
                    </div>

                    {/* Subpoints */}
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1 mr-1.5 shrink-0" />
                        <span>Panic button interface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1 mr-1.5 shrink-0" />
                        <span>fuel sensor interface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1 mr-1.5 shrink-0" />
                        <span>Temperature & Humidity sensor interface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1 mr-1.5 shrink-0" />
                        <span>3 Axis Acclerometer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1 mr-1.5 shrink-0" />
                        <span>internal battery</span>
                      </li>
                    </ul>

                    {/* View Details Link */}
                    <div className="pt-2 border-t border-slate-100">
                      <Link 
                        href="/products/vtx10c"
                        className="text-xs sm:text-[13px] font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center group"
                      >
                        View Details <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ) : params.slug === "work-hour-monitor" || params.slug === "work-hour-meter" ? (
                  /* Custom AST3Rc Feature Card for Work Hour Meter */
                  <div className="space-y-3.5">
                    {/* Compact Device Image */}
                    <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-sm flex items-center justify-center max-w-[190px] mx-auto">
                      <div className="relative aspect-[4/3] w-full max-w-[145px] h-[100px]">
                        <Image
                          src="/solution/AST3Rc.png"
                          alt="AST3Rc with 5200 mAh Capacity"
                          fill
                          className="object-contain"
                          sizes="145px"
                        />
                      </div>
                    </div>

                    {/* Product Title */}
                    <h4 className="text-base font-bold text-[#1e1b4b] leading-tight">
                      AST3Rc with 5200 mAh Capacity
                    </h4>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                        <span>Automatic Work-Hour Recording</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                        <span>Data Update Every 8 Hours with Precise Location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                        <span>Rechargeable Battery (6+ months operation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                        <span>Web Based Login and Reporting</span>
                      </li>
                    </ul>

                    {/* View Details Link */}
                    <div className="pt-2">
                      <Link 
                        href="/products/ast3rc"
                        className="text-sm font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center group"
                      >
                        View Details <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* Standard Recommended Products for other solutions */
                  <div className="space-y-6">
                    {solution.recommended.map((prod, idx) => (
                      <div key={idx} className={`pb-6 last:border-0 last:pb-0 ${
                        params.slug === "cement-mining" ? "border-b border-slate-700/80" : "border-b border-border"
                      }`}>
                        <h4 className={`font-semibold mb-2 ${
                          params.slug === "cement-mining" ? "text-amber-400 font-bold" : "text-primary"
                        }`}>{prod.name}</h4>
                        <p className={`text-sm mb-3 ${
                          params.slug === "cement-mining" ? "text-slate-300" : "text-slate-600"
                        }`}>{prod.desc}</p>
                        <Link 
                          href={prod.link} 
                          className={`text-sm font-bold transition-colors flex items-center ${
                            params.slug === "cement-mining" ? "text-white hover:text-amber-400" : "text-slate-900 hover:text-primary"
                          }`}
                        >
                          View Details <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`mt-4 pt-4 border-t ${
                  params.slug === "cement-mining" ? "border-slate-700/80" : "border-slate-200"
                }`}>
                   <div className="flex items-start">
                      <AlertCircle className={`h-4 w-4 mr-2 shrink-0 mt-0.5 ${
                        params.slug === "cement-mining" ? "text-amber-400" : "text-secondary"
                      }`} />
                      <p className={`text-xs leading-relaxed ${
                        params.slug === "cement-mining" ? "text-slate-300" : "text-slate-600"
                      }`}>
                        Need a custom enterprise integration?{" "}
                        <button
                          type="button"
                          onClick={() => openEnterpriseModal(solution.title)}
                          className={`font-bold hover:underline cursor-pointer text-left inline p-0 bg-transparent border-0 transition-colors ${
                            params.slug === "cement-mining" ? "text-amber-400 hover:text-amber-300" : "text-secondary hover:text-orange-600"
                          }`}
                        >
                          Talk to our engineering team.
                        </button>
                      </p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Rechargeable Asset Tracker: Dedicated 3-Column Hardware Showcase Key Features & Applications */}
      {params.slug === "rechargeable-asset-tracker" && (
        <>
          <RechargeableAssetKeyFeatures />
          <RechargeableAssetApplications />
        </>
      )}
    </div>
  );
}
