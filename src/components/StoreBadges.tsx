"use client";

import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { AppleIcon, PlayStoreIcon } from "./icons";

type OS = "ios" | "android" | "other";

// Server render and first client paint must match (no OS yet), so this only narrows the
// badges down after mount. On desktop, or when detection fails, both stay visible.
function detectOS(): OS {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  // Check Android first: iPadOS Safari and an emulated/touch Android browser can both report
  // platform "MacIntel" with touch points, so that fallback must never outrank an explicit UA.
  if (/Android/.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) return "ios";
  return "other";
}

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
      <span className="store" aria-disabled="true" aria-label={`${name}: ${soon}`}>
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
  const [os, setOs] = useState<OS>("other");
  useEffect(() => setOs(detectOS()), []);

  return (
    <div className="stores">
      {os !== "android" && (
        <Badge href={site.appStoreUrl} icon={<AppleIcon />} top={t.appStoreTop} name={t.appStore} soon={t.soon} />
      )}
      {os !== "ios" && (
        <Badge href={site.playStoreUrl} icon={<PlayStoreIcon />} top={t.playStoreTop} name={t.playStore} soon={t.soon} />
      )}
    </div>
  );
}
