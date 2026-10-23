"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Sun, 
  Zap, 
  Thermometer, 
  Activity, 
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
  AlertTriangle, 
  Layers, 
  Download, 
  Building2, 
  HardHat, 
  Pickaxe, 
  Snowflake, 
  ShieldAlert, 
  Package, 
  Truck,
  ChevronDown
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

/* ─────────────────────────────────────────────────────────────
   Comprehensive Industry Data Dictionary
   ───────────────────────────────────────────────────────────── */
interface IndustryDetailData {
  slug: string;
  categoryLabel: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  challengeTitle: string;
  challengeText: string;
  solutionTitle: string;
  solutionText: string;
  image: string;
  stats: { value: string; label: string; desc: string }[];
  useCases: { title: string; desc: string; icon: React.ElementType }[];
  pairedHardware: {
    name: string;
    model: string;
    tagline: string;
    image: string;
    productHref: string;
    datasheetUrl: string;
    specs: { label: string; value: string }[];
  };
  faqs: { q: string; a: string }[];
}

const industriesDatabase: Record<string, IndustryDetailData> = {
  construction: {
    slug: "construction",
    categoryLabel: "Heavy Industry & Infrastructure",
    title: "Construction & Infrastructure",
    badge: "Heavy Machinery & Rentals",
    headline: "Automated engine runtime logging, theft prevention & precision equipment rental billing.",
    description: "Heavy construction machinery operating across remote infrastructure corridors requires continuous digital oversight. Sensel combines vibration-based engine sensing with autonomous long-life IoT trackers to eliminate rental billing disputes, curb idle fuel waste, and safeguard high-value mobile equipment from unauthorized off-hours usage.",
    challengeTitle: "The Construction Telematics Challenge",
    challengeText: "Construction contractors and equipment rental companies face persistent operational blindspots. Machinery runs on remote job sites without reliable grid power. Off-the-shelf GPS trackers require complex electrical wire-tapping that invalidates OEM warranties, while paper logbooks result in contentious billing disputes over true operational working hours.",
    solutionTitle: "The Sensel Vibration-Sensing Advantage",
    solutionText: "Sensel’s AST3Rc utilizes solid-state 3-axis vibration sensors to detect engine runtime automatically without touching vehicle electrical systems. Combined with multi-month battery autonomy and GPS L1 precision, contractors receive tamper-proof digital utilization logs, geofence departure alarms, and automated rental invoicing sheets.",
    image: "/solution/work-hour-meter.png",
    stats: [
      { value: "35%+", label: "Idle Fuel Reduction", desc: "Pinpoint non-productive engine idling" },
      { value: "100%", label: "Rental Dispute Resolution", desc: "Certified daily utilization audit sheets" },
      { value: "15–25 Mo", label: "Autonomous Battery Run", desc: "Zero external wiring or maintenance" },
      { value: "IP67", label: "Submersible Protection", desc: "Withstands mud, dust, and pressure washing" },
    ],
    useCases: [
      {
        title: "Excavators & Earthmovers",
        desc: "Measure true hydraulic engine runtime to schedule lubrication, track operator duty cycles, and prevent premature wear.",
        icon: Activity,
      },
      {
        title: "Equipment Rental Fleets",
        desc: "Generate automated billing sheets based on certified engine operating hours, resolving disputes with site managers.",
        icon: FileText,
      },
      {
        title: "Tower Cranes & Concrete Pumps",
        desc: "Monitor operational cycles across high-rise infrastructure projects with instant anti-tilt and vibration threshold alerts.",
        icon: HardHat,
      },
      {
        title: "Diesel Generators & Compressors",
        desc: "Protect stationary site assets with tamper light sensors, off-hours movement detection, and maintenance schedules.",
        icon: ShieldCheck,
      },
    ],
    pairedHardware: {
      name: "AST3Rc Work Hour Monitor",
      model: "AST3Rc",
      tagline: "5200 mAh Rechargeable • Vibration Engine Detection • Zero Wiring",
      image: "/solution/AST3Rc.png",
      productHref: "/products/ast3rc",
      datasheetUrl: "/solution/AST3R-ac_Product-Specs.pdf",
      specs: [
        { label: "Internal Battery", value: "3.7V 5200 mAh Long-Life Lithium Rechargeable" },
        { label: "Autonomous Runtime", value: "15 – 25 Months with single charge" },
        { label: "Engine Detection", value: "Solid-state 3-Axis vibration sensor" },
        { label: "GPS Accuracy", value: "GPS L1 < 2.5m CEP accuracy" },
        { label: "Housing Rating", value: "Waterproof & dustproof rugged enclosure" },
        { label: "Offline Memory", value: "Built-in flash buffers thousands of points" },
      ],
    },
    faqs: [
      {
        q: "Does the AST3Rc require tapping into the machine's electrical wiring?",
        a: "No. The AST3Rc is completely wire-free. It uses a high-sensitivity 3-axis vibration sensor to detect when the engine is actively running, preserving vehicle OEM warranties and enabling rapid 5-minute mounting.",
      },
      {
        q: "How does the tracker perform in remote construction sites without cellular network?",
        a: "The device features large internal non-volatile flash memory that securely buffers all GPS coordinates and engine work-hour logs during network blackouts. As soon as cellular connectivity returns, all buffered data automatically synchronizes with the Sensel cloud.",
      },
      {
        q: "Can we export reports for equipment rental billing?",
        a: "Yes. The Sensel platform generates automated daily, weekly, and monthly work-hour summary sheets with timestamps that can be exported as PDF or Excel for transparent client invoicing.",
      },
      {
        q: "What is the typical battery life between recharges?",
        a: "With its 5200 mAh internal lithium battery and adaptive power management, the AST3Rc delivers between 15 to 25 months of autonomous runtime on a single 4-hour recharge.",
      },
    ],
  },

  mining: {
    slug: "mining",
    categoryLabel: "Mining & Heavy Quarrying",
    title: "Mining & Quarrying (Cement & Minerals)",
    badge: "Harsh & Dust-Heavy Ops",
    headline: "Turnaround time accountability, weighbridge payload sync & haul road logistics.",
    description: "Open-cast mines, limestone quarries, and cement processing plants move immense volumes of heavy minerals daily. Sensel delivers heavy-duty, IP67 dustproof and vibration-resistant telematics to track tippers, streamline pit-to-crusher cycle times, sync with digital weighbridges, and eliminate unauthorized off-route dumping.",
    challengeTitle: "The Mining & Quarrying Challenge",
    challengeText: "Mining fleets endure extreme operating conditions: deep open pits with zero network reception, abrasive mineral dust, high-impact rock loading, and continuous haul road vibration. Unmonitored haul trucks suffer from long loading queues, fuel pilferage, and unauthorized dumping along remote routes, costing millions in lost throughput.",
    solutionTitle: "Sensel End-to-End Mining Telemetry",
    solutionText: "Sensel’s heavy-duty telematics units combine GPS L1 precision, deep-pit offline flash buffering, and digital weighbridge ERP synchronization. Fleet dispatchers gain real-time visibility into loading times, transit cycles, dump turnaround times (TAT), and driver speed compliance in hazardous quarry environments.",
    image: "/solution/cement-mining.jpg",
    stats: [
      { value: "28%", label: "Turnaround Time (TAT) Gain", desc: "Optimized haul cycle queues" },
      { value: "Zero Loss", label: "Deep Pit Flash Buffer", desc: "Non-volatile memory syncs on emergence" },
      { value: "100%", label: "Weighbridge Sync", desc: "Direct ERP and payload integration" },
      { value: "IP67", label: "Rugged Encapsulation", desc: "Immune to abrasive limestone dust" },
    ],
    useCases: [
      {
        title: "Dumper & Tipper Haul Cycles",
        desc: "Track loading, transit, waiting, and dumping times to balance excavator deployment and eliminate bottleneck delays.",
        icon: Clock,
      },
      {
        title: "Weighbridge Automation",
        desc: "Automatically pair truck GPS and RFID tags with gross weighbridge readings to prevent payload fraud.",
        icon: Database,
      },
      {
        title: "Off-Route Dumping Prevention",
        desc: "Define strict geofence travel corridors; instant alarms trigger if a tipper offloads outside approved dump zones.",
        icon: AlertTriangle,
      },
      {
        title: "Quarry Speed Compliance",
        desc: "Enforce site speed limits on steep haul ramps to prevent rollover accidents and maintain mandatory safety protocols.",
        icon: Gauge,
      },
    ],
    pairedHardware: {
      name: "AST3Rc & VTX 10 C Mining Units",
      model: "AST3Rc / VTX 10 C",
      tagline: "IP67 Ruggedized • Weighbridge API • High-Shock Vibration Resistant",
      image: "/solution/AST3Rc.png",
      productHref: "/products/ast3rc",
      datasheetUrl: "/solution/AST3R-ac_Product-Specs.pdf",
      specs: [
        { label: "Durability", value: "Industrial IP67 dustproof and waterproof sealed" },
        { label: "Cellular & GNSS", value: "GPS L1 <2.5m CEP with GSM cellular triangulation" },
        { label: "Data Buffering", value: "Thousands of offline tracking events stored" },
        { label: "Power Input", value: "Wire-free 5200 mAh battery OR 6–30V vehicle power" },
        { label: "Certifications", value: "CE Certified & RoHS environmental compliance" },
        { label: "Temperature", value: "-10°C to +60°C operating thermal window" },
      ],
    },
    faqs: [
      {
        q: "How does Sensel handle mining areas with no cellular coverage?",
        a: "Sensel devices feature heavy-duty internal non-volatile memory buffers. When trucks descend into deep pits or dead zones, all telemetry, timestamps, and trip events are safely stored. As soon as the vehicle returns to pit rims or weighbridges, data immediately synchronizes.",
      },
      {
        q: "Can this solution integrate with our existing weighbridge software?",
        a: "Yes. Sensel provides open REST APIs and pre-built connectors to integrate vehicle telemetry, arrival timestamps, and driver IDs directly with weighbridge systems, SAP, Oracle, and custom ERPs.",
      },
      {
        q: "Are the devices durable enough for rock blasting and abrasive dust?",
        a: "Our mining hardware features rugged IP67 sealed housings tested against high-amplitude vibration, caustic limestone and coal dust, and direct pressure-washing.",
      },
      {
        q: "Can we detect unauthorized fuel siphoning on mining haul trucks?",
        a: "Yes. By pairing our VTX 10 C telematics unit with digital fuel level probes, the system detects sudden fuel level drops and alerts security teams instantly.",
      },
    ],
  },

  "cold-chain": {
    slug: "cold-chain",
    categoryLabel: "Pharma, Food & Cold Logistics",
    title: "Cold Chain Logistics & Pharmaceuticals",
    badge: "Temperature Controlled",
    headline: "±0.5°C real-time thermal monitoring, excursion alerts & zero spoilage compliance.",
    description: "Transporting vaccines, biologics, dairy, and perishable food requires strict temperature continuity. Sensel’s IoT telematics deliver multi-zone thermal logging, door open/close alerts, reefer compressor power alarms, and automated compliance reports to ensure zero spoilage from warehouse to retail dispensary.",
    challengeTitle: "The Cold Chain Challenge",
    challengeText: "A single temperature breach in transit can spoil an entire shipment of lifesaving vaccines, biologics, or premium dairy products. Logistics managers often lack real-time visibility, only discovering cargo spoilage upon delivery when it is too late. Manual temperature loggers fail to provide live proactive intervention.",
    solutionTitle: "Real-Time Thermal Telemetry",
    solutionText: "Sensel’s AST3Rb and multi-zone BLE/wired thermal probes provide continuous temperature tracking with ±0.5°C accuracy. Fleet managers receive instant SMS/email alarms the moment temperatures deviate, allowing drivers to fix reefer settings before goods are damaged.",
    image: "/solution/rechargeable-asset-tracker.jpg",
    stats: [
      { value: "±0.5°C", label: "Sensor Thermal Precision", desc: "Calibrated digital probe accuracy" },
      { value: "0%", label: "Cargo Spoilage Audit", desc: "Proactive real-time excursion intervention" },
      { value: "10+ Mo", label: "Battery Runtime", desc: "2000 mAh rechargeable internal power" },
      { value: "100%", label: "CDSCO & FDA Ready", desc: "Automated digital trip compliance logs" },
    ],
    useCases: [
      {
        title: "Pharmaceuticals & Vaccines",
        desc: "Maintain certified +2°C to +8°C or deep-freeze -20°C thresholds with automated compliance audit logs.",
        icon: Thermometer,
      },
      {
        title: "Dairy, Meat & Perishables",
        desc: "Monitor multi-compartment reefer trucks from processing plants to regional cold storage facilities.",
        icon: Snowflake,
      },
      {
        title: "Cargo Door Open / Breach Alarms",
        desc: "Instant alerts when container doors are opened outside scheduled delivery stops, preventing thermal loss.",
        icon: ShieldAlert,
      },
      {
        title: "Reefer Power Failure Alarms",
        desc: "Detect when the refrigeration unit shuts off or loses diesel fuel, notifying the driver immediately.",
        icon: Zap,
      },
    ],
    pairedHardware: {
      name: "AST3Rb Ultra-Slim Tracker",
      model: "AST3Rb",
      tagline: "18mm Profile • 2000 mAh Rechargeable • BLE Probe Pair • 100g",
      image: "/solution/AST3Rb.png",
      productHref: "/products/ast3rb",
      datasheetUrl: "/solution/AST3Rb.pdf",
      specs: [
        { label: "Profile", value: "Ultra-slim 18 mm height • lightweight 100 g" },
        { label: "Battery", value: "2000 mAh Rechargeable Lithium-Ion" },
        { label: "Battery Life", value: "10+ Months on a single recharge (2,000+ fixes)" },
        { label: "Thermal Precision", value: "Digital thermal probes calibrated to ±0.5°C" },
        { label: "Mounting", value: "Magnetic mount / screw bracket for crates & reefers" },
        { label: "Connectivity", value: "GSM Quad-band + Bluetooth 3.0 sensor pair" },
      ],
    },
    faqs: [
      {
        q: "How accurate are the temperature sensors?",
        a: "Our digital temperature probes are factory calibrated to ±0.5°C accuracy across an operating range of -30°C to +70°C, meeting strict CDSCO, WHO, and FDA guidelines.",
      },
      {
        q: "What happens if the refrigeration unit fails mid-journey?",
        a: "The Sensel system immediately detects the temperature rise above your preset safe threshold and automatically broadcasts high-priority SMS and app notifications to both the driver and the dispatch team.",
      },
      {
        q: "Can the AST3Rb be placed inside vaccine cold boxes?",
        a: "Yes. With an ultra-slim 18mm thickness and weighing only 100 grams, the AST3Rb fits easily inside insulated shipper boxes, dry ice containers, or pallet packaging.",
      },
      {
        q: "Can we generate temperature compliance graphs for regulatory audits?",
        a: "Yes. The Sensel platform generates downloadable PDF trip temperature sheets complete with route overlays, time-stamped thermal charts, and excursion logs.",
      },
    ],
  },

  "hazardous-cargo": {
    slug: "hazardous-cargo",
    categoryLabel: "Regulated Dangerous Goods",
    title: "Hazardous Cargo, Petroleum & Chemicals",
    badge: "PESO & AIS-140 Compliant",
    headline: "Safe-to-load verification, driver fatigue alarms & emergency panic SOS response.",
    description: "Transporting volatile petroleum, LPG, toxic chemicals, and dangerous goods requires zero room for error. Sensel’s Fleet Smart™ hardware and platform provide 10-second live tracking, automated Safe-to-Load (STL) checklists, in-cabin emergency SOS triggers, and journey risk management to guarantee road safety and strict PESO compliance.",
    challengeTitle: "The Dangerous Goods Transportation Challenge",
    challengeText: "A tanker accident involving flammable fuels or toxic gases causes catastrophic environmental, financial, and human loss. Regulatory authorities mandate strict compliance with AIS-140, driver working hour limits, speed governance, and emergency response mechanisms. Fleets need real-time vigilance over driver fatigue, sudden route deviations, and cargo tampering.",
    solutionTitle: "Sensel Fleet Smart™ Hazardous Cargo Suite",
    solutionText: "Sensel’s VTX 10 C telematics unit delivers 10-second high-frequency telemetry, hardwired panic SOS switches, and multi-sensor interfaces. Combined with our Safe-to-Load digital validation and Journey Risk Management (JRM), fleet managers enforce zero-tolerance safety policies.",
    image: "/solution/hazardous-cargo.jpg",
    stats: [
      { value: "10-Sec", label: "Live Telemetry Interval", desc: "High-frequency tracking precision" },
      { value: "100%", label: "AIS-140 & PESO Aligned", desc: "Full statutory regulatory compliance" },
      { value: "6–30V", label: "Wide Input Voltage", desc: "Heavy commercial commercial vehicle ready" },
      { value: "Instant", label: "Cabin Panic Response", desc: "Dedicated emergency SOS broadcast" },
    ],
    useCases: [
      {
        title: "Petroleum & Fuel Road Tankers",
        desc: "Live tracking of petrol, diesel, and ATF carriers with automated geofence entry and exit alerts at retail outlets.",
        icon: Truck,
      },
      {
        title: "Safe-to-Load (STL) Checklists",
        desc: "Digital terminal entry validation ensuring vehicle fitness, fire extinguisher status, and driver certifications.",
        icon: CheckCircle2,
      },
      {
        title: "Driver Fatigue & In-Cabin Alerting",
        desc: "Monitor continuous driving hours and trigger audible in-cabin reminders when rest breaks are required.",
        icon: Clock,
      },
      {
        title: "Emergency SOS Panic Integration",
        desc: "Hardwired cabin emergency button instantly routes distress coordinates to central response centers.",
        icon: ShieldAlert,
      },
    ],
    pairedHardware: {
      name: "VTX 10 C Hazardous Cargo Unit",
      model: "VTX 10 C",
      tagline: "6–30V DC • Panic SOS • Fuel & Temp Ports • 128 MB Memory",
      image: "/solution/VTX10C.png",
      productHref: "/products/vtx10c",
      datasheetUrl: "/solution/VTX10c.pdf",
      specs: [
        { label: "Voltage Input", value: "Wide 6V to 30V DC input with surge protection" },
        { label: "Internal Battery", value: "Built-in backup battery (up to 5 hours runtime)" },
        { label: "Emergency Ports", value: "Dedicated Panic / SOS button switch interface" },
        { label: "Sensor Ports", value: "Fuel level sensor, temperature probe, A/C digital input" },
        { label: "Internal Memory", value: "128 MB flash memory for deep offline buffering" },
        { label: "Reporting Rate", value: "Configurable down to 10-second live updates" },
      ],
    },
    faqs: [
      {
        q: "Does Sensel meet PESO and AIS-140 standards for hazardous cargo?",
        a: "Yes. Our telematics hardware and software architecture are fully aligned with AIS-140 government safety requirements and PESO guidelines for petroleum and chemical carriers.",
      },
      {
        q: "How does the emergency panic SOS button operate?",
        a: "When the driver presses the cabin-mounted panic button, the VTX 10 C instantly overrides regular polling to broadcast immediate priority alarms with exact GPS coordinates to both company dispatchers and emergency services.",
      },
      {
        q: "What is the Safe-to-Load (STL) digital workflow?",
        a: "Safe-to-Load is an automated digital inspection protocol. Drivers and terminal inspectors complete an electronic checklist (checking tyre pressure, spark arrestors, fire extinguishers, driver fitness) before terminal gates open for loading.",
      },
      {
        q: "Can the system detect fuel siphoning or tank tampering?",
        a: "Yes. The VTX 10 C interfaces directly with high-precision digital fuel level sensors, triggering alarms if fuel levels drop abruptly while the engine is parked or moving.",
      },
    ],
  },

  logistics: {
    slug: "logistics",
    categoryLabel: "Intermodal Freight & Rail Wagons",
    title: "Supply Chain, Rail Freight & Containers",
    badge: "Solar Powered & Intermodal",
    headline: "Continuous solar energy harvesting, 4G Dual eSIM & zero-maintenance asset visibility.",
    description: "Non-powered trailers, railway freight wagons, and shipping containers spend months crossing national corridors without charging access. Sensel’s solar-powered IoT units harvest ambient light continuously, backed by rugged IP67 & IK08 impact ratings and multi-network roaming eSIMs for uninterrupted end-to-end visibility.",
    challengeTitle: "The Intermodal Freight Challenge",
    challengeText: "Non-powered assets such as railway wagons, ISO shipping containers, flatbed trailers, and genset chassis have no onboard electrical battery. Deploying standard battery trackers results in dead devices mid-transit, high battery replacement labor costs, and severe detention or demurrage penalties at rail sidings.",
    solutionTitle: "Perpetual Solar-Powered Tracking",
    solutionText: "Sensel’s AST4SLi integrates high-efficiency monocrystalline solar panels with an intelligent MPPT charging controller and a heavy-duty 7800 mAh battery. Operating perpetually under daylight, it provides continuous 4G LTE Cat 1 location updates, movement sensing, and tamper protection across thousands of kilometers.",
    image: "/solution/solar-powered-asset-tracker.jpg",
    stats: [
      { value: "Infinite", label: "Solar Operational Life", desc: "Perpetually recharges under daylight" },
      { value: "90+ Days", label: "Dark Autonomous Backup", desc: "Operates through overcast weather" },
      { value: "4G Cat 1", label: "Dual eSIM Roaming", desc: "Multi-carrier national network coverage" },
      { value: "IK08", label: "Impact Resistant", desc: "Withstands crane handling and impacts" },
    ],
    useCases: [
      {
        title: "Railway Freight Wagons",
        desc: "Monitor wagon turnaround cycles, yard detention times, and siding arrival timestamps across rail freight corridors.",
        icon: Package,
      },
      {
        title: "ISO Shipping Containers",
        desc: "Intermodal maritime and road container tracking with optical detachment sensors to detect unauthorized door access.",
        icon: Radio,
      },
      {
        title: "Heavy Flatbed & Utility Trailers",
        desc: "Track trailer utilization, ensure balanced asset deployment, and locate idle unhitched equipment in staging yards.",
        icon: Truck,
      },
      {
        title: "Demurrage & Detention Reduction",
        desc: "Automated entry/exit timestamps when containers enter customer warehouses, eliminating contentious detention fines.",
        icon: Clock,
      },
    ],
    pairedHardware: {
      name: "AST4SLi Solar Asset Tracker",
      model: "AST4SLi",
      tagline: "Integrated Solar MPPT • IP67 Submersible • 4G Cat 1 • IK08 Impact",
      image: "/solution/AST4SLi.png",
      productHref: "/products/ast4sli",
      datasheetUrl: "/solution/AST4SLi.pdf",
      specs: [
        { label: "Solar Panel", value: "Integrated high-efficiency monocrystalline solar cell" },
        { label: "Internal Battery", value: "3.7V 6000–7800 mAh Long-Life Lithium-Ion" },
        { label: "Dark Reserve", value: "Up to 90+ days without any sunlight exposure" },
        { label: "Cellular Technology", value: "4G LTE Cat 1 with automatic 2G fallback" },
        { label: "Enclosure Rating", value: "IP67 waterproof submersible & IK08 impact proof" },
        { label: "Mounting Options", value: "Heavy-duty bolt mount / magnetic / weld bracket" },
      ],
    },
    faqs: [
      {
        q: "What happens during monsoon or prolonged cloudy weather?",
        a: "The AST4SLi includes a large 6000–7800 mAh internal lithium battery capable of sustaining continuous operation for up to 90+ days in total darkness without any sunlight.",
      },
      {
        q: "How does the tracker attach to shipping containers or railway wagons?",
        a: "We offer three mounting methods: heavy-duty structural bolt brackets, ultra-strong rare-earth magnetic brackets, and weldable industrial steel brackets for permanent attachment.",
      },
      {
        q: "Can the device withstand crane loading shocks and outdoor weather?",
        a: "Yes. The housing is constructed from high-grade UV-resistant industrial polycarbonate with an IK08 impact rating and IP67 waterproof submersible certification.",
      },
      {
        q: "Does the AST4SLi work when freight crosses state or national borders?",
        a: "Yes. The device includes a Dual M2M eSIM that automatically roams between tier-1 cellular providers, connecting to whichever network is strongest.",
      },
    ],
  },

  "enterprise-fleet": {
    slug: "enterprise-fleet",
    categoryLabel: "Commercial Transportation",
    title: "Enterprise Fleet & Commercial Transport",
    badge: "Fleet Smart™ Cloud Platform",
    headline: "End-to-end fleet diagnostics, digital fuel monitoring & intelligent routing.",
    description: "Managing large corporate vehicle fleets, staff buses, distribution trucks, and third-party logistics partners requires real-time intelligence. Sensel’s unified Fleet Smart™ platform centralizes live vehicle health, digital fuel level tracking with siphoning alerts, preventative maintenance scheduling, and driver performance dashboards.",
    challengeTitle: "The Enterprise Fleet Management Challenge",
    challengeText: "Commercial fleet operators grapple with volatile fuel costs, unpredictable vehicle breakdowns, driver route deviations, and administrative overhead. Traditional manual logs fail to detect fuel siphoning, excessive idling, or harsh driving that accelerates tyre and brake wear.",
    solutionTitle: "Unified Fleet Telematics & Fuel Intelligence",
    solutionText: "Sensel’s VTX 10 C telematics unit connects with digital fuel probes and vehicle ignition to stream high-precision data to our Fleet Smart™ cloud platform. Fleet managers access real-time vehicle dispatch maps, trip replays, fuel consumption graphs, and automated preventative maintenance alerts.",
    image: "/solution/hazardous-cargo.jpg",
    stats: [
      { value: "22%+", label: "Average Fuel Savings", desc: "Detected siphoning and reduced idling" },
      { value: "50,000+", label: "Connected Vehicles", desc: "Trusted by India's top corporate fleets" },
      { value: "99.8%", label: "Cloud Platform SLA", desc: "Continuous enterprise telemetry uptime" },
      { value: "10-Sec", label: "Live Polling Interval", desc: "Real-time fleet tracking accuracy" },
    ],
    useCases: [
      {
        title: "Digital Fuel Level & Siphon Alarms",
        desc: "Continuous tank monitoring alerts dispatch immediately if fuel levels drop unexpectedly while parked or moving.",
        icon: Gauge,
      },
      {
        title: "Intelligent Route Optimization",
        desc: "Live route tracking, automated ETA calculation, and geofence milestone alerts for FMCG and retail delivery fleets.",
        icon: Sliders,
      },
      {
        title: "Driver Behavior Scoring",
        desc: "Monitor harsh acceleration, abrupt braking, cornering, and overspeeding to train drivers and reduce accident rates.",
        icon: Award,
      },
      {
        title: "Preventative Maintenance Scheduling",
        desc: "Automate oil change, tyre rotation, and fitness certificate renewal reminders based on true odometer readings.",
        icon: Building2,
      },
    ],
    pairedHardware: {
      name: "VTX 10 C Commercial Telematics Unit",
      model: "VTX 10 C",
      tagline: "High-precision GPS L1 • Multi-sensor interface • 128MB Memory",
      image: "/solution/VTX10C.png",
      productHref: "/products/vtx10c",
      datasheetUrl: "/solution/VTX10c.pdf",
      specs: [
        { label: "Voltage Input", value: "Wide 6V to 30V DC input with vehicle surge suppression" },
        { label: "Fuel Integration", value: "High-accuracy capacitive fuel level probe interface" },
        { label: "Live Updates", value: "10-second live polling interval for seamless tracking" },
        { label: "Battery Backup", value: "Internal rechargeable lithium battery (up to 5 hours)" },
        { label: "Data Storage", value: "128 MB non-volatile flash memory for offline events" },
        { label: "Certifications", value: "AIS-140 and Automotive Grade CE Certified" },
      ],
    },
    faqs: [
      {
        q: "How does the fuel monitoring system prevent fuel theft?",
        a: "Sensel integrates calibrated digital fuel sensors that read fuel levels with millimeter precision. If fuel drops suddenly without corresponding engine running hours, the platform immediately triggers an audible alarm and SMS alert.",
      },
      {
        q: "Can Fleet Smart integrate with our existing ERP or TMS software?",
        a: "Yes. Sensel provides comprehensive REST APIs that allow two-way synchronization with SAP, Oracle, Microsoft Dynamics, and custom transport management systems (TMS).",
      },
      {
        q: "Can we track both company-owned and third-party contractor trucks?",
        a: "Yes. Sensel supports multi-tenant fleet hierarchies, enabling you to onboard vendor trucks with restricted dashboard access while viewing total capacity on your master dashboard.",
      },
      {
        q: "Does the system monitor driver driving behavior?",
        a: "Yes. Built-in 3-axis accelerometers detect harsh braking, rapid acceleration, overspeeding, and prolonged idling, producing a driver scorecard that helps reward safe drivers.",
      },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────
   Slug Normalizer & Helper
   ───────────────────────────────────────────────────────────── */
function getIndustryData(rawSlug: string): IndustryDetailData {
  const slug = rawSlug.toLowerCase().trim();

  if (industriesDatabase[slug]) {
    return industriesDatabase[slug];
  }

  // Common aliases
  if (slug.includes("construct")) return industriesDatabase["construction"];
  if (slug.includes("mining") || slug.includes("cement")) return industriesDatabase["mining"];
  if (slug.includes("cold") || slug.includes("pharma")) return industriesDatabase["cold-chain"];
  if (slug.includes("hazard") || slug.includes("chemical") || slug.includes("tanker")) return industriesDatabase["hazardous-cargo"];
  if (slug.includes("logic") || slug.includes("freight") || slug.includes("rail") || slug.includes("container")) return industriesDatabase["logistics"];
  if (slug.includes("fleet") || slug.includes("transport")) return industriesDatabase["enterprise-fleet"];

  // Default fallback
  return industriesDatabase["construction"];
}

const otherIndustriesList = [
  { slug: "construction", title: "Construction & Infrastructure", icon: HardHat },
  { slug: "mining", title: "Mining & Quarrying", icon: Pickaxe },
  { slug: "cold-chain", title: "Cold Chain & Pharma", icon: Snowflake },
  { slug: "hazardous-cargo", title: "Hazardous & Chemicals", icon: ShieldAlert },
  { slug: "logistics", title: "Logistics & Rail Freight", icon: Package },
  { slug: "enterprise-fleet", title: "Enterprise Fleet", icon: Truck },
];

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const data = getIndustryData(params.slug);
  const { openDemoModal } = useDemoModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-primary/20 selection:text-primary">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH - BALANCED SPACIOUS FIT)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10 border-b border-slate-800">
        
        {/* Subtle grid pattern & glowing mesh */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Integrated Breadcrumbs Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pb-2.5 mb-4 sm:mb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-primary font-semibold">{data.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <Link 
                href="/industries"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-md px-2.5 py-0.5"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>All Industries</span>
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl space-y-4 sm:space-y-4.5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-0.5 sm:py-1 text-xs font-bold text-primary tracking-wide uppercase">
                <Cpu className="h-3.5 w-3.5" />
                {data.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-0.5 sm:py-1 text-xs font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {data.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.17]">
              IoT &amp; Telematics for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-300 leading-relaxed font-normal max-w-3xl">
              {data.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 sm:pt-2.5">
              <button
                type="button"
                onClick={() => openDemoModal(`${data.title} Industry Consultation`)}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary/90 h-10 sm:h-11 px-5 sm:px-6 transition-all shadow-md shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <Link
                href={data.pairedHardware.productHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-10 sm:h-11 px-4 sm:px-5 transition-all hover:-translate-y-0.5"
              >
                <span>View {data.pairedHardware.model} Hardware</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </div>

            {/* Key Proof-Point Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-5 max-w-4xl">
              {data.stats.map((st, i) => (
                <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="text-xl sm:text-2xl font-black text-white">{st.value}</p>
                  <p className="text-[11px] sm:text-xs font-bold text-primary mt-0.5 sm:mt-1">{st.label}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">{st.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHALLENGE & SOLUTION DEEP DIVE (WITH REAL PHOTO)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#090d16] border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Operational Photography Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-[4/3] shadow-2xl group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${data.image}')` }}
                  aria-label={data.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">{data.categoryLabel}</p>
                  <p className="text-xs font-bold text-white mt-0.5">{data.headline}</p>
                </div>
              </div>
            </div>

            {/* Right: Challenge & Solution Cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Challenge Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:border-white/20 transition-all">
                <div className="flex items-center gap-2.5 text-amber-400 mb-3">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-white">{data.challengeTitle}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {data.challengeText}
                </p>
              </div>

              {/* Solution Card */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-7">
                <div className="flex items-center gap-2.5 text-primary mb-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-white">{data.solutionTitle}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {data.solutionText}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OPERATIONAL USE CASES (4 BENTO CARDS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#070b14] border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Operational Workflows</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Key Use Cases in {data.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Purpose-built telematics features delivering verified return on investment across operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{uc.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{uc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RECOMMENDED HARDWARE SPOTLIGHT
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Device Image & Quick Badges */}
              <div className="lg:col-span-5 text-center">
                <div className="relative mx-auto max-w-[260px] sm:max-w-[300px] aspect-square rounded-2xl bg-white/95 p-6 shadow-inner flex items-center justify-center group">
                  <Image
                    src={data.pairedHardware.image}
                    alt={data.pairedHardware.name}
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                    {data.pairedHardware.model}
                  </span>
                </div>
              </div>

              {/* Right: Hardware Information & Spec Grid */}
              <div className="lg:col-span-7 space-y-5">
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Recommended Hardware for {data.title}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {data.pairedHardware.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    {data.pairedHardware.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                  {data.pairedHardware.specs.map((sp, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/8">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{sp.label}</p>
                      <p className="text-xs font-semibold text-slate-200 mt-0.5">{sp.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={data.pairedHardware.datasheetUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary/90 h-10 px-5 transition-all shadow-md shadow-primary/20"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Datasheet (PDF)</span>
                  </a>

                  <Link
                    href={data.pairedHardware.productHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl text-xs sm:text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white h-10 px-4 transition-colors"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INDUSTRY FAQ ACCORDION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#070b14] border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions: {data.title}
            </h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXPLORE OTHER INDUSTRIES
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#090d16] border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Explore Across Sectors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Other Industries Transformed by Sensel
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {otherIndustriesList.map((item) => {
              const Icon = item.icon;
              const isCurrent = item.slug === data.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 group ${
                    isCurrent
                      ? "border-primary bg-primary/10 pointer-events-none"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40"
                  }`}
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-white group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE CTA BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#070b14] relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-2xl relative">
            
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tailored Engineering &amp; Field Trials
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Telematics for {data.title}?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">
              Consult with Sensel’s senior IoT solutions team to configure certified hardware, sensor integrations, and cloud dashboards tailored to your exact operational requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openDemoModal(`${data.title} Consultation`)}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary/90 h-12 px-8 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm h-12 px-8 transition-all hover:-translate-y-0.5"
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
