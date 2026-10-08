declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type TrackingEvent = "whatsapp_click" | "whatsapp_form_submit" | "contact_click";

export type TrackingParams = {
  cta_location?: string;
  plan_name?: string;
  service_name?: string;
  method?: string;
  form_name?: string;
};

export function trackEvent(event: TrackingEvent, params: TrackingParams = {}) {
  window.dataLayer = window.dataLayer || [];
  // GTM keeps every key it has seen, so unused params are reset explicitly to avoid leaking values from earlier events.
  window.dataLayer.push({
    event,
    cta_location: params.cta_location,
    plan_name: params.plan_name,
    service_name: params.service_name,
    method: params.method,
    form_name: params.form_name,
  });
}
