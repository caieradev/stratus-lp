import Image from "next/image";

export default function WhatsappButton({ className = "" }) {
  return (
    <a target="_blank" href="https://wa.me/5551996695235" className={`bg-white flex items-center p-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl ${className}`}>
        <Image 
            className="me-4"
            src="/images/whatsapp.png"
            alt="whatsapp icon"
            width={40}
            height={40}
        />
        <p className="text-primary font-bold text-lg">ENTRE EM CONTATO</p>
        <Image 
            src="/images/arrow.png"
            alt="arrow icon"
            width={40}
            height={40}
        />
    </a>
  );
}