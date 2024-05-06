"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <section className="bg-black h-[6vh] flex flex-row pl-1 lg:items-end w-[100%] justify-between ">
        <div className="w-[170px] lg:w-[50vw] ">
          <Link
            href={"/"}
            className="text-[40px] flex flex-row font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen "
          >
            해몽AI
            <span className=" text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen hidden lg:inline">
              &nbsp;- 꿈<span className=" 2xl:text-[30px] lg:text-[24px]">을 통해 </span> 알<span className="2xl:text-[30px] lg:text-[24px]">아보는</span> 무
              <span className="2xl:text-[30px] lg:text-[24px]">의식</span>
            </span>
          </Link>
        </div>
        <div className="w-[40vw]  flex sm:hidden flex-row items-end justify-between pr-5 pb-[15px]">
          <Link href={"/"} className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">
            해몽하기
          </Link>
          <Link href={"/community"} className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">
            꿈 게시판
          </Link>
          <Link href={"/"} className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">
            문의
          </Link>
        </div>
        <div className="hidden sm:flex sm:w-[400px]  flex-row justify-between items-end pr-2  lg:pr-10 pb-[6px] lg:w-[30vw] ">
          <Link href={"/"} className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">
            꿈 해몽하기
          </Link>
          <Link href={"/community"} className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">
            다른 사람 꿈 보기
          </Link>
          <Link href={"/inquire"} className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">
            제작자 / 문의
          </Link>
        </div>
      </section>
    </>
  );
}
