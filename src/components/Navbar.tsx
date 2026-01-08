'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
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
          <Image 
            src="/stratus.svg" 
            alt="Stratus Logo" 
            className="h-10"
            width={150}
            height={150}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-foreground/80 hover:text-primary transition-colors">
            {t.nav.services}
          </a>
          <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            {t.nav.faq}
          </a>
          <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button onClick={() => window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank")}>
            {t.nav.scheduleButton}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" aria-label={t.nav.menuLabel} onClick={toggleMenu}>
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
              {t.nav.services}
            </a>
            <a
              href="#sobre"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.nav.about}
            </a>
            <a
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.nav.faq}
            </a>
            <a
              href="#contato"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.nav.contact}
            </a>
            <div className="flex gap-3 mt-2">
              <LanguageSwitcher />
              <Button
                className="flex-1"
                onClick={() => {
                  window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank");
                  toggleMenu();
                }}
              >
                {t.nav.scheduleButton}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;