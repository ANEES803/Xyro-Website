"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "signup";

const BLUR_DURATION_MS = 280;
const SLIDE_DURATION_MS = 800;

function PasswordField({
  id,
  value,
  onChange,
  autoComplete,
  placeholder = "Password",
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  placeholder?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="auth-field">
      <input
        id={id}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="auth-input"
      />
      <button
        type="button"
        className="auth-field-icon-btn"
        onClick={() => setVisible(!visible)}
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
      </button>
    </div>
  );
}

function EmailField({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="auth-field">
      <input
        id={id}
        type="email"
        autoComplete="email"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="E-mail"
        className="auth-input"
      />
      <Mail className="auth-field-icon h-[18px] w-[18px]" />
    </div>
  );
}

export function AuthForm() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialMode: AuthMode = tabParam === "signup" ? "signup" : "login";
  const [layoutMode, setLayoutMode] = useState<AuthMode>(initialMode);
  const [contentMode, setContentMode] = useState<AuthMode>(initialMode);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [login, setLogin] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const next: AuthMode | null =
      tabParam === "signup" ? "signup" : tabParam === "login" ? "login" : null;
    if (!next) return;
    setLayoutMode(next);
    setContentMode(next);
  }, [tabParam]);

  useEffect(() => {
    if (!isTransitioning) return;
    const timer = window.setTimeout(() => setIsTransitioning(false), BLUR_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [isTransitioning, layoutMode]);

  useEffect(() => {
    if (layoutMode === contentMode) return;
    const timer = window.setTimeout(() => setContentMode(layoutMode), SLIDE_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [layoutMode, contentMode]);

  function switchMode(next: AuthMode) {
    if (next === layoutMode || layoutMode !== contentMode) return;
    setIsTransitioning(true);
    setLayoutMode(next);
    setStatus("idle");
    setErrorMsg("");
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!login.email || !login.password) {
      setStatus("error");
      setErrorMsg("Please enter your email and password.");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("idle");
    setErrorMsg("Sign in will be available once the auth API is connected.");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!signup.name.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }

    if (signup.password.length < 8) {
      setStatus("error");
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setErrorMsg("");
  }

  const isLoginLayout = layoutMode === "login";
  const isLoginContent = contentMode === "login";
  const isContentPending = layoutMode !== contentMode;

  const panelTitle = isLoginContent ? "Welcome Back" : "Create Account";
  const panelDescription = isLoginContent
    ? "Sign in to open your workspace — dashboards, invoices, and team tools in one place. Use your work email. You'll use these details every time you sign in."
    : `Create your free ${brand.name} account and unlock one place for your entire operation. No scattered tools — manage customers, money, and your calendar without switching apps.`;
  const formTitle = isLoginContent ? "Login" : "Register";
  const formSubtitle = "Please enter your details";

  const toggle = (
    <div className="auth-toggle" role="tablist" aria-label="Authentication mode">
      <div
        className={cn("auth-toggle-slider", !isLoginLayout && "auth-toggle-slider-right")}
        aria-hidden="true"
      />
      <button
        type="button"
        role="tab"
        aria-selected={isLoginLayout}
        className={cn("auth-toggle-btn", isLoginLayout && "auth-toggle-btn-active")}
        onClick={() => switchMode("login")}
      >
        Log in
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={!isLoginLayout}
        className={cn("auth-toggle-btn", !isLoginLayout && "auth-toggle-btn-active")}
        onClick={() => switchMode("signup")}
      >
        Sign Up
      </button>
    </div>
  );

  if (status === "success") {
    return (
      <AuthShell
        mode="signup"
        contentMode="signup"
        isTransitioning={isTransitioning}
        panelTitle="Account Created"
        panelDescription={`Welcome to ${brand.name}. You're all set to get started.`}
        formTitle="Success"
        formSubtitle="Your account has been created"
        toggle={toggle}
      >
        <p className="auth-success-text">
          Your account request has been received. Sign in will be fully enabled once
          the auth API is connected.
        </p>
        <Button
          type="button"
          onClick={() => {
            setStatus("idle");
            switchMode("login");
          }}
          className="ripple-btn--full mt-6"
        >
          Go to Log in
        </Button>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      mode={layoutMode}
      contentMode={contentMode}
      isTransitioning={isTransitioning}
      isContentPending={isContentPending}
      panelTitle={panelTitle}
      panelDescription={panelDescription}
      formTitle={formTitle}
      formSubtitle={formSubtitle}
      toggle={toggle}
    >
      {isLoginContent ? (
        <form onSubmit={handleLogin}>
          <EmailField
            id="email"
            value={login.email}
            onChange={(value) => setLogin({ ...login, email: value })}
          />
          <PasswordField
            id="password"
            value={login.password}
            onChange={(value) => setLogin({ ...login, password: value })}
            autoComplete="current-password"
          />
          <Link href="/contact" className="auth-link auth-forgot">
            Forgot password?
          </Link>

          {errorMsg && <p className="auth-error">{errorMsg}</p>}

          <Button type="submit" disabled={status === "loading"} className="ripple-btn--full">
            {status === "loading" ? "Signing in..." : "Log in"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <div className="auth-field">
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              required
              value={signup.name}
              onChange={(e) => setSignup({ ...signup, name: e.target.value })}
              placeholder="Name"
              className="auth-input auth-input-plain"
            />
          </div>
          <EmailField
            id="signup-email"
            value={signup.email}
            onChange={(value) => setSignup({ ...signup, email: value })}
          />
          <PasswordField
            id="signup-password"
            value={signup.password}
            onChange={(value) => setSignup({ ...signup, password: value })}
            autoComplete="new-password"
          />

          {errorMsg && <p className="auth-error">{errorMsg}</p>}

          <Button type="submit" disabled={status === "loading"} className="ripple-btn--full">
            {status === "loading" ? "Creating account..." : "Sign Up"}
          </Button>

          <p className="auth-register-note">
            By creating an account, you agree to use {brand.name} for your business
            workspace. Already have an account?{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => switchMode("login")}
            >
              Sign in instead
            </button>
            .
          </p>
        </form>
      )}
    </AuthShell>
  );
}
