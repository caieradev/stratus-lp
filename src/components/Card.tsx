import Image from "next/image";

interface CardProps {
  className?: string;
  iconPath: string;
  alt: string;
  title: string;
  description: string;
}

export default function Card({ className = "", iconPath, alt, title, description } : CardProps) {
  return (
    <div className={`flex flex-col items-center w-5/6 mb-8 ${className}`}>
        <div 
        style={{ boxShadow: "-4px 12px 22px 0 rgba(0, 0, 0, 0.21)"}} 
        className="bg-secondary h-32 w-32 rounded-full flex items-center justify-center mb-6">
          <Image
            src={iconPath}
            alt={alt}
            width={60}
            height={60}
          />
        </div>
        <p className="text-center font-bold text-black">{title}</p>
        <p className="text-center">{description}</p>
    </div>
  );
}