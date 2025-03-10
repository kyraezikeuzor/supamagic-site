import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import Toolbar from "@/components/ui/toolbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supamagic | Fast, Magic Landing Pages",
  description: `We build fast and seamless sites that&apos;ll grow your brand like supamagic.`,
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
        <meta name="twitter:title" content="Supamagic | Web & UI/UX Design & Development"/>
        <meta name="twitter:description" content="Sprica turns ideas into websites, apps, and digital products for businesses, personal brands, and you."/>
        <meta name="twitter:image" content="https://spricalabs.vercel.app/sprica-labs-meta-img-thin.png"/>
      </head>
      <body className={inter.className}>
        <main className="flex flex-col justify-center px-6 mx-auto 2xl:max-w-[1400px]">
          {children}
          <Toolbar/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
