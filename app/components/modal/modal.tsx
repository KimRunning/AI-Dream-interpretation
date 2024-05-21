"use client";
import React, { useState } from "react";
import Image from "next/image";
import haemong from "../../../public/Image/해몽 이미지1.jpg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: DreamContent[];
}

interface DreamContent {
  id: string;
  createdAt: string;
  content: string;
  role: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const [onQuestion, setOnQuestion] = useState(false);

  const changeQuestion = () => {
    setOnQuestion(!onQuestion);
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    onClose();
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <main onClick={handleBackgroundClick} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <section
        onClick={stopPropagation}
        className="w-[320px] h-[450px] sm:w-[450px] sm:h-[580px] bg-gradient-to-br from-[#E7E167] to-[#D34A52] flex items-center justify-center"
      >
        <div className="z-50 w-[300px] h-[430px] sm:w-[430px] sm:h-[560px] bg-gradient-to-b from-[#733acf] to-[#312f33] flex flex-col items-center ">
          {onQuestion ? (
            <>
              <div className="w-[290px] font-bold sm:w-[420px] flex flex-row justify-between text-[15px] sm:text-[18px] text-white mt-1">
                <button onClick={changeQuestion}>◁ 질문</button>
                <button onClick={onClose}>닫기</button>
              </div>
              <Image className="w-[270px] h-[180px] sm:w-[380px] sm:h-[230px] mt-1" src={haemong} alt="몽환적 이미지" />
              <br />
              <div className="w-[270px] h-[180px] sm:w-[380px] sm:h-[245px] text-white overflow-y-scroll scrollbar-hide text-[18px]">
                {content[1]?.content || "No content available"}
              </div>
            </>
          ) : (
            <>
              <div className="w-[290px] font-bold sm:w-[420px] flex flex-row justify-between text-[15px] sm:text-[18px] text-white mt-1">
                <button onClick={changeQuestion}>◁ 답변</button>
                <button onClick={onClose}>닫기</button>
              </div>
              <br />
              <div className="w-[270px] h-[180px] text-[18px] sm:w-[380px] sm:h-[245px] text-white overflow-y-scroll scrollbar-hide">
                {content[0]?.content || "No content available"}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Modal;
