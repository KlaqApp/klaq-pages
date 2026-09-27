import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { ptBr } from "./dictionaries/pt-br";

const dictionaries: Record<Locale, Dictionary> = { en, "pt-br": ptBr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from "./config";
