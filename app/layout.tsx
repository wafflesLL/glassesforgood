import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glasses For Good",
  description: "AI powered Custom Glasses Generation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
