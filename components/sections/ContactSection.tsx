"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Loader2, Check } from "lucide-react";
import { isValidEmail } from "@/lib/validation";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      if (name === "email" && isValidEmail(value)) {
        setErrors((prev) => {
          const c = { ...prev };
          delete c.email;
          return c;
        });
      } else if (name !== "email" && value.trim()) {
        setErrors((prev) => {
          const c = { ...prev };
          delete c[name];
          return c;
        });
      }
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com).";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim() || cleanPhone.length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Homepage Contact Us Section",
          fullName: formData.name.trim(),
          workEmail: formData.email.trim(),
          phoneNumber: formData.phone.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err?.message || "Unable to send message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container — centered, max-w-[1200px], rounded-[28px], elevated shadow */}
        <div className="max-w-[1200px] mx-auto bg-white rounded-[28px] overflow-hidden shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12)] border border-slate-200/90 flex flex-col lg:flex-row transition-all duration-300">
          
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: Contact Information (Rich Tech Gradient)
             ══════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[46%] bg-gradient-to-br from-[#081f54] via-[#1a4dc9] to-[#0f308a] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Subtle technical background grid */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="contact-tech-grid"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 28 0 L 0 0 0 28"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.8"
                  />
                  <circle cx="28" cy="0" r="1.2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-tech-grid)" />
            </svg>

            {/* Ambient decorative glowing orbs */}
            <div
              className="absolute -top-24 -left-24 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-28 -right-20 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Top / Main Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Get In Touch
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] text-white">
                Let&apos;s work together
              </h2>

              {/* Supporting Text */}
              <p className="mt-4 text-blue-100/90 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg">
                Get in touch today and receive a complimentary consultation on your telematics and IoT needs.
              </p>

              {/* Contact Information Blocks */}
              <div className="mt-8 lg:mt-10 space-y-4">
                
                {/* CALL US */}
                <a
                  href="tel:+918041693607"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-blue-200 shrink-0 group-hover:scale-105 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200/80 mb-0.5">
                      Call Us
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      +91-80-41693607
                    </span>
                  </div>
                </a>

                {/* EMAIL US */}
                <a
                  href="mailto:info@sensel.in"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-blue-200 shrink-0 group-hover:scale-105 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200/80 mb-0.5">
                      Email Us
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      info@sensel.in
                    </span>
                  </div>
                </a>

                {/* VISIT US */}
                <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-300">
                  <div className="h-11 w-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-blue-200 shrink-0 shadow-sm mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200/80 mb-1">
                      Visit Us
                    </span>
                    <address className="not-italic text-sm sm:text-[15px] text-blue-100/90 leading-relaxed font-normal">
                      Ground Floor, IndiQube Omega,<br />
                      Maruti Emerald, Brookefield,<br />
                      ITPL main road, Bangalore – 560037
                    </address>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Accent Note */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-blue-200/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Pan-India field support &amp; consultation
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: Contact Form (Clean Premium Form Area)
             ══════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[54%] bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Send us a message
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
                Fill out the form below and our telematics engineering team will reach out to you.
              </p>
            </div>

            {/* Submission State Banner */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-1">Thank You!</h4>
                <p className="text-sm text-emerald-700 leading-relaxed max-w-sm mx-auto">
                  Your request has been received. Our telematics consultation team will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "" });
                  }}
                  className="mt-4 text-xs font-semibold text-emerald-800 underline hover:text-emerald-900 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Full Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-[50px] px-4 rounded-xl border text-sm sm:text-base outline-none transition-all duration-200 ${
                      errors.name
                        ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20 text-slate-900"
                        : "border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    {formData.email.trim() && isValidEmail(formData.email) && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                        <Check className="h-3.5 w-3.5" /> Valid Email
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => {
                        if (formData.email.trim() && !isValidEmail(formData.email)) {
                          setErrors((prev) => ({
                            ...prev,
                            email: "Please enter a valid email address (e.g. name@company.com).",
                          }));
                        }
                      }}
                      className={`w-full h-[50px] pl-4 pr-11 rounded-xl border text-sm sm:text-base outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20 text-slate-900"
                          : formData.email.trim() && isValidEmail(formData.email)
                          ? "border-emerald-500 bg-emerald-50/15 text-slate-900 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
                          : "border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                      }`}
                      placeholder="john@company.com"
                    />
                    {formData.email.trim() && isValidEmail(formData.email) && (
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-emerald-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Phone Number <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full h-[50px] px-4 rounded-xl border text-sm sm:text-base outline-none transition-all duration-200 ${
                      errors.phone
                        ? "border-red-400 bg-red-50/20 ring-2 ring-red-400/20 text-slate-900"
                        : "border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    }`}
                    placeholder="+91"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.phone}</p>}
                </div>

                {/* Submit Request Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] rounded-xl font-semibold text-base text-white bg-slate-950 hover:bg-blue-600 shadow-md hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.99] transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                      </>
                    )}
                  </button>

                  {submitError && (
                    <p className="text-xs text-red-600 text-center mt-2 font-medium">
                      {submitError}
                    </p>
                  )}
                </div>

                {/* reCAPTCHA & Privacy Notice */}
                <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
