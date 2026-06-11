import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  variant?: "brand" | "on-dark";
  className?: string;
  onClick?: () => void;
}

/** @deprecated Use Button directly */
export function AnimatedButton({
  href,
  children,
  size = "md",
  variant = "brand",
  className,
  onClick,
}: AnimatedButtonProps) {
  return (
    <Button
      href={href}
      size={size === "sm" ? "sm" : "md"}
      variant={variant === "on-dark" ? "on-dark" : "primary"}
      className={cn(className?.includes("full") && "ripple-btn--full", className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
