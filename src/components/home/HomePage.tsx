import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { StoreBadges } from "../StoreBadges";
import { HeartIcon, MailIcon, ServerIcon, SparkIcon, UsersIcon } from "../icons";
import { AppTour } from "./AppTour";
import { Community } from "./Community";
import { Features } from "./Features";
import { PhoneMockup } from "./PhoneMockup";
import { Roadmap } from "./Roadmap";

const d = (n: number) => ({ "--d": n }) as CSSProperties;
const supportIcons = [<ServerIcon key="server" />, <SparkIcon key="spark" />, <UsersIcon key="users" />];

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} route="/" />
      <main id="main">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.hero.eyebrow}</span>
              <h1 className="hero__title">
                <span data-reveal style={d(1)}>{t.hero.titleLead}</span>
                <span className="accent-text" data-reveal style={d(2)}>{t.hero.titleAccent}</span>
              </h1>
              <p className="hero__sub" data-reveal style={d(3)}>{t.hero.subtitle}</p>
              <div data-reveal style={d(4)}>
                <StoreBadges t={t.stores} />
              </div>
            </div>
            <div className="hero__visual">
              <PhoneMockup t={t.mockup} />
            </div>
          </div>
          <ul className="container media-types" aria-label={t.marquee.join(", ")} data-reveal style={d(5)}>
            {t.marquee.map((word) => (
              <li key={word} className="k-chip" aria-hidden>
                {word}
              </li>
            ))}
          </ul>
        </section>

        <Features t={t.features} season={t.mockup.season} score={t.mockup.score} />

        <Community t={t.community} />

        <AppTour t={t.tour} />

        <Roadmap t={t.roadmap} />

        <section id="download" className="section">
          <div className="container">
            <div className="download k-surface k-surface--card" data-reveal>
              <img className="app-icon" src="/app-icon.png" alt="Klaq" width={88} height={88} />
              <span className="k-eyebrow k-eyebrow--accent">{t.download.eyebrow}</span>
              <h2 className="section-title">{t.download.title}</h2>
              <p className="section-sub">{t.download.subtitle}</p>
              <StoreBadges t={t.stores} />
              <div className="beta">
                <p>{t.beta.subtitle}</p>
                <a
                  className="k-btn k-btn--md"
                  {...(site.betaFormUrl
                    ? { href: site.betaFormUrl, target: "_blank", rel: "noopener noreferrer" }
                    : { href: `mailto:${site.email}?subject=${encodeURIComponent(t.beta.emailSubject)}` })}
                >
                  {t.beta.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contribute" className="section section--flush-top">
          <div className="container contribute">
            <div className="contribute__copy">
              <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.contribute.eyebrow}</span>
              <h2 className="section-title" data-reveal style={d(1)}>{t.contribute.title}</h2>
              <p className="section-sub" data-reveal style={d(2)}>{t.contribute.subtitle}</p>
              <div className="contribute__actions" data-reveal style={d(3)}>
                <a
                  className="k-btn k-btn--primary"
                  {...(site.supportUrl
                    ? { href: site.supportUrl, target: "_blank", rel: "noopener noreferrer" }
                    : { href: `mailto:${site.email}?subject=${encodeURIComponent(t.contribute.emailSubject)}` })}
                >
                  <HeartIcon />
                  {t.contribute.cta}
                </a>
                <a className="k-btn" href={`mailto:${site.email}`}>
                  <MailIcon />
                  {t.contribute.feedback}
                </a>
              </div>
            </div>
            <ul className="k-list" data-reveal style={d(2)}>
              {t.contribute.cards.map((card, i) => (
                <li key={card.title}>
                  <div className="k-list__row">
                    <span className="k-list__icon">{supportIcons[i]}</span>
                    <span className="k-list__text">
                      <span className="k-list__label">{card.title}</span>
                      <span className="k-list__sub">{card.text}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} route="/" />
    </>
  );
}
