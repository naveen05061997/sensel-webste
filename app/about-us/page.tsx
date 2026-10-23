import AboutSection from "@/components/sections/AboutSection";
import Link from "next/link";
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from "lucide-react";

export const metadata = {
  title: "About Us | Sensel Intelligent Enterprise IoT",
  description: "Learn about Sensel's mission, values, and vision as India's leading enterprise IoT and telematics innovators.",
};

export default function AboutUsPage() {
  const missionPillars = [
    {
      icon: ShieldCheck,
      badge: "Safety & Compliance",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconColor: "text-emerald-600 bg-emerald-500/10 border-emerald-300/60",
      accentBar: "from-emerald-500 to-teal-500",
      title: "Uncompromising Safety & Regulatory Trust",
      description: "From PESO-compliant tanker telemetry to AIS-140 emergency response, our systems are built to eliminate high-risk hazards, protect driver well-being, and safeguard public roads.",
      highlights: ["PESO & AIS-140 Certified", "Automated Safe-to-Load", "Real-Time SOS Protocols"]
    },
    {
      icon: Cpu,
      badge: "Deep Tech & R&D",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
      iconColor: "text-blue-600 bg-blue-500/10 border-blue-300/60",
      accentBar: "from-blue-600 to-sky-500",
      title: "In-House Indigenous Engineering",
      description: "We design our own ruggedized hardware, program proprietary low-power firmware, and orchestrate scalable cloud platforms — ensuring complete data sovereignty and zero reliance on imported black boxes.",
      highlights: ["Custom PCB & Firmware", "Indigenous Indian R&D", "Zero-Drift Sensor Fusion"]
    },
    {
      icon: TrendingUp,
      badge: "Enterprise Impact",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
      iconColor: "text-amber-600 bg-amber-500/10 border-amber-300/60",
      accentBar: "from-amber-500 to-orange-500",
      title: "Measurable ROI & Zero-Loss Operations",
      description: "We turn complex vibration, GPS, and CAN-bus telemetry into actionable financial clarity — reducing engine idle waste, preventing fuel theft, and maximizing heavy machinery lifecycle utilization.",
      highlights: ["Turnaround Time Analytics", "Fuel Theft Eradication", "Condition-Based Up-Time"]
    }
  ];

  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════════════
          HERO & OUR MISSION SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 via-white to-white">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Ambient lighting glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/10 via-amber-400/10 to-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Badge & Main Title */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <Compass className="w-4 h-4 text-primary" />
              Our Purpose &amp; Core Mission
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
              Engineering a Safer, Smarter &amp; More Accountable Industrial World.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Building and deploying <strong className="font-semibold text-slate-900">reliable, safe, and feature-rich IoT telematics</strong> of the highest global standards — safeguarding mission-critical assets, protecting lives on the road, and delivering undeniable return on investment for our enterprise partners.
            </p>

            {/* Quick Trust Badges Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-6 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                15+ Years Pioneering IoT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                AIS-140 &amp; PESO Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% In-House Indigenous R&amp;D
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Over 1,000,000 Assets Monitored
              </span>
            </div>
          </div>

          {/* 3 Core Mission Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14 sm:mb-16">
            {missionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${pillar.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${pillar.badgeColor}`}>
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug tracking-tight mb-3.5">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights Micro-list */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Key Commitments</p>
                    <ul className="space-y-1.5">
                      {pillar.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inspirational Vision Banner / Quote Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-7 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Guiding Philosophy
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  &ldquo;Technology is only as good as the trust it earns in the field.&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                  Every device we build and every algorithm we deploy is engineered with one non-negotiable metric: absolute dependability under India&apos;s harshest physical and operational environments.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold text-sm px-6 py-3.5 shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore Our Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXISTING ABOUT SECTION & DASHBOARD PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <AboutSection showButton={false} className="pb-8 sm:pb-10 lg:pb-12" />
      
      {/* ═══════════════════════════════════════════════════════════════
          ENTERPRISE TRACK RECORD & IMPACT STATS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20 lg:pb-24">
         <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Proven Enterprise Footprint</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Scale You Can Rely On</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
              <div className="text-5xl font-extrabold text-primary mb-3">15+</div>
              <h4 className="text-lg font-bold text-slate-900 mb-1.5">Years of Excellence</h4>
              <p className="text-sm text-slate-600">Pioneering indigenous IoT and telematics across India.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
              <div className="text-5xl font-extrabold text-primary mb-3">1M+</div>
              <h4 className="text-lg font-bold text-slate-900 mb-1.5">Assets Tracked</h4>
              <p className="text-sm text-slate-600">Managing mission-critical fleet and stationary assets 24/7.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
              <div className="text-5xl font-extrabold text-primary mb-3">500+</div>
              <h4 className="text-lg font-bold text-slate-900 mb-1.5">Enterprise Clients</h4>
              <p className="text-sm text-slate-600">Trusted by India&apos;s leading conglomerates, mines, and fleets.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
