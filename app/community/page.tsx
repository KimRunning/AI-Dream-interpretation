"use client";

import React from "react";
import ListCard from "../components/listCard/listCard";

export default function Community() {
  const handleSearchClick = () => {
    console.log("검색버튼");
  };
  return (
    <main className="w-full h-[88vh] flex flex-col items-center">
      <span className="text-[50px] text-[#F8E7E7] font-bold mb-4 mt-2">Dreams</span>
      <section className="w-[100%] h-[75%] flex flex-col items-center justify-around">
        <div className="justify-center w-[75%] h-[86%] items-center flex flex-wrap pl-8 overflow-y-scroll lg:justify-start gap-2">
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
        <div className=" flex flex-row w-[800px] h-[10%] items-end justify-center">
          <select className="text-center w-[75px] h-[35px] text-[15px] mx-[5px] bg-white font-bold border-[3px] border-[#B3B8DF] rounded-md">
            <option className="font-bold">닉네임</option>
            <option className="font-bold">내용</option>
          </select>
          <div className="relative mr-[80px]">
            <input className="w-[320px] h-[35px] font-bold border-[3px] border-[#B3B8DF] rounded-md pl-2 pr-10" placeholder="Search..." />
            <button
              onClick={handleSearchClick}
              className="absolute inset-y-0 right-0 w-10 h-full flex items-center justify-center"
              style={{
                backgroundImage: "url(/Icon/readingGlasses.png)",
                backgroundSize: "20px 20px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></button>
          </div>
        </div>
      </section>
    </main>
  );
}
