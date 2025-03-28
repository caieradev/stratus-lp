'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 bg-gradient-dark overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container-narrow relative z-10 px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-secondary">Soluções tecnológicas sob medida</span>
          </div>
          
          <h1 className="font-bold leading-tight max-w-4xl">
            <span className="block">Transforme seu negócio com</span>
            <span className="gradient-text">backend e integrações de alto desempenho</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            Soluções digitais ágeis e confiáveis para projetos de todos os tamanhos.
            Expertise técnica para impulsionar sua empresa com velocidade e inovação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              size="lg" 
              className="text-base gap-2 bg-primary hover:bg-primary-hover"
              onClick={() => window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank")}
            >
              Agendar uma Reunião
              <ArrowRight size={16} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base border-white/10 hover:bg-white/5"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>

        {/* Hero image or illustration */}
        <div className="mt-16 md:mt-24 relative">
          <div className="glass-card rounded-xl p-4 md:p-8 border-white/5 overflow-hidden">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src="./code.jpeg" 
                alt="Código de programação em um monitor" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm md:text-base font-medium text-secondary px-4 py-2">
                  <span className="bg-black/50 rounded-full px-4 py-2">Códigos otimizados e arquitetura sólida para o seu negócio crescer</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="absolute -left-4 -top-4 w-20 h-20 md:w-28 md:h-28 bg-secondary/50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;