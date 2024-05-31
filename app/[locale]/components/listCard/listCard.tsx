"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import { Dream } from "@/app/[locale]/types";
import { useTranslation } from "../../context/translationContext";

interface ListCardProps {
  dreams: Dream[];
}

const ListCard: React.FC<ListCardProps> = ({ dreams }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleOpenModal = (id: string) => {
    setActiveModalId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveModalId(null);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " · · ·";
    }
    return text;
  };

  return (
    <>
      {dreams.map(dream => (
        <main
          onClick={() => handleOpenModal(dream._id)}
          className="flex flex-col w-[360px] h-[50px]  items-center rounded-md border-2 sm:border-4 border-white sm:h-[150px]"
          key={dream._id}
        >
          <section className="w-[100%] h-[75%] flex justify-center m-auto">
            {dream.dream && dream.dream.length > 0 ? (
              <div className="m-auto text-[#F8E7E7] text-[20px] sm:text-[22px] whitespace-normal font-semibold">{truncateText(dream.dream[0].content, 12)}</div>
            ) : (
              <div className="m-auto text-[#F8E7E7] text-[20px] sm:text-[22px] whitespace-normal font-semibold">No content available</div>
            )}
          </section>
          <Modal isOpen={isModalOpen && activeModalId === dream._id} onClose={handleCloseModal} content={dream.dream} />
        </main>
      ))}
    </>
  );
};

export default ListCard;
