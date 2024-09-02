import "./globals.css";
import Navbar from "@/components/Navbar";
import { gtPlanarRegular } from "@/lib/fonts/font";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Laxman K R",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gtPlanarRegular.className + " bg-charcoal flex flex-col w-full"}>
        <Navbar />
        <div className="mt-32">{children}</div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
