"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
export function GoogleAdsSection() {
  const segmentation = useMemo(
    () => [
      "Palabras clave (Keywords): Basado en lo que la gente escribe en el buscador.",
      "Temas e intereses: Según los sitios que visitan o sus hábitos de navegación.",
      "Datos demográficos: Edad, género, ubicación e ingresos familiares.",
      "Remarketing: Mostrar anuncios a quienes ya visitaron tu web o usaron tu app.",
      "Segmentos de intención: Personas que están investigando activamente para comprar un producto.",
    ],
    [],
  );

  const requirements = useMemo(
    () => [
      "Una Cuenta de Google (Gmail).",
      "Un sitio web o una página de aterrizaje (landing page) a donde dirigir el tráfico.",
      "Un método de pago válido configurado en la plataforma (tarjeta de crédito/débito o cuenta bancaria, según el país).",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "¿Google me cobra cada vez que alguien ve mi anuncio?",
        answer:
          "Depende del tipo de campaña. Lo más común es el Pago por Clic (CPC), donde solo pagás si alguien entra a tu web. También existe el pago por cada mil impresiones (CPM), ideal para branding, o el pago por visualizaciones (CPV) en YouTube.",
      },
      {
        question: "¿Cómo se determina el costo de los anuncios?",
        answer:
          "Funciona mediante una subasta en tiempo real. El costo no depende solo de cuánto dinero ofrezcas (puja), sino también del Nivel de Calidad: Google premia que tu anuncio sea relevante y que tu página web sea buena.",
      },
      {
        question: "¿Puedo limitar mi inversión mensual?",
        answer:
          "Sí ✅. En Google Ads definís un presupuesto diario promedio. Aunque algún día puntual Google puede gastar un poco más si detecta mucho tráfico, al final del mes nunca excederá el límite de (presupuesto diario × 30.4 días).",
      },
      {
        question: "¿Qué pasa si mi presupuesto es bajo?",
        answer:
          'Si el presupuesto es muy ajustado, tu anuncio dejará de aparecer cuando se agote el dinero del día. En mercados muy competitivos (donde el clic es caro), podrías recibir pocas visitas, pero si elegís palabras clave muy específicas ("de nicho"), podés tener un retorno excelente.',
      },
      {
        question: "¿Cómo se realizan los pagos en Google Ads?",
        answer:
          "Los pagos se gestionan desde la sección de Facturación. Dependiendo de tu país, podés pagar de forma automática (se debita de tu tarjeta tras acumular gastos) o manual (cargás saldo previamente mediante tarjeta, transferencia o proveedores locales).",
      },
    ],
    [],
  );

  // Ancla neutra: evitar "google", "ads", "advertisement" en el id (listas de filtros de bloqueadores).
  return (
    <section
      id="campanas-busqueda"
      className="py-16 md:py-24 bg-linear-to-b from-background/50 to-white scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="/g-a-image.png"
            alt="Google Ads"
            className="w-25 h-25 mx-auto"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">
            Google Ads
          </h2>

          <div>
            <Card className="mb-6 group overflow-hidden gap-0" tabIndex={0}>
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  ¿Qué es Google Ads?
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-card-foreground leading-relaxed">
                  Es la plataforma de publicidad de Google que permite mostrar
                  anuncios en los resultados de búsqueda, en sitios web
                  asociados (Red de Display), en YouTube, Gmail y Maps. Te
                  conecta con personas en el momento exacto en que buscan lo que
                  ofrecés.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6 group overflow-hidden gap-0" tabIndex={0}>
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  ¿Cómo se puede segmentar mi campaña?
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-card-foreground mb-4">
                  En Google, la segmentación es muy potente y se divide
                  principalmente en:
                </p>
                <ul className="space-y-2">
                  {segmentation.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary-on-light shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6 group overflow-hidden gap-0" tabIndex={0}>
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  ¿Qué necesito para poder publicar?
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <ul className="space-y-2">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary-on-light shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden gap-0"
                  tabIndex={0}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-card-foreground">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                    <p className="text-card-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
