import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Implement email sending logic
    // Options:
    // 1. Resend (https://resend.com) - Modern, developer-friendly
    // 2. SendGrid
    // 3. Nodemailer with SMTP

    // For now, log the data (replace with actual email service)
    console.log("Contact form submission:", validatedData);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
