export type Plan = {
  name: string;
  eyebrow: string;
  description: string;
  features: string[];
  result: string;
  featured?: boolean;
};

export const adsPlans: Plan[] = [
  {
    name: "Impulso Ads Base",
    eyebrow: "Para empezar con claridad",
    description: "Para negocios que quieren comenzar a vender con publicidad y generar sus primeras consultas.",
    features: ["Gestión de Meta Ads", "1 campaña activa", "Segmentación de público", "Optimización semanal", "Copy básico para anuncios", "Reporte mensual simple"],
    result: "Primeras consultas, visibilidad y movimiento.",
  },
  {
    name: "Impulso Ads Pro",
    eyebrow: "El más elegido",
    description: "Para marcas que ya venden o quieren construir un flujo constante de potenciales clientes.",
    features: ["Meta Ads + opción de Google Ads", "2 a 3 campañas activas", "Testeo de creativos", "Segmentación estratégica", "Optimización constante", "Reporte con métricas clave"],
    result: "Consultas más calificadas y flujo constante.",
    featured: true,
  },
  {
    name: "Impulso Ads Growth",
    eyebrow: "Para escalar en serio",
    description: "Para negocios que buscan profesionalizar su adquisición y construir un sistema de ventas.",
    features: ["Meta Ads + Google Ads", "Múltiples campañas full funnel", "Estrategia mensual personalizada", "Remarketing avanzado", "Análisis de datos", "Soporte prioritario"],
    result: "Un sistema de adquisición que crece con vos.",
  },
];

export const communityPlans: Plan[] = [
  {
    name: "Plan Básico",
    eyebrow: "Para empezar en redes",
    description: "Ideal si necesitás ordenar tu comunicación y empezar a moverte en redes.",
    features: ["Manual de estilo", "Objetivos y estrategias", "Planner mensual", "4 posts (reels, imágenes estáticas y carrouseles)", "10 días de historias", "Análisis de estadísticas"],
    result: "Mayor presencia, constancia y primeras interacciones con tu audiencia.",
  },
  {
    name: "Plan Medio",
    eyebrow: "El más elegido",
    description: "Ideal para marcas que buscan mayor visibilidad y conexión con su público.",
    features: ["Manual de estilo", "Objetivos y estrategias", "Planner mensual", "6 posts (reels, imágenes estáticas y carrouseles)", "14 días de historias", "Análisis de estadísticas"],
    result: "Mayor alcance, interacción y crecimiento sostenido de la cuenta.",
    featured: true,
  },
  {
    name: "Plan Premium",
    eyebrow: "Para destacar",
    description: "Pensado para negocios que buscan contenido constante y de alto impacto.",
    features: ["Manual de estilo", "Objetivos y estrategias", "Planner mensual", "8 posts (reels, imágenes estáticas y carrouseles)", "18 días de historias", "Análisis de estadísticas"],
    result: "Posicionamiento de marca, crecimiento acelerado y mayor engagement.",
  },
];

export const adsPlansNote = "La inversión publicitaria no está incluida en los planes. El presupuesto de anuncios se abona directamente a Meta o Google.";

export const volumeFeature = /^\d+ (?:posts(?: \(.*\))?|días de historias)$/;
