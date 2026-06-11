import Link from "next/link";
import { cn } from "@/lib/utils";
import "./ripple-button.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "on-dark" | "cream";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary: "ripple-btn",
  secondary: "ripple-btn",
  outline: "ripple-btn ripple-btn--outline",
  ghost: "ripple-btn ripple-btn--ghost",
  "on-dark": "ripple-btn ripple-btn--on-dark",
  cream: "ripple-btn ripple-btn--cream",
};

const sizes: Record<ButtonSize, string> = {
  sm: "ripple-btn--sm",
  md: "ripple-btn--md",
  lg: "ripple-btn--lg",
};

function ButtonContent({ children }: { children: React.ReactNode }) {
  return <span className="ripple-btn-label">{children}</span>;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        <ButtonContent>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}
