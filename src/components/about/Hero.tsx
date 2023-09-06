"use client";

import { Cabin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const cabin = Cabin({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div>
      <div className="sm:hidden lg:flex w-full justify-center mt-[-3rem]">
        <div className="max-w-[1480px]">
          <div className="relative w-[1480px] h-[400px]">
            <Image src={`/about/bg.svg`} alt="brand" fill />
          </div>
        </div>
      </div>

      <div className="sm:visible md:hidden w-full">
        <div className="w-full flex justify-center mt-[-2.3rem] mb-7">
          <div className="relative w-full h-[180px]">
            <Image src={`/about/mobBg.svg`} alt="brand" fill />
          </div>
        </div>
      </div>

      <div className="sm:hidden md:flex md:justify-center lg:hidden w-full mb-[8rem]">
        <div className="max-w-[1760px]">
          <div className="relative w-[820px] h-[180px]">
            <Image src={`/about/bg.svg`} alt="brand" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
