'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Placeholder client logos
const clientLogos = [
  { name: "ADP", logo: "/empresas/adp.svg", url: "https://www.adp.com/" },
  { name: "Unimed Brasil", logo: "/empresas/unimed.png", url: "https://unimed.coop.br/" },
  { name: "TK Elevator", logo: "/empresas/tke.webp", url: "https://tkelevator.com/" },
  { name: "Apps4Business", logo: "/empresas/apps4business.webp", url: "https://apps4business.com.br/" },
  { name: "Athena Saúde", logo: "/empresas/athena.svg", url: "https://athenasaude.com.br/" },
  { name: "Deak", logo: "/empresas/excel.png", url: "https://https://www.excelsuprimentos.com/" },
  { name: "Deak", logo: "/empresas/deak.webp", url: "https://deak.com.br/" },
  { name: "Nossa Saúde", logo: "/empresas/nossa-saude.svg", url: "https://www.nossasaude.com.br/" },
  { name: "MDLife", logo: "/empresas/mdlife.webp", url: "https://www.instagram.com/mdlife.oficial/" },
  { name: "Von Saltiel", logo: "/empresas/von-saltiel.png", url: "https://vonsaltiel.com.br/" },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Determine how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, clientLogos.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section id="clientes" className="section bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12 mt-16">
          <h2 className="mb-4">
            Empresas que foram <span className="gradient-text">Impactadas por Nós</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Nossos colaboradores ja impactaram empresas de diversos setores, entregando soluções 
            tecnológicas que impulsionam seus negócios.
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4"
                >
                  <a
                    href={client.url}
                    target="_blank"
                    className="glass-card h-32 rounded-lg flex items-center justify-center p-6 border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full filter transition-all duration-300"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            aria-label="Slide anterior"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-white/10 hover:bg-white/10 z-10"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            aria-label="Slide seguinte"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-white/10 hover:bg-white/10 z-10"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Pronto para se juntar a essas empresas?
          </p>
          <Button 
            onClick={() => window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank")}
            className="bg-primary hover:bg-primary-hover"
          >
            Agende uma Reunião
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;