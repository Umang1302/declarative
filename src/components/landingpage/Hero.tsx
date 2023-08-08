"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center h-[800px] overflow-hidden">
      <div className="relative z-30 -mt-[8rem] 2xl:mt-[-19rem] rounded-xl flex flex-col justify-center items-center">
        <p className="2xl:text-[60px] text-[72px]">
          Manage your Data assets with ease at scale
        </p>
        <p className="text-[24px] 2xl:text-[20px]">
          Convert your data into{" "}
          <span className="text-[#4D91FF] ">Observable </span>
          Business aligned Data Products in minutes
        </p>
      </div>
      <video autoPlay loop muted className="absolute lg:top-[-3rem] xl:top-[-6rem] 2xl:top-[-5.5rem] 3xl:top-0 z-10 w-[150vw] h-[700px]">
        <source src="/landingPage/Homevideo-Comp.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
