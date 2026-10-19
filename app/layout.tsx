import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { SmoothScroll } from "@/components/effects";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });

export const metadata: Metadata = {
  title: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
  description: "Together, we nurture hope, share compassion, and make meaningful differences in people's lives. Discover the story and values of Jeevodhayam Charitable Trust.",
  keywords: ["Jeevodhayam Charitable Trust", "community welfare", "humanity", "compassion", "Kerala charity"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Jeevodhayam Charitable Trust",
    title: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
    description: "Together, we nurture hope, share compassion, and make meaningful differences in people's lives.",
  },
  twitter: {
    card: "summary",
    title: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
    description: "Together, we nurture hope, share compassion, and make meaningful differences in people's lives.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
