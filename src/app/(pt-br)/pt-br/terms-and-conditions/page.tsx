import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

const { title, description } = getDictionary("pt-br").legal.terms;
export const metadata = buildMetadata("pt-br", "/terms-and-conditions/", { title: `${title} — Klaq`, description });

export default function Page() {
  return <LegalPage locale="pt-br" doc="terms-and-conditions" />;
}
