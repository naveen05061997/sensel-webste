import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Sensel",
  description: "Read the official Privacy Policy of Sensel Telematics Pvt. Ltd. to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-slate">
        
        {/* Page Title & Effective Date */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm font-medium text-slate-500 mb-8">
          Privacy Policy Effective: <strong>10 July 2017</strong>
        </p>

        {/* Notice Callout */}
        <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-sm font-semibold leading-relaxed">
          PLEASE READ THE PRIVACY POLICY CAREFULLY BEFORE SIGN UP AT SENSEL
        </div>

        <div className="text-slate-600 space-y-6 leading-relaxed">
          <p>
            We at <strong>SENSEL TELEMATICS</strong> (&ldquo;SENSEL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
            know that our users (whoever uses our products and services), care about how your personal information is used by
            us internally or shared outside, and we do take your privacy very seriously. You acknowledge that you accept the
            practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share
            your information in the following ways.
          </p>

          <p>
            Remember that your use of our Services is at all times subject to the{" "}
            <Link href="/terms" className="text-primary hover:underline font-medium">
              Terms of Service
            </Link>{" "}
            which incorporates this Privacy Policy.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. WHAT DOES IT COVER?</h2>
          <p>
            This Privacy Policy covers as how we treat Personal Information that we gather when you are accessing or using our
            Services. This policy does not apply to the practices of companies that we do not own or control, or to individuals
            that we do not employ or manage.
          </p>
          <p>
            We do not knowingly sell our products to anyone under the age of 18 or collect or solicit Personal Information from
            anyone under the age of 18 years old or knowingly allow such persons to register on our website for our services.
            If you are under 18 years, please do not attempt to register for the Services or send any information about yourself
            to us, including your name, address, telephone number, or email address. No one under age 18 years old may provide any
            personal information to SENSEL. In the event, we learn that we have collected personal information from a child aged
            under 18 years without verification of parental consent, we will delete that information as quickly as possible. If
            you know that we might have any information from a child under 18 years, please contact us at{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>{" "}
            immediately.
          </p>
          <p>
            When you use our services, you are consenting to have your data transferred to and processed in India. All of
            SENSEL’s servers are currently located in the India, given this limitation, if your use of the Services or disclosure
            of certain information to SENSEL would violate any law that is applicable to you, your right to use the Services
            and/or disclose such information is revoked, as it is wherever use of the Services is prohibited by law (as described
            in the Terms Of Service).
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. WHAT INFORMATION DO WE COLLECT?</h2>
          <p>
            We gather required Personal Information from our users, as explained below. We may use this Personal Information to
            personalize and improve our Services, to allow our users to set up a user account and profile, to contact users, to
            fulfil your requests for certain products and Services, to analyse how users utilize our Services, and as otherwise set
            forth in this Privacy Policy. We may also share certain types of Personal Information with third parties. We collect
            the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Information you provide:</strong> We receive and store any information you knowingly provide to us. For
              example, during the registration process, we collect your information such as your name, user name, email
              address, phone number and description and IP address. We may collect other Personal Information you provide us
              through your use of our Services, such as the posts you submit on the Services. You can choose not to provide us
              with certain information, but then your Service may be limited to that extent.
            </li>
            <li>
              <strong>Automatically collected information:</strong> Whenever you interact with our Services, we automatically
              receive and record information on our server logs from your browser including your IP address, and the page you
              requested. Some of this automatically collected information may or may not be Personal Information. You may be able
              to change the preferences on your browser to prevent or limit your computer’s acceptance of cookies.
            </li>
            <li>
              <strong>Aggregate usage information:</strong> When we collect usage information, we only use this data in aggregate
              form, and not in a manner that would identify you personally. We may also provide this aggregate information to our
              partners, so that they can understand how often people use their services and our Services, so that they, too, can
              provide you with an optimal online experience. We never disclose aggregate information to a partner in a manner that
              would identify you personally.
            </li>
          </ul>
          <p>
            We may contact you, by email or other means; for example, communicate with you about your use of the Services or
            promotional emails. If you do not want to receive emails from us, please indicate your preference by emailing us at{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>
            .
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. DOES SENSEL SHARE YOUR INFORMATION WITH SOMEONE?</h2>
          <p>
            We don’t sell your Personal Information to anyone. We share your Personal Information with third parties only as
            described below:
          </p>
          <div className="space-y-4">
            <p>
              <strong>Business PARTNERS:</strong> In certain situations, businesses or third party websites we are affiliated with
              may sell items or provide services to you through the Services (either alone or jointly with us). We may, for
              example, sell products or provide services jointly with businesses partners. You can recognize when business is
              associated with such a transaction or service, and we will share your Personal Information with that business entity
              only to the extent that it is related to such transaction or service.
            </p>
            <p>
              <strong>Information that’s no longer personally identifiable:</strong> We may anonymize your Personal Information
              so that you are not individually identified, and provide that information to our partners. We may also provide
              aggregate usage information to our partners, who may use such information to understand how often and in what ways
              people use our Services, so that they, too, can provide you with an optimal online experience. However, we never
              disclose aggregate information to a partner in a manner that would identify you personally, as an individual.
            </p>
            <p>
              <strong>User Profiles:</strong> You understand that we cannot control what other users do with any content you
              voluntarily disclose for such users to view on the Services (User Submissions). For example, we will share your
              reports content with other users as directed by you via the functionality of the Services. We cannot control if
              other users you have allowed access to your User Submissions make such User Submissions publicly available and to be
              collected and used by others, or to be redistributed through the internet and other media channels.
            </p>
            <p>
              <strong>Business Transfers:</strong> We may choose to buy or sell assets, if we (or substantially all of our assets)
              are acquired, or if we go out of business or enter bankruptcy, Personal Information would be one of the assets
              transferred to or acquired by a third party.
            </p>
            <p>
              <strong>Protection of SENSEL and Others:</strong> We may release Personal Information when we believe in good faith
              that release is necessary to comply with that law; enforce or apply our conditions of use and other agreements; or
              protect the rights, property, or safety of SENSEL, our employees, our users, or others. This includes exchanging
              information with other companies and organizations for fraud protection and credit risk reduction.
            </p>
            <p>
              <strong>With Your Consent:</strong> Except as set forth above, you will be notified when your Personal Information
              may be shared with third parties, and will be able to prevent the sharing of this information.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. IS MY PERSONAL INFORMATION SECURE?</h2>
          <p>
            Your account is protected by a password for your privacy and security. You need to prevent unauthorized access to your
            account and Personal Information by selecting and protecting your password appropriately and limiting access to your
            computer and browser by signing off after you have finished accessing your account.
          </p>
          <p>
            We endeavour to protect the privacy of your account and other Personal Information we hold in our records, but we cannot
            guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise
            the security of user information at any time.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. ACCESS TO PERSONAL INFORMATION</h2>
          <p>
            You may access and, in some cases, change or delete certain information you have provided to us may update or correct
            your account information and email preferences at any time by logging in to your account.
          </p>
          <p>
            The information you can view and update through your account may change as the Services change. If you have any
            questions about viewing or updating information we have on file about you, please contact us at{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>
            .
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. WHAT CHOICES DO I HAVE? (OPTIONS)</h2>
          <p>
            You can always opt not to disclose information to us, but keep in mind some information may be needed to take
            advantage of some of our special features. You may be able to add or update certain information as explained in Section
            V above. When you update information, however, we may maintain a copy of the unrevised information in our records.
          </p>
          <p>
            You may request deletion of your account by sending an e-mail to{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>
            . Please note that some information may remain in our private records after deletion of your account. We may use any
            aggregated data derived from or incorporating your personal information after you delete your account, but not in a
            manner that would identify you personally. We may also retain and use your User Submissions after the termination or
            deactivation of your account.
          </p>
          <p>
            If you do not wish to receive email or other mail from us, contact us at{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>
            . It is your responsibility to review such legal notices for changes by obtaining them whatever convenient way you choose.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may make additions or deletions to this Privacy Policy from time to time. Use of information we collect now is
            subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we use
            Personal Information, we will notify you by posting an announcement on our services or sending you an email. You are
            bound by any changes to the Privacy Policy when you use the Services after such changes have been first posted.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. MORE INFORMATION, UPDATES, CHANGES</h2>
          <p>
            Please learn more about SENSEL privacy policy by visiting our website and any other linked pages, features, content,
            or any other services we offer from time to time.
          </p>
          <p>
            If you have any questions or concerns regarding our privacy policies, please send us a message to{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>{" "}
            or send mail to:{" "}
            <a href="mailto:support@sensel.in" className="text-primary hover:underline font-medium">
              support@sensel.in
            </a>
            .
          </p>

          {/* Corporate Address & Contact Block */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 not-prose">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Sensel Telematics Pvt Ltd</h3>
            <address className="not-italic text-sm text-slate-700 leading-relaxed font-normal">
              Ground Floor, IndiQube Omega,<br />
              Maruti Emerald, Brookefield,<br />
              ITPL main road, Bangalore – 560037
            </address>
            <p className="mt-3 text-sm text-slate-700">
              <strong>Website:</strong>{" "}
              <a href="https://www.sensel.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.sensel.in
              </a>
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-500">
              We will make every effort to resolve your concerns.
            </p>
          </div>

          <p className="pt-4 text-xs text-slate-400">
            Privacy Policy Effective: 10 July 2017
          </p>
        </div>

      </div>
    </div>
  );
}
