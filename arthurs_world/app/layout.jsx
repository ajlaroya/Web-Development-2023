import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { getProfile } from "@/sanity/sanity.query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arthur's World",
  description: "Arthur Laroyas digital garden",
};

export default async function RootLayout({ children }) {
  const profile = await getProfile();
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl`}
      >
        <Navbar socialLinks={profile[0].socialLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
