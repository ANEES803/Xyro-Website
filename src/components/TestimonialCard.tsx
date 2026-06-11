import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "flex h-full flex-col rounded-2xl border border-navy/5 bg-white p-8 shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-gold text-gold" aria-hidden="true" />
        ))}
      </div>
      <p className="flex-1 text-base leading-relaxed text-slate-brand/80">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 border-t border-navy/5 pt-4">
        <cite className="not-italic">
          <p className="font-semibold text-navy">{name}</p>
          <p className="text-sm text-slate-brand/60">{role}</p>
        </cite>
      </footer>
    </blockquote>
  );
}
