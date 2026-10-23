"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ApplicationItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

const applications: ApplicationItem[] = [
  {
    id: "logistics-supply-chain",
    badge: "Logistics & Freight",
    title: "Logistics & Supply Chain",
    description:
      "Track the movement of crates, cargo, and high-value shipments across long distances — even when they’re not powered. The rechargeable asset tracker ensures real-time location visibility, secure handling, and optimized route compliance for better SLA performance and reduced losses.",
    image: "/solution/image1.png",
    bullets: [
      "Long-distance visibility for unpowered crates & cargo",
      "Route compliance & SLA performance optimization",
      "Secure handling with movement and tamper alerts",
    ],
  },
  {
    id: "cold-chain-monitoring",
    badge: "Pharma & Perishables",
    title: "Cold Chain Monitoring",
    description:
      "With optional temperature sensor integration, the tracker becomes a perfect fit for cold chain applications — such as monitoring vaccines, perishable goods, or sensitive chemicals. It ensures safe handling conditions and timely alerts in case of deviations, all while conserving battery life.",
    image: "/solution/image2.png",
    bullets: [
      "Optional external temperature sensor integration",
      "Safe handling for vaccines, pharmaceuticals & perishables",
      "Instant excursion alerts with intelligent power conservation",
    ],
  },
  {
    id: "laboratory-sample-transportation",
    badge: "Healthcare & Diagnostics",
    title: "Laboratory Sample Transportation",
    description:
      "Used by healthcare and pharma sectors, the tracker helps maintain audit trails of lab samples, blood units, or vaccines in transit. BLE and Wi-Fi support improve accuracy inside medical facilities, and motion alerts enhance handling compliance.",
    image: "/solution/image3.png",
    bullets: [
      "Complete chain-of-custody audit trails for lab specimens",
      "Enhanced indoor positioning via BLE and Wi-Fi sniffing",
      "Motion-triggered alerts to enforce handling protocols",
    ],
  },
  {
    id: "event-exhibition-logistics",
    badge: "Arts & High-Value Gear",
    title: "Event & Exhibition Logistics",
    description:
      "Monitor high-value or custom-built gear during event logistics, especially when equipment is moved between cities or venues. Dynamic update configuration allows you to increase frequency during movement and conserve battery during idle periods.",
    image: "/solution/image4.png",
    bullets: [
      "End-to-end protection for custom staging, AV gear & fine art",
      "Dynamic reporting: high-frequency transit, eco sleep at venue",
      "Seamless cross-city and multi-venue route monitoring",
    ],
  },
  {
    id: "construction-equipment-management",
    badge: "Construction & Heavy Machinery",
    title: "Construction & Equipment Management",
    description:
      "Track portable tools, generators, or light equipment moved between job sites. With anti-theft motion alerts, you’re instantly notified of unauthorized handling, even in unpowered conditions. Helps improve accountability across subcontractors and shifts.",
    image: "/solution/image5.png",
    bullets: [
      "Rugged tracking for unpowered tools, generators & site machinery",
      "Instant anti-theft motion notifications for unauthorized moves",
      "Accountability across subcontractors, shifts, and worksites",
    ],
  },
  {
    id: "asset-rentals-leasing",
    badge: "Equipment Rental & Leasing",
    title: "Asset Rentals & Leasing",
    description:
      "Perfect for companies dealing with rented items like kiosks, containers, or field-deployed equipment. With its long battery life and cloud-based access, it ensures you know where every rented unit is — and how it’s being used — without user intervention.",
    image: "/solution/image6.png",
    bullets: [
      "Automated field inventory for rented kiosks & containers",
      "Multi-month battery endurance for extended customer lease cycles",
      "Zero-touch remote tracking with instant cloud visibility",
    ],
  },
  {
    id: "remote-utilities-field-assets",
    badge: "Energy & Remote Infrastructure",
    title: "Remote Utilities & Field Assets",
    description:
      "Ideal for assets like solar panels, signal towers, or field pumps in off-grid environments. The device stores data locally during network loss and syncs it once coverage resumes — ensuring no critical data is missed.",
    image: "/solution/image7.png",
    bullets: [
      "Off-grid security for remote solar panels, telecom towers & pumps",
      "Robust local storage buffer during network dead zones",
      "Automatic data synchronization when connectivity resumes",
    ],
  },
];

function ApplicationImageCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/70 group transition-all duration-300 hover:shadow-xl">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-2xl mb-3 text-slate-400">
            📷
          </div>
          <p className="text-sm font-bold text-slate-800">{label}</p>
          <p className="text-xs text-slate-500 mt-1 font-mono bg-white/70 px-2.5 py-1 rounded-md border border-slate-200">
            {src}
          </p>
        </div>
      )}
    </div>
  );
}

export default function RechargeableAssetApplications() {
  return (
    <section
      id="applications"
      className="py-20 md:py-28 bg-white border-t border-slate-200/70 scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-[#ff7a00] border border-orange-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
            Industry Use Cases
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ff7a00] tracking-tight">
            Applications
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Engineered for endurance and precision across non-powered, mobile,
            and remote assets in the most demanding environments.
          </p>
        </div>

        {/* Alternating Application Showcase Cards */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {applications.map((app, index) => {
            // Even index (0, 2, 4, 6): Text on Left, Image on Right
            // Odd index (1, 3, 5): Image on Left, Text on Right
            const isImageLeft = index % 2 === 1;

            return (
              <div
                key={app.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/60 border border-slate-200/70 hover:border-slate-300/90 transition-colors"
              >
                {/* Text Content Column */}
                <div
                  className={`space-y-4 sm:space-y-5 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="inline-flex items-center text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-blue-500/10 text-primary border border-blue-200/60">
                    {app.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] leading-snug tracking-tight">
                    {app.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {app.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div
                  className={`w-full ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <ApplicationImageCard
                    src={app.image}
                    alt={app.title}
                    label={`${app.title} (${app.image.replace("/solution/", "")})`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
