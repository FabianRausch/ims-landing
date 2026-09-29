import { BarChart3, MousePointerClick, Target, Users, type LucideIcon } from "lucide-react";

export type ServiceAccent = "pink" | "orange" | "violet" | "lime";

export type Service = {
  number: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  href: string;
  accent: ServiceAccent;
};

export const services: Service[] = [
  {
    number: "01",
    icon: MousePointerClick,
    kicker: "Publicidad que convierte",
    title: "Meta Ads",
    description: "Campañas en Facebook e Instagram para que tu marca aparezca frente a las personas correctas, en el momento justo.",
    href: "/meta-ads",
    accent: "pink",
  },
  {
    number: "02",
    icon: Target,
    kicker: "Demanda activa",
    title: "Google Ads",
    description: "Capturamos búsquedas de personas que ya están buscando lo que ofrecés y las llevamos directo a tu negocio.",
    href: "/google-ads",
    accent: "orange",
  },
  {
    number: "03",
    icon: Users,
    kicker: "Comunidad que crece",
    title: "Community Manager",
    description: "Ordenamos tu presencia digital con estrategia, contenido y una voz de marca que genera conversación.",
    href: "/community-manager",
    accent: "violet",
  },
  {
    number: "04",
    icon: BarChart3,
    kicker: "Datos para decidir",
    title: "Data Tracking",
    description: "Entendé qué campañas generan resultados, cómo se comportan tus clientes y dónde está cada oportunidad.",
    href: "/data-tracking",
    accent: "lime",
  },
];
