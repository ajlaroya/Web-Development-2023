import "../styles/globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'
// import localFont from "@next/font/local";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
// const neauMontreal = localFont({
//   src: [
//     {
//       path: "../public/fonts/NeueMontreal-Bold.otf",
//       weight: "800",
//       style: "bold",
//     },
//     {
//       path: "../public/fonts/NeueMontreal-Light.otf",
//       weight: "300",
//       style: "light",
//     },
//     {
//       path: "../public/fonts/NeueMontreal-Regular.otf",
//       weight: "450",
//       style: "regular",
//     },
//   ],
//   display: "swap",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.className}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
