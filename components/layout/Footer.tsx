import Link from "next/link";
import { Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import CookieSettingsButton from "@/components/cookie/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Info & Socials Header */}
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="max-w-2xl space-y-3">
            <Link href="/" className="inline-block bg-white/10 p-2 rounded-lg">
              <img src="/logo.png" alt="Sensel Telematics" className="h-[52px] w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Building and deploying reliable, safe and feature rich products and services of highest standards. Focus on superior performance to ensure a great return on investment to the customer.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="https://x.com/senseltele"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sensel Twitter"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/senseltelematics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sensel LinkedIn"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@SenselTelematics-b9j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sensel YouTube"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Main 4-Column Section: Quick Links → Google Map → Get in Touch → Legal */}
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start justify-center pt-12 gap-8 md:gap-0">
          
          {/* 1. Quick Links */}
          <div className="w-full md:w-[140px] lg:w-[130px] xl:w-[140px] shrink-0">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* 2. Google Map */}
          <div className="w-full md:w-[350px] lg:w-[380px] xl:w-[410px] md:ml-8 lg:ml-8 xl:ml-10 flex flex-col shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sensel Telematics</span>
              </h3>
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                HQ • Bengaluru
              </span>
            </div>

            <div className="relative w-full h-[190px] rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Sensel%20Telematics,%20IndiQube%20Omega,%20Maruti%20Emerald,%20Brookefield,%20ITPL%20main%20road,%20Bangalore%20560037&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Sensel Telematics Office Location on Google Maps"
                aria-label="Interactive Google Map showing Sensel Telematics office location in Brookefield, Bangalore"
                className="w-full h-full border-0 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sensel+Telematics+IndiQube+Omega+Maruti+Emerald+Brookefield+Bangalore+560037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 group"
                aria-label="Open Sensel Telematics location in Google Maps (opens in new tab)"
              >
                <span className="text-sm leading-none">📍</span>
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* 3. Get in Touch */}
          <div className="w-full md:w-[320px] lg:w-[290px] xl:w-[310px] md:mt-10 lg:mt-0 md:ml-0 lg:ml-10 xl:ml-12 shrink-0">
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-slate-300 leading-relaxed font-normal">
                  Ground Floor, IndiQube Omega,<br />
                  Maruti Emerald, Brookefield,<br />
                  ITPL main road, Bangalore – 560037
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918041693607" className="hover:text-white transition-colors">+91-8041693607</a>
                  <a href="tel:+917676100900" className="hover:text-white transition-colors">+91-7676100900</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@sensel.in" className="hover:text-white transition-colors">info@sensel.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Mon–Fri, 9:00AM – 6:00PM</span>
              </li>
            </ul>
          </div>

          {/* 4. Legal (Placed on the right side of Get in Touch) */}
          <div className="w-full md:w-[180px] lg:w-[150px] xl:w-[170px] md:mt-10 lg:mt-0 md:ml-8 lg:ml-8 xl:ml-10 shrink-0">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><CookieSettingsButton /></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li>
                <a
                  href="/Standard-Warranty.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Standard Warranty (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="max-w-[1240px] mx-auto border-t border-slate-800 mt-14 pt-8 text-center text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} All Rights Reserved. Sensel Telematics Pvt. Ltd.</p>
        </div>

      </div>
    </footer>
  );
}
