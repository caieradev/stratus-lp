'use client';

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5551996695235";
  const message = "Olá! Vim pelo site e gostaria de conversar com a Stratus.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[9999] bg-[#25D366] hover:bg-[#128C7E] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="absolute right-full mr-3 sm:mr-4 bg-white text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm sm:text-base">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton; 