import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";
import { whatsappMessage } from "@/lib/whatsapp";

export type ServiceBlock = {
  title: string;
  intro?: string;
  items?: string[];
  text?: ReactNode;
};

export type ServiceFaq = { question: string; answer: string };

type ServicePageProps = {
  href: string;
  lead: string[];
  blocks: ServiceBlock[];
  faqs?: ServiceFaq[];
  secondaryLink: { href: string; label: string };
  cta: { title: ReactNode; text: string };
};

export function ServicePage({ href, lead, blocks, faqs, secondaryLink, cta }: ServicePageProps) {
  const service = services.find((item) => item.href === href)!;
  const Icon = service.icon;
  const otherServices = services.filter((item) => item.href !== href);
  const contactHref = whatsappMessage(`Hola! Me interesa el servicio de ${service.title}. ¿Me pueden asesorar?`);

  return (
    <main className={`service-page service-page--${service.accent}`}>
      <section className="service-hero">
        <div className="hero__orb hero__orb--one" />
        <div className="service-hero__content page-width">
          <div className="reveal-up">
            <nav className="breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link><span>/</span><Link href="/#servicios">Servicios</Link><span>/</span><span aria-current="page">{service.title}</span>
            </nav>
            <p className="eyebrow service-hero__eyebrow"><span /> {service.number} · {service.kicker}</p>
            <h1>{service.title}<em>.</em></h1>
            {lead.map((paragraph) => <p className="hero__lead" key={paragraph}>{paragraph}</p>)}
            <div className="hero__actions">
              <a className="button button--bright" href={contactHref} target="_blank" rel="noreferrer" data-event="whatsapp_click" data-cta-location="service_hero" data-service-name={service.title}>Quiero asesoría <ArrowUpRight size={18} /></a>
              <Link className="text-link text-link--light" href={secondaryLink.href}>{secondaryLink.label} <ChevronRight size={17} /></Link>
            </div>
          </div>
          <div className="service-hero__badge reveal-up reveal-up--delay" aria-hidden="true">
            <span className="service-hero__icon"><Icon size={34} strokeWidth={1.7} /></span>
            <strong>{service.number}</strong>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      <section className="service-details section-pad">
        <div className="page-width">
          <div className="section-head"><div><p className="eyebrow"><span /> En detalle</p><h2>Lo que tenés que<br /><em>saber.</em></h2></div><p className="section-head__aside">Todo lo que necesitás entender antes de dar el primer paso con {service.title}.</p></div>
          <div className="service-blocks">
            {blocks.map((block, index) => (
              <article className="service-block" key={block.title}>
                <span className="service-block__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{block.title}</h3>
                {block.intro && <p>{block.intro}</p>}
                {block.items && <ul className="check-list">{block.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>}
                {block.text && <p className="service-block__text">{block.text}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="process section-pad">
          <div className="page-width">
            <div className="process__intro"><p className="eyebrow"><span /> Preguntas frecuentes</p><h2>Lo que nos<br /><em>preguntan.</em></h2><p>Respuestas claras para que sepas cómo funciona {service.title} antes de invertir.</p></div>
            <div className="faq">
              {faqs.map((faq, index) => (
                <details className="faq__item" key={faq.question}>
                  <summary><span className="process__number">{String(index + 1).padStart(2, "0")}</span><h3>{faq.question}</h3><ChevronDown size={19} /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="service-cta section-pad">
        <div className="page-width service-cta__inner">
          <div><p className="eyebrow eyebrow--light"><span /> Tu próximo paso</p><h2>{cta.title}</h2><p>{cta.text}</p></div>
          <div className="service-cta__actions">
            <a className="button button--bright" href={contactHref} target="_blank" rel="noreferrer" data-event="whatsapp_click" data-cta-location="service_cta" data-service-name={service.title}>Escribinos por WhatsApp <ArrowUpRight size={18} /></a>
            <Link className="text-link text-link--light" href={secondaryLink.href}>{secondaryLink.label} <ChevronRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="services section-pad">
        <div className="page-width">
          <div className="section-head"><div><p className="eyebrow"><span /> Otros servicios</p><h2>Sumá más impulso<br /><em>a tu estrategia.</em></h2></div><p className="section-head__aside">Publicidad, contenido y datos funcionan mejor cuando trabajan juntos.</p></div>
          <div className="services__grid services__grid--three">
            {otherServices.map((item) => <ServiceCard service={item} key={item.number} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
