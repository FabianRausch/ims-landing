import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className={`service-card service-card--${service.accent}`}>
      <div className="service-card__top"><span>{service.number}</span><Icon size={21} strokeWidth={1.8} /></div>
      <p className="service-card__kicker">{service.kicker}</p>
      <h3>{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <Link href={service.href} className="service-card__link">Conocer servicio <ArrowUpRight size={16} /></Link>
    </article>
  );
}
