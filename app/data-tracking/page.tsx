import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Google Analytics 4 & Data Tracking | Impulso Marketing Studio",
  description: "Medí visitas, conversiones y comportamiento en tu web o ecommerce con GA4, Tag Manager y Looker Studio. Dashboards y optimización de campañas con datos reales.",
};

export default function DataTrackingPage() {
  return (
    <ServicePage
      href="/data-tracking"
      lead={["Google Analytics 4 permite medir el comportamiento de los usuarios dentro de tu sitio web o ecommerce. Podés conocer visitas, conversiones, ventas, tiempo de permanencia y mucho más en tiempo real."]}
      blocks={[
        {
          title: "¿Qué puedo medir en mi ecommerce?",
          intro: "Podés medir:",
          items: [
            "Ventas",
            "Productos más vistos",
            "Carritos abandonados",
            "Formularios enviados",
            "Clics en botones",
            "Tráfico desde Meta Ads y Google Ads",
            "Comportamiento de usuarios dentro del sitio",
          ],
        },
        {
          title: "¿Qué beneficios tiene medir correctamente?",
          intro: "Medir correctamente permite:",
          items: [
            "Tomar decisiones con datos reales",
            "Detectar oportunidades de mejora",
            "Optimizar campañas",
            "Entender el comportamiento del cliente",
            "Aumentar conversiones y ventas",
          ],
        },
        {
          title: "¿Qué es Google Tag Manager?",
          intro: "Google Tag Manager permite instalar y gestionar eventos de seguimiento sin modificar constantemente el código del sitio web. Gracias a esto se pueden medir acciones específicas como compras, clics o inicios de checkout.",
        },
        {
          title: "¿Qué es Looker Studio?",
          intro: "Looker Studio transforma todos los datos en dashboards visuales y fáciles de entender, para que puedas ver métricas importantes de tu negocio en un solo lugar.",
        },
      ]}
      faqs={[
        {
          question: "¿Puedo ver mis métricas en tiempo real?",
          answer: "Sí. Es posible visualizar usuarios activos, tráfico, conversiones y rendimiento de campañas prácticamente en tiempo real desde dashboards personalizados.",
        },
        {
          question: "¿Cómo ayuda esto a mis campañas?",
          answer: "La medición permite entender qué anuncios generan resultados reales y cuáles necesitan optimización. Esto ayuda a invertir mejor el presupuesto y mejorar el rendimiento de las campañas.",
        },
        {
          question: "¿Necesito tener un ecommerce para usarlo?",
          answer: "No necesariamente. También se puede implementar en páginas web corporativas, landing pages, formularios de contacto y sitios de servicios.",
        },
      ]}
      secondaryLink={{ href: "/#contacto", label: "Consultar por medición y analítica" }}
      cta={{
        title: <>No adivinamos.<br /><em>Medimos.</em></>,
        text: "Configuramos la medición de tu web o ecommerce para que cada decisión se apoye en datos reales.",
      }}
    />
  );
}
