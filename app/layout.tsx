import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kotevia Solar Solutions — Install Once. Save for Decades.",
  description: "Vidarbha's Most Trusted Solar Partner. Professional solar installation for homes and businesses across Wardha, Nagpur, Yavatmal, and Chandrapur.",
  keywords: "solar installation Vidarbha, solar panels Nagpur, solar Wardha, solar Yavatmal, solar Chandrapur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}

