import React from "react";

export default function ListCard() {
  return (
    <>
      <main className="flex flex-row w-[340px] h-[150px] bg-white rounded-md bg-gradient-to-b from-[#BE87F5] to-[#E5DDEC] border-2 border-white">
        <section className="flex items-center justify-center w-[110px] h-[100%] text-[22px] border-r-2 font-bold border-white">레전드다..</section>
        <section className="flex w-[230px] h-[100%] justify-center ">
          <div className="flex justify-center items-center w-[220px] h-[100%] text-[18px]">
            We love Landingfolio! Our beautiful flower... We love Landingfolio! Our beautiful flower...
          </div>
        </section>
      </main>
    </>
  );
}
