"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import type { ContactPayload } from "@/lib/api";

export function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const defaultType: ContactPayload["type"] =
    type === "demo" || type === "support" ? type : "contact";

  return <ContactForm defaultType={defaultType} />;
}
