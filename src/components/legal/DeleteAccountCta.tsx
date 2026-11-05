import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { MailIcon } from "../icons";

/** The two ways to ask for deletion, above the explanation of what is deleted and what is kept. */
export function DeleteAccountCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).legal.deleteAccount;
  return (
    <div className="delete-cta k-surface k-surface--card">
      <p>{t.ctaText}</p>
      <div className="delete-cta__actions">
        <a className="k-btn k-btn--primary" href={site.deleteAccountFormUrl} target="_blank" rel="noopener noreferrer">
          {t.formCta}
        </a>
        <a className="k-btn" href={`mailto:${site.email}?subject=${encodeURIComponent(t.emailSubject)}`}>
          <MailIcon />
          {t.emailCta}
        </a>
      </div>
    </div>
  );
}
