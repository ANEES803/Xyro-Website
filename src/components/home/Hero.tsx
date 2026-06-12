"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { heroContent } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroGlassCards } from "@/components/home/HeroGlassCards";
import "./hero-effects.css";

const HERO_EASE = [0.16, 1, 0.3, 1] as const;

const heroCopyMotion = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

function heroCopyTransition(delay: number) {
  return {
    duration: 0.85,
    delay,
    ease: HERO_EASE,
  };
}

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);
  const isCopyInView = useInView(copyRef, { once: true, amount: 0.45 });

  return (
    <section className="hero-light-bg relative min-h-screen overflow-hidden bg-white">
      <Container className="relative z-10 pt-32 pb-16 text-left sm:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div ref={copyRef}>
            <motion.h1
              initial={heroCopyMotion.hidden}
              animate={isCopyInView ? heroCopyMotion.visible : heroCopyMotion.hidden}
              transition={heroCopyTransition(0.05)}
              className="max-w-xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {heroContent.headlineWhite}
              <br />
              <span className="hero-headline-gradient">{heroContent.headlineGradient}</span>
            </motion.h1>

            <motion.p
              initial={heroCopyMotion.hidden}
              animate={isCopyInView ? heroCopyMotion.visible : heroCopyMotion.hidden}
              transition={heroCopyTransition(0.18)}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={heroCopyMotion.hidden}
              animate={isCopyInView ? heroCopyMotion.visible : heroCopyMotion.hidden}
              transition={heroCopyTransition(0.3)}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >              <Button href={heroContent.primaryCta.href} size="lg">
                {heroContent.primaryCta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} variant="cream" size="lg">
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full"
          >
            <HeroGlassCards />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
