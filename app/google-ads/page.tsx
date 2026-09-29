import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Google Ads | Impulso Marketing Studio",
  description: "Campañas en Google para conectar con personas en el momento exacto en que buscan lo que ofrecés: búsqueda, Display, YouTube, Gmail y Maps.",
};

export default function GoogleAdsPage() {
  return (
    <ServicePage
      href="/google-ads"
      lead={["Es la plataforma de publicidad de Google que permite mostrar anuncios en los resultados de búsqueda, en sitios web asociados (Red de Display), en YouTube, Gmail y Maps. Te conecta con personas en el momento exacto en que buscan lo que ofrecés."]}
      blocks={[
        {
          title: "¿Cómo se puede segmentar mi campaña?",
          intro: "En Google, la segmentación es muy potente y se divide principalmente en:",
          items: [
            "Palabras clave (Keywords): Basado en lo que la gente escribe en el buscador.",
            "Temas e intereses: Según los sitios que visitan o sus hábitos de navegación.",
            "Datos demográficos: Edad, género, ubicación e ingresos familiares.",
            "Remarketing: Mostrar anuncios a quienes ya visitaron tu web o usaron tu app.",
            "Segmentos de intención: Personas que están investigando activamente para comprar un producto.",
          ],
        },
        {
          title: "¿Qué necesito para poder publicar?",
          items: [
            "Una Cuenta de Google (Gmail).",
            "Un sitio web o una página de aterrizaje (landing page) a donde dirigir el tráfico.",
            "Un método de pago válido configurado en la plataforma (tarjeta de crédito/débito o cuenta bancaria, según el país).",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Google me cobra cada vez que alguien ve mi anuncio?",
          answer: "Depende del tipo de campaña. Lo más común es el Pago por Clic (CPC), donde solo pagás si alguien entra a tu web. También existe el pago por cada mil impresiones (CPM), ideal para branding, o el pago por visualizaciones (CPV) en YouTube.",
        },
        {
          question: "¿Cómo se determina el costo de los anuncios?",
          answer: "Funciona mediante una subasta en tiempo real. El costo no depende solo de cuánto dinero ofrezcas (puja), sino también del Nivel de Calidad: Google premia que tu anuncio sea relevante y que tu página web sea buena.",
        },
        {
          question: "¿Puedo limitar mi inversión mensual?",
          answer: "Sí. En Google Ads definís un presupuesto diario promedio. Aunque algún día puntual Google puede gastar un poco más si detecta mucho tráfico, al final del mes nunca excederá el límite de (presupuesto diario × 30.4 días).",
        },
        {
          question: "¿Qué pasa si mi presupuesto es bajo?",
          answer: "Si el presupuesto es muy ajustado, tu anuncio dejará de aparecer cuando se agote el dinero del día. En mercados muy competitivos (donde el clic es caro), podrías recibir pocas visitas, pero si elegís palabras clave muy específicas (\"de nicho\"), podés tener un retorno excelente.",
        },
        {
          question: "¿Cómo se realizan los pagos en Google Ads?",
          answer: "Los pagos se gestionan desde la sección de Facturación. Dependiendo de tu país, podés pagar de forma automática (se debita de tu tarjeta tras acumular gastos) o manual (cargás saldo previamente mediante tarjeta, transferencia o proveedores locales).",
        },
      ]}
      secondaryLink={{ href: "/#planes", label: "Ver planes de publicidad" }}
      cta={{
        title: <>Que te encuentren<br /><em>cuando te buscan.</em></>,
        text: "Llevamos a tu negocio a las personas que ya están buscando lo que ofrecés en Google.",
      }}
    />
  );
}
