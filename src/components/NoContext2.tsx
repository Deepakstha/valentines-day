const NoContext2 = () => {
  return (
    <div className="relative  w-full h-full overflow-hidden">
      <video autoPlay className="object-cover  min-w-full min-h-full ">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default NoContext2;
