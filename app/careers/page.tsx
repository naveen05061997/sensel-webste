import Link from "next/link";
import { 
  Briefcase, 
  Linkedin, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Award,
  Layers,
  MapPin,
  Heart
} from "lucide-react";

export const metadata = {
  title: "Careers | Sensel Intelligent Enterprise IoT",
  description: "Learn about life at Sensel Telematics, our engineering culture, and career opportunities in enterprise IoT and telematics.",
};

const culturePillars = [
  {
    icon: Cpu,
    title: "Full-Stack Hardware & Cloud Ownership",
    desc: "We don't resell white-label imports. From schematic and PCB design to custom low-level C/C++ firmware and distributed cloud analytics, our engineers own the entire technology stack from silicon to screen.",
    badge: "100% In-House R&D"
  },
  {
    icon: ShieldCheck,
    title: "Mission-Critical Real-World Impact",
    desc: "Our IoT telematics units monitor hazardous chemical tankers, heavy mining machinery, and temperature-sensitive cold chain cargo across millions of kilometers, where reliability and safety are non-negotiable.",
    badge: "Zero-Failure Systems"
  },
  {
    icon: Zap,
    title: "High-Ownership, Low Bureaucracy",
    desc: "We believe in empowering engineers with direct ownership. Small, agile teams work closely across disciplines, moving quickly from breadboard prototypes to field testing on live customer fleets.",
    badge: "Agile Innovation"
  },
  {
    icon: Award,
    title: "Recognized Industry Leadership",
    desc: "With over 15+ years of operational stability and Frost & Sullivan accolades, Sensel offers the nimbleness of an innovation lab backed by enterprise-scale customer adoption across India.",
    badge: "Industry Pioneer"
  }
];

const workPrinciples = [
  {
    title: "Engineering Rigor First",
    desc: "We engineer hardware and write software designed to thrive in 60°C desert heat, corrosive fertilizer plants, and off-grid mountain corridors with zero data loss."
  },
  {
    title: "Cross-Disciplinary Synergy",
    desc: "Embedded firmware developers, cloud backend architects, and field hardware technicians collaborate daily, breaking silos to build cohesive IoT systems."
  },
  {
    title: "Customer-Centric Innovation",
    desc: "Every sensor payload we integrate and every feature we deploy solves concrete operational challenges for India's largest infrastructure and logistics enterprises."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-primary">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (DARK ENTERPRISE TECH)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#070b14] text-white pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 border-b border-slate-800">
        
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-primary font-semibold">Careers</span>
          </div>

          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase">
                <Users className="h-3.5 w-3.5" />
                Life at Sensel Telematics
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                Bengaluru R&amp;D Innovation Hub
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Build the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">
                Intelligent Enterprise IoT
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              We are a team of embedded engineers, hardware designers, and cloud architects pioneering mission-critical telematics infrastructure that powers India&apos;s most vital supply chains and heavy industries.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-extrabold text-white">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">In-House R&amp;D</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">50,000+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Deployed Units</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400">15+ Yrs</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Proven Track Record</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400">Bengaluru</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Hardware Lab</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CURRENT OPENINGS SECTION (NO ACTIVE ROLES - BEAUTIFIED)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="openings" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase mb-3">
              <Briefcase className="h-3.5 w-3.5" />
              Opportunities at Sensel
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Current Openings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              We periodically recruit talented problem solvers passionate about IoT hardware, embedded firmware, and enterprise cloud telematics.
            </p>
          </div>

          {/* Premium Status Card: No Active Roles Currently */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0" />
            
            <div className="relative z-10 max-w-xl mx-auto space-y-5">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-700 px-3.5 py-1 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Team Currently Fully Staffed
              </div>

              {/* Icon Container */}
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-inner">
                <Briefcase className="h-8 w-8" />
              </div>

              {/* Title & Body */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  No Active Vacancies Right Now
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3">
                  Our engineering, operations, and product teams are currently fully staffed, and we do not have any open positions available at this time.
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 text-left space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Looking ahead:</span>
                </div>
                <p>
                  As our telematics deployments expand across logistics, mining, and cold-chain sectors, we periodically open new roles in <strong>Embedded C/C++ Firmware, Hardware PCB Design, Cloud Architecture, and Enterprise Technical Sales</strong>.
                </p>
                <p className="text-slate-500">
                  Please check back on this page periodically or follow our official company page on LinkedIn to stay updated on future openings and milestones.
                </p>
              </div>

              {/* Action Buttons: (Send us your Resume button is completely removed as requested) */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/company/senseltelematics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <Linkedin className="h-4 w-4 text-[#0077b5]" />
                  <span>Follow Us on LinkedIn</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-primary text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Explore What We Build</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY BUILD AT SENSEL (CULTURE & PILLARS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase mb-3">
              <Heart className="h-3.5 w-3.5 text-primary" />
              Our Culture &amp; Mission
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why Engineers &amp; Innovators Choose Sensel
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We combine deep scientific research with practical field implementation to build hardware and cloud platforms that make India&apos;s roads safer and industries more productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-7 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT WE VALUE (OUR WORK PRINCIPLES)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              The Principles That Guide Our Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              How our teams approach complex hardware and software engineering challenges every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workPrinciples.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXPLORE OUR TECHNOLOGY BANNER
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
            Curious About Our Technology?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Explore our portfolio of rugged IoT hardware devices and cloud platforms to see the solutions our engineering team brings to life every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Explore Products &amp; Platforms</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer"
            >
              <span>Discover Solutions</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
