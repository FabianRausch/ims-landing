import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría recibir asesoría gratuita sobre sus servicios de marketing.",
  );

  return (
    <section id="start" className="pt-24 pb-16 section-bg-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Visibiliza tu marca/empresa en Redes Sociales y Google
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed">
            Gestionamos campañas publicitarias para que tu marca esté en el
            momento y lugar exacto en donde tus clientes te están buscando.
            Posiciónate en tu nicho.
          </p>
          <Button size="lg" className="text-lg py-6 h-auto text-white" asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Asesoráte gratis ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
