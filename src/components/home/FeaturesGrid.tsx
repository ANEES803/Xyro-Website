"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  Calculator,
  Package,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";
import { erpModules } from "@/lib/constants";
import { brand } from "@/lib/brand";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const iconMap = {
  calculator: Calculator,
  package: Package,
  users: Users,
  "bar-chart": BarChart3,
  briefcase: Briefcase,
  "shopping-cart": ShoppingCart,
};

const FEATURE_EASE = [0.16, 1, 0.3, 1] as const;

export function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.85, ease: FEATURE_EASE }}
        >
          <SectionHeader
            eyebrow="Features"
            title="Everything your business needs"
            description={`${brand.product} brings all your core operations into one accurate, unified platform.`}
            align="left"
            className="mb-14 max-w-2xl"
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.map((module, i) => {
            const Icon = iconMap[module.icon];
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, x: -32, y: 12 }}
                animate={
                  isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -32, y: 12 }
                }
                transition={{ duration: 0.7, delay: 0.08 + i * 0.07, ease: FEATURE_EASE }}
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

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.75, delay: 0.55, ease: FEATURE_EASE }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button href="/features" size="lg">
            Explore all features
          </Button>
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
