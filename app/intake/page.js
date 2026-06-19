"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sunflower from "../components/Sunflower";

const inputStyle = {
  font: "400 16px var(--font-barlow, 'Barlow', sans-serif)",
  color: "#1f1f1f",
  padding: "13px 14px",
  border: "1px solid #cfc7b4",
  borderRadius: 4,
  outline: "none",
  background: "#fff",
  width: "100%",
};

const textareaStyle = { ...inputStyle, resize: "vertical", lineHeight: 1.5 };

const labelStyle = {
  fontFamily: "var(--font-bebas)",
  fontSize: 14,
  letterSpacing: "0.1em",
  color: "#163F37",
};

const initialForm = {
  name: "", email: "", phone: "", tier: "", address: "",
  subject: "", colors: "", medium: "", references: "",
  story: "", deadline: "",
};

export default function IntakePage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [membershipId, setMembershipId] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();
      setMembershipId(data.membershipId);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "var(--font-barlow, 'Barlow', sans-serif)", background: "#FCF9F2", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "#163F37", color: "#fff", padding: "clamp(48px,7vw,84px) clamp(20px,5vw,56px) clamp(40px,5vw,60px)" }}>
        <div className="absolute pointer-events-none" style={{ top: "-26%", right: "-6%", width: "min(40vw,440px)", height: "min(40vw,440px)", opacity: 0.16, animation: "spin-slow 60s linear infinite" }}>
          <Sunflower style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="relative" style={{ maxWidth: 840, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#E8531C", color: "#F4C20D", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
            PAYMENT CONFIRMED · STEP 3 OF 6
          </span>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(46px,7vw,92px)", lineHeight: 0.9, color: "#fff", margin: "18px 0 0" }}>
            TELL YOUR <span style={{ color: "#F4C20D" }}>STORY</span>
          </h1>
          <p style={{ font: "300 clamp(17px,1.6vw,21px)/1.55 var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8", maxWidth: "56ch", margin: "20px 0 0" }}>
            This is how MX7 gets to know your piece before the first brushstroke. The more you share, the more the work becomes yours. Nothing here is locked — we&rsquo;ll talk it through together.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: "#FCF9F2", padding: "clamp(40px,6vw,72px) clamp(20px,5vw,56px) clamp(64px,8vw,104px)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>

          {submitted ? (
            <div className="flex flex-col items-center" style={{ gap: "clamp(28px,4vw,40px)" }}>
              {/* Membership Card */}
              <div style={{ width: "100%", maxWidth: 480, background: "#163F37", borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 60px rgba(22,63,55,0.35)", border: "3px solid #F4C20D" }}>
                <div style={{ height: 8, background: "#F4C20D" }} />
                <div style={{ padding: "clamp(32px,5vw,48px) clamp(28px,4vw,40px)", textAlign: "center" }}>
                  <div className="flex justify-center" style={{ marginBottom: 20 }}>
                    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 0.8, background: "#E8531C", padding: "8px 12px 6px", borderRadius: 3 }}>
                      <span style={{ fontFamily: "var(--font-bebas)", fontSize: 18, letterSpacing: "0.02em", color: "#F4C20D" }}>STASH HOUSE</span>
                      <span style={{ fontFamily: "var(--font-bebas)", fontSize: 10, letterSpacing: "0.34em", color: "#F4C20D" }}>GALLERY</span>
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: 13, letterSpacing: "0.2em", color: "#aec7bd", marginBottom: 8 }}>
                    MEMBERSHIP NUMBER
                  </div>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(64px,10vw,96px)", lineHeight: 1, color: "#F4C20D", margin: "0 0 6px" }}>
                    {membershipId || "SHG-001"}
                  </div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.16)", margin: "20px 0" }} />
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", color: "#aec7bd", marginBottom: 4 }}>MEMBER</div>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(24px,3vw,32px)", color: "#fff", lineHeight: 1 }}>
                    {form.name || "—"}
                  </div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.16)", margin: "20px 0" }} />
                  <div className="flex justify-between" style={{ padding: "0 8px" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 11, letterSpacing: "0.16em", color: "#aec7bd" }}>TIER</div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "#fff" }}>{form.tier || "MEDIUM TILT"}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 11, letterSpacing: "0.16em", color: "#aec7bd" }}>ISSUED</div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "#fff" }}>{new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase()}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 11, letterSpacing: "0.16em", color: "#aec7bd" }}>STATUS</div>
                      <div style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "#F4C20D" }}>ACTIVE</div>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#122F2A", padding: "14px 0", textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.2em", color: "#7e9389" }}>THIS IS YOUR NUMBER ✦ ONE PIECE. ONE OWNER.</span>
                </div>
              </div>

              {/* Welcome message */}
              <div className="text-center" style={{ maxWidth: 500 }}>
                <Sunflower style={{ width: 48, height: 48, margin: "0 auto 16px", animation: "spin-slow 24s linear infinite" }} />
                <h2 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(32px,4vw,44px)", lineHeight: 0.94, color: "#163F37", margin: 0 }}>
                  WELCOME TO STASHHOUSE
                </h2>
                <p style={{ font: "300 17px/1.6 var(--font-barlow, 'Barlow', sans-serif)", color: "#3a4a44", margin: "14px 0 0" }}>
                  Your intake is in. Malcolm Xavior 7 will review your story and reach out personally before work begins.
                </p>
              </div>

              <div className="flex justify-center flex-wrap" style={{ gap: 14 }}>
                <Link href="/" style={{ fontFamily: "var(--font-bebas)", fontSize: 19, letterSpacing: "0.06em", padding: "14px 30px 11px", borderRadius: 3, background: "#163F37", color: "#fff" }}>
                  BACK TO MEMBERSHIP
                </Link>
                <button onClick={() => setSubmitted(false)} style={{ fontFamily: "var(--font-bebas)", fontSize: 19, letterSpacing: "0.06em", padding: "13px 28px 10px", borderRadius: 3, border: "2px solid #163F37", color: "#163F37", background: "none", cursor: "pointer" }}>
                  EDIT MY INTAKE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "clamp(28px,4vw,40px)" }}>

              {/* 01 WHO YOU ARE */}
              <div>
                <div className="flex items-center" style={{ gap: 12, marginBottom: 18 }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, color: "#E8531C" }}>01</span>
                  <h3 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(24px,2.4vw,32px)", color: "#163F37", margin: 0 }}>WHO YOU ARE</h3>
                </div>
                <div className="grid-form-2col" style={{ display: "grid", gap: 18 }}>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>FULL NAME</span>
                    <input value={form.name} onChange={set("name")} placeholder="Your name" style={inputStyle} required />
                  </label>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>EMAIL</span>
                    <input value={form.email} onChange={set("email")} placeholder="you@email.com" type="email" style={inputStyle} required />
                  </label>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>PHONE</span>
                    <input value={form.phone} onChange={set("phone")} placeholder="(optional)" style={inputStyle} />
                  </label>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>MEMBERSHIP TIER</span>
                    <input value={form.tier} onChange={set("tier")} placeholder="Small Tilt / Medium Tilt / Large Tilt" style={inputStyle} />
                  </label>
                </div>
                <label className="flex flex-col" style={{ gap: 8, marginTop: 18 }}>
                  <span style={labelStyle}>SHIPPING ADDRESS</span>
                  <textarea value={form.address} onChange={set("address")} placeholder="Where your piece ships" rows={2} style={textareaStyle} />
                </label>
              </div>

              {/* 02 THE PIECE */}
              <div>
                <div className="flex items-center" style={{ gap: 12, marginBottom: 18 }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, color: "#E8531C" }}>02</span>
                  <h3 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(24px,2.4vw,32px)", color: "#163F37", margin: 0 }}>THE PIECE</h3>
                </div>
                <div className="flex flex-col" style={{ gap: 18 }}>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>SUBJECT OR THEME</span>
                    <textarea value={form.subject} onChange={set("subject")} placeholder="What should the piece be about? A subject, a feeling, a moment…" rows={2} style={textareaStyle} required />
                  </label>
                  <div className="grid-form-2col" style={{ display: "grid", gap: 18 }}>
                    <label className="flex flex-col" style={{ gap: 8 }}>
                      <span style={labelStyle}>COLORS YOU LOVE</span>
                      <input value={form.colors} onChange={set("colors")} placeholder="Palette, tones, what to avoid" style={inputStyle} />
                    </label>
                    <label className="flex flex-col" style={{ gap: 8 }}>
                      <span style={labelStyle}>SIZE & MEDIUM</span>
                      <input value={form.medium} onChange={set("medium")} placeholder="Default 18×24, Medium Tilt" style={inputStyle} />
                    </label>
                  </div>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>INSPIRATION / REFERENCE LINKS</span>
                    <textarea value={form.references} onChange={set("references")} placeholder="Paste links to images, moodboards, or work that speaks to you" rows={2} style={textareaStyle} />
                  </label>
                </div>
              </div>

              {/* 03 THE STORY */}
              <div>
                <div className="flex items-center" style={{ gap: 12, marginBottom: 18 }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, color: "#E8531C" }}>03</span>
                  <h3 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(24px,2.4vw,32px)", color: "#163F37", margin: 0 }}>THE STORY</h3>
                </div>
                <div className="flex flex-col" style={{ gap: 18 }}>
                  <label className="flex flex-col" style={{ gap: 8 }}>
                    <span style={labelStyle}>WHAT DOES THIS PIECE MEAN TO YOU?</span>
                    <textarea value={form.story} onChange={set("story")} placeholder="Tell MX7 why this matters. This is what makes it yours." rows={4} style={textareaStyle} />
                  </label>
                  <label className="flex flex-col" style={{ gap: 8, maxWidth: 280 }}>
                    <span style={labelStyle}>DEADLINE OR OCCASION</span>
                    <input value={form.deadline} onChange={set("deadline")} placeholder="Any date to work toward?" style={inputStyle} />
                  </label>
                </div>
              </div>

              {error && (
                <div style={{ background: "#fdf2f2", border: "1px solid #E8531C", borderRadius: 6, padding: "14px 18px", font: "400 14px var(--font-barlow, 'Barlow', sans-serif)", color: "#E8531C" }}>
                  {error}
                </div>
              )}

              <div className="flex items-center flex-wrap" style={{ gap: 16, paddingTop: 8, borderTop: "1px solid #e8e1d0" }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="transition-all duration-150 hover:bg-[#163F37] hover:text-[#F4C20D] hover:scale-[1.02] disabled:opacity-50"
                  style={{ cursor: "pointer", border: "none", background: "#E8531C", color: "#fff", fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em", padding: "16px 40px 13px", borderRadius: 3 }}
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT MY INTAKE"}
                </button>
                <span style={{ font: "400 14px var(--font-barlow, 'Barlow', sans-serif)", color: "#6b6b6b" }}>
                  MX7 reviews every intake personally before painting begins.
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
