'use client';

import React from "react";
import { Code, Database, Link, Settings, FileSearch, ArrowRight, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";

const Services = () => {
  const { t } = useTranslation();

  const serviceIcons = [Bot, Code, Database, Link, Settings, FileSearch];

  return (
    <section id="servicos" className="section bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 mt-16">
            {t.services.heading} <span className="gradient-text">{t.services.headingGradient}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <Card key={index} className="bg-background border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4 p-2 rounded-lg inline-flex bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                  {serviceIcons[index] && (
                    <span aria-hidden="true">
                      {React.createElement(serviceIcons[index], {
                        className: "h-10 w-10 text-primary",
                      })}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/5 px-2 py-1 rounded-full text-foreground/60"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            {t.services.cta.text}
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            {t.services.cta.button}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
