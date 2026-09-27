import type { ReactNode } from "react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { AppleIcon, PlayStoreIcon } from "./icons";

function Badge({ href, icon, top, name, soon }: { href: string; icon: ReactNode; top: string; name: string; soon: string }) {
  const content = (
    <>
      {icon}
      <span className="store__text">
        <span className="store__top">{top}</span>
        <span className="store__name">{name}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span className="store" aria-disabled="true" aria-label={`${name} — ${soon}`}>
        {content}
        <span className="store__soon" aria-hidden>
          {soon}
        </span>
      </span>
    );
  }

  return (
    <a className="store" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export function StoreBadges({ t }: { t: Dictionary["stores"] }) {
  return (
    <div className="stores">
      <Badge href={site.appStoreUrl} icon={<AppleIcon />} top={t.appStoreTop} name={t.appStore} soon={t.soon} />
      <Badge href={site.playStoreUrl} icon={<PlayStoreIcon />} top={t.playStoreTop} name={t.playStore} soon={t.soon} />
    </div>
  );
}
