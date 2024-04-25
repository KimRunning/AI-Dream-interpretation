"use client";
import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";

export default function ListCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    console.log("모달 On");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    console.log("모달 Off");
  };

  const fullText = `만약 여러 줄의 텍스트에 대해 처리를 하고 싶다면, 이는 CSS만으로 해결할 수 있는 부분이 아닙니다. JavaScript를 사용하여 텍스트 길이를 제한하고, 넘치는 부분을 로 대체하는 로직을 구현해야 합니다. 예를 들어, React 컴포넌트에서 텍스트를 처리하고 조건에 따라를 추가하는 방법을 고려할 수 있습니다.`;

  const [maxChars, setMaxChars] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      // 여기서 "sm" 사이즈를 640px로 가정합니다. 프로젝트의 실제 breakpoint에 맞게 조정하세요.
      setMaxChars(window.innerWidth >= 640 ? 14 : 20);
    };

    // 컴포넌트 마운트 시 뷰포트 너비 체크
    handleResize();

    // 뷰포트 너비 변경 시 업데이트
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayText = fullText.length > maxChars ? `${fullText.substring(0, maxChars)}...` : fullText;
  return (
    <>
      <main
        onClick={handleOpenModal}
        className="flex flex-col w-[360px] h-[55px] items-center sm:w-[340px] sm:h-[150px]  rounded-md bg-[#E4CBED] sm:bg-[#E4CBED] border-b-[1px] border-black border-opacity-50 sm:border-2 sm:border-white"
      >
        <section className="flex items-center justify-between w-[95%]  h-[25%]">
          <span className="text-start w-50% h-[80%] text-[16px] sm:text-[18px]">레전드오리진</span>
          <span className="text-end w-45% h-[80%] h-[100%] text-[16px]  sm:text-[18px] ">1개월 전</span>
        </section>
        <section className="flex text-center sm:text-left w-[100%] h-[75%] sm:w-[90%] sm:h-[75%] justify-center ">
          <div className="flex justify-center font-bold text-[15px] items-center w-[90%] h-[100%] sm:text-[24px] sm:w-[95%] sm:h-[100%] sm:whitespace-normal whitespace-nowrap">
            {displayText}
          </div>
        </section>
      </main>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
