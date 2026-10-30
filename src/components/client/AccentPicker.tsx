"use client";

import { useEffect, useState, type CSSProperties } from "react";

/** The highlight styles the app offers (tokens highlight-*). Mint is the default: no attribute. */
export const accents = ["mint", "coral", "spring", "amber"] as const;

type AccentId = (typeof accents)[number];
const STORAGE_KEY = "klaq-accent";

/** AccentSwatch row: picking one sets <html data-highlight> and recolors the whole page. */
export function AccentPicker({ labels }: { labels: Record<AccentId, string> }) {
  const [current, setCurrent] = useState<AccentId>("mint");

  useEffect(() => {
    const stored = document.documentElement.dataset.highlight as AccentId | undefined;
    if (stored) setCurrent(stored);
  }, []);

  const select = (id: AccentId) => {
    setCurrent(id);
    const root = document.documentElement;
    if (id === "mint") delete root.dataset.highlight;
    else root.dataset.highlight = id;
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  };

  return (
    <div className="swatches" role="group">
      {accents.map((id) => (
        <label key={id}>
          <button
            type="button"
            className="k-swatch"
            aria-pressed={current === id}
            onClick={() => select(id)}
            style={{ "--k-swatch": `var(--highlight-${id})` } as CSSProperties}
          />
          <span>{labels[id]}</span>
        </label>
      ))}
    </div>
  );
}
