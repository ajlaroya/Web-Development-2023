import { Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import ShopProvider from "@/context/shopContext";

export const metadata = {
  title: "QKC Studios",
  description: "next gen apparel",
  icons: {
    icon: '/logo.svg',
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
        </ShopProvider>
      </body>
    </html>
  );
}
