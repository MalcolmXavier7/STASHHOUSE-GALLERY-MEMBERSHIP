"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sunflower from "../components/Sunflower";

const faqs = [
  { q: "How does pricing and payment work?", a: "Each tier is a one-time commission fee covering the original artwork, authentication, and shipping within the continental US. Payment secures your spot in the queue — membership is limited and released in waves." },
  { q: "What's the turnaround time?", a: "Hand-originals take time. Most commissions are completed within 6–10 weeks of a finished intake, with progress notes along the way. This is not a print on demand." },
  { q: "Can I cancel or get a refund?", a: "You can cancel before work begins for a full refund. Once paint hits canvas the commission is non-refundable — every piece is made for one owner and can't be resold as stock." },
  { q: "What does \"hand-original\" actually mean?", a: "Exactly that. Acrylic, oil, and gold leaf applied by hand by Malcolm Xavier 7 on an 18×24 canvas. Not a reproduction, not a print, not AI. One piece. One owner." },
  { q: "Who owns the artwork and the rights?", a: "You own the physical piece outright. MX7 retains the right to photograph and display the work as part of the StashHouse lineage and portfolio; commercial reuse of the image stays with the artist." },
  { q: "Are there community rules?", a: "StashHouse is a community of collectors who stand for something real. Respect the work, respect each other, no flipping for profit. Members who get it keep their standing — and their access to drops." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ fontFamily: "var(--font-barlow, 'Barlow', sans-serif)", background: "#FCF9F2", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "#163F37", color: "#fff", padding: "clamp(48px,7vw,84px) clamp(20px,5vw,56px) clamp(40px,5vw,60px)" }}>
        <div className="absolute pointer-events-none" style={{ bottom: "-38%", left: "-5%", width: "min(40vw,440px)", height: "min(40vw,440px)", opacity: 0.16, animation: "spin-slow 60s linear infinite" }}>
          <Sunflower style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="relative" style={{ maxWidth: 860, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "#E8531C", color: "#F4C20D", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
            RULES · PROCESS · GUIDELINES
          </span>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(48px,8vw,104px)", lineHeight: 0.9, color: "#fff", margin: "18px 0 0" }}>
            QUESTIONS,<br /><span style={{ color: "#F4C20D" }}>ANSWERED STRAIGHT.</span>
          </h1>
        </div>
      </section>

      {/* Accordion */}
      <section style={{ background: "#FCF9F2", padding: "clamp(40px,6vw,72px) clamp(20px,5vw,56px) clamp(56px,8vw,96px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", borderTop: "2px solid #163F37" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e3dccb" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between text-left"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "24px 0", gap: 20 }}
              >
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "0.01em", color: "#163F37", lineHeight: 1.05 }}>
                  {f.q}
                </span>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: 30, color: "#E8531C", flex: "none", width: 34, textAlign: "center" }}>
                  {openIndex === i ? "–" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 0 26px" }}>
                  <p style={{ font: "300 clamp(16px,1.5vw,19px)/1.6 var(--font-barlow, 'Barlow', sans-serif)", color: "#3a4a44", margin: 0, maxWidth: "64ch" }}>
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Still deciding CTA */}
          <div style={{ marginTop: "clamp(40px,6vw,64px)", background: "#fff", borderLeft: "6px solid #F4C20D", padding: "clamp(28px,4vw,44px)", borderRadius: "0 8px 8px 0", boxShadow: "0 8px 22px rgba(22,63,55,0.08)" }}>
            <h3 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(28px,3vw,40px)", color: "#163F37", margin: "0 0 10px" }}>
              STILL DECIDING?
            </h3>
            <p style={{ font: "300 18px/1.6 var(--font-barlow, 'Barlow', sans-serif)", color: "#3a4a44", margin: "0 0 22px", maxWidth: "54ch" }}>
              Reach out to the studio. The work speaks for itself — but we&rsquo;re happy to talk through tiers, timing, and what your piece could be.
            </p>
            <div className="flex flex-wrap" style={{ gap: 14 }}>
              <Link
                href="/"
                className="transition-all duration-150 hover:bg-[#163F37] hover:text-[#F4C20D]"
                style={{ fontFamily: "var(--font-bebas)", fontSize: 19, letterSpacing: "0.06em", padding: "14px 30px 11px", borderRadius: 3, background: "#E8531C", color: "#fff" }}
              >
                VIEW MEMBERSHIPS
              </Link>
              <Link
                href="/intake"
                className="transition-all duration-150 hover:bg-[#163F37] hover:border-[#163F37] hover:text-white"
                style={{ fontFamily: "var(--font-bebas)", fontSize: 19, letterSpacing: "0.06em", padding: "13px 28px 10px", borderRadius: 3, border: "2px solid #163F37", color: "#163F37" }}
              >
                START INTAKE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
