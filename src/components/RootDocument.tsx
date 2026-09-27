import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { htmlLang, LOCALE_STORAGE_KEY, localePath, type Locale } from "@/i18n/config";
import { RevealObserver } from "./client/RevealObserver";
import "@/app/globals.css";

// Apple devices get SF Pro through the system stack (same as the app); Inter covers everyone else.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

/**
 * Runs before paint: enables reveal animations, restores the chosen accent and, on the English
 * home page only, sends Portuguese browsers to /pt-br/ unless the visitor picked a language or
 * came from another page of the site (so the EN switch works even when storage is blocked).
 */
function bootScript(locale: Locale) {
  const redirect =
    locale === "en"
      ? `if(location.pathname==="/"&&document.referrer.indexOf(location.origin)!==0&&!localStorage.getItem("${LOCALE_STORAGE_KEY}")&&/^pt\\b/i.test(navigator.language||""))location.replace("${localePath("pt-br")}"+location.hash);`
      : "";
  return `(function(){var d=document.documentElement;d.classList.add("js");try{var a=localStorage.getItem("klaq-accent");if(a&&a!=="mint")d.dataset.accent=a;${redirect}}catch(e){}})();`;
}

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript(locale) }} />
      </head>
      <body>
        <div className="ambient" aria-hidden />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
