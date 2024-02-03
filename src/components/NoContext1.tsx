import Image from "next/image";
import React from "react";
import YesContent from "./YesContent";
import NoContext2 from "./NoContext2";

const NoContext1 = ({ proposal, setProposal }: any) => {
  return (
    <>
      {proposal == "yes" ? (
        <YesContent proposal={proposal} />
      ) : proposal == "no2" ? (
        <NoContext2 />
      ) : (
        <div className="flex flex-col items-center">
          <Image src="/please-cat.gif" height={400} width={400} alt="cat gif" />
          <h2 className="text-[#751127] valen text-5xl font-bold">Please...</h2>
          <div className=" flex gap-7 mt-10">
            <button
              className="border rounded-full bg-red-500  px-20 py-3"
              onClick={() => setProposal("yes")}
            >
              Yes
            </button>
            <button
              className="border-2 border-red-500 rounded-full px-20 py-3 text-red-500 "
              onClick={() => setProposal("no2")}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoContext1;
