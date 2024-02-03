"use client";
import { useState } from "react";
import BackIndex from "./BackIndex";
import YesContent from "./YesContent";
import NoContext1 from "./NoContext1";
import NoContext2 from "./NoContext2";

const BackContent = () => {
  const [proposal, setProposal] = useState(null);
  return (
    <div className="back flex flex-col items-center justify-center  bg-white">
      {proposal == "yes" ? (
        <YesContent proposal={proposal} />
      ) : proposal == "no" ? (
        <NoContext1 proposal={proposal} setProposal={setProposal} />
      ) : proposal == "no2" ? (
        <NoContext2 />
      ) : (
        <BackIndex setProposal={setProposal} />
      )}
    </div>
  );
};

export default BackContent;
