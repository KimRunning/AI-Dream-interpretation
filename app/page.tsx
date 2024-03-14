"use client";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const onSubmitHandler = (event: any) => {
    event.preventDefault(); // 페이지 새로고침 방지
    handleSubmit(event); // useChat 훅에서 제공된 handleSubmit 함수 호출
  };

  return (
    <>
      <main className=" h-[88vh] w-[100vw] flex flex-col">
        <section className="flex flex-col justify-around items-center w-[200px] h-[160px] mt-5 mb-7 text-[30px] pl-[40px] sm:h-[230px] sm:pl-[0px] sm:text-[46px] text-[#F8E7E7] font-bold	mx-auto">
          <div className=" w-[150px] h-[25px] sm:w-[194px] sm:h-[40px]">
            &nbsp; 꿈<span className="text-[20px] sm:text-[30px]">을 통해</span>
          </div>
          <div className="w-[150px] h-[25px] sm:w-[194px] sm:h-[40px] ">
            &nbsp; 알<span className="text-[20px] sm:text-[30px]">아보는</span>
          </div>
          <span className="w-[150px] h-[25px] sm:w-[194px] sm:h-[40px]">
            &nbsp; 무<span className="text-[20px] sm:text-[30px]">의식</span>
          </span>
        </section>
        <section className="w-[100%] h-[400px] mx-auto items-center flex flex-col justify-center">
          <form className="w-[80%] m-1 sm:w-[460px] flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
            <span className="mb-1 w-[80%] text-[17px] sm:w-[450px] sm:text-[20px] text-[#CBD0D9] font-semibold">해몽 전문 AI가 분석해드려요!</span>
            <textarea
              className="text-gray-500 font-bold w-[80%] h-[200px] sm:w-[450px] sm:h-[220px] bg-white bg-opacity-90"
              value={input}
              placeholder="당신이 꾼 꿈을 적어주세요!"
              onChange={handleInputChange}
            />
            <button type="submit" className="opacity-100 z-50 bg-[#AC5EFA] text-white mt-3 w-[180px] h-[45px] rounded-md">
              분석하기
            </button>
          </form>
        </section>
        <section className="bg-purple flex flex-col w-full max-w-md h-[5px] py-24 mx-auto stretch">
          {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
