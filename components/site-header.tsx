"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { whatsappMessage } from "@/lib/whatsapp";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#planes", label: "Planes" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#contacto", label: "Contacto" },
];

const ctaHref = whatsappMessage("Hola! Me gustaría recibir asesoría gratuita sobre los servicios de Impulso Marketing Lab.");

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Impulso Marketing Lab, inicio">
          <span className="brand__mark-wrap"><img src="/assets/logo.png" alt="" /></span>
          <span className="brand__wordmark">Impulso<span>Marketing Studio</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <a className="header-cta" href={ctaHref} target="_blank" rel="noreferrer">
          Asesoría gratis <ArrowUpRight size={15} />
        </a>

        <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
          <a className="mobile-menu__cta" href={ctaHref} target="_blank" rel="noreferrer">Asesoría gratis <ArrowUpRight size={16} /></a>
        </div>
      )}
    </header>
  );
}
