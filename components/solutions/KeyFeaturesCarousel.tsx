"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeatureCard {
  icon: string;
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
    icon: "🔧",
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
    icon: "🌎",
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
    icon: "🔋",
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
    icon: "🌐",
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
    icon: "🛠️",
    title: "Built for Tough Environments",
    bullet1: {
      prefix: "Proven performance in field tests on ",
      bold: "Construction and Mining Vehicles.",
    },
    bullet2: {
      suffix: "Dust, vibration, and weather-resistant housing.",
    },
  },
];

export default function KeyFeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = keyFeatures.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const [isPaused, setIsPaused] = useState(false);

  // Auto-play every 5 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // We display 3 cards in view for desktop, aligned cyclically:
  // e.g. at index 0: cards [3, 4, 0] -> API & Web Dashboard, Built for Tough Environments, Automatic Work Hour Tracking
  // at index 3: cards [1, 2, 3] -> Location-Linked Updates, Long Battery Life, API & Web Dashboard
  const getVisibleCards = () => {
    return [
      keyFeatures[(activeIndex - 2 + total * 2) % total],
      keyFeatures[(activeIndex - 1 + total) % total],
      keyFeatures[activeIndex],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div 
      className="relative py-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous feature"
        className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next feature"
        className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 px-1 sm:px-2">
        {visibleCards.map((card, idx) => (
          <div 
            key={`${card.title}-${idx}`} 
            className={`flex-col transition-all duration-300 ${
              idx === 2 ? "flex" : "hidden md:flex"
            }`}
          >
            {/* Card Header (Icon + Orange Title) */}
            <div className="flex items-center gap-1.5 mb-2.5 min-h-[28px]">
              <span className="text-lg leading-none shrink-0">{card.icon}</span>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#ff7a00] leading-tight">
                {card.title}
              </h3>
            </div>

            {/* Gradient Card Body */}
            <div
              className="flex-1 rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/60 min-h-[170px] sm:min-h-[185px] flex flex-col justify-start"
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #f6f5fb 32%, #9b91c8 100%)",
              }}
            >
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800 leading-snug">
                {/* Bullet 1 */}
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                  <span>
                    {card.bullet1.prefix}
                    <strong className="font-bold text-slate-900">{card.bullet1.bold}</strong>
                    {card.bullet1.suffix}
                  </span>
                </li>

                {/* Bullet 2 */}
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mt-1.5 mr-2 shrink-0" />
                  <span>
                    {card.bullet2.prefix}
                    {card.bullet2.bold && (
                      <strong className="font-bold text-slate-900">{card.bullet2.bold}</strong>
                    )}
                    {card.bullet2.suffix}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {keyFeatures.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? "w-2.5 h-2.5 bg-slate-900 scale-110"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
