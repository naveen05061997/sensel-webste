import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import { faqData } from "@/data/faqData";
import Testimonials from "@/components/sections/Testimonials";
import { testimonialData } from "@/data/testimonialData";
import WhyChooseSensel from "@/components/sections/WhyChooseSensel";
import FleetCtaBanner from "@/components/sections/FleetCtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <SolutionsGrid />
      {/* Why Choose SENSEL — between Solutions and About SENSEL */}
      <WhyChooseSensel />
      <AboutSection />
      {/* Customer testimonials — directly below About SENSEL */}
      <Testimonials testimonials={testimonialData} />
      <ContactSection />
      {/* FAQ */}
      <FAQ faqs={faqData} />
      {/* Ready to Optimize Your Fleet CTA Banner — directly above global Footer */}
      <FleetCtaBanner />
    </>
  );
}
