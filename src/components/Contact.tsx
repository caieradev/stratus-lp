'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import axios from "axios";
import Newsletter from "./Newsletter";
import { useTranslation } from "@/lib/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Contact = () => {
  const { t } = useTranslation();
  const scheduleUrl = buildWhatsAppUrl(t.whatsapp.scheduleMessage);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios.post('https://formspree.io/f/xyzedwwo', formData)
      .then(() => {
        toast({
          title: t.contact.form.successTitle,
          description: t.contact.form.successDescription,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(error => {
        toast({
          title: t.contact.form.errorTitle,
          description: t.contact.form.errorDescription,
          variant: "destructive",
        });
        setIsSubmitting(false);
        console.error(error);
      });

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.contact.form.successTitle,
        description: t.contact.form.successDescription,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contato" className="section bg-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-12 mt-16">
          <h2 className="mb-4">
            {t.contact.heading} <span className="gradient-text">{t.contact.headingGradient}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">{t.contact.info.title}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">{t.contact.info.email}</p>
                    <p className="font-medium">contato@stratus.dev.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">{t.contact.info.phone}</p>
                    <p className="font-medium">+55 (51) 99669-5235</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">{t.contact.info.location}</p>
                    <p className="font-medium">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.contact.schedule.title}</h3>
              </div>

              <p className="text-foreground/80 mb-6">
                {t.contact.schedule.description}
              </p>

              <Button
                className="w-full bg-primary hover:bg-primary-hover"
                onClick={() => window.open(scheduleUrl, "_blank")}
              >
                {t.contact.schedule.button}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">{t.contact.form.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Contact;
