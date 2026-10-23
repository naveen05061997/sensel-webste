import type { Metadata } from "next";
import CookieSettingsButton from "@/components/cookie/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy | Sensel",
  description: "Learn how Sensel Telematics uses cookies and similar technologies to provide, secure, and improve our services.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: October 2026</p>

        <div className="text-slate-600 space-y-6 leading-relaxed">
          <p>
            Sensel Telematics Pvt. Ltd. (&ldquo;Sensel&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
            uses cookies and similar tracking technologies on our website to ensure smooth functionality,
            understand site usage, and improve user experience.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
            when you visit a website. They help the website remember your actions and preferences over a
            period of time so that you do not have to re-enter them whenever you come back to the site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Categories of Cookies We Use</h2>

          <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">A. Essential Cookies (Strictly Necessary)</h3>
          <p>
            These cookies are indispensable for the operation of our website. They enable core functions
            such as security, network management, session state, and accessibility. You cannot opt out of
            these cookies through our cookie banner as the site cannot function properly without them.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">B. Analytics Cookies</h3>
          <p>
            Analytics cookies collect aggregate information about how visitors navigate and interact with
            our website. This data helps us understand which pages are most popular, identify performance
            issues, and improve user journeys. All collected data is pseudonymised or aggregated.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">C. Marketing Cookies</h3>
          <p>
            Marketing cookies are used to track visitor engagement across platforms, enabling us to display
            relevant advertisements and measure the effectiveness of our marketing initiatives. These are
            only activated if you provide explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Managing Your Preferences</h2>
          <p>
            You can update your cookie preferences at any time by clicking the link below or by clicking
            the &ldquo;Cookie Settings&rdquo; link in the footer of any page on our website:
          </p>
          <div className="my-4 p-4 rounded-lg bg-slate-100 inline-block">
            <CookieSettingsButton />
          </div>
          <p>
            Additionally, most modern web browsers allow you to control cookies through their browser settings.
            Please note that blocking all cookies may impact your experience and certain features of the site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in legal requirements or
            our operational practices. Any updates will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy or how we handle your data, please contact our
            privacy team at:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><strong>Email:</strong> <a href="mailto:info@sensel.in" className="text-primary hover:underline">info@sensel.in</a></li>
            <li><strong>Address:</strong> Ground Floor, IndiQube Omega, Maruti Emerald, Brookefield, ITPL main road, Bangalore &ndash; 560037</li>
            <li><strong>Phone:</strong> +91-80-41693607 / +91-7676100900</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
