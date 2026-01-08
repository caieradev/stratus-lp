'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function DynamicMetadata() {
  const { t, locale } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = t.metadata.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.metadata.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t.metadata.keywords);
    }

    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.metadata.title);
    }

    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.metadata.description);
    }

    // Update html lang attribute
    document.documentElement.lang = locale;

    // Update og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', locale === 'pt-BR' ? 'pt_BR' : 'en_US');
    }
  }, [t, locale]);

  return null;
}
