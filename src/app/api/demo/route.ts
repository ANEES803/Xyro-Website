import { NextResponse } from "next/server";
import { validateDemoInput } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateDemoInput(body);

    if (!result.valid || !result.data) {
      return NextResponse.json(
        { success: false, message: result.errors.join(". ") },
        { status: 400 },
      );
    }

    // Ready for Nodemailer / Resend integration
    console.info("[demo]", {
      email: result.data.email,
      company: result.data.company,
      preferredDateTime: result.data.preferredDateTime,
    });

    return NextResponse.json({
      success: true,
      message:
        "Demo request received! Our team will contact you within one business day.",
      data: { id: crypto.randomUUID() },
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
