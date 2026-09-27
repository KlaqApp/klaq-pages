"use client";

import { useEffect } from "react";

/**
 * Web counterpart of the app's StaggeredEntrance: any [data-reveal] element fades and rises
 * into place the first time it enters the viewport. Elements start hidden only when the
 * `js` class is on <html>, so the page stays readable without JavaScript.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));

    // Spotlight that follows the pointer across feature tiles.
    const onMove = (e: PointerEvent) => {
      const tile = (e.target as Element).closest<HTMLElement>(".tile");
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      tile.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
