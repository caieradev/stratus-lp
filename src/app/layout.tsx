import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { FaBars } from 'react-icons/fa'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stratus Soluções Digitais",
  description: "Empresa de desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="flex justify-between my-7 px-5">
            <Image
              src="/images/stratus-800.png"
              alt="Next.js logo"
              width={180}
              height={36}
            />
            <FaBars className="h-9 w-9 text-primary md:hidden" />
          </div>
        </header>
        {children}
        <footer className="flex justify-center">
          <div className="w-5/6 flex flex-col items-center justify-center">
            <Image
              className="mb-12"
              src="/images/stratus-800.png"
              alt="Next.js logo"
              width={250}
              height={50}
              layout="responsive"
              />
            <p className="text-primary font-bold text-lg">NAVEGAÇÃO</p>
            <ul className="flex flex-col items-center justify-center mb-12">
              <li className="mb-1"><a href="#Home">Home</a></li>
              <li className="mb-1"><a href="#Services">Serviços</a></li>
              <li className="mb-1"><a href="#Home">Sobre nós</a></li>
              <li className="mb-1"><a href="#Home">Clientes</a></li>
            </ul>
            <p className="text-primary font-bold text-lg">CONTATO</p>
            <ul className="flex flex-col items-center justify-center mb-12">
              <li className="mb-1">Rua Felicíssimo de Azevedo, 182 - 502</li>
              <li className="mb-1">Porto Alegre - RS - Brasil</li>
              <li className="mb-1">CEP: 90540-130</li>
            </ul>
            <a className="flex align-center justify-center" href="https://wa.me/5551996695235" target="_blank">
              <Image
                className="me-2"
                src="/images/whatsapp.png"
                alt="Next.js logo"
                width={25}
                height={25}
              />
              <p className="text-primary text-xl">+55 (51) <b>99669 5235</b></p>
            </a>
            <hr className="w-full border-t-2 border-secondary mx-auto my-8" />
            <div className="flex justify-between w-1/2 mb-12">
              <a href="" target="_blank">
                <Image
                  className="me-2"
                  src="/images/instagram-secondary.png"
                  alt="Next.js logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="" target="_blank">
                <Image
                  className="me-2"
                  src="/images/facebook-secondary.png"
                  alt="Next.js logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="" target="_blank">
                <Image
                  className="me-2"
                  src="/images/linkedin-secondary.png"
                  alt="Next.js logo"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <p className="mb-14">Ⓒ2024 Stratus Soluções Digitais</p>
          </div>

        </footer>
      </body>
    </html>
  );
}
