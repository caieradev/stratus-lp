import type { Metadata, Viewport } from "next";
import React from "react";
import localFont from 'next/font/local';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import DynamicMetadata from "@/components/DynamicMetadata";
import { I18nProvider } from "@/lib/i18n";
import { getInitialLocale } from "@/lib/i18n.server";

const stoner = localFont({
  src: [
    {
      path: '../../public/fonts/Stoner Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Stoner Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Stoner Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Stoner Heavy.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Stoner Extra Bold.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-stoner',
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://stratus.dev.br"),
  applicationName: "Stratus",
  title: {
    default: "Stratus | Soluções Digitais",
    template: "%s | Stratus",
  },
  description:
    "A Stratus entrega soluções completas, desde interfaces modernas e responsivas até backends robustos. Especialistas em consultorias e desenvolvimento de Inteligência Artificial (IA), frontend, backend, integrações e automações para criar experiências digitais excepcionais.",
  keywords:
    "IA, inteligência artificial, landing page, landing pages, site, website, desenvolvimento web, frontend, react, next.js, interfaces responsivas, UI/UX, desenvolvimento backend, integrações de sistemas, automações inteligentes, consultoria em tecnologia, projetos com IA, sistemas legados, soluções digitais sob medida",
  authors: [{ name: "Stratus Soluções Digitais" }],
  creator: "Stratus Soluções Digitais",
  publisher: "Stratus Soluções Digitais",
  openGraph: {
    title: "Stratus | Soluções Digitais",
    description:
      "A Stratus entrega soluções completas, desde interfaces modernas e responsivas até backends robustos. Especialistas em consultorias e desenvolvimento de Inteligência Artificial (IA), frontend, backend, integrações e automações para criar experiências digitais excepcionais.",
    type: "website",
    url: "https://stratus.dev.br",
    siteName: "Stratus",
    images: [
      {
        url: "./stratus.svg",
        width: 4320,
        height: 896,
        alt: "Stratus | Soluções Digitais",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@stratus.dev.br",
  //   creator: "@stratus.dev.br",
  //   images: [
  //     {
  //       url: "./stratus.svg",
  //       width: 4320,
  //       height: 896,
  //       alt: "Stratus | Soluções Digitais",
  //     },
  //   ],
  // },
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
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = await getInitialLocale();

  return (
    <html lang={initialLocale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Stratus" />
        <title>Stratus Soluçoes Digitais</title>
        <meta name="description" content="A Stratus entrega soluções completas, desde interfaces modernas e responsivas até backends robustos. Especialistas em consultorias e desenvolvimento de Inteligência Artificial (IA), frontend, backend, integrações e automações para criar experiências digitais excepcionais." />
        <meta name="author" content="Stratus Soluções Digitais" />
        <meta name="keywords" content="IA, inteligência artificial, landing page, landing pages, site, website, desenvolvimento web, frontend, react, next.js, interfaces responsivas, UI/UX, desenvolvimento backend, integrações de sistemas, automações inteligentes, consultoria em tecnologia, projetos com IA, sistemas legados, soluções digitais sob medida" />
        <meta name="creator" content="Stratus Soluções Digitais" />
        <meta name="publisher" content="Stratus Soluções Digitais" />
        <meta name="application-name" content="Stratus" />

        {/* Open Graph */}
        <meta property="og:title" content="Stratus Soluçoes Digitais" />
        <meta property="og:description" content="A Stratus entrega soluções completas, desde interfaces modernas e responsivas até backends robustos. Especialistas em consultorias e desenvolvimento de Inteligência Artificial (IA), frontend, backend, integrações e automações para criar experiências digitais excepcionais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratus.dev.br" />
        <meta property="og:site_name" content="Stratus" />
        <meta property="og:image" content="./stratus.svg" />
        <meta property="og:image:width" content="4320" />
        <meta property="og:image:height" content="896" />
        <meta property="og:image:alt" content="Stratus Soluçoes Digitais" />
        <meta
          property="og:locale"
          content={initialLocale === "pt-BR" ? "pt_BR" : "en_US"}
        />

        {/* Icons */}
        <link rel="icon" href="/icone.svg" />
        <link rel="shortcut icon" href="/icone.svg" />
        <link rel="apple-touch-icon" href="/icone.svg" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes,address=yes,email=yes" />
        <meta name="robots" content="index,follow" />

        {/* Canonical and Language */}
        <link rel="canonical" href="https://stratus.dev.br" />
        <link rel="alternate" hrefLang="pt-BR" href="https://stratus.dev.br" />
        <link rel="alternate" hrefLang="en-US" href="https://stratus.dev.br" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stratus Soluções Digitais",
              "url": "https://stratus.dev.br",
              "logo": "https://stratus.dev.br/stratus.svg",
              "description": "A Stratus entrega soluções completas, desde interfaces modernas e responsivas até backends robustos. Especialistas em consultorias e desenvolvimento de Inteligência Artificial (IA), frontend, backend, integrações e automações para criar experiências digitais excepcionais.",
              "sameAs": [
                "https://www.instagram.com/stratus.dev.br"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "BR"
              }
            })
          }}
        />
      </head>
      <body className={`${stoner.variable} font-sans antialiased`}>
        <I18nProvider initialLocale={initialLocale}>
          <DynamicMetadata />
          <Toaster />
          {children}
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </I18nProvider>
      </body>
    </html>
  );
}
