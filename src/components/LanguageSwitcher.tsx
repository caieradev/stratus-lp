'use client';

import { useTranslation } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
      aria-label="Change language"
    >
      <Globe size={16} />
      <span className="hidden md:inline">{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
