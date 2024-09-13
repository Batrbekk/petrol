import Link from "next/link";
import React from "react";
import {Mail, Phone} from "lucide-react";

interface FooterProps {
  dictionary: any;
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
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
    }
  ];

  return (
    <footer className="bg-[#0D2C4A] py-12 lg:mt-14">
      <div className="container mx-auto flex items-start justify-between">
        <div className="flex items-start lg:gap-x-24">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-4xl font-medium text-white">
              Торғай <span className="text-[#FF5722]">Петролеум</span>
            </h1>
            <p className="text-[#F8F8F8] text-base max-w-[300px]">
              We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your
              best workspaces and meetings
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-white font-medium text-base hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-medium text-xl text-[#8695a4]">{dictionary.navbar.contact}</p>
          <div className="flex items-center gap-x-4">
            <Mail className="text-[#FF5722]"/>
            <a href="mailto:batrbekk@gmail.com" className="text-white">
              batrbekk@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <Phone className="text-[#FF5722]"/>
            <a href="tel:+77758221235" className="text-white">
             +7-(775)-822-12-35
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;