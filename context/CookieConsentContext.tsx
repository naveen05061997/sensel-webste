"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "sensel_cookie_consent";
const CONSENT_VERSION = "1.0";

interface ConsentState {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

interface CookieConsentContextValue {
  hasConsented: boolean;
  analytics: boolean;
  marketing: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean, marketing: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Read persisted consent on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: ConsentState = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setHasConsented(true);
          setAnalytics(parsed.analytics);
          setMarketing(parsed.marketing);
          return;
        }
      }
    } catch {
      // Ignore parse errors
    }
    // No valid stored consent — show banner after a short delay
    const timer = setTimeout(() => setShowBanner(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const persist = (analyticsVal: boolean, marketingVal: boolean) => {
    const state: ConsentState = {
      essential: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Quota exceeded or private mode — continue silently
    }
    setAnalytics(analyticsVal);
    setMarketing(marketingVal);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAll = () => persist(true, true);
  const rejectNonEssential = () => persist(false, false);
  const savePreferences = (a: boolean, m: boolean) => persist(a, m);

  const openPreferences = () => setShowPreferences(true);
  const closePreferences = () => setShowPreferences(false);

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsented,
        analytics,
        marketing,
        showBanner,
        showPreferences,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return ctx;
}
