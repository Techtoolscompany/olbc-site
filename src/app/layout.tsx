import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import SmoothScroll from "@/components/global/SmoothScroll";
import Preloader from "@/components/global/Preloader";
import CustomCursor from "@/components/global/CustomCursor";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oklahoma Legislative Black Caucus",
  description: "A legislative voice for the underrepresented.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-brown selection:text-white`}
      >
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main className="flex-grow pt-16 md:pt-20 lg:pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
        {/* @ts-expect-error Custom element */}
        <elevenlabs-convai agent-id="agent_1901kjandt5aeqtvm6zay3g084wd"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
      </body>
    </html>
  );
}
