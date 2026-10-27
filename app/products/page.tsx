import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  Download, 
  FileText, 
  ChevronRight, 
  ShieldCheck, 
  Sun, 
  BatteryCharging, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Radio, 
  MapPin, 
  Sparkles, 
  Gauge, 
  Clock, 
  ArrowUpRight,
  Database,
  Award,
  Maximize2
} from "lucide-react";

export const metadata = {
  title: "Enterprise IoT Products & Platforms | Sensel Telematics",
  description: "Browse Sensel's rugged IoT hardware trackers (AST3Rc, AST3Rb, AST4SLi, VTX 10 C) and intelligent cloud software platforms (Fleet Smart, Asset Smart).",
};

const hardwareProducts = [
  {
    title: "AST3Rc Work Hour Monitor",
    model: "AST3Rc",
    slug: "ast3rc",
    tagline: "5200 mAh Long-Life Vibration Tracker",
    category: "Machinery & Equipment",
    badge: "Asset-Smart™ Series",
    image: "/solution/AST3Rc.png",
    dimensions: "80 × 60 × 35 mm • 175 g",
    description: "Ultra-low power, wire-free IoT tracker with 3-axis vibration-based engine detection and 5200 mAh rechargeable battery for 15–25 months of autonomous runtime.",
    datasheetUrl: "/solution/AST3R-ac_Product-Specs.pdf",
    highlights: [
      { icon: BatteryCharging, text: "5200 mAh (15–25 Mo. Run)" },
      { icon: Activity, text: "Vibration Engine Detection" },
      { icon: MapPin, text: "GPS L1 <2.5m CEP Accuracy" },
      { icon: ShieldCheck, text: "Wire-Free Rugged Housing" }
    ],
    primarySpec: "15–25 Mo. Battery"
  },
  {
    title: "AST3Rb Asset Tracker",
    model: "AST3Rb",
    slug: "ast3rb",
    tagline: "18mm Ultra-Slim Rechargeable Tracker",
    category: "Mobile Logistics & Cargo",
    badge: "Asset-Smart™ Series",
    image: "/solution/AST3Rb.png",
    dimensions: "78 × 60 × 18 mm • 100 g",
    description: "Compact 18mm ultra-slim GPS tracker with 2000 mAh rechargeable battery delivering 10+ months runtime, geofence motion alerts, and zero-wire deployment.",
    datasheetUrl: "/solution/AST3Rb.pdf",
    highlights: [
      { icon: BatteryCharging, text: "2000 mAh (10+ Months Life)" },
      { icon: Maximize2, text: "18mm Slim Profile (100g)" },
      { icon: ShieldCheck, text: "Anti-Theft Vibration Alert" },
      { icon: Database, text: "Offline Flash Data Buffering" }
    ],
    primarySpec: "10+ Months Runtime"
  },
  {
    title: "AST4SLi Solar Tracker",
    model: "AST4SLi",
    slug: "ast4sli",
    tagline: "Maintenance-Free 4G Solar Unit",
    category: "Rail Wagons & Containers",
    badge: "Asset-Smart™ Solar",
    image: "/solution/AST4SLi.png",
    dimensions: "197 × 83 × 28 mm • 500 g",
    description: "Industrial maintenance-free IoT tracker powered by solar energy for rail wagons, containers, and flatbeds. Integrates 4G LTE Cat 1, Dual eSIM, and IP67 & IK08 protection.",
    datasheetUrl: "/solution/AST4SLi.pdf",
    highlights: [
      { icon: Sun, text: "Monocrystalline Solar Panel" },
      { icon: Radio, text: "4G LTE Cat 1 + Dual eSIM" },
      { icon: ShieldCheck, text: "IP67 Submersible & IK08" },
      { icon: BatteryCharging, text: "90+ Days Dark Reserve" }
    ],
    primarySpec: "Solar Maintenance-Free"
  },
  {
    title: "VTX 10 C Telematics Unit",
    model: "VTX 10 C",
    slug: "vtx10c",
    tagline: "6–30V Multi-Sensor Telematics",
    category: "Commercial & Hazardous Cargo",
    badge: "Fleet-Smart™ Hardware",
    image: "/solution/VTX10c.png",
    dimensions: "85 × 50 × 15 mm • 80 g",
    description: "High-precision commercial vehicle telematics unit for hazardous goods carriers and fleets. Features Panic SOS, Fuel, Temperature, Humidity & A/C sensor interfaces.",
    datasheetUrl: "/solution/VTX10c.pdf",
    highlights: [
      { icon: Zap, text: "6–30V DC Wide Voltage Range" },
      { icon: Activity, text: "Panic / SOS Emergency Button" },
      { icon: Gauge, text: "Fuel, Temp & Humidity Probes" },
      { icon: Clock, text: "10s High-Frequency Live Ping" }
    ],
    primarySpec: "Multi-Sensor Telematics"
  },
];

const softwareProducts = [
  {
    title: "Fleet Smart™",
    slug: "fleet-smart",
    badge: "Enterprise Fleet Telematics",
    tagline: "Real-Time Fleet Intelligence & Regulatory Compliance",
    description: "Comprehensive web and mobile telematics platform engineered for commercial vehicle fleets, hazardous goods carriers, and logistics operations. Gain real-time location visibility, monitor fuel usage, enforce driver safety compliance, and receive instant emergency alerts.",
    capabilities: [
      "10-Second High-Frequency Live GPS Tracking",
      "Panic / SOS Emergency Dispatch & Route Geofencing",
      "Analog & Digital Fuel Sensor Analytics & Theft Alerts",
      "Automated Distance, Idling & Halts Reporting",
      "Driver Safety Scoring (Harsh Braking & Cornering)",
      "90+ Days Historical Route Playback & Cloud Export"
    ],
    accentGradient: "from-blue-600/10 via-primary/5 to-transparent",
    badgeStyle: "border-primary/30 bg-primary/10 text-primary"
  },
  {
    title: "Asset Smart™",
    slug: "asset-smart",
    badge: "Remote Equipment Management",
    tagline: "Autonomous Non-Powered & Solar Asset Tracking",
    description: "Unified cloud management platform purpose-built for wire-free battery-operated and solar-powered tracking devices. Remotely track operating hours for construction machinery, monitor logistics containers across trade corridors, and safeguard non-powered high-value assets.",
    capabilities: [
      "Vibration-Based Engine Runtime & Utilization Logs",
      "Polygonal Geofence In/Out Entry & Exit Alerts",
      "Solar Charging Status & Autonomous Battery Telemetry",
      "Anti-Theft Vibration & Device Detachment Alerts",
      "Automated Billing Sheets for Rented Equipment",
      "Over-The-Air (OTA) Configuration & Firmware Updates"
    ],
    accentGradient: "from-emerald-600/10 via-emerald-500/5 to-transparent",
    badgeStyle: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
  },
];

const enterpriseAdvantages = [
  {
    icon: Cpu,
    title: "100% In-House R&D & Manufacturing",
    desc: "Designed, engineered, and manufactured in India by Sensel Telematics, ensuring full control over hardware firmware, security, and supply chain."
  },
  {
    icon: ShieldCheck,
    title: "AIS-140 & CE Certified",
    desc: "Built to the highest national and international safety, environmental, and telematics standards for hazardous cargo and public transit."
  },
  {
    icon: Database,
    title: "Zero Data Loss Offline Buffering",
    desc: "Internal non-volatile flash memory buffers thousands of tracking events during cellular blackouts, automatically syncing upon reconnection."
  },
  {
    icon: Award,
    title: "Frost & Sullivan Award Winner",
    desc: "Recognized as India's leading IoT telematics innovator with over 50,000 active devices deployed across mining, cold chain, and logistics."
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#070b14] text-white min-h-[100dvh] lg:h-screen lg:min-h-[640px] flex items-center justify-center pt-24 pb-8 sm:pt-26 sm:pb-10 lg:pt-20 lg:pb-6 border-b border-slate-800">
        
        {/* Subtle grid pattern & glowing mesh */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-400 mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-primary font-semibold">Products &amp; Platforms</span>
          </div>

          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary tracking-wide uppercase">
                <Sparkles className="h-3 w-3" />
                Sensel Technology Stack
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                100% In-House R&amp;D &amp; Manufacturing
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-2.5">
              Enterprise IoT Products <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">
                &amp; Intelligent Platforms
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4 max-w-2xl">
              From rugged, wire-free hardware trackers engineered for India&apos;s harshest operational environments to high-performance cloud telematics analytics—Sensel delivers full-stack IoT infrastructure trusted across 50,000+ deployments.
            </p>

            {/* Quick Filter Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#hardware"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-md shadow-primary/30 hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Cpu className="h-3.5 w-3.5" />
                Hardware Devices (4)
              </a>
              <a
                href="#software"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold transition-all cursor-pointer"
              >
                <Layers className="h-3.5 w-3.5 text-secondary" />
                Software Platforms (2)
              </a>
              <a
                href="#advantages"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors"
              >
                Enterprise Advantage ↓
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
              <div className="text-xl sm:text-2xl font-extrabold text-white">4+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Rugged Hardware Trackers</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">2</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Intelligent Cloud Platforms</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-400">AIS-140</div>
              <div className="text-[11px] text-slate-400 mt-0.5">&amp; CE / RoHS Certified</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
              <div className="text-xl sm:text-2xl font-extrabold text-sky-400">50,000+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Active Telematics Units</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HARDWARE SECTION (ENTERPRISE IOT & TELEMATICS HARDWARE)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="hardware" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              <Cpu className="h-4 w-4" />
              <span>In-House R&amp;D &amp; Manufacturing</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Enterprise IoT &amp; Telematics Hardware
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Field-proven, wire-free and vehicle-powered GPS telematics units engineered for India&apos;s harshest operating conditions—featuring AIS compliance, IP67 ruggedization, multi-sensor interfaces, and extended autonomous battery runtimes.
            </p>
          </div>

          {/* 4 Hardware Cards Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareProducts.map((product) => (
              <div 
                key={product.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  
                  {/* Card Top: Badges & Model */}
                  <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {product.model}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                      {product.primarySpec}
                    </span>
                  </div>

                  {/* Device Showcase Image Box */}
                  <div className="p-4 bg-gradient-to-b from-slate-100/70 to-slate-50 relative flex items-center justify-center min-h-[200px] border-b border-slate-100 group-hover:from-primary/[0.04] group-hover:to-white transition-colors">
                    <div className="relative w-full max-w-[200px] aspect-[4/3]">
                      <Image
                        src={product.image}
                        alt={`Sensel ${product.title} IoT Hardware`}
                        fill
                        className="object-contain p-1 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    {/* Dimension Tag */}
                    <div className="absolute bottom-2 right-2 text-[10px] font-semibold text-slate-600 bg-white/90 border border-slate-200/80 px-2 py-0.5 rounded backdrop-blur-sm shadow-xs">
                      {product.dimensions}
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mt-0.5">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {product.highlights.map((h, i) => {
                        const Icon = h.icon;
                        return (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="truncate">{h.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-primary transition-colors shadow-sm group/btn cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={product.datasheetUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold text-slate-500 hover:text-primary transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-red-500" />
                    <span>Download Datasheet (PDF)</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SOFTWARE PLATFORMS SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="software" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              <Layers className="h-4 w-4" />
              <span>Intelligent Cloud Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Enterprise Cloud Platforms &amp; Analytics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Transform raw telematics data into predictive maintenance, driver safety scoring, and actionable operations visibility with Sensel&apos;s intelligent web and mobile software platforms.
            </p>
          </div>

          {/* 2 Software Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareProducts.map((software) => (
              <div 
                key={software.slug}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top corner gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${software.accentGradient} rounded-full blur-3xl pointer-events-none -z-0`} />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${software.badgeStyle}`}>
                      <Layers className="h-3.5 w-3.5" />
                      {software.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">Web + Mobile App</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {software.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mt-1">
                      {software.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {software.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Platform Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {software.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white/80 border border-slate-200/70 rounded-lg p-2.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/products/${software.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-primary transition-colors shadow-sm group"
                  >
                    <span>Explore {software.title} Platform</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-slate-500">
                    AIS-140 Govt. Compliant Cloud
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE ADVANTAGES (WHY SENSEL HARDWARE & SOFTWARE)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="advantages" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase mb-3">
              <Award className="h-3.5 w-3.5" />
              The Sensel Enterprise Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why Tier-1 Enterprises Trust Sensel IoT
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Decades of indigenous R&amp;D combine with ruggedized manufacturing to ensure seamless operation under extreme temperatures, heavy vibrations, and remote off-grid conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE CONSULTATION / DEPLOYMENT CTA BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#070b14] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Need Custom Hardware or Enterprise Fleet Deployment?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Speak directly with our senior hardware and telematics solutions engineers to request testing samples, review API integration guides, or design custom sensor payloads.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer"
            >
              <span>Explore Industry Solutions</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
