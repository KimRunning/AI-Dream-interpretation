"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "../../context/translationContext";
import { MultyLang } from "../../types";
import SlideMenu from "../slideMenu/slideMenu";
import { FiMenu } from "react-icons/fi"; // 아이콘 추가

export default function Header({ params: { locale } }: MultyLang) {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="bg-black h-[56px] flex flex-row pl-1 lg:items-end w-[100%] justify-between">
        <div className="w-[170px] lg:w-[50vw]">
          <Link href={`/${locale}`} passHref>
            <span className="text-[40px] flex flex-row font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen cursor-pointer">
              {t("headerMainTitle")}
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen hidden lg:inline">
                &nbsp;- {t("headerTitle1")}
                <span className="2xl:text-[30px] lg:text-[24px]">{t("headerTitle11")} </span> {t("headerTitle2")}
                <span className="2xl:text-[30px] lg:text-[24px]">{t("headerTitle21")}</span> {t("headerTitle3")}
                <span className="2xl:text-[30px] lg:text-[24px]">{t("headerTitle31")}</span>
              </span>
            </span>
          </Link>
        </div>
        <div className="relative hidden sm:flex w-[350px] flex-row justify-between items-end pr-2 lg:pr-10 pb-[6px] lg:w-[31vw]">
          <Link href={`/${locale}/community`} passHref>
            <span className="font-bold 2xl:text-[24px] xl:text-[20px] text-[#D5C6ED] cursor-pointer">{t("headerLinkB2")}</span>
          </Link>
          <Link href={`/${locale}/inquire`} passHref>
            <span className="font-bold 2xl:text-[24px] xl:text-[20px] text-[#D5C6ED] cursor-pointer">{t("headerLinkB3")}</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button className="font-bold 2xl:text-[24px] xl:text-[20px] text-[#D5C6ED] cursor-pointer" onClick={toggleDropdown}>
              {t("headerLinkB1")}
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-56 bg-white shadow-lg z-[1]">
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
        <div className="flex justify-end sm:hidden w-full">
          <button onClick={toggleMenu} className="bg-black h-[100%] mt-auto text-white pr-1">
            <FiMenu size={36} />
          </button>
        </div>
      </section>
      <SlideMenu locale={locale} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
