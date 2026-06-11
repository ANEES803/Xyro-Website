import { stats } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

export function StatsSection() {
  return (
    <section className="border-y border-navy/5 bg-white py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-brand/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
