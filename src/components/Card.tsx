"use client";
import React, { useState } from "react";
import BackContent from "./BackContent";
import Image from "next/image";

const Card = ({ frontContent }: { frontContent: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOnClick = () => {
    setIsFlipped(true);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`card ${
        isFlipped ? "flip" : ""
      } border-[12px] border-white rounded-xl shadow-2xl max-md:w-full  `}
    >
      <div className="front flex flex-col items-center justify-center ">
        <Image
          src="/hearts.png"
          height={140}
          width={140}
          alt="Hearts"
          className="absolute top-5 "
        />
        <h4>Dear Crush</h4>
        <div className=" bg-white p-20 text-black shadow-2xl text-[40px] font-serif cursor-pointer">
          {frontContent}
        </div>
      </div>
      <BackContent />
    </div>
  );
};

export default Card;
