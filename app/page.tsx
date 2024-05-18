"use client";
import { useEffect, useState } from "react";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import LoadingModal from "./components/loadingModal/loadingModal";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hideSection, setHideSection] = useState(false);

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
      router.push("/result");
    }
  }, [messages, isLoading]);

  return (
    <>
      <main className="h-[88vh] w-[100vw] flex flex-col overflow-hidden">
        <section
          className={`flex flex-col justify-around items-center w-[200px] h-[160px] mt-5 mb-7 text-[30px] pl-[40px] sm:h-[230px] sm:pl-[0px] sm:text-[46px] text-[#F8E7E7] font-bold mx-auto ${
            hideSection ? "invisible" : ""
          }`}
        >
          <div className="w-[150px] h-[25px] sm:w-[194px] sm:h-[40px]">
            &nbsp; 꿈<span className="text-[20px] sm:text-[30px]">을 통해</span>
          </div>
          <div className="w-[150px] h-[25px] sm:w-[194px] sm:h-[40px]">
            &nbsp; 알<span className="text-[20px] sm:text-[30px]">아보는</span>
          </div>
          <span className="w-[150px] h-[25px] sm:w-[194px] sm:h-[40px]">
            &nbsp; 무<span className="text-[20px] sm:text-[30px]">의식</span>
          </span>
        </section>
        <section className="w-[100%] h-[45vh] mx-auto items-center flex flex-col justify-center">
          <form className="w-[80%] m-1 sm:w-[460px] flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
            <span className="mb-1 w-[80vw] text-[17px] sm:w-[450px] sm:text-[20px] text-[#CBD0D9] font-semibold">해몽 전문 AI가 분석해드려요!</span>
            <div>
              <textarea
                className="text-gray-500 rounded font-bold resize-none w-[80vw] h-[180px] sm:w-[450px] sm:h-[220px] bg-white bg-opacity-90"
                value={input}
                placeholder="당신이 꾼 꿈을 들려주세요..!"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="opacity-100 z-50 bg-[#AC5EFA] text-white mt-3 w-[180px] h-[45px] rounded-md">
              분석하기
            </button>
          </form>
        </section>
      </main>
      <LoadingModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </>
  );
}
