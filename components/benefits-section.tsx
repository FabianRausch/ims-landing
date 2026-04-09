"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MobileStickyDeck,
  type StickyDeckRenderState,
} from "@/components/mobile-sticky-deck";
import {
  Target,
  DollarSign,
  Zap,
  Clock,
  BarChart3,
  FileText,
} from "lucide-react";
import Link from "next/link";

export function BenefitsSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP;
  const whatsappMessage = encodeURIComponent(
    "Hola! Quiero recibir asesoría sobre sus servicios.",
  );

  const benefits = useMemo(
    () => [
      {
        icon: Target,
        title: "Posicionamiento inmediato",
        description:
          "Mostrá tu marca en Facebook e Instagram desde el primer día y llegá directo al público que te interesa.",
      },
      {
        icon: DollarSign,
        title: "Control del presupuesto",
        description:
          "Invertís lo que quieras. Vos decidís cuánto gastar, sin sorpresas ni gastos innecesarios.",
      },
      {
        icon: Zap,
        title: "Optimización constante",
        description:
          "Revisamos y mejoramos tus campañas de forma periódica para que cada peso invertido rinda más.",
      },
      {
        icon: Clock,
        title: "Ahorro de tiempo",
        description:
          "Nos ocupamos de toda la gestión y seguimiento de tus anuncios, mientras vos te enfocás en tu negocio.",
      },
      {
        icon: BarChart3,
        title: "Reportes claros",
        description:
          "Tenés acceso a estadísticas en tiempo real para ver qué funciona y cómo avanzan tus campañas.",
      },
      {
        icon: FileText,
        title: "Facturación transparente",
        description:
          "Meta factura directamente a tu nombre, sin intermediarios.",
      },
    ],
    [],
  );

  const mobileDeckItems = useMemo(
    () =>
      benefits.map((benefit, index) => ({
        key: `benefit-${index}`,
        render: ({ isPast }: StickyDeckRenderState) => {
          if (isPast) {
            return (
              <Card className="border-2 shadow-md bg-card/95 backdrop-blur-sm rounded-lg py-0! gap-0">
                <CardContent className="px-3 py-2">
                  <div className="flex items-center gap-2 min-h-0">
                    <benefit.icon className="h-7 w-7 text-primary shrink-0" />
                    <h3 className="text-xs font-bold text-card-foreground text-left line-clamp-2 leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            );
          }
          return (
            <Card className="border-2 shadow-lg max-h-[78vh] overflow-y-auto bg-card py-0! gap-0">
              <CardContent className="px-6 py-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <benefit.icon className="h-10 w-10 text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-card-foreground text-center">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-card-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          );
        },
      })),
    [benefits],
  );

  return (
    <section className="py-10 section-bg-default">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-black ">
            Alcance relevante
          </h2>
          <p className="text-lg text-black text-pretty">
            Tus anuncios llegan a personas que buscan activamente lo que ofrecés
            con la segmentación correcta para que el algoritmo llegue a quien te
            busca.
          </p>
        </div>

        {/* Desktop: cards expand on hover */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors group overflow-hidden self-start"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <benefit.icon className="h-10 w-10 text-primary" />
                    <h3 className="text-xl font-bold text-card-foreground">
                      {benefit.title}
                    </h3>
                  </div>

                  <div className="overflow-hidden transition-[max-height,opacity,transform] duration-300 max-h-0 opacity-0 translate-y-1 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:max-h-40 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                    <p className="text-card-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
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
            expandedMinHeightPx={300}
            vhPerCard={40}
          />
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-white" asChild>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezá hoy
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
