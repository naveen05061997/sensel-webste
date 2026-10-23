import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Sensel",
  description: "Read the official Terms of Service for using Sensel Telematics website, devices, software, and application services.",
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-slate">
        
        {/* Page Title & Effective Date */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm font-medium text-slate-500 mb-8">
          Effective: <strong>10 July 2017</strong> &bull; Updates:{" "}
          <a href="https://www.sensel.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            www.sensel.in
          </a>
        </p>

        {/* Notice Callout */}
        <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-sm font-semibold leading-relaxed">
          PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THE SERVICES OFFERED BY SENSEL (SENSEL, WE, US, OUR).
          BY VISITING SENSEL WEBSITE OR USING THE SERVICES IN ANY MANNER, YOU AGREE THAT YOU HAVE READ AND AGREE TO BE BOUND
          BY AND ARE A PARTY TO THE TERMS AND CONDITIONS (INCLUDING SENSEL PRIVACY POLICY, WHICH IS HEREBY INCORPORATED BY
          REFERENCE) OF THIS AGREEMENT TO THE EXCLUSION OF ALL OTHER TERMS. IF THE TERMS OF THIS AGREEMENT ARE CONSIDERED AN
          OFFER, ACCEPTANCE IS EXPRESSLY LIMITED TO SUCH TERMS. IF YOU DO NOT UNCONDITIONALLY AGREE TO ALL THE TERMS AND
          CONDITIONS OF THIS AGREEMENT, YOU HAVE NO RIGHT TO USE THE WEBSITE OR SERVICES. USE OF SENSEL’S SERVICES IS EXPRESSLY
          CONDITIONED UPON YOUR ASSENT TO ALL THE TERMS AND CONDITIONS OF THIS AGREEMENT, TO THE EXCLUSION OF ALL OTHER TERMS.
          TO REJECT THESE TERMS, YOU MUST DELETE THE APPLICATION FROM YOUR MOBILE DEVICE IMMEDIATELY. PLEASE CONTACT SUPPORT
          FOR FURTHER INSTRUCTIONS ON YOUR REJECTION OF THESE TERMS.
        </div>

        <div className="text-slate-600 space-y-6 leading-relaxed">
          
          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. ACCESS TO THE SERVICES</h2>
          <p>
            The <a href="https://www.sensel.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.sensel.in</a> website,
            mobile application, and any other linked pages, web content, or application services offered from time to time by
            SENSEL in connection therewith (collectively, the Website) are owned and operated by SENSEL. Subject to the terms and
            conditions of this Agreement, we may offer to provide certain services, as described more fully on the Website, and that
            have been selected by you (together with the Website, the Services), solely for your own use, and not for the use or benefit
            of any third party. The term Services includes, without limitation, use of the Website, device and any service we perform
            for you, and the Content (as defined below) offered by us on the Website.
          </p>
          <p>
            We may change, suspend or discontinue the Services at any time, including the availability of any feature, database,
            or Content. We may also impose limits on certain features and services or restrict your access to parts or all of the
            Services without notice or liability. You may only use the Services and the Product for your own personal, your own
            business use, and not for the use or benefit of any third party, and only in a manner that complies with all laws that
            apply to you. If your use of the Services is prohibited by applicable laws, then you are not authorized to use the Services.
            We can’t and will not be responsible for your using the Services in a way that breaks the law.
          </p>
          <p>
            You may only use the product in connection with the Services, and for no other use. Any software component embodied
            part of this service is licensed to you, and not sold. We reserve the right, in our sole discretion, to modify this
            Agreement at any time by posting a notice on the Website, by sending you a notice via email, or by some other appropriate
            means. You shall be responsible for reviewing and becoming familiar with any such modifications. If you don’t agree with
            the new Agreement, you are free to reject them; however, if you do reject the new Agreement, you will no longer be able to
            use the Services. Your use of the Services following such notification constitutes your acceptance of the terms and conditions
            of this Agreement as modified.
          </p>
          <p>
            We do not knowingly collect or solicit personal information from anyone under the age of 18 years old or knowingly allow
            such persons to register for the Services. If you are under 18 years, please do not attempt to register for the Services
            or send any information about yourself to us, including your name, address, telephone number, or email address. No one
            under age of 18 years may provide any personal information to SENSEL. If we learn that we have collected personal
            information from a child under age 18 years without verification of parental consent, we will delete that information as
            quickly as possible. If you know or believe that we might have any information from or about a child under age of 18 years,
            please contact us at{" "}
            <a href="mailto:privacy@sensel.in" className="text-primary hover:underline font-medium">
              privacy@sensel.in
            </a>
            .
          </p>
          <p>
            You represent and warrant to us that: (i) you are of legal age to form a binding contract; (ii) all registration
            information you submit is accurate and truthful. You also certify that you are legally permitted to use and access the
            Services and take full responsibility for the selection and use of and access to the Services. This Agreement is void
            where prohibited by law, and the right to access the Services is revoked.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. WEBSITE AND SERVICES CONTENT</h2>
          <p>
            The Website, the Services, and their contents are intended solely for the personal use of Services users and may only
            be used in accordance with the terms of this Agreement. All materials displayed or performed on the Services (including,
            but not limited to text, graphics, articles, photographs, images) are protected by copyright. You are responsible for all
            Content you contribute, in any manner, to the Services, and you represent and warrant that you have all rights necessary
            to do so, in the manner in which you contribute it.
          </p>
          <p>
            In addition, you shall abide by all copyright notices, trademark rules, information, and restrictions contained in any
            Content accessed through the Services, and shall not use, copy, reproduce, modify, translate, publish, broadcast, transmit,
            distribute, perform, upload, display, license, sell or otherwise exploit for any purposes whatsoever any Content or third
            party submissions or other proprietary rights not owned by you: (i) without the express prior written consent of the
            respective owners, and (ii) in any way that violates any third party right. You will keep all your registration information
            accurate and current. You are responsible for all your activity in connection with the Services.
          </p>
          <p>
            The Device, Website, Mobile app and the Services are protected by copyright as a collective works and/or compilations,
            pursuant to Indian copyright laws, international conventions, and other copyright laws. You may not modify, publish,
            transmit, participate in the transfer or sale of, reproduce (except as expressly provided in this Section 2), create
            derivative works based on, distribute, perform, display, or in any way exploit, any of the Content, software, materials,
            or Services in whole or in part. The Services may allow you to copy or download certain Content; please remember that just
            because this functionality exists, doesn’t mean that all of these restrictions don’t apply, they do!
          </p>
          <p>
            Other than your User Submissions (as defined below), you may download or copy the Content (and other items displayed on
            the Website or Services for download) for personal use only, provided that you maintain all copyright and other notices
            contained in such Content. You shall not store any significant portion of any Content (other than your User Submissions)
            in any form. Copying or storing of any Content (other than your User Submissions) other than for personal use is expressly
            prohibited without prior written permission from SENSEL or from the copyright holder identified in such Content’s copyright
            notice. If you link to the Website, we may revoke your right to so link at any time, at our sole discretion. We reserve
            the right to require prior written consent before linking to the Website.
          </p>
          <p>
            We cannot control and have no duty to take any action regarding how you may interpret and use the Content or what actions
            you may take as a result of having been exposed to the Content, and you hereby release us from all liability for you having
            acquired or not acquired Content through the Services.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. RESTRICTIONS</h2>
          <p>
            You warrant, represent and agree that you will not contribute any Content or User Submissions or otherwise use the Services
            in a manner that:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Infringes or violates the intellectual property rights or proprietary rights, rights of publicity or privacy, or other rights of any third party;</li>
            <li>Violates any law, ordinance or regulation;</li>
            <li>Is harmful, fraudulent, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, or otherwise objectionable;</li>
            <li>Impersonates any person or entity, including without limitation any employee or representative of SENSEL;</li>
            <li>Contains a virus, trojan horse, worm, time bomb, or other harmful computer code, file, or program;</li>
            <li>Jeopardizes the security of your SENSEL account or anyone else;</li>
            <li>Attempts, in any manner, to obtain the password, account, or other security information from any other user;</li>
            <li>Violates the security of any computer network, or cracks any passwords or security encryption codes;</li>
            <li>Runs Mail list, Listserv, or any form of auto-responder or spam on the Services, or any processes that otherwise interfere with the proper working of the Services (including by placing an unreasonable load on the Services infrastructure);</li>
            <li>Copies or stores any significant portion of the Content; or</li>
            <li>Decompiles, reverse engineers, or otherwise attempts to obtain the source code or underlying ideas or information of or relating to the Services.</li>
          </ol>
          <p>
            A violation of any of the foregoing is grounds for termination of your right to use or access the Services. SENSEL reserves
            the right to remove any Content from the Services at any time, for any reason (including, but not limited to, upon receipt
            of claims or allegations from third parties or authorities relating to such Content or if we are concerned that you may have
            breached the immediately preceding sentence), or for no reason at all. You, not SENSEL, remain solely responsible for all
            Content that your device upload, post, email, transmit, or otherwise disseminate using, or in connection with, the Services.
            You will be responsible for withholding, filing, and reporting all taxes, duties and other governmental assessments associated
            with your activity in connection with the Services.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. PRIVACY POLICY</h2>
          <p>
            For information regarding SENSEL’s treatment of personally information, please review our current Privacy Policy at{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
              Privacy Policy
            </Link>
            ; your acceptance of this Agreement constitutes your acceptance and agreement to be bound by SENSEL’s Privacy Policy.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. REGISTRATION</h2>
          <p>
            As a condition to using the Product or some aspects of the Services, you may be required to register with SENSEL and select
            a password and user name (SENSEL User ID) or email id. You shall provide us with accurate, complete, and updated registration
            information. You may also sign up with google+ login credentials. Failure to do so shall constitute a breach of this Agreement,
            which may result in immediate termination of your account.
          </p>
          <p>
            You may not (1) select or use as a SENSEL User ID a name of another person with the intent to impersonate that person; or
            (2) use as a SENSEL User ID a name subject to any rights of a person other than you without appropriate authorization. We
            reserve the right to refuse registration of or cancel a SENSEL User ID in its discretion. You shall be responsible for
            maintaining the confidentiality of your password.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. INDEMNITY</h2>
          <p>
            You will indemnify and hold SENSEL, its parents, subsidiaries and employees harmless (including, without limitation, from
            all damages, liabilities, settlements, costs and any other fees) from any claim or demand made by any third party due to or
            arising out of your access to the Services, use of the Services, your violation of this Agreement, or the infringement by you
            or any third party using your account of any intellectual property or other right of any person or entity.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. WARRANTY DISCLAIMERS</h2>
          <div className="space-y-4">
            <p>
              (a) THE WARRANTY FOR THE PRODUCT AND PRODUCT SOFTWARE ARE SET FORTH IN THE LIMITED WARRANTY AND THE END USER LICENSE
              AGREEMENT, RESPECTIVELY.
            </p>
            <p>
              (b) THE SERVICES ARE PROVIDED FOR YOUR CONVENIENCE, &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; AND SENSEL AND OUR
              LICENSORS AND SUPPLIERS EXPRESSLY DISCLAIM ANY WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
              THE WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.
            </p>
            <p>
              (c) SENSEL DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
              BY A THIRD PARTY THROUGH OR IN CONNECTION WITH THE PRODUCTS OR SERVICES (INCLUDING, BUT NOT LIMITED TO, THIRD PARTY PRODUCTS
              AND SERVICES CONNECTED THROUGH THE WORKS WITH SENSEL PLATFORM) OR ANY HYPERLINKED WEBSITE OR SERVICE, AND SENSEL WILL NOT BE
              A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF SUCH PRODUCTS OR SERVICES.
            </p>
            <p>
              (d) WHEN YOU INSTALL, SETUP OR USE PRODUCTS AND SERVICES LIKE THOSE PROVIDED BY SENSEL YOU ARE GIVEN THE OPPORTUNITY TO
              ALTER DEFAULTS OR CHOOSE PARTICULAR SETTINGS. THE CHOICES YOU MAKE CAN CAUSE DAMAGE OR LEAD TO NON-RECOMMENDED OPERATION OF
              YOUR CONNECTED EQUIPMENT OR SYSTEMS. YOU ASSUME ALL LIABILITY FOR SUCH DAMAGE WHEN YOU CHOOSE PARTICULAR SETTINGS OR SET
              OR ADJUST DEFAULTS.
            </p>
            <p>
              (e) SENSEL MAKES NO REPRESENTATIONS CONCERNING ANY CONTENT CONTAINED IN OR ACCESSED THROUGH THE SERVICES, AND SENSEL WILL
              NOT BE RESPONSIBLE OR LIABLE FOR THE ACCURACY, COPYRIGHT COMPLIANCE, LEGALITY OR DECENCY OF MATERIAL CONTAINED IN OR ACCESSED
              THROUGH THE SERVICES. SENSEL MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING SUGGESTIONS OR RECOMMENDATIONS OF SERVICES OR
              PRODUCTS OFFERED OR PURCHASED THROUGH THE SERVICES.
            </p>
          </div>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. LIMITATION OF LIABILITY</h2>
          <p>
            Nothing in these Terms and in particular within this &ldquo;Limitation of Liability&rdquo; clause shall attempt to exclude
            liability that cannot be excluded under applicable law.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN ADDITION TO THE ABOVE WARRANTY DISCLAIMERS, IN NO EVENT WILL (A) SENSEL
            BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, SPECIAL, OR INCIDENTAL DAMAGES, INCLUDING ANY DAMAGES FOR LOST DATA OR
            LOST PROFITS, ARISING FROM OR RELATING TO THE SERVICES OR THE PRODUCTS, EVEN IF SENSEL KNEW OR SHOULD HAVE KNOWN OF THE
            POSSIBILITY OF SUCH DAMAGES, AND (B) SENSEL’S TOTAL CUMULATIVE LIABILITY ARISING FROM OR RELATED TO THE SERVICES AND THE
            PRODUCTS, WHETHER IN CONTRACT OR OTHERWISE, EXCEED THE FEES ACTUALLY PAID BY YOU TO SENSEL OR SENSEL’S AUTHORIZED RESELLER FOR
            THE SERVICES OR THE PRODUCT AT ISSUE IN THE PRIOR 12 MONTHS (IF ANY). THIS LIMITATION IS CUMULATIVE AND WILL NOT BE INCREASED
            BY THE EXISTENCE OF MORE THAN ONE INCIDENT OR CLAIM. SENSEL DISCLAIMS ALL LIABILITY OF ANY KIND OF SENSEL’S LICENSORS AND
            SUPPLIERS. UNDER NO CIRCUMSTANCES WILL SENSEL BE LIABLE IN ANY WAY FOR ANY CONTENT, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS
            OR OMISSIONS IN ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED IN CONNECTION WITH USE OF OR EXPOSURE TO ANY CONTENT
            POSTED, EMAILED, ACCESSED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. SUBSCRIPTION AND PAYMENT</h2>
          <p>
            Certain aspects of the Services may be provided for a subscription fee. You shall pay all applicable fees, as described on
            the Website in connection with such subscriptions selected by you. SENSEL reserves the right to change its price list and to
            institute new charges at any time, upon notice to you, which may be sent by email ie posted on the Website. Your use of the
            Services following such notification constitutes your acceptance of any new or increased charges. For more details contact
            support.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">10. THIRD PARTY WEBSITES</h2>
          <p>
            The Services may contain links to third party websites or services (Third Party Websites) that are not owned or controlled by
            SENSEL. When you access Third Party Websites, you do so at your own risk. You hereby represent and warrant that you have read
            and agree to be bound by all applicable policies of any Third Party Websites relating to your use of the Services and that you
            will act in accordance with those policies, in addition to your obligations under this Agreement. We have no control over, and
            assumes no responsibility for, the content, accuracy, privacy policies, or practices of or opinions expressed in any Third
            Party Websites. In addition, we will not and cannot monitor, verify, censor or edit the content of any Third Party Website.
          </p>
          <p>
            By using the Services, you expressly relieve and hold harmless SENSEL from any and all liability arising from your use of any
            Third Party Website. Your interactions with organizations and/or individuals found on or through the Services, including
            payment and delivery of goods or services, and any other terms, conditions, warranties or representations associated with
            such dealings, are solely between you and such organizations and/or individuals. You should make whatever investigation you
            feel necessary or appropriate before proceeding with any online or offline transaction with any of these third parties.
          </p>
          <p>
            You agree that SENSEL shall not be responsible or liable for any loss or damage of any sort incurred as the result of any
            such dealings. If there is a dispute between participants on this site, or between users and any third party, you understand
            and agree that SENSEL is under no obligation to become involved. In the event that you have a dispute with one or more other
            users, you hereby release SENSEL, its officers, employees, agents and others in rights from claims, demands, and damages of
            every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way
            related to such disputes.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">11. TERMINATION</h2>
          <p>
            This TOS Agreement shall remain in full force and effect while you use the Services provided by SENSEL. You may terminate
            your use of the Services at any time. We may terminate or suspend your access to the Services or your membership at any
            time, for any reason, and without warning, which may result in the forfeiture and destruction of all information associated
            with your membership. We may also terminate or suspend any and all Services and access to the Website immediately, without
            prior notice or liability, if you breach any of the terms or conditions of this Agreement.
          </p>
          <p>
            Upon termination of your account, your right to use the Services, access the Website, and any Content will immediately cease.
            All provisions of this Agreement which, by their nature, should survive termination, shall survive termination, including,
            without limitation, ownership provisions, warranty disclaimers, and limitations of liability.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">12. OTHER INFORMATION</h2>
          <p>
            The failure of either party to exercise, in any respect, any right provided for herein shall not be deemed a waiver of any
            further rights hereunder. SENSEL shall not be liable for any failure to perform its obligations hereunder where such failure
            results from any cause beyond SENSEL’s reasonable control, including, without limitation, mechanical, electronic or
            communications failure or degradation (including line-noise interference).
          </p>
          <p>
            If any provision of this Agreement is found to be unenforceable or invalid, that provision shall be limited or eliminated
            to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable. This
            Agreement is not assignable, transferable or sub-licensable by you except with our prior written consent. SENSEL may
            transfer, assign or delegate this Agreement and its rights and obligations without consent.
          </p>
          <p>
            Both parties agree that this Agreement is the complete and exclusive statement of the mutual understanding of the parties
            and supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the
            subject matter of this Agreement, and that all modifications must be in a writing signed by both parties, except as otherwise
            provided herein. No agency, partnership, joint venture, or employment is created as a result of this Agreement and you do not
            have any authority of any kind to bind SENSEL in any respect whatsoever.
          </p>

          {/* Section 13 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">13. LEGAL AND LAW</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of Karnataka, India without regard to the
            conflict of law’s provisions thereof. Any dispute arising from or relating to the subject matter of this Agreement shall be
            finally settled by arbitration in Bangalore, Karnataka, India using the English language.
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm">
            UNDERSTAND AND AGREE THAT BY ENTERING INTO THIS AGREEMENT, YOU AND SENSEL ARE EACH WAIVING THE RIGHT TO TRIAL BY LOCAL COURT.
          </div>
          <p>
            Notwithstanding the foregoing, each party shall have the right to institute an action in a court of proper jurisdiction for
            injunctive or other equitable relief pending a final decision by the arbitrator. For all purposes of this Agreement, the
            parties consent to exclusive jurisdiction and venue in the Indian Courts located in Bangalore, Karnataka.
          </p>

          {/* Section 14 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">14. COPYRIGHT DISPUTE POLICY</h2>
          <p>
            SENSEL has adopted the following general policy toward copyright infringement in accordance with local governing bodies. The
            address of SENSEL’s Designated Agent to Receive Notification of Claimed Infringement (Designated Agent) is listed at the end
            of this Section.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed;</li>
            <li>Identification of works or materials being infringed;</li>
            <li>Identification of the material that is claimed to be infringing including information regarding the location of the infringing materials that the copyright owner seeks to have removed, with sufficient detail so that SENSEL is capable of finding and verifying its existence;</li>
            <li>Contact information about the notifier, including address, telephone number and, if available, email address;</li>
            <li>A statement that the notifier has a good faith belief that the material identified is not authorized by the copyright owner, its agent, or the law;</li>
            <li>A statement made under penalty of perjury that the information provided is accurate and the notifying party is authorized to make the complaint on behalf of the copyright owner.</li>
          </ul>
          <p>
            Once proper bona fide infringement notification is received by the Designated Agent, it is SENSEL’s policy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To remove or disable access to the infringing material;</li>
            <li>To notify the content provider, member or user that it has removed or disabled access to the material; and</li>
            <li>That repeat offenders will have the infringing material removed from the system and that SENSEL will terminate such content provider’s, member’s or user’s access to the Services.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Procedure to Supply a Counter-Notice to the Designated Agent:</h3>
          <p>
            If the content provider, member or user believes that the material that was removed (or to which access was disabled) is not
            infringing, or the content provider, member or user believes that it has the right to post and use such material from the
            copyright owner, the copyright owner’s agent, or, pursuant to the law, the content provider, member, or user, may send a
            counter-notice containing the following information to the Designated Agent listed below:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A physical or electronic signature of the content provider, member or user;</li>
            <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled;</li>
            <li>A statement that the content provider, member or user has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material; and</li>
            <li>Content provider’s, member’s or user’s name, address, telephone number, and email address, and a statement that such person or entity consents to the jurisdiction of the Court for the judicial district in which the content provider’s, member’s or user’s address is located, or, if the content provider’s, member’s or user’s address is located outside of India, for any judicial district in which SENSEL is located, and that such person or entity will accept service of process from the person who provided notification of the alleged infringement.</li>
          </ul>
          <p>
            If a counter-notice is received by the Designated Agent, SENSEL may send a copy of the counter-notice to the original complaining
            party informing that person that SENSEL may replace the removed material or cease disabling it in 20 business days. Unless the
            copyright owner files an action seeking a court order against the content provider, member or user, the removed material may be
            replaced or access to it restored in 20 business days or more after receipt of the counter-notice, at SENSEL’s discretion.
          </p>

          <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 not-prose">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">Designated Copyright Agent Contact:</h4>
            <address className="not-italic text-sm text-slate-700 leading-relaxed font-normal">
              <strong>SENSEL</strong><br />
              Ground Floor, IndiQube Omega,<br />
              Maruti Emerald, Brookefield,<br />
              ITPL main road, Bangalore – 560037<br />
              Email:{" "}
              <a href="mailto:info@sensel.in" className="text-primary hover:underline font-medium">
                info@sensel.in
              </a>
            </address>
          </div>

          {/* Section 15 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">15. THIRD PARTY DEVICE AND APPLICATION TERMS</h2>
          <p>
            In the event you are using the Services in connection with a device provided by a Third Party or a SENSEL application
            obtained through the Google Play Store (collectively, such uses are henceforth the &ldquo;Application&rdquo;), the following
            shall apply:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Both you and SENSEL acknowledge that this Agreement is concluded between you and SENSEL only, and not with Third Party, and that Third Party is not responsible for the Application or the Content;</li>
            <li>The Application is licensed to you on a limited, non-exclusive, non-transferrable, non sub-licensable basis, solely to be used in connection with the Service for your private, personal, non-commercial use, subject to all the terms and conditions of this Agreement as they are applicable to the Service;</li>
            <li>You will only use the Application in connection with a Third Party device that you own or control;</li>
            <li>You acknowledge and agree that Third Party has no obligation whatsoever to furnish any maintenance and support services with respect to the Application;</li>
            <li>Both you and SENSEL acknowledge and agree that, in your use of the application, you will comply with any applicable third party terms of agreement which may affect or be affected by such use.</li>
          </ul>

          {/* Section 16 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">16. CONTACT</h2>
          <p>
            If you have any questions, complaints, or claims with respect to the Services, you may contact us at:
          </p>

          {/* Corporate Address & Contact Block */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 not-prose">
            <h3 className="text-lg font-bold text-slate-900 mb-2">SENSEL TELEMATICS PVT LTD</h3>
            <address className="not-italic text-sm text-slate-700 leading-relaxed font-normal">
              Ground Floor, IndiQube Omega,<br />
              Maruti Emerald, Brookefield,<br />
              ITPL main road, Bangalore – 560037
            </address>
            <p className="mt-3 text-sm text-slate-700">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@sensel.in" className="text-primary hover:underline font-medium">
                info@sensel.in
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <strong>Website:</strong>{" "}
              <a href="https://www.sensel.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                www.sensel.in
              </a>
            </p>
          </div>

          <p className="pt-4 text-xs text-slate-400">
            Effective: 10 July 2017 &bull; Updates: www.SENSEL.in
          </p>
        </div>

      </div>
    </div>
  );
}
