import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Buy({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col items-center text-center mt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t.buyPage.title}</h1>
        <p className="mt-10 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t.buyPage.text1} <span className="text-[#FF5722]">kumkol@turgai.kz</span> {t.buyPage.text2}
        </p>
      </section>
    </main>
  )
}
