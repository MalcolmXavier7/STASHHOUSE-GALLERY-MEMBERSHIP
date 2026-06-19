"use client";

import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sunflower from "./components/Sunflower";
import SeenOn from "./components/SeenOn";
import PastWork from "./components/PastWork";

const commitBullets = [
  "A hand-original — painted, not printed, not generated",
  "Art that carries AI amplification, never replacement",
  "Entry into a community that values process over performance",
  "Part of the Love Yours Club — self-love as a creative movement",
  "Signed, authenticated, and part of the StashHouse lineage",
  "Direct connection to 15+ years of hip-hop visual culture",
];

const tiers = [
  {
    name: "Small Tilt",
    price: "$100",
    tag: "ENTRY POINT",
    line: "Your entry point into StashHouse Gallery. 8×10 canvas.",
    features: [
      "Hand-original commission · 8×10 canvas",
      "Acrylic & oil on canvas",
      "Signed by Malcolm Xavier 7",
      "Certificate of authenticity",
      "StashHouse member status",
    ],
    accent: "green",
    down: 50,
    balance: 50,
    stripeLink: "https://buy.stripe.com/fZu9AT6tCg0LfZQ8orak00Y",
  },
  {
    name: "Medium Tilt",
    price: "$200",
    tag: "CORE ENTRY",
    line: "The core entry. Your full-size statement piece. 18×24 canvas.",
    features: [
      "Hand-original commission · 18×24 canvas",
      "Acrylic, oil & gold leaf on canvas",
      "Signed by Malcolm Xavier 7",
      "Certificate of authenticity",
      "StashHouse member status",
      "Priority access to exclusive drops",
    ],
    accent: "featured",
    down: 100,
    balance: 100,
    stripeLink: "https://buy.stripe.com/6oU9ATf084i37tkbADak00Z",
  },
  {
    name: "Large Tilt",
    price: "$500",
    tag: "COLLECTOR",
    line: "Museum-scale. Command the room. 24×36 canvas.",
    features: [
      "Hand-original commission · 24×36 canvas",
      "Acrylic, oil & full gold leaf",
      "Signed by Malcolm Xavier 7",
      "Certificate of authenticity",
      "Lifetime StashHouse standing",
      "Studio process film of your piece",
    ],
    accent: "pink",
    down: 250,
    balance: 250,
    stripeLink: "https://buy.stripe.com/eVq00jdW4aGraFwfQTak010",
  },
];

const themes = {
  green: {
    cardBg: "#fff", cardBorder: "1px solid #e6dfce", nameColor: "#163F37", priceColor: "#163F37",
    lineColor: "#6b6b6b", featColor: "#2a2a2a", tickColor: "#4A8B3F", ctaBg: "#163F37", ctaFg: "#fff",
    tagBg: "#4A8B3F", tagFg: "#fff", topBar: "#4A8B3F", rule: "#efe9da",
  },
  featured: {
    cardBg: "#163F37", cardBorder: "3px solid #F4C20D", nameColor: "#fff", priceColor: "#F4C20D",
    lineColor: "#cfe0d8", featColor: "#e7efe9", tickColor: "#F4C20D", ctaBg: "#F4C20D", ctaFg: "#163F37",
    tagBg: "#E8531C", tagFg: "#fff", topBar: "#F4C20D", rule: "rgba(255,255,255,0.16)",
  },
  pink: {
    cardBg: "#fff", cardBorder: "1px solid #e6dfce", nameColor: "#163F37", priceColor: "#163F37",
    lineColor: "#6b6b6b", featColor: "#2a2a2a", tickColor: "#E5468C", ctaBg: "#E8531C", ctaFg: "#fff",
    tagBg: "#E5468C", tagFg: "#fff", topBar: "#E5468C", rule: "#efe9da",
  },
};

const processSteps = [
  { n: "01", t: "Choose your standing", d: "Pick the tier that reflects what this piece means to you." },
  { n: "02", t: "Secure your spot", d: "Membership is limited and intentional. Your payment holds your place in the lineage." },
  { n: "03", t: "Tell your story", d: "The intake is where MX7 learns who you are — your vision, your meaning, your world." },
  { n: "04", t: "The work begins", d: "AI amplifies the vision. The hand finishes it. Acrylic, oil, gold leaf — painted for one owner." },
  { n: "05", t: "Authenticated", d: "Signed, documented, sealed. Your piece enters the StashHouse record." },
  { n: "06", t: "You're in", d: "Your piece ships. You join a community that believes process matters and people are enough." },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-barlow, 'Barlow', sans-serif)", background: "#FCF9F2", color: "#2a2a2a", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: "#FCF9F2", padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px) clamp(56px,7vw,96px)" }}>
        <div className="grid-hero" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", background: "#E8531C", color: "#F4C20D", fontFamily: "var(--font-bebas)", fontSize: 15, letterSpacing: "0.16em", padding: "7px 14px 5px", borderRadius: 3 }}>
              STASHHOUSE GALLERY · MEMBERSHIP
            </span>
            <h1 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(54px,8vw,108px)", lineHeight: 0.88, color: "#163F37", margin: "22px 0 0" }}>
              YOU ARE<br /><span style={{ color: "#E8531C" }}>ENOUGH.</span>
            </h1>
            <p style={{ font: "300 clamp(18px,1.6vw,22px)/1.55 var(--font-barlow, 'Barlow', sans-serif)", color: "#3a4a44", maxWidth: "50ch", margin: "26px 0 0" }}>
              Malcolm Xavier 7 creates hand-original commissions at the intersection of art, technology, and culture. 15+ years in hip-hop visual culture. 9K+ sales and 4M+ views on NTWRK. This isn&rsquo;t a commission shop — it&rsquo;s a community entry point for people who choose intention over performance.
            </p>
            <div className="flex flex-wrap" style={{ gap: 14, marginTop: 34 }}>
              <a
                href="#memberships"
                className="transition-all duration-150 hover:bg-[#163F37] hover:text-[#F4C20D] hover:scale-[1.03]"
                style={{ fontFamily: "var(--font-bebas)", fontSize: 21, letterSpacing: "0.06em", padding: "16px 34px 13px", borderRadius: 3, background: "#E8531C", color: "#fff" }}
              >
                VIEW MEMBERSHIPS
              </a>
              <Link
                href="/faq"
                className="transition-all duration-150 hover:bg-[#163F37] hover:text-white hover:border-[#163F37]"
                style={{ fontFamily: "var(--font-bebas)", fontSize: 21, letterSpacing: "0.06em", padding: "15px 32px 12px", borderRadius: 3, border: "2px solid #163F37", color: "#163F37" }}
              >
                HOW IT WORKS
              </Link>
            </div>
          </div>
          <div className="justify-self-center w-full" style={{ maxWidth: 520, background: "#fff", padding: 12, boxShadow: "0 26px 56px rgba(22,63,55,0.22)", border: "1px solid #ece6d8" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%", overflow: "hidden" }}>
              <img src="/stashhouse-hero.png" alt="StashHouse Gallery — Malcolm Xavier 7" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="flex justify-between items-baseline" style={{ padding: "14px 4px 4px" }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: 16, letterSpacing: "0.06em", color: "#163F37" }}>STASHHOUSE GALLERY</span>
              <span style={{ font: "400 13px var(--font-barlow, 'Barlow', sans-serif)", color: "#7a8580" }}>Malcolm Xavier 7</span>
            </div>
          </div>
        </div>
      </section>

      <SeenOn />

      {/* WHAT IT IS */}
      <section style={{ background: "#fff", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)" }}>
        <div className="grid-mission" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", background: "#E8531C", color: "#F4C20D", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
              THE MISSION
            </span>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(38px,5vw,68px)", lineHeight: 0.92, color: "#163F37", margin: "18px 0 0" }}>
              YOUR PROCESS<br />IS VALID.
            </h2>
            <p style={{ font: "300 clamp(17px,1.5vw,20px)/1.6 var(--font-barlow, 'Barlow', sans-serif)", color: "#3a4a44", margin: "22px 0 0" }}>
              MX7 isn&rsquo;t a &ldquo;coder who paints&rdquo; — he&rsquo;s a builder who picks the tool that serves the intention. AI amplifies the vision. The hand finishes the work. Every piece starts with your story and becomes something that didn&rsquo;t exist before — acrylic, oil, and gold leaf on canvas, signed and authenticated. When you commission from StashHouse, you&rsquo;re joining a lineage of people who believe that consistency, intention, and self-love are worth building on.
            </p>
          </div>
          <div className="flex flex-col" style={{ gap: 14 }}>
            {commitBullets.map((b) => (
              <div key={b} className="flex items-start" style={{ gap: 14, paddingBottom: 14, borderBottom: "1px solid #efe9da" }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: 16, color: "#E8531C", flex: "none", marginTop: 1 }}>✦</span>
                <span style={{ font: "500 16px/1.4 var(--font-barlow, 'Barlow', sans-serif)", color: "#163F37" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="memberships" style={{ background: "#FCF9F2", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="text-center" style={{ marginBottom: "clamp(36px,5vw,60px)" }}>
            <span style={{ display: "inline-block", background: "#E8531C", color: "#F4C20D", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
              CHOOSE YOUR STANDING
            </span>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(40px,6vw,76px)", lineHeight: 0.92, color: "#163F37", margin: "16px 0 0" }}>
              MEMBERSHIP TIERS
            </h2>
          </div>
          <div className="grid-tiers" style={{ display: "grid", gap: 24, alignItems: "start" }}>
            {tiers.map((tier) => {
              const t = themes[tier.accent];
              return (
                <div key={tier.name} className="flex flex-col" style={{ position: "relative", background: t.cardBg, border: t.cardBorder, borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 22px rgba(22,63,55,0.10)", minHeight: "100%" }}>
                  <div style={{ height: 7, background: t.topBar }} />
                  <div className="flex flex-col flex-1" style={{ padding: "clamp(24px,2.6vw,34px) clamp(22px,2.4vw,30px)" }}>
                    <span style={{ alignSelf: "flex-start", background: t.tagBg, color: t.tagFg, fontFamily: "var(--font-bebas)", fontSize: 13, letterSpacing: "0.12em", padding: "5px 11px 3px", borderRadius: 3, marginBottom: 18 }}>
                      {tier.tag}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(30px,3vw,42px)", lineHeight: 0.95, color: t.nameColor, margin: 0 }}>
                      {tier.name}
                    </h3>
                    <p style={{ font: "400 15px/1.45 var(--font-barlow, 'Barlow', sans-serif)", color: t.lineColor, margin: "8px 0 18px", minHeight: 42 }}>
                      {tier.line}
                    </p>
                    <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px,4.4vw,58px)", lineHeight: 1, color: t.priceColor, marginBottom: 4 }}>
                      {tier.price}
                    </div>
                    <span style={{ font: "400 13px var(--font-barlow, 'Barlow', sans-serif)", color: t.lineColor }}>
                      ${tier.down} down &middot; ${tier.balance} on delivery
                    </span>
                    <div style={{ height: 1, background: t.rule, margin: "22px 0" }} />
                    <div className="flex flex-col flex-1" style={{ gap: 13 }}>
                      {tier.features.map((f) => (
                        <div key={f} className="flex items-start" style={{ gap: 11 }}>
                          <span style={{ color: t.tickColor, fontFamily: "var(--font-bebas)", fontSize: 15, flex: "none", marginTop: 1 }}>✦</span>
                          <span style={{ font: "400 15px/1.4 var(--font-barlow, 'Barlow', sans-serif)", color: t.featColor }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={tier.stripeLink}
                      className="transition-all duration-150 hover:opacity-90 hover:scale-[1.02]"
                      style={{ marginTop: 28, display: "block", textAlign: "center", background: t.ctaBg, color: t.ctaFg, fontFamily: "var(--font-bebas)", fontSize: 19, letterSpacing: "0.06em", padding: "15px 0 12px", borderRadius: 3, width: "100%" }}
                    >
                      SELECT {tier.name.toUpperCase()}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden" style={{ background: "#163F37", color: "#fff", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)" }}>
        <div className="absolute pointer-events-none" style={{ bottom: "-16%", right: "-8%", width: "min(46vw,520px)", height: "min(46vw,520px)", opacity: 0.14, animation: "spin-slow 70s linear infinite" }}>
          <Sunflower style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="relative" style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
            <span style={{ display: "inline-block", background: "#F4C20D", color: "#163F37", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
              FROM JOIN TO HANGING ON YOUR WALL
            </span>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(40px,6vw,76px)", lineHeight: 0.92, color: "#fff", margin: "16px 0 0" }}>
              THE PROCESS
            </h2>
          </div>
          <div className="grid-process" style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, overflow: "hidden" }}>
            {processSteps.map((s) => (
              <div key={s.n} style={{ background: "#163F37", padding: "clamp(24px,2.6vw,34px)" }}>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px,3.6vw,52px)", lineHeight: 1, color: "#F4C20D" }}>{s.n}</div>
                <h4 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(22px,2vw,28px)", color: "#fff", margin: "12px 0 8px" }}>{s.t}</h4>
                <p style={{ font: "300 15px/1.55 var(--font-barlow, 'Barlow', sans-serif)", color: "#aec7bd", margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
            <Link
              href="/intake"
              className="transition-all duration-150 hover:bg-white hover:text-[#163F37] hover:scale-[1.03]"
              style={{ display: "inline-block", fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em", padding: "17px 44px 14px", borderRadius: 3, background: "#E8531C", color: "#fff" }}
            >
              START YOUR COMMISSION
            </Link>
          </div>
        </div>
      </section>

      <PastWork />

      <Footer />
    </div>
  );
}
