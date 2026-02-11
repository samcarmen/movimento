import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://movimento.fitness'), // Update with your actual domain
  title: {
    default: "Movimento | Where Quality Meets Movement",
    template: "%s | Movimento"
  },
  description: "Movimento - A studio dedicated to conscious movement in Kuwait. Using the Canali Postural Method and Italian equipment, we help you restore balance, stability, and freedom in your body. Move better. Live better.",
  keywords: ["Canali Postural Method", "posture training Kuwait", "movement education", "Italian fitness equipment", "personalized training", "conscious movement", "spinal stability", "muscular balance", "postural correction", "movement coaching Kuwait", "back pain relief", "mobility training"],
  authors: [{ name: "Movimento Fitness Studio" }],
  creator: "Movimento",
  publisher: "Movimento",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://movimento.fitness",
    siteName: "Movimento",
    title: "Movimento | Where Quality Meets Movement",
    description: "Quality as a standard. Italian excellence in every step. Using the Canali Postural Method to help you move better and live better.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Movimento Fitness Studio - Where Quality Meets Movement",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movimento | Where Quality Meets Movement",
    description: "Quality as a standard. Italian excellence in every step.",
    images: ["/images/og-image.jpg"],
    creator: "@movimento", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these once you set up Google Search Console and other tools
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${dmSerif.variable}`}>
      <head>
        <link rel="canonical" href="https://movimento.fitness" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
