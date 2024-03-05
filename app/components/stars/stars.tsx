"use client";
import React, { useEffect, useState } from "react";
import "./stars.css";

interface Estrela {
  style: string;
  opacity: string;
  tam: string;
  delay: number;
  left: number;
  top: number;
}

interface Meteoro {
  style: string;
  left: number;
}

// 컴포넌트 이름은 대문자로 시작해야 합니다.
function Stars() {
  const [estrelas, setEstrelas] = useState<Estrela[]>([]);
  const [meteoro, setMeteoro] = useState<Meteoro[]>([]);
  useEffect(() => {
    // 별 생성 로직
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
          left: Math.floor(Math.random() * window.innerWidth),
          top: Math.floor(Math.random() * window.innerHeight),
        });
      }

      setEstrelas(newEstrelas);
    };
    // 유성 생성 로직
    const carregarMeteoro = () => {
      const newMeteoro = {
        style: "style" + (Math.floor(Math.random() * 4) + 1),
        left: Math.floor(Math.random() * window.innerWidth),
      };

      setMeteoro(oldMeteoro => [...oldMeteoro, newMeteoro]);

      setTimeout(() => {
        setMeteoro(oldMeteoro => oldMeteoro.slice(1));
      }, 1000);
    };

    createEstrelas();

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
            left: `${estrela.left}px`,
            top: `${estrela.top}px`,
            position: "absolute",
          }}
        ></span>
      ))}
      {meteoro.map((meteoro, index) => (
        <div
          key={index}
          className={`meteoro ${meteoro.style}`}
          style={{
            left: `${meteoro.left}px`,
            position: "absolute",
          }}
        ></div>
      ))}
    </>
  );
}

export default Stars;
