"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieConsent() {
  const { showBanner, showPreferences, acceptAll, rejectNonEssential, openPreferences } =
    useCookieConsent();

  // For dismiss animation we let AnimatePresence handle exit
  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            key="cookie-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            role="region"
            aria-label="Cookie consent"
            className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <div
              className="
                pointer-events-auto
                w-full max-w-[1160px]
                bg-slate-950 border border-white/10
                rounded-2xl shadow-2xl shadow-black/60
                px-6 py-5
                flex flex-col sm:flex-row sm:items-center gap-5
              "
            >
              {/* Icon + text */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/15">
                  <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white mb-1">Your privacy matters</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyse site traffic, and
                    personalise content. By clicking&nbsp;<strong className="text-slate-300">Accept All</strong>, you
                    consent to our use of cookies. You can manage your preferences at any time.{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/cookie-policy"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="
                    text-xs font-medium text-slate-300
                    border border-white/15 rounded-lg
                    px-4 py-2.5
                    hover:bg-white/5 hover:text-white
                    transition-colors whitespace-nowrap
                  "
                  aria-label="Reject non-essential cookies"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="
                    text-xs font-medium text-slate-300
                    border border-white/15 rounded-lg
                    px-4 py-2.5
                    hover:bg-white/5 hover:text-white
                    transition-colors whitespace-nowrap
                  "
                  aria-label="Open cookie settings"
                >
                  Cookie Settings
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="
                    text-xs font-semibold text-white
                    bg-primary rounded-lg
                    px-5 py-2.5
                    hover:bg-primary/90 active:scale-[0.97]
                    transition-all whitespace-nowrap
                  "
                  aria-label="Accept all cookies"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences modal is always mounted to allow footer link to open it */}
      <CookiePreferencesModal />
    </>
  );
}
