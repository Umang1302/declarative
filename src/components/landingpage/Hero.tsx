"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const array = [
    "Observable",
    "Auditable",
    "Compliant",
    "Secure",
    "Governed",
    "Intelligent",
    "Collaborative",
  ];

  const [word, setWord, wordRef] = useStateRef(0);

  useEffect(() => {
    console.log("HHHHHHHHH");
    const i = setInterval(() => {
      let index = wordRef.current;
      if (index > 5) {
        index = 0;
      } else {
        index = wordRef.current + 1;
      }
      console.log(index);
      setWord(index);
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="sm:hidden lg:flex relative items-center justify-center h-[800px] overflow-hidden">
        <div className="relative  z-30 sm:mt-[-42rem] lg:mt-[-18rem] -mt-[8rem] 2xl:mt-[-19rem] rounded-xl flex flex-col justify-center items-center">
          <p className="sm:text-[30px] sm:text-center lg:text-[40px] 2xl:text-[60px] text-[72px] font-[700] sm:leading-9">
            Manage your Data assets with ease at scale
          </p>
          <p className="sm:text-[10px] lg:text-[24px] sm:mt-4 lg:mt-10 flex">
            Convert your data into{" "}
            <div className="text-[#4D91FF] change-text flex justify-center font-[700] animate-pulse duration-1000 lg:w-[150px] sm:w-[70px]">
              {array[wordRef.current]}{" "}
            </div>
            Business aligned Data Products in minutes.
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute sm:top-[-18rem] lg:top-[-6rem] xl:top-[-6rem] 2xl:top-[-5.5rem] 3xl:top-0 z-10 w-[150vw] h-[700px]"
        >
          <source src="/landingPage/Homevideo-Comp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="sm:visible lg:hidden relative flex items-center justify-center h-[800px] overflow-hidden">
        <div className="relative  z-30  sm:mt-[-35rem] lg:mt-[-18rem] -mt-[8rem] 2xl:mt-[-19rem] rounded-xl flex flex-col justify-center items-center">
          <p className="sm:text-[30px] sm:px-4 sm:text-center lg:text-[40px] 2xl:text-[60px] text-[72px] font-[700] sm:leading-9">
            Manage your Data assets with ease at scale
          </p>
          <p className="sm:text-[16px] text-center lg:text-[24px] sm:mt-4 lg:mt-10">
            <p className="flex w-full justify-center">
              Convert your data into{" "}
              <span className="text-[#4D91FF] change-text flex justify-center font-[700] animate-pulse duration-1000 sm:w-[100px]">
                {array[wordRef.current]}{" "}
              </span>
            </p>
            <p>Business aligned Data Products in minutes.</p>
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute sm:top-[-18rem] lg:top-[-6rem] xl:top-[-6rem] 2xl:top-[-5.5rem] 3xl:top-0 z-10 w-[150vw] h-[700px]"
        >
          <source src="/landingPage/Homevideo-Comp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
