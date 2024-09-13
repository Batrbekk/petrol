"use client"

import {useState} from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import newsImage1 from "@/public/news/1.jpg";
import newsImage2 from "@/public/news/2.jpg";
import newsImage3 from "@/public/news/3.jpg";
import newsImage4 from "@/public/news/4.jpg";
import newsImage5 from "@/public/news/5.jpg";
import newsImage6 from "@/public/news/6.jpg";
import {Separator} from "@/components/ui/separator";
import {ChevronRight} from "lucide-react";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

import oilDay1 from "@/public/news/oilWorker/1.jpg";
import oilDay2 from "@/public/news/oilWorker/2.jpg";
import oilDay3 from "@/public/news/oilWorker/3.jpg";
import oilDay4 from "@/public/news/oilWorker/4.jpg";
import oilDay5 from "@/public/news/oilWorker/5.jpg";
import oilDay6 from "@/public/news/oilWorker/6.jpg";
import oilDay7 from "@/public/news/oilWorker/7.jpg";
import oilDay8 from "@/public/news/oilWorker/8.jpg";

import workerDay1 from "@/public/news/workerDay/1.jpg";
import workerDay2 from "@/public/news/workerDay/2.jpg";
import workerDay3 from "@/public/news/workerDay/3.jpg";
import workerDay4 from "@/public/news/workerDay/4.jpg";

import awards1 from "@/public/news/awards/1.jpg";
import awards2 from "@/public/news/awards/2.jpg";
import awards3 from "@/public/news/awards/3.jpg";

import auz1 from "@/public/news/auz/1.jpg";
import auz2 from "@/public/news/auz/2.jpg";
import auz3 from "@/public/news/auz/3.jpg";
import auz4 from "@/public/news/auz/4.jpg";

import charity1 from "@/public/news/charity/1.jpg";
import charity2 from "@/public/news/charity/2.jpg";
import charity3 from "@/public/news/charity/3.jpg";
import charity4 from "@/public/news/charity/4.jpg";
import charity5 from "@/public/news/charity/5.jpg";
import charity6 from "@/public/news/charity/6.jpg";

import teamBuilding1 from "@/public/news/teamBuilding/1.jpg";
import teamBuilding2 from "@/public/news/teamBuilding/2.jpg";
import teamBuilding3 from "@/public/news/teamBuilding/3.jpg";
import teamBuilding4 from "@/public/news/teamBuilding/4.jpg";
import teamBuilding5 from "@/public/news/teamBuilding/5.jpg";
import teamBuilding6 from "@/public/news/teamBuilding/6.jpg";
import teamBuilding7 from "@/public/news/teamBuilding/7.jpg";
import teamBuilding8 from "@/public/news/teamBuilding/8.jpg";

import NextIcon from "@/public/next.svg";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";

interface INewsProps {
  id: number;
  title: string;
  shortCutTitle: string;
  content?: string[];
  img: StaticImageData;
  images: StaticImageData[];
}

interface NewsComponentProps {
  t: any
}

const News = ({ t }: NewsComponentProps) => {

  const [api, setApi] = useState<CarouselApi>();

  const newsList: INewsProps[] = [
    {
      id: 1,
      title: t.oilWorkerDay.title,
      shortCutTitle: t.oilWorkerDay.shortcutTitle,
      content: t.oilWorkerDay.content,
      img: newsImage1,
      images: [oilDay1, oilDay2, oilDay3, oilDay4, oilDay5, oilDay6, oilDay7, oilDay8]
    },
    {
      id: 2,
      title: t.workerDay.title,
      shortCutTitle: t.workerDay.shortcutTitle,
      content: t.workerDay.content,
      img: newsImage2,
      images: [workerDay1, workerDay2, workerDay3, workerDay4]
    },
    {
      id: 3,
      title: t.bossAwarding.title,
      shortCutTitle: t.bossAwarding.shortcutTitle,
      img: newsImage3,
      images: [awards1, awards2, awards3]
    },
    {
      id: 4,
      title: t.auyzashar.title,
      shortCutTitle: t.auyzashar.shortcutTitle,
      content: t.auyzashar.content,
      img: newsImage4,
      images: [auz1, auz2, auz3, auz4]
    },
    {
      id: 5,
      title: t.charity.title,
      shortCutTitle: t.charity.shortcutTitle,
      img: newsImage5,
      images: [charity1, charity2, charity3, charity4, charity5, charity6]
    },
    {
      id: 6,
      title: t.teamBuilding.title,
      shortCutTitle: t.teamBuilding.shortcutTitle,
      content: t.teamBuilding.content,
      img: newsImage6,
      images: [teamBuilding1, teamBuilding2, teamBuilding3, teamBuilding4, teamBuilding5, teamBuilding6, teamBuilding7, teamBuilding8]
    }
  ];

  const [news, setNews] = useState<INewsProps>(newsList[0]);

  return (
    <section className="lg:mt-28 flex flex-col justify-center">
      <div className="flex items-center gap-x-3">
        <h4 className="text-[#222831] font-medium text-xl">{t.news.title}</h4>
        <Separator orientation="vertical" className="w-[72px] h-[2px] bg-[#222831]"/>
      </div>
      <h2 className="text-[#10375C] font-bold text-4xl tracking-tight leading-snug mt-2">
        {news.title}
      </h2>
      <div className="lg:mt-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-x-6">
            <div className="flex flex-col items-center gap-x-4">
              <div className="w-1 h-40 bg-[#FF5722]" />
              <p className="text-[#10375C] -rotate-90 mt-8">
                <span className="text-base">0{news.id}</span> / <span
                className="text-[#9A9A9A] text-sm">0{newsList.length}</span>
              </p>
            </div>
            <div className="flex flex-col w-[292px]">
              {newsList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setNews(item)}
                  className={`
                  flex items-center p-4 font-medium text-xl 
                  ${news.id === item.id ? "bg-[#FF5722] text-white drop-shadow-2xl" : "text-[#222831]"}
                `}
                >
                  {item.shortCutTitle}
                </button>
              ))}
            </div>
          </div>
          <div className="max-w-[728px] max-h-[452px] object-center overflow-hidden relative">
            <Image src={news.img} alt="news-img"/>
            <Dialog>
              <DialogTrigger className="absolute bottom-0 right-0 flex items-center justify-between p-4 font-medium text-xl text-white bg-[#0D2C4A]">
                {t.news.detail}
                <ChevronRight/>
              </DialogTrigger>
              <DialogContent className="max-w-screen-xl h-[80%] overflow-y-scroll">
                <DialogTitle className="text-[#10375C] font-bold text-4xl tracking-tight leading-snug">
                  {news.title}
                </DialogTitle>
                <div>
                  <div className="flex items-center gap-x-6 justify-end">
                    <button
                      onClick={() => api?.scrollPrev()}
                      className="-rotate-180"
                    >
                      <Image src={NextIcon} alt="icon"/>
                    </button>
                    <button
                      onClick={() => api?.scrollNext()}
                    >
                      <Image src={NextIcon} alt="icon"/>
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
                    className="mt-4"
                  >
                    <CarouselContent>
                      {news.images.map((item, i) => (
                        <CarouselItem key={i} className="flex items-center justify-center">
                          <Image priority={true} src={item} alt="slide-img" className=" object-cover" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <div>
                  {news.content && (
                    news.content.map((item, i) => (
                      <p key={i} className="mb-2 w-full">{item}</p>
                    ))
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News;