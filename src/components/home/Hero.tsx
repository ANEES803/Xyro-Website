"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroGlassCards } from "@/components/home/HeroGlassCards";
import "./hero-effects.css";

export function Hero() {
  return (
    <section className="hero-light-bg relative min-h-screen overflow-hidden bg-white">
      <Container className="relative z-10 pt-32 pb-16 text-left sm:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {heroContent.headlineWhite}
              <br />
              <span className="hero-headline-gradient">{heroContent.headlineGradient}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <Button href={heroContent.primaryCta.href} size="lg">
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
