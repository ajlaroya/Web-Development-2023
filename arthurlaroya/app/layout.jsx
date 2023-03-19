import "../styles/globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.className}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
