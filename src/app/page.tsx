import { Hero } from "@/components/home/Hero";
import { ErpShowcaseSection } from "@/components/home/ErpShowcaseSection";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/brand";

export const metadata = createPageMetadata({
  title: "Home",
  description: `${brand.product} — Smart ERP solutions for modern businesses. Manage finance, inventory, HR, sales, and analytics in one platform.`,
  keywords: ["ERP platform", "SaaS ERP", "business automation"],
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <ErpShowcaseSection />
      <ClientLogosSection />
      <StatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingTeaser />
      <FAQSection />
      <CTASection />
    </>
  );
}
