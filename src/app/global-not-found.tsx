import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { en } from "@/i18n/dictionaries/en";
import { ptBr } from "@/i18n/dictionaries/pt-br";

export const metadata: Metadata = { title: "404 — Klaq" };

// Static hosting can't tell which language the visitor wanted, so the 404 speaks both.
export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <main className="not-found">
        <div>
          <div className="not-found__code accent-text">404</div>
          <h1>{en.notFound.title}</h1>
          <p>{en.notFound.text}</p>
          <p lang="pt-BR">{ptBr.notFound.text}</p>
          <a className="btn btn--accent" href="/">
            {en.notFound.cta}
          </a>
        </div>
      </main>
    </RootDocument>
  );
}
