"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Sun,
  BatteryCharging,
  Clock,
  ShieldAlert,
  Factory,
  Truck,
  HelpCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoModal } from "@/context/DemoModalContext";
import { isValidEmail } from "@/lib/validation";

/* ── Solutions Options for Step 1 ── */
const SOLUTIONS = [
  {
    id: "solar-powered",
    title: "Solar Powered Asset Tracker",
    icon: Sun,
    desc: "Autonomous solar-powered asset monitoring",
  },
  {
    id: "rechargeable",
    title: "Rechargeable Asset Tracker",
    icon: BatteryCharging,
    desc: "High-endurance battery GPS tracking",
  },
  {
    id: "work-hour-meter",
    title: "WorkHour Meter",
    icon: Clock,
    desc: "Heavy machinery engine hour & vibration sensor",
  },
  {
    id: "hazardous-cargo",
    title: "Telematics for Hazardous Cargo",
    icon: ShieldAlert,
    desc: "PESO-compliant safety & tanker telemetry",
  },
  {
    id: "cement-mining",
    title: "Telematics for Cement & Mining Industry",
    icon: Factory,
    desc: "Heavy haulage & internal plant logistics",
  },
  {
    id: "fleet-tracking",
    title: "Fleet / Vehicle Tracking",
    icon: Truck,
    desc: "Commercial fleet route, fuel & trip intelligence",
  },
  {
    id: "other",
    title: "Other / Not Sure",
    icon: HelpCircle,
    desc: "Speak with an IoT solutions architect",
  },
];

export default function RequestDemoModal() {
  const { isOpen, closeDemoModal, initialSolution } = useDemoModal();

  // Wizard Step: 1 | 2 | 3 | 4 (Success)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedSolution, setSelectedSolution] = useState<string>("");
  const [assetFleetCount, setAssetFleetCount] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);
  const [marketingConsent, setMarketingConsent] = useState<boolean>(false);

  // Validation & UI State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedSolution(initialSolution || "");
      setAssetFleetCount("");
      setFullName("");
      setCompanyName("");
      setWorkEmail("");
      setPhoneNumber("");
      setPrivacyConsent(false);
      setMarketingConsent(false);
      setErrors({});
      setSubmitError("");
      setIsSubmitting(false);

      // Lock body scroll
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialSolution]);

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) {
        closeDemoModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSubmitting, closeDemoModal]);

  // Step 2 Numeric Input Sanitizer
  const handleFleetCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only accept numeric digits 0-9
    const cleaned = e.target.value.replace(/[^0-9]/g, "");
    setAssetFleetCount(cleaned);

    if (errors.assetFleetCount) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.assetFleetCount;
        return copy;
      });
    }
  };

  // Step 2 Proceed validation
  const handleProceedToStep3 = () => {
    const num = parseInt(assetFleetCount, 10);
    if (!assetFleetCount || isNaN(num) || num < 1) {
      setErrors((prev) => ({
        ...prev,
        assetFleetCount: "Please enter a valid number (minimum 1).",
      }));
      return;
    }
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.assetFleetCount;
      return copy;
    });
    setStep(3);
  };

  // Step 3 Validation & Submit
  const validateStep3 = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!workEmail.trim() || !isValidEmail(workEmail)) {
      errs.workEmail = "Please enter a valid email address (e.g. name@company.com).";
    }

    const cleanedPhone = phoneNumber.replace(/[^0-9]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 8) {
      errs.phoneNumber = "Please enter a valid phone number.";
    }

    if (!privacyConsent) {
      errs.privacyConsent = "Please accept the privacy policy to continue.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    const submissionPayload = {
      formType: "Request a Demo (Modal)",
      solution: selectedSolution,
      assetFleetCount: parseInt(assetFleetCount, 10),
      fullName: fullName.trim(),
      companyName: companyName.trim() || undefined,
      workEmail: workEmail.trim(),
      phoneNumber: `+91 ${phoneNumber.trim()}`,
      privacyConsent,
      marketingConsent,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setStep(4); // Move to Success State
    } catch (err: any) {
      setSubmitError(err?.message || "We couldn't submit your request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm -z-10"
          onClick={() => {
            if (!isSubmitting) closeDemoModal();
          }}
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-[760px] max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35)] border border-slate-200/90 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Technical Radial Glow / Background Texture */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* ══════════════════════════════════════════════════════════
              HEADER AREA
             ══════════════════════════════════════════════════════════ */}
          <div className="relative pt-7 px-6 sm:px-9 pb-5 border-b border-slate-100">
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={closeDemoModal}
              disabled={isSubmitting}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              Sensel Telematics
            </div>

            {/* Title & Subtitle */}
            <h2
              id="demo-modal-title"
              className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug pr-8"
            >
              Ready to see how Sensel can transform your operations?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Tell us what you&apos;re looking for and we&apos;ll help you find the right solution for your business.
            </p>

            {/* Progress Stepper (Hidden on Success) */}
            {step < 4 && (
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] font-extrabold text-white">
                    {step}
                  </span>
                  <span>STEP {step} OF 3</span>
                </div>

                {/* Progress Visual Bar */}
                <div className="flex items-center gap-1.5 w-36 sm:w-48">
                  <div
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      step >= 1 ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      step >= 2 ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      step >= 3 ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════
              SCROLLABLE BODY
             ══════════════════════════════════════════════════════════ */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-9 py-6">
            <AnimatePresence mode="wait">
              {/* ──────────────────────────────────────────────────────
                  STEP 1: Select Solution
                 ────────────────────────────────────────────────────── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      What solution are you looking for?
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Select the primary technology or use case you would like to explore.
                    </p>
                  </div>

                  {/* Solutions Card Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {SOLUTIONS.map((sol) => {
                      const Icon = sol.icon;
                      const isSelected = selectedSolution === sol.title;

                      return (
                        <button
                          key={sol.id}
                          type="button"
                          onClick={() => {
                            setSelectedSolution(sol.title);
                            setErrors({});
                          }}
                          className={`group text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-start gap-3 relative cursor-pointer ${
                            isSelected
                              ? "border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/20 shadow-sm"
                              : "border-slate-200/90 bg-white hover:border-blue-300 hover:bg-slate-50/60 hover:shadow-xs"
                          }`}
                        >
                          <div
                            className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="flex-1 min-w-0 pr-6">
                            <h4
                              className={`text-xs sm:text-sm font-semibold leading-tight ${
                                isSelected ? "text-blue-950 font-bold" : "text-slate-900"
                              }`}
                            >
                              {sol.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                              {sol.desc}
                            </p>
                          </div>

                          {/* Checkmark Indicator */}
                          <div
                            className={`absolute top-3.5 right-3.5 h-5 w-5 rounded-full flex items-center justify-center border transition-all ${
                              isSelected
                                ? "bg-blue-600 border-blue-600 text-white scale-100"
                                : "border-slate-300 bg-white opacity-0 group-hover:opacity-40"
                            }`}
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ──────────────────────────────────────────────────────
                  STEP 2: Asset / Fleet Count
                 ────────────────────────────────────────────────────── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 max-w-lg mx-auto py-4"
                >
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Total Number of Asset/Fleet?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Tell us approximately how many assets or vehicles you would like to monitor.
                    </p>
                  </div>

                  {/* Selected Solution Context Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                    <span className="text-slate-400">Solution:</span>
                    <span className="text-blue-700 font-bold">{selectedSolution}</span>
                  </div>

                  {/* Large Numeric Input Box */}
                  <div className="space-y-2">
                    <div
                      className={`relative rounded-2xl border p-5 transition-all ${
                        errors.assetFleetCount
                          ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20"
                          : "border-slate-200 bg-slate-50/60 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10"
                      }`}
                    >
                      <label
                        htmlFor="assetFleetCount"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
                      >
                        Total Number of Asset/Fleet
                      </label>

                      <div className="flex items-center justify-between gap-4">
                        <input
                          type="text"
                          id="assetFleetCount"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={assetFleetCount}
                          onChange={handleFleetCountChange}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleProceedToStep3();
                            }
                          }}
                          placeholder="e.g. 100"
                          autoFocus
                          className="w-full text-2xl sm:text-4xl font-extrabold text-slate-900 bg-transparent outline-none placeholder:text-slate-300"
                        />
                        <span className="shrink-0 text-xs font-bold text-slate-500 bg-white border border-slate-200/90 px-3.5 py-2 rounded-xl shadow-2xs">
                          Assets / Vehicles
                        </span>
                      </div>
                    </div>

                    {errors.assetFleetCount && (
                      <p className="text-xs font-medium text-red-600 pl-1">
                        {errors.assetFleetCount}
                      </p>
                    )}
                  </div>

                  {/* Quick Preset Badges */}
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Quick select:</span>
                    {[25, 50, 100, 250, 500].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => {
                          setAssetFleetCount(preset.toString());
                          setErrors({});
                        }}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-600 transition-colors font-semibold"
                      >
                        {preset}+
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ──────────────────────────────────────────────────────
                  STEP 3: Contact Information + Consent
                 ────────────────────────────────────────────────────── */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Tell us how we can reach you
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Share your details and our team will get in touch with you.
                    </p>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) {
                              setErrors((prev) => {
                                const c = { ...prev };
                                delete c.fullName;
                                return c;
                              });
                            }
                          }}
                          placeholder="Enter your full name"
                          className={`w-full h-11 px-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/60 placeholder:text-slate-400 outline-none transition-all ${
                            errors.fullName
                              ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20"
                              : "border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Company Name (Optional) */}
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Enter your company name"
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                            htmlFor="workEmail"
                            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            Work Email <span className="text-blue-600">*</span>
                          </label>
                          {workEmail.trim() && isValidEmail(workEmail) && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 animate-in fade-in">
                              <Check className="h-3 w-3" /> Valid Email
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            id="workEmail"
                            value={workEmail}
                            onChange={(e) => {
                              const val = e.target.value;
                              setWorkEmail(val);
                              if (errors.workEmail) {
                                if (isValidEmail(val)) {
                                  setErrors((prev) => {
                                    const c = { ...prev };
                                    delete c.workEmail;
                                    return c;
                                  });
                                }
                              }
                            }}
                            onBlur={() => {
                              if (workEmail.trim() && !isValidEmail(workEmail)) {
                                setErrors((prev) => ({
                                  ...prev,
                                  workEmail: "Please enter a valid email address (e.g. name@company.com).",
                                }));
                              }
                            }}
                            placeholder="name@company.com"
                            className={`w-full h-11 pl-3.5 pr-10 rounded-xl border text-sm text-slate-900 bg-slate-50/60 placeholder:text-slate-400 outline-none transition-all ${
                              errors.workEmail
                                ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20"
                                : workEmail.trim() && isValidEmail(workEmail)
                                ? "border-emerald-500 bg-emerald-50/20 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
                                : "border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                            }`}
                          />
                          {workEmail.trim() && isValidEmail(workEmail) && (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-600">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        {errors.workEmail && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.workEmail}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Phone Number <span className="text-blue-600">*</span>
                        </label>
                        <div
                          className={`flex rounded-xl border bg-slate-50/60 overflow-hidden transition-all ${
                            errors.phoneNumber
                              ? "border-red-400 ring-2 ring-red-400/20"
                              : "border-slate-200 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10"
                          }`}
                        >
                          <span className="inline-flex items-center px-3 bg-slate-100 border-r border-slate-200 text-xs font-bold text-slate-700 select-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value.replace(/[^0-9\s-]/g, ""));
                              if (errors.phoneNumber) {
                                setErrors((prev) => {
                                  const c = { ...prev };
                                  delete c.phoneNumber;
                                  return c;
                                });
                              }
                            }}
                            placeholder="98765 43210"
                            className="w-full h-11 px-3 text-sm text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>

                    {/* Consent Checkboxes */}
                    <div className="pt-2 space-y-3">
                      {/* Checkbox 1: Privacy (REQUIRED) */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer group select-none">
                          <input
                            type="checkbox"
                            checked={privacyConsent}
                            onChange={(e) => {
                              setPrivacyConsent(e.target.checked);
                              if (errors.privacyConsent) {
                                setErrors((prev) => {
                                  const c = { ...prev };
                                  delete c.privacyConsent;
                                  return c;
                                });
                              }
                            }}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
                          />
                          <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                            I accept my personal data shall be processed in accordance with the{" "}
                            <Link
                              href="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 font-semibold underline hover:text-blue-800"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Sensel privacy policy
                            </Link>{" "}
                            which also includes information in relation to my rights.
                          </span>
                        </label>
                        {errors.privacyConsent && (
                          <p className="text-[11px] text-red-600 mt-1 pl-7">
                            {errors.privacyConsent}
                          </p>
                        )}
                      </div>

                      {/* Checkbox 2: Marketing (OPTIONAL, NOT pre-selected) */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer group select-none">
                          <input
                            type="checkbox"
                            checked={marketingConsent}
                            onChange={(e) => setMarketingConsent(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
                          />
                          <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                            I agree that Sensel may contact me about their products and services.
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Subtle Form Summary */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 truncate mr-3">
                        <span className="font-semibold text-slate-900">Solution:</span>
                        <span className="text-blue-700 font-bold truncate">{selectedSolution}</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-semibold text-slate-900">Fleet:</span>
                        <span className="bg-white border border-slate-200 px-2 py-0.5 rounded font-bold text-slate-800">
                          {assetFleetCount} units
                        </span>
                      </div>
                    </div>

                    {submitError && (
                      <p className="text-xs text-red-600 text-center">{submitError}</p>
                    )}
                  </form>
                </motion.div>
              )}

              {/* ──────────────────────────────────────────────────────
                  SUCCESS SCREEN
                 ────────────────────────────────────────────────────── */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center space-y-4 max-w-md mx-auto"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="h-9 w-9 stroke-[2.2]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Thank you for your interest in Sensel!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your demo request has been received successfully. Our team will get in touch with you shortly.
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1.5 text-slate-600 my-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Requested Solution:</span>
                      <span className="font-bold text-slate-900">{selectedSolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Asset/Fleet Scope:</span>
                      <span className="font-bold text-slate-900">{assetFleetCount} units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Contact:</span>
                      <span className="font-bold text-slate-900">{fullName}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={closeDemoModal}
                      className="w-full h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Back to Website
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ══════════════════════════════════════════════════════════
              FOOTER / ACTION BUTTONS (Hidden on Success)
             ══════════════════════════════════════════════════════════ */}
          {step < 4 && (
            <div className="p-5 sm:px-9 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
              {/* Back Button (Shown on Steps 2 and 3) */}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {/* Forward / CTA Buttons */}
              {step === 1 && (
                <button
                  type="button"
                  disabled={!selectedSolution}
                  onClick={() => setStep(2)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 group cursor-pointer ${
                    selectedSolution
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 active:scale-[0.99]"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  disabled={!assetFleetCount || parseInt(assetFleetCount, 10) < 1}
                  onClick={handleProceedToStep3}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 group cursor-pointer ${
                    assetFleetCount && parseInt(assetFleetCount, 10) >= 1
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 active:scale-[0.99]"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !fullName.trim() ||
                    !workEmail.trim() ||
                    !phoneNumber.trim() ||
                    !privacyConsent
                  }
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 group cursor-pointer ${
                    !isSubmitting &&
                    fullName.trim() &&
                    workEmail.trim() &&
                    phoneNumber.trim() &&
                    privacyConsent
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 active:scale-[0.99]"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request My Demo</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
