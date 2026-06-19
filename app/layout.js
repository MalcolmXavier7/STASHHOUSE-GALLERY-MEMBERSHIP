import { Barlow, Bebas_Neue } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "StashHouse Gallery — Membership Commissions",
  description:
    "Hand-original commission artwork by Malcolm Xavior Seven. Acrylic, oil, and gold leaf on canvas. One piece. One owner.",
  openGraph: {
    title: "StashHouse Gallery — Membership Commissions",
    description:
      "Hand-original commissions by Malcolm Xavior Seven. One piece. One owner.",
    type: "website",
    locale: "en_US",
    siteName: "StashHouse Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "StashHouse Gallery — Membership Commissions",
    description:
      "Hand-original commissions by Malcolm Xavior Seven. One piece. One owner.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
