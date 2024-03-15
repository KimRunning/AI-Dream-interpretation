import React from "react";
import ListCard from "../components/listCard/listCard";

export default function Community() {
  return (
    <main className="bg-blue-300 w-full h-[88vh] flex justify-center items-center">
      <div className="bg-purple w-[75%] h-[60%] items-center flex flex-wrap-reverse justify-around ">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </main>
  );
}
