import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "StashHouse Gallery — Membership Commissions",
  description:
    "Hand-original commission artwork by Malcolm Xavior Seven. Limited first round: 50 members. Choose your tier, share your vision, own the art.",
  openGraph: {
    title: "StashHouse Gallery — Membership Commissions",
    description:
      "Hand-original commission artwork by Malcolm Xavior Seven. Limited to 50 members.",
    type: "website",
    locale: "en_US",
    siteName: "StashHouse Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "StashHouse Gallery — Membership Commissions",
    description:
      "Hand-original commission artwork by Malcolm Xavior Seven. Limited to 50 members.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
