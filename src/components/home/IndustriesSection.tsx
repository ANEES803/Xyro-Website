"use client";

import { motion } from "framer-motion";
import { Factory, Briefcase, Store, Truck } from "lucide-react";
import { industries } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";

const iconMap = {
  store: Store,
  factory: Factory,
  briefcase: Briefcase,
  truck: Truck,
};

export function IndustriesSection() {
  return (
    <section className="bg-navy py-20 text-white">
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Built for your sector"
          description="Xyro ERP adapts to the workflows of retail, manufacturing, services, and wholesale teams."
          className="mb-14 [&_h2]:text-white [&_p]:!text-white/70"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-light">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
