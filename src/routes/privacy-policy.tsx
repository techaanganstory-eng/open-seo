import { createFileRoute } from "@tanstack/react-router";
import {
  APP_NAME,
  CONTACT_EMAIL,
  PublicSiteLayout,
} from "@/client/features/public/PublicSiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `${APP_NAME} Privacy Policy` },
      {
        name: "description",
        content: `How ${APP_NAME} collects, uses, shares, and protects personal data and Google user data.`,
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PublicSiteLayout>
      <article className="space-y-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_a]:link">
        <h1 className="text-4xl font-bold">{APP_NAME} Privacy Policy</h1>
        <p className="text-base-content/70">Last updated: October 9, 2026</p>

        <p>
          {APP_NAME} (&quot;we&quot;, &quot;us&quot;) operates an SEO research
          and reporting application at https://seo.aanganstory.com (the
          &quot;Service&quot;). This policy explains what information we
          collect, how we use and share it, and the choices you have. Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li>
            <strong>Account information:</strong> your name, email address, and
            a hashed password if you register with email, or your Google account
            name, email address, and profile picture if you sign in with Google.
          </li>
          <li>
            <strong>Workspace data:</strong> the projects, domains, keywords,
            audit settings, and saved reports you create in the Service.
          </li>
          <li>
            <strong>Technical data:</strong> session cookies needed to keep you
            signed in, and standard server logs (IP address, browser type, pages
            requested, timestamps) used for security and debugging.
          </li>
        </ul>

        <h2>2. Google user data</h2>
        <p>
          You can sign in with Google and, optionally, connect Google Search
          Console and Google Analytics. We request only these scopes:
        </p>
        <ul>
          <li>
            Basic profile and email (sign-in), to create and identify your
            account.
          </li>
          <li>
            <code>webmasters.readonly</code> (Google Search Console), to read
            search performance data (queries, pages, clicks, impressions,
            positions) and URL inspection results for sites you authorize.
          </li>
          <li>
            <code>analytics.readonly</code> (Google Analytics), to read report
            data and property configuration (properties, data streams, traffic
            and conversion metrics) for the property you select.
          </li>
        </ul>
        <p>
          <strong>How we use it.</strong> We use Google user data only to
          provide the user-facing features you request: signing you in, showing
          which Google account is connected, and displaying your Search Console
          and Analytics data inside the Service. We cannot modify anything in
          your Google account because all scopes are read-only.
        </p>
        <p>
          <strong>Sharing.</strong> We do not sell Google user data. We do not
          use it for advertising, and we do not use it to develop, improve, or
          train generalized AI or machine learning models. If you use the
          Service&apos;s AI assistant, the relevant data may be sent to our AI
          provider (OpenRouter and the model provider it routes to) only to
          generate the response you asked for. Otherwise we disclose Google user
          data only to our hosting infrastructure, where required by law, or
          with your consent.
        </p>
        <p>
          <strong>Storage and protection.</strong> OAuth tokens are stored
          encrypted at rest and all traffic uses TLS. Search Console and
          Analytics report data is fetched on demand to answer your requests and
          is not stored in our database. Only people on our team who operate the
          Service can access stored tokens, and only to run and secure the
          Service.
        </p>
        <p>
          <strong>Retention and deletion.</strong> We keep OAuth tokens and
          connection details (such as the selected site or property and the
          connected account email) while an integration is connected.
          Disconnecting an integration in settings removes them. You can also
          revoke access at any time at{" "}
          <a href="https://myaccount.google.com/permissions">
            myaccount.google.com/permissions
          </a>
          . To delete your account and associated data, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>; we will
          complete the deletion within 30 days.
        </p>
        <p>
          {APP_NAME}&apos;s use and transfer to any other app of information
          received from Google APIs will adhere to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2>3. How we use information</h2>
        <ul>
          <li>To create and secure your account and authenticate you.</li>
          <li>To provide, maintain, and improve the Service.</li>
          <li>
            To send transactional emails such as email verification, password
            reset, and team invitations.
          </li>
          <li>To detect abuse, fix bugs, and keep the Service secure.</li>
        </ul>

        <h2>4. Service providers</h2>
        <p>
          We share information with vendors that process it on our behalf: our
          hosting provider; DataForSEO (keyword, ranking, and backlink data for
          domains and keywords you query); OpenRouter (AI assistant features);
          and Loops (transactional email, when enabled). They may use the
          information only to provide their service to us.
        </p>

        <h2>5. How we share information</h2>
        <p>
          We do not sell your personal information and we do not share it for
          advertising. Beyond the service providers above, we disclose
          information only when the law requires it, to protect the security of
          the Service and its users, or as part of a transfer of the Service to
          a new operator, who would remain bound by this policy.
        </p>

        <h2>6. Cookies</h2>
        <p>
          The Service uses only the cookies needed to sign you in and keep your
          session secure, plus a local browser setting that remembers your light
          or dark theme. We do not use advertising cookies or third-party
          tracking cookies.
        </p>

        <h2>7. Data security</h2>
        <p>
          All connections to the Service are encrypted with TLS. Passwords are
          stored hashed, never in plain text, and Google OAuth tokens are
          encrypted at rest. Access to the production systems is limited to the
          people who operate the Service. No system is perfectly secure, so if
          we learn of a breach affecting your data we will notify you without
          undue delay.
        </p>

        <h2>8. Data retention</h2>
        <p>
          We keep your account information and workspace data for as long as
          your account exists. When you ask us to delete your account, we delete
          your account information, workspace data, and any stored Google tokens
          within 30 days. Server logs are kept for a limited period for security
          and debugging and then removed.
        </p>

        <h2>9. Your choices</h2>
        <p>
          You can access, correct, or delete your information, disconnect Google
          integrations, or revoke Google access at any time, as described above.
          For anything else, contact{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>10. Children</h2>
        <p>
          The Service is not directed to children under 13 and we do not
          knowingly collect their information.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy and will change the date above when we do.
          Material changes will be announced in the Service or by email.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about this policy or your data:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </PublicSiteLayout>
  );
}
