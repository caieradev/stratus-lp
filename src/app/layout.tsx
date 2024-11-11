"use client";

import "./globals.css";
import Image from "next/image";
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [arrowColor, setArrowColor] = useState("bg-primary");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      if (menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }

      if (currentScrollY <= 0) {
        setIsVisible(true);
        setArrowColor("bg-primary");
      } else if (currentScrollY > lastScrollY && currentScrollY < maxScrollY - 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < maxScrollY - 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuOpen) {
        const navElement = document.querySelector("nav");
        const buttonElement = document.querySelector("button");
        if (navElement && !navElement.contains(event.target as Node) && buttonElement && !buttonElement.contains(event.target as Node)) {
          setMenuOpen(false);
          document.body.style.overflow = "auto";
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <body className="w-full overflow-x-hidden">
        <header
          className={`z-50 fixed top-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out ${
            isVisible ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center my-3 px-5">
            <Image
              src="/images/stratus-800.png"
              alt="Stratus logo"
              width={180}
              height={36}
            />
            <button onClick={toggleMenu} className="md:hidden">
              {menuOpen ? (
                <FaTimes className="h-7 w-7 text-primary" />
              ) : (
                <FaBars className="h-7 w-7 text-primary" />
              )}
            </button>
          </div>
          <nav
            className={`absolute left-0 w-full bg-white z-40 flex flex-col items-center justify-center transition-max-height duration-300 ease-in-out md:hidden overflow-hidden ${
              menuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="text-center mt-8 w-full">
              <li className="mb-5 text-2xl">
                <a href="#Home" onClick={toggleMenu}>Home</a>
              </li>
              <li className="mb-5 text-2xl">
                <a href="#Services" onClick={toggleMenu}>Serviços</a>
              </li>
              <li className="mb-5 text-2xl">
                <a href="#About" onClick={toggleMenu}>Sobre nós</a>
              </li>
              {/* <li className="mb-5 text-2xl">
                <a href="#Clients" onClick={toggleMenu}>Clientes</a>
              </li> */}
            </ul>
          </nav>
        </header>

        <main className={`w-full overflow-x-hidden ${menuOpen ? "overflow-hidden" : "overflow-auto"}`}>{children}</main>
        <footer className="flex justify-center mt-10 w-full">
          <div className="w-full max-w-5xl flex flex-col items-center justify-center">
            <Image
              className="mb-12"
              src="/images/stratus-800.png"
              alt="Stratus logo"
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
                <a href="#About">Sobre nós</a>
              </li>
              {/* <li className="mb-1">
                <a href="#Clients">Clientes</a>
              </li> */}
            </ul>
            <p className="text-primary font-bold text-lg">CONTATO</p>
            <ul className="flex flex-col items-center justify-center mb-12">
              <li className="mb-1">Rua General Couto de Magalhães, 1876 - 501</li>
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
                alt="Whatsapp logo"
                width={25}
                height={25}
              />
              <p className="text-primary text-xl">
                +55 (51) <b>99669 5235</b>
              </p>
            </a>
            <hr className="w-full border-t-2 border-secondary mx-auto my-8" />
            <div className="flex justify-between w-1/2 mb-12">
              <a href="https://instagram.com/stratus.dev.br" target="_blank">
                <Image
                  className="me-2"
                  src="/images/instagram-secondary.png"
                  alt="Instagram logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="" target="_blank">
                <Image
                  className="me-2"
                  src="/images/facebook-secondary.png"
                  alt="Facebook logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="" target="_blank">
                <Image
                  className="me-2"
                  src="/images/linkedin-secondary.png"
                  alt="LinkedIn logo"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <p className="mb-14">Ⓒ2024 Stratus Soluções Digitais</p>
          </div>
        </footer>
        <a href="#Home" className={`z-50 fixed bottom-5 right-5 ${arrowColor} text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300`} onClick={() => setArrowColor("bg-secondary")}>
          <FaArrowUp className="h-6 w-6" />
        </a>
      </body>
    </html>
  );
}
