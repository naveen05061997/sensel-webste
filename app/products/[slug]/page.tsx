import Link from "next/link";
import { ArrowLeft, Download, ChevronRight, FileText } from "lucide-react";
import { redirect } from "next/navigation";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  if (params.slug === "ast3r-ac" || params.slug === "ast3rc") {
    redirect("/products/ast3rc");
  }
  if (params.slug === "ast3rb") {
    redirect("/products/ast3rb");
  }
  if (params.slug === "solar-tracker" || params.slug === "ast4sli") {
    redirect("/products/ast4sli");
  }
  if (params.slug === "vtx10c" || params.slug === "vtx-10c" || params.slug === "vtx10C") {
    redirect("/products/vtx10c");
  }

  // Mock data fetching
  const title = params.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const isSoftware = params.slug.includes("smart");
  
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-slate-900 font-medium">{title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Product Visual */}
          <div className="bg-slate-100 rounded-3xl aspect-square flex items-center justify-center p-12">
            <div className="text-center">
              <span className="text-slate-400 text-lg">[Product Image Placeholder]</span>
              <p className="text-slate-500 mt-4 max-w-sm mx-auto">
                Will be populated dynamically from Sanity CMS utilizing Next.js Optimized Image component.
              </p>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm w-max mb-6">
              {isSoftware ? "Software Platform" : "Hardware Tracker"}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{title}</h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {isSoftware 
                ? "The ultimate command center for your operations. Gain real-time insights, compliance reporting, and geofence alerts all in one intelligent dashboard."
                : "A rugged, ultra-efficient IoT tracking device designed for extreme conditions. Experience unparalleled battery life and seamless connectivity."}
            </p>

            {/* Specifications Mock */}
            <div className="border-t border-b border-border py-6 mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Technical Specifications</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 text-sm">
                {!isSoftware && (
                  <>
                    <div>
                      <dt className="text-slate-500 font-medium">Battery</dt>
                      <dd className="text-slate-900 font-semibold mt-1">Rechargeable Li-Ion</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-medium">Connectivity</dt>
                      <dd className="text-slate-900 font-semibold mt-1">GPS, Wi-Fi, BLE</dd>
                    </div>
                  </>
                )}
                <div>
                  <dt className="text-slate-500 font-medium">Deployment</dt>
                  <dd className="text-slate-900 font-semibold mt-1">{isSoftware ? "Cloud (SaaS)" : "Plug & Play / Wire-free"}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Industry Rating</dt>
                  <dd className="text-slate-900 font-semibold mt-1">Enterprise Grade</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3"
              >
                Request Quote
              </Link>
              {!isSoftware && (
                <button className="inline-flex items-center justify-center rounded-md text-base font-medium border border-border bg-white text-slate-700 hover:bg-slate-50 h-12 px-8 py-3">
                  <Download className="mr-2 h-4 w-4" />
                  Datasheet
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
