'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const Newsletter = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.newsletter.notReadyTitle,
        description: t.newsletter.notReadyDescription,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-xl mt-8 p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t.newsletter.heading} <span className="gradient-text">{t.newsletter.headingGradient}</span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          {t.newsletter.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3 md:flex-row flex-col">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.placeholder}
            required
            className="bg-white/5 border-white/10 focus:border-primary"
          />
          <Button
            type="submit"
            className="bg-primary hover:bg-primary-hover flex-shrink-0"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              t.newsletter.submitting
            ) : (
              <>
                {t.newsletter.button}
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
        <p className="text-xs text-foreground/60 mt-3 text-center">
          {t.newsletter.disclaimer}
        </p>
      </form>
    </div>
  );
};

export default Newsletter;