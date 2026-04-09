"use client";

import {
  useCallback,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MD_UP = "(min-width: 768px)";

function subscribeMdUp(callback: () => void) {
  const mq = window.matchMedia(MD_UP);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMdUpSnapshot() {
  return window.matchMedia(MD_UP).matches;
}

function getMdUpServerSnapshot() {
  return false;
}

export const expandableCardClassName =
  "group gap-0 overflow-hidden rounded-xl border-2 border-transparent transition-[box-shadow,border-color] hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const contentTransition =
  "overflow-hidden transition-[max-height,opacity,transform,padding-top] duration-300 ease-out";

type ExpandableCardProps = {
  className?: string;
  header: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  contentClassName?: string;
};

export function ExpandableCard({
  className,
  header,
  children,
  defaultOpen = false,
  contentClassName,
}: ExpandableCardProps) {
  const isDesktop = useSyncExternalStore(
    subscribeMdUp,
    getMdUpSnapshot,
    getMdUpServerSnapshot,
  );

  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const onClick = () => {
    if (!isDesktop) toggle();
  };

  return (
    <Card
      role={isDesktop ? undefined : "button"}
      tabIndex={0}
      aria-expanded={isDesktop ? undefined : open}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={cn(
        expandableCardClassName,
        isDesktop ? "cursor-default" : "cursor-pointer",
        className,
      )}
    >
      <CardHeader className="flex flex-col items-stretch gap-2 space-y-0 pb-2 text-left">
        {header}
        {!open && !isDesktop ? (
          <p className="text-center text-sm font-medium text-primary-on-light">
            Ver más
          </p>
        ) : null}
      </CardHeader>
      <CardContent
        aria-hidden={!isDesktop && !open}
        className={cn(
          contentTransition,
          isDesktop
            ? "max-h-0 translate-y-1 pt-0 opacity-0 pointer-events-none group-hover:max-h-[min(80rem,100vh)] group-hover:translate-y-0 group-hover:pt-4 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:max-h-[min(80rem,100vh)] group-focus-within:translate-y-0 group-focus-within:pt-4 group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
            : open
              ? "max-h-[min(80rem,100vh)] translate-y-0 pt-4 opacity-100"
              : "pointer-events-none max-h-0 translate-y-1 py-0 pt-0 opacity-0",
          contentClassName,
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
}
