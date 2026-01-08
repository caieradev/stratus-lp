'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "@/components/ui/accordion";
import { useTranslation } from "@/lib/i18n";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="section bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-12 mt-16">
          <h2 className="mb-4">
            {t.faq.heading} <span className="gradient-text">{t.faq.headingGradient}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        <div className="glass-card rounded-xl p-1">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 px-6 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            {t.faq.cta.text}
          </p>
          <a
            href="#contato"
            className="text-primary hover:text-primary-light transition-colors"
          >
            {t.faq.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;