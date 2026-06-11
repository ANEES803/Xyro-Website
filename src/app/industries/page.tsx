import { createPageMetadata } from "@/lib/metadata";
import { industries } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/home/CTASection";
import { Factory, Briefcase, Store, Truck } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Industries",
  description: "Xyro ERP serves retail, manufacturing, services, and wholesale businesses.",
  keywords: ["ERP for retail", "manufacturing ERP", "wholesale software"],
  path: "/industries",
});

const iconMap = {
  store: Store,
  factory: Factory,
  briefcase: Briefcase,
  truck: Truck,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Built for your industry"
            description="Xyro adapts to the way your business operates — no matter the sector."
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <div
                  key={industry.title}
                  className="rounded-2xl border border-navy/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">{industry.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-brand/70">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
