import Link from "next/link";
import React from "react";
import {Mail, MapPinHouse, Phone, Printer} from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo.svg";

interface FooterProps {
  dictionary: any;
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
  const links = [
    {
      label: dictionary.menu.first.history,
      link: '/history'
    },
    {
      label: dictionary.menu.first.boss,
      link: '/boss'
    },
    {
      label: dictionary.menu.first.production,
      link: '/production'
    },
    {
      label: dictionary.menu.first.achivments,
      link: '/achivments'
    },
    {
      label: dictionary.menu.first.report,
      link: '/report'
    }
  ];
  const links2 = [
    {
      label: dictionary.menu.second.events,
      link: '/events'
    },
    {
      label: dictionary.menu.second.help,
      link: '/help'
    },
    {
      label: dictionary.menu.second.hr,
      link: '/hr'
    },
    {
      label: dictionary.navbar.buy,
      link: '/buy'
    }
  ];

  return (
    <footer className="bg-white py-12 mt-14">
      <div className="container mx-auto px-4 lg:p-0 flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col gap-y-4 mb-8 lg:mb-0">
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} alt="logo"/>
          </Link>
          <p className="text-base max-w-[300px]">
            {dictionary.footerTitle}
          </p>
        </div>
        <div className="flex items-start lg:gap-x-24 justify-between lg:justify-center w-full lg:w-fit">
          <div className="flex flex-col gap-y-4">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="font-medium text-base hover:underline text-[#0D2C4A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            {links2.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="font-medium text-base hover:underline text-[#0D2C4A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-8 lg:mt-0">
          <p className="font-medium text-xl text-[#0D2C4A]">{dictionary.navbar.contact}</p>
          <div className="flex items-center gap-x-4">
            <Mail className="text-[#FF5722]"/>
            <a href="mailto:batrbekk@gmail.com" className="text-[#0D2C4A]">
              kumkol@turgai.kz
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <Phone className="text-[#FF5722]"/>
            <p className="text-[#0D2C4A]">
              8 (7242) 23-12-26, 27-81-41
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <Printer className="text-[#FF5722]"/>
            <p className="text-[#0D2C4A]">
              26-13-93
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <MapPinHouse className="text-[#FF5722]"/>
            <p className="text-[#0D2C4A]">
              {dictionary.contactPage.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
