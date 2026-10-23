"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/faqData";

/**
 * FAQ section — presentation only.
 *
 * Content is NOT stored here. It is passed in through the `faqs` prop so the
 * source can be swapped (local file today, Sanity CMS later) without touching
 * this component. Current content lives in: data/faqData.ts
 */

type FAQProps = {
  faqs: FaqItem[];
  /** How many FAQs are visible before "View All FAQs" is clicked. */
  initialVisible?: number;
};

export default function FAQ({ faqs, initialVisible = 7 }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const baseId = useId();

  if (!faqs || faqs.length === 0) return null;

  const hasMore = faqs.length > initialVisible;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialVisible);
  const listId = `${baseId}-faq-list`;

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  const toggleShowAll = () => {
    // Collapsing: close any open FAQ that is about to be hidden.
    if (showAll && openIndex !== null && openIndex >= initialVisible) {
      setOpenIndex(null);
    }
    setShowAll(!showAll);
  };

  return (
    <section
      aria-labelledby={`${baseId}-heading`}
      className="relative overflow-hidden bg-[#0b0d12] py-20 lg:py-28 border-b border-white/[0.06]"
    >
      {/* ── Ambient brand glow (SENSEL blue in place of the reference purple) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/4 rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-[100px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ── Left: Heading ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <h2
              id={`${baseId}-heading`}
              className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              FAQs
            </h2>
            <p className="mt-5 text-2xl font-bold leading-snug text-blue-400 sm:text-3xl">
              Got questions?
              <br />
              We&apos;ve got answers.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
              Find answers to common questions about SENSEL telematics, GPS
              tracking and connected asset solutions.
            </p>
          </div>

          {/* ── Right: Accordion ── */}
          <div className="lg:col-span-7">
            <ul id={listId} className="space-y-3">
              {visibleFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${baseId}-faq-btn-${index}`;
                const panelId = `${baseId}-faq-panel-${index}`;
                const isRevealed = index >= initialVisible;

                return (
                  <li
                    key={`${index}-${faq.question}`}
                    className={cn(
                      "rounded-xl border backdrop-blur-sm transition-colors duration-300",
                      isOpen
                        ? "border-white/20 bg-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                      isRevealed && "animate-in fade-in slide-in-from-bottom-2 duration-300"
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d12]"
                      >
                        <span className="text-[15px] font-semibold leading-snug text-white sm:text-base">
                          {faq.question}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ease-out",
                            isOpen && "rotate-180 text-blue-400"
                          )}
                        />
                      </button>
                    </h3>

                    {/* Smooth height + opacity via grid-rows 0fr → 1fr (no JS measuring, SSR-safe) */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out",
                        isOpen
                          ? "visible grid-rows-[1fr] opacity-100"
                          : "invisible grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6 sm:text-[15px]">
                          {faq.answer.split(/\n\s*\n/).map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {hasMore && (
              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={toggleShowAll}
                  aria-expanded={showAll}
                  aria-controls={listId}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d12]"
                >
                  {showAll ? "Show Less" : `View All FAQs (${faqs.length})`}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      showAll && "rotate-180"
                    )}
                  />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * SEO helper (not used yet).
 * Builds schema.org FAQPage JSON-LD from the SAME data that is rendered, so
 * structured data always matches visible content. To enable later, render in
 * the page:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(faqData)) }} />
 * Only enable once the dummy content has been replaced with real FAQs.
 */
export function getFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
