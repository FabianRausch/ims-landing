import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function CommunityManagerSection() {
  const benefits = [
    "Mantiene una presencia constante en redes.",
    "Responde y genera cercanía con tu comunidad.",
    "Construye confianza y lealtad en tus clientes.",
    "Hace que tu marca se vea viva, actual y relevante.",
  ];

  return (
    <section
      id="community-manager"
      className="py-16 md:py-24 section-bg-default"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance text-white ">
            Community Manager: Tu marca, siempre presente
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-3">
              <p className="text-lg text-white leading-relaxed mb-4">
                Hoy en día no alcanza con tener redes sociales, hay que estar
                activo y generar conversación.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Un community manager es quien le da voz, personalidad y
                constancia a tu marca en el mundo digital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué lo necesitás?
              </h3>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                En{" "}
                <span className="font-bold text-primary">
                  Impulso Marketing Studio
                </span>{" "}
                nos ocupamos de tus redes para que vos te enfoques en lo que
                mejor sabés hacer: tu negocio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
