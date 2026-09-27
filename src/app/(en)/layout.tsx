import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";

export { viewport } from "@/i18n/metadata";

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
