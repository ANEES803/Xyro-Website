import {
  BarChart3,
  Briefcase,
  Calculator,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { erpModules } from "@/lib/constants";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/home/CTASection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "Explore Xyro ERP modules — inventory, HR, accounting, sales, procurement, and analytics.",
  keywords: ["ERP modules", "inventory ERP", "HR payroll software"],
  path: "/features",
});

const iconMap = {
  calculator: Calculator,
  package: Package,
  users: Users,
  "bar-chart": BarChart3,
  briefcase: Briefcase,
  "shopping-cart": ShoppingCart,
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Powerful modules, one platform"
            description="Every module in Xyro ERP is designed for accuracy, integration, and enterprise-grade performance."
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {erpModules.map((module) => {
              const Icon = iconMap[module.icon];
              return (
                <FeatureCard
                  key={module.title}
                  icon={Icon}
                  title={module.title}
                  description={module.description}
                  benefits={module.benefits}
                  className="h-full p-8"
                />
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
