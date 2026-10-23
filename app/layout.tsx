import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { DemoModalProvider } from "@/context/DemoModalContext";
import RequestDemoModal from "@/components/modal/RequestDemoModal";
import { EnterpriseModalProvider } from "@/context/EnterpriseModalContext";
import EnterpriseIntegrationModal from "@/components/modal/EnterpriseIntegrationModal";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import CookieConsent from "@/components/cookie/CookieConsent";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sensel | Intelligent Enterprise IoT",
  description: "One of India's most trusted and innovative end-to-end telematics and IoT solution providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*
        Navbar is fixed/floating — it overlays the hero.
        Main starts at top-0 so the hero fills behind the pill nav.
      */}
      <body className={`${manrope.className} min-h-screen flex flex-col`}>
        <DemoModalProvider>
          <EnterpriseModalProvider>
            <CookieConsentProvider>
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <RequestDemoModal />
              <EnterpriseIntegrationModal />
              <CookieConsent />
            </CookieConsentProvider>
          </EnterpriseModalProvider>
        </DemoModalProvider>
      </body>
    </html>
  );
}
