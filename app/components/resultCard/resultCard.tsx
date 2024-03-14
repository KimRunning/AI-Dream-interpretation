"use client";
import React from "react";
import Image from "next/image";
import haemong from "../../../public/Image/해몽 이미지1.jpg";

export default function ResultCard() {
  return (
    <div className="z-50 w-[450px] h-[580px] bg-gradient-to-br from-[#E7E167] to-[#D34A52] flex items-center justify-center">
      <div className="z-50 w-[430px] h-[560px] bg-gradient-to-b from-[#733acf] to-[#312f33] flex flex-col items-center justify-bitween">
        <div className="w-[420px] flex flex-row justify-between text-[18px] text-white mt-1">
          <span>질문</span>
          <span>답변</span>
        </div>
        <Image className="w-[380px] h-[230px] mt-1" src={haemong} alt={"몽환적 이미지"}></Image>
        <br></br>
        <div className="w-[380px] h-[245px] text-white overflow-y-scroll scrollbar-hide">
          We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it. We love
          Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it. We love Landingfolio!
          Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it. We love Landingfolio! Our designers
          were using it for their projects, so clients already knew what Landingfolio was and how to use it. We love Landingfolio! Our designers were using it
          for their projects, so clients already knew what Landingfolio was and how to use it. We love Landingfolio! Our designers were using it for their
          projects, so clients already knew what Landingfolio was and how to use it. We love Landingfolio! Our designers were using it for their projects, so
          clients already knew what Landingfolio was and how to use it.
        </div>
      </div>
    </div>
  );
}
