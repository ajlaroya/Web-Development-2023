import Navbar from "@/components/Navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "QKC Studios",
  description: "next gen apparel",
};

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} overflow-x-hidden bg-black text-[#f2f2f2] subpixel-antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
