"use client";
import { useEffect } from "react";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const router = useRouter();

  const onSubmitHandler = (event: any) => {
    event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.
    handleSubmit(event); // 폼 제출 처리
  };

  useEffect(() => {
    // isLoading이 false이고 messages가 업데이트 되었을 때 실행
    if (!isLoading && messages.length > 0) {
      sessionStorage.setItem("messages", JSON.stringify(messages)); // messages 배열을 sessionStorage에 저장
      router.push("/result");
    }
  }, [messages, isLoading]); // messages 또는 isLoading 상태가 변경될
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
        <section className="w-[100%] h-[45vh] mx-auto items-center flex flex-col justify-center">
          <form className="w-[80%] m-1 sm:w-[460px] flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
            <span className="mb-1 w-[80%] text-[17px] sm:w-[450px] sm:text-[20px] text-[#CBD0D9] font-semibold">해몽 전문 AI가 분석해드려요!</span>
            <textarea
              className="text-gray-500 rounded font-bold resize-none w-[80vw] h-[180px] sm:w-[450px] sm:h-[220px] bg-white bg-opacity-90"
              value={input}
              placeholder="당신이 꾼 꿈을 적어주세요!"
              onChange={handleInputChange}
            />
            <button type="submit" className="opacity-100 z-50 bg-[#AC5EFA] text-white mt-3 w-[180px] h-[45px] rounded-md">
              분석하기
            </button>
          </form>
        </section>
        {/* {!isLoading && ( // 로딩이 완료된 후에 메시지 표시
          <section className="bg-purple flex flex-col w-full h-[5px] mx-auto stretch">
            {messages.map(m => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))}
          </section>
        )} */}
      </main>
    </>
  );
}
