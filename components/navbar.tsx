"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/meta-ads", label: "META ADS" },
    { href: "/google-ads", label: "GOOGLE ADS" },
    { href: "/community-manager", label: "COMMUNITY MANAGER" },
    { href: "/#combos", label: "COMBOS" },
    { href: "/#proceso", label: "PROCESO" },
    { href: "/#contacto", label: "CONTACTO" },
  ];

  const mobileMenuId = "navbar-mobile-links";

  return (
    <nav
      aria-label="Principal"
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-300 bg-background backdrop-blur-sm",
        isHomePage
          ? isScrolled
            ? "shadow-md text-white"
            : "bg-transparent text-white"
          : "shadow-md text-white",
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

          <div className="relative">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-haspopup="true"
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
              <>
                {/* div (no botón): un <button aria-hidden> sigue siendo enfocable y falla axe */}
                <div
                  role="presentation"
                  className="fixed inset-x-0 bottom-0 top-16 z-[105] cursor-pointer bg-black/40 md:top-20"
                  onClick={() => setIsOpen(false)}
                />
                <div
                  id={mobileMenuId}
                  role="region"
                  aria-label="Enlaces del sitio"
                  className="fixed top-16 right-4 left-auto z-[110] w-full max-w-[min(280px,calc(100vw-2rem))] rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg sm:max-w-xs"
                >
                  <ul className="m-0 list-none space-y-2 p-0">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block py-2 text-sm font-medium text-black transition-colors hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
