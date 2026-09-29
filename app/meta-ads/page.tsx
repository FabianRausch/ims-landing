import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Meta Ads | Impulso Marketing Studio",
  description: "Campañas de publicidad en Facebook e Instagram para que tu marca aparezca frente a las personas correctas, en el momento justo.",
};

export default function MetaAdsPage() {
  return (
    <ServicePage
      href="/meta-ads"
      lead={["Es la plataforma de publicidad de Facebook e Instagram, que te permite mostrar anuncios en el feed, stories, reels y más, a las personas que realmente pueden estar interesadas en tus productos o servicios."]}
      blocks={[
        {
          title: "¿Cómo se puede segmentar mi campaña?",
          intro: "Podés elegir tu público según:",
          items: [
            "Intereses y comportamientos (ej: personas interesadas en fitness, moda, tecnología, etc.).",
            "Datos demográficos (edad, género, ubicación).",
            "Públicos personalizados (ej: tus seguidores, lista de clientes, quienes visitaron tu web).",
            "Públicos similares (personas con características parecidas a tus clientes actuales).",
          ],
        },
        {
          title: "¿Qué necesito para poder publicar?",
          items: [
            "Una página de Facebook o cuenta de Instagram de tu negocio.",
            "Un Administrador Comercial de Meta.",
            "Un método de pago válido (tarjeta de crédito/débito o PayPal).",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Meta me cobra cada vez que alguien ve mi anuncio?",
          answer: "No necesariamente. Podés elegir pagar por clic (CPC), por cada mil impresiones (CPM) o por conversiones específicas (ej: completar un formulario, comprar un producto).",
        },
        {
          question: "¿Cómo se determina el costo de los anuncios?",
          answer: "Meta Ads funciona con un sistema de subasta, donde competís con otros anunciantes por la atención del mismo público. El precio varía según la demanda, tu segmentación y la calidad del anuncio.",
        },
        {
          question: "¿Puedo limitar mi inversión mensual?",
          answer: "Sí. Podés establecer un presupuesto diario o total para toda la campaña, y Meta nunca se excederá de lo que fijes.",
        },
        {
          question: "¿Qué pasa si mi presupuesto es bajo?",
          answer: "Tus anuncios se mostrarán menos veces y a menos personas. Aun así, con una buena segmentación y creatividad, se pueden lograr resultados interesantes incluso con poca inversión.",
        },
        {
          question: "¿Cómo se realizan los pagos en Meta Ads?",
          answer: "Los pagos se hacen con tarjeta de crédito, débito o PayPal directamente desde la plataforma.",
        },
      ]}
      secondaryLink={{ href: "/#planes", label: "Ver planes de publicidad" }}
      cta={{
        title: <>¿Listo para aparecer<br /><em>donde está tu cliente?</em></>,
        text: "Armamos campañas en Facebook e Instagram pensadas para tu negocio, tu público y tu presupuesto.",
      }}
    />
  );
}
