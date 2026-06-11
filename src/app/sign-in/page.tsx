import { Suspense } from "react";
import type { Metadata } from "next";
import "@/components/auth/auth.css";
import { AuthForm } from "@/components/auth/AuthForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sign in",
  description: `Sign in or create your ${brand.name} account.`,
};

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <AuthForm />
    </Suspense>
  );
}
