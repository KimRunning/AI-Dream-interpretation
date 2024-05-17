"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <section className="bg-black h-[6vh] flex flex-row pl-1 lg:items-end w-[100%] justify-between">
        <div className="w-[170px] lg:w-[50vw]">
          <Link href="/" passHref>
            <span className="text-[40px] flex flex-row font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen cursor-pointer">
              꿈 해몽
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen hidden lg:inline">
                &nbsp;- 꿈<span className="2xl:text-[30px] lg:text-[24px]">을 통해 </span> 알<span className="2xl:text-[30px] lg:text-[24px]">아보는</span> 무
                <span className="2xl:text-[30px] lg:text-[24px]">의식</span>
              </span>
            </span>
          </Link>
        </div>
        <div className="w-[50vw] flex mt-12 sm:hidden flex-row items-end justify-between pr-5 pb-[15px]">
          <Link href="/" passHref>
            <span className="text-[18px] font-bold 2xl:text-[22px]  text-[#D5C6ED] cursor-pointer">해몽하기</span>
          </Link>
          <Link href="/community" passHref>
            <span className="text-[18px] font-bold 2xl:text-[22px]  text-[#D5C6ED] cursor-pointer">꿈 게시판</span>
          </Link>
          <Link href="/inquire" passHref>
            <span className="text-[18px] font-bold 2xl:text-[22px]  text-[#D5C6ED] cursor-pointer">문의</span>
          </Link>
        </div>
        <div className="hidden w-[350px] sm:flex flex-row justify-between items-end pr-2 lg:pr-10 pb-[6px] lg:w-[31vw]">
          <Link href="/" passHref>
            <span className="font-bold 2xl:text-[24px] xl:text-[20px]  text-[#D5C6ED] cursor-pointer">꿈 해몽하기</span>
          </Link>
          <Link href="/community" passHref>
            <span className="font-bold 2xl:text-[24px] xl:text-[20px]  text-[#D5C6ED] cursor-pointer">꿈 게시판</span>
          </Link>
          <Link href="/inquire" passHref>
            <span className="font-bold 2xl:text-[24px] xl:text-[20px]  text-[#D5C6ED] cursor-pointer">제작자 / 문의</span>
          </Link>
        </div>
      </section>
    </>
  );
}
