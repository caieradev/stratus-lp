'use client';

import { ChevronDown } from "lucide-react";

const ArrowDown = () => {
  const scrollToContent = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce hover:cursor-pointer">
      <button
        onClick={scrollToContent}
        className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-6 w-6 text-foreground/80" />
      </button>
    </div>
  );
};

export default ArrowDown;