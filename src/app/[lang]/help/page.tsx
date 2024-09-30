import Image from "next/image";
import {getDictionary} from "@/app/[lang]/dictionaries";

import first1 from "@/public/news/help/first/1.jpeg";
import first2 from "@/public/news/help/first/2.jpeg";
import first3 from "@/public/news/help/first/3.jpeg";
import first4 from "@/public/news/help/first/4.webp";

import second1 from "@/public/news/help/second/1.webp";
import second2 from "@/public/news/help/second/2.jpeg";
import second3 from "@/public/news/help/second/3.webp";
import second4 from "@/public/news/help/second/4.webp";

export default async function Help({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  const first = [first1, first2, first3, first4];
  const second = [second1, second2, second3, second4];

  return (
    <main className="container mx-auto flex flex-col px-4 lg:px-0">
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.help.first.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.help.first.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {first.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg max-w-[400px] max-h-[250px]"/>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <h2
            className="scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 w-full lg:w-2/3 text-center text-[#0D2C4A] uppercase">
            {t.help.second.title}
          </h2>
          <div className="flex flex-col gap-y-2">
            {t.help.second.content.map((item, i) => (
              <p key={i}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {second.map((item, i) => (
              <Image key={i} src={item} alt="auz-img" className="rounded-lg lg:w-1/3"/>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
