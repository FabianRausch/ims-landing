"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Instagram,
  Menu,
  MessageCircle,
  MousePointerClick,
  Play,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const whatsappBase = "https://wa.me/543547656462";
const whatsappMessage = (message: string) => `${whatsappBase}?text=${encodeURIComponent(message)}`;

const services = [
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

const plans = [
  {
    name: "Impulso Ads Base",
    eyebrow: "Para empezar con claridad",
    description: "Para negocios que quieren comenzar a vender con publicidad y generar sus primeras consultas.",
    features: ["Gestión de Meta Ads", "1 campaña activa", "Segmentación de público", "Optimización semanal", "Copy básico para anuncios", "Reporte mensual simple"],
    result: "Primeras consultas, visibilidad y movimiento.",
    featured: false,
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
    featured: false,
  },
];

const process = [
  ["01", "Entendemos", "Conocemos tu negocio, tu audiencia y el resultado que querés alcanzar."],
  ["02", "Diseñamos", "Armamos una estrategia con mensajes, campañas y objetivos medibles."],
  ["03", "Activamos", "Lanzamos tus campañas y ponemos tu marca frente a la demanda real."],
  ["04", "Optimizamos", "Leemos los datos, mejoramos lo que funciona y ajustamos lo que no."],
];

function scrollToContact() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert("¡Gracias! Recibimos tu consulta. Te vamos a contactar para conocer mejor tu negocio.");
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#inicio" aria-label="Impulso Marketing Lab, inicio">
            <span className="brand__mark-wrap"><img src="/assets/logo.png" alt="" /></span>
            <span className="brand__wordmark">Impulso<span>Marketing Studio</span></span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#planes">Planes</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="header-cta" href={whatsappMessage("Hola! Me gustaría recibir asesoría gratuita sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer">
            Asesoría gratis <ArrowUpRight size={15} />
          </a>

          <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a>
            <a href="#proceso" onClick={() => setMenuOpen(false)}>Cómo trabajamos</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            <a className="mobile-menu__cta" href={whatsappMessage("Hola! Me gustaría recibir asesoría gratuita sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer">Asesoría gratis <ArrowUpRight size={16} /></a>
          </div>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__texture" />
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="hero__gridline" />
          <div className="hero__content page-width">
            <div className="hero__copy reveal-up">
              <p className="eyebrow eyebrow--light"><span /> Agencia de marketing digital · Córdoba</p>
              <h1>Visibiliza tu marca/empresa <em>en Redes Sociales y Google.</em></h1>
              <p className="hero__lead">Diseñamos estrategias de publicidad y contenido para que más personas te encuentren, confíen en vos y elijan tu negocio.</p>
              <div className="hero__actions">
                <a className="button button--bright" href={whatsappMessage("Hola! Quiero recibir asesoría gratuita sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer">Asesoráte gratis <ArrowUpRight size={18} /></a>
                <a className="text-link text-link--light" href="#servicios">Ver servicios <ChevronRight size={17} /></a>
              </div>
              <div className="hero__proof"><span className="hero__proof-avatars"><i>IM</i><i>AD</i><i>+</i></span><span>Publicidad, contenido y datos<br /><b>en una misma estrategia.</b></span></div>
            </div>
            <div className="hero__visual reveal-up reveal-up--delay">
              <div className="hero__image-frame"><img src="/assets/hero-campaign.jpg" alt="Estrategia de campañas digitales de Impulso" /></div>
              <div className="hero__floating-card hero__floating-card--top"><span className="mini-label">En vivo</span><strong>+42.8%</strong><small>de crecimiento</small><TrendingUp size={20} /></div>
              <div className="hero__floating-card hero__floating-card--bottom"><span className="play-icon"><Play size={13} fill="currentColor" /></span><span><b>De la idea</b><small>al próximo cliente</small></span></div>
              <span className="hero__visual-sticker">IMPULSATE</span>
            </div>
          </div>
          <a className="hero__scroll" href="#intro" aria-label="Bajar a la siguiente sección"><span>Explorar</span><i /></a>
        </section>

        <section className="intro page-width section-pad" id="intro">
          <div className="intro__number">01<span /></div>
          <div className="intro__body">
            <p className="eyebrow"><span /> No se trata de publicar por publicar</p>
            <div className="intro__statement">
              <h2>Hacemos que tu presencia online <em>tenga dirección.</em></h2>
              <div>
                <p>Muchos negocios invierten en publicidad sin una estrategia clara. El resultado: anuncios poco efectivos y presupuesto desperdiciado.</p>
                <p>En Impulso, conectamos creatividad, pauta y datos para que cada acción tenga un propósito y cada peso invertido trabaje mejor.</p>
              </div>
            </div>
            <div className="intro__stats"><div><strong>360°</strong><span>mirada integral</span></div><div><strong>100%</strong><span>estrategia a medida</span></div><div><strong>24/7</strong><span>datos para decidir</span></div></div>
          </div>
        </section>

        <section className="services section-pad" id="servicios">
          <div className="page-width">
            <div className="section-head"><div><p className="eyebrow"><span /> Lo que hacemos</p><h2>Todo lo que tu marca necesita<br /><em>para crecer online.</em></h2></div><p className="section-head__aside">Un equipo estratégico para conectar tu negocio con las personas que ya están buscando lo que ofrecés.</p></div>
            <div className="services__grid">
              {services.map((service) => { const Icon = service.icon; return <article className={`service-card service-card--${service.accent}`} key={service.number}><div className="service-card__top"><span>{service.number}</span><Icon size={21} strokeWidth={1.8} /></div><p className="service-card__kicker">{service.kicker}</p><h3>{service.title}</h3><p className="service-card__description">{service.description}</p><a href={service.href} className="service-card__link">Conocer servicio <ArrowUpRight size={16} /></a></article>; })}
            </div>
            <div className="services__footer"><span>También podemos ayudarte con</span><b>estrategia · creatividades · métricas · optimización</b><a href="#contacto">Hablemos de tu negocio <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="spotlight page-width section-pad">
          <div className="spotlight__image"><img src="/assets/strategy-editorial.jpg" alt="Herramientas de estrategia y planificación de marketing" /><span className="spotlight__caption">Estrategia antes que ruido.</span></div>
          <div className="spotlight__copy"><p className="eyebrow"><span /> La diferencia Impulso</p><h2>No adivinamos.<br /><em>Medimos.</em></h2><p>La creatividad atrae. Los datos indican por dónde seguir. Trabajamos en el punto donde ambas cosas se encuentran para construir campañas más inteligentes y negocios más visibles.</p><div className="spotlight__quote"><Sparkles size={19} /><span>“Lo que no se mide, no se puede mejorar.”</span></div><a className="text-link" href="#proceso">Conocé nuestro proceso <ChevronRight size={17} /></a></div>
        </section>

        <section className="plans section-pad" id="planes">
          <div className="page-width"><div className="section-head section-head--light"><div><p className="eyebrow eyebrow--light"><span /> Elegí tu punto de partida</p><h2>Planes para cada<br /><em>momento de tu negocio.</em></h2></div><p className="section-head__aside">Podés empezar donde estás hoy y crecer cuando tu negocio esté listo.</p></div><div className="plans__grid">{plans.map((plan) => <article className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`} key={plan.name}>{plan.featured && <span className="plan-card__badge">Recomendado <Sparkles size={12} /></span>}<p className="plan-card__eyebrow">{plan.eyebrow}</p><h3>{plan.name}</h3><p className="plan-card__description">{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul><div className="plan-card__result"><small>Resultado esperado</small><strong>{plan.result}</strong></div><a className="button button--outline" href={whatsappMessage(`Hola! Me interesa conocer más sobre el plan ${plan.name}.`)} target="_blank" rel="noreferrer">Consultar plan <ArrowUpRight size={16} /></a></article>)}</div><p className="plans__note">La inversión publicitaria no está incluida en los planes. El presupuesto de anuncios se abona directamente a Meta o Google.</p></div>
        </section>

        <section className="process section-pad" id="proceso"><div className="page-width"><div className="process__intro"><p className="eyebrow"><span /> Cómo trabajamos</p><h2>Menos improvisación.<br /><em>Más impulso.</em></h2><p>Un proceso claro para que sepas qué estamos haciendo, por qué lo hacemos y cómo impacta en tu negocio.</p></div><div className="process__steps">{process.map(([number, title, description]) => <div className="process__step" key={number}><span className="process__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ChevronRight size={19} /></div>)}</div></div></section>
        <section className="contact section-pad" id="contacto"><div className="page-width"><div className="contact__layout"><div className="contact__heading"><p className="eyebrow"><span /> Tu próximo paso</p><h2>¿Hablamos de<br /><em>tu negocio?</em></h2><p>Contanos qué estás buscando y armamos juntos el próximo movimiento de tu marca.</p><div className="contact__direct"><a href={whatsappMessage("Hola! Quiero recibir asesoría sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Escribinos por WhatsApp <ArrowUpRight size={16} /></a><a href="mailto:impulsemkt24@gmail.com"><ExternalLink size={18} /> impulsemkt24@gmail.com</a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label><span>Nombre</span><input name="name" type="text" placeholder="Tu nombre" required /></label><label><span>Teléfono</span><input name="phone" type="tel" placeholder="+54 9 ..." required /></label></div><label><span>Email</span><input name="email" type="email" placeholder="tu@email.com" required /></label><label><span>¿Qué necesitás?</span><textarea name="message" rows={4} placeholder="Contanos un poco sobre tu negocio y qué te gustaría mejorar..." required /></label><div className="form-bottom"><span>Te respondemos a la brevedad.</span><button className="button button--ink" type="submit">Enviar consulta <Send size={16} /></button></div></form></div></div></section>
      </main>

      <footer className="site-footer"><div className="page-width site-footer__inner"><div><a className="brand brand--footer" href="#inicio"><span className="brand__mark-wrap"><img src="/assets/logo.png" alt="" /></span><span className="brand__wordmark">Impulso<span>Marketing Studio</span></span></a><p>Publicidad, contenido y datos para marcas que quieren crecer.</p></div><div className="footer__nav"><a href="#servicios">Servicios</a><a href="#planes">Planes</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></div><div className="footer__contact"><a href="tel:+543547656462">+54 3547 656462</a><a href="mailto:impulsemkt24@gmail.com">impulsemkt24@gmail.com</a><a href="https://www.instagram.com/impulsomarketingstudio" target="_blank" rel="noreferrer"><Instagram size={16} /> @impulsomarketingstudio</a></div><div className="footer__bottom"><span>© {new Date().getFullYear()} Impulso Marketing Lab</span><a href="#inicio">Volver arriba <ArrowUpRight size={14} /></a></div></div></footer>
      <a className="whatsapp-float" href={whatsappMessage("Hola! Quiero recibir asesoría sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
