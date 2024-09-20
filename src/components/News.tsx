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
import awards4 from "@/public/news/awards/4.jpg";

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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

interface INewsProps {
  id: number;
  title: string;
  shortCutTitle: string;
  content?: string[];
  img: StaticImageData;
  images: StaticImageData[];
  date: string;
}

interface NewsComponentProps {
  t: any
}

const News = ({ t }: NewsComponentProps) => {

  const [api, setApi] = useState<CarouselApi>();

  const newsList: INewsProps[] = [
    {
      id: 0,
      title: t.oilWorkerDay.title,
      shortCutTitle: t.oilWorkerDay.shortcutTitle,
      content: t.oilWorkerDay.content,
      img: newsImage1,
      images: [oilDay1, oilDay2, oilDay3, oilDay4, oilDay5, oilDay6, oilDay7, oilDay8],
      date: '06.09.2024'
    },
    {
      id: 1,
      title: t.bossAwarding.title,
      shortCutTitle: t.bossAwarding.shortcutTitle,
      img: newsImage3,
      images: [awards1, awards2, awards3, awards4],
      date: '10.06.2024'
    },
    {
      id: 2,
      title: t.charity.title,
      shortCutTitle: t.charity.shortcutTitle,
      img: newsImage5,
      images: [charity1, charity2, charity3, charity4, charity5, charity6],
      date: '09.04.2024'
    },
    {
      id: 3,
      title: t.auyzashar.title,
      shortCutTitle: t.auyzashar.shortcutTitle,
      content: t.auyzashar.content,
      img: newsImage4,
      images: [auz1, auz2, auz3, auz4],
      date: '21.03.2024'
    },
    {
      id: 4,
      title: t.workerDay.title,
      shortCutTitle: t.workerDay.shortcutTitle,
      content: t.workerDay.content,
      img: newsImage2,
      images: [workerDay1, workerDay2, workerDay3, workerDay4],
      date: '16.09.2023'
    },
    {
      id: 5,
      title: t.teamBuilding.title,
      shortCutTitle: t.teamBuilding.shortcutTitle,
      content: t.teamBuilding.content,
      img: newsImage6,
      images: [teamBuilding1, teamBuilding2, teamBuilding3, teamBuilding4, teamBuilding5, teamBuilding6, teamBuilding7, teamBuilding8],
      date: '01.07.2023'
    }
  ];

  const [news, setNews] = useState<INewsProps>(newsList[0]);

  return (
    <section className="lg:mt-28 flex flex-col justify-center container mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-[#10375C] font-bold text-4xl tracking-tight leading-snug">
          {t.news.title}
        </h2>
        <Separator orientation="vertical" className="w-[72px] h-[2px] bg-[#222831]"/>
      </div>
      <div className="lg:mt-8">
        <Carousel>
          <CarouselContent className="flex items-stretch">
            {newsList.map((item) => (
              <CarouselItem key={item.id} className="basis-1/3">
                <Card className="flex flex-col gap-y-4 h-full">
                  <Image src={item.img} alt="card-img" className="rounded-t-lg" />
                  <CardContent className="flex flex-col h-full">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <p className="text-gray-500 my-2">{item.date}</p>
                    <div className="mt-auto">
                      <Dialog>
                        <DialogTrigger
                          className="w-full flex items-center justify-center py-2 px-4 font-medium text-lg text-white bg-[#0D2C4A] rounded-lg"
                          onClick={() => {setNews(item)}}
                        >
                          {t.news.detail}
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
                              className="mt-4"
                            >
                              <CarouselContent>
                                {news.images.map((item, i) => (
                                  <CarouselItem key={i} className="flex items-center justify-center">
                                    <Image priority={true} src={item} alt="slide-img" className="object-cover" />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                          <div>
                            {news.content && news.content.map((item, i) => (
                              <p key={i} className="mb-2 w-full">{item}</p>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default News;