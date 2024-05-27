import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprica Labs | Web & UI/UX Design & Development",
  description: "Sprica turns ideas into websites, apps, and digital products for businesses, personal brands, and you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/sprica-labs-meta-img-thin.png" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@spricalabs"/>
        <meta name="twitter:title" content="Sprica Labs | Web & UI/UX Design & Development"/>
        <meta name="twitter:description" content="Sprica turns ideas into websites, apps, and digital products for businesses, personal brands, and you."/>
        <meta name="twitter:image" content="https://spricalabs.vercel.app/sprica-labs-meta-img-thin.png"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <main className="">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
