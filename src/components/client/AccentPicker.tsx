"use client";

import { useEffect, useState, type CSSProperties } from "react";

export const accents = [
  { id: "mint", dark: "#6fe3d4", light: "#2ec4b0" },
  { id: "coral", dark: "#ff9f7a", light: "#e0764a" },
  { id: "spring", dark: "#8fdb8f", light: "#3fa34d" },
  { id: "amber", dark: "#ffc24d", light: "#c98a1b" },
  { id: "green", dark: "#30d158", light: "#1d9e4f" },
] as const;

type AccentId = (typeof accents)[number]["id"];
const STORAGE_KEY = "klaq-accent";

/** Same highlight styles the app offers; picking one recolors the whole page. */
export function AccentPicker({ labels }: { labels: Record<AccentId, string> }) {
  const [current, setCurrent] = useState<AccentId>("mint");

  useEffect(() => {
    const stored = document.documentElement.dataset.accent as AccentId | undefined;
    if (stored) setCurrent(stored);
  }, []);

  const select = (id: AccentId) => {
    setCurrent(id);
    const root = document.documentElement;
    if (id === "mint") delete root.dataset.accent;
    else root.dataset.accent = id;
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  };

  return (
    <div className="swatches" role="group">
      {accents.map((a) => (
        <button
          key={a.id}
          type="button"
          className="swatch"
          aria-pressed={current === a.id}
          onClick={() => select(a.id)}
          style={{ "--c": `light-dark(${a.light}, ${a.dark})` } as CSSProperties}
        >
          <i />
          {labels[a.id]}
        </button>
      ))}
    </div>
  );
}
