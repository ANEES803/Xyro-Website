import { NextResponse } from "next/server";
import { validateContactInput } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContactInput(body);

    if (!result.valid || !result.data) {
      return NextResponse.json(
        { success: false, message: result.errors.join(". ") },
        { status: 400 },
      );
    }

    // Ready for Nodemailer / Resend integration
    console.info("[contact]", {
      type: result.data.type,
      email: result.data.email,
      company: result.data.company,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. We'll respond shortly.",
      data: { id: crypto.randomUUID() },
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
