"use client";
import React, { useState } from "react";
import RandomImage from "../randomImage/randomImage";
import { useTranslation } from "../../context/translationContext";

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

  const { t } = useTranslation();

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
                <button onClick={changeQuestion}>◁ {t("CardQuestion")}</button>
                <button onClick={onClose}>{t("listCardClose")}</button>
              </div>
              <RandomImage />
              <br />
              <div className="w-[270px] h-[180px] sm:w-[380px] sm:h-[245px] text-white overflow-y-scroll scrollbar-hide text-[18px]">
                {content[1]?.content || "No content available"}
              </div>
            </>
          ) : (
            <>
              <div className="w-[290px] font-bold sm:w-[420px] flex flex-row justify-between text-[15px] sm:text-[18px] text-white mt-1">
                <button onClick={changeQuestion}>◁ {t("CardAnswer")}</button>
                <button onClick={onClose}>{t("listCardClose")}</button>
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
