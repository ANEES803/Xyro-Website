"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers about Xyro ERP, pricing, and getting started."
          className="mb-12"
        />

        <div className="mx-auto max-w-3xl divide-y divide-navy/5 rounded-2xl border border-navy/5 bg-white shadow-sm">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-brand transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-brand/70">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
