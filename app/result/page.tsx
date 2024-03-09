import React from "react";
import ResultCard from "../components/resultCard/resultCard";

export default function Result() {
  return (
    <>
      <main className="w-full h-[88vh] ">
        <section className="w-full h-[75vh]  flex flex-row items-center justify-between">
          <div className="bg-white w-[9%] h-[580px]">광고 사이드 배너</div>
          <div className="h-[85%]">
            <ResultCard />
            <div className=" flex flex-row justify-between h-[40px]">
              <button className="bg-[#E7E167] w-[130px] h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">꿈 저장 및 공유</button>
              <button className="bg-[#E17F38] w-[130px] h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">비공개로 저장</button>
              <button className="bg-[#D34A52] w-[130px] h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">SNS 공유하기</button>
            </div>
          </div>
          <div className="bg-white w-[9%] h-[580px]">광고 사이드 배너</div>
        </section>
        <section className="w-[100%] h-[13vh] flex justify-center">
          <div className=" w-[450px] bg-violet-600">광고배너</div>
        </section>
      </main>
    </>
  );
}
