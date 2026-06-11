import { Suspense } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { brand } from "@/lib/brand";
import { officeInfo } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormWrapper } from "./ContactFormWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Xyro ERP — request a demo, ask a question, or speak with our sales team.",
  keywords: ["contact ERP", "ERP demo", "sales inquiry"],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk"
            description={`Reach out to the ${brand.name} team — we'd love to show you what ${brand.product} can do.`}
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-xl font-semibold text-navy">Office Information</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-3 text-sm text-slate-brand/80">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      {officeInfo.address}
                      <br />
                      {officeInfo.city}
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-brand/80">
                    <Phone size={18} className="shrink-0 text-brand" aria-hidden="true" />
                    <a href={`tel:${officeInfo.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                      {officeInfo.phone}
                    </a>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-brand/80">
                    <Mail size={18} className="shrink-0 text-brand" aria-hidden="true" />
                    <a href={`mailto:${brand.email}`} className="hover:text-brand">
                      {brand.email}
                    </a>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-brand/80">
                    <Clock size={18} className="shrink-0 text-brand" aria-hidden="true" />
                    {officeInfo.hours}
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/5 bg-slate-100">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-navy/10 to-teal/10 text-sm text-slate-brand/50">
                  Google Maps embed placeholder
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy/5 bg-white p-8 shadow-sm lg:col-span-3">
              <h2 className="mb-6 text-xl font-semibold text-navy">Send us a message</h2>
              <Suspense fallback={<ContactForm />}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
