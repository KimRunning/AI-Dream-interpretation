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
      <main className=" h-[100vh] w-[100vw] flex flex-col">
        <section className="flex flex-col justify-around items-center w-[200px] h-[230px] mt-10 mb-1 text-[46px] text-[#F8E7E7] font-bold	mx-auto">
          <div className="w-[194px] h-[40px]">
            &nbsp; 꿈<span className="text-[30px]">을 통해</span>
          </div>
          <div className="w-[194px] h-[40px] ">
            &nbsp; 알<span className="text-[30px]">아보는</span>
          </div>
          <span className="w-[194px]">
            &nbsp; 무<span className="text-[30px]">의식</span>
          </span>
        </section>
        <section className="bg-black-500 w-[40%] h-[400px] mx-auto items-center flex flex-col justify-center">
          <span className="w-[450px] text-[20px] text-[#CBD0D9] font-semibold">당신이 꾼 꿈을 AI가 분석해드려요!</span>
          <form className="m-1 w-[460px] flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
            <textarea
              className="w-[450px] h-[220px] bg-white bg-opacity-90"
              value={input}
              placeholder="당신이 꾼 꿈을 적어주세요!"
              onChange={handleInputChange}
            />
            <button type="submit" className="bg-purple mt-3 w-[200px] h-[50px] rounded-md">
              분석하기
            </button>
          </form>
        </section>
        <section className="bg-purple flex flex-col w-full max-w-md py-24 mx-auto stretch">
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
