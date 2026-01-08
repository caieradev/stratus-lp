import { Metadata } from "next";
import { getTranslation } from "./i18n-dictionary";
import type { Locale } from "./i18n-types";

export function generateMetadata(locale: Locale = "pt-BR"): Metadata {
  const t = getTranslation(locale);

  return {
    metadataBase: new URL("https://stratus.dev.br"),
    applicationName: "Stratus",
    title: {
      default: t.metadata.title,
      template: `%s | Stratus`,
    },
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    authors: [{ name: "Stratus Soluções Digitais" }],
    creator: "Stratus Soluções Digitais",
    publisher: "Stratus Soluções Digitais",
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      type: "website",
      url: "https://stratus.dev.br",
      siteName: "Stratus",
      locale: locale,
      alternateLocale: locale === "pt-BR" ? "en-US" : "pt-BR",
      images: [
        {
          url: "./stratus.svg",
          width: 4320,
          height: 896,
          alt: t.metadata.title,
        },
      ],
    },
    icons: {
      icon: "/icone.svg",
      shortcut: "/icone.svg",
      apple: "/icone.svg.png",
      other: [
        {
          rel: "icon",
          url: "/icone.svg",
        },
      ],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Stratus",
      startupImage: [
        {
          url: "/stratus.svg",
          media: "(device-width: 375px) and (-webkit-device-pixel-ratio: 2)",
        },
        {
          url: "/stratus.svg",
          media: "(device-width: 375px) and (-webkit-device-pixel-ratio: 3)"
        },
      ],
    },
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: "https://stratus.dev.br",
      languages: {
        "pt-BR": "https://stratus.dev.br",
        "en-US": "https://stratus.dev.br",
      },
    },
  };
}
