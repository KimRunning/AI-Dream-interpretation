"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images: string[] = [
  "/DreamImage/강아지.png",
  "/DreamImage/모험가.png",
  "/DreamImage/시바견.png",
  "/DreamImage/신비한소녀.png",
  "/DreamImage/여행자.png",
  "/DreamImage/이상한나라의엘리스.png",
  "/DreamImage/폐허.png",
  "/DreamImage/해몽이미지.png",
];

const preloadImages = (srcArray: string[]): void => {
  srcArray.forEach(src => {
    const img: HTMLImageElement = new window.Image();
    img.src = src;
  });
};

export default function RandomImage(): JSX.Element {
  const [randomImage, setRandomImage] = useState<string>(images[0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    preloadImages(images); // 사전 로드

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
        priority
      />
    </div>
  );
}
