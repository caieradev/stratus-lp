'use client';

import { MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const whatsappUrl = buildWhatsAppUrl(t.whatsapp.defaultMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[9999] bg-[#25D366] hover:bg-[#128C7E] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="absolute right-full mr-3 sm:mr-4 bg-white text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm sm:text-base">
        {t.whatsapp.label}
      </span>
    </a>
  );
};

export default WhatsAppButton; 
