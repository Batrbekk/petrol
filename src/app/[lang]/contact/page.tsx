import {getDictionary} from "@/app/[lang]/dictionaries";
import {Mail, MapPinHouse, Phone, Printer} from "lucide-react";

export default async function Contact({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);

  return (
    <main className="container mx-auto">
      <section className="flex items-stretch mt-14">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332.8354929728966!2d65.50001692669476!3d44.82794299095893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41f7fe755750e985%3A0x461cd30f75036cf9!2z0JDQniDQotGD0YDQs9Cw0Lkg0J_QtdGC0YDQvtC70LXRg9C8!5e0!3m2!1sru!2skz!4v1726714717577!5m2!1sru!2skz" width="50%" height="450"  loading="lazy" />
        <div className="w-1/2 bg-[#FF5722] flex flex-col pl-32 justify-center text-white">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t.navbar.contact}
          </h1>
          <div className="mt-8 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <Phone className="w-6 h-6"/>
              <p className="scroll-m-20 text-xl font-medium tracking-tight">8 (7242) 23-12-26, 27-81-41</p>
            </div>
            <div className="flex items-center gap-x-4">
              <Printer className="w-6 h-6"/>
              <p className="scroll-m-20 text-xl font-medium tracking-tight">26-13-93</p>
            </div>
            <div className="flex items-center gap-x-4">
              <Mail className="w-6 h-6"/>
              <p className="scroll-m-20 text-xl font-medium tracking-tight">kumkol@turgai.kz</p>
            </div>
            <div className="flex items-start gap-x-4">
              <MapPinHouse className="w-6 h-6"/>
              <p className="scroll-m-20 text-xl font-medium tracking-tight w-2/3">{t.contactPage.address}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}