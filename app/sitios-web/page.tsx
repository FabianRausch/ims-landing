import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Sitios Web | Impulso Marketing Studio",
  description: "Diseñamos landing pages y sitios web de varias páginas para que tu marca se vea profesional, cargue rápido y convierta visitas en consultas.",
};

export default function SitiosWebPage() {
  return (
    <ServicePage
      href="/sitios-web"
      lead={[
        "Tu web es el lugar donde se cierra la conversación que empieza en redes o en Google.",
        "Diseñamos landing pages para campañas puntuales y sitios de varias páginas para que tu negocio se vea claro, rápido y pensado para convertir.",
      ]}
      blocks={[
        {
          title: "¿Landing o sitio de varias páginas?",
          intro: "Elegimos el formato según el objetivo de tu negocio:",
          items: [
            "Landing page: una sola página, enfocada en una campaña, un servicio o una conversión concreta.",
            "Sitio multipágina: inicio, servicios, nosotros, contacto y las secciones que tu marca necesita.",
            "Podés empezar con una landing y, cuando el negocio lo pida, escalar a un sitio más completo.",
          ],
        },
        {
          title: "¿Qué incluye el desarrollo?",
          items: [
            "Diseño a medida, alineado a la identidad de tu marca.",
            "Versión responsive para celular, tablet y escritorio.",
            "Estructura pensada para convertir: WhatsApp, formularios y llamados a la acción.",
            "Carga rápida, SEO básico y publicación lista para usar.",
          ],
        },
        {
          title: "Pensado para vender, no solo para verse bien",
          text: <>En <b>Impulso Marketing Studio</b> armamos webs que conversan con tus campañas: listas para recibir tráfico de Meta Ads, Google Ads y redes, y para transformar esas visitas en consultas reales.</>,
        },
      ]}
      faqs={[
        {
          question: "¿Cuánto tarda una landing o un sitio?",
          answer: "Depende del alcance. Una landing enfocada puede resolverse más rápido; un sitio de varias páginas lleva más diseño, contenidos y revisiones. En la primera charla te damos un plazo realista según lo que necesitás.",
        },
        {
          question: "¿Puedo empezar con una landing y después sumar páginas?",
          answer: "Sí. Es un camino habitual: primero una página que convierta y, cuando el negocio crece, un sitio más completo con las secciones que realmente vas a usar.",
        },
        {
          question: "¿La web sirve para campañas de Ads?",
          answer: "Sí. La pensamos para recibir tráfico de Meta Ads y Google Ads, con mensajes claros, velocidad y puntos de contacto (WhatsApp, formularios o llamadas) para que el anuncio no se pierda al hacer clic.",
        },
        {
          question: "¿Incluye dominio y hosting?",
          answer: "Te asesoramos en dominio, hosting y publicación. Según el proyecto, se puede incluir la configuración o trabajar sobre lo que ya tengas. Lo charlamos en la consulta para que quede listo para salir online.",
        },
      ]}
      secondaryLink={{ href: "/#contacto", label: "Consultar por sitios y landings" }}
      cta={{
        title: <>Una web lista<br /><em>para convertir.</em></>,
        text: "Contanos qué necesitás: una landing para una campaña o un sitio completo para tu marca. Lo armamos con foco en claridad y resultados.",
      }}
    />
  );
}
