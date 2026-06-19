import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const required = ["fullName", "email", "subject", "style", "mood", "tier"];
  for (const field of required) {
    if (!data[field]?.trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const tierLabels = {
    small: "Small Tilt (8×10) — $100",
    medium: "Medium Tilt (18×24) — $200",
    large: "Large Tilt (24×36) — $500",
  };

  const submission = {
    ...data,
    tierLabel: tierLabels[data.tier] || data.tier,
    submittedAt: data.submittedAt || new Date().toISOString(),
  };

  // Log for now — replace with your preferred backend (email API, database, etc.)
  console.log("=== NEW COMMISSION INTAKE ===");
  console.log(JSON.stringify(submission, null, 2));
  console.log("=============================");

  // TODO: Send email via Resend/SendGrid/Nodemailer to commissions@stashhousegallery.com
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'StashHouse <noreply@stashhousegallery.com>',
  //   to: 'commissions@stashhousegallery.com',
  //   subject: `New Commission: ${submission.tierLabel} — ${submission.fullName}`,
  //   text: JSON.stringify(submission, null, 2),
  // });

  return NextResponse.json({ success: true });
}
