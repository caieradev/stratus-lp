import type { Metadata, Viewport } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    "A Stratus entrega soluções rápidas e confiáveis em backend, integrações, automações e consultorias, além de landing pages. Projetamos sistemas escaláveis com tecnologia de ponta e foco total em performance.",
  keywords:
    "landing page, desenvolvimento backend, integrações de sistemas, automações inteligentes, consultoria em tecnologia, projetos com IA, sistemas legados, soluções digitais sob medida",
  authors: [{ name: "Stratus Soluções Digitais" }],
  creator: "Stratus Soluções Digitais",
  publisher: "Stratus Soluções Digitais",
  openGraph: {
    title: "Stratus | Soluções Digitais",
    description:
      "A Stratus entrega soluções rápidas e confiáveis em backend, integrações, automações e consultorias, além de landing pages. Projetamos sistemas escaláveis com tecnologia de ponta e foco total em performance.",
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
  twitter: {
    card: "summary_large_image",
    site: "@stratus_tech",
    creator: "@stratus_tech",
    images: [
      {
        url: "./stratus.svg",
        width: 4320,
        height: 896,
        alt: "Stratus | Soluções Digitais",
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
  // manifest: "/site.webmanifest",
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
      // "en-US": "https://stratus.dev.br/en",
      "pt-BR": "https://stratus.dev.br",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stratus | Soluções Digitais - Backend, Integrações, Automações</title>
        <meta name="description" content="A Stratus entrega soluções rápidas e confiáveis em backend, integrações, automações e consultorias, além de landing pages. Projetamos sistemas escaláveis com tecnologia de ponta e foco total em performance." />
        <meta name="author" content="Stratus" />
        <meta name="keywords" content="landing page, desenvolvimento backend, integrações de sistemas, automações inteligentes, consultoria em tecnologia, projetos com IA, sistemas legados, soluções digitais sob medida" />

        <meta property="og:title" content="Stratus | Soluções Digitais" />
        <meta property="og:description" content="A Stratus entrega soluções rápidas e confiáveis em backend, integrações, automações e consultorias, além de landing pages. Projetamos sistemas escaláveis com tecnologia de ponta e foco total em performance." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stratus_tech" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
