import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { BellIcon, BookIcon, ListIcon, PaletteIcon, UsersIcon } from "../icons";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const icons = [<BookIcon key="book" />, <PaletteIcon key="palette" />, <ListIcon key="list" />, <UsersIcon key="users" />, <BellIcon key="bell" />];

export function Roadmap({ t }: { t: Dictionary["roadmap"] }) {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={v({ "--d": 1 })}>{t.title}</h2>
          <p className="section-sub" data-reveal style={v({ "--d": 2 })}>{t.subtitle}</p>
        </div>

        <div className="roadmap-grid">
          {t.items.map((item, i) => (
            <div className="mini-card glass" key={item.title} data-reveal style={v({ "--d": i + 1 })}>
              <span className="icon-chip">{icons[i]}</span>
              <div>
                <h3>
                  {item.title}
                  <span className="roadmap-badge">{t.badge}</span>
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
