import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Community Manager | Impulso Marketing Studio",
  description: "Le damos voz, personalidad y constancia a tu marca en redes sociales para generar cercanía, confianza y conversación.",
};

export default function CommunityManagerPage() {
  return (
    <ServicePage
      href="/community-manager"
      lead={[
        "Hoy en día no alcanza con tener redes sociales, hay que estar activo y generar conversación.",
        "Un community manager es quien le da voz, personalidad y constancia a tu marca en el mundo digital.",
      ]}
      blocks={[
        {
          title: "¿Por qué lo necesitás?",
          items: [
            "Mantiene una presencia constante en redes.",
            "Responde y genera cercanía con tu comunidad.",
            "Construye confianza y lealtad en tus clientes.",
            "Hace que tu marca se vea viva, actual y relevante.",
          ],
        },
        {
          title: "Tu marca, siempre presente",
          text: <>En <b>Impulso Marketing Studio</b> nos ocupamos de tus redes para que vos te enfoques en lo que mejor sabés hacer: tu negocio.</>,
        },
      ]}
      secondaryLink={{ href: "/#contacto", label: "Consultar por community manager" }}
      cta={{
        title: <>Tu marca,<br /><em>siempre presente.</em></>,
        text: "Contanos cómo es tu negocio y armamos una presencia en redes que genere conversación.",
      }}
    />
  );
}
