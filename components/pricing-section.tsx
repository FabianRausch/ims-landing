import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa conocer más sobre sus paquetes de servicios."
  );

  const packages = [
    {
      name: "Impulso Presencia",
      subtitle: "Básico",
      description:
        "Para empresas que recién empiezan y necesitan estar en redes.",
      features: [
        "Community Manager (publicaciones, stories, interacción básica)",
        "Edición de artes + copywriting",
        "Reporte mensual simple (alcance, interacciones, crecimiento)",
      ],
      ideal:
        'Ideal para clientes que quieren "estar presentes" sin invertir aún en publicidad.',
    },
    {
      name: "Impulso Ads",
      subtitle: "Intermedio",
      description:
        "Para negocios que ya tienen redes pero quieren atraer clientes.",
      features: [
        "Todo lo del Pack Presencia",
        "Publicidad en Meta Ads o TikTok Ads (1 plataforma a elección)",
        "Filmmaker (1 producción de video corto al mes para anuncios)",
        "Reporte mensual con métricas de campaña (CTR, leads, conversiones)",
      ],
      ideal:
        "Ideal para inmobiliarias, gimnasios o negocios que buscan leads directos.",
      highlighted: true,
    },
    {
      name: "Impulso Growth",
      subtitle: "Avanzado",
      description: "Para marcas que quieren escalar su estrategia digital.",
      features: [
        "Community Manager (gestión avanzada + planificación estratégica)",
        "Filmmaker (2–3 producciones de video al mes)",
        "Publicidad en Meta Ads y TikTok Ads",
        "Análisis de métricas + reportes detallados con recomendaciones",
        "Optimización continua de campañas",
      ],
      ideal:
        "Ideal para empresas que ya invierten fuerte en marketing y esperan resultados medibles.",
    },
    {
      name: "Impulso Premium",
      subtitle: "Personalizado",
      description:
        "Para clientes grandes que necesitan una estrategia a medida.",
      features: [
        "Incluye todo lo anterior, con mayor frecuencia de contenidos y anuncios",
        "Consultoría estratégica mensual",
        "Integración con Google Analytics / Tag Manager / Looker Studio",
        "Sesiones 1 a 1 de revisión de estrategia",
      ],
      ideal:
        'Para empresas que quieren que vos seas su "equipo de marketing externo".',
    },
  ];

  const comparisonFeatures = [
    {
      name: "Community Manager",
      presencia: true,
      ads: true,
      growth: true,
      premium: true,
    },
    {
      name: "Edición de artes",
      presencia: true,
      ads: true,
      growth: true,
      premium: true,
    },
    {
      name: "Reportes mensuales",
      presencia: true,
      ads: true,
      growth: true,
      premium: true,
    },
    {
      name: "Meta Ads",
      presencia: false,
      ads: true,
      growth: true,
      premium: true,
    },
    {
      name: "TikTok Ads",
      presencia: false,
      ads: false,
      growth: true,
      premium: true,
    },
    {
      name: "Filmmaker",
      presencia: false,
      ads: "1/mes",
      growth: "2-3/mes",
      premium: "Ilimitado",
    },
    {
      name: "Consultoría estratégica",
      presencia: false,
      ads: false,
      growth: false,
      premium: true,
    },
    {
      name: "Integración Analytics",
      presencia: false,
      ads: false,
      growth: false,
      premium: true,
    },
  ];

  return (
    <section
      id="combos"
      className="py-16 md:py-24 section-bg-alternate"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white ">
            Nuestros Paquetes
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Elegí el plan que mejor se adapte a las necesidades de tu negocio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.highlighted ? "border-primary border-2 shadow-lg" : ""
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {pkg.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic text-muted-foreground mb-4">
                    {pkg.ideal}
                  </p>
                  <Button
                    className="w-full"
                    variant={pkg.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <Card className="overflow-x-auto p-0 gap-0">
            <h3 className="text-2xl  my-4 text-center text-white">
              Comparativa de Paquetes
            </h3>
            <table className="w-full overflow-hidden">
              <thead className="bg-primary text-white border">
                <tr>
                  <th className="px-4 py-3 text-left">Características</th>
                  <th className="px-4 py-3 text-center">Presencia</th>
                  <th className="px-4 py-3 text-center">Ads</th>
                  <th className="px-4 py-3 text-center">Growth</th>
                  <th className="px-4 py-3 text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="border overflow-hidden">
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-card" : "bg-foreground"
                    } overflow-hidden`}
                  >
                    <td className="px-4 py-3 font-medium">{feature.name}</td>
                    <td className="px-4 py-3 text-center">
                      {typeof feature.presencia === "boolean" ? (
                        feature.presencia ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.presencia}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {typeof feature.ads === "boolean" ? (
                        feature.ads ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.ads}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {typeof feature.growth === "boolean" ? (
                        feature.growth ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.growth}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </section>
  );
}
