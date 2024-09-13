"use client"; // Указываем, что это клиентский компонент

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface NavbarProps {
  lang: string;
  dictionary: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, dictionary }) => {
  const [selectedLang, setSelectedLang] = useState(lang);
  const [, setCookie] = useCookies(['i18nlang']);

  const onChangeLang = (value: string) => {
    setSelectedLang(value);
    setCookie('i18nlang', value, { path: '/' });

    window.location.href = window.location.pathname.replace(`/${lang}`, `/${value}`);
  };

  const links = [
    {
      label: dictionary.navbar.aboutCompany,
      link: '/company'
    },
    {
      label: dictionary.navbar.social,
      link: '/social'
    },
    {
      label: dictionary.navbar.hr,
      link: '/hr'
    },
    {
      label: dictionary.navbar.buy,
      link: '/buy'
    },
    {
      label: dictionary.navbar.contact,
      link: '/contact'
    }
  ];

  return (
    <nav className="container mx-auto flex items-center justify-between my-8">
      <div className="flex items-center gap-x-8">
        <Image src={Logo} alt="logo" />
        <div className="flex items-center gap-x-4">
          {links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="text-[#222831] font-medium text-base hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Select value={selectedLang} onValueChange={onChangeLang}>
        <SelectTrigger className="w-[72px]">
          <SelectValue>
            <p className="text-sm uppercase">{selectedLang}</p>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="ru">
            RU
          </SelectItem>
          <SelectItem value="en">
            EN
          </SelectItem>
          <SelectItem value="kk">
            KK
          </SelectItem>
        </SelectContent>
      </Select>
    </nav>
  );
};

export default Navbar;