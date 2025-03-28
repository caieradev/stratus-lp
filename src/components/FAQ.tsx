'use client';

import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@/components/ui/accordion";
  
const faqItems = [
{
    question: "Como a Stratus pode ajudar minha empresa?",
    answer: "A Stratus oferece soluções de backend, integrações e automações personalizadas para otimizar seus processos internos, melhorar a comunicação entre sistemas e aumentar a eficiência operacional. Nossos serviços são adaptados às necessidades específicas da sua empresa, independentemente do tamanho ou setor."
},
{
    question: "Quanto tempo leva para desenvolver uma solução personalizada?",
    answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Integrações simples podem levar algumas semanas, enquanto sistemas mais complexos podem exigir alguns meses. Trabalhamos com metodologias ágeis que permitem entregas incrementais, garantindo que você veja resultados ao longo do processo de desenvolvimento."
},
{
    question: "Vocês trabalham com sistemas legados?",
    answer: "Sim, temos ampla experiência na integração e modernização de sistemas legados. Entendemos os desafios de conectar tecnologias antigas com soluções modernas e desenvolvemos abordagens que preservam seu investimento enquanto implementam melhorias progressivas."
},
{
    question: "Como funciona o processo de consultoria?",
    answer: "Nossa consultoria começa com uma análise detalhada do seu cenário atual, identificando desafios e oportunidades. Em seguida, desenvolvemos um plano estratégico com recomendações técnicas e de negócios. Podemos atuar apenas como consultores ou também implementar as soluções recomendadas, conforme sua preferência."
},
{
    question: "A Stratus oferece suporte após a implementação?",
    answer: "Sim, oferecemos diferentes níveis de suporte pós-implementação, desde monitoramento e manutenção básica até suporte 24/7 para sistemas críticos. Nosso objetivo é garantir que as soluções implementadas continuem funcionando perfeitamente e evoluam conforme suas necessidades."
},
{
    question: "Como a Stratus implementa projetos com Inteligência Artificial?",
    answer: "Implementamos IA de forma prática e orientada a resultados, desde automações inteligentes até análise de dados e previsões. Focamos em casos de uso que trazem valor real para o negócio, integrando tecnologias de IA com seus sistemas existentes e garantindo que as soluções sejam escaláveis e sustentáveis."
}
];

const FAQ = () => {
return (
    <section id="faq" className="section bg-gradient-dark relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    
    <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
        <h2 className="mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Tire suas dúvidas sobre como podemos ajudar seu negócio com soluções 
            tecnológicas personalizadas.
        </p>
        </div>

        <div className="glass-card rounded-xl p-1">
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
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
            Não encontrou o que procurava? Entre em contato diretamente.
        </p>
        <a 
            href="#contato"
            className="text-primary hover:text-primary-light transition-colors"
        >
            Fale Conosco
        </a>
        </div>
    </div>
    </section>
);
};

export default FAQ;