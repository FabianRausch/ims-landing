import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Impulso Marketing Studio",
  description: "Creamos estrategias de marketing a medida para tu negocio",
  /** Favicon desde /public (evita el loader de `app/icon.png` que en dev a veces devuelve 500) */
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  generator:
    "Impulso Marketing Studio | Agencia de Marketing Digital | Marketing Digital | Marketing en Redes Sociales | Marketing en Google | Marketing en Meta | Marketing en Instagram | Marketing en Facebook | Marketing en YouTube | Marketing en WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
          <WhatsappButton />
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
