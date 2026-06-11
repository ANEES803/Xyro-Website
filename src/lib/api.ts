export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  type: "demo" | "contact" | "support";
}

export interface DemoPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  preferredDateTime?: string;
  businessRequirements: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

async function parseResponse(res: Response): Promise<ApiResponse> {
  const data = (await res.json()) as ApiResponse;
  if (!res.ok) {
    throw new Error(data.message ?? "Something went wrong");
  }
  return data;
}

export async function submitContactForm(payload: ContactPayload): Promise<ApiResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseResponse(res);
}

export async function submitDemoRequest(payload: DemoPayload): Promise<ApiResponse> {
  const res = await fetch("/api/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseResponse(res);
}
