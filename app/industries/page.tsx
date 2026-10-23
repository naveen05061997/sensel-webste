"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronRight, 
  HardHat, 
  Pickaxe, 
  Snowflake, 
  ShieldAlert, 
  Package, 
  Truck, 
  Cpu, 
  Sun, 
  Zap, 
  CheckCircle2, 
  BatteryCharging, 
  Activity, 
  ShieldCheck, 
  Database, 
  Award, 
  Radio, 
  FileText, 
  Sliders, 
  Sparkles, 
  Phone, 
  Mail,
  ArrowUpRight,
  Gauge,
  Clock,
  Thermometer,
  Layers,
  AlertTriangle
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

/* ─────────────────────────────────────────────────────────────
   Industry Categories & Comprehensive Data
   ───────────────────────────────────────────────────────────── */
type IndustryCategory = "all" | "heavy" | "logistics" | "coldchain" | "hazardous" | "fleet";

interface IndustryItem {
  id: string;
  category: IndustryCategory;
  categoryLabel: string;
  title: string;
  slug: string;
  badge: string;
  headline: string;
  description: string;
  image: string;
  fallbackImage: string;
  stats: { value: string; label: string }[];
  capabilities: { icon: React.ElementType; title: string; desc: string }[];
  pairedHardware: {
    name: string;
    model: string;
    tagline: string;
    href: string;
    image: string;
    badge: string;
  };
  solutionHref: string;
}

const industriesData: IndustryItem[] = [
  {
    id: "construction",
    category: "heavy",
    categoryLabel: "Heavy Industry",
    title: "Construction & Infrastructure",
    slug: "construction",
    badge: "Heavy Machinery & Rentals",
    headline: "Automated engine runtime logs, theft prevention & precision rental billing.",
    description: "Heavy equipment on remote construction sites operates under extreme dust, vibration, and minimal digital oversight. Sensel combines vibration-based engine sensing with autonomous long-life trackers to accurately log real working hours, curb idling, eliminate billing disputes, and prevent unauthorized machinery movement.",
    image: "/solution/work-hour-meter.png",
    fallbackImage: "/solution/work-hour-meter.png",
    stats: [
      { value: "35%+", label: "Idle Time Reduction" },
      { value: "100%", label: "Rental Dispute Resolution" },
      { value: "15–25 Mo", label: "Autonomous Battery Run" },
    ],
    capabilities: [
      {
        icon: Activity,
        title: "Vibration Engine Detection",
        desc: "Accurately detects actual machine working hours without touching vehicle electrical wiring.",
      },
      {
        icon: ShieldCheck,
        title: "Anti-Theft Vibration Alert",
        desc: "Instant SMS & app alerts upon unauthorized movement, tampering, or off-hours operation.",
      },
      {
        icon: FileText,
        title: "Automated Rental Billing",
        desc: "Export certified machine utilization reports for daily/hourly equipment rental invoicing.",
      },
    ],
    pairedHardware: {
      name: "AST3Rc Work Hour Tracker",
      model: "AST3Rc",
      tagline: "5200 mAh Rechargeable • Vibration Engine Sensing",
      href: "/products/ast3rc",
      image: "/solution/AST3Rc.png",
      badge: "Asset-Smart™ Series",
    },
    solutionHref: "/solutions/work-hour-monitor",
  },
  {
    id: "mining",
    category: "heavy",
    categoryLabel: "Heavy Industry",
    title: "Mining & Quarrying (Cement & Minerals)",
    slug: "mining",
    badge: "Harsh & Dust-Heavy Ops",
    headline: "Turnaround time accountability, weighbridge sync & haul road logistics.",
    description: "In open-cast mines, limestone quarries, and cement plants, high-volume material transit requires rigorous accountability. Sensel provides rugged, IP67 dustproof and vibration-resistant telematics to track tippers, optimize cycle trips, integrate seamlessly with digital weighbridges, and eliminate unauthorized material dumping.",
    image: "/solution/cement-mining.jpg",
    fallbackImage: "/solution/cement-mining.jpg",
    stats: [
      { value: "28%", label: "Turnaround Time (TAT) Gain" },
      { value: "0 Loss", label: "Offline Buffering Memory" },
      { value: "IP67", label: "Submersible & Dust Sealed" },
    ],
    capabilities: [
      {
        icon: Clock,
        title: "Haul Cycle & TAT Analytics",
        desc: "Monitor loading, transit, dumping, and waiting cycles to streamline excavator-tipper queues.",
      },
      {
        icon: Database,
        title: "Weighbridge Automation",
        desc: "Sync truck payload readings directly with ERP and billing systems for zero manual errors.",
      },
      {
        icon: ShieldAlert,
        title: "Off-Route Dumping Alerts",
        desc: "Geofence boundary alerts to flag premature unloads or unauthorized route deviations.",
      },
    ],
    pairedHardware: {
      name: "AST3Rc & VTX 10 C Units",
      model: "AST3Rc / VTX 10 C",
      tagline: "Ultra-rugged telematics engineered for extreme quarry environments",
      href: "/products/ast3rc",
      image: "/solution/AST3Rc.png",
      badge: "Heavy Duty Hardware",
    },
    solutionHref: "/solutions/cement-mining",
  },
  {
    id: "cold-chain",
    category: "coldchain",
    categoryLabel: "Cold Chain & Pharma",
    title: "Cold Chain Logistics & Pharmaceuticals",
    slug: "cold-chain",
    badge: "Temperature Controlled",
    headline: "±0.5°C real-time thermal monitoring, excursion alerts & zero spoilage compliance.",
    description: "Transporting vaccines, biologics, dairy, and perishable food requires strict temperature continuity. Sensel’s IoT sensors deliver real-time multi-zone thermal logging, door open/close alerts, power failure detection, and automated compliance reports to ensure complete regulatory compliance from warehouse to dispensary.",
    image: "/solution/rechargeable-asset-tracker.jpg",
    fallbackImage: "/solution/rechargeable-asset-tracker.jpg",
    stats: [
      { value: "±0.5°C", label: "Sensor Thermal Accuracy" },
      { value: "0%", label: "Cargo Spoilage Audit" },
      { value: "10+ Mo", label: "Continuous Battery Life" },
    ],
    capabilities: [
      {
        icon: Thermometer,
        title: "Multi-Zone Thermal Probes",
        desc: "Simultaneous monitoring of frozen, chilled, and ambient compartments with live threshold alarms.",
      },
      {
        icon: Zap,
        title: "Reefer Power & Door Sensor",
        desc: "Instant alarms when reefer cooling units shut down or cargo doors remain open in transit.",
      },
      {
        icon: Award,
        title: "Regulatory Compliance Audit",
        desc: "Automated temperature trip sheets meeting CDSCO, FDA, and WHO cold chain protocols.",
      },
    ],
    pairedHardware: {
      name: "AST3Rb Ultra-Slim Tracker",
      model: "AST3Rb",
      tagline: "18mm Profile • 2000 mAh Rechargeable • BLE Probe Pair",
      href: "/products/ast3rb",
      image: "/solution/AST3Rb.png",
      badge: "Asset-Smart™ Series",
    },
    solutionHref: "/solutions/rechargeable-asset-tracker",
  },
  {
    id: "hazardous-cargo",
    category: "hazardous",
    categoryLabel: "Regulated Cargo",
    title: "Hazardous Cargo, Petroleum & Chemicals",
    slug: "hazardous-cargo",
    badge: "PESO & AIS-140 Compliant",
    headline: "Safe-to-load verification, driver fatigue alarms & emergency panic SOS response.",
    description: "Transporting flammable fuels, chemicals, and industrial gases demands zero room for error. Sensel’s Fleet Smart™ hardware and platform offer integrated journey risk management, automated Safe-to-Load (STL) digital checklists, driver behavior scoring, and cabin emergency SOS buttons to guarantee road safety and strict regulatory adherence.",
    image: "/solution/hazardous-cargo.jpg",
    fallbackImage: "/solution/hazardous-cargo.jpg",
    stats: [
      { value: "10-Sec", label: "Live Telemetry Interval" },
      { value: "100%", label: "AIS-140 Safety Standard" },
      { value: "6–30V", label: "Wide Input Voltage Support" },
    ],
    capabilities: [
      {
        icon: AlertTriangle,
        title: "Safe-to-Load (STL) Workflows",
        desc: "Digital terminal entry validation ensuring vehicle fitness before hazardous loading commences.",
      },
      {
        icon: ShieldAlert,
        title: "Cabin Panic SOS & Siren",
        desc: "Hardwired instant emergency triggers directly routing distress alerts to central command.",
      },
      {
        icon: Gauge,
        title: "Driver Behavior & Fatigue",
        desc: "Real-time harsh acceleration, harsh braking, and prolonged driving continuous monitoring.",
      },
    ],
    pairedHardware: {
      name: "VTX 10 C Telematics Unit",
      model: "VTX 10 C",
      tagline: "6–30V DC • Panic SOS • Fuel & Temp Probe Ports",
      href: "/products/vtx10c",
      image: "/solution/VTX10C.png",
      badge: "Fleet-Smart™ Hardware",
    },
    solutionHref: "/solutions/hazardous-cargo",
  },
  {
    id: "logistics",
    category: "logistics",
    categoryLabel: "Supply Chain & Freight",
    title: "Supply Chain, Rail Freight & Containers",
    slug: "logistics",
    badge: "Solar Powered & Intermodal",
    headline: "Continuous solar energy harvesting, 4G Dual eSIM & zero-maintenance asset visibility.",
    description: "Non-powered trailers, railway freight wagons, and shipping containers spend months crossing trade corridors without charging access. Sensel’s solar-powered IoT units harvest ambient light continuously, backed by rugged IP67 & IK08 impact ratings and multi-network roaming eSIMs for uninterrupted end-to-end visibility.",
    image: "/solution/solar-powered-asset-tracker.jpg",
    fallbackImage: "/solution/solar-powered-asset-tracker.jpg",
    stats: [
      { value: "Infinite", label: "Solar Operational Life" },
      { value: "90+ Days", label: "Dark Autonomous Reserve" },
      { value: "IK08", label: "Heavy Impact Resistance" },
    ],
    capabilities: [
      {
        icon: Sun,
        title: "Monocrystalline Solar Panel",
        desc: "High-efficiency low-ambient energy harvesting keeps the internal 7800 mAh battery perpetually charged.",
      },
      {
        icon: Radio,
        title: "4G LTE Cat 1 + Dual eSIM",
        desc: "Global multi-carrier fallback ensures connection across remote interstate railway corridors.",
      },
      {
        icon: ShieldCheck,
        title: "Tamper & Geofence Alerts",
        desc: "Light sensor and mechanical detachment detection instantly flags container unsealing.",
      },
    ],
    pairedHardware: {
      name: "AST4SLi Solar Asset Tracker",
      model: "AST4SLi",
      tagline: "Solar MPPT • IP67 Submersible • 4G Cat 1 • IK08",
      href: "/products/ast4sli",
      image: "/solution/AST4SLi.png",
      badge: "Asset-Smart™ Solar",
    },
    solutionHref: "/solutions/solar-powered-asset-tracker",
  },
  {
    id: "enterprise-fleet",
    category: "fleet",
    categoryLabel: "Commercial Fleet",
    title: "Enterprise Fleet & Commercial Transport",
    slug: "enterprise-fleet",
    badge: "Fleet Smart™ Cloud Platform",
    headline: "End-to-end fleet diagnostics, digital fuel monitoring & intelligent routing.",
    description: "Managing corporate vehicle fleets, staff buses, distribution trucks, and third-party logistics partners requires real-time intelligence. Sensel’s unified Fleet Smart™ platform centralizes live vehicle health, digital fuel level tracking with siphoning alerts, preventative maintenance scheduling, and driver performance dashboards.",
    image: "/solution/hazardous-cargo.jpg", // Graceful existing image with device showcase
    fallbackImage: "/solution/hazardous-cargo.jpg",
    stats: [
      { value: "22%+", label: "Average Fuel Savings" },
      { value: "50,000+", label: "Connected Vehicles" },
      { value: "99.8%", label: "Cloud Platform SLA" },
    ],
    capabilities: [
      {
        icon: Gauge,
        title: "Digital Fuel Siphon Alerts",
        desc: "Continuous fuel tank sensor integration detects sudden fuel drops, leaks, and pilferage in real time.",
      },
      {
        icon: Sliders,
        title: "Intelligent Route Optimization",
        desc: "Live route replays, traffic-aware dispatch, and unauthorized stoppage monitoring.",
      },
      {
        icon: Layers,
        title: "Open Enterprise REST APIs",
        desc: "Seamless two-way integration with SAP, Oracle, Microsoft Dynamics, and custom ERP systems.",
      },
    ],
    pairedHardware: {
      name: "VTX 10 C Telematics & Sensors",
      model: "VTX 10 C",
      tagline: "High-precision GPS L1 • Multi-sensor interface • 128MB Memory",
      href: "/products/vtx10c",
      image: "/solution/VTX10C.png",
      badge: "Fleet-Smart™ Hardware",
    },
    solutionHref: "/products/vtx10c",
  },
];

/* ─────────────────────────────────────────────────────────────
   Architectural Pillars Data
   ───────────────────────────────────────────────────────────── */
const architecturePillars = [
  {
    icon: ShieldCheck,
    title: "Engineered for Extreme Environments",
    desc: "Industrial IP67 waterproof, dust-sealed, and IK08 impact-rated housings survive harsh quarry dust, high-pressure washdowns, and continuous machinery vibration.",
    tag: "Hardware Reliability",
  },
  {
    icon: Database,
    title: "Zero-Data-Loss Offline Memory",
    desc: "Internal non-volatile flash memory buffers tens of thousands of GPS tracking coordinates and sensor telemetry during deep wilderness cellular blackouts.",
    tag: "Buffer Assurance",
  },
  {
    icon: Award,
    title: "Certified Safety & Regulatory Compliance",
    desc: "100% compliant with AIS-140 public transit norms, CE regulatory standards, RoHS environmental guidelines, and PESO hazardous goods protocols.",
    tag: "National & Global Standards",
  },
  {
    icon: Cpu,
    title: "100% In-House R&D & Manufacturing",
    desc: "Designed, engineered, and manufactured in India by Sensel Telematics, delivering complete firmware security, rapid customization, and nationwide field support.",
    tag: "Make In India",
  },
];

export default function IndustriesPage() {
  const [activeCategory, setActiveCategory] = useState<IndustryCategory>("all");
  const { openDemoModal } = useDemoModal();

  const filteredIndustries = activeCategory === "all"
    ? industriesData
    : industriesData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-primary/20 selection:text-primary">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH - BALANCED SPACIOUS FIT)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20 sm:pt-22 lg:pt-24 pb-6 sm:pb-8 border-b border-slate-800">
        
        {/* Subtle grid pattern & glowing mesh */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Integrated Breadcrumbs Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pb-2 mb-3 sm:mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-primary font-semibold">Industries</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                6 Mission-Critical Sectors
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-3.5">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary tracking-wide uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Full-Stack Industrial IoT &amp; Telematics</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.15]">
              Intelligent IoT Solutions Engineered for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Mission-Critical Industries
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              From remote limestone quarries and cold-chain pharma distribution to hazardous fuel carriers and intermodal rail freight—Sensel delivers rugged, certified IoT hardware and cloud software built for India’s toughest environments.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:pt-1.5">
              <a
                href="#industry-showcase"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary/90 h-9 sm:h-10 px-5 sm:px-6 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Industries</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={() => openDemoModal("Industry Telematics Solutions")}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-9 sm:h-10 px-5 sm:px-6 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Demo</span>
              </button>
            </div>

            {/* Proof Points Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 sm:pt-4 max-w-4xl mx-auto">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-colors">
                <p className="text-xl sm:text-2xl font-black text-white">50,000+</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5">Active Connected Units</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Across India &amp; Global Trade</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-colors">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">99.8%</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5">Platform Uptime SLA</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">High-Availability Cloud</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-colors">
                <p className="text-xl sm:text-2xl font-black text-amber-300">AIS-140</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5">&amp; CE Certified HW</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Statutory Standard Compliance</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-colors">
                <p className="text-xl sm:text-2xl font-black text-sky-400">Zero Loss</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5">Offline Flash Buffer</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Non-Volatile Memory Sync</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTERACTIVE CATEGORY FILTER BAR
          ═══════════════════════════════════════════════════════════════ */}
      <section id="industry-showcase" className="sticky top-20 z-30 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800 py-3.5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar justify-start lg:justify-center py-1">
            
            {[
              { id: "all", label: "All Industries (6)" },
              { id: "heavy", label: "Heavy Industry & Mining" },
              { id: "coldchain", label: "Cold Chain & Pharma" },
              { id: "hazardous", label: "Hazardous & Chemicals" },
              { id: "logistics", label: "Logistics & Rail Freight" },
              { id: "fleet", label: "Commercial Fleet" },
            ].map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as IndustryCategory)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INDUSTRY SHOWCASE CARDS (RICH BENTO ARCHITECTURE)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#090d16]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 gap-10 lg:gap-14">
            {filteredIndustries.map((ind, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={ind.id}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300"
                >
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-primary/20 transition-all duration-500" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Visual Media Showcase Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-[16/10] shadow-xl group/img">
                        
                        {/* Background Industry Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                          style={{ backgroundImage: `url('${ind.image}')` }}
                          aria-label={ind.title}
                        />

                        {/* Dark Gradient Overlay for optimal legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                            {ind.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white">
                            {ind.categoryLabel}
                          </span>
                        </div>

                        {/* Bottom Stats Overlay inside image */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-3 gap-2">
                          {ind.stats.map((st, i) => (
                            <div key={i} className="p-2 sm:p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center">
                              <p className="text-xs sm:text-sm font-black text-white">{st.value}</p>
                              <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium truncate">{st.label}</p>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Content & Capabilities Column */}
                    <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      
                      {/* Title & Tagline */}
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest mb-1.5">
                          <span>{ind.categoryLabel}</span>
                          <span>•</span>
                          <span>{ind.badge}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                          {ind.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 leading-snug">
                          {ind.headline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {ind.description}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="space-y-2.5 pt-1">
                        {ind.capabilities.map((cap, i) => {
                          const Icon = cap.icon;
                          return (
                            <div key={i} className="flex items-start gap-3 rounded-xl p-2.5 bg-white/5 border border-white/8 hover:bg-white/8 transition-colors">
                              <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-lg bg-primary/20 text-primary mt-0.5">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">{cap.title}</h4>
                                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">{cap.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Connected Hardware & CTAs */}
                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                        
                        {/* Paired Product Pill */}
                        <Link
                          href={ind.pairedHardware.href}
                          className="group/hw inline-flex items-center gap-2.5 rounded-xl bg-white/6 hover:bg-white/10 border border-white/10 px-3 py-2 transition-all"
                        >
                          <div className="h-7 w-7 shrink-0 relative bg-white/10 rounded-lg overflow-hidden flex items-center justify-center p-1">
                            <Image
                              src={ind.pairedHardware.image}
                              alt={ind.pairedHardware.name}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{ind.pairedHardware.badge}</span>
                            </div>
                            <p className="text-xs font-bold text-white group-hover/hw:text-primary transition-colors flex items-center gap-1">
                              <span>{ind.pairedHardware.name}</span>
                              <ArrowUpRight className="h-3 w-3 opacity-60" />
                            </p>
                          </div>
                        </Link>

                        {/* Action Link to Solution or Dynamic Detail */}
                        <div className="flex items-center gap-2">
                          <Link
                            href={ind.solutionHref}
                            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold bg-primary text-white hover:bg-primary/90 h-9 px-4 rounded-lg transition-all shadow-md shadow-primary/20 cursor-pointer"
                          >
                            <span>Explore Solution</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>

                          <Link
                            href={`/industries/${ind.slug}`}
                            className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 h-9 px-3 rounded-lg transition-colors"
                          >
                            <span>Use Cases</span>
                          </Link>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY LEADING ENTERPRISES CHOOSE SENSEL (CROSS-INDUSTRY PILLARS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#070b14] border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Cross-Industry Reliability</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Leading Enterprises Depend on Sensel
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Consumer GPS devices break down in harsh industrial reality. We engineer full-stack IoT systems designed to withstand dust, vibration, high temperatures, and network blackouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturePillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {pil.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2.5 leading-snug">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INDUSTRY CAPABILITY MAPPING MATRIX
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#090d16] border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Quick Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Industry Hardware &amp; Compliance Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Identify the right telematics hardware, sensor interfaces, and compliance certifications for your operational environment.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-slate-300">
                  <th className="p-4 font-bold">Industry Sector</th>
                  <th className="p-4 font-bold">Primary Challenge</th>
                  <th className="p-4 font-bold">Recommended Hardware</th>
                  <th className="p-4 font-bold">Key Sensor Integrations</th>
                  <th className="p-4 font-bold">Standard Certifications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8 text-slate-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Construction &amp; Infrastructure</td>
                  <td className="p-4">Engine runtime &amp; equipment rental tracking</td>
                  <td className="p-4">
                    <Link href="/products/ast3rc" className="text-primary font-bold hover:underline">AST3Rc (5200 mAh)</Link>
                  </td>
                  <td className="p-4">3-Axis Vibration Sensor, Geofence</td>
                  <td className="p-4">CE, RoHS, IP67 Sealed</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Mining, Cement &amp; Quarries</td>
                  <td className="p-4">Turnaround time &amp; weighbridge payload sync</td>
                  <td className="p-4">
                    <Link href="/products/ast3rc" className="text-primary font-bold hover:underline">AST3Rc</Link> / <Link href="/products/vtx10c" className="text-primary font-bold hover:underline">VTX 10 C</Link>
                  </td>
                  <td className="p-4">Weighbridge API, Haul Cycle Alarms</td>
                  <td className="p-4">Heavy Dust &amp; Vibration Proof</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Cold Chain &amp; Pharmaceuticals</td>
                  <td className="p-4">Thermal excursion &amp; vaccine integrity</td>
                  <td className="p-4">
                    <Link href="/products/ast3rb" className="text-primary font-bold hover:underline">AST3Rb (2000 mAh)</Link>
                  </td>
                  <td className="p-4">±0.5°C Probes, Door Open Sensors</td>
                  <td className="p-4">CDSCO &amp; FDA Audit Trail</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Hazardous Goods &amp; Tankers</td>
                  <td className="p-4">Emergency SOS, safe loading &amp; driver fatigue</td>
                  <td className="p-4">
                    <Link href="/products/vtx10c" className="text-primary font-bold hover:underline">VTX 10 C Telematics</Link>
                  </td>
                  <td className="p-4">Panic Switch, Fuel, Temp, A/C</td>
                  <td className="p-4">AIS-140 &amp; PESO Aligned</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Logistics &amp; Rail Freight</td>
                  <td className="p-4">Unpowered assets across long transit cycles</td>
                  <td className="p-4">
                    <Link href="/products/ast4sli" className="text-amber-400 font-bold hover:underline">AST4SLi Solar 4G</Link>
                  </td>
                  <td className="p-4">Solar MPPT, Tamper Light Sensor</td>
                  <td className="p-4">IP67 Waterproof &amp; IK08 Impact</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Enterprise Commercial Fleet</td>
                  <td className="p-4">Fuel theft, live dispatch &amp; vehicle health</td>
                  <td className="p-4">
                    <Link href="/products/vtx10c" className="text-primary font-bold hover:underline">VTX 10 C + Fleet Smart</Link>
                  </td>
                  <td className="p-4">Fuel Siphon Sensor, Ignition, SOS</td>
                  <td className="p-4">Automotive Grade CE Certified</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE CTA BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#070b14] border-t border-slate-800 relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-2xl relative">
            
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Custom Engineering &amp; Fast Pilot Deployments
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Telematics for Your Industry?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">
              Our telematics solutions engineers will assess your exact fleet workflow, asset mounting environment, and regulatory standards to recommend the optimal hardware and software setup.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("Industries Overview Consultation")}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 h-12 px-8 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 px-8 transition-all hover:-translate-y-0.5"
              >
                <span>Speak with an Engineer</span>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>sales@sensel.in</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>+91 80 4166 3390</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>Frost &amp; Sullivan Award Winner</span>
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
