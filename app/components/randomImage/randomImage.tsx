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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return <Image className="w-[270px] h-[180px] sm:w-[380px] sm:h-[230px] mt-1" src={randomImage} alt="몽환적 이미지" width={380} height={230} />;
}
