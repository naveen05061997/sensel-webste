"use client";

import { 
  Gauge, 
  MapPin, 
  BatteryCharging, 
  LayoutDashboard, 
  ShieldCheck, 
  Radio, 
  CheckCircle2 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  accentBar: string;
  badge: string;
  title: string;
  bullet1: {
    prefix?: string;
    bold: string;
    suffix?: string;
  };
  bullet2: {
    prefix?: string;
    bold?: string;
    suffix: string;
  };
}

const keyFeatures: FeatureCard[] = [
  {
    icon: Gauge,
    iconBg: "bg-amber-500/10 border-amber-300/60",
    iconColor: "text-amber-600",
    accentBar: "from-amber-500 to-orange-500",
    badge: "Engine Sensing",
    title: "Automatic Work Hour Tracking",
    bullet1: {
      prefix: "Monitors engine runtime based on ",
      bold: "Vibration Detection.",
    },
    bullet2: {
      suffix: "No dependency on vehicle ignition or external wiring.",
    },
  },
  {
    icon: MapPin,
    iconBg: "bg-sky-500/10 border-sky-300/60",
    iconColor: "text-sky-600",
    accentBar: "from-sky-500 to-blue-600",
    badge: "GPS Telematics",
    title: "Location-Linked Updates",
    bullet1: {
      prefix: "Sends operational data along with ",
      bold: "GPS Coordinates",
      suffix: " every 8 hours.",
    },
    bullet2: {
      suffix: "Visibility into both usage and location, even in remote job sites.",
    },
  },
  {
    icon: BatteryCharging,
    iconBg: "bg-emerald-500/10 border-emerald-300/60",
    iconColor: "text-emerald-600",
    accentBar: "from-emerald-500 to-teal-500",
    badge: "5200mAh Power",
    title: "Long Battery Life",
    bullet1: {
      prefix: "Powered by a ",
      bold: "5200mAh Rechargeable Battery.",
    },
    bullet2: {
      prefix: "Operates for up to ",
      bold: "6 Months",
      suffix: " on a single charge.",
    },
  },
  {
    icon: LayoutDashboard,
    iconBg: "bg-blue-500/10 border-blue-300/60",
    iconColor: "text-blue-600",
    accentBar: "from-blue-600 to-indigo-600",
    badge: "Cloud & API",
    title: "API & Web Dashboard",
    bullet1: {
      bold: "Easy-to-integrate",
      suffix: " API for ERP/FMS platforms.",
    },
    bullet2: {
      suffix: "Access live data via secure web portal for monitoring and reporting.",
    },
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-slate-700/10 border-slate-300/80",
    iconColor: "text-slate-800",
    accentBar: "from-slate-700 to-slate-900",
    badge: "Mining & Heavy-Duty",
    title: "Built for Tough Environments",
    bullet1: {
      prefix: "Ideal for ",
      bold: "Construction and Mining Vehicles.",
    },
    bullet2: {
      suffix: "Dust, vibration, and weather-resistant housing.",
    },
  },
  {
    icon: Radio,
    iconBg: "bg-indigo-500/10 border-indigo-300/60",
    iconColor: "text-indigo-600",
    accentBar: "from-indigo-500 to-violet-600",
    badge: "Zero Wiring",
    title: "Wireless Installation / Vibration Detection",
    bullet1: {
      bold: "Wireless installation",
      suffix: " on dashboard.",
    },
    bullet2: {
      prefix: "Vibration based engine ",
      bold: "ON/OFF detection.",
    },
  },
];

export default function KeyFeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-2">
      {keyFeatures.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={`${card.title}-${idx}`}
            className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Accent Gradient Bar on Hover */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div>
              {/* Card Header (Icon badge + Category pill) */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${card.iconBg}`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100/80 text-slate-600 border border-slate-200/70">
                  {card.badge}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug tracking-tight mb-3">
                {card.title}
              </h3>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed pt-3 border-t border-slate-100 mt-2">
              {/* Bullet 1 */}
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {card.bullet1.prefix}
                  <strong className="font-semibold text-slate-900">{card.bullet1.bold}</strong>
                  {card.bullet1.suffix}
                </span>
              </li>

              {/* Bullet 2 */}
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {card.bullet2.prefix}
                  {card.bullet2.bold && (
                    <strong className="font-semibold text-slate-900">{card.bullet2.bold}</strong>
                  )}
                  {card.bullet2.suffix}
                </span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
