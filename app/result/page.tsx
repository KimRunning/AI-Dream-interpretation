"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResultCard from "../components/resultCard/resultCard";

export default function Result() {
  const saveHandler = async () => {
    const dream = sessionStorage.getItem("messages");
    const response = await fetch("/api/saveDream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dream }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("카드 저장 완료:", data);
      toast("카드가 저장 되었습니다");
    } else {
      const error = await response.json();
      console.error("카드 저장 중 오류 발생:", error);
      toast("카드가 저장 되었습니다");
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
                className="z-50 bg-[#E7E167] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold"
              >
                저장 / 게시
              </button>
              <button className="z-50 bg-[#E17F38] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">
                게시판 가기
              </button>
              <button className="z-50 bg-[#D34A52] w-[100px] h-[28px] sm:w-[130px] sm:h-[35px] rounded mt-[15px] border-[1px] border-white font-semibold">
                SNS 공유
              </button>
            </div>
          </div>
        </section>
        <section className="w-[100%] h-[13vh] flex justify-center "></section>
      </main>
    </>
  );
}
