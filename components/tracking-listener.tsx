"use client";

import { useEffect } from "react";
import { trackEvent, type TrackingEvent } from "@/lib/tracking";

export function TrackingListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const element = (event.target as Element | null)?.closest<HTMLElement>("[data-event]");
      if (!element) return;
      const { dataset } = element;
      trackEvent(dataset.event as TrackingEvent, {
        cta_location: dataset.ctaLocation,
        plan_name: dataset.planName,
        service_name: dataset.serviceName,
        method: dataset.method,
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
