export const WHATSAPP_PHONE = "5551996695235";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
