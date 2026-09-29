const whatsappBase = "https://wa.me/543547656462";

export const whatsappMessage = (message: string) => `${whatsappBase}?text=${encodeURIComponent(message)}`;
