import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/brand";
import { whyChooseUs, leadershipTeam, companyTimeline } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2 } from "lucide-react";

export const metadata = createPageMetadata({
  title: "About",
  description: `Learn about ${brand.name} — our mission, leadership team, and why businesses choose ${brand.product}.`,
  keywords: ["about Xyro", "ERP company", "enterprise software"],
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 sm:pt-32">
        <Container>
          <SectionHeader
            eyebrow="About"
            title={`About ${brand.name}`}
            description="Smart ERP solutions for modern businesses — built on accuracy, trust, and scale."
            align="center"
            className="[&_h2]:text-white [&_p]:!text-white/70"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Mission"
                title="One platform. Zero guesswork."
                description={`${brand.name} was built to give businesses a single, accurate platform for every operation — from finance and inventory to sales and reporting.`}
                align="left"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Vision"
                title="Empower every business to run with clarity"
                description="We believe accurate data leads to better decisions. Every module in Xyro ERP is designed with precision, transparency, and growth in mind."
                align="left"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Built for modern enterprise teams"
            description="From security to scalability, Xyro ERP is designed for businesses that need reliability without complexity."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy/5 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-4 text-brand" size={24} aria-hidden="true" />
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the team behind Xyro"
            description="Experienced operators and engineers focused on building ERP software businesses can trust."
            className="mb-14"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {leadershipTeam.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-navy/5 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-lg font-bold text-navy">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                <p className="text-sm font-medium text-brand">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-brand/70">{member.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white">
        <Container>
          <SectionHeader
            eyebrow="Our Story"
            title="Company timeline"
            description="From startup vision to a platform trusted by hundreds of businesses worldwide."
            className="mb-14 [&_h2]:text-white [&_p]:!text-white/70"
          />
          <div className="mx-auto max-w-2xl space-y-8">
            {companyTimeline.map((event) => (
              <div key={event.year} className="flex gap-6">
                <div className="w-16 shrink-0 text-lg font-bold text-brand-light">{event.year}</div>
                <div className="border-l border-white/10 pl-6">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
