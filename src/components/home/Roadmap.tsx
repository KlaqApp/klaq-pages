import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { BellIcon, BookIcon, ListIcon, PaletteIcon, UsersIcon } from "../icons";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const icons = [<BookIcon key="book" />, <PaletteIcon key="palette" />, <ListIcon key="list" />, <UsersIcon key="users" />, <BellIcon key="bell" />];

/** What's next, as a grouped list (GlassListSection) with a "coming soon" status on each row. */
export function Roadmap({ t }: { t: Dictionary["roadmap"] }) {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={v({ "--d": 1 })}>{t.title}</h2>
          <p className="section-sub" data-reveal style={v({ "--d": 2 })}>{t.subtitle}</p>
        </div>

        <ul className="k-list roadmap" data-reveal style={v({ "--d": 3 })}>
          {t.items.map((item, i) => (
            <li key={item.title}>
              <div className="k-list__row">
                <span className="k-list__icon">{icons[i]}</span>
                <span className="k-list__text">
                  <span className="k-list__label">
                    {item.title}
                    <span className="k-status" style={v({ "--k-status-color": "var(--warning)" })}>
                      {t.badge}
                    </span>
                  </span>
                  <span className="k-list__sub">{item.text}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
