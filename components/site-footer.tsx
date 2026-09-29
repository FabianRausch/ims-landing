import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { whatsappMessage } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="page-width site-footer__inner">
          <div>
            <Link className="brand brand--footer" href="/"><span className="brand__mark-wrap"><img src="/assets/logo.png" alt="" /></span><span className="brand__wordmark">Impulso<span>Marketing Studio</span></span></Link>
            <p>Publicidad, contenido y datos para marcas que quieren crecer.</p>
          </div>
          <div className="footer__nav"><Link href="/#servicios">Servicios</Link><Link href="/#planes">Planes</Link><Link href="/#proceso">Proceso</Link><Link href="/#contacto">Contacto</Link></div>
          <div className="footer__contact"><a href="tel:+543547656462">+54 3547 656462</a><a href="mailto:impulsemkt24@gmail.com">impulsemkt24@gmail.com</a><a href="https://www.instagram.com/impulsomarketingstudio" target="_blank" rel="noreferrer"><Instagram size={16} /> @impulsomarketingstudio</a></div>
          <div className="footer__bottom"><span>© {new Date().getFullYear()} Impulso Marketing Lab</span><a href="#top">Volver arriba <ArrowUpRight size={14} /></a></div>
        </div>
      </footer>
      <a className="whatsapp-float" href={whatsappMessage("Hola! Quiero recibir asesoría sobre los servicios de Impulso Marketing Lab.")} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><WhatsappIcon size={26} /></a>
    </>
  );
}
