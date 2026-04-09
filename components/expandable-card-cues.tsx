import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Clases compartidas para cards con contenido colapsable (hover / foco) */
export const expandableCardClassName =
  "group cursor-pointer overflow-hidden gap-0 rounded-xl border-2 border-transparent transition-[box-shadow,border-color] hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

export const expandableCardHeaderClassName =
  "flex flex-row items-start justify-between gap-3 space-y-0 pb-2";

/** Indicador visual de que la tarjeta despliega contenido al hover o al foco/táctil */
export function ExpandableChevron({ className }: { className?: string }) {
  return (
    <ChevronDown
      className={cn(
        "h-5 w-5 shrink-0 text-primary-on-light transition-transform duration-300 ease-out",
        "group-hover:rotate-180 group-focus-within:rotate-180",
        className,
      )}
      aria-hidden
    />
  );
}

export function ExpandableHint({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground mt-1.5 leading-snug", className)}>
      <span className="sm:hidden">Tocá la tarjeta para ver más.</span>
      <span className="hidden sm:inline">
        Pasá el cursor o hacé clic para expandir.
      </span>
    </p>
  );
}
