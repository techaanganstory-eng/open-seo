import { Link } from "@tanstack/react-router";

export const APP_NAME = "Aanganstory";
export const CONTACT_EMAIL = "techaanganstory@gmail.com";

/** Logged-out shell shared by the public homepage and legal pages. */
export function PublicSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-base-200">
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-semibold">
            {APP_NAME}
          </Link>
          <Link to="/sign-in" className="btn btn-primary btn-sm">
            Sign in
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        {children}
      </main>
      <footer className="border-t border-base-300 bg-base-100">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-sm text-base-content/70">
          <span>© {new Date().getFullYear()} {APP_NAME}</span>
          <nav className="flex gap-4">
            <Link to="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link link-hover">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
