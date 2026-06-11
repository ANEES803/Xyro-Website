import { brand } from "@/lib/brand";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { DemoForm } from "@/components/demo/DemoForm";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle2 } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Book a Demo",
  description: `Schedule a personalized ${brand.product} demo with our team. See how ERP can streamline your operations.`,
  keywords: ["ERP demo", "book demo", "product tour"],
  path: "/demo",
});

const demoBenefits = [
  "Personalized walkthrough of relevant modules",
  "Q&A with a product specialist",
  "Implementation timeline overview",
  "Custom pricing discussion",
];

export default function DemoPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="Demo"
            title="Book a personalized demo"
            description={`See ${brand.product} in action. Tell us about your business and we'll tailor the session to your needs.`}
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-navy">What to expect</h2>
              <ul className="mt-6 space-y-4">
                {demoBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-slate-brand/80">
                    <CheckCircle2 size={18} className="shrink-0 text-brand" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-brand/60">
                Demos typically run 30–45 minutes. No commitment required.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/5 bg-white p-8 shadow-sm lg:col-span-3">
              <DemoForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
