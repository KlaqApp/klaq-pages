import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { CheckIcon, StarIcon } from "../icons";

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
          <img className="phone__shot" src="/screens/home.jpg" alt="" width={640} height={1409} />
        </div>
      </div>

      <div className="float-card float-card--done glass" style={{ "--delay": "1.3s" } as CSSProperties}>
        <span className="float-card__check">
          <CheckIcon />
        </span>
        <strong>{t.watched}</strong>
      </div>
    </div>
  );
}
