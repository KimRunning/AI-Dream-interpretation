"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResultCard from "../components/resultCard/resultCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "../context/translationContext";
import { MultyLang } from "../types";

interface Dream {
  id: string;
  createdAt: string;
  content: string;
  role: string;
}

export default function Result({ params: { locale } }: MultyLang) {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let dreamData: string | null = sessionStorage.getItem("messages");
    if (dreamData && dreamData.includes("We can only answer questions about the content of your dreams.")) {
      setIsButtonDisabled(true);
    }
  }, []);

  const saveHandler = async () => {
    setIsLoading(true);
    let dreamData: string | null = sessionStorage.getItem("messages");

    if (dreamData === null) {
      console.error("dreamData is null");
      toast(t("ToastDataNull"));
      setIsLoading(false);
      return;
    }

    try {
      const parsedDreamData = JSON.parse(dreamData);
      if (!Array.isArray(parsedDreamData)) {
        throw new Error("dreamData is not an array");
      }

      const transformedDream: Dream[] = parsedDreamData.map(
        (dream: any): Dream => ({
          id: dream.id,
          createdAt: dream.createdAt,
          content: dream.content,
          role: dream.role,
        })
      );
      console.log(transformedDream);
      const response = await fetch("/api/saveDream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dream: transformedDream }),
      });

      if (response.ok) {
        const data = await response.json();
        toast(t("ToastSuccess"));
        console.log(data);
      } else {
        const error = await response.json();
        console.error(t("ToastFail"), error);
        toast(error.message);
      }
    } catch (error) {
      console.error("Error parsing dreamData or mapping:", error);
      toast(t("ToastMappingError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} limit={1} hideProgressBar theme="light" />
      <main className="w-full h-[88vh] ">
        <section className="w-full h-[75vh]  flex flex-row items-center justify-center">
          <div className="h-[85%]">
            <ResultCard />
            <div className=" flex flex-row justify-between h-[25px]">
              <button
                onClick={saveHandler}
                className={`z-50 w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold ${
                  isButtonDisabled ? "bg-gray-600 border-gray-600 cursor-not-allowed" : "bg-[#E7E167]"
                }`}
                disabled={isButtonDisabled}
              >
                {t("resultBtn1")}
              </button>
              <Link
                href={`/${locale}/community`}
                className="z-50 bg-[#E17F38] flex items-center justify-center w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold"
              >
                {t("resultBtn2")}
              </Link>
              <Link
                href={`/${locale}`}
                className="z-50 bg-[#D34A52] flex items-center justify-center w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold"
              >
                {t("resultBtn3")}
              </Link>
            </div>
          </div>
        </section>
        <section className="w-[100%] h-[13vh] flex justify-center "></section>
      </main>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-200 mx-auto"></div>
          </div>
        </div>
      )}
    </>
  );
}
