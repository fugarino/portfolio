"use client";

import { useRef, useState } from "react";

const MacBook = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className="bg-[#E0D7C5] relative flex col-span-7 h-[20rem] justify-center
  		rounded-lg cursor-pointer"
      onClick={() => {
        isVideoPlaying ? vidRef.current?.pause() : vidRef.current?.play();
        setIsVideoPlaying((prevState) => !prevState);
      }}
    >
      <div className="absolute z-10 xl:top-2 xl:left-2 xxl:top-8 xxl:left-8">
        {!isVideoPlaying ? (
          <picture>
            <img src="/play.svg" alt="play btn" className="w-10 h-10" />
          </picture>
        ) : (
          <picture>
            <img src="/pause.svg" alt="play btn" className="w-10 h-10" />
          </picture>
        )}
      </div>
      <div className="absolute top-2 testt">
        <picture>
          <img src="/MacBook1.png" alt="macbook" className="h-[19.5rem]" />
        </picture>
      </div>
      <div className="absolute top-[17px] w-[26rem] h-[16.6rem]">
        <video
          muted
          loop
          playsInline
          ref={vidRef}
          className="w-full h-full object-cover object-top top-0 rounded-[.5rem]"
        >
          <source src="/aiir.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MacBook;