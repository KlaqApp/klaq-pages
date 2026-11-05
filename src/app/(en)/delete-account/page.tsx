import { DeleteAccountCta } from "@/components/legal/DeleteAccountCta";
import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

// Registered on Google Play as the account deletion link: it has to say how to ask for deletion
// and what is deleted or kept, not just forward to the form.
const { title, description } = getDictionary("en").legal.deleteAccount;
export const metadata = buildMetadata("en", "/delete-account/", { title: `${title} — Klaq`, description });

export default function Page() {
  return (
    <LegalPage locale="en" doc="delete-account">
      <DeleteAccountCta locale="en" />
    </LegalPage>
  );
}
