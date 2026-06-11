import { clientLogos } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

export function ClientLogosSection() {
  return (
    <section className="border-y border-navy/5 bg-white py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-brand/50">
          Trusted by 500+ businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-semibold text-navy/30 transition-colors hover:text-navy/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
