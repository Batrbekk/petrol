import {getDictionary} from "@/app/[lang]/dictionaries";
import AchivmentsImage from "@/public/achivments.jpg";
import Image from "next/image";

export default async function Achivments({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto">
      <section className="flex flex-col justify-center items-center gap-x-8 mt-14 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-center text-[#0D2C4A] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t.achivments.title}</h1>
          <h4 className="text-center lg:w-1/2 scroll-m-20 text-xl tracking-tight">
            {t.achivments.subtitle}
          </h4>
        </div>
        <div className="flex items-start justify-center mt-10">
          <div className="w-1/2">
            <Image src={AchivmentsImage} alt="achivments-image" />
          </div>
          <div className="w-1/2 flex flex-col gap-y-4 p-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {t.achivments.info.title}
            </h1>
            <div className="flex flex-col gap-y-2">
              <p className="leading-7">
                {t.achivments.info.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}