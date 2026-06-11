const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function sanitizeString(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export interface ContactInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  type?: "demo" | "contact" | "support";
}

export interface DemoInput {
  name: string;
  email: string;
  company: string;
  phone?: string;
  preferredDateTime?: string;
  businessRequirements: string;
}

export function validateContactInput(body: unknown): {
  valid: boolean;
  errors: string[];
  data?: ContactInput;
} {
  const errors: string[] = [];
  if (!body || typeof body !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const raw = body as Record<string, unknown>;
  const name = sanitizeString(raw.name, 120);
  const email = sanitizeString(raw.email, 200);
  const company = sanitizeString(raw.company, 200);
  const phone = sanitizeString(raw.phone, 40);
  const message = sanitizeString(raw.message, 2000);
  const typeRaw = sanitizeString(raw.type, 20);
  const type =
    typeRaw === "demo" || typeRaw === "support" || typeRaw === "contact"
      ? typeRaw
      : "contact";

  if (!name) errors.push("Name is required");
  if (!email) errors.push("Email is required");
  else if (!isValidEmail(email)) errors.push("Invalid email address");
  if (!message) errors.push("Message is required");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: {
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      message,
      type,
    },
  };
}

export function validateDemoInput(body: unknown): {
  valid: boolean;
  errors: string[];
  data?: DemoInput;
} {
  const errors: string[] = [];
  if (!body || typeof body !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const raw = body as Record<string, unknown>;
  const name = sanitizeString(raw.name, 120);
  const email = sanitizeString(raw.email, 200);
  const company = sanitizeString(raw.company, 200);
  const phone = sanitizeString(raw.phone, 40);
  const preferredDateTime = sanitizeString(raw.preferredDateTime, 120);
  const businessRequirements = sanitizeString(raw.businessRequirements, 2000);

  if (!name) errors.push("Name is required");
  if (!email) errors.push("Email is required");
  else if (!isValidEmail(email)) errors.push("Invalid email address");
  if (!company) errors.push("Company is required");
  if (!businessRequirements) errors.push("Business requirements are required");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: {
      name,
      email,
      company,
      phone: phone || undefined,
      preferredDateTime: preferredDateTime || undefined,
      businessRequirements,
    },
  };
}
