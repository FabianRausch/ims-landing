import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function TikTokAdsSection() {
  const segmentation = [
    "Intereses y comportamientos (ej: personas que ven contenido de moda, belleza, tecnología, etc.).",
    "Datos demográficos (edad, género, ubicación).",
    "Públicos personalizados (ej: quienes visitaron tu web o app).",
    "Públicos similares (usuarios parecidos a tus mejores clientes).",
  ];

  const requirements = [
    "Una cuenta en TikTok Business Manager.",
    "Un método de pago válido (tarjeta de crédito/débito o PayPal).",
    "Creatividades en video (TikTok se basa en contenido audiovisual).",
  ];

  const faqs = [
    {
      question: "¿TikTok me cobra cada vez que alguien ve mi anuncio?",
      answer:
        "No necesariamente. Podés pagar por clic (CPC), por cada mil impresiones (CPM), por vistas de video o incluso por conversiones (compras, registros, etc.).",
    },
    {
      question: "¿Cómo se determina el costo de los anuncios?",
      answer:
        "TikTok Ads funciona con un sistema de subasta, similar a Meta y Google. El precio depende de tu segmentación, la demanda y la calidad de tu anuncio.",
    },
    {
      question: "¿Puedo limitar mi inversión mensual?",
      answer:
        "Sí ✅. Podés establecer un presupuesto diario o total de campaña, y TikTok nunca gastará más de lo que fijes.",
    },
    {
      question: "¿Qué pasa si mi presupuesto es bajo?",
      answer:
        "Tus anuncios llegarán a menos personas y se mostrarán con menor frecuencia. Sin embargo, en TikTok, un buen video creativo puede generar gran impacto incluso con poca inversión.",
    },
    {
      question: "¿Cómo se realizan los pagos en TikTok Ads?",
      answer:
        "Se hacen con tarjeta de crédito, débito o PayPal directamente desde la plataforma.",
    },
  ];

  return (
    <section
      id="tiktok-ads"
      className="py-16 md:py-24 section-bg-alternate"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white ">
            TikTok Ads
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-primary">
                ¿Qué es TikTok Ads?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white leading-relaxed">
                Es la plataforma de publicidad de TikTok, donde podés crear
                anuncios que aparecen en el feed "Para Ti", stories, búsqueda, y
                otros espacios dentro de la app. Ideal para captar la atención
                con videos cortos y creativos.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-primary">
                ¿Cómo se puede segmentar mi campaña?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Podés elegir a tu público según:
              </p>
              <ul className="space-y-2">
                {segmentation.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-primary">
                ¿Qué necesito para poder publicar?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requirements.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
