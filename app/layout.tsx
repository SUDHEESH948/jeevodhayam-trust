import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { SmoothScroll } from "@/components/effects";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jeevodhayam.org";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#102c25",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
    template: "%s | Jeevodhayam Charitable Trust",
  },
  description:
    "Jeevodhayam Charitable Trust is the social commitment initiative of We Five Developer Pvt. Ltd., serving society through healthcare support, educational assistance, elderly welfare, sports encouragement, and community welfare in Mayyil, Kannur, Kerala.",
  keywords: [
    "Jeevodhayam Charitable Trust",
    "Jeevodhayam",
    "We Five Developer Pvt. Ltd.",
    "Charitable Trust Kerala",
    "Kannur NGO",
    "Mayyil Kannur Charity",
    "Healthcare Support Kerala",
    "Education Scholarships Kannur",
    "Elderly Welfare Kerala",
    "Sports Encouragement Kerala",
    "Community Welfare Mayyil",
  ],
  authors: [{ name: "Jeevodhayam Charitable Trust", url: "mailto:jeevodayam@gmail.com" }],
  creator: "Jeevodhayam Charitable Trust",
  publisher: "Jeevodhayam Charitable Trust",
  applicationName: "Jeevodhayam Charitable Trust",
  category: "Non-Profit Organization",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/images/jeevodhayam-logo.png", sizes: "728x728", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/jeevodhayam-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Jeevodhayam Charitable Trust",
    title: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
    description:
      "Together, we nurture hope, share compassion, and make meaningful differences in people's lives through healthcare, education, elderly welfare, and community support in Kerala.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevodhayam Charitable Trust — Serving society with compassion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevodhayam Charitable Trust | Humanity Begins With Kindness",
    description:
      "Serving society through healthcare, education, elderly welfare, sports encouragement, and community support in Kerala.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "Organization"],
  name: "Jeevodhayam Charitable Trust",
  alternateName: "Jeevodhayam",
  url: siteUrl,
  logo: `${siteUrl}/images/jeevodhayam-logo.png`,
  image: `${siteUrl}/images/og-image.png`,
  description:
    "Jeevodhayam Charitable Trust is the social commitment initiative of We Five Developer Pvt. Ltd., dedicated to healthcare assistance, educational support, elderly welfare, sports encouragement, and community care in Mayyil, Kannur, Kerala.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pazhayashupathri, Aaram Mile",
    addressLocality: "Mayyil",
    addressRegion: "Kerala",
    postalCode: "670602",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.9686",
    longitude: "75.4988",
  },
  telephone: "+91 75928 23555",
  email: "jeevodayam@gmail.com",
  areaServed: [
    {
      "@type": "City",
      name: "Mayyil",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kannur",
    },
    {
      "@type": "State",
      name: "Kerala",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 75928 23555",
    contactType: "customer service",
    email: "jeevodayam@gmail.com",
    areaServed: "IN",
    availableLanguage: ["English", "Malayalam"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: "We Five Developer Pvt. Ltd.",
  },
  knowsAbout: [
    "Healthcare Assistance",
    "Educational Scholarships",
    "Elderly Welfare",
    "Sports Development",
    "Community Welfare",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}