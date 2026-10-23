import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Sensel Intelligent Enterprise IoT",
};

export default function ContactUsPage() {
  return (
    <div className="bg-white pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-lg text-slate-600">
          Our team is ready to answer your questions and help you build the perfect telematics solution for your business.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
