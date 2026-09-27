"use client";

import { LOCALE_STORAGE_KEY, type Locale } from "@/i18n/config";
import { GlobeIcon } from "../icons";

type Props = {
  href: string;
  target: Locale;
  label: string;
  short: string;
  hreflang: string;
};

// A plain <a> (not next/link): each locale has its own root layout, so switching is a full load anyway.
export function LanguageSwitch({ href, target, label, short, hreflang }: Props) {
  return (
    <a
      className="lang-switch"
      href={href}
      hrefLang={hreflang}
      aria-label={label}
      title={label}
      onClick={() => {
        // An explicit choice beats the browser-language redirect on future visits.
        try {
          localStorage.setItem(LOCALE_STORAGE_KEY, target);
        } catch {}
      }}
    >
      <GlobeIcon />
      {short}
    </a>
  );
}
