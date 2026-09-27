import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { htmlLang, localePath, otherLocale, type Locale, type Route } from "@/i18n/config";
import { LanguageSwitch } from "./client/LanguageSwitch";

export function SiteFooter({ locale, route }: { locale: Locale; route: Route }) {
  const t = getDictionary(locale);
  const home = localePath(locale);
  const target = otherLocale(locale);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href={home}>
              <img src="/icon.png" alt="" width={32} height={32} />
              Klaq
            </a>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer__col">
            <h4>{t.footer.project}</h4>
            <ul>
              <li><a href={`${home}#features`}>{t.nav.features}</a></li>
              <li><a href={`${home}#download`}>{t.nav.download}</a></li>
              <li><a href={`${home}#contribute`}>{t.nav.contribute}</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t.footer.legal}</h4>
            <ul>
              <li><a href={localePath(locale, "/privacy/")}>{t.footer.privacy}</a></li>
              <li><a href={localePath(locale, "/terms-and-conditions/")}>{t.footer.terms}</a></li>
              <li><a href="/delete-account/">{t.footer.deleteAccount}</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t.footer.contact}</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="tmdb">
            <a className="tmdb__logo" href={site.tmdbUrl} target="_blank" rel="noopener noreferrer">TMDB</a>
            <span>{t.footer.tmdb}</span>
          </div>
          <div className="footer__meta">
            <span>© {new Date().getFullYear()} Klaq. {t.footer.rights}</span>
            <LanguageSwitch
              href={localePath(target, route)}
              target={target}
              hreflang={htmlLang[target]}
              label={t.language.switchTo}
              short={t.language.switchTo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
