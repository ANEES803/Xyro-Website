import Link from "next/link";
import { pricingPlans } from "@/lib/constants";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";

export function PricingTeaser() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Plans that scale with your business"
          description="Start with core modules and upgrade as your team grows. No hidden fees."
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-brand/70">
          Need a detailed comparison?{" "}
          <Link href="/pricing" className="font-semibold text-brand hover:underline">
            View full pricing
          </Link>
        </p>
      </Container>
    </section>
  );
}
