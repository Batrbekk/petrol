import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {getDictionary} from "@/app/[lang]/dictionaries";

export const metadata: Metadata = {
  title: "TURGAI PETROLEUM",
  description: "tg - @batrbekk",
};

interface LangParams {
  lang: string;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "kk" }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <Navbar lang={params.lang} dictionary={dictionary} />
        {children}
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
