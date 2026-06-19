import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const required = ["name", "email", "subject"];
  for (const field of required) {
    if (!data[field]?.trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const submission = {
    ...data,
    submittedAt: data.submittedAt || new Date().toISOString(),
  };

  console.log("=== NEW COMMISSION INTAKE ===");
  console.log(JSON.stringify(submission, null, 2));
  console.log("=============================");

  return NextResponse.json({ success: true });
}
