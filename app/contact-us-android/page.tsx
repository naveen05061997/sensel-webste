export const metadata = {
  title: "Contact Us (Android) | Sensel",
};

export default function ContactUsAndroidPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">App Support</h1>
      <p className="text-slate-600 mb-6">For assistance with the Sensel Android application, please email us directly or use the portal.</p>
      <a href="mailto:support@sensel.in" className="text-primary font-medium">support@sensel.in</a>
    </div>
  );
}
