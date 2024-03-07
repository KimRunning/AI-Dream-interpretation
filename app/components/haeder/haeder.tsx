import React from "react";

export default function Header() {
  return (
    <>
      <section className="h-[8vh] flex flex-row items-end  w-[100%] pt-8 justify-between ">
        <div className="w-[45vw]">
          <div className="  pl-10 text-[2.5vw] font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen">
            해몽 AI - 꿈<span className="text-[2vw]">을 통해 </span> 알<span className="text-[2vw]">아보는</span> 무<span className="text-[2vw]">의식</span>
          </div>
        </div>
        <div className="flex flex-row  pr-10 pb-[5px] w-[40vw] justify-between">
          <span className="font-bold text-[1.4vw] text-[#D5C6ED]">해몽하기</span>
          <span className="font-bold text-[1.4vw] text-[#D5C6ED]">다른 사람 꿈 보기</span>
          <span className="font-bold text-[1.4vw] text-[#D5C6ED]">내 꿈 보기</span>
          <span className="font-bold text-[1.4vw] text-[#D5C6ED]">문의/제작자 정보</span>
        </div>
      </section>
    </>
  );
}
