"use client";

const logos = [
  { src: "/logos/complex-ntwrk.png", alt: "Complex × NTWRK" },
  { src: "/logos/whatnot.png", alt: "Whatnot" },
  { src: "/logos/nba.png", alt: "NBA" },
  { src: "/logos/image-1781836460208.webp", alt: "Barrel & Flow Fest" },
  { src: "/logos/5203_records_blk.jpg", alt: "5203 Records" },
  { src: "/logos/Untitled design (11).png", alt: "Dancing Gnome" },
];

export default function SeenOn() {
  const doubled = [...logos, ...logos];

  return (
    <section style={{ background: "#fff", borderTop: "1px solid #e6dfce", borderBottom: "1px solid #e6dfce", padding: "clamp(32px,4vw,52px) 0", overflow: "hidden" }}>
      <div className="text-center" style={{ marginBottom: "clamp(20px,3vw,32px)" }}>
        <span style={{ fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.2em", color: "#9a9484" }}>
          AS SEEN ON
        </span>
      </div>
      <div className="logo-ticker">
        <div className="logo-ticker-track">
          {doubled.map((logo, i) => (
            <div key={i} className="logo-ticker-item">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: "clamp(36px,5vw,56px)", width: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.6, transition: "filter 0.3s, opacity 0.3s" }}
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)"; e.currentTarget.style.opacity = "1"; }}
                onMouseOut={(e) => { e.currentTarget.style.filter = "grayscale(100%)"; e.currentTarget.style.opacity = "0.6"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
