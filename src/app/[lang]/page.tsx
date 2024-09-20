import Slider from "@/components/Slider";
import News from "@/components/News";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main>
      <Slider />
      <News t={t} />
    </main>
  )
}