"use client";

const works = [
  { src: "/commsionns/IMG_9072 (1).JPEG", alt: "Commission — acrylic and oil on canvas" },
  { src: "/commsionns/IMG_9086 (1).JPEG", alt: "Commission — hand-original artwork" },
  { src: "/commsionns/IMG_9087.JPEG", alt: "Commission — gold leaf detail" },
  { src: "/commsionns/IMG_9325.JPEG", alt: "Commission — mixed media on canvas" },
  { src: "/commsionns/IMG_9371.JPEG", alt: "Commission — Malcolm Xavior Seven original" },
];

export default function PastWork() {
  const doubled = [...works, ...works];

  return (
    <section style={{ background: "#163F37", padding: "clamp(56px,8vw,96px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,56px)", marginBottom: "clamp(28px,4vw,44px)" }}>
        <span style={{ display: "inline-block", background: "#F4C20D", color: "#163F37", fontFamily: "var(--font-bebas)", fontSize: 14, letterSpacing: "0.16em", padding: "6px 12px 4px", borderRadius: 3 }}>
          THE WORK SPEAKS
        </span>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontWeight: 400, fontSize: "clamp(40px,6vw,76px)", lineHeight: 0.92, color: "#fff", margin: "16px 0 0" }}>
          PAST COMMISSIONS
        </h2>
        <p style={{ font: "300 clamp(16px,1.4vw,19px)/1.55 var(--font-barlow, 'Barlow', sans-serif)", color: "#aec7bd", maxWidth: "52ch", margin: "14px 0 0" }}>
          Every piece is hand-original — acrylic, oil, and gold leaf on canvas. No two are the same. Here&rsquo;s what the process produces.
        </p>
      </div>
      <div className="work-ticker">
        <div className="work-ticker-track">
          {doubled.map((work, i) => (
            <div key={i} className="work-ticker-item">
              <div style={{ width: "clamp(280px,30vw,400px)", flexShrink: 0, background: "#122F2A", borderRadius: 6, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "120%", overflow: "hidden" }}>
                  <img
                    src={work.src}
                    alt={work.alt}
                    loading="lazy"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
