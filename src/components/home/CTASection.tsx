import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to transform your operations?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book a free demo and see how Xyro ERP can streamline your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button
                href="/contact?type=contact"
                variant="on-dark"
                size="lg"
                className="ripple-btn--outline"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
