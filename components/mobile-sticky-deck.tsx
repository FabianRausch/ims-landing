"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

export type StickyDeckRenderState = {
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
};

export type StickyDeckItem = {
  key: string;
  /** Past: solo título/peek; active/future: tarjeta completa (future suele ir con opacity 0). */
  render: (state: StickyDeckRenderState) => ReactNode;
};

type MobileStickyDeckProps = {
  items: StickyDeckItem[];
  /** Alto de cada “solapa” del montón (títulos ya vistos) */
  peekPx?: number;
  /** Cuánto se superpone cada solapa con la anterior (0.1 = 10% del alto de solapa) */
  stackOverlapRatio?: number;
  /** Altura mínima reservada para la tarjeta activa */
  expandedMinHeightPx?: number;
  /** Scroll por tarjeta (vh) */
  vhPerCard?: number;
  stickyTopClassName?: string;
  innerClassName?: string;
  className?: string;
};

/**
 * Deck móvil: solapas con `top: index * stepPx` donde step < peek para encimar (~10% por defecto).
 */
export function MobileStickyDeck({
  items,
  peekPx = 64,
  stackOverlapRatio = 0.1,
  expandedMinHeightPx = 320,
  vhPerCard = 42,
  stickyTopClassName = "top-24",
  innerClassName = "max-w-3xl mx-auto",
  className = "",
}: MobileStickyDeckProps) {
  const n = items.length;
  const deckRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * Math.max(n - 1, 1));
    setActiveIndex(Math.max(0, Math.min(idx, n - 1)));
  });

  if (n === 0) return null;

  const overlap = Math.min(0.85, Math.max(0, stackOverlapRatio));
  const stepPx = peekPx * (1 - overlap);

  const innerMin = Math.max(expandedMinHeightPx, (n - 1) * stepPx + 240);

  return (
    <div
      ref={deckRef}
      className={`relative mb-12 isolate ${className}`}
      style={{ height: `${n * vhPerCard}vh` }}
    >
      <div
        className={`sticky ${stickyTopClassName}   overflow-visible`}
        style={{ zIndex: 0 }}
      >
        <div
          className={`relative w-full overflow-visible ${innerClassName}`}
          style={{ minHeight: innerMin }}
        >
          {items.map((item, index) => {
            const isPast = index < activeIndex;
            const isFuture = index > activeIndex;
            const isActive = index === activeIndex;

            const state: StickyDeckRenderState = {
              isActive,
              isPast,
              isFuture,
            };

            const zIndex = isActive ? 40 : isPast ? 10 + index : 0;

            const topPx = index * stepPx;

            return (
              <motion.div
                key={item.key}
                initial={false}
                animate={{
                  opacity: isFuture ? 0 : 1,
                  maxHeight: isPast ? peekPx : 1200,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 34 }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: topPx,
                  width: "100%",
                  zIndex,
                  boxSizing: "border-box",
                  overflow: isPast ? "hidden" : "visible",
                  pointerEvents: isFuture ? "none" : "auto",
                }}
              >
                <div className="w-full" {...(isFuture ? { inert: true } : {})}>
                  {item.render(state)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
