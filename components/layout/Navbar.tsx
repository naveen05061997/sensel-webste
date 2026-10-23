"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown,
  Clock, Truck, Sun, ShieldAlert, Factory,
  Cpu, Layers, HardHat, Snowflake, ArrowRight,
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Navbar() {
  const { openDemoModal } = useDemoModal();
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen]   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const pathname = usePathname();

  /* ── Scroll detection for glass opacity shift ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close all dropdowns on route change ── */
  useEffect(() => {
    setSolutionsOpen(false);
    setProductsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  /* ── Close all dropdowns on navigation click ── */
  const closeMenu = () => {
    setSolutionsOpen(false);
    setProductsOpen(false);
    setMobileOpen(false);
  };

  /* ── Nav data (preserved exactly from original) ── */
  const solutions = [
    { title: "Work Hour Monitor",        href: "/solutions/work-hour-monitor",          desc: "Track equipment runtime accurately.",             icon: <Clock      className="h-4 w-4" /> },
    { title: "Rechargeable Asset Tracker", href: "/solutions/rechargeable-asset-tracker", desc: "Monitor high-value mobile assets.",               icon: <Truck      className="h-4 w-4" /> },
    { title: "Solar Powered Tracker",    href: "/solutions/solar-powered-asset-tracker", desc: "Maintenance-free solar tracking.",                icon: <Sun        className="h-4 w-4" /> },
    { title: "Hazardous Cargo",          href: "/solutions/hazardous-cargo",            desc: "Precision & compliance for dangerous goods.",     icon: <ShieldAlert className="h-4 w-4" /> },
    { title: "Cement & Mining",          href: "/solutions/cement-mining",              desc: "Manage high-volume material movement.",           icon: <Factory    className="h-4 w-4" /> },
  ];

  const products = [
    { title: "Fleet Smart™",  href: "/products/fleet-smart",  desc: "Intelligent fleet management software.",    type: "software", icon: <Layers className="h-4 w-4" /> },
    { title: "Asset Smart™",  href: "/products/asset-smart",  desc: "Comprehensive asset tracking platform.",    type: "software", icon: <Layers className="h-4 w-4" /> },
    { title: "AST3Rc",        href: "/products/ast3rc",        desc: "5200 mAh vibration-based tracker.",         type: "hardware", icon: <Cpu    className="h-4 w-4" /> },
    { title: "AST3Rb",        href: "/products/ast3rb",        desc: "Compact geofence tracker (10 months).",     type: "hardware", icon: <Cpu    className="h-4 w-4" /> },
    { title: "AST4SLi",       href: "/products/ast4sli",       desc: "Solar-powered 4G asset tracker.",           type: "hardware", icon: <Sun    className="h-4 w-4" /> },
    { title: "VTX 10 C",      href: "/products/vtx10c",        desc: "Hazardous cargo telematics unit.",          type: "hardware", icon: <ShieldAlert className="h-4 w-4" /> },
  ];

  const industries = [
    { title: "Construction", href: "/industries/construction", icon: <HardHat   className="h-4 w-4" /> },
    { title: "Cold Chain",   href: "/industries/cold-chain",   icon: <Snowflake className="h-4 w-4" /> },
    { title: "Logistics",    href: "/industries/logistics",    icon: <Truck     className="h-4 w-4" /> },
    { title: "Mining",       href: "/industries/mining",       icon: <Factory   className="h-4 w-4" /> },
  ];

  /* ── Pill classes: transparent at top, solid on scroll or hover ── */
  const isSolid = scrolled || mobileOpen || solutionsOpen || productsOpen || headerHovered;

  const pillBase =
    "transition-all duration-300 ease-in-out " +
    "rounded-full border";

  const pillBg = isSolid
    ? "bg-[#0a0c10] border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
    : "bg-transparent border-transparent shadow-none hover:bg-[#0a0c10] hover:border-white/15 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:backdrop-blur-xl";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          FLOATING NAV WRAPPER — sits over the hero via fixed positioning
      ════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
        <nav
          className={`${pillBase} ${pillBg} w-full max-w-[1105px] h-[61px] flex items-center px-5 justify-between gap-4`}
          aria-label="Main navigation"
          onMouseEnter={() => setHeaderHovered(true)}
          onMouseLeave={() => setHeaderHovered(false)}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Sensel home">
            <img
              src="/logo.png"
              alt="Sensel Telematics"
              className="h-[51px] w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">

            {/* Solutions Mega Menu */}
            <div 
              className="relative flex items-center h-[61px]"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((prev) => !prev)}
              >
                Solutions
                <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Solutions Dropdown Panel */}
              <div className={`absolute top-[calc(100%-8px)] left-0 pt-3 w-[620px] transition-all duration-200 z-50 ${
                solutionsOpen 
                  ? "opacity-100 visible pointer-events-auto" 
                  : "opacity-0 invisible pointer-events-none"
              }`}>
                <div className="bg-[rgba(14,16,20,0.97)] backdrop-blur-xl border border-white/10 shadow-[0_24px_48px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden flex">

                  {/* Left: Use Cases */}
                  <div className="w-[62%] p-6">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-5">By Use Case</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {solutions.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="group/item flex items-center gap-3 rounded-xl p-2 -mx-2 hover:bg-white/6 transition-colors duration-150"
                          onClick={closeMenu}
                        >
                          <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-lg bg-white/8 text-white/50 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors duration-150">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white/85 group-hover/item:text-white transition-colors leading-tight">{item.title}</p>
                            <p className="text-xs text-white/35 mt-0.5 leading-snug">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right: Industries */}
                  <div className="w-[38%] bg-white/4 border-l border-white/8 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-5">By Industry</h3>
                      <ul className="space-y-3.5">
                        {industries.map((ind, i) => (
                          <li key={i}>
                            <Link
                              href={ind.href}
                              className="flex items-center gap-2.5 text-sm font-medium text-white/65 hover:text-white transition-colors duration-150"
                              onClick={closeMenu}
                            >
                              <span className="text-white/35">{ind.icon}</span>
                              {ind.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors mt-6"
                      onClick={closeMenu}
                    >
                      View all industries <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Mega Menu */}
            <div 
              className="relative flex items-center h-[61px]"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((prev) => !prev)}
              >
                Products
                <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Products Dropdown Panel */}
              <div className={`absolute top-[calc(100%-8px)] left-0 pt-3 w-[520px] transition-all duration-200 z-50 ${
                productsOpen 
                  ? "opacity-100 visible pointer-events-auto" 
                  : "opacity-0 invisible pointer-events-none"
              }`}>
                <div className="bg-[rgba(14,16,20,0.97)] backdrop-blur-xl border border-white/10 shadow-[0_24px_48px_rgba(0,0,0,0.4)] rounded-2xl p-6 grid grid-cols-2 gap-8">

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-5">Software</h3>
                    <div className="space-y-4">
                      {products.filter(p => p.type === "software").map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="group/item flex items-center gap-3 rounded-xl p-1.5 -mx-1.5 hover:bg-white/6 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-lg bg-orange-500/10 text-orange-400 group-hover/item:bg-orange-500/20 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white/85 group-hover/item:text-white transition-colors">{item.title}</p>
                            <p className="text-xs text-white/35 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-5">Hardware</h3>
                    <div className="space-y-3">
                      {products.filter(p => p.type === "hardware").map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="group/item flex items-center gap-3 rounded-xl p-1.5 -mx-1.5 hover:bg-white/6 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500/20 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white/85 group-hover/item:text-white transition-colors">{item.title}</p>
                            <p className="text-xs text-white/35 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors mt-5"
                      onClick={closeMenu}
                    >
                      View all products <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            {/* Simple links */}
            <Link
              href="/resources"
              className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200"
            >
              Resources
            </Link>
            <Link
              href="/about-us"
              className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200"
            >
              About Us
            </Link>
          </div>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://ui.mysensel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-full transition-all duration-200"
            >
              Log In
            </a>
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center justify-center h-[42px] px-6 rounded-full text-[14px] font-semibold bg-white text-slate-900 hover:bg-white/90 shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-px cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* ═══════════════════════════════════════════════════════
            MOBILE MENU — slides down beneath the pill
        ════════════════════════════════════════════════════════ */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[calc(61px+24px)] left-4 right-4 max-h-[80vh] overflow-y-auto rounded-2xl bg-[rgba(14,16,20,0.97)] backdrop-blur-xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            <div className="p-6 space-y-6">

              {/* Solutions */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-4">Solutions</h3>
                <div className="space-y-3">
                  {solutions.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 text-[15px] font-medium text-white/75 hover:text-white transition-colors py-1"
                      onClick={closeMenu}
                    >
                      <span className="text-white/30">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/8" />

              {/* Products */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-4">Products</h3>
                <div className="space-y-3">
                  {products.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 text-[15px] font-medium text-white/75 hover:text-white transition-colors py-1"
                      onClick={closeMenu}
                    >
                      <span className="text-white/30">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/8" />

              {/* Simple links */}
              <div className="space-y-3">
                <Link href="/resources" className="block text-[15px] font-medium text-white/75 hover:text-white transition-colors py-1" onClick={closeMenu}>Resources</Link>
                <Link href="/about-us"  className="block text-[15px] font-medium text-white/75 hover:text-white transition-colors py-1" onClick={closeMenu}>About Us</Link>
                <a href="https://ui.mysensel.com/" target="_blank" rel="noopener noreferrer" className="block text-[15px] font-medium text-white/75 hover:text-white transition-colors py-1">Log In</a>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="flex items-center justify-center w-full h-12 rounded-full bg-white text-slate-900 text-[15px] font-semibold hover:bg-white/90 transition-colors cursor-pointer"
                onClick={() => {
                  closeMenu();
                  openDemoModal();
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
