"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/DreamImage/강아지.png",
  "/DreamImage/고양이.png",
  "/DreamImage/달리는소녀.png",
  "/DreamImage/돌고래.png",
  "/DreamImage/모험가.png",
  "/DreamImage/벨루가.png",
  "/DreamImage/시바견.png",
  "/DreamImage/신비한소녀.png",
  "/DreamImage/아기호랑이.png",
  "/DreamImage/여행자.png",
  "/DreamImage/이상한나라의엘리스.png",
  "/DreamImage/폐허.png",
  "/DreamImage/해몽이미지.png",
];

export default function RandomImage() {
  const [randomImage, setRandomImage] = useState<string>(images[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
    setIsLoading(false);
  }, []);

  return (
    <div className="relative w-[270px] h-[180px] sm:w-[380px] sm:h-[230px] mt-1">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <Image
        src={randomImage}
        alt="몽환적 이미지"
        layout="fill"
        objectFit="cover"
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}
