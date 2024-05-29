"use client";
import React, { useEffect, useState } from "react";
import "./stars.css";

interface Estrela {
  style: string;
  opacity: string;
  tam: string;
  delay: number;
  left: string;
  top: string;
}

function Stars() {
  const [estrelas, setEstrelas] = useState<Estrela[]>([]);

  const createEstrelas = () => {
    const style = ["style1", "style2", "style3", "style4"];
    const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    const opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    const qtdeEstrelas = 100;
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
    </>
  );
}

export default Stars;
