"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { getLocalizedPath } from './functions/routes';

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const currentLocale = locale;
    // Add null check for pathname
    const currentPath = pathname ?? '/';
    const pathParts = currentPath.split("/");
    const currentPage = pathParts.length > 2 ? pathParts[2] : '';
    const newPath = getLocalizedPath(currentLocale, newLocale, currentPage);
    router.push(newPath);
  };

  const isCurrentPath = (path: string): boolean => {
    if (!pathname) return false;
    return pathname.includes(path);
  };

  const NavLinks = () => (
    <>
      <Link 
        href={`/${locale}/`} 
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
          ${pathname === `/${locale}` || pathname === `/${locale}/` ? 'text-blue-500' : 'text-white hover:text-gray-300'}`}
      >
        {t("home")}
      </Link>
      <Link 
        href={`/${locale}/${t('specialLinkTask').toLowerCase().replace(/\s+/g, '-')}`}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
          ${isCurrentPath(t('specialLinkTask').toLowerCase().replace(/\s+/g, '-')) ? 'text-blue-500' : 'text-white hover:text-gray-300'}`}
      >
        {t("tasks")}
      </Link>
      <Link 
        href={`/${locale}/${t('about').toLowerCase().replace(/\s+/g, '-')}`}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
          ${isCurrentPath(t('about').toLowerCase().replace(/\s+/g, '-')) ? 'text-blue-500' : 'text-white hover:text-gray-300'}`}
      >
        {t("about")}
      </Link>
      <Link 
        href={`/${locale}/${t('contact').toLowerCase().replace(/\s+/g, '-')}`}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
          ${isCurrentPath(t('contact').toLowerCase().replace(/\s+/g, '-')) ? 'text-blue-500' : 'text-white hover:text-gray-300'}`}
      >
        {t("contact")}
      </Link>
    </>
  );

  return (
    <nav id="main-navbar" style={{backgroundColor: '#141414'}} className="fixed top-0 left-0 right-0 w-full border-b border-neutral-700 z-[49]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/next.png"
                alt="MicroBites Logo"
                width={150}
                height={40}
                priority
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="flex items-center">
            <select
              value={locale}
              onChange={handleLanguageChange}
              style={{backgroundColor: '#141414'}}
              className="block text-sm text-white border border-neutral-600 rounded-md 
                py-1.5 pl-3 pr-10 hover:border-neutral-500 focus:border-white focus:ring-1 focus:ring-white 
                focus:outline-none transition-colors duration-150"
            >
              <option value="en">EN</option>
              <option value="ee">EE</option>
              <option value="lv">LV</option>
            </select>
          </div>
        </div>

        <div className="md:hidden pb-2 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;