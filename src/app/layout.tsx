import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jost = Jost({ 
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
