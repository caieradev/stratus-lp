'use client';

import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/70 border-t border-white/5">
      <div className="container-narrow py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/stratus.svg"
                alt="Stratus Logo"
                className="h-8"
                width={100}
                height={100}
              />
            </div>

            <p className="text-foreground/70 mb-6 max-w-md">
              {t.footer.description}
            </p>

            <div className="flex space-x-4">
              <a
                href="https://stratus.dev.br"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.footer.services}
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.footer.faq}
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                {t.footer.location}
              </li>
              <li>
                <a
                  href="mailto:contato@stratus.dev.br"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  contato@stratus.dev.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/551199999999"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +55 (51) 99669-5235
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} {t.footer.rights}
          </p>

          <div className="flex space-x-6">
            <p className="text-sm text-foreground/60">
            CNPJ 54.788.580/0001-52
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;