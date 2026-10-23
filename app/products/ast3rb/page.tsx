"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Download, 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  BatteryCharging, 
  MapPin, 
  Wifi, 
  Radio, 
  ShieldCheck, 
  Award, 
  Zap, 
  Thermometer, 
  Cpu, 
  ArrowRight,
  ExternalLink,
  Sliders,
  Database,
  Smartphone,
  Maximize2
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { useEnterpriseModal } from "@/context/EnterpriseModalContext";

export default function Ast3rbProductPage() {
  const { openDemoModal } = useDemoModal();
  const { openEnterpriseModal } = useEnterpriseModal();

  const datasheetUrl = "/solution/AST3Rb.pdf";

  const keyFeatures = [
    {
      icon: Maximize2,
      title: "Ultra-Slim 18mm & 100g Profile",
      desc: "Compact dimensions of 78 × 60 × 18 mm and featherlight 100g weight make it ideal for covert tracking, slim parcel crates, and tight asset compartments.",
      tag: "18mm Ultra-Slim"
    },
    {
      icon: BatteryCharging,
      title: "2000 mAh Extended Battery",
      desc: "Long-life internal rechargeable lithium battery powers 10+ months of autonomous operation or 2,000+ location updates on a single charge.",
      tag: "10+ Months Life"
    },
    {
      icon: MapPin,
      title: "High-Precision GPS & GSM",
      desc: "High-sensitivity GPS L1 receiver with <2.5m CEP accuracy and automatic fallback to GSM triangulation when satellite signals are blocked.",
      tag: "Dual Location"
    },
    {
      icon: Sliders,
      title: "Adaptive Power Management",
      desc: "Intelligent dynamic duty cycle toggles reporting intervals between active transit and stationary deep sleep to conserve energy.",
      tag: "Smart Duty Cycle"
    },
    {
      icon: ShieldCheck,
      title: "Tamper & Theft Detection",
      desc: "3-axis accelerometer with programmable vibration thresholds immediately detects unauthorized movement, handling, or device removal.",
      tag: "Anti-Theft"
    },
    {
      icon: Database,
      title: "Large Offline Data Buffer",
      desc: "Internal non-volatile storage buffers location records during mobile network blackouts, automatically syncing once connection is restored.",
      tag: "Zero Data Loss"
    },
    {
      icon: Radio,
      title: "Bluetooth 3.0 Connectivity",
      desc: "Integrated internal antenna supports rapid auto-pairing with user mobile application for on-site configuration, health audits, and diagnostics.",
      tag: "BLE & App Pair"
    },
    {
      icon: Thermometer,
      title: "Thermal Safety Cutoff",
      desc: "Built-in thermal safety logic automatically disconnects charging if the battery exceeds critical threshold temperatures to protect equipment.",
      tag: "Hardware Safety"
    },
    {
      icon: Wifi,
      title: "Wire-Free & Optional Wi-Fi",
      desc: "Completely standalone wire-free installation with optional Wi-Fi support for localized warehouse data offloading and depot check-ins.",
      tag: "Zero Wiring"
    }
  ];

  const specs = [
    {
      category: "GPS & Positioning",
      items: [
        { label: "Receiver Frequency", value: "GPS L1 1575.42 MHz" },
        { label: "Horizontal Position Accuracy", value: "< 2.5 m CEP" },
        { label: "Protocol", value: "NMEA-0183" },
        { label: "Tracking Sensitivity", value: "-167 dBm" },
        { label: "Fallback Positioning", value: "GSM cellular triangulation mode where GPS signal is unavailable" }
      ]
    },
    {
      category: "Electrical & Battery",
      items: [
        { label: "Internal Battery", value: "3.7V 2000 mAh Long-Life Lithium internal rechargeable battery" },
        { label: "Autonomous Life", value: "10+ Months with single charge (2,000+ updates)" },
        { label: "Charging Time", value: "~4 Hours" },
        { label: "Charger Input", value: "5V 1A Micro-USB charger" },
        { label: "Thermal Protection", value: "Auto-disconnect above threshold temperature of battery" }
      ]
    },
    {
      category: "Cellular & Wireless Connectivity",
      items: [
        { label: "Cellular Frequency Bands", value: "Quad-band GSM 850 / 900 / 1800 / 1900 MHz" },
        { label: "GPRS Capabilities", value: "Multi-slot class 12 / 10, Mobile station class B" },
        { label: "RF Output Power", value: "Class 4 (2 W @ 850 / 900 MHz)" },
        { label: "SIM Interface", value: "2G M2M SIM" },
        { label: "Bluetooth", value: "Bluetooth 3.0 with internal antenna (auto-pairing with user app)" },
        { label: "Wi-Fi", value: "Optional Wi-Fi support" }
      ]
    },
    {
      category: "Physical & Environmental",
      items: [
        { label: "Dimensions", value: "78 mm × 60 mm × 18 mm (Ultra-compact form factor)" },
        { label: "Weight", value: "100 g (Lightweight portable enclosure)" },
        { label: "Ingress Protection", value: "Waterproof and dustproof rugged housing" },
        { label: "Operating Temperature", value: "-10°C to +60°C" },
        { label: "Mounting", value: "Wire-free standalone mounting / magnetic / enclosure placement" }
      ]
    },
    {
      category: "Certifications & Management",
      items: [
        { label: "GSM-GPS Certification", value: "CE Certified" },
        { label: "Environmental Compliance", value: "RoHS Compliant (PCB and components)" },
        { label: "Firmware Upgrades", value: "OTA (Over-The-Air) firmware & configuration updates" },
        { label: "Software Platform", value: "Web-based portal + iOS/Android mobile applications" },
        { label: "Manufacturing Origin", value: "Designed & Manufactured in India by Sensel Telematics" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH - COMPACT FULL-SCREEN FIT)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#070b14] text-white pt-20 sm:pt-22 lg:pt-20 pb-4 sm:pb-6 lg:pb-6 border-b border-slate-800">
        
        {/* Subtle grid pattern & glowing mesh */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Integrated Breadcrumbs Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pb-1.5 mb-2.5 sm:mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-primary font-semibold">AST3Rb</span>
            </div>

            <div className="flex items-center gap-2">
              <Link 
                href="/solutions/rechargeable-asset-tracker"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Rechargeable Asset Tracker Solution</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Product Information & CTAs */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 lg:space-y-4 max-w-3xl">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-primary tracking-wide uppercase">
                  <Cpu className="h-3 w-3" />
                  Asset-Smart™ Series
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-sky-300">
                  <Maximize2 className="h-3 w-3" />
                  Ultra-Slim 18mm • 100g
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-amber-300">
                  <Award className="h-3 w-3 text-amber-400" />
                  Frost &amp; Sullivan Award Winner
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  AST3Rb <span className="text-primary font-medium text-lg sm:text-xl lg:text-2xl block sm:inline sm:ml-2">(2000 mAh)</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 leading-normal">
                  ASSET-SMART AST3Rb — GPS Tracking Solution for Non-Powered &amp; Mobile Assets
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
                Sensel’s <strong>AST3Rb</strong> is a compact, ultra-slim, wire-free IoT location tracking device designed to monitor non-powered high-value assets, logistics containers, and cargo transit. Engineered with an internal <strong>2000 mAh rechargeable lithium battery</strong>, the device runs for <strong>10+ months on a single charge</strong> with 2,000+ location updates, advanced tamper detection, and adaptive power management.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 max-w-3xl">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <BatteryCharging className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">2000 mAh Rechargeable</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Maximize2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">18mm Slim Profile (100g)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="truncate">GPS L1 &lt;2.5m CEP</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Anti-Theft Vibration Alert</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Database className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">Offline Data Buffer</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Zap className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">10+ Months Battery Run</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1.5 sm:pt-2">
                {/* Official Datasheet Download */}
                <a
                  href={datasheetUrl}
                  download="AST3Rb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary/90 h-9 sm:h-10 px-4 sm:px-5 transition-all shadow-md shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Datasheet (PDF)
                </a>

                {/* Request Demo / Quote */}
                <button
                  type="button"
                  onClick={() => openDemoModal("AST3Rb Rechargeable Tracker")}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs sm:text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-9 sm:h-10 px-4 sm:px-5 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Request Quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {/* Jump to Specifications */}
                <a
                  href="#specifications"
                  className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors px-2 py-1"
                >
                  Technical Specifications ↓
                </a>
              </div>

            </div>

            {/* Right: Device Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                
                {/* Glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 via-sky-500/20 to-emerald-600/30 rounded-2xl blur-xl opacity-75 -z-10" />

                {/* Glassmorphic Card Frame */}
                <div className="relative rounded-2xl p-3.5 sm:p-4 bg-gradient-to-b from-white/10 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60 space-y-2.5 sm:space-y-3">
                  
                  {/* Top pill & status */}
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-white/10">
                    <span className="font-mono text-slate-300 uppercase tracking-wider font-semibold">Model: AST3Rb</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CE &amp; RoHS Certified
                    </span>
                  </div>

                  {/* Device Image Container */}
                  <div className="relative bg-gradient-to-b from-slate-900/90 via-[#0a1120] to-[#070b14] border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-inner flex items-center justify-center min-h-[130px] sm:min-h-[145px] lg:min-h-[155px] overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.14),transparent_70%)] pointer-events-none" />
                    <div className="relative w-full max-w-[170px] sm:max-w-[190px] aspect-[4/3]">
                      <Image
                        src="/solution/AST3Rb.png"
                        alt="Sensel ASSET-SMART AST3Rb Hardware Tracker"
                        fill
                        priority
                        className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 190px, 220px"
                      />
                    </div>

                    {/* Badge on Image */}
                    <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                      78 × 60 × 18 mm • 100 g
                    </div>
                  </div>

                  {/* Telemetry Quick Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Battery Capacity</p>
                      <p className="text-white font-bold text-xs sm:text-sm">2000 mAh Li-Ion</p>
                      <p className="text-emerald-400 text-[10px] mt-0.5 leading-none">10+ Months run</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Form Factor</p>
                      <p className="text-sky-400 font-bold text-xs sm:text-sm">18mm Ultra-Slim</p>
                      <p className="text-slate-300 text-[10px] mt-0.5 leading-none">Featherlight 100g</p>
                    </div>
                  </div>

                  {/* PDF Datasheet Card Link */}
                  <div className="pt-0.5">
                    <a
                      href={datasheetUrl}
                      download="AST3Rb.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-primary transition-colors leading-tight">
                            AST3Rb.pdf
                          </p>
                          <p className="text-[10px] text-slate-400 leading-tight">Official Technical Datasheet • PDF</p>
                        </div>
                      </div>
                      <Download className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary group-hover:translate-y-0.5 transition-all shrink-0 ml-2" />
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          QUICK STATS / METRICS BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080d19] border-b border-slate-800 py-8 sm:py-10 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">10+ Months</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Autonomous Operation</p>
              <p className="text-[11px] text-slate-400 mt-0.5">2,000+ updates per single charge</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">18 mm</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Ultra-Slim Depth</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Weighs just 100g for covert use</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-200 mb-1">&lt; 2.5 m</div>
              <p className="text-xs sm:text-sm font-semibold text-white">GPS Horizontal Accuracy</p>
              <p className="text-[11px] text-slate-400 mt-0.5">-167 dBm tracking sensitivity</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">2000 mAh</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Lithium Rechargeable</p>
              <p className="text-[11px] text-slate-400 mt-0.5">4-hour fast charge via Micro-USB</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CORE CAPABILITIES & SYSTEM ARCHITECTURE (FROM PDF)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Engineered For Tough Realities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              Comprehensive Hardware &amp; Software Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every feature in the AST3Rb is designed to deliver reliable visibility for non-powered assets, cargo crates, logistics trailers, and high-value shipments without requiring external wiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide text-slate-500 bg-slate-100 rounded-md px-2.5 py-1">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {feat.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-primary" />
                    Production Ready &amp; Proven
                  </div>
                </div>
              );
            })}
          </div>

          {/* Software Suite & Frost Sullivan Ribbon */}
          <div className="mt-12 max-w-6xl mx-auto bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Industry Best Software Suite &amp; Technology Leadership
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Winner of India Connected Vehicles &amp; Telematics Enabling Technology Leadership Award from <strong>Frost &amp; Sullivan</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                <Smartphone className="h-4 w-4 text-primary" /> Web &amp; Mobile App Support
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                🇮🇳 Made in India
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS ACCORDION / GRID (EXACT SPECS FROM PDF)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="specifications" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Documentation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              AST3Rb Technical Specifications
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Official datasheet specifications extracted directly from Sensel Telematics hardware engineering publication (Doc: AST3Rb.pdf).
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {specs.map((sec, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{sec.category}</h3>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col py-1 border-b border-slate-100 last:border-0">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {item.label}
                      </dt>
                      <dd className="font-semibold text-slate-900 leading-relaxed">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Download Datasheet Callout Box */}
          <div className="mt-12 max-w-4xl mx-auto bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/30">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Looking for the complete engineering PDF datasheet?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Download the official Sensel ASSET-SMART AST3Rb product specifications sheet (PDF format).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={datasheetUrl}
                download="AST3Rb.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 h-11 px-5 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 cursor-pointer whitespace-nowrap"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={datasheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl text-sm font-semibold border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 h-11 px-4 transition-colors whitespace-nowrap"
              >
                <ExternalLink className="h-4 w-4" />
                View in Tab
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          APPLICATIONS & SOLUTION INTEGRATION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">End-To-End Workflows</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Where AST3Rb Excels
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 font-bold text-lg">
                  📦
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">High-Value Cargo &amp; Parcels</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discreetly fits inside electronic crates, export packages, luxury goods transit boxes, and pallet shipments with zero external wiring.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🚚
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Logistics &amp; Non-Powered Trailers</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Track drop-and-hook trailers, flatbeds, and containers across interstate corridors with 10+ months battery life and geofencing.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🔬
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Cold Chain &amp; Scientific Crates</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pair with BLE sensors to monitor vaccine boxes, pharmaceutical shippers, and diagnostic specimens with instant movement alerts.
                </p>
              </div>

            </div>

            {/* Link to Rechargeable Asset Tracker Solution */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Part of the Sensel Rechargeable Asset Tracker Solution Stack
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Discover how AST3Rb integrates with real-time telematics dashboards and mobile asset security.
                </p>
              </div>
              <Link
                href="/solutions/rechargeable-asset-tracker"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors shrink-0"
              >
                Explore Rechargeable Asset Tracker Solution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CONVERSION CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#070b14] text-white py-16 sm:py-20 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Enterprise Deployment Ready</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            Deploy AST3Rb Across Your Mobile Assets &amp; Logistics
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-8">
            Speak with Sensel&apos;s telematics engineers to request trial hardware, test BLE sensor integration, or configure custom reporting intervals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openDemoModal("AST3Rb Rechargeable Tracker")}
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-13 px-8 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
            >
              Request Trial / Demo
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={datasheetUrl}
              download="AST3Rb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-13 px-7 transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Technical Datasheet
            </a>

            <button
              type="button"
              onClick={() => openEnterpriseModal("AST3Rb Custom Integration")}
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-400 hover:text-white transition-colors px-4 py-2 cursor-pointer"
            >
              Talk to Engineering Team →
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-8">
            Ground Floor, IndiQube Omega, Maruti Emerald, Brookefield, ITPL Main Road, Bangalore – 560037
          </p>
        </div>
      </section>

    </div>
  );
}
