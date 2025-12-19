import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impulso Marketing Studio",
  description: "Creamos estrategias de marketing a medida para tu negocio",
  generator:
    "Impulso Marketing Studio | Agencia de Marketing Digital | Marketing Digital | Marketing en Redes Sociales | Marketing en Google | Marketing en TikTok | Marketing en Meta | Marketing en Instagram | Marketing en Facebook | Marketing en YouTube | Marketing en WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
