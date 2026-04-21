"use client";

import { useMemo } from "react";
import { CardTitle } from "@/components/ui/card";
import { ExpandableCard } from "@/components/expandable-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
            <span className="md:hidden">
              Tocá una tarjeta para ver el detalle; tocá de nuevo para cerrarla.
            </span>
            <span className="hidden md:inline">
              Pasá el cursor sobre cada tarjeta para ver el detalle.
            </span>
          </p>

          <div>
            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Qué es Meta Ads?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                Es la plataforma de publicidad de Facebook e Instagram, que te
                permite mostrar anuncios en el feed, stories, reels y más, a las
                personas que realmente pueden estar interesadas en tus productos
                o servicios.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Cómo se puede segmentar mi campaña?
                </CardTitle>
              }
            >
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
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Qué necesito para poder publicar?
                </CardTitle>
              }
            >
              <ul className="space-y-2">
                {requirements.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-on-light shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ExpandableCard>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ExpandableCard
                  key={index}
                  header={
                    <CardTitle className="text-lg text-card-foreground">
                      {faq.question}
                    </CardTitle>
                  }
                >
                  <p className="text-card-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </ExpandableCard>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild>
                <Link href="/#planes-publicidad">Ver planes de publicidad</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
