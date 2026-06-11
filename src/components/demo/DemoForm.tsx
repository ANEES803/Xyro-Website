"use client";

import { useState } from "react";
import { submitDemoRequest, type DemoPayload } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function DemoForm() {
  const [form, setForm] = useState<DemoPayload>({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDateTime: "",
    businessRequirements: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await submitDemoRequest(form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        preferredDateTime: "",
        businessRequirements: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit demo request");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-navy">Demo request received!</h3>
        <p className="mt-3 text-slate-brand/70">
          Thank you for your interest in Xyro ERP. Our team will reach out within one
          business day to schedule your personalized demo.
        </p>
      </div>
    );
  }

  const fields = [
    { key: "name" as const, label: "Full Name", type: "text", required: true, span: 1 },
    { key: "email" as const, label: "Work Email", type: "email", required: true, span: 1 },
    { key: "company" as const, label: "Company", type: "text", required: true, span: 1 },
    { key: "phone" as const, label: "Phone", type: "tel", required: false, span: 1 },
    {
      key: "preferredDateTime" as const,
      label: "Preferred Date & Time",
      type: "text",
      required: false,
      span: 2,
      placeholder: "e.g. Tuesday 2:00 PM PST",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key} className={field.span === 2 ? "sm:col-span-2" : undefined}>
            <label htmlFor={field.key} className="mb-1.5 block text-sm font-medium text-navy">
              {field.label}
            </label>
            <input
              id={field.key}
              type={field.type}
              required={field.required}
              placeholder={"placeholder" in field ? field.placeholder : undefined}
              value={form[field.key] ?? ""}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className={cn(
                "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm",
                "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
              )}
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="businessRequirements"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Business Requirements
        </label>
        <textarea
          id="businessRequirements"
          required
          rows={5}
          value={form.businessRequirements}
          onChange={(e) => setForm({ ...form, businessRequirements: e.target.value })}
          placeholder="Tell us about your team size, modules of interest, and current challenges..."
          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Book My Demo"}
      </Button>
    </form>
  );
}
