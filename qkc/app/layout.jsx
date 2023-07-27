import { Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

import Navbar from "@/components/Navbar";
import ShopProvider from "@/context/shopContext";

export const metadata = {
  title: "Minimal, modern, cozy apparel | QKC Studios®",
  description: "minimal, modern, and affordable clothing brand for introverts",
  favicon: "/logo.svg",
  referrer: "origin-when-cross-origin",
  keywords: [
    "minimal",
    "modern",
    "affordable",
    "clothing",
    "brand",
    "introverts",
    "fashion",
    "streetwear",
  ],
  colorScheme: "dark",
  creator: "Arthur Laroya",
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: `https://${process.env.VERCEL_URL}`,
  openGraph: {
    title: 'QKC Studios®',
    description: 'Minimal, modern, cozy apparel for the introverted',
    url: 'https://qkc-studios.vercel.app/',
    siteName: 'QKC Studios®',
    images: [
      {
        url: '/logo_black.svg'
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
};

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} overflow-x-hidden bg-black text-[#f2f2f2] subpixel-antialiased`}
      >
        <ShopProvider>
          <Navbar />
          {children}
          <Analytics />
        </ShopProvider>
      </body>
    </html>
  );
}
