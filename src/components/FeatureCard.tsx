import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: readonly string[];
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  benefits,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-navy/5 bg-white p-6 shadow-sm transition-all",
        "hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-brand/70">{description}</p>
      {benefits && benefits.length > 0 && (
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-sm text-slate-brand/80 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand before:content-['']"
            >
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
