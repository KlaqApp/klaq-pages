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
