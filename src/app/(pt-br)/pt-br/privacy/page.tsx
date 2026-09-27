import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

const { title, description } = getDictionary("pt-br").legal.privacy;
export const metadata = buildMetadata("pt-br", "/privacy/", { title: `${title} — Klaq`, description });

export default function Page() {
  return <LegalPage locale="pt-br" doc="privacy" />;
}
