"use client"

import {
  Carousel, CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import Image from "next/image";
import NextIcon from "@/public/next.svg";
import Autoplay from "embla-carousel-autoplay";
import {useState} from "react";

import slider1 from '@/public/slider/1.jpg';
import slider2 from '@/public/slider/2.jpg';
import slider3 from '@/public/slider/3.png';
import slider4 from '@/public/slider/4.png';
import slider5 from '@/public/slider/5.png';
import slider6 from '@/public/slider/6.png';

const Slider = () => {
  const [api, setApi] = useState<CarouselApi>();

  const slider = [
    {
      id: 1,
      img: slider1
    },
    {
      id: 2,
      img: slider2
    },
    {
      id: 3,
      img: slider3
    },
    {
      id: 4,
      img: slider4
    },
    {
      id: 5,
      img: slider5
    },
    {
      id: 6,
      img: slider6
    }
  ];

  return (
    <section className="lg:mt-14">
      <div className="flex items-center gap-x-6 justify-end">
        <button
          onClick={() => api?.scrollPrev()}
          className="-rotate-180"
        >
          <Image src={NextIcon} alt="icon" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
        >
          <Image src={NextIcon} alt="icon" />
        </button>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={setApi}
        className="w-full mt-6"
      >
        <CarouselContent className="max-h-[634px]">
          {slider.map((item) => (
            <Image key={item.id} src={item.img} alt="img" />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Slider;