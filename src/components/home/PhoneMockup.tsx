import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { CheckIcon, StarIcon } from "../icons";

export function PhoneMockup({ t }: { t: Dictionary["mockup"] }) {
  return (
    <div className="phone-wrap" aria-hidden>
      <div className="phone">
        <div className="phone__screen">
          <img className="phone__shot" src="/screens/home.jpg" alt="" width={640} height={1409} />
        </div>
      </div>

      {/* Over imagery, so these are glass (the chrome recipe), not content cards. */}
      <div className="float-card float-card--rating k-glass" style={{ "--delay": "0.6s" } as CSSProperties}>
        <div>
          <span className="float-card__label">{t.rated}</span>
          <span className="k-rating k-rating--user k-rating--lg">
            <StarIcon />
            {t.score}
          </span>
        </div>
      </div>

      <div className="float-card float-card--done k-glass" style={{ "--delay": "0.9s" } as CSSProperties}>
        <span className="float-card__check">
          <CheckIcon />
        </span>
        {t.watched}
      </div>
    </div>
  );
}
