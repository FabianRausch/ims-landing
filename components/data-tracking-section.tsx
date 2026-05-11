"use client";

import { useMemo } from "react";
import { CardTitle } from "@/components/ui/card";
import { ExpandableCard } from "@/components/expandable-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function DataTrackingSection() {
  const ecommerceMetrics = useMemo(
    () => [
      "Ventas",
      "Productos más vistos",
      "Carritos abandonados",
      "Formularios enviados",
      "Clics en botones",
      "Tráfico desde Meta Ads y Google Ads",
      "Comportamiento de usuarios dentro del sitio",
    ],
    [],
  );

  const measurementBenefits = useMemo(
    () => [
      "Tomar decisiones con datos reales",
      "Detectar oportunidades de mejora",
      "Optimizar campañas",
      "Entender el comportamiento del cliente",
      "Aumentar conversiones y ventas",
    ],
    [],
  );

  return (
    <section
      id="medicion-analitica"
      className="py-16 md:py-24 bg-linear-to-b from-background/90 to-white scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="/metricas.png"
            alt="Google Analytics 4 y medición web"
            className="h-24 w-24 mx-auto object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">
            Google Analytics 4 & Data Tracking
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6 max-w-lg mx-auto">
            <span className="md:hidden">
              Tocá una tarjeta para ver el detalle.
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
                  ¿Qué es Google Analytics 4?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                Google Analytics 4 permite medir el comportamiento de los
                usuarios dentro de tu sitio web o ecommerce. Podés conocer
                visitas, conversiones, ventas, tiempo de permanencia y mucho
                más en tiempo real.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Qué puedo medir en mi ecommerce?
                </CardTitle>
              }
            >
              <p className="text-card-foreground mb-4">Podés medir:</p>
              <ul className="space-y-2">
                {ecommerceMetrics.map((item, index) => (
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
                  ¿Qué es Google Tag Manager?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                Google Tag Manager permite instalar y gestionar eventos de
                seguimiento sin modificar constantemente el código del sitio
                web. Gracias a esto se pueden medir acciones específicas como
                compras, clics o inicios de checkout.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Qué es Looker Studio?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                Looker Studio transforma todos los datos en dashboards visuales
                y fáciles de entender, para que puedas ver métricas importantes
                de tu negocio en un solo lugar.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Puedo ver mis métricas en tiempo real?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                Sí. Es posible visualizar usuarios activos, tráfico,
                conversiones y rendimiento de campañas prácticamente en tiempo
                real desde dashboards personalizados.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Cómo ayuda esto a mis campañas?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                La medición permite entender qué anuncios generan resultados
                reales y cuáles necesitan optimización. Esto ayuda a invertir
                mejor el presupuesto y mejorar el rendimiento de las campañas.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Necesito tener un ecommerce para usarlo?
                </CardTitle>
              }
            >
              <p className="text-card-foreground leading-relaxed">
                No necesariamente. También se puede implementar en páginas web
                corporativas, landing pages, formularios de contacto y sitios de
                servicios.
              </p>
            </ExpandableCard>

            <ExpandableCard
              className="mb-6"
              header={
                <CardTitle className="text-card-foreground">
                  ¿Qué beneficios tiene medir correctamente?
                </CardTitle>
              }
            >
              <p className="text-card-foreground mb-4">
                Medir correctamente permite:
              </p>
              <ul className="space-y-2">
                {measurementBenefits.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-on-light shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ExpandableCard>

            <div className="mt-10 flex justify-center">
              <Button asChild>
                <Link href="/#contacto">Consultar por medición y analítica</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
