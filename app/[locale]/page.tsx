"use client";
import { useEffect, useState } from "react";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import LoadingModal from "./components/loadingModal/loadingModal";
import { useTranslation } from "./context/translationContext";
import { MultyLang } from "./types";

export default function Home({ params: { locale } }: MultyLang) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hideSection, setHideSection] = useState(false);
  const { t } = useTranslation();

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    handleSubmit(event);
  };

  useEffect(() => {
    const handleResize = () => {
      setHideSection(window.innerHeight < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setModalIsOpen(isLoading);

    if (!isLoading && messages.length > 0) {
      sessionStorage.setItem("messages", JSON.stringify(messages));
      router.push(`/${locale}/result`);
    }
  }, [messages, isLoading]);

  return (
    <>
      <main className="h-[88vh] w-[100vw] flex flex-col overflow-hidden">
        <section
          className={`flex flex-col justify-around items-center w-[300px] h-[160px] mt-10 mb-7 text-[30px] pl-[140px] sm:mt-20 sm:h-[230px] sm:pl-[64px] sm:text-[46px] text-[#F8E7E7] font-bold mx-auto ${
            hideSection ? "invisible" : ""
          }`}
        >
          <div className="w-[250px] h-[25px] sm:w-[250px] sm:h-[40px]">
            &nbsp; {t("homeTitle1")}
            <span className="text-[20px] sm:text-[30px]">{t("homeTitle11")}</span>
          </div>
          <div className="w-[250px] h-[25px] sm:w-[250px] sm:h-[40px]">
            &nbsp; {t("homeTitle2")}
            <span className="text-[20px] sm:text-[30px]">{t("homeTitle21")}</span>
          </div>
          <span className="w-[250px] h-[25px] sm:w-[250px] sm:h-[40px]">
            &nbsp; {t("homeTitle3")}
            <span className="text-[20px] sm:text-[30px]">{t("homeTitle31")}</span>
          </span>
        </section>
        <section className="w-[100%] h-[45vh] mx-auto items-center flex flex-col justify-center">
          <form className="w-[80%] m-1 sm:w-[460px] flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
            <span className="mb-1 w-[80vw] text-[17px] sm:w-[450px] sm:text-[20px] text-[#CBD0D9] font-semibold">{t("explanation")}</span>
            <div>
              <textarea
                className="text-gray-500 rounded font-bold resize-none w-[80vw] h-[180px] sm:w-[450px] sm:h-[220px] bg-white bg-opacity-90"
                value={input}
                placeholder={t("placehold")}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="opacity-100 z-50 bg-[#AC5EFA] text-white mt-3 w-[180px] h-[45px] rounded-md">
              {t("workBtn")}
            </button>
          </form>
        </section>
      </main>
      <LoadingModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </>
  );
}
