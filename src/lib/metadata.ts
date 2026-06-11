import type { Metadata } from "next";
import { brand } from "./brand";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? brand.url;

export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = "",
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const allKeywords = [
    "ERP software",
    "business management",
    "inventory management",
    "HR payroll",
    "accounting",
    "CRM",
    brand.name,
    brand.product,
    ...keywords,
  ];

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title: `${title} | ${brand.name}`,
      description,
      url,
      siteName: brand.product,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${brand.name}`,
      description,
    },
    alternates: { canonical: url },
  };
}
