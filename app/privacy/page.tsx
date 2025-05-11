import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | SystemDesignPro",
  description: "Privacy policy for using the SystemDesignPro platform",
}

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: May 1, 2025</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>1. Introduction</h2>
        <p>
          At SystemDesignPro, we respect your privacy and are committed to protecting your personal data. This privacy
          policy will inform you about how we look after your personal data when you visit our website and tell you
          about your privacy rights and how the law protects you.
        </p>

        <h2>2. The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped
          together as follows:
        </p>
        <ul>
          <li>
            <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
          </li>
          <li>
            <strong>Contact Data</strong> includes email address.
          </li>
          <li>
            <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and
            version, time zone setting and location, browser plug-in types and versions, operating system and platform,
            and other technology on the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data</strong> includes information about how you use our website and services.
          </li>
        </ul>

        <h2>3. How We Collect Your Personal Data</h2>
        <p>We use different methods to collect data from and about you including through:</p>
        <ul>
          <li>
            <strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or
            by corresponding with us by email or otherwise.
          </li>
          <li>
            <strong>Automated technologies or interactions.</strong> As you interact with our website, we may
            automatically collect Technical Data about your equipment, browsing actions and patterns.
          </li>
        </ul>

        <h2>4. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>
            Where it is necessary for our legitimate interests (or those of a third party) and your interests and
            fundamental rights do not override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
        <p>
          Generally, we do not rely on consent as a legal basis for processing your personal data although we will get
          your consent before sending third party direct marketing communications to you via email. You have the right
          to withdraw consent to marketing at any time by contacting us.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
          used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal
          data to those employees, agents, contractors and other third parties who have a business need to know. They
          will only process your personal data on our instructions and they are subject to a duty of confidentiality.
        </p>
        <p>
          We have put in place procedures to deal with any suspected personal data breach and will notify you and any
          applicable regulator of a breach where we are legally required to do so.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
          collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting
          requirements. We may retain your personal data for a longer period in the event of a complaint or if we
          reasonably believe there is a prospect of litigation in respect to our relationship with you.
        </p>

        <h2>7. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data.
          These include the right to:
        </p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>
        <p>If you wish to exercise any of the rights set out above, please contact us.</p>

        <h2>8. Third-Party Links</h2>
        <p>
          This website may include links to third-party websites, plug-ins and applications. Clicking on those links or
          enabling those connections may allow third parties to collect or share data about you. We do not control these
          third-party websites and are not responsible for their privacy statements. When you leave our website, we
          encourage you to read the privacy policy of every website you visit.
        </p>

        <h2>9. Cookies</h2>
        <p>
          You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
          cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible
          or not function properly.
        </p>

        <h2>10. Changes to the Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new
          privacy policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our website, prior to the change becoming
          effective and update the "last updated" date at the top of this privacy policy.
        </p>
        <p>
          You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are
          effective when they are posted on this page.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at privacy@systemdesignpro.com.</p>
      </div>
    </div>
  )
}
