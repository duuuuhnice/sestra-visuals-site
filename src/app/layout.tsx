import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"], // Note: Playfair Display weights start at 400 in next/font/google usually, but I will check if it supports lower. Actually Playfair supports variable.
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sestra Visuals | Conscious Branding & Visual Identity",
  description: "A clean, elegant, editorial portfolio for Sestra Visuals, a premium conscious branding studio specializing in lifestyle, wellness, and hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
