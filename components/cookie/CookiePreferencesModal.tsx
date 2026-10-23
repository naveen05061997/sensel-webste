"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function CookiePreferencesModal() {
  const {
    showPreferences,
    closePreferences,
    analytics,
    marketing,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  // Local state for checkboxes while modal is open
  const [localAnalytics, setLocalAnalytics] = useState(analytics);
  const [localMarketing, setLocalMarketing] = useState(marketing);

  // Sync state whenever modal opens
  useEffect(() => {
    if (showPreferences) {
      setLocalAnalytics(analytics);
      setLocalMarketing(marketing);
    }
  }, [showPreferences, analytics, marketing]);

  // Trap focus and handle escape
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showPreferences) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePreferences();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreferences, closePreferences]);

  const handleSave = () => {
    savePreferences(localAnalytics, localMarketing);
  };

  return (
    <AnimatePresence>
      {showPreferences && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
        >
          {/* Backdrop click to dismiss */}
          <div className="absolute inset-0" onClick={closePreferences} />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              relative z-10 w-full max-w-[540px]
              bg-slate-950 border border-white/10
              rounded-2xl shadow-2xl p-6 text-slate-300
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <h2 id="cookie-preferences-title" className="text-lg font-bold text-white">
                  Cookie Preferences
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage which cookies you allow on this device. You can update these settings anytime.
                </p>
              </div>
              <button
                type="button"
                onClick={closePreferences}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close preferences"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Category rows */}
            <div className="space-y-4 py-5 border-b border-white/10 text-xs">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/5">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Essential Cookies</span>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      Always Active
                    </span>
                  </div>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    Necessary for core website functionality, security, network management, and accessibility. These cannot be disabled.
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400">
                  <Check className="h-4 w-4" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/5">
                <div className="min-w-0">
                  <span className="font-semibold text-white">Analytics Cookies</span>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    Help us understand how visitors interact with the site, measure traffic sources, and improve content performance.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={localAnalytics}
                    onChange={(e) => setLocalAnalytics(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle analytics cookies"
                  />
                  <div
                    className="
                      w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer
                      peer-checked:after:translate-x-full peer-checked:after:border-white
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                      peer-checked:bg-primary
                    "
                  />
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/5">
                <div className="min-w-0">
                  <span className="font-semibold text-white">Marketing Cookies</span>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    Used to deliver relevant advertisements and track campaign effectiveness across channels.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={localMarketing}
                    onChange={(e) => setLocalMarketing(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle marketing cookies"
                  />
                  <div
                    className="
                      w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer
                      peer-checked:after:translate-x-full peer-checked:after:border-white
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                      peer-checked:bg-primary
                    "
                  />
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="
                  text-xs font-medium text-slate-400 hover:text-white
                  underline underline-offset-2
                  text-center py-2 transition-colors
                "
              >
                Reject Non-Essential
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="
                    flex-1 sm:flex-initial
                    text-xs font-medium text-white
                    border border-white/15 rounded-lg
                    px-4 py-2
                    hover:bg-white/5 transition-colors
                  "
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="
                    flex-1 sm:flex-initial
                    text-xs font-semibold text-white
                    bg-primary rounded-lg
                    px-4 py-2
                    hover:bg-primary/90 transition-all
                  "
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
