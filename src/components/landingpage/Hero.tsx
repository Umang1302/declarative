"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";
import { Typewriter } from "react-simple-typewriter";

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
  const [counter, setCounter, counterRef] = useStateRef(0);


  return (
    <div>
      <div className="relative flex items-center justify-center h-[800px] overflow-hidden">
        <div className="relative  z-30  sm:mt-[-35rem] lg:mt-[-18rem] -mt-[8rem] 2xl:mt-[-19rem] rounded-xl flex flex-col justify-center items-center">
          <p className="sm:text-[30px] sm:px-4 sm:text-center lg:text-[40px] 2xl:text-[60px] text-[72px] font-[700] sm:leading-9">
            Manage your Data assets with ease at scale
          </p>
          <div className="sm:mt-4 lg:mt-10 lg:flex lg:justify-center text-center sm:text-[16px] lg:text-[24px]">
            <div className="flex justify-center">
              <p className="flex justify-center">Convert your data into </p>
              <span
                className={`sm:w-[100px] relative change-text font-[700] lg:w-[150px] flex justify-center 
                  ${counterRef.current % 2 ===0? 'text-[#4D91FF]':"text-[#F65A27]"
                  }
                `}
              >
                <Typewriter
                  words={array}
                  loop={10000000000}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  onType={(count)=>{

                    setCounter(count);
                    
                  }}
                  
                />
              </span>
            </div>
            <p>Business aligned Data Products in minutes.</p>
          </div>

          {/* <div className="sm:text-[16px] text-center lg:text-[24px] sm:mt-4 lg:mt-10">
            <p className="flex w-full justify-center">
              Convert your data into{" "}
              <span
                className={`lg:mx-2 change-text flex justify-center font-[700] animate-pulse sm:w-[100px] lg:w-[130px] lg:px-2 ${
                  wordRef.current % 2 === 0
                    ? "text-[#F65A27]"
                    : "text-[#4D91FF]"
                }`}
              >
                {array[wordRef.current]}{" "}
              </span>
              <p className="sm:hidden lg:flex text-center text-[24px]">
                Business aligned Data Products in minutes.
              </p>
            </p>
            <p className="sm:visible lg:hidden text-[16px]">
              Business aligned Data Products in minutes.
            </p>
          </div> */}
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute sm:top-[-18rem] lg:top-[-6rem] xl:top-[-6rem] 2xl:top-[-5.5rem] 3xl:top-0 z-10 w-[150vw] h-[700px]"
        >
          <source src="/landingPage/Homevideo-Comp.mp4" type="video/mp4" />
          <source src="/landingPage/Homevideo-Comp.m4v" type="video/x-m4v" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
