import { readFileSync } from "node:fs";
import type { CSSProperties } from "react";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import { getDictionary } from "@/i18n";
import { localePath, type Locale, type Route } from "@/i18n/config";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { TocSpy } from "../client/TocSpy";
import { ArrowLeftIcon, CalendarIcon, ChevronDownIcon, InfoIcon } from "../icons";

export type LegalDoc = "privacy" | "terms-and-conditions";

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderDoc(locale: Locale, doc: LegalDoc) {
  // Read at build time only (static export), so the Markdown files stay the single source of truth.
  const file = path.join(process.cwd(), "src/content/legal", locale, `${doc}.md`);
  const source = readFileSync(file, "utf8");

  const toc: { id: string; text: string }[] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Heading) {
        const id = slugify(token.text);
        if (token.depth === 2) toc.push({ id, text: token.text });
        return `<h${token.depth} id="${id}">${this.parser.parseInline(token.tokens)}</h${token.depth}>`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Link) {
        const external = /^https?:/.test(token.href);
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${token.href}"${attrs}>${this.parser.parseInline(token.tokens)}</a>`;
      },
    },
  });

  return { html: marked.parse(source, { async: false }), toc };
}

function TocList({ toc }: { toc: { id: string; text: string }[] }) {
  return (
    <ol>
      {toc.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`}>{h.text}</a>
        </li>
      ))}
    </ol>
  );
}

export function LegalPage({ locale, doc }: { locale: Locale; doc: LegalDoc }) {
  const t = getDictionary(locale);
  const copy = doc === "privacy" ? t.legal.privacy : t.legal.terms;
  const route: Route = `/${doc}/`;
  const { html, toc } = renderDoc(locale, doc);

  return (
    <>
      <SiteHeader locale={locale} route={route} />
      <main id="main">
        <section className="legal-hero container">
          <span className="eyebrow" data-reveal>{t.footer.legal}</span>
          <h1 data-reveal style={{ "--d": 1 } as CSSProperties}>{copy.title}</h1>
          <p data-reveal style={{ "--d": 2 } as CSSProperties}>{copy.description}</p>
          <div className="legal-meta" data-reveal style={{ "--d": 3 } as CSSProperties}>
            <span className="chip glass">
              <CalendarIcon />
              {t.legal.effective}
            </span>
            <a className="chip glass" href={localePath(locale)}>
              <ArrowLeftIcon />
              {t.legal.backHome}
            </a>
          </div>
        </section>

        <div className="container legal-layout">
          <aside className="toc">
            <details className="toc__mobile glass">
              <summary>
                {t.legal.contents}
                <ChevronDownIcon />
              </summary>
              <TocList toc={toc} />
            </details>
            <nav className="toc__desktop" aria-label={t.legal.contents}>
              <p className="toc__title">{t.legal.contents}</p>
              <TocList toc={toc} />
            </nav>
          </aside>

          <div>
            {t.legal.translationNotice && (
              <p className="notice glass">
                <InfoIcon />
                <span>
                  {t.legal.translationNotice}{" "}
                  <a href={localePath("en", route)} hrefLang="en">English →</a>
                </span>
              </p>
            )}
            <article className="prose glass" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} route={route} />
      <TocSpy />
    </>
  );
}
