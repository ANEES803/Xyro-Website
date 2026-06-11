"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Calculator,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { erpModules } from "@/lib/constants";
import { brand } from "@/lib/brand";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";

const iconMap = {
  calculator: Calculator,
  package: Package,
  users: Users,
  "bar-chart": BarChart3,
  briefcase: Briefcase,
  "shopping-cart": ShoppingCart,
};

export function FeaturesGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Modules"
          title="Everything your business needs"
          description={`${brand.product} brings all your core operations into one accurate, unified platform.`}
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.map((module, i) => {
            const Icon = iconMap[module.icon];
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <FeatureCard
                  icon={Icon}
                  title={module.title}
                  description={module.description}
                  benefits={module.benefits}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
