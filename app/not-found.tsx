import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <h2 className="text-9xl font-extrabold text-primary/10 mb-8">404</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
