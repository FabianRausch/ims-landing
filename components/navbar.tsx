"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#meta-ads", label: "META ADS" },
    { href: "/#campanas-busqueda", label: "GOOGLE ADS" },
    { href: "/#community-manager", label: "COMMUNITY MANAGER" },
    { href: "/#combos", label: "COMBOS" },
    { href: "/#proceso", label: "PROCESO" },
    { href: "/#contacto", label: "CONTACTO" },
  ];

  const mobileMenuId = "navbar-mobile-links";

  return (
    <nav
      aria-label="Principal"
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-300",
        isScrolled
          ? "bg-background backdrop-blur-sm shadow-md text-white"
          : "bg-transparent text-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/#start" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Impulso Marketing Studio"
              width={50}
              height={50}
            />
            <span className="font-bold text-lg hidden sm:inline">
              Impulso Marketing Studio
            </span>
          </Link>

          {/*
            modal={false} evita que Radix use aria-hidden en nav/main/footer
            (conflicto con focusables como el CTA de WhatsApp en <main>).
          */}
          {/*
            Sin DialogTrigger: con modal={false}, un clic en el mismo botón
            disparaba cierre por “outside” + toggle del trigger y el menú se reabría.
          */}
          <Dialog open={isOpen} onOpenChange={setIsOpen} modal={false}>
            <Button
              ref={menuButtonRef}
              type="button"
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-haspopup="dialog"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </Button>

            {isOpen ? (
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className="fixed inset-x-0 bottom-0 top-16 md:top-20 z-[105] bg-black/40 cursor-default border-0 p-0"
                onClick={() => setIsOpen(false)}
              />
            ) : null}

            <DialogContent
              id={mobileMenuId}
              showCloseButton={false}
              className={cn(
                "!fixed top-16 right-4 left-auto z-[110] max-w-[min(280px,calc(100vw-2rem))] w-full !translate-x-0 !translate-y-0 gap-0 p-4 sm:max-w-xs",
                "border bg-card text-card-foreground shadow-lg rounded-lg",
              )}
              onInteractOutside={(event) => {
                if (
                  menuButtonRef.current?.contains(event.target as Node)
                ) {
                  event.preventDefault();
                }
              }}
            >
              <DialogTitle className="sr-only">Menú de navegación</DialogTitle>
              <DialogDescription className="sr-only">
                Enlaces a las secciones principales del sitio.
              </DialogDescription>
              <ul className="space-y-2 list-none p-0 m-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm font-medium text-black hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
