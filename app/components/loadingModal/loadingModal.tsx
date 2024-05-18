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
        <Image className="w-20 h-20 bg-contain bg-no-repeat bg-center animate-spin mx-auto mb-4" src={moonIcon} alt="꿈알무 아이콘" />
        <h2 className="text-4xl mb-4 text-bold">분석 중</h2>
        <br />
        <p className="text-xl text-center text-semibold ">
          "꿈은 무의식적인 욕망과 감정이 수면 중에 억압에서 풀려나와 표출되는 과정이며 꿈의 해석은 심리적 이해와 치료를 돕는 수단이다"
          <br />
          <br />
          <p className="text-2xl text-semibold">- 프로이트 -</p>
        </p>
      </div>
    </div>
  );
};

export default LoadingModal;
