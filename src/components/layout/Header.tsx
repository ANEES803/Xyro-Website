"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDarkNav = pathname === "/sign-in" || pathname === "/sign-up";

  const linkClass = isDarkNav
    ? "text-slate-300 hover:text-white"
    : "font-medium text-logo-dark hover:text-brand";

  const signInClass = isDarkNav
    ? "text-slate-300 hover:text-white"
    : "font-medium text-logo-dark hover:text-brand";

  const mobileMenuBg = isDarkNav
    ? "border-white/10 bg-[#05070a]/95"
    : "bg-white/95";

  const mobileLinkClass = isDarkNav
    ? "text-slate-300 hover:bg-white/5"
    : "font-medium text-logo-dark hover:bg-brand/5 hover:text-brand";

  const menuIconClass = isDarkNav ? "text-white" : "text-logo-dark";

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 justify-self-start">
          <Logo imgClassName="h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]" />
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-1 text-sm transition-colors",
                linkClass,
              )}
            >
              {link.label}
              {(link.label === "Features" || link.label === "Pricing") && (
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <Link
            href="/sign-in"
            className={cn(
              "hidden text-sm transition-colors md:inline-block",
              signInClass,
            )}
          >
            Sign in
          </Link>
          <Button
            href="/demo"
            size="sm"
            variant={isDarkNav ? "on-dark" : "primary"}
            className="hidden md:inline-flex"
          >
            Book a Demo
          </Button>

          <button
            type="button"
            className={cn("rounded-lg p-2 md:hidden", menuIconClass)}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden backdrop-blur-md md:hidden",
          mobileMenuBg,
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium",
                mobileLinkClass,
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className={cn("mt-2 rounded-lg px-3 py-2 text-sm", mobileLinkClass)}
            onClick={() => setOpen(false)}
          >
            Sign in
          </Link>
          <Button
            href="/demo"
            size="sm"
            variant={isDarkNav ? "on-dark" : "primary"}
            className="ripple-btn--full mt-2"
            onClick={() => setOpen(false)}
          >
            Book a Demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
