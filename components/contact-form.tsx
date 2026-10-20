"use client";

import { FormEvent } from "react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { trackEvent } from "@/lib/tracking";
import { whatsappMessage } from "@/lib/whatsapp";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const message = [
      "Hola! Les escribo desde la web de Impulso Marketing Studio.",
      "",
      `*Nombre:* ${field("name")}`,
      `*Teléfono:* ${field("phone")}`,
      `*Email:* ${field("email")}`,
      "",
      `*Consulta:* ${field("message")}`,
    ].join("\n");
    trackEvent("whatsapp_form_submit", { form_name: "contacto" });
    const url = whatsappMessage(message);
    const whatsappWindow = window.open(url, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    else window.location.href = url;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label><span>Nombre</span><input name="name" type="text" placeholder="Tu nombre" required /></label>
        <label><span>Teléfono</span><input name="phone" type="tel" placeholder="+54 9 ..." required /></label>
      </div>
      <label><span>Email</span><input name="email" type="email" placeholder="tu@email.com" required /></label>
      <label><span>¿Qué necesitás?</span><textarea name="message" rows={4} placeholder="Contanos un poco sobre tu negocio y qué te gustaría mejorar..." required /></label>
      <div className="form-bottom">
        <span>Se abrirá WhatsApp con tu consulta lista para enviar.</span>
        <button className="button button--ink" type="submit">Enviar por WhatsApp <WhatsappIcon size={16} /></button>
      </div>
    </form>
  );
}
