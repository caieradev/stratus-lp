import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full flex flex-col items-center z-10" id="Home">
          <Image
            className="w-[90%]"
            src="/images/image1.png"
            alt="Next.js Logo"
            width={521}
            height={654}
          />
          <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 text-white text-left">
            <p style={{ fontFamily: 'stoner-light', fontWeight: 300 }} className="text-5xl">
              IDEIAS &<br/>REALIDADE
            </p>
          </div>

        </div>
        <div style={{backgroundColor: '#4113CB'}} className="relative w-full h-fit -mt-[300px] overflow-hidden z-0 flex flex-col items-center">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="/images/clouds.png"
            alt="Background Image"
            layout="fill"
          />
          <div className="h-full flex flex-col items-center justify-center w-5/6">
            <p className="mt-96 mb-5 text-5xl text-white">Somos a ponte para o seu <b>sucesso</b></p>
            <p className="mb-8 text-lg">Soluções sob medida para automatizar seus processos, integrar sistemas e elevar a segurança tecnológica do seu negócio</p>
          </div>
          <WhatsappButton className="z-10 mb-16"/>
        </div>
      </main>
    </div>
  );
}
