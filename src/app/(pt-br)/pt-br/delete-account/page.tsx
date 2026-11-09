import { DeleteAccountCta } from "@/components/legal/DeleteAccountCta";
import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

const { title, description } = getDictionary("pt-br").legal.deleteAccount;
export const metadata = buildMetadata("pt-br", "/delete-account/", { title: `${title} — Klaq`, description });

export default function Page() {
  return (
    <LegalPage locale="pt-br" doc="delete-account">
      <DeleteAccountCta locale="pt-br" />
    </LegalPage>
  );
}
