// Generates src/dsm/tokens.css from src/dsm/tokens.json, the Klaq (Luna v2) design system
// shared with the Flutter app. Same variable names as the design system artifact:
// --<token> for colors, spacing, radius, shadow, duration, easing and effect;
// --font-<family>; and, for type styles, --t-<style> (font shorthand) + --t-<style>-ls.
// Run `npm run dsm:tokens` after updating tokens.json (it also runs before dev and build).
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("../src/dsm/", import.meta.url);
const tokens = JSON.parse(readFileSync(new URL("tokens.json", root), "utf8"));

const first = tokens.color.themes[0].id;
const color = (t, theme) => (typeof t.value === "string" ? t.value : (t.value[theme] ?? t.value[first]));
const ref = (v) => v.replace(/^\{(.+)\}$/, "var(--$1)");
const colors = (theme, indent = "  ") =>
  tokens.color.tokens.map((t) => `${indent}--${t.name}: ${ref(color(t, theme))};`).join("\n");

const LIST_FAMILIES = ["spacing", "radius", "shadow", "duration", "easing", "effect"];
const plain = LIST_FAMILIES.filter((f) => tokens[f])
  .map((f) => tokens[f].tokens.map((t) => `  --${t.name}: ${t.value};`).join("\n"))
  .join("\n");

const fonts = Object.entries(tokens.type.families)
  .map(([k, v]) => `  --font-${k}: ${v};`)
  .join("\n");
const styles = tokens.type.groups
  .flatMap((g) => g.styles.map((s) => ({ ...s, family: s.family ?? g.family })))
  .map((s) => `  --t-${s.name}: ${s.fontWeight} ${s.fontSize}/${s.lineHeight} var(--font-${s.family});\n  --t-${s.name}-ls: ${s.letterSpacing ?? "0"};`)
  .join("\n");

// The site follows the system theme (dark first, like the app), and any theme of the design
// system can be forced with <html data-theme="…">.
const extra = tokens.color.themes
  .slice(1)
  .map((t) => `:root[data-theme="${t.id}"] {\n  color-scheme: ${t.id.endsWith("light") ? "light" : "dark"};\n${colors(t.id)}\n}`)
  .join("\n\n");

const css = `/* ${tokens.name} — generated from tokens.json by scripts/build-tokens.mjs. Do not edit. */
:root,
:root[data-theme="${first}"] {
  color-scheme: dark;
${colors(first)}
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme]) {
    color-scheme: light;
${colors("light", "    ")}
  }
}

${extra}

:root {
${plain}
${fonts}
${styles}
}
`;

writeFileSync(new URL("tokens.css", root), css);
console.log(`tokens.css: ${tokens.color.tokens.length} colors × ${tokens.color.themes.length} themes, ${tokens.type.groups.length} type groups`);
