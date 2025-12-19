import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP;
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría recibir más información."
  );

  const navLinks = [
    { href: "/#meta-ads", label: "Meta Ads" },
    { href: "/#tiktok-ads", label: "TikTok Ads" },
    { href: "/#community-manager", label: "Community Manager" },
    { href: "/#combos", label: "Combos" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/#testimonios", label: "Testimonios" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <Link href="/#start" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Impulso Marketing"
                width={50}
                height={50}
              />
              <span className="font-bold text-lg">Impulso Marketing</span>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Tu agencia de marketing digital especializada en Meta Ads, TikTok
              Ads y gestión de redes sociales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
            <div className="flex gap-3 mb-6">
              <Link
                href={process.env.NEXT_PUBLIC_CONTACT_FACEBOOK_URL || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM_URL || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <Button className="w-full bg-primary text-white" asChild>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Impulso Marketing Studio. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
