import Image from "next/image";
import {getDictionary} from "@/app/[lang]/dictionaries";

import auz1 from "@/public/news/auz/1.jpg";
import auz2 from "@/public/news/auz/2.jpg";
import auz3 from "@/public/news/auz/3.jpg";
import auz4 from "@/public/news/auz/4.jpg";

import auzSecond1 from "@/public/news/auyzashar2/1.jpeg";
import auzSecond2 from "@/public/news/auyzashar2/2.jpeg";
import auzSecond3 from "@/public/news/auyzashar2/3.jpeg";
import auzSecond4 from "@/public/news/auyzashar2/4.jpeg";

import oilDay1 from "@/public/news/oilWorker2/1.jpg";
import oilDay2 from "@/public/news/oilWorker2/2.jpg";
import oilDay3 from "@/public/news/oilWorker2/3.jpg";
import oilDay4 from "@/public/news/oilWorker2/4.jpg";

import oilWorker1 from "@/public/news/oilWorker/1.jpg";
import oilWorker2 from "@/public/news/oilWorker/2.jpg";
import oilWorker3 from "@/public/news/oilWorker/3.jpg";
import oilWorker4 from "@/public/news/oilWorker/4.jpg";

import nauryz1 from "@/public/news/nauryz/1.jpeg";
import nauryz2 from "@/public/news/nauryz/2.jpeg";
import nauryz3 from "@/public/news/nauryz/3.webp";
import nauryz4 from "@/public/news/nauryz/4.jpeg";

import workerDay1 from "@/public/news/workerDay/1.jpg";
import workerDay2 from "@/public/news/workerDay/2.jpg";
import workerDay3 from "@/public/news/workerDay/3.jpg";
import workerDay4 from "@/public/news/workerDay/4.jpg";

import teamBuilding4 from "@/public/news/teamBuilding/4.jpg";
import teamBuilding5 from "@/public/news/teamBuilding/5.jpg";
import teamBuilding7 from "@/public/news/teamBuilding/7.jpg";
import teamBuilding9 from "@/public/news/teamBuilding/9.jpg";

import awards1 from "@/public/news/awards/1.jpg";
import awards2 from "@/public/news/awards/2.jpg";
import awards3 from "@/public/news/awards/3.jpg";
import awards4 from "@/public/news/awards/4.jpg";

import charity1 from "@/public/news/charity/1.jpg";
import charity2 from "@/public/news/charity/2.jpg";
import charity3 from "@/public/news/charity/3.jpg";
import charity4 from "@/public/news/charity/4.jpg";

export default async function Events({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  const auz = [auz1, auz2, auz3, auz4];
  const oilDay = [oilDay1, oilDay2, oilDay3, oilDay4];
  const nauryz = [nauryz1, nauryz2, nauryz3, nauryz4];
  const workerDay = [workerDay1, workerDay2, workerDay3, workerDay4];
  const teamBuilding = [teamBuilding4, teamBuilding5, teamBuilding9, teamBuilding7];
  const bossAwarding = [awards1, awards2, awards3, awards4];
  const charity = [charity1, charity2, charity3, charity4];
  const auzashar2 = [auzSecond1, auzSecond2, auzSecond3, auzSecond4];
  const oilDaySecond = [oilWorker1, oilWorker2, oilWorker3, oilWorker4];

  return (
    <main className="container mx-auto flex flex-col">
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.auyzashar.eventsTitle}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.auyzashar.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {auz.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.oilWorkerDay2.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.oilWorkerDay2.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {oilDay.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.nauryz.detailTitle}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.nauryz.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {nauryz.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.workerDay.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.workerDay.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {workerDay.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.teamBuilding.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.teamBuilding.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {teamBuilding.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.bossAwarding.eventsTitle}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.bossAwarding.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {bossAwarding.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.auyzashar2.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.auyzashar2.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {auzashar2.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.charity.eventsTitle}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.charity.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {charity.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.agreement.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.agreement.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.oilWorkerDay.detailTitle}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.oilWorkerDay.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {oilDaySecond.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
