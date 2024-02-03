"use client";
import Image from "next/image";
import { useState } from "react";

const YesContent = ({ proposal }: any) => {
  const [stopAudio, setStopAudio] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  setTimeout(() => {
    setDisplayButton(true);
  }, 8000);

  return (
    <div>
      {proposal == "yes" ? (
        <div className="flex flex-col items-center">
          <h2 className="text-[#751127] valen text-5xl font-bold">Yehhh !</h2>
          <Image src="/dog1.gif" height={400} width={400} alt="cat gif" />
          {displayButton ? (
            <button
              className="border-2 border-red-500 rounded-full px-20 py-3 text-red-500 "
              onClick={() => setStopAudio(true)}
            >
              stop audio
            </button>
          ) : null}

          {stopAudio ? (
            ""
          ) : (
            <audio autoPlay loop>
              <source src="/audio1.mp3"></source>
            </audio>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default YesContent;
