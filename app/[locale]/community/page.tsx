"use client";
import React, { useEffect, useMemo, useState, useCallback, useRef, FormEvent } from "react";
import ListCard from "../components/listCard/listCard";
import { useSearch } from "../context/SearchContext";
import throttle from "lodash/throttle";
import { useTranslation } from "../context/translationContext";
import Head from "next/head";
import { LocaleTypes } from "@/utils/localization/settings";

// Community 컴포넌트의 Props 인터페이스 정의
interface CommunityProps {
  params: {
    locale: LocaleTypes;
  };
}

export default function Community({ params: { locale } }: CommunityProps) {
  const { searchQuery, setSearchQuery, fetchDreams, dreams, nextCursor, setDreams, setNextCursor } = useSearch();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
      const { dreams, nextCursor } = await fetchDreams(searchQuery);
      setDreams(dreams);
      setNextCursor(nextCursor);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrollOrTouchMove = useCallback(
    throttle(async () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollHeight - scrollTop <= clientHeight * 1.1 && !isLoading && nextCursor) {
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
      container.addEventListener("scroll", handleScrollOrTouchMove);
      container.addEventListener("touchmove", handleScrollOrTouchMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollOrTouchMove);
        container.removeEventListener("touchmove", handleScrollOrTouchMove);
      }
    };
  }, [handleScrollOrTouchMove]);

  const renderDreams = useMemo(() => {
    return <ListCard dreams={dreams} />;
  }, [dreams]);

  const getMetaTags = (locale: LocaleTypes) => {
    const meta = {
      ko: {
        title: "꿈 해몽 - 꿈을 통해 알아보는 무의식",
        description: "AI가 제공하는 꿈 해몽 서비스. 당신의 꿈을 분석하고 해석하여 무의식의 메시지를 알아보세요.",
        keywords: "꿈 해몽, 꿈 분석, AI 꿈 해몽, 꿈 해석, 무의식, 꿈 풀이",
      },
      en: {
        title: "Dream Interpretation - AI-based Dream Analysis Service",
        description: "AI-powered dream interpretation service. Analyze and understand the messages of your subconscious through your dreams.",
        keywords: "dream interpretation, dream analysis, AI dream interpretation, dream decoding, subconscious, dream meaning",
      },
      in: {
        title: "Interpretasi Mimpi - Layanan Analisis Mimpi Berbasis AI",
        description: "Layanan interpretasi mimpi yang didukung oleh AI. Analisis dan pahami pesan dari alam bawah sadar Anda melalui mimpi Anda.",
        keywords: "interpretasi mimpi, analisis mimpi, interpretasi mimpi AI, dekode mimpi, bawah sadar, arti mimpi",
      },
      de: {
        title: "Traumdeutung - KI-basierter Traumanalyse-Service",
        description: "KI-gestützter Traumdeutungsdienst. Analysieren und verstehen Sie die Botschaften Ihres Unterbewusstseins durch Ihre Träume.",
        keywords: "Traumdeutung, Traumanalyse, KI-Traumdeutung, Traumdeutung, Unterbewusstsein, Traumdeutung",
      },
      ja: {
        title: "夢の解釈 - AIベースの夢分析サービス",
        description: "AIが提供する夢の解釈サービス。あなたの夢を分析し、潜在意識のメッセージを理解しましょう。",
        keywords: "夢の解釈, 夢の分析, AI夢の解釈, 夢の解読, 潜在意識, 夢の意味",
      },
      fr: {
        title: "Interprétation des rêves - Service d'analyse des rêves basé sur l'IA",
        description: "Service d'interprétation des rêves alimenté par l'IA. Analysez et comprenez les messages de votre subconscient à travers vos rêves.",
        keywords: "interprétation des rêves, analyse des rêves, interprétation des rêves par l'IA, décryptage des rêves, subconscient, signification des rêves",
      },
    };

    return meta[locale] || meta.en;
  };

  const metaTags = getMetaTags(locale);

  return (
    <main className="w-full h-[88vh] flex flex-col items-center overflow-hidden relative">
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content="Turtle Step" />
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dreaminterpretationai.com/community" />
        <meta property="og:site_name" content="Dream Interpretation AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTags.title} />
        <meta name="twitter:description" content={metaTags.description} />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/en/community" hrefLang="en" />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/ko/community" hrefLang="ko" />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/ja/community" hrefLang="ja" />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/de/community" hrefLang="de" />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/in/community" hrefLang="in" />
        <link rel="alternate" href="https://www.dreaminterpretationai.com/fr/community" hrefLang="fr" />
        <link rel="canonical" href="https://www.dreaminterpretationai.com/community" />
      </Head>
      <span className="text-[50px] text-[#F8E7E7] font-bold mb-4 mt-2 cursor-pointer" onClick={fetchInitialDreams}>
        {t("communityTitle")}
      </span>
      <section className="w-[95%] h-[75%] flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center">
          <div ref={containerRef} className=" justify-center gap-2 sm:gap-4 w-[95%] sm:w-[64%] h-[86%] items-center flex flex-wrap overflow-y-scroll">
            {renderDreams}
          </div>
        </div>
        <div className="flex flex-row w-[370px] mt-4 md:w-[800px] h-[10%] items-end justify-center">
          <div className="relative">
            <form onSubmit={handleSearchClick}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder={t("searchText")}
                className="w-[360px] h-[40px] font-bold border-3 border-[#B3B8DF] rounded-md pl-2 pr-10"
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
