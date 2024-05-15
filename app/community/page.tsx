"use client";
import React, { useEffect, useMemo, useState } from "react";
import ListCard from "../components/listCard/listCard";
import { useSearch } from "../context/SearchContext";

export default function Community() {
  const { searchQuery, setSearchQuery, fetchDreams, resetSearch, dreams } = useSearch();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDreams();
  }, [fetchDreams]);

  const handleSearchClick = () => {
    fetchDreams(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleLinkClick = () => {
    resetSearch();
    fetchDreams();
  };

  const renderDreams = useMemo(() => {
    return <ListCard dreams={dreams} />;
  }, [dreams]);

  return (
    <main className=" w-full h-[88vh] flex flex-col items-center">
      <span className="text-[50px] text-[#F8E7E7] font-bold mb-4 mt-2 cursor-pointer" onClick={handleLinkClick}>
        Dreams
      </span>
      <section className="w-[95%] h-[75%]  flex flex-col items-center justify-around">
        <div className="justify-center gap-2 ml-4 sm:gap-4 w-[95%] sm:w-[64%] h-[86%] items-center flex flex-wrap 2xl:pl-8 overflow-y-scroll 2xl:justify-start">
          {renderDreams}
        </div>
        <div className="flex flex-row w-[370px] md:w-[800px] h-[10%] items-end justify-center">
          <div className="relative">
            <input
              className="w-[360px] h-[40px] font-bold border-3 border-[#B3B8DF] rounded-md pl-2 sm:ml-6 pr-10"
              placeholder="질문 또는 답변의 내용을 입력해 주세요..!"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearchClick}
              className="absolute inset-y-0 right-2 w-10 h-full flex items-center justify-center"
              style={{
                backgroundImage: "url(/Icon/readingGlasses.png)",
                backgroundSize: "25px 25px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></button>
          </div>
        </div>
      </section>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </main>
  );
}
