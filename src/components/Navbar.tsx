"use client"; // Указываем, что это клиентский компонент

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

interface NavbarProps {
  lang: string;
  dictionary: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, dictionary }) => {
  const [selectedLang, setSelectedLang] = useState(lang);
  const [, setCookie] = useCookies(['i18nlang']);

  const [SheetCloseWrapper, sheetCloseWrapperProps] = [SheetClose, { asChild: true }];

  const onChangeLang = (value: string) => {
    setSelectedLang(value);
    setCookie('i18nlang', value, { path: '/' });

    window.location.href = window.location.pathname.replace(`/${lang}`, `/${value}`);
  };

  return (
    <nav className="container mx-auto my-4 lg:my-8">
      <div className="hidden items-center justify-between lg:flex">
        <div className="flex items-center gap-x-8">
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} alt="logo" className="lg:w-[180px]"/>
          </Link>
          <div className="flex items-center gap-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-md">{dictionary.navbar.aboutCompany}</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 lg:w-[250px]">
                    <div className="flex flex-col gap-y-2">
                      <Link href="/history">{dictionary.menu.first.history}</Link>
                      <Link href="/boss">{dictionary.menu.first.boss}</Link>
                      <Link href="/production">{dictionary.menu.first.production}</Link>
                      <Link href="/achivments">{dictionary.menu.first.achivments}</Link>
                      <Link href="/report">{dictionary.menu.first.report}</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-md">{dictionary.navbar.social}</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 lg:w-[250px]">
                    <div className="flex flex-col gap-y-2">
                      <Link href="/events">{dictionary.menu.second.events}</Link>
                      <Link href="/help">{dictionary.menu.second.help}</Link>
                      <Link href="/hr">{dictionary.menu.second.hr}</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/buy" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {dictionary.navbar.buy}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {dictionary.navbar.contact}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
      </div>
      <div className="flex flex-col px-4 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} alt="logo" className="lg:w-[180px]"/>
          </Link>
          <div className="flex items-center gap-x-4">
            <Sheet>
              <SheetTrigger>
                <Menu className="text-[#10375C]" />
              </SheetTrigger>
              <SheetContent side="top" className="w-screen">
                <NavigationMenu className="mt-4 w-full">
                  <NavigationMenuList className="flex flex-col items-start">
                    <NavigationMenuItem className="ml-1">
                      <NavigationMenuTrigger className="text-md ml-0">{dictionary.navbar.aboutCompany}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 lg:w-[250px]">
                        <div className="flex flex-col gap-y-2">
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/history">{dictionary.menu.first.history}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/boss">{dictionary.menu.first.boss}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/production">{dictionary.menu.first.production}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/achivments">{dictionary.menu.first.achivments}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/report">{dictionary.menu.first.report}</Link>
                          </SheetCloseWrapper>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-md ml-0">{dictionary.navbar.social}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 lg:w-[250px]">
                        <div className="flex flex-col gap-y-2">
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/events">{dictionary.menu.second.events}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/help">{dictionary.menu.second.help}</Link>
                          </SheetCloseWrapper>
                          <SheetCloseWrapper {...sheetCloseWrapperProps}>
                            <Link href="/hr">{dictionary.menu.second.hr}</Link>
                          </SheetCloseWrapper>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <SheetCloseWrapper {...sheetCloseWrapperProps}>
                        <Link href="/buy">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {dictionary.navbar.buy}
                          </NavigationMenuLink>
                        </Link>
                      </SheetCloseWrapper>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <SheetCloseWrapper {...sheetCloseWrapperProps}>
                        <Link href="/contact">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {dictionary.navbar.contact}
                          </NavigationMenuLink>
                        </Link>
                      </SheetCloseWrapper>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-x-4 px-4 mt-8">
                  <p
                    className={cn('uppercase', selectedLang === 'ru' && 'underline text-[#10375C]')}
                    onClick={() => {
                      onChangeLang('ru')
                    }}>
                    ru
                  </p>
                  <p
                    className={cn('uppercase', selectedLang === 'en' && 'underline text-[#10375C]')}
                    onClick={() => {
                      onChangeLang('en')
                    }}>
                    en
                  </p>
                  <p
                    className={cn('uppercase', selectedLang === 'kk' && 'underline text-[#10375C]')}
                    onClick={() => {
                      onChangeLang('kk')
                    }}>
                    kk
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
