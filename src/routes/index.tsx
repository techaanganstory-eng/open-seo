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
      { title: `${APP_NAME} — SEO research and reporting` },
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
  const { data: session, isPending } = useSession();

  // The public page is only for logged-out visitors on the hosted deployment.
  // Everyone else goes straight to the app.
  if (isHostedClientAuthMode()) {
    if (isPending) return null;
    if (!session?.user?.id) return <PublicHome />;
  }

  return <Navigate to="/home" replace />;
}

function PublicHome() {
  return (
    <PublicSiteLayout>
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{APP_NAME}</h1>
        <p className="text-xl text-base-content/80">
          {APP_NAME} helps you research keywords, audit your website, and track
          search rankings, so you can grow organic traffic.
        </p>
        <p className="text-base-content/70">
          It is a private SEO workspace for the {APP_NAME} team. If you were
          invited, sign in to get started.
        </p>
        <a href="/sign-in" className="btn btn-primary">
          Sign in
        </a>
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
