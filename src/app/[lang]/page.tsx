import Headline from "@/components/Headline";
import Slider from "@/components/Slider";
import Boss from "@/components/Boss";
import News from "@/components/News";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto">
      <Headline t={t} />
      <Slider />
      <Boss t={t} />
      <News t={t} />
    </main>
  )
}