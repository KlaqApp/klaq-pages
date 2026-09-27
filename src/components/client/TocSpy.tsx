"use client";

import { useEffect } from "react";

/** Marks the table-of-contents link for the section currently being read. */
export function TocSpy() {
  useEffect(() => {
    // Mobile and desktop each render their own list, so an id maps to several links.
    const links = new Map<string, HTMLAnchorElement[]>();
    document.querySelectorAll<HTMLAnchorElement>(".toc a[href^='#']").forEach((a) => {
      const id = decodeURIComponent(a.hash.slice(1));
      links.set(id, [...(links.get(id) ?? []), a]);
    });
    const headings = [...document.querySelectorAll<HTMLElement>(".prose h2[id]")];
    if (!headings.length) return;

    let activeId: string | undefined;
    const setActive = (id: string) => {
      if (id === activeId) return;
      if (activeId) links.get(activeId)?.forEach((a) => a.removeAttribute("aria-current"));
      links.get(id)?.forEach((a) => a.setAttribute("aria-current", "true"));
      activeId = id;
    };

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = headings[0];
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h;
        else break;
      }
      setActive(current.id);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}
