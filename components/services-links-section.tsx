import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const serviceLinks = [
  {
    title: "Meta Ads",
    href: "/meta-ads",
    logoSrc: "/meta.png",
    logoAlt: "Logo de Meta Ads",
    description: "La publicidad correcta convierte miradas en ventas.",
  },
  {
    title: "Google Ads",
    href: "/google-ads",
    logoSrc: "/g-a-image.png",
    logoAlt: "Logo de Google Ads",
    description:
      "Google Ads te pone frente a quienes ya están buscando comprarte.",
  },
  {
    title: "Community Manager",
    href: "/community-manager",
    logoSrc: "/logo.png",
    logoAlt: "Logo de Impulso Marketing Studio",
    description:
      "Tu marca, siempre presente. Generá conversación y fortalece tu comunidad.",
  },
] as const;

export function ServicesLinksSection() {
  return (
    <section className="py-10 md:py-14 bg-white/70">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-2">
            Conocé cada servicio en detalle
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Accedé a cada página para ver información completa.
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {serviceLinks.map((service) => (
              <Card
                key={service.href}
                className="hover:shadow-xl border-primary/15 p-0 hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <Link
                    href={service.href}
                    className="flex flex-col items-center gap-3 p-5 text-center"
                    aria-label={`Ir a la página de ${service.title}`}
                  >
                    <img
                      src={service.logoSrc}
                      alt={service.logoAlt}
                      className="h-20 w-20 object-contain shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-card-foreground text-2xl">
                        {service.title}
                      </p>
                      <p className="text-md text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <p className="text-sm text-primary">
                      Ver detalles del servicio
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
