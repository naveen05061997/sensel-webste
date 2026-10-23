"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Truck, 
  Timer, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Gauge,
  Workflow
} from "lucide-react";

interface AppCardProps {
  badge: string;
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  icon: React.ReactNode;
}

function ApplicationCard({
  badge,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  imageOnLeft = true,
  icon,
}: AppCardProps) {
  return (
    <div className="bg-slate-900/85 border border-slate-700/80 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Visual / Image Column */}
        <div className={`lg:col-span-6 ${imageOnLeft ? "" : "order-1 lg:order-2"}`}>
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            {/* Subtle bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Text & Content Column */}
        <div className={`lg:col-span-6 space-y-4 ${imageOnLeft ? "" : "order-2 lg:order-1"}`}>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-[28px] font-extrabold text-white leading-snug tracking-tight">
            {title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3 pt-2">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base text-slate-200 font-medium">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CementMiningApplications() {
  const quickCards = [
    {
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      title: "Auto Trip Monitoring",
      description: "Geo-fence-based trip detection and logging. Tracks movement of coal, limestone, or other raw materials. Generates error-free trip reports shift-wise and vehicle-wise."
    },
    {
      icon: <Timer className="w-6 h-6 text-amber-400" />,
      title: "Monitoring Of Machine Utilization For All Type Of Equipment",
      description: "Automatically logs engine ON/OFF status of each equipment. Improves visibility into machine utilization and idle time. Enables preventive maintenance and shift planning."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      title: "Integrated Analytics & Reporting",
      description: "Unified dashboard with trip, work hour, and halt reports. Enables data-driven decisions on fleet allocation, shift utilization, and energy mix. Historical and real-time reports accessible anytime."
    },
    {
      icon: <Workflow className="w-6 h-6 text-amber-400" />,
      title: "Phased & Scalable Deployment",
      description: "Start with one plant or unit and expand seamlessly. Proven approach for large-scale adoption across cement operations."
    },
  ];

  return (
    <div
      id="applications"
      className="pt-12 sm:pt-16 border-t border-slate-800/80 scroll-mt-24 space-y-12 sm:space-y-16"
    >
      {/* Top Section Header with Exact User Heading & Subheading */}
      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-400/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          What Makes Us Different
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Benefits for the Industry Leaders
        </h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Engineered for cement producers, quarries, and mining haulers to drive precision, zero-loss logistics, and automated fleet accountability.
        </p>
      </div>

      {/* 4 Feature Pillars Grid (Reflecting User's Provided Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {quickCards.map((card, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-900/85 border border-slate-700/80 p-6 sm:p-7 rounded-2xl shadow-xl backdrop-blur-xl hover:border-amber-400/60 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4 border border-amber-400/30 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-amber-300 transition-colors">
                {card.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-amber-400">
              <span>View workflow details</span>
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Application Showcase (image21, image22, image23, image24) */}
      <div className="space-y-8 sm:space-y-10 pt-4">
        {/* Application 1: Auto Trip Monitoring (image21) */}
        <ApplicationCard
          badge="Haulage & Dispatch"
          title="Auto Trip Monitoring"
          description="Manage continuous material haulage from limestone quarries to captive power plants and crushers with fully automated trip detection."
          points={[
            "Geo-fence-based automated trip detection and pit-to-crusher logging",
            "Real-time movement tracking of coal, limestone, or other raw materials",
            "Generates error-free trip reports shift-wise and vehicle-wise without human paperwork",
            "Instant notifications on turnaround delays, off-route deviations, or unauthorized halts"
          ]}
          imageSrc="/solution/image21.png"
          imageAlt="Auto Trip Monitoring in Cement and Mining Operations"
          imageOnLeft={true}
          icon={<Truck className="w-8 h-8" />}
        />

        {/* Application 2: Machine Utilization (image22) */}
        <ApplicationCard
          badge="Heavy Equipment Oversight"
          title="Monitoring Of Machine Utilization For All Type Of Equipment"
          description="Capture accurate work-hours and operational activity for excavators, tippers, loaders, and stationary quarry machinery without invasive rewiring."
          points={[
            "Automatically logs engine ON/OFF status and runtime of each equipment",
            "Improves direct visibility into productive machine utilization vs. fuel-wasting idle time",
            "Enables condition-based preventive maintenance scheduling to prevent costly breakdowns",
            "Optimizes shift planning and operator accountability across heavy machinery fleets"
          ]}
          imageSrc="/solution/image22.png"
          imageAlt="Machine Utilization Monitoring for All Mining Equipment"
          imageOnLeft={false}
          icon={<Timer className="w-8 h-8" />}
        />

        {/* Application 3: Integrated Analytics & Reporting (image23) */}
        <ApplicationCard
          badge="Executive Intelligence"
          title="Integrated Analytics & Reporting"
          description="Centralize multi-plant and multi-quarry performance data into executive dashboards that empower management to optimize costs and haul cycles."
          points={[
            "Unified dashboard consolidating trip counts, engine work hours, and halt reports",
            "Enables data-driven decisions on fleet allocation, shift utilization, and energy mix",
            "Historical and real-time operational reports accessible anytime from web and mobile",
            "Seamless API integration with weighbridge systems, ERPs, and dispatch management platforms"
          ]}
          imageSrc="/solution/image23.png"
          imageAlt="Integrated Analytics and Reporting for Cement and Mining Operations"
          imageOnLeft={true}
          icon={<TrendingUp className="w-8 h-8" />}
        />

        {/* Application 4: Phased & Scalable Deployment (image24) */}
        <ApplicationCard
          badge="Enterprise Scalability"
          title="Phased & Scalable Deployment"
          description="A frictionless rollout framework tailored for large industrial conglomerates with zero disruption to daily dispatch or plant operations."
          points={[
            "Start with one plant or mining unit and expand seamlessly across your entire enterprise",
            "Proven phased implementation approach for large-scale adoption across cement operations",
            "Modular architecture supporting hybrid connectivity (cellular, satellite, offline sync)",
            "Dedicated onboarding, driver coaching, and enterprise SLA support from Sensel"
          ]}
          imageSrc="/solution/image24.png"
          imageAlt="Phased and Scalable Telematics Deployment for Cement Operations"
          imageOnLeft={false}
          icon={<Workflow className="w-8 h-8" />}
        />
      </div>
    </div>
  );
}
