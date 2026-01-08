import ptBR from "@/../public/locales/pt-BR/common.json";
import enUS from "@/../public/locales/en-US/common.json";
import type { Locale } from "./i18n-types";

export const translations: Record<Locale, typeof ptBR> = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}
