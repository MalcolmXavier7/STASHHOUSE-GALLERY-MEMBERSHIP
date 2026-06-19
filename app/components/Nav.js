"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const navColor = (p) => path === p ? "#E8531C" : "#163F37";

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between gap-6"
      style={{ padding: "0 clamp(18px,5vw,56px)", height: 76, background: "#FCF9F2", borderBottom: "2px solid #163F37" }}
    >
      <Link href="/" className="flex items-center gap-3">
        <span
          className="inline-flex flex-col"
          style={{ lineHeight: 0.8, background: "#E8531C", padding: "8px 12px 6px", borderRadius: 3 }}
        >
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: 21, letterSpacing: "0.02em", color: "#F4C20D" }}>STASH HOUSE</span>
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.34em", color: "#F4C20D" }}>GALLERY</span>
        </span>
      </Link>
      <div className="flex items-center" style={{ gap: "clamp(10px,2.4vw,30px)" }}>
        <Link
          href="/"
          className="hidden md:block"
          style={{ fontFamily: "var(--font-bebas)", fontSize: 18, letterSpacing: "0.1em", color: navColor("/"), padding: "4px 0", whiteSpace: "nowrap" }}
        >
          MEMBERSHIP
        </Link>
        <Link
          href="/faq"
          className="hidden md:block"
          style={{ fontFamily: "var(--font-bebas)", fontSize: 18, letterSpacing: "0.1em", color: navColor("/faq"), padding: "4px 0" }}
        >
          FAQ
        </Link>
        <Link
          href="/intake"
          className="transition-colors duration-150 hover:bg-[#163F37] hover:text-[#F4C20D]"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(14px,3.6vw,18px)", letterSpacing: "0.06em", padding: "11px 22px 9px", borderRadius: 3, background: "#E8531C", color: "#fff", whiteSpace: "nowrap" }}
        >
          BECOME A MEMBER
        </Link>
      </div>
    </nav>
  );
}
