import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { StoreBadges } from "../StoreBadges";
import { HeartIcon, MailIcon, ServerIcon, SparkIcon, UsersIcon } from "../icons";
import { AppTour } from "./AppTour";
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
            <div>
              <span className="eyebrow" data-reveal>{t.hero.eyebrow}</span>
              <h1 className="hero__title">
                <span data-reveal style={d(1)}>{t.hero.titleLead}</span>
                <span className="accent-text" data-reveal style={d(2)}>{t.hero.titleAccent}</span>
              </h1>
              <p className="hero__sub" data-reveal style={d(3)}>{t.hero.subtitle}</p>
              <div data-reveal style={d(4)}>
                <StoreBadges t={t.stores} />
              </div>
              <a className="scroll-cue" href="#features" data-reveal style={d(5)}>
                <span className="scroll-cue__line" aria-hidden />
                {t.hero.scroll}
              </a>
            </div>
            <div className="hero__visual">
              <PhoneMockup t={t.mockup} />
            </div>
          </div>
        </section>

        <div className="marquee" aria-label={t.marquee.join(", ")}>
          <div className="marquee__track" aria-hidden>
            {[...t.marquee, ...t.marquee].map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>

        <Features t={t.features} season={t.mockup.season} />

        <AppTour t={t.tour} />

        <Roadmap t={t.roadmap} />

        <section id="download" className="section">
          <div className="container">
            <div className="download glass" data-reveal>
              <img className="app-icon" src="/icon.png" alt="Klaq" width={104} height={104} />
              <span className="eyebrow">{t.download.eyebrow}</span>
              <h2 className="section-title">{t.download.title}</h2>
              <p className="section-sub">{t.download.subtitle}</p>
              <StoreBadges t={t.stores} />
              <div className="beta">
                <p>{t.beta.subtitle}</p>
                <a className="btn btn--glass" href={site.betaFormUrl} target="_blank" rel="noopener noreferrer">
                  {t.beta.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contribute" className="section section--flush-top">
          <div className="container contribute">
            <div>
              <span className="eyebrow" data-reveal>{t.contribute.eyebrow}</span>
              <h2 className="section-title" data-reveal style={d(1)}>{t.contribute.title}</h2>
              <p className="section-sub" data-reveal style={d(2)}>{t.contribute.subtitle}</p>
              <div className="contribute__actions" data-reveal style={d(3)}>
                <a
                  className="btn btn--accent"
                  {...(site.supportUrl
                    ? { href: site.supportUrl, target: "_blank", rel: "noopener noreferrer" }
                    : { href: `mailto:${site.email}?subject=${encodeURIComponent(t.contribute.emailSubject)}` })}
                >
                  <HeartIcon />
                  {t.contribute.cta}
                </a>
                <a className="btn btn--glass" href={`mailto:${site.email}`}>
                  <MailIcon />
                  {t.contribute.feedback}
                </a>
              </div>
            </div>
            <div className="contribute__cards">
              {t.contribute.cards.map((card, i) => (
                <div className="mini-card glass" key={card.title} data-reveal style={d(i + 1)}>
                  <span className="icon-chip">{supportIcons[i]}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} route="/" />
    </>
  );
}
