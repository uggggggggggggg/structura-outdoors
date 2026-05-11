import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Valid email required" },
        { status: 400 },
      );
    }

    console.log("Guide download requested:", email);

    return NextResponse.json(
      { success: true, message: "Guide sent" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 },
    );
  }
}
