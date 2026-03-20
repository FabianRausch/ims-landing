"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  MobileStickyDeck,
  type StickyDeckRenderState,
} from "@/components/mobile-sticky-deck";

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

  const mobileCards = useMemo(() => {
    return [
      {
        key: "what",
        title: "¿Qué es Meta Ads?",
        body: (
          <p className="text-white leading-relaxed">
            Es la plataforma de publicidad de Facebook e Instagram, que te
            permite mostrar anuncios en el feed, stories, reels y más, a las
            personas que realmente pueden estar interesadas en tus productos o
            servicios.
          </p>
        ),
        titleClassName: "text-white",
      },
      {
        key: "segment",
        title: "¿Cómo se puede segmentar mi campaña?",
        body: (
          <>
            <p className="text-white mb-4">Podés elegir tu público según:</p>
            <ul className="space-y-2">
              {segmentation.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </>
        ),
        titleClassName: "text-white",
      },
      {
        key: "requirements",
        title: "¿Qué necesito para poder publicar?",
        body: (
          <ul className="space-y-2">
            {requirements.map((item, index) => (
              <li key={index} className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        ),
        titleClassName: "text-white",
      },
      ...faqs.map((faq) => ({
        key: `faq-${faq.question}`,
        title: faq.question,
        body: <p className="text-white leading-relaxed">{faq.answer}</p>,
        titleClassName: "text-lg text-white",
      })),
    ];
  }, [faqs, requirements, segmentation]);

  const mobileDeckItems = useMemo(
    () =>
      mobileCards.map((card) => ({
        key: card.key,
        render: ({ isPast }: StickyDeckRenderState) => {
          if (isPast) {
            return (
              <Card className="border-2 shadow-md bg-card/95 backdrop-blur-sm rounded-lg !py-0 gap-0">
                <CardHeader className="space-y-0 py-2 px-3 !py-2">
                  <CardTitle
                    className={`${card.titleClassName ?? "text-white"} text-xs sm:text-sm font-semibold leading-tight line-clamp-2`}
                  >
                    {card.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          }
          return (
            <Card className="border-2 shadow-lg max-h-[78vh] overflow-y-auto bg-card !py-0 gap-0">
              <CardHeader className="px-6 pt-6 pb-2">
                <CardTitle className={card.titleClassName ?? "text-white"}>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">{card.body}</CardContent>
            </Card>
          );
        },
      })),
    [mobileCards],
  );

  return (
    <section
      id="meta-ads"
      className="py-16 md:py-24 section-bg-alternate scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white ">
            Meta Ads
          </h2>

          {/* Desktop: hover expand */}
          <div className="hidden md:block">
            <Card className="mb-6 group overflow-hidden gap-0">
              <CardHeader>
                <CardTitle className="text-white">¿Qué es Meta Ads?</CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-white leading-relaxed">
                  Es la plataforma de publicidad de Facebook e Instagram, que te
                  permite mostrar anuncios en el feed, stories, reels y más, a
                  las personas que realmente pueden estar interesadas en tus
                  productos o servicios.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6 group overflow-hidden gap-0">
              <CardHeader>
                <CardTitle className="text-white">
                  ¿Cómo se puede segmentar mi campaña?
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <p className="text-white mb-4">
                  Podés elegir tu público según:
                </p>
                <ul className="space-y-2">
                  {segmentation.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6 group overflow-hidden gap-0" tabIndex={0}>
              <CardHeader>
                <CardTitle className="text-white">
                  ¿Qué necesito para poder publicar?
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                <ul className="space-y-2">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-white">{item}</span>
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
                    <CardTitle className="text-lg text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-hidden max-h-0 opacity-0 translate-y-1 transition-[max-height,opacity,transform] duration-300 pt-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pt-4 group-focus-within:max-h-96 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pt-4">
                    <p className="text-white leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile: sticky scroll deck */}
          <div className="md:hidden">
            <MobileStickyDeck
              items={mobileDeckItems}
              peekPx={40}
              expandedMinHeightPx={380}
              vhPerCard={34}
              innerClassName="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
