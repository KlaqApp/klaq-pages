import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { BellIcon, CheckIcon, ClockIcon, InfoIcon, StarIcon, UserIcon, UsersIcon } from "../icons";
import { Tile } from "./Features";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const avatar = (n: number) =>
  v({ "--k-avatar-from": `var(--avatar-${n}-from)`, "--k-avatar-to": `var(--avatar-${n}-to)`, "--k-avatar-size": "32px" });

/** A ReviewCard: author, the rating that comes from their log, text with a spoiler tag, replies. */
function Review({ t, score }: { t: Dictionary["community"]["review"]; score: string }) {
  return (
    <article className="review k-surface k-surface--2" aria-hidden>
      <header className="review__head">
        <span className="k-avatar" style={avatar(2)}>
          {t.name[0]}
        </span>
        <span className="review__who">
          <strong>{t.name}</strong>
          <small>
            {t.handle} · {t.title}
          </small>
        </span>
        <span className="k-badge k-badge--rating">
          <StarIcon />
          {score}
        </span>
      </header>
      <p>{t.text}</p>
      <footer className="review__foot">
        <span className="k-status k-status--plain">{t.spoiler}</span>
        <span>{t.replies}</span>
        <span className="k-text-btn k-text-btn--accent">{t.reply}</span>
      </footer>
    </article>
  );
}

export function Community({ t }: { t: Dictionary["community"] }) {
  const c = t.items;
  return (
    <section id="community" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="k-eyebrow k-eyebrow--accent" data-reveal>{t.eyebrow}</span>
          <h2 className="section-title" data-reveal style={v({ "--d": 1 })}>{t.title}</h2>
          <p className="section-sub" data-reveal style={v({ "--d": 2 })}>{t.subtitle}</p>
        </div>

        <div className="bento">
          <Tile wide order={0} icon={<StarIcon />} title={c.reviews.title} text={c.reviews.text}>
            <Review t={t.review} score={t.review.score} />
          </Tile>

          <Tile order={1} icon={<ClockIcon />} title={c.feed.title} text={c.feed.text}>
            <ul className="feed" aria-hidden>
              {t.feed.map((item, i) => (
                <li key={item.name}>
                  <span className="k-avatar" style={avatar(i + 1)}>
                    {item.initial}
                  </span>
                  <span>
                    <strong>{item.name}</strong> {item.verb}
                    <small>
                      {item.what}
                      {item.score && (
                        <span className="k-rating">
                          <StarIcon />
                          {item.score}
                        </span>
                      )}
                    </small>
                  </span>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile order={0} icon={<UserIcon />} title={c.privacy.title} text={c.privacy.text}>
            <div className="request k-surface k-surface--2" aria-hidden>
              <span className="request__label">{t.request.label}</span>
              <div className="request__row">
                <span className="k-avatar" style={avatar(4)}>
                  {t.request.name[0]}
                </span>
                <span className="review__who">
                  <strong>{t.request.name}</strong>
                  <small>{t.request.handle}</small>
                </span>
              </div>
              <div className="request__actions">
                <span className="k-btn k-btn--sm k-btn--primary">
                  <CheckIcon />
                  {t.request.accept}
                </span>
                <span className="k-btn k-btn--sm">{t.request.decline}</span>
              </div>
            </div>
          </Tile>

          <Tile order={1} icon={<BellIcon />} title={c.notifications.title} text={c.notifications.text}>
            <div className="notices" aria-hidden>
              {t.notices.map((notice, i) => (
                <p key={notice} className="notice k-glass" style={v({ "--i": i })}>
                  <img src="/icon.png" alt="" width={24} height={24} />
                  <span>
                    <strong>Klaq</strong>
                    {notice}
                  </span>
                </p>
              ))}
            </div>
          </Tile>

          <Tile order={2} icon={<UsersIcon />} title={c.safety.title} text={c.safety.text}>
            <ul className="k-list k-surface--2 safety" aria-hidden>
              {t.safetyActions.map((action, i) => (
                <li key={action}>
                  <div className={`k-list__row${i < 2 ? " k-list__row--destructive" : ""}`}>
                    <span className="k-list__icon">{i < 2 ? <InfoIcon /> : <UsersIcon />}</span>
                    <span className="k-list__text">
                      <span className="k-list__label">{action}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Tile>
        </div>
      </div>
    </section>
  );
}
