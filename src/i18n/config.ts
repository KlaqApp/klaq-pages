export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// English stays unprefixed so the URLs already registered on the stores keep working.
const prefixes: Record<Locale, string> = { en: "", "pt-br": "/pt-br" };

export const htmlLang: Record<Locale, string> = { en: "en", "pt-br": "pt-BR" };
export const ogLocale: Record<Locale, string> = { en: "en_US", "pt-br": "pt_BR" };

export type Route = "/" | "/privacy/" | "/terms-and-conditions/";

export function localePath(locale: Locale, route: Route = "/"): string {
  return `${prefixes[locale]}${route}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-br" : "en";
}

export const LOCALE_STORAGE_KEY = "klaq-locale";
