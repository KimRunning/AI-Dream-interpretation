"use client";
import React, { useEffect, useState } from "react";
import "./stars.css";

interface Estrela {
  style: string;
  opacity: string;
  tam: string;
  delay: number;
  left: string; // 퍼센트 단위로 변경
  top: string; // 퍼센트 단위로 변경
}

interface Meteoro {
  style: string;
  left: string; // 퍼센트 단위로 변경
}

function Stars() {
  const [estrelas, setEstrelas] = useState<Estrela[]>([]);
  const [meteoro, setMeteoro] = useState<Meteoro[]>([]);

  // 별의 위치를 계산하는 함수
  const createEstrelas = () => {
    const style = ["style1", "style2", "style3", "style4"];
    const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    const opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    const qtdeEstrelas = 250;
    const newEstrelas = [];

    for (let i = 0; i < qtdeEstrelas; i++) {
      newEstrelas.push({
        style: style[Math.floor(Math.random() * 4)],
        opacity: opacity[Math.floor(Math.random() * 6)],
        tam: tam[Math.floor(Math.random() * 5)],
        delay: Math.random(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });
    }

    setEstrelas(newEstrelas);
  };

  useEffect(() => {
    createEstrelas();

    // 유성 생성 로직 (유지)
    const carregarMeteoro = () => {
      const newMeteoro = {
        style: "style" + (Math.floor(Math.random() * 4) + 1),
        left: `${Math.random() * 100}%`,
      };

      setMeteoro(oldMeteoro => [...oldMeteoro, newMeteoro]);

      setTimeout(() => {
        setMeteoro(oldMeteoro => oldMeteoro.slice(1));
      }, 1000);
    };

    const intervalId = setInterval(carregarMeteoro, 5000 + Math.random() * 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {estrelas.map((estrela, index) => (
        <span
          key={index}
          className={`estrela ${estrela.style} ${estrela.opacity} ${estrela.tam}`}
          style={{
            animationDelay: `${estrela.delay}s`,
            left: estrela.left,
            top: estrela.top,
            position: "absolute",
          }}
        ></span>
      ))}
      {meteoro.map((meteoro, index) => (
        <div
          key={index}
          className={`meteoro ${meteoro.style}`}
          style={{
            left: meteoro.left,
            position: "absolute",
          }}
        ></div>
      ))}
    </>
  );
}

export default Stars;
