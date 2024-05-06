"use client";
import Image from "next/image";
import haemong from "../../../public/Image/해몽 이미지1.jpg";
import { useEffect, useState } from "react";

interface Message {
  content: string;
  role: string;
  createdAt: string;
  id: string;
}

export default function ResultCard() {
  const [onQuestion, setOnQuestion] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const data = sessionStorage.getItem("messages");
    if (data) {
      const storedMessages: Message[] = JSON.parse(data);
      setMessages(storedMessages);
    }
  }, []);

  const toggleQuestion = () => setOnQuestion(!onQuestion);

  // 안전하게 메시지 내용을 불러오는 함수
  const getMessageContent = (index: number) => {
    return messages[index] ? messages[index].content : "No message available.";
  };

  if (!messages.length) {
    return <p>Loading messages or no messages available...</p>; // 메시지가 없을 때 안내
  }

  return (
    <div className="z-50 w-[320px] h-[450px] sm:w-[450px] sm:h-[580px] bg-gradient-to-br from-[#E7E167] to-[#D34A52] flex items-center justify-center z-10">
      <div className="z-50 w-[300px] h-[430px] sm:w-[430px] sm:h-[560px] bg-gradient-to-b from-[#733acf] to-[#312f33] flex flex-col items-center justify-between">
        <div className="w-[290px] font-bold sm:w-[420px] flex flex-row justify-between text-[15px] sm:text-[18px] text-white mt-1">
          <span onClick={toggleQuestion}>{onQuestion ? "<질문" : ""}</span>
          <span onClick={toggleQuestion}>{onQuestion ? "" : "답변 >"}</span>
        </div>
        <Image className="w-[270px] h-[180px] sm:w-[380px] sm:h-[230px] mt-1" src={haemong} alt="몽환적 이미지" />
        <div className="w-[270px] h-[180px] sm:w-[380px] sm:h-[245px] text-white overflow-y-scroll scrollbar-hide">
          {onQuestion ? getMessageContent(1) : getMessageContent(0)}
        </div>
      </div>
    </div>
  );
}
