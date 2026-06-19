# StashHouse Gallery — Membership Platform

Hand-original commission platform by **Malcolm Xavier 7**. Art, technology, and culture — built by hand, amplified by intention.

> *"You are enough. Your process is valid."*

## What This Is

StashHouse Gallery Memberships are hand-original commission artwork — acrylic, oil, and gold leaf on canvas. Each piece is painted by Malcolm Xavier 7, signed, authenticated, and made for one owner. This isn't a print shop. It's a community entry point for people who choose intention over performance.

**Live:** [stashhousegallery.shop](https://www.stashhousegallery.shop)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + inline styles |
| Fonts | Bebas Neue (headers) + Barlow (body) via Google Fonts |
| Payments | [Stripe Payment Links](https://stripe.com/payments/payment-links) |
| Email | [Resend](https://resend.com) — transactional email on intake submission |
| Hosting | [Vercel](https://vercel.com) |
| Domain | stashhousegallery.shop |

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing — hero, mission statement, membership tiers, process, past commissions carousel |
| `/intake` | Post-payment intake form — 3 sections (Who You Are / The Piece / The Story) |
| `/faq` | FAQ accordion with guidelines, process, and community rules |
| `/api/intake` | API endpoint — validates, assigns membership number, sends email notification |

## Features

- **Three membership tiers** — Small Tilt ($100), Medium Tilt ($200), Large Tilt ($500) with split down payment / balance on delivery
- **Stripe checkout** — Payment links redirect to `/intake` after successful payment with tier info in URL params
- **Membership numbering** — Sequential IDs starting at SHG-001, displayed on a branded membership card after submission
- **Email notifications** — Styled HTML email sent to `info@malcolmxavior7.com` with full buyer info and commission details on every intake
- **As Seen On ticker** — Auto-scrolling logo carousel (Complex, NTWRK, Whatnot, NBA, Barrel & Flow Fest, etc.)
- **Past Commissions carousel** — Smooth infinite scroll of commission artwork
- **Sunflower motif** — SVG sunflower used as a spinning decorative element throughout the site
- **XSS protection** — All user input escaped in email HTML rendering

## Brand System

| Element | Value |
|---|---|
| Background | Cream `#FCF9F2` |
| Primary | Forest Green `#163F37` |
| Accent | Orange `#E8531C` |
| Highlight | Gold `#F4C20D` |
| Headers | Bebas Neue |
| Body | Barlow (300–700) |
| Motif | Sunflower SVG with slow spin animation |

## Project Structure

```
app/
├── page.js                 # Landing page
├── layout.js               # Root layout (fonts, metadata)
├── globals.css             # Global styles + animations
├── intake/page.js          # Intake form + membership card
├── faq/page.js             # FAQ accordion
├── api/intake/route.js     # Form submission API
└── components/
    ├── Nav.js              # Sticky navigation
    ├── Footer.js           # Site footer
    ├── Sunflower.js        # SVG sunflower component
    ├── SeenOn.js           # Logo ticker carousel
    └── PastWork.js         # Commission artwork carousel
public/
├── stashhouse-hero.png     # Hero image
├── logos/                  # Brand logos for As Seen On
└── commsionns/             # Past commission photos
data/
└── member-count.json       # Membership counter
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending intake notification emails |

## Setup

```bash
npm install
npm run dev
```

Add a `.env.local` file with your Resend API key:

```
RESEND_API_KEY=re_your_key_here
```

## The Artist

Malcolm Xavier 7 has spent 15+ years in hip-hop visual culture, built NTWRK to 9K+ sales and 4M+ views, and now creates hand-original artwork combined with AI systems. He's not a "coder who paints" — he's a builder who picks the tool that serves the intention.

The mission: Show people they're enough. That their process is valid. That they can build something real if they're willing to be consistent and intentional.

**Love Yours Club** — self-love as a creative movement.

## Checkout Flow

```
1. User selects tier on landing page
2. → Stripe Payment Link (down payment)
3. → Stripe redirects to /intake?tier=small|medium|large
4. → User fills out intake form (who, piece, story)
5. → API assigns membership number (SHG-001, SHG-002...)
6. → Email sent to info@malcolmxavior7.com with all details
7. → Membership card displayed with number, name, tier, status
```

---

Built by Malcolm Xavier 7 · Made by hand. ✦
