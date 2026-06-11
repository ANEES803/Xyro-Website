import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { brand } from "@/lib/brand";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-heading-family",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: brand.product,
    description: brand.description,
    keywords: ["ERP", "business software", "inventory", "accounting", "CRM"],
    path: "/",
  }),
  title: {
    default: `${brand.product} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  icons: {
    icon: brand.logo.full,
    shortcut: brand.logo.full,
    apple: brand.logo.full,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${headingFont.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="relative flex min-h-full flex-col antialiased"
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
