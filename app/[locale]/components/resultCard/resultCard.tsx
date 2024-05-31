"use client";
import { useEffect, useState } from "react";
import RandomImage from "../randomImage/randomImage";
import { useTranslation } from "../../context/translationContext";

interface Message {
  content: string;
  role: string;
  createdAt: string;
  id: string;
}

export default function ResultCard() {
  const [onQuestion, setOnQuestion] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const data = sessionStorage.getItem("messages");
    if (data) {
      const storedMessages: Message[] = JSON.parse(data);
      setMessages(storedMessages);
    }
  }, []);

  const toggleQuestion = () => setOnQuestion(!onQuestion);

  const getMessageContent = (index: number) => {
    return messages[index] ? messages[index].content : "No message available.";
  };

  if (!messages.length) {
    return <p>Loading messages or no messages available...</p>;
  }

  return (
    <div
      className="w-[320px] h-[450px] sm:w-[450px] sm:h-[580px] bg-gradient-to-br from-[#E7E167] to-[#D34A52] flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      <div
        className="w-[300px] h-[430px] sm:w-[430px] sm:h-[560px] bg-gradient-to-b from-[#733acf] to-[#312f33] flex flex-col items-center justify-between"
        style={{ zIndex: 50 }}
      >
        <div className="w-[290px] font-bold sm:w-[420px] flex flex-row justify-between text-[15px] sm:text-[18px] text-white mt-1">
          <button onClick={toggleQuestion}>{onQuestion ? `${t("CardQuestion")}▷` : ""}</button>
          <button onClick={toggleQuestion}>{onQuestion ? "" : `${t("CardAnswer")}▷`}</button>
        </div>
        <RandomImage />
        <div className="w-[270px] h-[180px] sm:w-[380px] sm:h-[245px] text-white overflow-y-scroll scrollbar-hide">
          {onQuestion ? getMessageContent(1) : getMessageContent(0)}
        </div>
      </div>
    </div>
  );
}
