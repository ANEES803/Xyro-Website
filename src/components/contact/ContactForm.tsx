"use client";

import { useState } from "react";
import { submitContactForm, type ContactPayload } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  defaultType?: ContactPayload["type"];
}

export function ContactForm({ defaultType = "contact" }: ContactFormProps) {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    type: defaultType,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({ ...form, name: "", email: "", company: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  const fields = [
    { key: "name" as const, label: "Full Name", type: "text", required: true },
    { key: "email" as const, label: "Email", type: "email", required: true },
    { key: "company" as const, label: "Company", type: "text", required: false },
    { key: "phone" as const, label: "Phone", type: "tel", required: false },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={field.key}
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              {field.label}
            </label>
            <input
              id={field.key}
              type={field.type}
              required={field.required}
              value={form[field.key]}
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
        <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-navy">
          Inquiry Type
        </label>
        <select
          id="type"
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value as ContactPayload["type"] })
          }
          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option value="demo">Request Demo</option>
          <option value="contact">General Inquiry</option>
          <option value="support">Support</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          placeholder="Tell us about your business needs..."
        />
      </div>

      {status === "success" && (
        <p className="rounded-xl bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark">
          Message sent successfully! We will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
