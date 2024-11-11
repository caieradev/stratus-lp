import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";
import Card from "@/components/Card";
import { CardsContent } from "@/content/CardsContent";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <div className="relative w-full flex flex-col items-center z-10 pt-16" id="Home">
          <Image
            className="w-[90%]"
            src="/images/image1.png"
            alt="Next.js Logo"
            width={521}
            height={654}
          />
          <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-white text-left">
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
            <p className="mb-8 text-lg text-secondary">Soluções sob medida para automatizar seus processos, integrar sistemas e elevar a segurança tecnológica do seu negócio</p>
          </div>
          <WhatsappButton className="z-10 mb-16"/>
        </div>
      </main>
      <section className="flex flex-col items-center" id="Services">
        <p className="text-black text-4xl w-5/6 text-center font-bold mt-24 mb-12">Impacto real para otimizar e transofrmar o seu negócio</p>
        {
          CardsContent.map((card, index) => (
            <Card
              key={index}
              iconPath={card.iconPath}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))
        } 
      </section>

      <section id="About" className="relative">
        <div className="relative w-full flex flex-col items-center z-10 pt-16">
          <Image
            className="w-[90%]"
            src="/images/image2.png"
            alt="Next.js Logo"
            width={521}
            height={654}
          />

        </div>
        <div style={{backgroundColor: '#4113CB'}} className="relative w-full h-fit -mt-[100px] overflow-hidden z-0 flex flex-col items-center">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="/images/clouds.png"
            alt="Background Image"
            layout="fill"
          />
          <div className="h-full flex flex-col items-center justify-center w-5/6">
            <p 
              style={{ fontFamily: 'stoner-extra-bold', fontWeight: 300 }} 
              className="text-secondary text-sm mt-40 mb-5 text-bold tracking-widest"
            >
              CONHECA UM POUCO
            </p>
            <p className="mb-5 text-5xl text-white font-bold">SOBRE NÓS</p>
            <p className="mb-8 text-lg text-center text-secondary">Construímos mais do que software, construímos confiança. Com mais de cinco anos de atuação no mercado nacional e internacional, nossa especialidade é fornecer desenvolvimentos sólidos, consultoria estratégica, integrações eficientes e tudo isso como muita segurança e agilidade. Estamos sempre prontos para atender a necessidade de nossos clientes.</p>
          </div>
          <WhatsappButton className="z-10 mb-16"/>
        </div>
      </section>
      <div className="w-full flex flex-col items-center justify-between pt-12">
        <Image
          className="w-5/6"
          src="/images/roadmap-mobile.svg"
          alt="Roadmap"
          width={120}
          height={120}
        />
      </div>
      <section id="Services">
        <div className="relative">
          <div className="bg-secondary mt-5 flex justify-center items-center flex-col">
            <div className="w-5/6">
              <p 
                style={{ fontFamily: 'stoner-extra-bold', fontWeight: 300 }} 
                className="text-center text-sm text-primary pt-12 mb-5 text-bold tracking-widest"
                >
                UM POUCO MAIS SOBRE
              </p>
              <p 
                style={{ fontFamily: 'stoner-heavy' }}
                className="mb-5 text-center text-5xl text-white">NOSSOS SERVIÇOS</p>
              <p className="text-lg text-center text-primary mb-96">
                Contamos com especialistas em arquitetura, infraestrutura e cloud para criar as melhores coluções e trabalhar em projetos de qualquer tamanho.
              </p>
            </div>
          </div>
          <ServicesCarousel className="-mt-80 mb-12"/>
        </div>
      </section>
      {/* <section>
        <p className="text-primary text-center font-bold text-5xl mt-20">
          Empresas já impactadas pelos nossos colaboradores
        </p>
      </section> */}
      <section className="w-full flex items-center justify-center">
        <div className="mb-16 bg-primary w-11/12 rounded-t-3xl rounded-bl-xl rounded-br-3xl flex flex-col items-center justify-center py-16">
          <p className="w-5/6 text-center font-light text-white text-4xl">
            Que tal trazer o seu projeto para a realidade?
          </p>
          <p className="text-xl text-secondary mt-16 text-center w-5/6">
            Deixe-nos o seu contato, sendo e-mail ou número de WhatsApp
          </p>

          <input type="text" placeholder="Email ou Telefone" className="placeholder-secondary text-secondaty px-5 w-5/6 h-12 rounded-b-2xl rounded-tl-2xl mt-12"/>

          <a href="#" className="mt-4 bg-white flex items-center p-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
            <p className="text-primary text-base">SOLICITAR CONTATO</p>
          </a>
        </div>
      </section>
    </div>
  );
}
