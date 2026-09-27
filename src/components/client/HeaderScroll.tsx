"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Header turns into a glass pill once the page scrolls, like the app's navigation bar. */
export function HeaderScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => ref.current?.setAttribute("data-scrolled", String(window.scrollY > 12));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header ref={ref} className="site-header" data-scrolled="false">
      {children}
    </header>
  );
}
