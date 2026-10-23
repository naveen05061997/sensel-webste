"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonialData";

/**
 * Customer testimonials carousel — presentation only.
 *
 * Content is passed in via the `testimonials` prop (currently from
 * data/testimonialData.ts) so the source can later be swapped for a CMS
 * such as Sanity without changing this component.
 *
 * Layout: 3 cards on desktop (lg), 2 on tablet (md), 1 on mobile.
 * Uses native CSS scroll-snap → touch swipe, smooth scrolling, no extra deps.
 */

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const GAP_PX = 24; // must match `gap-6` on the track

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const rafRef = useRef<number | null>(null);
  const baseId = useId();

  const count = testimonials?.length ?? 0;
  const [activeIndex, setActiveIndex] = useState(0);
  // Server/first render assumes desktop (3 visible); corrected after mount.
  const [pageCount, setPageCount] = useState(Math.max(1, count - 2));

  /* ── Measure track: how many cards fit, how many positions, which is active ── */
  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    const step = first.offsetWidth + GAP_PX;
    const visible = Math.max(1, Math.round((track.clientWidth + GAP_PX) / step));
    const pages = Math.max(1, count - visible + 1);
    const index = Math.min(pages - 1, Math.max(0, Math.round(track.scrollLeft / step)));

    setPageCount(pages);
    setActiveIndex(index);
  }, [count]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  const onScroll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(measure);
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const clamped = Math.min(pageCount - 1, Math.max(0, index));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: clamped * (first.offsetWidth + GAP_PX),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(activeIndex + 1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(activeIndex - 1); }
  };

  if (count === 0) return null;

  const showControls = pageCount > 1;
  const headingId = `${baseId}-heading`;
  const trackId = `${baseId}-track`;

  return (
    <section aria-labelledby={headingId} className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Customer Stories
          </p>
          <h2 id={headingId} className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600">
            Real-world experiences from businesses using SENSEL telematics solutions
            to improve visibility, efficiency and control.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={headingId}
          className="mx-auto max-w-6xl"
        >
          <ul
            ref={trackRef}
            id={trackId}
            tabIndex={0}
            onScroll={onScroll}
            onKeyDown={onKeyDown}
            aria-label="Customer testimonials. Use left and right arrow keys to browse."
            className="-my-3 flex snap-x snap-mandatory gap-6 overflow-x-auto motion-safe:scroll-smooth py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            {testimonials.map((t, i) => (
              <li
                key={`${i}-${t.company}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                className="flex w-full shrink-0 snap-start md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>

          {/* ── Controls: ← ● ○ ○ → ── */}
          {showControls && (
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-controls={trackId}
                aria-label="Previous testimonial"
                className={navBtn}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-controls={trackId}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                    className="group rounded-full p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className={cn(
                        "block h-2 rounded-full transition-all duration-300",
                        i === activeIndex ? "w-6 bg-primary" : "w-2 bg-slate-300 group-hover:bg-slate-400"
                      )}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex >= pageCount - 1}
                aria-controls={trackId}
                aria-label="Next testimonial"
                className={navBtn}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const navBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 " +
  "transition-colors duration-200 hover:border-primary hover:text-primary " +
  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/* ─────────────────────────────────────────────────────────────────────────── */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const rating = Math.max(0, Math.min(5, testimonial.rating));

  return (
    <figure className="relative flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
      {/* Decorative quote mark */}
      <Quote
        aria-hidden="true"
        className="absolute right-7 top-7 h-9 w-9 text-primary/10"
        strokeWidth={1.5}
      />

      {/* ★★★★★ (supports half stars e.g. 4.5) */}
      <div className="mb-6 flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const fillAmount = Math.max(0, Math.min(1, rating - i));
          if (fillAmount >= 1) {
            return (
              <Star
                key={i}
                aria-hidden="true"
                className="h-[18px] w-[18px] fill-current text-secondary"
              />
            );
          }
          if (fillAmount >= 0.5) {
            return (
              <div key={i} className="relative h-[18px] w-[18px]">
                <Star
                  aria-hidden="true"
                  className="absolute inset-0 h-[18px] w-[18px] fill-current text-slate-200"
                />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star
                    aria-hidden="true"
                    className="h-[18px] w-[18px] fill-current text-secondary"
                  />
                </div>
              </div>
            );
          }
          return (
            <Star
              key={i}
              aria-hidden="true"
              className="h-[18px] w-[18px] fill-current text-slate-200"
            />
          );
        })}
      </div>

      {/* Review */}
      <blockquote className="flex-1">
        {testimonial.title && (
          <h3 className="mb-3 text-base font-bold text-slate-900 sm:text-lg leading-snug">
            {testimonial.title}
          </h3>
        )}
        <p className="text-[15px] leading-[1.75] text-slate-700 sm:text-base whitespace-pre-line">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <figcaption className="mt-8 border-t border-slate-100 pt-6">
        <p className="font-semibold text-slate-900">{testimonial.name}</p>
        <p className="mt-0.5 text-sm text-slate-500">{testimonial.designation}</p>
        <p className="mt-1 text-sm font-semibold text-primary">{testimonial.company}</p>
      </figcaption>
    </figure>
  );
}
