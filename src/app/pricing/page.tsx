import { Check, X } from "lucide-react";
import { pricingPlans, pricingComparison } from "@/lib/constants";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "Flexible ERP pricing plans for Starter, Business, and Enterprise teams.",
  keywords: ["ERP pricing", "SaaS pricing", "enterprise plans"],
  path: "/pricing",
});

function FeatureCell({ included }: { included: boolean }) {
  return included ? (
    <Check size={18} className="mx-auto text-brand" aria-label="Included" />
  ) : (
    <X size={18} className="mx-auto text-slate-brand/30" aria-label="Not included" />
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Plans that scale with you"
            description="Choose the plan that fits your business. Contact us for custom enterprise pricing."
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeader
            eyebrow="Compare"
            title="Feature comparison"
            description="See what's included in each plan at a glance."
            className="mb-12"
          />

          <div className="overflow-x-auto rounded-2xl border border-navy/5 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-navy/5 bg-slate-50">
                  <th className="px-6 py-4 font-semibold text-navy">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-navy">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-navy">Business</th>
                  <th className="px-6 py-4 text-center font-semibold text-navy">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.categories.flatMap((category) => [
                  <tr key={`cat-${category.name}`} className="bg-navy/5">
                    <td
                      colSpan={4}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-brand/60"
                    >
                      {category.name}
                    </td>
                  </tr>,
                  ...category.features.map((feature) => (
                    <tr key={feature.label} className="border-b border-navy/5 last:border-0">
                      <td className="px-6 py-4 text-slate-brand/80">{feature.label}</td>
                      <td className="px-6 py-4 text-center">
                        <FeatureCell included={feature.starter} />
                      </td>
                      <td className={cn("px-6 py-4 text-center", "bg-brand/5")}>
                        <FeatureCell included={feature.business} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FeatureCell included={feature.enterprise} />
                      </td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
