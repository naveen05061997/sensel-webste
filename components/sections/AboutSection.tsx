import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  showButton?: boolean;
  className?: string;
}

export default function AboutSection({ showButton = true, className }: AboutSectionProps) {
  const points = [
    "End-to-end telematics & IoT solutions",
    "In-house R&D and hardware design",
    "Nationwide product integration and support",
    "Measurable ROI across the value chain"
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-slate-50 overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              One of India's most trusted and innovative IoT solution providers.
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are forward-thinking providers of end-to-end telematics and IoT solutions. Our innovative offerings are designed to address specific business challenges, consistently delivering measurable ROI for our customers.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              What sets us apart is our full-stack capability — from in-house R&amp;D and hardware design to software development, product integration, and nationwide support.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
            
            {showButton && (
              <Link 
                href="/about-us"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-primary text-primary hover:bg-primary/5 h-12 px-8 py-3"
              >
                More About Sensel
              </Link>
            )}
          </div>
          
          {/* Dashboard Visual */}
          <div className="order-1 lg:order-2 relative py-10 px-6 lg:scale-[1.1] lg:origin-center">

            {/* Ambient glow layers */}
            <div className="absolute -inset-6 bg-primary/15 rounded-[2.5rem] transform rotate-2 scale-105 -z-10 blur-2xl" />
            <div className="absolute -inset-6 bg-blue-400/10 rounded-[2.5rem] transform -rotate-1 scale-105 -z-10 blur-3xl" />

            {/* Browser chrome wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.20)] ring-1 ring-slate-200 bg-[#0f111a]">
              
              {/* Fake browser top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1d2e] border-b border-white/[0.08]">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <div className="ml-3 flex-1 bg-white/[0.06] rounded-md px-3 py-1 text-[11px] text-white/40 font-mono tracking-tight">
                  🔒 ui.mysensel.com &nbsp;·&nbsp; Fleet Overview
                </div>
              </div>

              {/* Actual dashboard image */}
              <img
                src="/sensel-dashboard.png"
                alt="Sensel Telematics Fleet Dashboard — live map and telemetry logs"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating badge — top right: Live Vehicles */}
            <div className="absolute top-4 -right-2 lg:-right-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100 z-10">
              <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <span className="text-lg">📡</span>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-widest leading-none mb-0.5">Live Vehicles</p>
                <p className="text-xl font-extrabold text-slate-900 leading-tight">10 / 12</p>
              </div>
            </div>

            {/* Floating badge — bottom left: Avg Speed */}
            <div className="absolute bottom-4 -left-2 lg:-left-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100 z-10">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-widest leading-none mb-0.5">Avg Speed</p>
                <p className="text-xl font-extrabold text-slate-900 leading-tight">48 km/h</p>
              </div>
            </div>

            {/* Floating live pill — top left */}
            <div className="absolute top-[4.5rem] -left-2 lg:-left-4 bg-slate-900 text-white rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[12px] font-semibold shadow-lg z-10">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Live Telemetry
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
