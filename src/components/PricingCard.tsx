import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  cta: { label: string; href: string };
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
        highlighted
          ? "border-brand bg-navy text-white shadow-xl shadow-brand/10"
          : "border-navy/5 bg-white shadow-sm",
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2">
        <span
          className={cn(
            "text-3xl font-bold",
            highlighted ? "text-brand-light" : "text-brand",
          )}
        >
          {price}
        </span>
        {period && (
          <span className={cn("text-sm", highlighted ? "text-white/60" : "text-slate-brand/60")}>
            {period}
          </span>
        )}
      </p>
      <p className={cn("mt-2 text-sm", highlighted ? "text-white/70" : "text-slate-brand/70")}>
        {description}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <Check
              size={16}
              className={highlighted ? "text-brand-light" : "text-brand"}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={cta.href}
        variant={highlighted ? "primary" : "outline"}
        className="mt-8 w-full"
      >
        {cta.label}
      </Button>
    </article>
  );
}
