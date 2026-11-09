import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";

// Every browser gets the phone showing the first screen plus the full caption list below it
// (see the base rules for .tour in globals.css). Browsers that support CSS scroll-driven
// animations (`animation-timeline: view()`) get the enhanced version: the section grows tall,
// the phone pins in place, and each screen crossfades in as the section scrolls past.
//
// The ranges live in `contain`, the stretch where the tall section covers the whole viewport
// (exactly while the phone is pinned). The default `cover` range also counts the scroll while the
// section enters and leaves, so the first screen was already gone by the time the phone pinned.
// The first and last items use keyframes without the fade at the outer end (globals.css), so the
// first screen already shows while the section scrolls in and the last one stays as it leaves.
// Frames overlap by `pad` to crossfade; captions use no overlap, so two lines of text never sit on
// top of each other.
const range = (i: number, n: number, pad: number) => {
  const seg = 100 / n;
  const pct = (v: number) => `${+v.toFixed(2)}%`;
  return `contain ${pct(i * seg - pad)} contain ${pct((i + 1) * seg + pad)}`;
};

export function AppTour({ t }: { t: Dictionary["tour"] }) {
  const n = t.screens.length;

  return (
    <section id="tour" className="tour" style={{ "--n": n } as CSSProperties}>
      <div className="tour__sticky">
        <div className="container tour__head">
          <div className="section-head">
            <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.eyebrow}</span>
            <h2 className="section-title" data-reveal style={{ "--d": 1 } as CSSProperties}>{t.title}</h2>
            <p className="section-sub" data-reveal style={{ "--d": 2 } as CSSProperties}>{t.subtitle}</p>
          </div>
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
                  style={{ animationRange: range(i, n, 4) } as CSSProperties}
                />
              ))}
            </div>
          </div>

          <div className="tour__side">
            <ul className="tour__captions">
              {t.screens.map((s, i) => (
                <li key={s.title} className="tour__caption" style={{ animationRange: range(i, n, 0) } as CSSProperties}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
            <div className="tour__dots" aria-hidden>
              {t.screens.map((s, i) => (
                <i key={s.title} className="tour__dot" style={{ animationRange: range(i, n, 0) } as CSSProperties} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
