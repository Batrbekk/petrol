import Image from "next/image";
import {getDictionary} from "@/app/[lang]/dictionaries";

import hrImage from "@/public/news/hr.webp";

export default async function Hr({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto flex flex-col">
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.hr.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.hr.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <Image src={hrImage} alt="auz-img" className="rounded-lg w-[258px]"/>
        </div>
      </section>
    </main>
  )
}