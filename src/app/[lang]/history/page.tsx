import Image from "next/image";
import HistoryImage from "@/public/history.jpg";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function History({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row mt-14 rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2">
          <Image src={HistoryImage} alt="history-img" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 p-4 bg-[#222831] text-white">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {t.history.title}
          </h1>
          <p className="leading-7">
            {t.history.text}
          </p>
        </div>
      </section>
    </main>
  )
}
