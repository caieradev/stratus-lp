'use client';

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="section bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 mt-16">
              <span className="text-xl text-secondary">{t.about.badge}</span>
            </div>

            <h2 className="mb-6">
              {t.about.heading} <span className="gradient-text">{t.about.headingGradient}</span>
            </h2>

            <p className="text-foreground/80 mb-8">
              {t.about.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t.about.mission.title}</h4>
                  <p className="text-foreground/70">
                    {t.about.mission.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t.about.vision.title}</h4>
                  <p className="text-foreground/70">
                    {t.about.vision.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t.about.values.title}</h4>
                  <p className="text-foreground/70">
                    {t.about.values.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-xl overflow-hidden">
              <Image
                src="/notebook.jpeg"
                alt={t.about.imageAlt}
                className="w-full h-full object-cover rounded-lg"
                width={500}
                height={500}
              />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent ">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center rounded-lg p-4">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">100%</div>
                    <div className="text-sm text-foreground/70">{t.about.stats.projects}</div>
                  </div>
                  <div className="text-center rounded-lg p-4">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">10+</div>
                    <div className="text-sm text-foreground/70">{t.about.stats.clients}</div>
                  </div>
                  <div className="text-center rounded-lg p-4">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-foreground/70">{t.about.stats.support}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;