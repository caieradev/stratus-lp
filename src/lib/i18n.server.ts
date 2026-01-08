import { cookies, headers } from "next/headers";
import type { Locale } from "./i18n-types";

const LOCALE_COOKIE = "locale";

function normalizeLocale(value: string | undefined): Locale | null {
  if (value === "pt-BR" || value === "en-US") {
    return value;
  }
  return null;
}

function getLocaleFromAcceptLanguage(headerValue: string): Locale {
  const lower = headerValue.toLowerCase();
  if (lower.includes("pt-br") || lower.startsWith("pt")) {
    return "pt-BR";
  }
  return "en-US";
}

export async function getInitialLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = normalizeLocale(cookieStore.get(LOCALE_COOKIE)?.value);
  if (cookieLocale) {
    return cookieLocale;
  }

  const headerStore = await headers();
  const country = headerStore.get("x-vercel-ip-country");
  if (country) {
    return country.toUpperCase() === "BR" ? "pt-BR" : "en-US";
  }

  const acceptLanguage = headerStore.get("accept-language") ?? "";
  return getLocaleFromAcceptLanguage(acceptLanguage);
}
