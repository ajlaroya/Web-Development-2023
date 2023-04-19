import Navbar from "@/components/Navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { client } from "../utils/shopify";

export const metadata = {
  title: "QKC Studios",
  description: "next gen apparel",
};

async function createCheckout() {
  const checkout = await client.checkout.create();
  return JSON.parse(JSON.stringify(checkout));
}

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const checkout = await createCheckout();

  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} overflow-x-hidden bg-black text-[#f2f2f2] subpixel-antialiased`}
      >
        <Navbar checkout={checkout} />
        {children}
      </body>
    </html>
  );
}
