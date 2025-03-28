'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import axios from "axios";

const Contact = () => {
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

    axios.post('https://formsubmit.co/93677a9ebc7b3294f1a19350f6b8d8e5', formData)
      .then(response => {
        toast({
          title: "Mensagem enviada",
          description: "Entraremos em contato em breve!",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(error => {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve!",
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
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Estamos prontos para discutir seu projeto e como podemos ajudar a 
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="font-medium">contato@stratus.dev.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Telefone</p>
                    <p className="font-medium">+55 (51) 99669-5235</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Localização</p>
                    <p className="font-medium">Porto Alegre, RS - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Agende uma Reunião</h3>
              </div>
              
              <p className="text-foreground/80 mb-6">
                Prefere conversar diretamente? Agende uma reunião online 
                com nossa equipe para discutir seu projeto.
              </p>
              
              <Button 
                className="w-full bg-primary hover:bg-primary-hover"
                onClick={() => window.open("https://stratussoluesdigitais.zohobookings.com/#/4735832000000047014", "_blank")}
              >
                Agendar Reunião
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                  className="bg-white/5 border-white/10 focus:border-primary min-h-32"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;