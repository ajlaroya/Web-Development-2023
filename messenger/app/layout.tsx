import "./globals.css";
import Header from "./Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
      </body>
    </html>
  );
}
