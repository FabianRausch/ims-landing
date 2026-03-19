"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  const n = benefits.length;
  const PEEK = 50;
  const CARD_EXPANDED_H = 300;
  const mobileDeckRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mobileDeckRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * Math.max(n - 1, 1));
    setActiveIndex(Math.max(0, Math.min(idx, n - 1)));
  });

  return (
    <section className="py-10 section-bg-default">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white ">
            Alcance relevante
          </h2>
          <p className="text-lg text-white text-pretty">
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
                    <h3 className="text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                  </div>

                  <div className="overflow-hidden transition-[max-height,opacity,transform] duration-300 max-h-0 opacity-0 translate-y-1 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:max-h-40 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                    <p className="text-white leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards on scroll (deck) */}
        <div
          ref={mobileDeckRef}
          className="md:hidden relative"
          style={{ height: `${n * 50}vh` }}
        >
          <div className="sticky top-24 pb-8">
            <div
              className="relative w-full max-w-3xl mx-auto"
              style={{ minHeight: (n - 1) * PEEK + CARD_EXPANDED_H }}
            >
              {benefits.map((benefit, index) => {
                const isPast = index < activeIndex;
                const isFuture = index > activeIndex;
                const isActive = index === activeIndex;

                const y = isPast
                  ? index * PEEK
                  : isActive
                    ? activeIndex * PEEK
                    : activeIndex * PEEK;

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      y,
                      scale: isPast ? 0.97 : 1,
                      opacity: isFuture ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      zIndex: isPast ? 10 + index : isActive ? 50 : 5,
                      pointerEvents: isFuture ? "none" : "auto",
                    }}
                  >
                    <Card className="border-2 hover:border-primary transition-colors overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <benefit.icon className="h-10 w-10 text-primary" />
                          <h3 className="text-xl font-bold text-white text-center">
                            {benefit.title}
                          </h3>
                        </div>

                        <motion.div
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? 260 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="text-white leading-relaxed">
                            {benefit.description}
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
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
