"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";

export default function CookieSettingsButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="hover:text-primary transition-colors text-left"
    >
      Cookie Settings
    </button>
  );
}
