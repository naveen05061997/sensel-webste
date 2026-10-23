"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, Loader2, Cpu, ArrowRight, ShieldCheck, Building2, User, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnterpriseModal } from "@/context/EnterpriseModalContext";
import { isValidEmail } from "@/lib/validation";

export default function EnterpriseIntegrationModal() {
  const { isOpen, closeEnterpriseModal, solutionName } = useEnterpriseModal();

  // Form State
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Reset form when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setFullName("");
      setWorkEmail("");
      setPhoneNumber("");
      setCompanyName("");
      setErrors({});
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) {
        closeEnterpriseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSubmitting, closeEnterpriseModal]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!workEmail.trim()) {
      newErrors.workEmail = "Please enter your work email.";
    } else if (!isValidEmail(workEmail)) {
      newErrors.workEmail = "Please enter a valid email address (e.g. name@company.com).";
    }

    const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, "");
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    } else if (!/^\+?[0-9]{10,14}$/.test(cleanPhone)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        formType: "Talk to Engineering Team (Modal)",
        fullName: fullName.trim(),
        workEmail: workEmail.trim(),
        phoneNumber: phoneNumber.trim(),
        companyName: companyName.trim() || undefined,
        solution: solutionName || "General Custom Integration",
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrors({ form: err?.message || "Something went wrong. Please try again." });
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
        aria-labelledby="enterprise-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm -z-10"
          onClick={() => {
            if (!isSubmitting) closeEnterpriseModal();
          }}
        />

        {/* Modal Card */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-[560px] bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35)] border border-slate-200/90 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Close Button */}
          <button
            ref={closeBtnRef}
            onClick={closeEnterpriseModal}
            disabled={isSubmitting}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-20 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            /* ══════════════════════════════════════════════════════════
               FORM VIEW
               ══════════════════════════════════════════════════════════ */
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-primary text-xs font-semibold uppercase tracking-wider mb-2.5">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  Enterprise Integration
                </div>

                <h2
                  id="enterprise-modal-title"
                  className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug pr-8"
                >
                  Talk to Our Engineering Team
                </h2>
                
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss custom hardware protocols, CAN-bus integration, ERP webhooks, or bespoke enterprise telematics.
                </p>

                {/* Auto-detected Solution Context Pill */}
                {solutionName && (
                  <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium">
                    <span className="text-slate-400 font-normal">Related Solution:</span>
                    <strong className="text-slate-900 font-semibold">{solutionName}</strong>
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="ent-fullName" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="ent-fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full rounded-xl border pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? "border-red-400 focus:ring-red-300"
                          : "border-slate-300 focus:border-primary focus:ring-primary/20"
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Work Email */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="ent-workEmail" className="block text-xs sm:text-sm font-semibold text-slate-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    {workEmail.trim() && isValidEmail(workEmail) && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Valid Email
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      id="ent-workEmail"
                      type="email"
                      value={workEmail}
                      onChange={(e) => {
                        const val = e.target.value;
                        setWorkEmail(val);
                        if (errors.workEmail && isValidEmail(val)) {
                          setErrors((prev) => ({ ...prev, workEmail: "" }));
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
                      className={`w-full rounded-xl border pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.workEmail
                          ? "border-red-400 focus:ring-red-300"
                          : workEmail.trim() && isValidEmail(workEmail)
                          ? "border-emerald-500 bg-emerald-50/10 focus:border-emerald-600 focus:ring-emerald-500/20"
                          : "border-slate-300 focus:border-primary focus:ring-primary/20"
                      }`}
                      disabled={isSubmitting}
                    />
                    {workEmail.trim() && isValidEmail(workEmail) && (
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  {errors.workEmail && <p className="text-xs text-red-500 mt-1 font-medium">{errors.workEmail}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="ent-phoneNumber" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      id="ent-phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                      }}
                      placeholder="e.g. 98765 43210"
                      className={`w-full rounded-xl border pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.phoneNumber
                          ? "border-red-400 focus:ring-red-300"
                          : "border-slate-300 focus:border-primary focus:ring-primary/20"
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="ent-companyName" className="block text-xs sm:text-sm font-semibold text-slate-700">
                      Company Name
                    </label>
                    <span className="text-xs text-slate-400 font-normal">Optional</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <input
                      id="ent-companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Logistics Pvt Ltd"
                      className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-white transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {errors.form && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                    {errors.form}
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold text-sm sm:text-base py-3.5 px-6 shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting to Engineering...
                      </>
                    ) : (
                      <>
                        Submit to Engineering Team
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Your technical details are kept strictly confidential.</span>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            /* ══════════════════════════════════════════════════════════
               SUCCESS VIEW
               ══════════════════════════════════════════════════════════ */
            <div className="p-8 sm:p-10 text-center flex flex-col items-center">
              {/* Checkmark Animation Icon */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              {/* Exact Requested Message */}
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
                Thanks for connecting with us!
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                Our engineering team will be connect you in 24 hours.
              </p>

              {/* Inquiry Summary Box */}
              <div className="w-full max-w-sm rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Name:</span>
                  <span className="font-semibold text-slate-800">{fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-semibold text-slate-800">{workEmail}</span>
                </div>
                {companyName && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-semibold text-slate-800">{companyName}</span>
                  </div>
                )}
                {solutionName && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Solution:</span>
                    <span className="font-semibold text-primary">{solutionName}</span>
                  </div>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeEnterpriseModal}
                className="w-full max-w-sm inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-sm py-3 px-6 hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
