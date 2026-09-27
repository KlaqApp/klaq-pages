import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("en", "/", getDictionary("en").meta);

export default function Page() {
  return <HomePage locale="en" />;
}
