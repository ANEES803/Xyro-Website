"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by growing businesses"
          description="See how teams use Xyro ERP to simplify operations and make better decisions."
          className="mb-14"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
