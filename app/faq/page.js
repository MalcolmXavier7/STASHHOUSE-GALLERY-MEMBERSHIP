"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    title: "The Offer",
    content: `StashHouse Gallery Memberships are hand-original commission artwork created by Malcolm Xavior Seven. You join by commissioning a piece in one of three sizes.

Each membership includes:
• Hand-original, one-of-a-kind artwork (acrylic, oil, gold leaf on canvas)
• Certificate of authenticity
• Signature by Malcolm Xavior Seven
• Membership to the StashHouse Gallery community

Pricing:
• Small Tilt (8×10): $100 total | $50 down, $50 on delivery
• Medium Tilt (18×24): $200 total | $100 down, $100 on delivery
• Large Tilt (24×36): $500 total | $250 down, $250 on delivery

First Round Limited: 50 members total`,
  },
  {
    title: "What You Can Commission",
    content: `You can request:
• Characters (original, fictional, from shows/games, etc.)
• Anime-style artwork (characters, scenes, etc.)
• Animals (realistic, stylized, mythical, etc.)
• Flowers & botanical subjects
• Abstract concepts (emotions, ideas, movements)
• Scenes & landscapes
• Cultural & historical themes
• Your vision — if it's not a portrait, we can explore it`,
  },
  {
    title: "No Portraits — Hard Rule",
    content: `We do not create realistic depictions of people's faces or likenesses. This is a hard rule.

This means:
• No photos of real people turned into paintings
• No realistic facial portraits of celebrities or public figures
• No photorealistic people

Why? We focus on the character, the emotion, the concept — not replicating faces. Characters, anime, stylized figures, and symbolic representations of people are all fair game.`,
  },
  {
    title: "The Process",
    content: `1. Choose & Pay Down Payment — Select your tier, pay the down payment via our secure link. You'll receive a confirmation email.

2. Intake Form — After payment, fill out the Commission Intake Form. Tell us your vision: subject, style, mood, references, inspiration. Be as detailed or as open as you want.

3. Concept Confirmation — We'll review your intake within 48 hours. If we need clarification, we'll reach out. Once approved, the 4–6 week timeline begins.

4. Creation — Malcolm Xavior Seven creates your hand-original artwork. 4–6 weeks from approval to finished piece. We'll send a progress update if the piece requires it.

5. Delivery — You pay the remaining balance. We ship your artwork with certificate of authenticity. You're now a StashHouse Gallery member.`,
  },
  {
    title: "Timeline",
    content: `Down Payment → Intake Submitted: Immediate
Intake Review: 48 hours
Concept Approval → Finished Artwork: 4–6 weeks
Delivery: Typically 1–2 weeks after payment of balance

Total process: ~5–8 weeks from initial payment to art in your hands`,
  },
  {
    title: "Payment & Delivery",
    content: `Payment Methods: Stripe (credit/debit cards accepted)

Shipping: Domestic (US) included in price. International shipping available — contact us for a quote.

Framing & Display: Your artwork arrives unframed, ready to hang or frame as you choose.`,
  },
  {
    title: "Modifications & Revisions",
    content: `During the intake phase: We can adjust the concept based on your feedback before creation begins.

During creation: Major direction changes require timeline adjustments. We'll discuss with you if needed.

After completion: The finished artwork is final. We create pieces to stand as complete works.`,
  },
  {
    title: "Ownership & Rights",
    content: `When you purchase a membership and commission artwork:
• You own the physical artwork — it's yours to display, keep, sell, or gift
• We retain the right to photograph and document the work for our portfolio and social media
• Commercial licensing: If you want exclusive rights or commercial use, contact us to discuss custom terms`,
  },
  {
    title: "What If Something Goes Wrong?",
    content: `If you're unhappy with the direction: Contact us during the intake/approval phase. We want to get it right before creation starts.

If there's a shipping issue: We'll work with you to resolve it.

If you need to cancel: Down payments are non-refundable once creation has begun. If you cancel before concept approval, we can discuss options.`,
  },
  {
    title: "Community & Membership Benefits",
    content: `By joining as a member, you're part of the StashHouse Gallery community:
• Exclusive access to member-only drops and releases
• Priority on future offerings
• Direct connection to Malcolm Xavior Seven's creative process
• Invitations to studio events and celebrations (as applicable)`,
  },
];

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <span className="text-xl font-bold" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}>
          {title}
        </span>
        <span className="text-2xl ml-4" style={{ color: "#FFFF00" }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-300 text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="px-6 py-4 max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
          &larr; Back to StashHouse
        </Link>
      </nav>

      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-bebas)", color: "#FFFF00", letterSpacing: "0.05em" }}
        >
          FAQ & Guidelines
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Everything you need to know about StashHouse Gallery Memberships.
        </p>

        <div>
          {sections.map((section, i) => (
            <AccordionItem
              key={i}
              title={section.title}
              content={section.content}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 p-8 border-2" style={{ borderColor: "#0088CC" }}>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-bebas)", color: "#0088CC" }}>
            Still Have Questions?
          </h3>
          <p className="text-gray-300 mb-4">
            Reach out and we&rsquo;ll get back to you within 48 hours.
          </p>
          <a
            href="mailto:commissions@stashhousegallery.com"
            className="inline-block px-6 py-3 font-bold"
            style={{ fontFamily: "var(--font-bebas)", backgroundColor: "#0088CC", color: "#FFF", letterSpacing: "0.05em" }}
          >
            commissions@stashhousegallery.com
          </a>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 font-bold text-black"
            style={{ fontFamily: "var(--font-bebas)", backgroundColor: "#FFFF00", letterSpacing: "0.05em", fontSize: "1.125rem" }}
          >
            View Membership Tiers
          </Link>
        </div>
      </div>

      <footer className="px-6 py-8 max-w-4xl mx-auto text-center border-t border-gray-800">
        <p className="text-xs text-gray-700">&copy; 2026 StashHouse Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
}
