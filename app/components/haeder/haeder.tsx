import React from "react";

export default function Header() {
  return (
    <>
      <section className="h-[8vh] flex flex-row items-end w-[100%] px-4 pt-8 justify-between ">
        <div className="w-[40vw]">
          <div className=" text-[2.5vw] font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink via-lightBlue to-lightGreen">
            해몽 AI - 꿈<span className="text-[2vw]">을 통해 </span> 알<span className="text-[2vw]">아보는</span> 무<span className="text-[2vw]">의식</span>
          </div>
        </div>
        <div className=" bg-blue-500 w-[40vw] flex flex-row justify-around">
          <span className="text-[#D5C6ED]">해몽하기</span>
          <span className="text-[#D5C6ED]">다른 사람 꿈 보기</span>
          <span className="text-[#D5C6ED]">내 꿈 보기</span>
          <span className="text-[#D5C6ED]">문의/제작자 정보</span>
        </div>
      </section>
    </>
  );
}
