import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  tagline: string;
  ideal: string;
  features: string[];
  resultado: string;
  highlighted?: boolean;
  showStar?: boolean;
};

export function PricingSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "1234567890";
  const whatsappMessageAds = encodeURIComponent(
    "Hola! Me interesa conocer más sobre los planes de publicidad online.",
  );
  const whatsappMessageCommunity = encodeURIComponent(
    "Hola! Me interesa conocer los planes de community manager.",
  );

  const adsPlans: Plan[] = [
    {
      name: "Impulso Ads Base",
      tagline: "Para negocios que quieren empezar a vender con publicidad",
      ideal:
        "Ideal si recién estás comenzando o querés generar tus primeras consultas.",
      features: [
        "Gestión de campañas en Meta Ads (Facebook + Instagram)",
        "1 campaña activa",
        "Segmentación de público",
        "Optimización semanal",
        "Copy básico para anuncios",
        "Reporte mensual simple",
      ],
      resultado: "Primeras consultas, visibilidad y movimiento en redes.",
      highlighted: false,
    },
    {
      name: "Impulso Ads Pro",
      tagline: "Para negocios que quieren generar ventas de forma constante",
      ideal:
        "Ideal para marcas que ya venden o quieren escalar sus resultados.",
      features: [
        "Gestión en Meta Ads (y opción de Google Ads)",
        "2 a 3 campañas activas",
        "Testeo de creativos",
        "Segmentación estratégica",
        "Optimización constante",
        "Copy persuasivo",
        "Reporte con métricas clave (leads, CTR, resultados)",
      ],
      resultado:
        "Consultas más calificadas y flujo constante de potenciales clientes.",
      highlighted: true,
      showStar: true,
    },
    {
      name: "Impulso Ads Growth",
      tagline:
        "Para negocios que quieren escalar y construir un sistema de ventas",
      ideal:
        "Pensado para marcas que buscan crecimiento sostenido y profesionalización.",
      features: [
        "Meta Ads + Google Ads",
        "Múltiples campañas activas (full funnel)",
        "Estrategia mensual personalizada",
        "Remarketing avanzado",
        "Optimización diaria/semanal",
        "Análisis de datos + mejoras estratégicas",
        "Soporte prioritario",
      ],
      resultado: "Un sistema de adquisición y ventas que crece en el tiempo.",
      highlighted: false,
    },
  ];

  const communityPlans: Plan[] = [
    {
      name: "Plan Básico",
      tagline: "Para negocios que quieren empezar a tener presencia en redes",
      ideal:
        "Ideal si necesitás ordenar tu comunicación y empezar a moverte en redes.",
      features: [
        "Manual de estilo",
        "Objetivos y estrategias",
        "Planner mensual",
        "4 posts",
        "2 reels",
        "10 días de historias",
        "Análisis de estadísticas",
      ],
      resultado:
        "Mayor presencia, constancia y primeras interacciones con tu audiencia.",
      highlighted: false,
    },
    {
      name: "Plan Medio",
      tagline: "Para negocios que quieren crecer y generar comunidad",
      ideal:
        "Ideal para marcas que buscan mayor visibilidad y conexión con su público.",
      features: [
        "Manual de estilo",
        "Objetivos y estrategias",
        "Planner mensual",
        "6 posts",
        "4 reels",
        "14 días de historias",
        "Análisis de estadísticas",
      ],
      resultado:
        "Mayor alcance, interacción y crecimiento sostenido de la cuenta.",
      highlighted: true,
      showStar: true,
    },
    {
      name: "Plan Premium",
      tagline: "Para marcas que quieren posicionarse y destacar en redes",
      ideal:
        "Pensado para negocios que buscan contenido constante y de alto impacto.",
      features: [
        "Manual de estilo",
        "Objetivos y estrategias",
        "Planner mensual",
        "8 posts",
        "6 reels",
        "18 días de historias",
        "Análisis de estadísticas",
      ],
      resultado:
        "Posicionamiento de marca, crecimiento acelerado y mayor engagement.",
      highlighted: false,
    },
  ];

  const volumeFeature = /^\d+ (?:posts|reels|días de historias)$/;
  const renderPlanGrid = (
    plans: Plan[],
    waMessage: string,
    emphasizeVolumeFeatures: boolean,
  ) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative flex flex-col ${
            plan.highlighted ? "border-primary border-2 shadow-lg" : ""
          }`}
        >
          <div className="absolute -top-4 -right-4 h-14 w-14 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase leading-tight flex items-center justify-center text-center shadow-md ring-2 ring-card">
            15% off
          </div>
          {plan.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
              Recomendado
            </div>
          )}
          <CardHeader className="pb-2">
            <CardTitle className="text-xl md:text-2xl leading-tight">
              {plan.name}
              {plan.showStar ? (
                <span className="text-primary-on-light" aria-hidden>
                  {" "}
                  ⭐
                </span>
              ) : null}
            </CardTitle>
            <p className="text-base font-semibold text-primary-on-light mt-2">
              {plan.tagline}
            </p>
            <p className="text-sm text-card-foreground mt-2 leading-relaxed">
              {plan.ideal}
            </p>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 pt-0">
            <p className="text-sm font-bold text-card-foreground mb-3">
              Incluye:
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {plan.features.map((feature, idx) => {
                const isVolume =
                  emphasizeVolumeFeatures && volumeFeature.test(feature);
                return (
                  <li key={idx} className="flex gap-2 text-sm leading-snug">
                    <Check className="h-5 w-5 text-primary-on-light shrink-0 mt-0.5" />
                    <span
                      className={
                        isVolume ? "font-semibold text-card-foreground" : ""
                      }
                    >
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-primary/15 pt-4 mb-4">
              <p className="text-xs font-bold uppercase tracking-wide text-card-foreground mb-1.5">
                Resultado esperado
              </p>
              <p className="text-sm text-card-foreground leading-relaxed">
                {plan.resultado}
              </p>
            </div>
            <Button
              className="w-full"
              variant={plan.highlighted ? "default" : "outline"}
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
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
  );

  return (
    <section
      id="combos"
      className="py-16 md:py-24 bg-linear-to-b from-white/70 to-background/50"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-black">
            Planes
          </h2>
          <div id="planes-publicidad" className="scroll-mt-24">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-on-light mb-2">
              Publicidad online
            </p>

            <p className="text-lg text-neutral-800 text-center mb-12 text-pretty max-w-2xl mx-auto">
              Elegí el plan que mejor encaje con el momento de tu negocio.
            </p>
          </div>

          <div className="mb-10">
            {renderPlanGrid(adsPlans, whatsappMessageAds, false)}
          </div>

          <aside
            className="max-w-3xl mx-auto rounded-xl border-2 border-primary/35 bg-card px-5 py-5 md:px-6 md:py-6 shadow-sm mb-20 md:mb-24"
            aria-label="Información importante sobre inversión publicitaria"
          >
            <h3 className="text-base md:text-lg font-bold text-card-foreground mb-3 flex items-center gap-2">
              <span aria-hidden>⚠️</span>
              IMPORTANTE
            </h3>
            <div className="space-y-2.5 text-sm text-card-foreground leading-relaxed">
              <p>La inversión publicitaria no está incluida en los planes.</p>
              <p>
                El presupuesto de anuncios se paga directamente a Meta o Google.
              </p>
              <p>
                Recomendamos una inversión mínima para obtener resultados
                reales.
              </p>
            </div>
          </aside>

          <div id="planes-community-manager" className="scroll-mt-24">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-on-light mb-2">
              Community manager
            </p>

            <p className="text-lg text-neutral-800 text-center mb-12 text-pretty max-w-2xl mx-auto">
              Elegí el volumen de contenido que mejor se adapta a tu marca.
            </p>

            {renderPlanGrid(communityPlans, whatsappMessageCommunity, true)}
          </div>
        </div>
      </div>
    </section>
  );
}
