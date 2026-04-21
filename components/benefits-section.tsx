"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ExpandableCard } from "@/components/expandable-card";
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

  return (
    <section className="py-10 bg-white/70">
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
          <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            <span className="md:hidden">
              Tocá una tarjeta para ver el detalle.
            </span>
            <span className="hidden md:inline">
              Pasá el cursor sobre cada tarjeta para ver el detalle.
            </span>
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
            {benefits.map((benefit, index) => (
              <ExpandableCard
                key={index}
                className="self-start"
                header={
                  <div className="flex w-full flex-col items-center gap-3">
                    <benefit.icon
                      className="h-10 w-10 shrink-0 text-primary-on-light"
                      aria-hidden
                    />
                    <CardTitle className="text-balance text-xl text-card-foreground">
                      {benefit.title}
                    </CardTitle>
                  </div>
                }
              >
                <p className="text-left leading-relaxed text-card-foreground">
                  {benefit.description}
                </p>
              </ExpandableCard>
            ))}
          </div>
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
