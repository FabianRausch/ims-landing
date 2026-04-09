"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-background backdrop-blur-sm shadow-md text-white"
          : "bg-transparent text-white"
      }`}
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

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id={mobileMenuId}
            className="p-4 space-y-2 bg-card border rounded-lg shadow-sm absolute top-16 right-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-black hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
