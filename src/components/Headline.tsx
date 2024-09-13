import {Separator} from "@/components/ui/separator";

interface Props {
  t: any
}

const Headline = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center lg:mt-14 gap-y-2">
      <div className="flex items-center gap-x-3">
        <h4 className="text-[#222831] font-medium text-xl">{t.introducing}</h4>
        <Separator orientation="vertical" className="w-[72px] h-[2px] bg-[#222831]" />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-[#10375C] font-bold text-6xl tracking-tight leading-snug max-w-[546px]">
          <span className="text-[#DD2C00]">Петролеум -</span> Lorem Ipsum is simply.
        </h1>
        <p className="text-[#6A6A6A] max-w-[386px] font-medium text-xl leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the.
        </p>
      </div>
    </section>
  )
}

export default Headline;
