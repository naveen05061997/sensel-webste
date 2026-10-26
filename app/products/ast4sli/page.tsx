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
  Sun,
  Shield,
  Truck,
  Activity
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { useEnterpriseModal } from "@/context/EnterpriseModalContext";

export default function Ast4sliProductPage() {
  const { openDemoModal } = useDemoModal();
  const { openEnterpriseModal } = useEnterpriseModal();

  const datasheetUrl = "/solution/AST4SLi.pdf";

  // 6 Core Pillars from User Screenshot 1
  const corePillars = [
    {
      icon: Sun,
      title: "Solar Powered, Always-On",
      points: [
        "High-efficiency solar panels provide continuous power, even in low-light environments.",
        "In-built rechargeable battery ensures 24/7 uninterrupted uptime."
      ],
      tag: "Solar Harvesting",
      color: "amber"
    },
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      points: [
        "Monitor live location and movement status of non-powered assets from anywhere.",
        "Integrated with Sensel's SmartFleet platform for intelligent enterprise visibility."
      ],
      tag: "2.5m Accuracy",
      color: "sky"
    },
    {
      icon: Truck,
      title: "Ideal for Non-Powered Assets",
      points: [
        "Specially designed for rail wagons, shipping containers, trailers, tankers, and more.",
        "Zero dependency on external vehicle power systems or complex cabling."
      ],
      tag: "Zero Wiring",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Rugged & Weatherproof",
      points: [
        "Built to withstand tough weather conditions (IP67-rated enclosure & IK08 impact resistance).",
        "UV-resistant housing ensures decade-long longevity in extreme outdoor environments."
      ],
      tag: "IP67 & IK08",
      color: "blue"
    },
    {
      icon: Activity,
      title: "Smart Data Reporting",
      points: [
        "Customizable reporting intervals dynamically tuned to save battery power.",
        "Instant motion, tamper, vibration, and geofence entry/exit alerts."
      ],
      tag: "Telemetry Alerts",
      color: "purple"
    },
    {
      icon: BatteryCharging,
      title: "Extended Battery Life",
      points: [
        "Up to 90+ days of continuous autonomous backup without any sunlight exposure.",
        "Intelligent power management algorithms for maximum energy efficiency."
      ],
      tag: "90+ Days Backup",
      color: "emerald"
    }
  ];

  // Hardware capabilities from Screenshot 2 & PDF
  const hardwareFeatures = [
    {
      icon: Sun,
      title: "Advanced Solar Harvesting",
      desc: "Industrial-grade monocrystalline solar cells engineered to capture photons even under overcast skies, rain, and low ambient indoor lighting.",
      tag: "Low-Light Capable"
    },
    {
      icon: Radio,
      title: "4G LTE Cat 1 & Dual eSIM",
      desc: "Multi-band 4G LTE Cat 1 with 2G fallback, optional Dual M2M eSIM for automatic carrier failover across remote logistics corridors.",
      tag: "Dual M2M eSIM"
    },
    {
      icon: ShieldCheck,
      title: "Advanced Tamper Detection",
      desc: "Hardware optical and magnetic tamper sensors immediately trigger high-priority alerts upon unauthorized device removal from the asset.",
      tag: "Anti-Removal"
    },
    {
      icon: Zap,
      title: "Ultra-Low Power Consumption",
      desc: "Proprietary deep-sleep microarchitecture draws microamps while stationary, waking instantly upon motion or periodic scheduled heartbeats.",
      tag: "Adaptive Sleep"
    },
    {
      icon: Radio,
      title: "BLE 5.0 Integration",
      desc: "Bluetooth 5.0 compliant with internal antenna, enabling seamless pairing with wireless temperature, humidity, door, and cargo sensors.",
      tag: "BLE 5.0 Sensors"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Enabled (Optional)",
      desc: "Optional Wi-Fi radio supports high-throughput batch telemetry offloading when assets enter distribution depots and railway yards.",
      tag: "Depot Offload"
    },
    {
      icon: Sliders,
      title: "3-Axis Vibration Theft Detection",
      desc: "Internal 3-axis accelerometer allows programmable vibration thresholds to distinguish between normal asset vibration and unauthorized handling.",
      tag: "Vibration Sensing"
    },
    {
      icon: Database,
      title: "Large Internal Data Buffer",
      desc: "Onboard flash memory buffers thousands of tracking events during deep wilderness network blackouts, transmitting automatically once in range.",
      tag: "Zero Data Loss"
    },
    {
      icon: Thermometer,
      title: "Internal Temperature & Cutoff",
      desc: "Monitors internal operating temperature from -20°C to +85°C with automatic solar charge cutoff at +70°C for battery safety.",
      tag: "-20°C to +85°C"
    }
  ];

  // Complete specs faithfully extracted from PDF & Screenshots
  const specs = [
    {
      category: "GPS & GNSS Positioning",
      items: [
        { label: "Frequency", value: "GPS L1 (1575.42 MHz)" },
        { label: "Horizontal Position Accuracy", value: "2.5 m CEP" },
        { label: "Velocity Accuracy", value: "0.1 m/sec" },
        { label: "Time To First Fix (TTFF)", value: "1 sec Hot Start • 30 sec Cold Start" },
        { label: "Acquisition Sensitivity", value: "-145 dBm (GPS)" },
        { label: "Tracking Sensitivity", value: "-160 dBm (GPS)" },
        { label: "Update Rate", value: "1 Hz or better (Configurable)" },
        { label: "Fallback Positioning", value: "GSM cellular triangulation mode when GPS satellite signal is obscured" }
      ]
    },
    {
      category: "Solar & Battery Power",
      items: [
        { label: "Primary Power Source", value: "Integrated high-efficiency solar panel with low-ambient light harvesting" },
        { label: "Internal Backup Battery", value: "3.7V 6000 mAh (Optional up to 7800 mAh) Long-Life Lithium-Ion rechargeable" },
        { label: "Dark Autonomous Backup", value: "Up to 90+ days without any sunlight exposure" },
        { label: "Operating Lifespan", value: "Indefinite / Maintenance-free under normal outdoor exposure" },
        { label: "Solar Charger Circuit", value: "Integrated MPPT solar charging controller" },
        { label: "Thermal Safety Protection", value: "Automatic charging cutoff above +70°C" }
      ]
    },
    {
      category: "Cellular & Wireless Connectivity",
      items: [
        { label: "Cellular Technology", value: "4G LTE Cat 1 with automatic Fallback to 2G" },
        { label: "LTE Frequency Bands", value: "LTE-FDD: B1 / B3 / B5 / B8 • LTE-TDD: B40 / B41" },
        { label: "GSM / GPRS / EDGE", value: "900 / 1800 MHz" },
        { label: "SIM Interface", value: "Dual M2M eSIM (Optional dual-network roaming)" },
        { label: "Communication Protocols", value: "TCP, FTP, HTTP, MQTT, MQTTS, SMS" },
        { label: "Bluetooth", value: "Bluetooth 5.0 compliant with internal antenna" },
        { label: "Wi-Fi (Optional)", value: "802.11 b/g/n for depot yard sync" }
      ]
    },
    {
      category: "Physical & Mechanical",
      items: [
        { label: "Dimensions", value: "197 mm × 83 mm × 28 mm" },
        { label: "Weight", value: "500 gms" },
        { label: "Ingress Protection", value: "IP67 (Waterproof & Dustproof submersible rating)" },
        { label: "Impact Resistance", value: "IK08 (Vandal & heavy impact proof)" },
        { label: "Housing Material", value: "High-grade UV-resistant industrial polycarbonate" },
        { label: "Mounting Options", value: "Heavy-duty bolt mount / Magnetic bracket / Weldable bracket" }
      ]
    },
    {
      category: "Environmental & Certifications",
      items: [
        { label: "Operating Temperature", value: "-20°C to +85°C" },
        { label: "Thermal Cut-Off", value: "Auto solar charge cut-off at +70°C" },
        { label: "Regulatory Compliance", value: "CE Certified • RoHS Compliant" },
        { label: "Firmware Upgrades", value: "OTA (Over-The-Air) firmware & parameter configuration" },
        { label: "Cloud Software Suite", value: "Sensel Fleet-Smart & Asset-Smart web & mobile apps" },
        { label: "Manufacturing Origin", value: "Designed & Manufactured in India by Sensel Telematics" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500/20 selection:text-amber-600">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH - COMPACT FULL-SCREEN FIT)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800">
        
        {/* Subtle grid pattern & glowing amber/cyan mesh */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Integrated Breadcrumbs Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pb-1.5 mb-2.5 sm:mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-semibold">AST4SLi</span>
            </div>

            <div className="flex items-center gap-2">
              <Link 
                href="/solutions/solar-powered-asset-tracker"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Solar Powered Asset Tracker Solution</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Product Information & CTAs */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 lg:space-y-4 max-w-3xl">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-amber-300 tracking-wide uppercase">
                  <Sun className="h-3 w-3 text-amber-400" />
                  Asset-Smart™ Solar Series
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
                  <ShieldCheck className="h-3 w-3" />
                  IP67 • 4G Cat 1 • IK08
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-sky-300">
                  <Award className="h-3 w-3 text-sky-400" />
                  Frost &amp; Sullivan Award Winner
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  AST4SLi <span className="text-amber-400 font-medium text-lg sm:text-xl lg:text-2xl block sm:inline sm:ml-2">(Solar 4G LTE)</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 leading-normal">
                  ASSET-SMART AST4SLi — 4G (Dual eSIM) Solar-Powered GPS Tracking Solution for Non-Powered Equipment
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
                Sensel&apos;s <strong>AST4SLi</strong> is an industrial-grade, maintenance-free IoT tracker powered entirely by high-efficiency solar energy. Built for rail wagons, shipping containers, trailers, and heavy plant equipment, it integrates <strong>4G LTE Cat 1 connectivity with optional Dual M2M eSIM</strong>, rugged <strong>IP67 &amp; IK08 impact protection</strong>, BLE 5.0, and an internal <strong>6000 mAh (up to 7800 mAh)</strong> battery delivering <strong>90+ days of backup without sunlight</strong>.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 max-w-3xl">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Sun className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Solar Harvesting (Continuous)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Radio className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">4G Cat 1 + Dual eSIM</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <BatteryCharging className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">6000–7800 mAh (90+ Days)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Shield className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">IP67 Rated &amp; IK08 Impact</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Radio className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">BLE 5.0 &amp; Optional Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Advanced Tamper Alert</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1.5 sm:pt-2">
                {/* Official Datasheet Download */}
                <a
                  href={datasheetUrl}
                  download="AST4SLi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 h-9 sm:h-10 px-4 sm:px-5 transition-all shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-slate-950" />
                  Download Datasheet (PDF)
                </a>

                {/* Request Demo / Quote */}
                <button
                  type="button"
                  onClick={() => openDemoModal("AST4SLi Solar Tracker")}
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
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 via-emerald-500/20 to-sky-600/30 rounded-2xl blur-xl opacity-75 -z-10" />

                {/* Glassmorphic Card Frame */}
                <div className="relative rounded-2xl p-3.5 sm:p-4 bg-gradient-to-b from-white/10 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60 space-y-2.5 sm:space-y-3">
                  
                  {/* Top pill & status */}
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-white/10">
                    <span className="font-mono text-amber-300 uppercase tracking-wider font-semibold">Model: AST4SLi</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Solar Always-On
                    </span>
                  </div>

                  {/* Device Image Container */}
                  <div className="relative bg-gradient-to-b from-slate-900/90 via-[#0a1120] to-[#070b14] border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-inner flex items-center justify-center min-h-[130px] sm:min-h-[145px] lg:min-h-[155px] overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
                    <div className="relative w-full max-w-[160px] sm:max-w-[180px] aspect-[3/4]">
                      <Image
                        src="/solution/AST4SLi.png"
                        alt="Sensel ASSET-SMART AST4SLi Solar Powered Hardware Tracker"
                        fill
                        priority
                        className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 190px, 220px"
                      />
                    </div>

                    {/* Badge on Image */}
                    <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                      197 × 83 × 28 mm • 500 g
                    </div>
                  </div>

                  {/* Telemetry Quick Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Energy Harvester</p>
                      <p className="text-amber-300 font-bold text-xs sm:text-sm">Monocrystalline Solar</p>
                      <p className="text-emerald-400 text-[10px] mt-0.5 leading-none">Continuous Day Power</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Dark Reserve</p>
                      <p className="text-white font-bold text-xs sm:text-sm">6000–7800 mAh</p>
                      <p className="text-slate-300 text-[10px] mt-0.5 leading-none">90+ Days without sun</p>
                    </div>
                  </div>

                  {/* PDF Datasheet Card Link */}
                  <div className="pt-0.5">
                    <a
                      href={datasheetUrl}
                      download="AST4SLi.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                            AST4SLi.pdf
                          </p>
                          <p className="text-[10px] text-slate-400 leading-tight">Official Technical Datasheet • PDF</p>
                        </div>
                      </div>
                      <Download className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-400 group-hover:translate-y-0.5 transition-all shrink-0 ml-2" />
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
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">Always-On</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Solar Energy Powered</p>
              <p className="text-[11px] text-slate-400 mt-0.5">High-efficiency low-light harvesting</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">90+ Days</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Dark Battery Backup</p>
              <p className="text-[11px] text-slate-400 mt-0.5">6000mAh (Up to 7800mAh)</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">4G LTE Cat 1</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Cellular + Dual eSIM</p>
              <p className="text-[11px] text-slate-400 mt-0.5">2G Fallback, TCP, MQTT, MQTTS</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-200 mb-1">IP67 &amp; IK08</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Rugged &amp; Weatherproof</p>
              <p className="text-[11px] text-slate-400 mt-0.5">-20°C to +85°C outdoor rating</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CORE PILLARS SECTION (FROM USER SCREENSHOT 1)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Enterprise Asset Visibility</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              Built for Infinite Uptime on Remote Non-Powered Assets
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Engineered to eliminate battery replacement cycles while providing continuous, real-time tracking across national rail, maritime container, and heavy fleet corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-amber-400/50 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300/40 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide text-slate-500 bg-slate-100 rounded-md px-2.5 py-1">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-600">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-amber-600" />
                    Verified Specification
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CORE CAPABILITIES & SYSTEM ARCHITECTURE (FROM SCREENSHOT 2 & PDF)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Advanced Hardware Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              Comprehensive AST4SLi Technology Architecture
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every component in the AST4SLi is specified to perform without human intervention in corrosive, remote, and vibration-intensive environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hardwareFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide text-slate-500 bg-white rounded-md px-2.5 py-1 border border-slate-200">
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

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-primary" />
                    Field Proven in Harsh Environments
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
                <Smartphone className="h-4 w-4 text-amber-400" /> Web &amp; Mobile App Support
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                🇮🇳 Made in India
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS ACCORDION / GRID (EXACT SPECS FROM PDF & SCREENSHOTS)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="specifications" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Documentation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              AST4SLi Technical Specifications
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Official datasheet specifications extracted directly from Sensel Telematics hardware engineering publication (Doc: AST4SLi.pdf).
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {specs.map((sec, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
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
          <div className="mt-12 max-w-4xl mx-auto bg-amber-500/10 rounded-2xl p-6 sm:p-8 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Looking for the complete engineering PDF datasheet?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Download the official Sensel ASSET-SMART AST4SLi product specifications sheet (PDF format).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={datasheetUrl}
                download="AST4SLi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 h-11 px-5 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 cursor-pointer whitespace-nowrap"
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
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Mission-Critical Deployments</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Where AST4SLi Excels
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🚆
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Rail Wagons &amp; Freight Cars</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bolt onto open wagons, flat cars, and coal rakes for years of continuous visibility without ever taking them into the maintenance shed for battery swaps.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🚢
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Shipping Containers &amp; Flats</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Track dry vans, reefers, and flat-racks across port yards, intermodal trains, and container terminals with IP67 maritime sealing and IK08 impact strength.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🛢️
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Trailers &amp; Liquid Tankers</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Monitor drop-and-hook logistics trailers and chemical tankers with instant geofence arrival notifications and tamper-triggered theft alerts.
                </p>
              </div>

            </div>

            {/* Link to Solar Powered Asset Tracker Solution */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Part of the Sensel Solar-Powered Asset Tracker Solution Stack
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Learn more about real-time fleet analytics, dispatch dashboards, and trailer utilization metrics.
                </p>
              </div>
              <Link
                href="/solutions/solar-powered-asset-tracker"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors shrink-0"
              >
                Explore Solar Powered Solution
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Enterprise Ready</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            Deploy AST4SLi Across Your Containers &amp; Wagons
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-8">
            Speak with Sensel&apos;s telematics engineers to request trial hardware, test mounting fixtures, or discuss custom Dual eSIM data plans.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openDemoModal("AST4SLi Solar Tracker")}
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 h-13 px-8 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 cursor-pointer"
            >
              Request Trial / Demo
              <ArrowRight className="h-4 w-4 text-slate-950" />
            </button>

            <a
              href={datasheetUrl}
              download="AST4SLi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-13 px-7 transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Technical Datasheet
            </a>

            <button
              type="button"
              onClick={() => openEnterpriseModal("AST4SLi Custom Integration")}
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
