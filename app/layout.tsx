import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es">
      <head>
        {gaMeasurementId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-[200%] rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-lg outline-none ring-2 ring-primary transition-transform duration-200 focus:translate-y-0 focus-visible:translate-y-0"
        >
          Saltar al contenido principal
        </a>
        <header>
          <Navbar />
        </header>
        <main id="main-content" className="min-h-screen">
          {children}
          <WhatsappButton />
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
