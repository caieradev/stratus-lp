"use client";

import "./globals.css";
import Image from "next/image";
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    if (currentScrollY <= 0) {
      // Manter o header visível quando no topo da página
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY < maxScrollY - 50) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY && currentScrollY < maxScrollY - 50) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <html lang="en">
      <body>
        <header
          className={`z-50 fixed top-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out ${
            isVisible ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
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
        <main className="pt-[100px]">{children}</main>
        <footer className="flex justify-center mt-10">
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
              <li className="mb-1">
                <a href="#Home">Home</a>
              </li>
              <li className="mb-1">
                <a href="#Services">Serviços</a>
              </li>
              <li className="mb-1">
                <a href="#Home">Sobre nós</a>
              </li>
              <li className="mb-1">
                <a href="#Home">Clientes</a>
              </li>
            </ul>
            <p className="text-primary font-bold text-lg">CONTATO</p>
            <ul className="flex flex-col items-center justify-center mb-12">
              <li className="mb-1">Rua Felicíssimo de Azevedo, 182 - 502</li>
              <li className="mb-1">Porto Alegre - RS - Brasil</li>
              <li className="mb-1">CEP: 90540-130</li>
            </ul>
            <a
              className="flex align-center justify-center"
              href="https://wa.me/5551996695235"
              target="_blank"
            >
              <Image
                className="me-2"
                src="/images/whatsapp.png"
                alt="Next.js logo"
                width={25}
                height={25}
              />
              <p className="text-primary text-xl">
                +55 (51) <b>99669 5235</b>
              </p>
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
