import React from "react";

export default function Header() {
  return (
    <>
      <section className="bg-black h-[7vh] flex flex-row pl-1 lg:items-end w-[100%] justify-between ">
        <div className="w-[170px] lg:w-[50vw] ">
          <p className="text-[40px] flex flex-row font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen ">
            해몽AI
            <span className=" text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen hidden lg:inline">
              &nbsp;- 꿈<span className=" 2xl:text-[30px] lg:text-[24px]">을 통해 </span> 알<span className="2xl:text-[30px] lg:text-[24px]">아보는</span> 무
              <span className="2xl:text-[30px] lg:text-[24px]">의식</span>
            </span>
          </p>
        </div>
        <div className="w-[68vw]  flex sm:hidden flex-row items-end justify-between pr-5 pb-[15px]">
          <span className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">해몽하기</span>
          <span className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">꿈 게시판</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">MY</span>
          <span className=" text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">문의</span>
        </div>
        <div className="hidden sm:flex sm:w-[400px]  flex-row justify-between items-end pr-2  lg:pr-10 pb-[6px] lg:w-[40vw] ">
          <span className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">꿈 해몽하기</span>
          <span className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">다른 사람 꿈 보기</span>
          <span className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">내 꿈 보기</span>
          <span className="  font-bold 2xl:text-[22px] xl:text-[18px] sm:text-[16px] text-[#D5C6ED]">제작자 / 문의</span>
        </div>
      </section>
    </>
  );
}
