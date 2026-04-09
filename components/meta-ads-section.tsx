"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExpandableChevron,
  ExpandableHint,
  expandableCardClassName,
  expandableCardHeaderClassName,
} from "@/components/expandable-card-cues";
import { CheckCircle2 } from "lucide-react";
export function MetaAdsSection() {
  const segmentation = useMemo(
    () => [
      "Intereses y comportamientos (ej: personas interesadas en fitness, moda, tecnología, etc.).",
      "Datos demográficos (edad, género, ubicación).",
      "Públicos personalizados (ej: tus seguidores, lista de clientes, quienes visitaron tu web).",
      "Públicos similares (personas con características parecidas a tus clientes actuales).",
    ],
    [],
  );

  const requirements = useMemo(
    () => [
      "Una página de Facebook o cuenta de Instagram de tu negocio.",
      "Un Administrador Comercial de Meta.",
      "Un método de pago válido (tarjeta de crédito/débito o PayPal).",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "¿Meta me cobra cada vez que alguien ve mi anuncio?",
        answer:
          "No necesariamente. Podés elegir pagar por clic (CPC), por cada mil impresiones (CPM) o por conversiones específicas (ej: completar un formulario, comprar un producto).",
      },
      {
        question: "¿Cómo se determina el costo de los anuncios?",
        answer:
          "Meta Ads funciona con un sistema de subasta, donde competís con otros anunciantes por la atención del mismo público. El precio varía según la demanda, tu segmentación y la calidad del anuncio.",
      },
      {
        question: "¿Puedo limitar mi inversión mensual?",
        answer:
          "Sí ✅. Podés establecer un presupuesto diario o total para toda la campaña, y Meta nunca se excederá de lo que fijes.",
      },
      {
        question: "¿Qué pasa si mi presupuesto es bajo?",
        answer:
          "Tus anuncios se mostrarán menos veces y a menos personas. Aun así, con una buena segmentación y creatividad, se pueden lograr resultados interesantes incluso con poca inversión.",
      },
      {
        question: "¿Cómo se realizan los pagos en Meta Ads?",
        answer:
          "Los pagos se hacen con tarjeta de crédito, débito o PayPal directamente desde la plataforma.",
      },
    ],
    [],
  );

  return (
    <section
      id="meta-ads"
      className="py-16 md:py-24 bg-linear-to-b from-white to-background/50 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img src="/meta.png" alt="Meta" className="w-25 h-25 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">
            Meta Ads
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6 max-w-lg mx-auto">
            Cada tarjeta se puede expandir: tocala o pasá el cursor para leer el
            detalle.
          </p>

          <div>
            <Card
              className={`mb-6 ${expandableCardClassName}`}
              tabIndex={0}
            >
              <CardHeader className={expandableCardHeaderClassName}>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-card-foreground">
                    ¿Qué es Meta Ads?
                  </CardTitle>
                  <ExpandableHint />
                </div>
                <ExpandableChevron className="mt-0.5" />
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-card-foreground leading-relaxed">
                  Es la plataforma de publicidad de Facebook e Instagram, que te
                  permite mostrar anuncios en el feed, stories, reels y más, a
                  las personas que realmente pueden estar interesadas en tus
                  productos o servicios.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`mb-6 ${expandableCardClassName}`}
              tabIndex={0}
            >
              <CardHeader className={expandableCardHeaderClassName}>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-card-foreground">
                    ¿Cómo se puede segmentar mi campaña?
                  </CardTitle>
                  <ExpandableHint />
                </div>
                <ExpandableChevron className="mt-0.5" />
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-card-foreground mb-4">
                  Podés elegir tu público según:
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

            <Card
              className={`mb-6 ${expandableCardClassName}`}
              tabIndex={0}
            >
              <CardHeader className={expandableCardHeaderClassName}>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-card-foreground">
                    ¿Qué necesito para poder publicar?
                  </CardTitle>
                  <ExpandableHint />
                </div>
                <ExpandableChevron className="mt-0.5" />
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
                  className={expandableCardClassName}
                  tabIndex={0}
                >
                  <CardHeader className={expandableCardHeaderClassName}>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg text-card-foreground">
                        {faq.question}
                      </CardTitle>
                      <ExpandableHint />
                    </div>
                    <ExpandableChevron className="mt-0.5" />
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
