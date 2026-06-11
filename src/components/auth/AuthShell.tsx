import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import "./auth.css";

type AuthShellProps = {
  mode: "login" | "signup";
  contentMode: "login" | "signup";
  isTransitioning?: boolean;
  isContentPending?: boolean;
  panelTitle: string;
  panelDescription: string;
  formTitle: string;
  formSubtitle: string;
  toggle?: React.ReactNode;
  children: React.ReactNode;
};

export function AuthShell({
  mode,
  contentMode,
  isTransitioning = false,
  isContentPending = false,
  panelTitle,
  panelDescription,
  formTitle,
  formSubtitle,
  toggle,
  children,
}: AuthShellProps) {
  return (
    <section className="auth-page">
      <div className="mx-auto max-w-[920px]">
        <Link href="/" className="auth-back">
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Link>

        {toggle && <div className="auth-toggle-wrap">{toggle}</div>}

        <div
          className={cn(
            "auth-card",
            mode === "login" ? "auth-card--login" : "auth-card--signup",
            isTransitioning && "auth-card--transitioning",
            isContentPending && "auth-card--content-pending",
          )}
        >
          <div className="auth-panel-visual">
            <div className="auth-panel-art" aria-hidden="true" />
            <div key={`panel-${contentMode}`} className="auth-panel-content auth-content-enter">
              <h2>{panelTitle}</h2>
              <p>{panelDescription}</p>
            </div>
          </div>

          <div className="auth-panel-form">
            <div key={`form-${contentMode}`} className="auth-form-inner auth-content-enter">
              <div className="auth-form-header">
                <Link href="/" className="auth-form-logo">
                  <Logo imgClassName="h-14 w-14 sm:h-16 sm:w-16" />
                </Link>
                <h1 className="auth-form-title">{formTitle}</h1>
                <p className="auth-form-subtitle">{formSubtitle}</p>
              </div>
              <div className="auth-form-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
