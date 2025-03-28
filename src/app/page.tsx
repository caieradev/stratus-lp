import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import ArrowDown from "@/components/ArrowDown";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="relative">
        <Hero />
        <ArrowDown />
      </div>
      
      <Services />
      <AboutUs />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
