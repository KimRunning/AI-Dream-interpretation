import React from "react";
import Image from "next/image";
import moonIcon from "../../../public/Icon/해몽Icon.png";

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex  justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md sm:w-[500px] text-center relative">
        <Image className="w-20 h-20 bg-contain bg-no-repeat bg-center animate-spin mx-auto mb-4" src={moonIcon} alt="몽환적 이미지" />
        <h2 className="text-4xl mb-4">분석 중</h2>
        <br />
        <p className="text-2xl text-start ">
          꿈은 종종 무의식의 요소들을 시각적이고 감각적인 형태로 표현합니다. 이를 통해 우리는 내면세계를 탐험하거나 잠재적인 감정을 탐구할 수 있습니다.
        </p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          닫기
        </button>
      </div>
    </div>
  );
};

export default LoadingModal;
