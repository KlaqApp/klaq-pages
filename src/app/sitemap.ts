import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { localePath, locales, type Route } from "@/i18n/config";

export const dynamic = "force-static";

const routes: Route[] = ["/", "/privacy/", "/terms-and-conditions/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, route)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${localePath(l, route)}`])),
      },
    })),
  );
}
