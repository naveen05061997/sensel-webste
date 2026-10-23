import Link from "next/link";
import { BookOpen, Video, Download } from "lucide-react";

export const metadata = {
  title: "Resources | Sensel Intelligent Enterprise IoT",
};

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Resource Center</h1>
          <p className="text-lg text-slate-600">
            Insights, guides, and documentation to help you maximize your telematics ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/resources/blog" className="group bg-white p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Blog & Articles</h3>
            <p className="text-slate-600">Industry insights, company news, and telematics best practices.</p>
          </Link>

          <Link href="/resources/videos" className="group bg-white p-8 rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary text-secondary group-hover:text-white transition-colors">
              <Video className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Video Tutorials</h3>
            <p className="text-slate-600">Product walkthroughs, setup guides, and platform demos.</p>
          </Link>

          <Link href="/resources/downloads" className="group bg-white p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Downloads</h3>
            <p className="text-slate-600">Product datasheets, warranty documents, and compliance certs.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
