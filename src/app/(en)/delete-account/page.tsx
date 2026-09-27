import type { Metadata } from "next";
import { site } from "@/config/site";

// Link registered on Google Play for account deletion; it only forwards to the request form.
export const metadata: Metadata = {
  title: "Delete account — Klaq",
  robots: { index: false },
};

export default function Page() {
  return (
    <main className="not-found">
      <meta httpEquiv="refresh" content={`0; url=${site.deleteAccountFormUrl}`} />
      <div>
        <h1>Redirecting…</h1>
        <p>
          If nothing happens, <a href={site.deleteAccountFormUrl}>open the account deletion form</a>.
        </p>
      </div>
    </main>
  );
}
