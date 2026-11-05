import type { CSSProperties, ReactNode } from "react";
import type { Dictionary } from "@/i18n";
import { AccentPicker } from "../client/AccentPicker";
import {
  BookIcon,
  BookmarkIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  PaletteIcon,
  PlayIcon,
  ShareIcon,
  StarIcon,
  SyncIcon,
} from "../icons";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

/** A feature tile: LunaCard at hero radius, icon in a fill-2 circle, title-3 + subheadline. */
export function Tile({
  icon,
  title,
  text,
  wide,
  full,
  order,
  children,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  wide?: boolean;
  /** Spans the whole row on the 3-column grid (one column on the 2-column one). */
  full?: boolean;
  order: number;
  children?: ReactNode;
}) {
  return (
    <article className={`tile k-card k-card--hero${wide ? " tile--wide" : ""}${full ? " tile--full" : ""}`} data-reveal style={v({ "--d": order % 4 })}>
      <span className="tile__icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {children && <div className="tile__visual">{children}</div>}
    </article>
  );
}

/** Seasons as ProgressCountRow ("10 of 10") and the next episode as StatusPill + EpisodeCode. */
function Seasons({ season, of, nextUp }: { season: string; of: string; nextUp: string }) {
  const seasons = [
    { label: `${season}1`, total: 10, watched: 10 },
    { label: `${season}2`, total: 10, watched: 4 },
  ];
  return (
    <div aria-hidden>
      <div className="seasons">
        {seasons.map((s) => (
          <div className="seasons__row" key={s.label}>
            <span className="k-code">{s.label}</span>
            <div className="k-progress-row">
              <div className="k-progress" style={v({ "--value": s.watched / s.total })}>
                <span className="k-progress__fill" />
              </div>
              <span className="k-progress-row__count">
                {s.watched} {of} {s.total}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="next-up">
        <span className="k-status">{nextUp}</span>
        <span className="k-code">S02E05</span>
      </div>
    </div>
  );
}

function Stars({ share, score }: { share: string; score: string }) {
  // 4.5 stars: the last one is clipped halfway.
  const clips = ["0%", "0%", "0%", "0%", "50%"];
  return (
    <div aria-hidden>
      <div className="big-stars">
        {clips.map((clip, i) => (
          <span key={i}>
            <StarIcon />
            <StarIcon className="fill" style={v({ "--i": i, "--clip": clip })} />
          </span>
        ))}
      </div>
      <div className="rating-line">
        <span className="k-badge k-badge--rating k-badge--md">
          <StarIcon />
          {score}
        </span>
        <span className="k-btn k-btn--sm">
          <ShareIcon />
          {share}
        </span>
      </div>
    </div>
  );
}

/** A book being read: cover + StatusPill + page progress, and the three shelves as chips. */
function Book({ status, pages, shelves }: { status: string; pages: string; shelves: string[] }) {
  return (
    <div aria-hidden>
      <div className="book">
        <div className="k-poster k-poster--thumb art-2" />
        <div className="book__info">
          <span className="k-status">{status}</span>
          <div className="k-progress" style={v({ "--value": 184 / 320 })}>
            <span className="k-progress__fill" />
          </div>
          <span className="book__pages">{pages}</span>
        </div>
      </div>
      <div className="book__shelves">
        {shelves.map((shelf, i) => (
          <span key={shelf} className="k-chip" data-active={i === 1 ? "" : undefined}>
            {shelf}
          </span>
        ))}
      </div>
    </div>
  );
}

const barHeights = [0.38, 0.62, 0.45, 0.8, 0.56, 1, 0.72];
const CURRENT_DAY = 5;

export function Features({ t, season, score }: { t: Dictionary["features"]; season: string; score: string }) {
  const f = t.items;
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={v({ "--d": 1 })}>{t.title}</h2>
          <p className="section-sub" data-reveal style={v({ "--d": 2 })}>{t.subtitle}</p>
        </div>

        <div className="bento">
          <Tile wide order={0} icon={<PlayIcon />} title={f.progress.title} text={f.progress.text}>
            <Seasons season={season} of={t.of} nextUp={t.nextUp} />
          </Tile>
          <Tile order={1} icon={<StarIcon />} title={f.ratings.title} text={f.ratings.text}>
            <Stars share={t.shareRating} score={score} />
          </Tile>
          <Tile order={2} icon={<BookmarkIcon />} title={f.watchlist.title} text={f.watchlist.text}>
            <div className="stack" aria-hidden>
              <div className="k-poster art-3" />
              <div className="k-poster art-1">
                <span className="k-badge">
                  <BookmarkIcon />
                </span>
              </div>
              <div className="k-poster art-2" />
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
                    <i style={v({ "--h": h, "--i": i })} data-current={i === CURRENT_DAY ? "" : undefined} />
                    <span>{t.days[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tile>
          <Tile order={1} icon={<ClockIcon />} title={f.history.title} text={f.history.text}>
            <ul className="history" aria-hidden>
              {t.historyItems.map((item, i) => (
                <li key={item}>
                  {item}
                  <time>{["21:40", "20:15", "18:02"][i]}</time>
                </li>
              ))}
            </ul>
          </Tile>
          <Tile order={2} icon={<BookIcon />} title={f.books.title} text={f.books.text}>
            <Book status={t.bookStatus} pages={t.bookPages} shelves={t.bookShelves} />
          </Tile>

          <Tile order={0} icon={<SyncIcon />} title={f.offline.title} text={f.offline.text}>
            <p className="k-notice k-notice--success" aria-hidden>
              <CheckIcon />
              {t.synced}
            </p>
          </Tile>
          <Tile full order={1} icon={<PaletteIcon />} title={f.theme.title} text={f.theme.text}>
            <AccentPicker labels={t.accents} />
          </Tile>
        </div>
      </div>
    </section>
  );
}
