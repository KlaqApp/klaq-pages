import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import { localePath, locales, ogLocale, otherLocale, type Locale, type Route } from "./config";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
  ],
};

export function buildMetadata(
  locale: Locale,
  route: Route,
  { title, description }: { title: string; description: string },
): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, localePath(l, route)]));
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    alternates: {
      canonical: localePath(locale, route),
      languages: { ...languages, "x-default": localePath("en", route) },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: localePath(locale, route),
      locale: ogLocale[locale],
      alternateLocale: ogLocale[otherLocale(locale)],
      images: [{ url: "/og.png", width: 1024, height: 500, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
