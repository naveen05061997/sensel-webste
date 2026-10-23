import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Request a Demo | Sensel Intelligent Enterprise IoT",
};

export default function RequestDemoPage() {
  return (
    <div className="bg-white pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Experience the Platform Live</h1>
        <p className="text-lg text-slate-600">
          Schedule a personalized demo with our telematics experts. See exactly how Sensel can drive ROI for your specific operations.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
