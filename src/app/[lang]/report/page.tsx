import {getDictionary} from "@/app/[lang]/dictionaries";
import Report1 from "@/public/report1.png";
import Report2 from "@/public/report2.png";
import Image from "next/image";

export default async function Report({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col justify-center items-center gap-x-8 mt-14 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-center text-[#0D2C4A] scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
            {t.report.title}
          </h1>
        </div>
        <div className="flex flex-col gap-y-8 lg:flex-row items-center justify-center mt-10 gap-x-8">
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <Image src={Report1} alt="achivments-image" />
          </div>
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <Image src={Report2} alt="achivments-image"/>
          </div>
        </div>
      </section>
    </main>
  )
}
