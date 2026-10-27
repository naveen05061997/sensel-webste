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
  Shield,
  Activity,
  AlertTriangle,
  Droplets,
  Gauge,
  Clock,
  Navigation,
  HardDrive
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { useEnterpriseModal } from "@/context/EnterpriseModalContext";

export default function Vtx10cProductPage() {
  const { openDemoModal } = useDemoModal();
  const { openEnterpriseModal } = useEnterpriseModal();

  const datasheetUrl = "/solution/VTX10c.pdf";

  // Three Core Feature Pillars (From User Screenshot's 3 Columns)
  const interfaceFeatures = [
    {
      icon: AlertTriangle,
      title: "Panic / SOS Button Interface",
      desc: "Instant emergency in-cabin push button enables drivers to transmit high-priority SOS alerts to dispatch during accidents or hijack threats.",
      tag: "Driver Safety"
    },
    {
      icon: Gauge,
      title: "Fuel Sensor Interface",
      desc: "Integrates with advanced digital fuel level sensors for precise fuel consumption tracking, tank fill verification, and instant theft alerts.",
      tag: "Fuel Monitoring"
    },
    {
      icon: Thermometer,
      title: "Temperature & Humidity Interface",
      desc: "Connects to multi-zone digital probes for real-time monitoring of reefer compartments, cold storage, and moisture-sensitive cargo.",
      tag: "Cold Chain"
    },
    {
      icon: Radio,
      title: "Internal GSM & GPS Antennas",
      desc: "High-gain integrated antennas concealed inside the housing prevent external tampering or cable cutting by unauthorized personnel.",
      tag: "Tamper Proof"
    },
    {
      icon: Activity,
      title: "3-Axis Precision Accelerometer",
      desc: "Monitors vehicle dynamics to instantly identify harsh braking, rapid acceleration, aggressive cornering, and rollover crash impacts.",
      tag: "Crash & Driving"
    },
    {
      icon: Shield,
      title: "Waterproof & Dual LED Indicators",
      desc: "Rugged waterproof casing with dual external diagnostic LEDs providing immediate visual confirmation of GPS satellite fix and cellular lock.",
      tag: "< 3M Accuracy"
    }
  ];

  const electricalFeatures = [
    {
      icon: Zap,
      title: "Wide Input Voltage: 6V to 30V DC",
      desc: "Compatible with all 12V light commercial vehicles and 24V heavy-duty mining haulers, petroleum tankers, and construction equipment.",
      tag: "6 – 30V Range"
    },
    {
      icon: Radio,
      title: "Bluetooth 4.0 (BLE)",
      desc: "Enables wireless short-range connectivity with BLE temperature tags, wireless door sensors, driver identification beacons, and mobile diagnostic apps.",
      tag: "BLE 4.0 Sensors"
    },
    {
      icon: HardDrive,
      title: "128 MB Internal Flash Storage",
      desc: "Massive onboard non-volatile memory stores tens of thousands of offline waypoints during cellular network blackouts, syncing once reconnected.",
      tag: "128 MB Buffer"
    },
    {
      icon: BatteryCharging,
      title: "Internal Backup Battery (Up to 5h)",
      desc: "In-built rechargeable lithium backup battery keeps transmitting telemetry for up to 5 hours even if the vehicle main battery is disconnected.",
      tag: "Up to 5h Backup"
    },
    {
      icon: Clock,
      title: "10 Seconds High-Rate Updates",
      desc: "Ultra-responsive 10-second telemetry streaming captures second-by-second trip paths, turning maneuvers, and hazardous material convoy positions.",
      tag: "10s Update Rate"
    },
    {
      icon: Sliders,
      title: "OTA Firmware & Parameter Updates",
      desc: "Supports Over-The-Air firmware upgrades and remote configuration tuning without requiring physical workshop downtime or vehicle grounding.",
      tag: "OTA Updates"
    }
  ];

  const cloudAnalyticsFeatures = [
    {
      icon: Navigation,
      title: "90 Days Historical Web Reports",
      desc: "Comprehensive web dashboard provides 90-day historical route playback, stoppage durations, idling analyses, and compliance logs.",
      tag: "90-Day History"
    },
    {
      icon: ShieldCheck,
      title: "Geo-Fence & Reference Route Alerts",
      desc: "Define custom polygonal geofences and mandatory transport corridors with automated alarms for unauthorized route deviations and offloading.",
      tag: "Corridor Tracking"
    },
    {
      icon: Activity,
      title: "Driver Behavior Analytics",
      desc: "Generates objective driver scorecards evaluating harsh acceleration, harsh braking, aggressive cornering, and over-speed violations.",
      tag: "Driver Scorecard"
    },
    {
      icon: Droplets,
      title: "Engine & A/C Status Sensing",
      desc: "Monitors true engine runtime, ignition on/off states, and air conditioning auxiliary status to eliminate unauthorized engine idling.",
      tag: "Ignition & A/C"
    },
    {
      icon: Database,
      title: "Offline Data Auto-Recovery",
      desc: "Guarantees zero data loss across remote transit zones with automatic, timestamp-accurate data recovery upon re-entering cellular range.",
      tag: "Zero Data Loss"
    },
    {
      icon: AlertTriangle,
      title: "Device Disconnect & Over-Speed Alerts",
      desc: "Immediate tamper notifications triggered upon main power disconnection, auxiliary wire tampering, or pre-set speed limit breaches.",
      tag: "Tamper & Speed"
    }
  ];

  // Complete specs faithfully transcribed from User Screenshot
  const specs = [
    {
      category: "Hardware Interfaces & Sensors",
      items: [
        { label: "Panic / SOS Interface", value: "Dedicated emergency push button input" },
        { label: "Fuel Sensor Interface", value: "Compatible with analog & digital fuel level probes" },
        { label: "Temperature Sensor Interface", value: "Multi-point digital temperature sensor support" },
        { label: "Humidity Sensor Interface", value: "Dedicated digital humidity probe input" },
        { label: "Motion Sensing", value: "3-Axis Precision Accelerometer" },
        { label: "Air Conditioning Status", value: "A/C On/Off auxiliary digital sensing" },
        { label: "Status Indicators", value: "2 Diagnostic LEDs (GPS Lock & GSM Connectivity)" },
        { label: "Antenna System", value: "Tamper-resistant Internal GSM & GPS Antennas" }
      ]
    },
    {
      category: "Electrical & Battery",
      items: [
        { label: "Operating Input Voltage", value: "6V to 30V DC (12V / 24V vehicle electrical systems)" },
        { label: "Internal Backup Battery", value: "Built-in rechargeable Li-ion battery" },
        { label: "Battery Backup Duration", value: "Up to 5 Hours continuous tracking without vehicle power" },
        { label: "Power Disconnect Protection", value: "Instant Device Disconnect Alert sent to server" }
      ]
    },
    {
      category: "Positioning & Wireless Connectivity",
      items: [
        { label: "Horizontal Position Accuracy", value: "< 3 Meters CEP" },
        { label: "Update Rate", value: "10 Seconds high-frequency live tracking" },
        { label: "On-Demand Location", value: "Instant SMS & cloud dashboard polling" },
        { label: "Bluetooth", value: "Bluetooth 4.0 (BLE) for wireless sensors & app pairing" },
        { label: "Cellular Connectivity", value: "High-sensitivity GSM with GPRS data streaming" },
        { label: "Firmware Upgrades", value: "OTA (Over The Air Firmware & Configuration Update)" }
      ]
    },
    {
      category: "Memory & Data Storage",
      items: [
        { label: "Internal Flash Memory", value: "128 MB Internal Flash Storage" },
        { label: "Offline Buffering", value: "Automatic offline data buffering during network blackouts" },
        { label: "Data Recovery", value: "Recover offline data automatically upon network reconnection" }
      ]
    },
    {
      category: "Physical & Environmental",
      items: [
        { label: "Dimensions", value: "85 mm (L) × 50 mm (W) × 15 mm (H)" },
        { label: "Weight", value: "80 grams (Ultra-compact form factor)" },
        { label: "Water Resistance", value: "Waterproof & dust-resistant casing" },
        { label: "Operating Temperature", value: "-45°C to +80°C (Extreme temperature range)" }
      ]
    },
    {
      category: "Fleet Smart™ Cloud Platform & Reports",
      items: [
        { label: "Historical Data Storage", value: "90 Days history (Reports & Route Playback) on Web" },
        { label: "Engine & Stoppage Tracking", value: "Engine On/Off detection & Halt / Idling Reports" },
        { label: "Distance & Mileage Reports", value: "Automated Daily & Monthly Distance Reports" },
        { label: "Geofencing & Routes", value: "Polygonal Geo-Fence, Place of Interest (POI) & Reference Route" },
        { label: "Driver Safety Scoring", value: "Harsh Acceleration, Harsh Braking & Harsh Cornering detection" },
        { label: "Speed Compliance", value: "Configurable Over-Speed Alerts" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH - COMPACT FULL-SCREEN FIT)
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Integrated Breadcrumbs Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pb-1.5 mb-2.5 sm:mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-primary font-semibold">VTX 10 C</span>
            </div>

            <div className="flex items-center gap-2">
              <Link 
                href="/solutions/hazardous-cargo"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Hazardous Cargo Solution</span>
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
                  Fleet-Smart™ Hardware
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-amber-300">
                  <AlertTriangle className="h-3 w-3" />
                  Hazardous Goods &amp; Tankers
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-sky-300">
                  <Award className="h-3 w-3 text-sky-400" />
                  Frost &amp; Sullivan Award Winner
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  VTX 10 C <span className="text-primary font-medium text-lg sm:text-xl lg:text-2xl block sm:inline sm:ml-2">(Fleet Smart™)</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 leading-normal">
                  SENSEL FLEET SMART VTX 10 C — Advanced Vehicle Telematics &amp; Hazardous Cargo IoT Unit
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
                Sensel&apos;s <strong>VTX 10 C</strong> is an ultra-compact (80g), high-precision vehicle telematics unit engineered specifically for hazardous material carriers, petroleum tankers, heavy mining fleets, and commercial transport. Operating across a wide <strong>6V to 30V DC input</strong>, it features an extensive sensor interface suite—including <strong>Panic SOS, Fuel, Temperature, Humidity, and A/C</strong>—with <strong>10-second live updates</strong>, 128 MB internal flash, and up to 5 hours of internal battery backup.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 max-w-3xl">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">6–30V Wide Voltage</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <AlertTriangle className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="truncate">Panic / SOS Emergency</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Gauge className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Fuel Sensor Interface</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Thermometer className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Temp &amp; Humidity Probe</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <HardDrive className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">128 MB Flash Memory</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200">
                  <Clock className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">10s Live Update Rate</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1.5 sm:pt-2">
                {/* Official Datasheet Download */}
                <a
                  href={datasheetUrl}
                  download="VTX10c.pdf"
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
                  onClick={() => openDemoModal("VTX 10 C Fleet Smart Unit")}
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
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 via-amber-500/20 to-blue-600/30 rounded-2xl blur-xl opacity-75 -z-10" />

                {/* Glassmorphic Card Frame */}
                <div className="relative rounded-2xl p-3.5 sm:p-4 bg-gradient-to-b from-white/10 via-white/5 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60 space-y-2.5 sm:space-y-3">
                  
                  {/* Top pill & status */}
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-white/10">
                    <span className="font-mono text-slate-300 uppercase tracking-wider font-semibold">Model: VTX 10 C</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      10s Live Telemetry
                    </span>
                  </div>

                  {/* Device Image Container */}
                  <div className="relative bg-gradient-to-b from-slate-900/90 via-[#0a1120] to-[#070b14] border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-inner flex items-center justify-center min-h-[130px] sm:min-h-[145px] lg:min-h-[155px] overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.14),transparent_70%)] pointer-events-none" />
                    <div className="relative w-full max-w-[170px] sm:max-w-[190px] aspect-[16/10]">
                      <Image
                        src="/solution/VTX10c.png"
                        alt="Sensel Fleet Smart VTX 10 C Hardware Telematics Unit"
                        fill
                        priority
                        className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 190px, 220px"
                      />
                    </div>

                    {/* Badge on Image */}
                    <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                      85 × 50 × 15 mm • 80 g
                    </div>
                  </div>

                  {/* Telemetry Quick Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Input Voltage</p>
                      <p className="text-white font-bold text-xs sm:text-sm">6 – 30V DC</p>
                      <p className="text-emerald-400 text-[10px] mt-0.5 leading-none">12V &amp; 24V Support</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                      <p className="text-slate-400 text-[10px] mb-0.5 leading-none">Backup Battery</p>
                      <p className="text-primary font-bold text-xs sm:text-sm">Up to 5 Hours</p>
                      <p className="text-slate-300 text-[10px] mt-0.5 leading-none">Internal Li-Ion</p>
                    </div>
                  </div>

                  {/* PDF Datasheet Card Link */}
                  <div className="pt-0.5">
                    <a
                      href={datasheetUrl}
                      download="VTX10c.pdf"
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
                            VTX10c.pdf
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
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">10 Sec</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Live Streaming Rate</p>
              <p className="text-[11px] text-slate-400 mt-0.5">High-frequency real-time updates</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-200 mb-1">6 – 30V</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Wide Operating Voltage</p>
              <p className="text-[11px] text-slate-400 mt-0.5">12V &amp; 24V Commercial Vehicles</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">128 MB</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Internal Flash Buffer</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Zero data loss during outages</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">80 gms</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Compact Form Factor</p>
              <p className="text-[11px] text-slate-400 mt-0.5">L85 × W50 × H15 mm</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HARDWARE INTERFACES & SENSORS (FROM COLUMN 1)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Multi-Sensor Integration</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              Comprehensive Hardware Sensor Interfaces
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Equipped with purpose-built analog and digital interfaces designed to monitor cargo integrity, fuel levels, driver emergencies, and vehicle dynamics simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {interfaceFeatures.map((feat, idx) => {
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
                    Field Verified Sensor Interface
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: ELECTRICAL & TELEMETRY SPECS (FROM COLUMN 2)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">High-Reliability Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              Electrical, Connectivity &amp; Physical Specifications
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Tested to withstand electrical transients, severe vibrations, and temperature extremes ranging from -45°C to +80°C.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {electricalFeatures.map((feat, idx) => {
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
                    Built for Commercial Fleets
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: CLOUD TELEMATICS & ANALYTICS (FROM COLUMN 3)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Fleet Smart™ Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              90-Day Analytics, Driver Behavior &amp; Compliance
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Direct integration into Sensel Fleet Smart™ cloud platform delivers actionable fleet intelligence, journey risk management, and automatic compliance reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cloudAnalyticsFeatures.map((feat, idx) => {
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
                    Automated Cloud Compliance
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
          TECHNICAL SPECIFICATIONS ACCORDION / GRID (EXACT SPECS FROM USER SCREENSHOT)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="specifications" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Documentation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4">
              VTX 10 C Technical Specifications
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Official datasheet specifications extracted directly from Sensel Telematics hardware engineering publication.
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
                  Download the official Sensel Fleet Smart VTX 10 C product specifications sheet (PDF format).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={datasheetUrl}
                download="VTX10c.pdf"
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
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Mission-Critical Fleets</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Where VTX 10 C Excels
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 font-bold text-lg">
                  ☣️
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Hazardous Chemical &amp; Petroleum</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Integrate Panic SOS, fuel monitoring, route deviation detection, and cabin alerts for safe transit of inflammable goods and petroleum tankers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 font-bold text-lg">
                  🚛
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Cement &amp; Mining Haulers</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dust-resistant, 128 MB offline data buffer, and 6–30V power handling survive harsh quarry environments and remote mine sites without network coverage.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 font-bold text-lg">
                  ❄️
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Reefer &amp; Cold Chain Logistics</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Simultaneous digital temperature and humidity probe monitoring ensures perishable pharmaceutical and grocery shipments meet quality compliance.
                </p>
              </div>

            </div>

            {/* Link to Hazardous Cargo Solution */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Part of the Sensel Hazardous Cargo Solution Stack
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Explore full Safe-to-Load workflows, driver compliance logs, and dispatch analytics.
                </p>
              </div>
              <Link
                href="/solutions/hazardous-cargo"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors shrink-0"
              >
                Explore Hazardous Cargo Solution
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
            Equip Your Fleet with VTX 10 C
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-8">
            Connect with Sensel&apos;s telematics engineers to request trial hardware, test fuel and temperature sensors, or configure custom API webhooks for your ERP.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openDemoModal("VTX 10 C Fleet Smart Unit")}
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 h-13 px-8 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
            >
              Request Trial / Demo
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={datasheetUrl}
              download="VTX10c.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-13 px-7 transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Technical Datasheet
            </a>

            <button
              type="button"
              onClick={() => openEnterpriseModal("VTX 10 C Custom Integration")}
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
