import Image from "next/image";
import slider3 from '@/public/slider/3.png';
import slider6 from '@/public/slider/6.png';
import slider4 from '@/public/slider/4.png';
import slider5 from '@/public/slider/5.png';
import {getDictionary} from "@/app/[lang]/dictionaries";
import {Separator} from "@/components/ui/separator";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export default async function production({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main>
      <section className="flex justify-center gap-x-8 overflow-hidden relative lg:h-[680px]">
        <Image src={slider3} alt="production-image"/>
        <div className="w-full h-full left-0 top-0 bg-black/50 absolute flex items-center">
          <h1 className="text-white scroll-m-20 text-2xl lg:text-5xl font-semibold tracking-tight text-left ml-10">
            {t.production.title} <br /> <span className="text-xl lg:text-4xl">{t.production.subtitle}</span>
          </h1>
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-y-4 lg:flex-row items-center justify-between px-4 lg:px-0 lg:h-56 mt-10 lg:mt-14">
        <div className="lg:w-72 w-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#0D2C4A]">{t.production.info.first.title}</h4>
          <p className="text-md">{t.production.info.first.text}</p>
        </div>
        <Separator className="w-0.5 bg-[#FF5722]" orientation="vertical" />
        <div className="lg:w-72 w-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#0D2C4A]">{t.production.info.second.title}</h4>
          <p className="text-md">{t.production.info.second.text}</p>
        </div>
        <Separator className="w-0.5 bg-[#FF5722]" orientation="vertical" />
        <div className="lg:w-72 w-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#0D2C4A]">
            {t.production.info.thirty.title}
          </h4>
          <p className="text-md">{t.production.info.thirty.text}</p>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-0 mt-10 lg:mt-14">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-80 lg:basis-1/3">
              <div className="relative rounded-lg overflow-hidden">
                <Image src={slider3} alt="production-image" />
                <div className="w-full h-full top-0 bg-black/50 absolute">
                  <h4 className="text-white scroll-m-20 text-xl font-semibold tracking-tight mt-4 ml-4">
                    {t.production.images.first.title} <br/> {t.production.images.first.subtitle}
                  </h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-80 lg:basis-1/3">
              <div className="relative rounded-lg overflow-hidden">
                <Image src={slider6} alt="production-image"/>
                <div className="w-full h-full top-0 bg-black/50 absolute">
                  <h4 className="text-white scroll-m-20 text-xl font-semibold tracking-tight mt-4 ml-4">
                    {t.production.images.second.title} <br/> {t.production.images.second.subtitle}
                  </h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-80 lg:basis-1/3">
              <div className="relative rounded-lg overflow-hidden">
                <Image src={slider4} alt="production-image"/>
                <div className="w-full h-full top-0 bg-black/50 absolute">
                  <h4 className="text-white scroll-m-20 text-xl font-semibold tracking-tight mt-4 ml-4">
                    {t.production.images.three.title}
                  </h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-80 lg:basis-1/3">
              <div className="relative rounded-lg overflow-hidden">
                <Image src={slider5} alt="production-image"/>
                <div className="w-full h-full top-0 bg-black/50 absolute">
                  <h4 className="text-white scroll-m-20 text-xl font-semibold tracking-tight mt-4 ml-4">
                    {t.production.images.four.title}
                  </h4>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex"/>
          <CarouselNext className="hidden lg:flex"/>
        </Carousel>
      </section>
    </main>
  )
}
