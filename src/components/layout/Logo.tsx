import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <img
      src={brand.logo.icon}
      alt={`${brand.name} logo`}
      className={cn("shrink-0 object-contain h-12 w-12", imgClassName, className)}
    />
  );
}
