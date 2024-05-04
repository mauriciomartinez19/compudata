import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./ui/components/Navbar";
import { Footer } from "./ui/components/Footer";
import WhatsApp from "./ui/components/WhatsApp";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compudata",
  description: "Landing page for Compudata web site",
  metadataBase: new URL('https://www.compudata.com.uy'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar/>
        {children}
        <WhatsApp/>
        <Footer/>
        <Toaster position="top-right"/>
      </body>
    </html>
  );
}
