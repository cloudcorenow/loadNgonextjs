import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Notice | Load N-GO Laundry',
  description: 'Privacy Notice for Load N-GO Laundry located at 4621 Rosemead Blvd, Pico Rivera, CA 90660.',
};

const LAST_UPDATED = 'June 9, 2025';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div className="privacy-page wrap wrap--narrow">
          <div className="privacy-hero">
            <span className="eyebrow">Legal</span>
            <h1 className="h1">Privacy Notice</h1>
            <p className="privacy-meta">Effective Date: {LAST_UPDATED} &nbsp;|&nbsp; Last Updated: {LAST_UPDATED}</p>
          </div>

          <div className="privacy-body">
            <p>
              Load N-GO (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the laundromat located at 4621 Rosemead Blvd, Pico Rivera, CA 90660, and this website at <strong>load-n-go.biz</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Notice explains what information we collect, how we use it, and your rights as a California resident under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
            </p>
            <p>
              Please read this notice carefully. If you have questions, contact us using the details at the bottom of this page.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Identifiers</strong> — such as your name, phone number, email address, and mailing address when you contact us, place a wash &amp; fold order, or sign up for promotions.</li>
              <li><strong>Payment information</strong> — when you add value to a reloadable Load N-GO card or pay for services, payment processors handle your card details. We do not store full payment card numbers.</li>
              <li><strong>Order and transaction data</strong> — pickup and delivery addresses, laundry preferences, order history, and service notes related to wash &amp; fold orders.</li>
              <li><strong>Usage data</strong> — IP address, browser type, pages visited, time spent on the website, and referring URLs collected automatically via cookies and similar technologies.</li>
              <li><strong>Communications</strong> — records of messages, emails, or texts you send us.</li>
              <li><strong>Security footage</strong> — our physical location uses security cameras for the safety of customers and staff. Footage is retained for a limited period and is not shared except as required by law.</li>
            </ul>
            <p>We do not knowingly collect sensitive personal information such as Social Security numbers, driver&rsquo;s license numbers, financial account credentials, health data, or precise geolocation beyond what is necessary to fulfill a pickup or delivery order.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill wash &amp; fold pickup and delivery orders.</li>
              <li>Operate, maintain, and improve our website and services.</li>
              <li>Process reloadable card transactions and manage account balances.</li>
              <li>Send order confirmations, service updates, and promotional offers (you may opt out at any time).</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Comply with legal obligations and protect the safety of our business and customers.</li>
              <li>Analyze website usage to improve user experience.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul>
              <li><strong>Service providers</strong> — third-party vendors that help us operate our business, such as our online ordering platform (Cents), payment processors, and email or SMS providers. These parties are contractually required to protect your information.</li>
              <li><strong>Legal authorities</strong> — when required by law, court order, or government regulation, or to protect our rights, property, or the safety of others.</li>
              <li><strong>Business transfers</strong> — in the event of a merger, sale, or acquisition, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
            </ul>
            <p>We do not share personal information with advertisers or data brokers for marketing purposes without your consent.</p>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
            </p>
            <p>We do not respond to Do Not Track (DNT) signals at this time, as there is no consistent industry standard for doing so.</p>

            <h2>5. Your California Privacy Rights</h2>
            <p>If you are a California resident, you have the following rights under the CCPA and CPRA:</p>
            <ul>
              <li><strong>Right to Know</strong> — You may request details about the categories and specific pieces of personal information we have collected about you, the sources of that information, our business purposes for collecting it, and the categories of third parties with whom we share it.</li>
              <li><strong>Right to Delete</strong> — You may request that we delete personal information we have collected from you, subject to certain exceptions (e.g., completing a transaction, complying with a legal obligation).</li>
              <li><strong>Right to Correct</strong> — You may request that we correct inaccurate personal information we hold about you.</li>
              <li><strong>Right to Opt-Out of Sale or Sharing</strong> — We do not sell or share personal information for cross-context behavioral advertising. If this practice changes, we will update this notice and provide an opt-out mechanism.</li>
              <li><strong>Right to Limit Use of Sensitive Personal Information</strong> — To the extent we collect sensitive personal information (as defined by the CPRA), you may request that we limit its use to what is necessary to perform the requested services.</li>
              <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising any of your privacy rights. We will not deny you services, charge different prices, or provide a different quality of service because you exercised your rights.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information in Section 9 below. We will respond to verifiable requests within 45 days as required by California law. We may need to verify your identity before processing your request.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this notice, unless a longer retention period is required by law. Order records are typically retained for up to three years for accounting and legal compliance purposes. Security camera footage is generally overwritten within 30 days unless preserved for an active investigation.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use caution when sharing personal information online.
            </p>

            <h2>8. Children&rsquo;s Privacy</h2>
            <p>
              Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
            </p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Notice or wish to exercise your California privacy rights, please contact us:</p>
            <address>
              <strong>Load N-GO Laundry</strong><br />
              4621 Rosemead Blvd<br />
              Pico Rivera, CA 90660<br />
              Phone: <a href="tel:5624540101">562-454-0101</a><br />
              Email: <a href="mailto:info@load-n-go.biz">info@load-n-go.biz</a>
            </address>

            <h2>10. Changes to This Notice</h2>
            <p>
              We may update this Privacy Notice from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated notice on this page with a revised effective date. We encourage you to review this page periodically. Your continued use of our website or services after any changes constitutes your acceptance of the updated notice.
            </p>
          </div>

          <div className="privacy-back">
            <a href="/" className="btn btn--outline">&larr; Back to Home</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
