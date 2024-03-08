import type { Metadata, Viewport } from "next";
import { Inter, } from "next/font/google";
import Footer from "./components/Parts/Footer";
import Navbar from "./components/Parts/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perpus Telkom",
  description: "dibuat Bayu UwU",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
