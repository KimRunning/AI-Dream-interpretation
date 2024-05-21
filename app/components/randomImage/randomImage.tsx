"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Image/강아지.png",
  "/Image/고양이.png",
  "/Image/달리는_소녀.png.png ",
  "/Image/돌고래.png.png ",
  "/Image/벨루가.png ",
  "/Image/시바견.png ",
  "/Image/신비한_소녀.png.png ",
  "/Image/아기호랑이.png ",
  "/Image/여행자.png ",
  "/Image/이상한_나라의_엘리스.png.png",
  "/Image/폐허.png",
  "/Image/해몽이미지.png",
];

export default function RandomImage() {
  const [randomImage, setRandomImage] = useState<string>(images[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return <Image className="w-[270px] h-[180px] sm:w-[380px] sm:h-[230px] mt-1" src={randomImage} alt="몽환적 이미지" width={380} height={230} />;
}
