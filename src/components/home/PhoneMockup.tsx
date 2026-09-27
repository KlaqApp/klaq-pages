import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { CheckIcon, HomeIcon, SearchIcon, StarIcon, BookmarkIcon, UserIcon } from "../icons";

// Invented titles and abstract art: the mockup must not suggest partnerships with real studios.
const upNext = [
  { title: "Paper Moons", season: 1, episode: 8, art: "art-2" },
  { title: "Salt & Stone", season: 3, episode: 2, art: "art-4" },
];
const posters = ["art-1", "art-3", "art-5", "art-6", "art-2", "art-4"];

export function PhoneMockup({ t }: { t: Dictionary["mockup"] }) {
  return (
    <div className="phone-wrap" aria-hidden>
      <div className="float-card float-card--rating glass" style={{ "--delay": "0.9s" } as CSSProperties}>
        <div>
          <small>{t.rated}</small>
          <div className="stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="phone">
        <div className="phone__screen">
          <div className="phone__island" />
          <div className="phone__status">
            <span>21:40</span>
            <span className="phone__status-icons">
              <i />
            </span>
          </div>

          <div className="phone__body">
            <div className="phone__greet">{t.greeting}</div>
            <div className="phone__h">{t.continueWatching}</div>

            <div className="m-feature">
              <div className="m-feature__sun" />
              <div className="m-feature__hills" />
              <div className="m-feature__info">
                <div className="m-feature__title">Northern Lights</div>
                <div className="m-feature__meta">
                  <span>{t.episode}</span>
                  <span>{t.remaining}</span>
                </div>
                <div className="m-progress">
                  <i />
                </div>
              </div>
            </div>

            <div className="phone__label">{t.upNext}</div>
            {upNext.map((item, i) => (
              <div className="m-row" key={item.title}>
                <div className={`m-row__thumb ${item.art}`} />
                <div>
                  <div className="m-row__title">{item.title}</div>
                  <div className="m-row__meta">{`${t.season}${item.season} · E${item.episode}`}</div>
                </div>
                <span className="m-row__pill">{i === 0 ? t.tonight : t.tomorrow}</span>
              </div>
            ))}

            <div className="phone__label">{t.myList}</div>
            <div className="m-rail-mask">
              <div className="m-rail">
                {[...posters, ...posters].map((art, i) => (
                  <div className={`m-poster ${art}`} key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="m-fade" />
          <nav className="m-tabbar">
            <span data-active>
              <HomeIcon />
            </span>
            <span>
              <SearchIcon />
            </span>
            <span>
              <BookmarkIcon />
            </span>
            <span>
              <UserIcon />
            </span>
          </nav>
        </div>
      </div>

      <div className="float-card float-card--done glass" style={{ "--delay": "1.3s" } as CSSProperties}>
        <span className="float-card__check">
          <CheckIcon />
        </span>
        <div>
          <strong>Northern Lights</strong>
          <small>{t.watched}</small>
        </div>
      </div>
    </div>
  );
}
