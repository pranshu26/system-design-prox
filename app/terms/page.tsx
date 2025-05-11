import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | SystemDesignPro",
  description: "Terms of service for using the SystemDesignPro platform",
}

export default function TermsPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: May 1, 2025</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>1. Introduction</h2>
        <p>
          Welcome to SystemDesignPro. These Terms of Service ("Terms") govern your use of our website located at
          systemdesignpro.com (the "Service") operated by SystemDesignPro ("we", "us", or "our").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the
          terms, then you may not access the Service.
        </p>

        <h2>2. Open Source License</h2>
        <p>SystemDesignPro is an open-source project licensed under the MIT License. This means you are free to:</p>
        <ul>
          <li>Use the code for any purpose</li>
          <li>Change the code to suit your needs</li>
          <li>Share the code with anyone</li>
          <li>Distribute the code to anyone</li>
        </ul>
        <p>For more details, please see the LICENSE file in our GitHub repository.</p>

        <h2>3. Content License</h2>
        <p>
          Unless otherwise stated, the educational content on SystemDesignPro is licensed under a Creative Commons
          Attribution-NonCommercial-ShareAlike 4.0 International License. This means you are free to:
        </p>
        <ul>
          <li>Share — copy and redistribute the material in any medium or format</li>
          <li>Adapt — remix, transform, and build upon the material</li>
        </ul>
        <p>Under the following terms:</p>
        <ul>
          <li>
            Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were
            made.
          </li>
          <li>NonCommercial — You may not use the material for commercial purposes.</li>
          <li>
            ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions
            under the same license as the original.
          </li>
        </ul>

        <h2>4. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features, and functionality are
          and will remain the exclusive property of SystemDesignPro and its licensors. The Service is protected by
          copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        <h2>6. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by
          SystemDesignPro.
        </p>
        <p>
          SystemDesignPro has no control over, and assumes no responsibility for, the content, privacy policies, or
          practices of any third-party web sites or services. You further acknowledge and agree that SystemDesignPro
          shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
          caused by or in connection with use of or reliance on any such content, goods or services available on or
          through any such web sites or services.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
          you may simply discontinue using the Service.
        </p>

        <h2>8. Limitation Of Liability</h2>
        <p>
          In no event shall SystemDesignPro, nor its directors, employees, partners, agents, suppliers, or affiliates,
          be liable for any indirect, incidental, special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
          to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the
          Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content.
        </p>

        <h2>9. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
          The Service is provided without warranties of any kind, whether express or implied, including, but not limited
          to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of
          performance.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard
          to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect.
        </p>

        <h2>11. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes
          a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>

        <h2>12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@systemdesignpro.com.</p>
      </div>
    </div>
  )
}
