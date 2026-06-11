import Link from "next/link";
import { brand } from "@/lib/brand";
import { navLinks, socialLinks } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-navy text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo imgClassName="h-12 w-12" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {brand.shortTagline}. {brand.description}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-brand-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/demo" className="text-sm text-white/70 transition-colors hover:text-brand-light">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-brand-light">
                  {brand.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-light">
                  Get in touch
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-brand-light">
                  Request demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/50">{brand.product}</p>
        </div>
      </Container>
    </footer>
  );
}
