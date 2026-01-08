'use client';

import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "./i18n-types";
import { translations } from "./i18n-dictionary";

const LOCALE_COOKIE = "locale";

type I18nContextValue = {
  t: (typeof translations)[Locale];
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getStoredLocale(): Locale | null {
  const stored = localStorage.getItem(LOCALE_COOKIE);
  if (stored === "pt-BR" || stored === "en-US") {
    return stored;
  }
  return null;
}

function persistLocale(locale: Locale) {
  localStorage.setItem(LOCALE_COOKIE, locale);
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${maxAge}; samesite=lax`;
}

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const storedLocale = getStoredLocale();
    if (storedLocale && storedLocale !== locale) {
      setLocaleState(storedLocale);
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    persistLocale(newLocale);
  };

  const value = useMemo(
    () => ({
      t: translations[locale],
      locale,
      setLocale,
    }),
    [locale]
  );

  return createElement(I18nContext.Provider, { value }, children);
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      t: translations["pt-BR"],
      locale: "pt-BR" as Locale,
      setLocale: () => {},
    };
  }

  return context;
}
