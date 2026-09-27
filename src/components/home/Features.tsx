import type { CSSProperties, ReactNode } from "react";
import type { Dictionary } from "@/i18n";
import { AccentPicker } from "../client/AccentPicker";
import {
  BookmarkIcon,
  ChartIcon,
  ClockIcon,
  PaletteIcon,
  PlayIcon,
  StarIcon,
  SyncIcon,
  UsersIcon,
} from "../icons";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

function Tile({
  icon,
  title,
  text,
  wide,
  order,
  children,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  wide?: boolean;
  order: number;
  children?: ReactNode;
}) {
  return (
    <article className={`tile glass${wide ? " tile--wide" : ""}`} data-reveal style={v({ "--d": order % 4 })}>
      <span className="icon-chip">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {children && <div className="tile__visual">{children}</div>}
    </article>
  );
}

function EpisodeGrid({ season }: { season: string }) {
  const seasons = [
    { label: `${season}1`, total: 10, watched: 10 },
    { label: `${season}2`, total: 10, watched: 4 },
  ];
  return (
    <div className="episodes" aria-hidden>
      {seasons.map((s) => (
        <div className="episodes__row" key={s.label}>
          <span className="episodes__label">{s.label}</span>
          <div className="episodes__dots">
            {Array.from({ length: s.total }, (_, i) => (
              <i
                key={i}
                style={v({ "--i": i })}
                data-on={i < s.watched ? "" : undefined}
                data-next={i === s.watched ? "" : undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Stars() {
  // 4.5 stars: the last one is clipped halfway.
  const clips = ["0%", "0%", "0%", "0%", "50%"];
  return (
    <div className="big-stars" aria-hidden>
      {clips.map((clip, i) => (
        <span key={i} className="fill-wrap">
          <StarIcon style={{ color: "color-mix(in srgb, var(--text) 14%, transparent)" }} />
          <StarIcon className="fill" style={v({ "--i": i, "--clip": clip })} />
        </span>
      ))}
    </div>
  );
}

const barHeights = [38, 62, 45, 80, 56, 100, 72];
const avatarGradients = [
  ["#7fd8c9", "#3e9e93"],
  ["#b7a3ee", "#7059c2"],
  ["#f2a38e", "#c7614f"],
  ["#f3cd86", "#c9913a"],
];

export function Features({ t, season }: { t: Dictionary["features"]; season: string }) {
  const f = t.items;
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={v({ "--d": 1 })}>{t.title}</h2>
          <p className="section-sub" data-reveal style={v({ "--d": 2 })}>{t.subtitle}</p>
        </div>

        <div className="bento">
          <Tile wide order={0} icon={<PlayIcon />} title={f.progress.title} text={f.progress.text}>
            <EpisodeGrid season={season} />
          </Tile>
          <Tile order={1} icon={<StarIcon />} title={f.ratings.title} text={f.ratings.text}>
            <Stars />
          </Tile>
          <Tile order={2} icon={<BookmarkIcon />} title={f.watchlist.title} text={f.watchlist.text}>
            <div className="stack" aria-hidden>
              <div className="m-poster art-6" />
              <div className="m-poster art-1">
                <span className="bookmark" />
              </div>
              <div className="m-poster art-2" />
            </div>
          </Tile>

          <Tile wide order={0} icon={<ChartIcon />} title={f.stats.title} text={f.stats.text}>
            <div className="stats" aria-hidden>
              <div className="stats__num">
                42h
                <small>{t.statsLabel}</small>
              </div>
              <div className="bars">
                {barHeights.map((h, i) => (
                  <div key={i}>
                    <i style={v({ "--h": `${h}%`, "--i": i })} />
                    <span>{t.days[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tile>
          <Tile order={1} icon={<ClockIcon />} title={f.history.title} text={f.history.text}>
            <ul className="timeline" aria-hidden>
              {t.historyItems.map((item, i) => (
                <li key={item}>
                  {item}
                  <span>{["21:40", "20:15", "18:02"][i]}</span>
                </li>
              ))}
            </ul>
          </Tile>
          <Tile order={2} icon={<UsersIcon />} title={f.social.title} text={f.social.text}>
            <div className="avatars" aria-hidden>
              {["A", "M", "J", "L"].map((initial, i) => (
                <span
                  key={initial}
                  style={v({
                    "--i": i,
                    background: `linear-gradient(135deg, ${avatarGradients[i][0]}, ${avatarGradients[i][1]})`,
                  })}
                >
                  {initial}
                </span>
              ))}
            </div>
          </Tile>

          <Tile wide order={0} icon={<SyncIcon />} title={f.offline.title} text={f.offline.text}>
            <span className="sync" aria-hidden>
              <SyncIcon />
              {t.synced}
            </span>
          </Tile>
          <Tile wide order={1} icon={<PaletteIcon />} title={f.theme.title} text={f.theme.text}>
            <AccentPicker labels={t.accents} />
          </Tile>
        </div>
      </div>
    </section>
  );
}
