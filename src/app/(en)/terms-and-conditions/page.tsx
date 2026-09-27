import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

const { title, description } = getDictionary("en").legal.terms;
export const metadata = buildMetadata("en", "/terms-and-conditions/", { title: `${title} — Klaq`, description });

export default function Page() {
  return <LegalPage locale="en" doc="terms-and-conditions" />;
}
