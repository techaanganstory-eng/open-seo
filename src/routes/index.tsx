import { Navigate, createFileRoute } from "@tanstack/react-router";
import {
  APP_NAME,
  CONTACT_EMAIL,
  PublicSiteLayout,
} from "@/client/features/public/PublicSiteLayout";
import { useSession } from "@/lib/auth-client";
import { isHostedClientAuthMode } from "@/lib/auth-mode";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Exactly the app name: Google's OAuth verification compares the
      // homepage against the consent-screen app name.
      { title: APP_NAME },
      {
        name: "description",
        content: `${APP_NAME} is an SEO tool for keyword research, site audits, rank tracking, and Google Search Console and Google Analytics reporting.`,
      },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  {
    title: "Keyword research",
    body: "Find keywords, search volumes, and difficulty for your market.",
  },
  {
    title: "Site audits",
    body: "Crawl your site and get a prioritized list of technical SEO issues.",
  },
  {
    title: "Rank tracking",
    body: "Track where your pages rank for the keywords that matter.",
  },
  {
    title: "Google Search Console and Analytics",
    body: "Optionally connect your own Google account to see clicks, impressions, queries, and traffic next to your SEO data. Access is read-only.",
  },
];

function HomePage() {
  const { data: session } = useSession();

  // Logged-out visitors on the hosted deployment get the public page. It also
  // renders while the session is still loading, so the server-rendered HTML
  // carries the content for crawlers that don't run JavaScript.
  if (isHostedClientAuthMode() && !session?.user?.id) {
    return <PublicHome />;
  }

  return <Navigate to="/home" replace />;
}

function PublicHome() {
  return (
    <PublicSiteLayout>
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{APP_NAME}</h1>
        <p className="text-xl text-base-content/80">
          {APP_NAME} is an SEO research and reporting app. It helps website
          owners and marketers research keywords, audit their sites for
          technical SEO issues, track search rankings, and understand their
          organic traffic.
        </p>
        <p className="text-base-content/70">
          The purpose of {APP_NAME} is to bring the data you need to grow search
          traffic into one place: keyword and competitor data, site crawl
          results, rank history, and, if you connect them, your own Google
          Search Console and Google Analytics reports.
        </p>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-lg">{feature.title}</h2>
              <p className="text-base-content/70">{feature.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 space-y-2">
        <h2 className="text-2xl font-semibold">How we use Google data</h2>
        <p className="text-base-content/70">
          {APP_NAME} uses Google sign-in to identify you, and, only if you
          choose to connect them, read-only access to Google Search Console and
          Google Analytics to show your own site&apos;s performance. We never
          modify your Google data, and we do not use it for advertising or to
          train AI models. See our{" "}
          <a href="/privacy-policy" className="link">
            Privacy Policy
          </a>{" "}
          for details, or contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </PublicSiteLayout>
  );
}
