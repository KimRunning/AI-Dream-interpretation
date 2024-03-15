import React from "react";
import ResultCard from "../components/resultCard/resultCard";

export default function Result() {
  return (
    <>
      <main className="w-full h-[88vh] ">
        <section className="w-full h-[75vh]  flex flex-row items-center justify-center">
          <div className="h-[85%]">
            <ResultCard />
            <div className=" flex flex-row justify-between h-[25px]">
              <button className="z-50 bg-[#E7E167] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">
                저장 / 게시
              </button>
              <button className="z-50 bg-[#E17F38] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">
                저장 / 비공개
              </button>
              <button className="z-50 bg-[#D34A52] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">
                SNS 공유
              </button>
            </div>
          </div>
        </section>
        <section className="w-[100%] h-[13vh] flex justify-center "></section>
      </main>
    </>
  );
}
