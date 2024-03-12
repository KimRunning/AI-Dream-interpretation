import React from "react";

export default function Header() {
  return (
    <>
      <section className="h-[36px] flex flex-row pl-1 lg:items-end lg:h-[8vh] lg:pt-8 w-[100%] justify-between ">
        <div className="w-[170px] lg:w-[50vw] ">
          <p className="text-[22px] flex flex-row  lg:pl-10  lg:text-[30px] 2xl:text-[46px] font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen ">
            해몽 AI
            <span className="hidden lg:inline">
              - 꿈<span className="2xl:text-[30px] lg:text-[24px]">을 통해 </span> 알<span className="2xl:text-[30px] lg:text-[24px]">아보는</span> 무
              <span className="2xl:text-[30px] lg:text-[24px]">의식</span>
            </span>
          </p>
        </div>
        <div className="inline lg:hidden flex flex-row items-end justify-between pr-2  lg:pr-10 pb-[5px] w-[390px] lg:w-[40vw] 2xl:w-[45vw]">
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">해몽하기</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">꿈 게시판</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">MY</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[16px] text-[#D5C6ED]">문의</span>
        </div>
        <div className="hidden lg:inline bg-white flex flex-row items-end justify-between pr-2  lg:pr-10 pb-[5px] w-[390px] lg:w-[40vw] 2xl:w-[45vw]">
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">꿈 해몽하기</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">다른 사람 꿈 보러가기</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[18px] text-[#D5C6ED]">내 꿈 보기</span>
          <span className="text-[14px] font-bold 2xl:text-[22px] xl:text-[16px] text-[#D5C6ED]">제작자 / 문의</span>
        </div>
      </section>
    </>
  );
}
