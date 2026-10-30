# klaq-pages

Landing page, privacy policy and terms for [Klaq](https://klaq.app) — Next.js static export served by GitHub Pages.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

- **Links** (App Store, Google Play, donation, contact): `src/config/site.ts`. An empty store URL shows the badge as "Coming soon".
- **Copy**: `src/i18n/dictionaries/{en,pt-br}.ts`. `pt-br` is typed against `en`, so a missing key fails the build.
- **Legal texts**: `src/content/legal/{en,pt-br}/*.md`, rendered at build time.
- **URLs**: English is unprefixed (`/privacy/`, `/terms-and-conditions/` — registered on the stores), Portuguese lives under `/pt-br/`. `/delete-account/` is a static redirect in `public/`.
- **Deploy**: `.github/workflows/deploy.yml` builds and publishes on every push to `main` (Pages source must be set to *GitHub Actions*).

## Design system

O site usa o mesmo design system do app: **Klaq (Luna v2)**, publicado como o artefato
"Klaq" (Design System). Dois arquivos vêm de lá sem edição:

- `src/dsm/tokens.json` — cores (temas escuro, claro, livros e jogos), tipo, espaço, raio,
  sombra, movimento e efeitos. Os mesmos valores do app (`lib/core/theme/app_theme.dart`,
  `lib/core/dsm/luna_metrics.dart`, `luna_typography.dart`).
- `src/dsm/bundle.css` — os componentes web (`.k-btn`, `.k-card`, `.k-list`, `.k-glass`,
  `.k-notice`, `.k-progress`, `.k-swatch`, ...), com as medidas dos widgets do app.

`src/dsm/tokens.css` é gerado por `npm run dsm:tokens` (roda sozinho antes de `dev` e
`build`) e **não se edita à mão**. `src/app/globals.css` só compõe as páginas.

Regras: conteúdo opaco (`--elev`), vidro só no header e no que flutua sobre imagem, dourado só
na nota, tipografia pela escala (`font: var(--t-<estilo>)`), cor/raio/espaço/duração só por
token. Para mudar um valor, altere o token no design system (e no Dart), copie o
`tokens.json` para cá e regenere.
