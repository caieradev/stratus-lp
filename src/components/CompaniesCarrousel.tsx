'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { url: '/images/carousel-consultoria.webp', caption: 'Consultoria' },
  { url: '/images/carousel-dev.webp', caption: 'Desenvolvimento' },
  { url: '/images/carousel-demanda.webp', caption: 'Manutenção' }
];

export default function CompaniesCarousel({className = ""}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full flex justify-center items-center relative overflow-visible">
            <div style={{ boxShadow: "-4px 12px 22px 0 rgba(0, 0, 0, 0.21)" }} className="w-5/6 mx-auto rounded-3xl overflow-visible"
            >
              <Image src={image.url} alt={`Slide ${index + 1}`}
                className="object-cover rounded-3xl shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};