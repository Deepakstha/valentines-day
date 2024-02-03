import Image from "next/image";

const BackIndex = ({ setProposal }: any) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="top flex flex-col items-center ">
          <h2 className="text-[#751127] valen text-5xl font-bold max-md:text-xl">
            Will you be my Valentine ?
          </h2>
          <Image src="/cat2.gif" height={400} width={400} alt="cat gif" />
        </div>
      </div>
      <div className=" flex gap-7 mt-10">
        <button
          className="border rounded-full bg-red-500  px-20 py-3 max-md:py-2 max-md:px-10"
          onClick={() => setProposal("yes")}
        >
          Yes
        </button>
        <button
          className="border-2 border-red-500 rounded-full px-20 py-3 text-red-500  max-md:py-2 max-md:px-10"
          onClick={() => setProposal("no")}
        >
          No
        </button>
      </div>
    </>
  );
};

export default BackIndex;
