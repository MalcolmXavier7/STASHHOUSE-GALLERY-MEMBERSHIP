import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#122F2A", color: "#fff", padding: "clamp(48px,7vw,80px) clamp(20px,5vw,56px) 40px" }}>
      <div className="flex flex-wrap justify-between items-start" style={{ maxWidth: 1180, margin: "0 auto", gap: 40 }}>
        <div style={{ maxWidth: "34ch" }}>
          <span
            className="inline-flex flex-col"
            style={{ lineHeight: 0.8, background: "#E8531C", padding: "9px 13px 7px", borderRadius: 3, marginBottom: 16 }}
          >
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.02em", color: "#F4C20D" }}>STASH HOUSE</span>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.34em", color: "#F4C20D" }}>GALLERY</span>
          </span>
          <p style={{ font: "400 15px/1.6 var(--font-barlow, 'Barlow', sans-serif)", color: "#9fb6ac", margin: "14px 0 0" }}>
            Art, technology, and culture — built by hand, amplified by intention. Show people they&rsquo;re enough. That&rsquo;s the mission.
          </p>
        </div>
        <div className="flex flex-wrap" style={{ gap: "clamp(36px,6vw,80px)" }}>
          <div className="flex flex-col" style={{ gap: 12 }}>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 15, letterSpacing: "0.18em", color: "#F4C20D" }}>EXPLORE</span>
            <Link href="/" style={{ font: "400 15px var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8" }}>Membership</Link>
            <Link href="/intake" style={{ font: "400 15px var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8" }}>Intake form</Link>
            <Link href="/faq" style={{ font: "400 15px var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8" }}>FAQ</Link>
          </div>
          <div className="flex flex-col" style={{ gap: 12 }}>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 15, letterSpacing: "0.18em", color: "#F4C20D" }}>CONTACT</span>
            <span style={{ font: "400 15px var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8" }}>info@malcolmxavior7.com</span>
            <span style={{ font: "400 15px var(--font-barlow, 'Barlow', sans-serif)", color: "#cfe0d8" }}>By appointment</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-between items-center"
        style={{ maxWidth: 1180, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)", gap: 12 }}
      >
        <span style={{ font: "400 13px var(--font-barlow, 'Barlow', sans-serif)", color: "#7e9389" }}>
          &copy; 2026 StashHouse Gallery &middot; A Malcolm Xavior 7 project
        </span>
        <span style={{ font: "400 13px var(--font-barlow, 'Barlow', sans-serif)", color: "#7e9389" }}>
          Made by hand. ✦
        </span>
      </div>
    </footer>
  );
}
