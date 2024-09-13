import Image from "next/image";
import BossImage from "@/public/boss.svg";


interface Props {
  t: any
}

const Boss = ({ t }: Props) => {
  return (
    <section className="lg:mt-28 flex flex-col justify-center" >
      <h4 className="text-[#10375C] font-bold text-4xl">
        {t.bossBlog.title}
      </h4>
      <div className="flex items-start justify-between lg:mt-14">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src={BossImage} alt="boss-img" className="object-cover object-center w-[538px] h-[420px]" />
            <div className="bg-[#FF5722] px-6 py-4 w-fit absolute bottom-0">
              <p className="text-white text-xl font-bold">
                Имя ген директора
              </p>
            </div>
          </div>
          <p className="text-[#222831] font-bold text-xl lg:mt-6">{t.bossBlog.role}</p>
        </div>
        <div className="flex flex-col items-center gap-y-4 max-w-[640px] mt-8">
          <p className="text-[#10375C] font-bold text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-[#10375C] font-bold text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Boss;