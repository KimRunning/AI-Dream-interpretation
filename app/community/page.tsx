"use client";
import React, { useEffect, useMemo, useState, useCallback, useRef, FormEvent } from "react";
import ListCard from "../components/listCard/listCard";
import { useSearch } from "../context/SearchContext";
import throttle from "lodash/throttle";

export default function Community() {
  const { searchQuery, setSearchQuery, fetchDreams, dreams, nextCursor, setDreams, setNextCursor } = useSearch();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchInitialDreams = useCallback(async () => {
    setIsLoading(true);
    setSearchQuery("");
    try {
      const { dreams, nextCursor } = await fetchDreams("");
      setDreams(dreams);
      setNextCursor(nextCursor);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [fetchDreams, setDreams, setNextCursor, setSearchQuery]);

  useEffect(() => {
    fetchInitialDreams();
  }, [fetchInitialDreams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = async (event?: FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    setIsLoading(true);
    try {
      const { dreams, nextCursor } = await fetchDreams(searchQuery); // 검색어를 포함하여 데이터 가져오기
      setDreams(dreams);
      setNextCursor(nextCursor);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = useCallback(
    throttle(async () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollHeight - scrollTop === clientHeight && !isLoading && nextCursor) {
          setIsLoading(true);
          const { dreams: newDreams, nextCursor: newNextCursor } = await fetchDreams(searchQuery, nextCursor);
          setDreams(prevDreams => [...prevDreams, ...newDreams]);
          setNextCursor(newNextCursor);
          setIsLoading(false);
        }
      }
    }, 200),
    [isLoading, nextCursor, fetchDreams, searchQuery, setDreams, setNextCursor]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  const renderDreams = useMemo(() => {
    return <ListCard dreams={dreams} />;
  }, [dreams]);

  return (
    <main className="w-full h-[88vh] flex flex-col items-center scroll-none relative">
      <span className="text-[50px] text-[#F8E7E7] font-bold mb-4 mt-2 cursor-pointer" onClick={fetchInitialDreams}>
        Dreams
      </span>
      <section className="w-[95%] h-[75%] flex flex-col items-center justify-around">
        <div
          ref={containerRef}
          className="justify-center gap-2 ml-4 sm:gap-4 w-[95%] sm:w-[64%] h-[86%] items-center flex flex-wrap 2xl:pl-8 overflow-y-scroll 2xl:justify-start"
        >
          {renderDreams}
        </div>
        <div className="flex flex-row w-[370px] md:w-[800px] h-[10%] items-end justify-center">
          <div className="relative">
            <form onSubmit={handleSearchClick}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="질문 또는 답변의 내용을 입력해 주세요..!"
                className="w-[360px] h-[40px] font-bold border-3 border-[#B3B8DF] rounded-md pl-2 sm:ml-6 pr-10"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-2 w-10 h-full flex items-center justify-center"
                style={{
                  backgroundImage: "url(/Icon/readingGlasses.png)",
                  backgroundSize: "25px 25px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></button>
            </form>
          </div>
        </div>
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-transparent p-6 rounded-lg shadow-lg">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-200 mx-auto "></div>
            </div>
          </div>
        )}
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </section>
    </main>
  );
}
