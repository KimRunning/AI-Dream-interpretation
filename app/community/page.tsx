"use client";
// Community.tsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import ListCard from "../components/listCard/listCard";

// Dream 인터페이스 정의 (ListCard와 일치하도록 `content`를 사용)
interface DreamContent {
  id: string;
  createdAt: string;
  content: string;
  role: string;
}

interface Dream {
  content: DreamContent[];
  _id: string;
}

export default function Community() {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDreams = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch("/api/getDream", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching dreams data");
      }

      const data = await response.json();
      const transformedDreams: Dream[] = data.map((dream: any) => ({
        content: dream.dream, // 원래 `dream` 필드를 `content`로 변환
        _id: dream._id, // 고유 식별자
      }));
      setDreams(transformedDreams); // 변환된 데이터로 상태 업데이트
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      console.error("Error fetching dreams data:", err);
    }
  }, []);

  useEffect(() => {
    fetchDreams();
  }, [fetchDreams]);

  const handleSearchClick = useCallback(() => {
    console.log("검색버튼");
  }, []);

  const renderDreams = useMemo(() => {
    return <ListCard dreams={dreams} />;
  }, [dreams]);

  return (
    <main className="w-full h-[88vh] flex flex-col items-center">
      <span className="text-[50px] text-[#F8E7E7] font-bold mb-4 mt-2">Dreams</span>
      <section className="w-[95%] h-[75%] flex flex-col items-center justify-around">
        <div className="justify-center gap-4 w-[95%] mr-6 sm:mr-0 sm:w-[64%] h-[86%] items-center flex flex-wrap 2xl:pl-8 overflow-y-scroll 2xl:justify-start">
          {renderDreams}
        </div>
        <div className="flex flex-row w-[370px] md:w-[800px] h-[10%] items-end justify-center">
          <div className="relative">
            <input
              className="w-[210px] md:w-[320px] h-[35px] font-bold border-3 border-[#B3B8DF] rounded-md pl-2 pr-10"
              placeholder="내용을 입력해 주세요..!"
            />
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
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </main>
  );
}
