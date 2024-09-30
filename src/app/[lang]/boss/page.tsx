import Image from "next/image";
import BossImage from "@/public/boss.png";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Boss({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row justify-center gap-x-8 lg:mt-14 rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/3 h-full rounded-lg overflow-hidden">
          <Image src={BossImage} alt="history-img" className="object-center" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 p-4">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#0D2C4A]">
            {t.boss.title}
          </h1>
          <div className="flex flex-col gap-y-2">
            {t.boss.content.map((item, i) => (
              <p key={i} className="leading-7">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
