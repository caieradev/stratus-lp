'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-narrow py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="./stratus.svg" 
            alt="Stratus Logo" 
            className="h-10"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-foreground/80 hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button className="hidden md:flex" onClick={() => window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank")}>
          Agendar Reunião
        </Button>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg">
          <nav className="container py-6 flex flex-col gap-4">
            <a 
              href="#servicos" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#sobre" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <a 
              href="#contato" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <Button 
              className="mt-2" 
              onClick={() => {
                window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank");
                toggleMenu();
              }}
            >
              Agendar Reunião
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;