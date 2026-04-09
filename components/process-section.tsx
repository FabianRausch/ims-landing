import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProcessSection() {
  const steps = [
    {
      title: "Etapa 1: Análisis inicial",
      description:
        "Revisamos tu negocio, términos de búsqueda, investigación de mercado y competencia.",
    },
    {
      title: "Etapa 2: Plan estratégico",
      description:
        "Definimos el público ideal y la mejor estructura de campaña.",
    },
    {
      title: "Etapa 3: Lanzamiento de campañas",
      description: "Creamos y publicamos anuncios optimizados.",
    },
    {
      title: "Etapa 4: Optimización continua",
      description: "Monitoreamos y optimizamos continuamente.",
    },
    {
      title: "Etapa 5: Reportes claros",
      description:
        "Métricas en tiempo real, fáciles de entender, sin tecnicismos.",
    },
  ];

  return (
    <section
      id="proceso"
      className="py-16 md:py-24 bg-linear-to-b from-background/50 to-white"
    >
      <div className="container mx-auto px-4 py-2 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black ">
            Nuestro proceso
          </h2>
          <p className="text-lg text-center mb-12 text-black">
            Así trabajamos para impulsar tu negocio
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {steps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border-2 px-6 text-card-foreground"
              >
                <AccordionTrigger className="text-left hover:no-underline items-center">
                  <span className="font-bold text-lg">{step.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-card-foreground leading-relaxed">
                    {step.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
