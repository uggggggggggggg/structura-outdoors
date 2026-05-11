import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://structuraoutdoors.ca"),
  title: {
    default: "Structura Outdoors | Premium Landscaping & Design — Calgary, AB",
    template: "%s | Structura Outdoors",
  },
  description:
    "Structura Outdoors designs and builds luxury decks, modern gardens, and rock-solid foundations for Calgary homeowners and commercial properties. Request a free design consultation.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Structura Outdoors",
    title: "Structura Outdoors | Premium Landscaping & Design — Calgary, AB",
    description:
      "Luxury decks, modern garden design, and foundation repair engineered for Calgary extremes. Request your free design consultation.",
    images: [{ url: "/images/og-image-structura-outdoors.jpg", width: 1200, height: 630, alt: "Structura Outdoors Calgary — premium landscaping, decking, garden design and foundation repair" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-brand-light text-brand-dark antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
