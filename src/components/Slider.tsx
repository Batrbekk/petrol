"use client"

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";

import slider1 from '@/public/slider/1.jpg';
import slider2 from '@/public/slider/2.jpg';
import slider3 from '@/public/slider/3.png';
import slider4 from '@/public/slider/4.png';
import slider5 from '@/public/slider/5.png';
import slider6 from '@/public/slider/6.png';

const Slider = () => {
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
    <section className="relative h-[680px]">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-screen absolute top-0 left-0"
      >
        <CarouselContent className="max-h-[680px]">
          {slider.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative">
                <Image src={item.img} alt="img" className="w-screen"/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full h-full left-0 top-0 bg-black/50 absolute flex items-center justify-center">
          <h1 className="text-white scroll-m-20 text-5xl font-semibold tracking-tight text-center max-w-[60%]">
            Одна из крупнейших интегрированных нефтегазовых компаний
          </h1>
        </div>
      </Carousel>
    </section>
  )
}

export default Slider;