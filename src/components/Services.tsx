'use client';

import { Code, Database, Link, Settings, FileSearch, BarChart3, Workflow, ArrowRight, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Inteligência Artificial",
    description: "Desenvolvemos soluções com IA para automatizar processos, analisar dados e criar experiências inteligentes",
    keywords: ["IA", "inteligência artificial", "machine learning", "automação inteligente", "análise de dados"]
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Desenvolvimento Frontend",
    description: "Criamos interfaces modernas e responsivas, para impulsionar sua presença digital com tecnologias de ponta",
    keywords: ["landing page", "website", "UI/UX", "interfaces responsivas", "dashboards"]
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Backend sob Medida",
    description: "Desenvolvimento personalizado de servidores, APIs e serviços para atender necessidades específicas",
    keywords: ["desenvolvimento backend", "cloud computing", "sistemas escaláveis", "performance", "API Gateway"]
  },
  {
    icon: <Link className="h-10 w-10 text-primary" />,
    title: "Integrações e APIs",
    description: "Conecte seus sistemas e aplicações com soluções de integração eficientes e seguras",
    keywords: ["integrações de sistemas", "API REST", "webhooks", "microserviços"]
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Automações de Processos",
    description: "Elimine tarefas manuais e aumente a eficiência com processos automatizados e inteligentes",
    keywords: ["automações inteligentes", "RPA", "workflow automation", "integração contínua"]
  },
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    title: "Consultorias Técnicas",
    description: "Análise, diagnóstico e planejamento de soluções tecnológicas alinhadas ao seu negócio",
    keywords: ["consultoria em tecnologia", "levantamento de requisitos", "planejamento técnico", "modernização"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 mt-16">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Desenvolvemos soluções tecnológicas completas, focadas em performance, 
            escalabilidade e valor para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4 p-2 rounded-lg inline-flex bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                  {service.icon}
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
            Precisa de algo específico? Entre em contato para conversarmos sobre suas necessidades.
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            Fale Conosco
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;