import { htmlLang, localePath, otherLocale, type Locale, type Route } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { HeaderScroll } from "./client/HeaderScroll";
import { LanguageSwitch } from "./client/LanguageSwitch";

export function SiteHeader({ locale, route }: { locale: Locale; route: Route }) {
  const t = getDictionary(locale);
  const home = localePath(locale);
  const target = otherLocale(locale);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <HeaderScroll>
        <div className="container">
          <div className="site-header__bar">
            <a className="brand" href={home} aria-label={`Klaq — ${t.nav.home}`}>
              <img src="/icon.png" alt="" width={32} height={32} />
              Klaq
            </a>
            <nav className="site-nav" aria-label="Primary">
              <a href={`${home}#features`}>{t.nav.features}</a>
              <a href={`${home}#download`}>{t.nav.download}</a>
              <a href={`${home}#contribute`}>{t.nav.contribute}</a>
            </nav>
            <div className="site-header__actions">
              <LanguageSwitch
                href={localePath(target, route)}
                target={target}
                hreflang={htmlLang[target]}
                label={t.language.switchTo}
                short={t.language.short}
              />
              <a className="btn btn--accent btn--sm" href={`${home}#download`}>
                {t.nav.download}
              </a>
            </div>
          </div>
        </div>
      </HeaderScroll>
    </>
  );
}
