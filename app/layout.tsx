import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kulindağ Dağ Evi | Şehrin Yanı Başında, Doğanın Kalbinde",
  description: "İstanbul'un yanı başında, doğa ile iç içe, huzurlu bir kaçış noktası. Bungalov konaklama ve eşsiz lezzetler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={clsx(playfair.variable, inter.variable, "antialiased relative")}>
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
