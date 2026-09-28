import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";

// Every browser gets the phone showing the first screen plus the full caption list below it
// (see the base rules for .tour in globals.css). Browsers that support CSS scroll-driven
// animations (`animation-timeline: view()`) get the enhanced version: the section grows tall,
// the phone pins in place, and each screen crossfades in as the section scrolls past.
const range = (i: number, n: number) => {
  const seg = 100 / n;
  const start = Math.max(0, i * seg - 4);
  const end = Math.min(100, (i + 1) * seg + 4);
  return `${start}% ${end}%`;
};

export function AppTour({ t }: { t: Dictionary["tour"] }) {
  const n = t.screens.length;

  return (
    <section id="tour" className="tour" style={{ "--n": n } as CSSProperties}>
      <div className="tour__sticky">
        <div className="container tour__head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={{ "--d": 1 } as CSSProperties}>{t.title}</h2>
          <p className="section-sub" data-reveal style={{ "--d": 2 } as CSSProperties}>{t.subtitle}</p>
        </div>

        <div className="tour__stage">
          <div className="phone tour__phone">
            <div className="phone__screen">
              {t.screens.map((s, i) => (
                <img
                  key={s.title}
                  className="tour__frame"
                  src={s.image}
                  alt=""
                  width={640}
                  height={1409}
                  style={{ animationRange: range(i, n) } as CSSProperties}
                />
              ))}
            </div>
          </div>

          <div className="tour__side">
            <div className="tour__captions">
              {t.screens.map((s, i) => (
                <div key={s.title} className="tour__caption" style={{ animationRange: range(i, n) } as CSSProperties}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="tour__dots" aria-hidden>
              {t.screens.map((s, i) => (
                <i key={s.title} className="tour__dot" style={{ animationRange: range(i, n) } as CSSProperties} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
