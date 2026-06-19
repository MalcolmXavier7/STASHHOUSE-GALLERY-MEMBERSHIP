import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { Resend } from "resend";

const COUNTER_PATH = join(process.cwd(), "data", "member-count.json");
const NOTIFY_EMAIL = "info@malcolmxavior7.com";

let _resend = null;
function getResend() {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY?.trim();
  if (key) _resend = new Resend(key);
  return _resend;
}

async function getNextNumber() {
  try {
    const raw = await readFile(COUNTER_PATH, "utf-8");
    const data = JSON.parse(raw);
    data.count += 1;
    await writeFile(COUNTER_PATH, JSON.stringify(data, null, 2));
    return data.count;
  } catch {
    const data = { count: 1 };
    await writeFile(COUNTER_PATH, JSON.stringify(data, null, 2));
    return 1;
  }
}

function formatNumber(n) {
  return String(n).padStart(3, "0");
}

function esc(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildEmailHtml(submission) {
  const fields = [
    ["Membership #", esc(submission.membershipId)],
    ["Name", esc(submission.name)],
    ["Email", esc(submission.email)],
    ["Phone", esc(submission.phone) || "—"],
    ["Tier", esc(submission.tier) || "—"],
    ["Shipping Address", esc(submission.address) || "—"],
    ["Subject / Theme", esc(submission.subject)],
    ["Colors", esc(submission.colors) || "—"],
    ["Size & Medium", esc(submission.medium) || "—"],
    ["References", esc(submission.references) || "—"],
    ["Story / Meaning", esc(submission.story) || "—"],
    ["Deadline", esc(submission.deadline) || "—"],
    ["Submitted", new Date(submission.submittedAt).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })],
  ];

  const rows = fields
    .map(([label, value]) =>
      `<tr><td style="padding:10px 14px;font-weight:600;color:#163F37;border-bottom:1px solid #efe9da;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:10px 14px;color:#3a4a44;border-bottom:1px solid #efe9da;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:'Barlow',Arial,sans-serif;max-width:600px;margin:0 auto;background:#FCF9F2;border:2px solid #163F37;border-radius:8px;overflow:hidden;">
      <div style="background:#163F37;padding:24px 28px;">
        <div style="font-family:'Bebas Neue',Arial,sans-serif;font-size:24px;color:#F4C20D;letter-spacing:0.04em;">STASHHOUSE GALLERY</div>
        <div style="font-size:14px;color:#aec7bd;margin-top:4px;">New Commission Intake</div>
      </div>
      <div style="padding:8px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          ${rows}
        </table>
      </div>
      <div style="background:#163F37;padding:16px 28px;text-align:center;">
        <span style="font-family:'Bebas Neue',Arial,sans-serif;font-size:28px;color:#F4C20D;letter-spacing:0.04em;">${esc(submission.membershipId)}</span>
        <div style="font-size:12px;color:#7e9389;margin-top:4px;">THIS IS THEIR NUMBER ✦ ONE PIECE. ONE OWNER.</div>
      </div>
    </div>
  `;
}

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

  const memberNumber = await getNextNumber();
  const membershipId = `SHG-${formatNumber(memberNumber)}`;

  const submission = {
    ...data,
    membershipId,
    memberNumber,
    submittedAt: data.submittedAt || new Date().toISOString(),
  };

  console.log("=== NEW COMMISSION INTAKE ===");
  console.log(`MEMBERSHIP #${membershipId}`);
  console.log(JSON.stringify(submission, null, 2));
  console.log("=============================");

  const resend = getResend();
  if (resend) {
    try {
      await resend.emails.send({
        from: "StashHouse Gallery <noreply@malcolmxavior7.com>",
        to: NOTIFY_EMAIL,
        subject: `New Commission: ${membershipId} — ${submission.name} (${submission.tier || "—"})`,
        html: buildEmailHtml(submission),
      });
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ success: true, membershipId, memberNumber });
}
