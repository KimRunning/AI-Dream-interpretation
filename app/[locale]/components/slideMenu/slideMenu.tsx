"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "../../context/translationContext";

interface SlideMenuProps {
  locale: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ locale, isOpen, toggleMenu }) => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`fixed top-0 right-0 z-[51] h-full bg-black bg-opacity-30 transition-transform ${isOpen ? "w-full" : "w-0"} sm:hidden`}>
      <div className={`absolute top-0 right-0 h-full z-[60] bg-white transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} w-[56vw]`}>
        <div className="flex flex-col p-5 h-full">
          <button className="self-end text-white  bg-black p-3 mb-5" onClick={toggleMenu}>
            Close
          </button>
          <Link className="text-[20px] font-bold mb-2 2xl:text-[22px] text-black cursor-pointer mt-4" href={`/${locale}/community`} passHref>
            {t("headerLink2")}
          </Link>
          <Link className="text-[20px] font-bold mb-2 2xl:text-[22px] text-black cursor-pointer mt-4" href={`/${locale}/inquire`} passHref>
            {t("headerLink3")}
          </Link>
          <div className="relative mt-4">
            <button className="text-[20px] font-bold mb-2 2xl:text-[22px] text-black cursor-pointer" onClick={toggleDropdown}>
              {t("headerLink1")}
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg">
                <Link href={`/en`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">English</span>
                </Link>
                <Link href={`/ko`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">Korea</span>
                </Link>
                <Link href={`/ja`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">Japan</span>
                </Link>
                <Link href={`/de`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">Germany</span>
                </Link>
                <Link href={`/fr`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">France</span>
                </Link>
                <Link href={`/in`} passHref>
                  <span className="block px-4 py-2 text-sm text-black cursor-pointer">Indonesia</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
