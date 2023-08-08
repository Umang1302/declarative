"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Section1() {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-x-12 items-center px-3">
      <div className="w-[30%]">
        <p className="text-[20px] border-[#8E8E8E] border-l-2 px-3">
          Complement your Data Engineering and Analytics efforts with 
          <span className="text-[#4D91FF]">
           {" "}Dome{" "} 
          </span>
           to
          achieve your data driven outcomes in a responsible way Apply
          Industry&apos;s best Data Management frameworks and regulatory policies to
          your engineered Data using simple & declarative management Intents
          With Dome, Data Management is indeed easy
        </p>
      </div>
      <div>
        <div className="relative w-[500px] h-[514px] cursor-pointer">
          <Image src="/landingPage/2.svg" alt="brand" fill />
        </div>
      </div>
    </div>
  );
}
